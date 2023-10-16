import {useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function MoreDetails({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-primary' onClick={handleShow}>More Details</button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{e.id}</td>
                                        <td>{e.name}</td>
                                        <td>{e.qty}</td>
                                        <td>{e.total}</td>
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

