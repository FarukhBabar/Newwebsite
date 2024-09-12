import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Table, Container } from 'react-bootstrap';
// import './Pages/Adminside/admin.css';

const StaticListComponent = ({ data, onDelete, onEdit, editUrlBase, addProductUrl }) => {
  const [show, setShow] = React.useState(false);
  const [selectedItemId, setSelectedItemId] = React.useState(null);

  const handleDelete = () => {
    onDelete(selectedItemId);
    setShow(false);
  };

  const handleShow = (id) => {
    setSelectedItemId(id);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container className='my-4'>
      <h4 className='text-center text-warning display-4 fw-bold'>List of Products</h4>
      <Link to={addProductUrl}>
        <Button variant='success' className='mb-2'>+ Add New Product</Button>
      </Link>
      <Table striped bordered hover responsive className='text-center'>
        <thead className='table-dark'>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ind) => (
            <tr key={item._id}>
              <td>{ind + 1}</td>
              <td>{item.name}</td>
              <td dangerouslySetInnerHTML={{ __html: item.title }}></td>
              <td>{item.price}</td>
              <td>
                {item.image && (
                  <img
                    src={`https://api.homeessentialshive.co.uk/${item.image}`}  // Ensure this is the correct image path
                    alt={item.name}
                    className='img-fluid'
                    style={{ height: '70px', width: '100px' }}
                  />
                )}
              </td>
              <td>
                <Link to={`${editUrlBase}/${item._id}`} className='btn btn-success me-2'>
                  <i className='fas fa-edit'></i> Edit
                </Link>
                <Button variant='danger' onClick={() => handleShow(item._id)}>
                  <i className='fas fa-trash-alt'></i> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='danger' onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default StaticListComponent;
