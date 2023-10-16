import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MoreDetails from './MoreDetails';

function SubM({ all }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn btn-secondary col-12' style={{ marginBottom: '10px' }} onClick={handleShow}>Show Orders</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Total</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {
                all.map((e, index) => {
                  return(
                  <tr key={index}>
                    <td>{e.id}</td>
                    <td>{e.date}</td>
                    <td>{e.total}</td>
                    <td>
                      <MoreDetails data={e.items}/>
                    </td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Modal.Body>

        <Modal.Footer>


        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SubM;