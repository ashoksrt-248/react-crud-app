import React, { useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const EditUser = () => {

    const {id} = useParams();
    const [user, setUser] = useState({
        name:"",
        userName:"",
        email:"",
        phone:"",
        website:"",
    });

    const {name,username,email,phone,website} = user;
    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`,user);
        user.push("/");
    }

    const loadUser = async e => {
        
        const result =  await axios.get(`http://localhost:3001/users/${id}`);
        setUser(result.data);
    }
    return (
        <div className='container'>
            <h1>Edit user Page</h1>
            <div>
                <form>
                    <div>
                        <input 
                            type="text"
                            placeholder='enter your name'
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder='enter your username'
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder='enter your email'
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder='enter your phone no'
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        
                        />
                    </div>
                    <div>
                        <input 
                            type="text"
                            placeholder='enter your website'
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        
                        />
                    </div>
                    <Button variant='success' onClick={onSubmit} to={`/home`}>Edit User</Button>
                </form>
            </div>

        </div>
    );
}

export default EditUser;