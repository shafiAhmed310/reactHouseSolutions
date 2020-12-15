import React ,{useState} from 'react';
import {Modal , Form , Button} from 'react-bootstrap';
import '../screens/LoginModal.css';
import RegisterModal from './RegisterModal';
const LoginModal = (props) => {
  const [modalShow, setModalShow] = useState(false);
    return (
        <div>
              <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Login Here.......
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password"  />
  </Form.Group>
  <Form.Group>
    <p>If you are not registered .<a className="register" href="#" onClick={() => setModalShow(true)}> Register Here....</a></p>
    <RegisterModal show={modalShow}
        onHide={() => setModalShow(false)} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
      </Modal.Body>
      
    </Modal>
        </div>
    );
};

export default LoginModal;