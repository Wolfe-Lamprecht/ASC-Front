import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Post from './Post'

function Posts(props) {
    const [postFeed, setPostFeed] = useState([])

    let apiUrl = 'https://asc-back.herokuapp.com/'

    useEffect(() => {
        getMessagesWithFetch()
    },[])

    const getMessagesWithFetch = async () => {
        const response = await fetch(apiUrl)
        const data = await response.json()
        setPostFeed(data)
    }

    return (
        <Container 
            className="mt-3">
            {/* <h6>Posts Component</h6> */}
            {postFeed.map(post => 
                <Post
                title={post.title} 
                body={post.body}
                author_json={post.author}
                author_id={post.author_id}
                />)}
        </Container>
    );
}

export default Posts;