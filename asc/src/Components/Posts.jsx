import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await fetch("")
      .then((res) => res.json(" https://asc-back.herokuapp.com/"))
      .then((res) => {
        setPosts(res);
        console.log(res);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const sortPosts = []
    .concat(posts)
    .sort((item1, item2) => (item1._id > item2._id ? 1 : -1))
    .map((post, id) => {
      return (
        <div key={post.author_id}>
          <Card style={{ width: "20rem" }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {post.author}
              </Card.Subtitle>
              <Card.Text>{post.body}</Card.Text>
              <Card.Link href={`/posts/${post.id}`}>
                Whats on your mind?
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      );
    });

  return <div className="cards">{sortPosts}</div>;
}
