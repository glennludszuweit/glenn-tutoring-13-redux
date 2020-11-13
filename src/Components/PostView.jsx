import React from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function PostView() {
  const posts = useSelector((state) => state.postsReducer);

  const { title } = useParams();
  const index = posts.findIndex((post) => post.title === title);
  const post = posts[index];

  return (
    <Card className='my-3' style={{ border: 'none' }}>
      <Card.Img src={post.url} />
      <Card.Body as='h1'>{post.title}</Card.Body>
    </Card>
  );
}

export default PostView;
