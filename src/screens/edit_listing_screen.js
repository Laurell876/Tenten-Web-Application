import React from 'react';
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import housesImage from "../images/urban_houses.jpg";
import PublishIcon from '@material-ui/icons/Publish';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';



export default function AddListingScreen() {
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
                            <input id="add_listing_input" type="text" placeholder="Title" />
                            <input id="add_listing_input" class="description" type="text" placeholder="Description" />
                            <input id="add_listing_input" type="text" placeholder="Bedrooms" />
                            <input id="add_listing_input" type="text" placeholder="Bathrooms" />
                            <input id="add_listing_input" type="text" placeholder="Address" />
                        </Col>
                        <Col md={6}>
                            <input id="add_listing_input" type="text" placeholder="City" />
                            <input id="add_listing_input" class="description" type="text" placeholder="Parish" />
                            <input id="add_listing_input" type="text" placeholder="Size" />
                            <input id="add_listing_input" type="text" placeholder="Rent" />
                            <div id="upload_image">
                                Upload Image
                                <IconButton id="upload_image_container" color="inherit">
                                    <PublishIcon />
                                </IconButton>
                            </div>
                        </Col>

                        <div id="buttons">

                            <Button id="save_button" variant="contained" color="primary">
                                Save
                            </Button>

                            <Button id="cancel_button" color="default">
                                Cancel
                            </Button>

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