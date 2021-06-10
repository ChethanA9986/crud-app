import React from 'react';
import { Heading } from './Heading';
import { UserList } from './UserList';
import { useSelector, useDispatch } from "react-redux";

export const Home = () => {
    const userList = useSelector(state => state.userReducer.userList);
    console.log("RRRRRRRRRRRRRRRRRRRRRR", userList)
    return (
        <div>
            <Heading />
            <UserList />
        </div>
    )
}
