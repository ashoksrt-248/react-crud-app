import React,  { useState, useEffect }from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';
import "./Home.css";

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3001/users");
        setUsers(result.data);
    }
    return (
        <div className='container'>
            <h1>Home Page</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) =>(
                        <tr>
                            <th scope="row">{index +1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <li>
                                    <Button variant="success"><a><i className="fa fa-eye"></i></a></Button>
                                    <Button variant="warning"><a><i className="fa fa-pencil"></i></a></Button>
                                    <Button variant="danger"><a><i className="fa fa-trash"></i></a></Button>
                                </li>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Home;