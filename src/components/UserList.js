import React from 'react';
import { Link } from 'react-router-dom';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./../redux/actions";

export const UserList = () => {
    const userList = useSelector(state => state.userReducer);
    const dispatch = useDispatch();
    const handleDelete = (data) => {
        console.log("Inside userList", data)
        dispatch(actions.deleteUser(data));
    }
    return (
        <ListGroup className="mt-4">
            {userList.map((data, index) =>
                <ListGroupItem key={index} className="d-flex">
                    <strong>{data.name}</strong>
                    <div className="ml-auto">
                        <Link className="btn btn-warning mr-1" to={{
                            pathname: "/edit",
                            state: data // your data array of objects
                        }}>Edit</Link>
                        <Button color="danger" onClick={() => handleDelete(data)}>Delete</Button>
                    </div>
                </ListGroupItem>
            )}
        </ListGroup>
    )

}
