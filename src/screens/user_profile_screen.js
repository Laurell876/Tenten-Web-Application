import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../components/navbar";
import { Container} from "react-bootstrap";
import modelImage from "../images/model.jpg";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { useDropzone } from "react-dropzone";
import { useQuery, useMutation } from "@apollo/react-hooks";
import PublishOutlinedIcon from "@material-ui/icons/PublishOutlined";
import { ME } from "../graphql/queries";
import LoadingScreen from "./loading_screen";
import { UPDATE_USER } from "../graphql/mutations"
import history from "../components/history";
import {URI} from "../constants";
import placeholder from "../images/placeholder.png"




export default function UserProfileScreen() {
    const [updateUser, updateUserObject] = useMutation(UPDATE_USER);
    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });
    const [selectedValue, setSelectedValue] = React.useState('m');

    const [imageToDisplay, setImageToDisplay] = useState(localStorage.getItem("currentUserImage")!= "undefined" ? localStorage.getItem("currentUserImage") : placeholder)

    const [imageToBeUploaded, setImageToBeUploaded] = useState();

    if (meResponse.loading) {
        return <LoadingScreen />
    }

    let currentUser = meResponse.data.me;

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // if the user has an image store it to local storage
    if(currentUser.image) {
        localStorage.setItem("currentUserImage", URI + currentUser.image);
    }

    function DropZone() {
        const onDrop = useCallback((acceptedFiles) => {
            setImageToBeUploaded(acceptedFiles[0]);
        });

        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop,
        });

        return (
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <IconButton id="icon_outline" >
                            <EditIcon id="edit_icon" />
                        </IconButton>
            </div>
        );
    }

    const updateUserCallback = async () => {
            await updateUser({
                variables: {
                    file: imageToBeUploaded
                }
            })
            //localStorage.setItem("currentUserImage", URL.createObjectURL(imageToBeUploaded))
            window.location.reload();
    }

    return (<div id="user_profile_screen">
        <Navbar />
        <Container id="main_container">
            <div id="user_image_and_name">
                <div id="user_image_container">
                    <img id="user_image" src={`${imageToBeUploaded ? URL.createObjectURL(imageToBeUploaded) : imageToDisplay}`} alt="image of user" />
                    <div id="edit_user_image_button">
                        <DropZone />
                    </div>
                </div>
            </div>
            <div id="user_name">{currentUser.firstName} {currentUser.lastName}</div>
            <div id="data_fields">
                <input id="first_name" class="input" placeholder="First Name" /><br />
                <input id="last_name" class="input" placeholder="Last Name" />
                <div id="birthday">
                    <div id="birthday_label">Birthday</div>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div id="gender">

                    <FormControlLabel
                        value="Male"
                        control={
                            <Radio
                                color="primary"
                                checked={selectedValue === 'm'}
                                onChange={handleChange}
                                value="m"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'M' }}
                            />
                        }
                        label="Male"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                        value="Female"
                        control={
                            <Radio
                                color="primary"
                                checked={selectedValue === 'f'}
                                onChange={handleChange}
                                value="f"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'F' }}
                            />
                        }
                        label="Female"
                        labelPlacement="end"
                    />
                </div>

                <div id="buttons">
                <Button variant="contained" color="primary" onClick={()=>{
                    updateUserCallback();
                }}>
                   Save Changes
                </Button>
                <Button id="cancel_button">
                    Cancel
                </Button>
            </div>
            </div>


        </Container>
    </div>)
}