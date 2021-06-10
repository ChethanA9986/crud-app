import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../redux/actions";
export const EditUser = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState(props.location.state.name)
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(actions.updateUser({ id: props.location.state.id, name: name }));
        history.goBack()
    }
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={handleChange}></Input>
            </FormGroup>
            <Button type="submit" onClick={handleSubmit}>Update Name</Button>
            <Link to="/" className="btn btn-danger ml-4">Cancel</Link>
        </Form>
    )
}
