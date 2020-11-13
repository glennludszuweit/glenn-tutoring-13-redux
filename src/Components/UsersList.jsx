import { Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function UsersList() {
  const users = useSelector((state) => state.usersReducer);

  return (
    <Row className='my-3'>
      {users.map((user) => (
        <Col lg={4}>
          <Card bg='success' className='mb-3'>
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <Card.Text> {user.email}</Card.Text>
                  <Card.Text> {user.phone}</Card.Text>
                  <Card.Text> {user.website}</Card.Text>
                  <Card.Text> {user.company.name}</Card.Text>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default UsersList;
