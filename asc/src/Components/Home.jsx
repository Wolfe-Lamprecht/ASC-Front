import { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Posts from './Posts.jsx'
import Login from './Login.jsx'
import CreateProfile from './CreateProfile.jsx'
import User from './User.jsx'
import Users from './Users.jsx'
import CreatePost from './CreatePost.jsx'
import { Route } from 'react-router-dom'

function Home(props) {


    return (
        <Container 
        className="mt-4 pb-4">
            
                <Route path="/users" component={Users} />
                <Route path="/posts" component={Posts} />
                <Route path="/new-post" component={CreatePost} />
                <Route path="/new-profile" component={CreateProfile} />
                <Route path="/Login" component={Login} />
            <h1>Home</h1>
        </Container>
    );
}

export default Home;