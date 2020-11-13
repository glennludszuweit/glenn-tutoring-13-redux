import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  const posts = useSelector((state) => state.postsReducer);
  const users = useSelector((state) => state.usersReducer);

  return (
    <Row>
      <Col md={6} sm={12}>
        <Card className='my-3'>
          <Card.Header
            as='h5'
            style={{ backgroundColor: '#30A745', color: '#fff' }}
          >
            Posts
          </Card.Header>
          <ListGroup>
            {posts.slice(0, 10).map((post) => (
              <ListGroup.Item>
                <Card.Body>
                  <Link to={`/posts/${post.title}`}>
                    {post.title.slice(0, 50)} ...
                  </Link>
                </Card.Body>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>
      <Col md={6} sm={12}>
        <Card className='my-3'>
          <Card.Header
            as='h5'
            style={{ backgroundColor: '#30A745', color: '#fff' }}
          >
            Users
          </Card.Header>
          <ListGroup>
            {users.map((user) => (
              <ListGroup.Item>
                <Card.Body>
                  <Link to={`/users/${user.name}`}>{user.name}</Link>
                </Card.Body>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
