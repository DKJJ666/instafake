// import './style.css'
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
// import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Story() {
  return (
    // <div className="story"
    //   style={{
    //     backgroundImage: `url(${props.image})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
        
    //   }}
    // >
    //   <h2>{props.title}</h2>
    //    <Container>
    //   <Row>
    //     <Col xs={6} md={4}>
    //       <Image src="holder.js/171x180" rounded />
    //     </Col>
    //     <Col xs={6} md={4}>
    //       <Image src="holder.js/171x180" roundedCircle />
    //     </Col>
    //     <Col xs={6} md={4}>
    //       <Image src="holder.js/171x180" thumbnail />
    //     </Col>
    //   </Row>
    // </Container>
    // </div>
 <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>

  )
}


 








