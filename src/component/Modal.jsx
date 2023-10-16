import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SubM from './SubM';
import Charts from './Charts';
import FullScreenModal from './FullScreenModal';

function Modale({allOrder}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='btn btn-success' onClick={handleShow}>M</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <SubM all={allOrder}/>  
          <FullScreenModal items={allOrder}/>
          </Modal.Body>    
        <Modal.Footer>       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modale;