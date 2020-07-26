import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import modelImage from "../images/model.jpg";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

export default function UserProfileScreen() {
    const [selectedValue, setSelectedValue] = React.useState('m');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (<div id="user_profile_screen">
        <Navbar />
        <Container id="main_container">
            <div id="user_image_and_name">
                <div id="user_image_container">
                    <img id="user_image" src={modelImage} />
                    <div id="edit_user_image_button">
                        <IconButton id="icon_outline">
                            <EditIcon id="edit_icon" />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div id="user_name">Grace Campbell</div>
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
                <Button variant="contained" color="primary">
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