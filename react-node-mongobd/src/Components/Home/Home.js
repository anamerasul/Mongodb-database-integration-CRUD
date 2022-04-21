import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {

        const url = `http://localhost:5000/user`
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleuserDelete = id => {

        const procced = window.confirm("are you sure")

        if (procced) {
            // console.log('delete user', _id);

            const url = `http://localhost:5000/user/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = users.filter(user => user._id !== id);

                    setUsers(remaining)

                    console.log(data)



                    // console.log(data.deleteCount)
                })


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

                    <Link to={`update/${user._id}`}>

                        <button>UPDATE</button>

                    </Link>
                    <button onClick={() => handleuserDelete(user._id)} style={{ 'marginLeft': '8px' }}>X</button>

                </li>)
            }

        </div>
    );
};

export default Home;