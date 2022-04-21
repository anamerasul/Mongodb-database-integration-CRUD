import React, { useEffect, useState } from 'react';

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const url = `http://localhost:5000/user`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleuserDelete = _id => {

        const procced = window.confirm("are you sure")

        if (procced) {
            console.log('delete user', _id);

        }

        else {

            console.log('delete not')
        }


    }
    return (
        <div>
            <h1>Total user :{users.length}</h1>

            {

                users.map(user => <li key={user._id}>{user.name}::{user.email}
                    <button onClick={() => handleuserDelete(user._id)} style={{ 'marginLeft': '8px' }}>X</button>

                </li>)
            }

        </div>
    );
};

export default Home;