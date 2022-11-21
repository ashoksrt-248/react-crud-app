import React, { useState } from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
//import { useHistory } from "react-router-dom";

const AddUser = () => {
    //let history = useHistory();
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

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        user.push("/");
    }
    return (
        <div className='container'>
            <h1>Add user Page</h1>
            <div>
                <form onSubmit={e => onSubmit(e)}>
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
                    <Button variant='success' onClick={onSubmit} href="/home">  Add User</Button>
                </form>
            </div>

        </div>
    );
}

export default AddUser;