import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);
   const [name, setName] = useState('');
  const [error, setError] = useState('');
  //Likes Handler
  function handleLike(id) {
    setPeople(ps =>
      ps.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }
  //Profile Handler
  function handleSubmit(e) {
    e.preventDefault();

    const trimmed = name.trim();
    const exists = people.some(
      p => p.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (!trimmed) {
      setError('Name is required.');
      return;
    }
    if (exists) {
      setError('That name already exists.');
      return;
    }

    const newProfile = {
      id: people.length ? Math.max(...people.map(p => p.id)) + 1 : 1,
      name: trimmed,
      likes: 0,
    };

    setPeople([...people, newProfile]);
    setName('');
    setError('');
  }

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      {/*Form to add profiles*/}
      <Form onSubmit={handleSubmit} className="mb-4">
        <Row className="justify-content-center">
          <Col xs={10} md={6} lg={4}>
            <Form.Control
              type="text"
              placeholder="Enter a name"
              value={name}
              onChange={e => setName(e.target.value)}
              isInvalid={!!error}
            />
            <Form.Control.Feedback type="invalid">
              {error}
            </Form.Control.Feedback>
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="success">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
 {/*Profile Handler*/} 
      <Row xs={1} md={2} lg={3}>
        {people.map(p => (
          <Col key={p.id}>
            <ProfileCard
              id={p.id}
              name={p.name}
              likes={p.likes}
              onLike={handleLike}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
