import React from 'react';
import {  Button, Form, Modal } from 'react-bootstrap';

class FillData extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id : props.book.id,
      name : props.book.name,
      description : props.book.description,
      category : props.book.category
    };
  }

  handleid = e => {
    this.setState({id : e.target.value});
  }

  handlename = e => {
    this.setState({ name: e.target.value});
  }

  handlecategory = e =>{
    this.setState({ category: e.target.value  });
  }

  handledescription = e =>{
    this.setState({ description: e.target.value });
  }

  handlesumbit = e =>{
    this.props.changeformData(this.state);
    this.props.closeModal(false)
  }

  render(){
    return(
      <div>
        <Modal show={true} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>ID : </Form.Label>
                  <Form.Control type="text" placeholder="Book ID " value = {this.state.id} onChange = {this.handleid} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Book Name</Form.Label>
                <Form.Control type="text" placeholder="Name of Book" value = {this.state.name}
                onChange = {this.handlename}/>
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>Description :</Form.Label>
                <Form.Control type="text" placeholder="Description" value = {this.state.description}
                onChange = {this.handledescription}/>
              </Form.Group>
              <Form.Group controlId="formBasicText">
                <Form.Label>Category :</Form.Label>
                <Form.Control type="text" placeholder="Category :- like progamming" value = {this.state.category}
                onChange = {this.handlecategory} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handlesumbit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FillData;
