import React from 'react';
import {Modal , Form , Button} from 'react-bootstrap';
import '../screens/LoginModal.css'

const RegisterModal = (props) => {
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
          Register Here.......
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group>
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your firstname" required />
  </Form.Group>
  <Form.Group>
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your lastname" required />
  </Form.Group>
  <Form.Group>
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Enter your phone number" required />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  required/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" minLength={6} maxLength={12} />
   </Form.Group>
   <Button variant="primary" type="submit">
     Register
   </Button>
 </Form>
       </Modal.Body>
      
     </Modal>
        </div>
    );
};

export default RegisterModal;