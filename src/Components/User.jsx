import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

function User({ user_id }) {
    const [user, setUser] = useState([])

    let userUrl = `https://asc-back.herokuapp.com/users/${user_id}`

    useEffect(() => {
        getUserWithFetch()
    },[])

    const getUserWithFetch = async () => {
        const response = await fetch(userUrl)
        const data = await response.json()
        setUser(data)
    }

return (
    <Container 
        className="mt-3">
        <Card border="warning">
            <Card.Img variant="top" src={user.picture}>
            </Card.Img>
        </Card>
    </Container>
);
}

export default User;