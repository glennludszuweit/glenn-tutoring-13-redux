import { Card, Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function PostsList() {
  const posts = useSelector((state) => state.postsReducer);
  console.log(posts);
  return (
    <Container className='w-75'>
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
                <Link to={`/posts/${post.title}`}>{post.title}</Link>
              </Card.Body>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </Container>
  );
}

export default PostsList;
