import React, { useState } from 'react';
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import housesImage from "../images/urban_houses.jpg";
import PublishIcon from '@material-ui/icons/Publish';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { CREATE_LISTING } from "../graphql/mutations"
import { useMutation } from "@apollo/react-hooks";
import CircularProgress from '@material-ui/core/CircularProgress';
import history from "../components/history";
import AlertDropdown from "../components/alert_dropdown";


export default function AddListingScreen() {
    const [createListing, createListingObject] = useMutation(CREATE_LISTING);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [bathrooms, setBathrooms] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [parish, setParish] = useState('');
    const [size, setSize] = useState('');
    const [rent, setRent] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [openAlert, setOpenAlert] = useState(false);


    const addListing = async () => {
        try {
            const response = await createListing({
                variables: {
                    data: {
                        title,
                        description,
                        bedrooms: parseInt(bedrooms),
                        bathrooms: parseInt(bathrooms),
                        address,
                        city,
                        parish: parish.toLowerCase(),
                        size: parseInt(size),
                        rent: parseInt(rent)
                    }
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
                Add Listing
            </div>
            <Row>
                <Col xs={12} lg={6}>
                    <Row id="input_fields">
                        <Col md={6}>
                            <input id="add_listing_input" type="text" placeholder="Title" onChange={(e) => {
                                setTitle(e.target.value)
                            }} />
                            <input id="add_listing_input" class="description" type="text" placeholder="Description" onChange={(e) => {
                                setDescription(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" placeholder="Bedrooms" onChange={(e) => {
                                setBedrooms(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" placeholder="Bathrooms" onChange={(e) => {
                                setBathrooms(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" placeholder="Address" onChange={(e) => {
                                setAddress(e.target.value)
                            }} />
                        </Col>
                        <Col md={6}>
                            <input id="add_listing_input" type="text" placeholder="City" onChange={(e) => {
                                setCity(e.target.value)
                            }} />
                            <input id="add_listing_input" class="description" type="text" placeholder="Parish" onChange={(e) => {
                                setParish(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" placeholder="Size" onChange={(e) => {
                                setSize(e.target.value)
                            }} />
                            <input id="add_listing_input" type="text" placeholder="Rent" onChange={(e) => {
                                setRent(e.target.value)
                            }} />
                            <div id="upload_image">
                                Upload Image
                                <IconButton id="upload_image_container" color="inherit">
                                    <PublishIcon />
                                </IconButton>
                            </div>
                        </Col>

                        <div id="buttons">

                            <Button id="save_button" variant="contained" color="primary" onClick={
                                () => {
                                    addListing()
                                }
                            }>
                                {createListingObject.loading ? <CircularProgress color="secondary" size={30} /> : "Save"}
                            </Button>

                            <Button id="cancel_button" color="default">
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