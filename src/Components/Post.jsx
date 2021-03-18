import React, {useEffect, useState} from 'react'
import Card from "react-bootstrap/Card";

function Post({title, body, author_id}) {
  const [authorInfo, setAuthorInfo] = useState([])

  let authorUrl = `https://asc-back.herokuapp.com/users/${author_id}`

  let slug = `users/${author_id}`

  useEffect(() => {
      getAuthorWithFetch()
  },[])

  const getAuthorWithFetch = async () => {
      const response = await fetch(authorUrl)
      const data = await response.json()
      setAuthorInfo(data)
  }

  return (
    <Card className="align-items-start mt-2 ">
      <Card.Header className="pt-1 pb-1" style={{ width: "100%" }}>
        <Card.Title className="mt-1 mb-2 float-left">{title}</Card.Title>
        <Card.Subtitle className="mb-1">
          <a href={slug}
          className="float-right mt-2 authorLinkOnPost">
            {authorInfo.username}
          </a>
        </Card.Subtitle>
      </Card.Header>
      <Card.Body className="pt-3 pb-3">
        <Card.Text className="postCardText">{body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Post;
