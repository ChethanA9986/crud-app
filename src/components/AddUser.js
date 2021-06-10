import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../redux/actions";

export const AddUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState();
    const userList = useSelector(state => state.userReducer);
    console.log("EEEEEEEEEEEEEEEEE", userList)
    const handleName = (event) => {
        setUser(event.target.value);
    }
    const handleSubmit = (event) => {
        console.log("step1 adduser.js")
        dispatch(actions.addUser(user));
        history.goBack()
        event.preventDefault();
    }
    return (
        <Form>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" value={user} placeholder="Enter Name" onChange={handleName} />
            </FormGroup>
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
            <Link to="/" className="btn btn-danger ml-4">Cancel</Link>
        </Form>
    )
}
