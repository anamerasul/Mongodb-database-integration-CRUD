import React from 'react';

const AddUser = () => {

    const handleAddUser = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email = e.target.email.value
        const user = { name, email }


        //send data to server

        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user add success')

                e.target.reset()
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }
    return (
        <div>
            <h1>Add user</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" required name='name' placeholder='name' /><br />
                <input type="email" required name='email' placeholder='email' /><br />
                <input type="submit" value="add user" />
            </form>
        </div>
    );
};

export default AddUser;