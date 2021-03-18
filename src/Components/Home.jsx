import Container from 'react-bootstrap/Container'
import Posts from './Posts_b.jsx'
import Login from './Login.jsx'
import CreateProfile from './CreateProfile.jsx'
import Users from './Users.jsx'
import User from './User.jsx'
import CreatePost from './CreatePost.jsx'
import { Route } from 'react-router-dom'

function Home(props) {

    return (
        <Container 
        className="mt-4 pb-4">
                <Route path='/home' component={Posts} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:user_id" component={User} />
                <Route path="/posts" component={Posts} />
                <Route path="/new-post" component={CreatePost} />
                <Route path="/new-profile" component={CreateProfile} />
                <Route path="/Login" component={Login} />
        </Container>
    );
}

export default Home;