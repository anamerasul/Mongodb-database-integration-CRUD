import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const { id } = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))



    }, [])


    const handleUpdateUser = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const Updateuser = { name, email }


        //send data to server

        const url = `http://localhost:5000/user/${id}`

        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Updateuser),
        })
            .then(response => response.json())
            .then(data => {

                setUser(Updateuser)
                console.log('Success:', data);
                // alert('user add success')

                e.target.reset()
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }

    // console.log(user)
    return (
        <div>
            {/* <h2>Updating user {id}</h2> */}

            <h6> Name : {user.name}</h6>
            {

                console.log(user)
            }

            <form onSubmit={handleUpdateUser}>
                <input type="text" required name='name' placeholder='name' /><br />
                <input type="email" required name='email' placeholder='email' /><br />
                <input type="submit" value="update" />
            </form>
        </div>
    );
};

export default UpdateUser;