import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import housesImage from "../images/urban_houses.jpg";
import PublishIcon from '@material-ui/icons/Publish';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { UPDATE_LISTING } from "../graphql/mutations"
import { useMutation } from "@apollo/react-hooks";
import CircularProgress from '@material-ui/core/CircularProgress';
import history from "../components/history";
import AlertDropdown from "../components/alert_dropdown";
import { useDropzone } from "react-dropzone";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";


export default function EditListingScreen({location}) {
    let listing;

    // Store Id in local storage after its passed for the first time, if the page reloads the data is retrieved from local storage
    if(location && location.listing){ // if lising id exists in location
        localStorage.setItem("listingToBeEdited", JSON.stringify(location.listing));
        listing = location.listing;
    } else {
        listing = JSON.parse(localStorage.getItem("listingToBeEdited"));
    }

    const [updateListing, updateListingObject] = useMutation(UPDATE_LISTING);

    const [title, setTitle] = useState(listing.title);
    const [description, setDescription] = useState(listing.description);
    const [bedrooms, setBedrooms] = useState(listing.bedrooms);
    const [bathrooms, setBathrooms] = useState(listing.bathrooms);
    const [address, setAddress] = useState(listing.address);
    const [city, setCity] = useState(listing.city);
    const [parish, setParish] = useState(listing.parish);
    const [size, setSize] = useState(listing.size);
    const [rent, setRent] = useState(listing.rent);
    const [errorMessage, setErrorMessage] = useState('');
    const [openAlert, setOpenAlert] = useState(false);


    let imageToBeUploaded;
    function DropZone() {
        const onDrop = useCallback((acceptedFiles) => {
            imageToBeUploaded = acceptedFiles[0];
            //console.log(acceptedFiles[0]);
        });

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
        });

        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <IconButton color="inherit" id="upload_image_container">
                    <PublishOutlinedIcon />
                </IconButton>

                {/*isDragActive ? (
        <p>Upload Image</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )*/}
            </div>
        );
    }

    const updateListingCallback = async () => {
        try {
            const response = await updateListing({
                variables: {
                    data: {
                        id: listing._id,
                        title,
                        description,
                        bedrooms: parseInt(bedrooms),
                        bathrooms: parseInt(bathrooms),
                        address,
                        city,
                        parish: parish.toLowerCase(),
                        size: parseInt(size),
                        rent: parseInt(rent)
                    },
                    file: imageToBeUploaded
                }
            })
            history.push("/my-listings");
        } catch (e) {
            let indexWhereMessageStarts = e.message.indexOf(":") + 1;
            let userFriendlyErrorMessage = e.message.substring(indexWhereMessageStarts, e.message.length)
            setErrorMessage(userFriendlyErrorMessage);
            setOpenAlert(true)
        }


    }

    const showAlert = () => {
        return <AlertDropdown errorMessage={errorMessage} severity="error" openAlert={openAlert} closeAlert={() => {
            setOpenAlert(false);
        }} />
    }


    return (<div id="add_listing_screen">
        <Navbar />
        <Container>
            <div id="add_listing_heading">
                Edit Listing
            </div>
            <Row>
                <Col xs={12} lg={6}>
                    <Row id="input_fields">
                        <Col md={6}>
                            <input id="add_listing_input" type="text" placeholder="Title" defaultValue={title} onChange={(e) => {
                                setTitle(e.target.value)
                            }} />
                            <input id="add_listing_input" class="description" type="text" defaultValue={description} placeholder="Description" onChange={(e) => {
                                setDescription(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" defaultValue={bedrooms} placeholder="Bedrooms" onChange={(e) => {
                                setBedrooms(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" defaultValue={bathrooms} placeholder="Bathrooms" onChange={(e) => {
                                setBathrooms(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" defaultValue={address} placeholder="Address" onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                        </Col>
                        <Col md={6}>
                            <input id="add_listing_input" type="text" defaultValue={city} placeholder="City" onChange={(e) => {
                                setCity(e.target.value)
                            }} />
                            <input id="add_listing_input" class="text" defaultValue={parish} type="text" placeholder="Parish" onChange={(e) => {
                                setParish(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" defaultValue={size} placeholder="Size" onChange={(e) => {
                                setSize(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" defaultValue={rent} placeholder="Rent" onChange={(e) => {
                                setRent(e.target.value)
                            }} />
                            <div id="upload_image">
                                Upload Image
                                <DropZone />
                            </div>
                        </Col>

                        <div id="buttons">

                            <Button id="save_button" variant="contained" color="primary" onClick={
                                () => {
                                    updateListingCallback()
                                }
                            }>
                                {updateListingObject.loading ? <CircularProgress color="secondary" size={30} /> : "Save"}
                            </Button>

                            <Button id="cancel_button" color="default" onClick={
                                ()=>{
                                    history.push("/my-listings")
                                }
                            }>
                                Cancel
                            </Button>

                        </div>
                        <div id="error_dropdown_alert">
                            {showAlert()}
                        </div>
                    </Row>
                </Col>
                <Col lg={6} id="image_column">
                    <img id="add_listing_screen_image" src={housesImage} alt="houses" />
                </Col>
            </Row>
        </Container>
    </div>)
}