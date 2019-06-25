import React from 'react';
import JsonData from './data.json';
import {Table, Button} from 'react-bootstrap';
import ReactModal from './reactModal';

class BookRecord extends React.Component {
  constructor(props) {
    super(props);
    let obj = {}
    const fs = require('browserify-fs');
    fs.readFile("./data.json", "utf-8", function(err, data) {
      if (err) throw err;
      data = JSON.parse(data);
      // console.log(data)
      Object.values(data).forEach( (x) =>{
        obj[x.id] = x;
      });
    });
    // console.log(JsonData)
    this.state = {
      recordsObj: obj,
      openModal: false,
      formData: {
        "id": '',
        "name": '',
        "category": '',
        "description": ''
      }
    };
  }

  deleteRecord(bookId){
    const data = this.state.recordsObj;
    delete data[bookId];
    const fs = require('browserify-fs');
    fs.writeFile("./data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
    });
    this.setState({recordsObj: data})
  }

  editRecord = (id) => {
    this.setState({ openModal: true, formData: this.state.recordsObj[id] })
  }

  closeModal = (close) => {
    this.setState({ openModal: close });
  }

  changeformData = (userchangedData) =>{
    const ob = this.state.recordsObj;
    ob[userchangedData.id] = userchangedData;
    let data = Object.values(ob);
    const fs = require('browserify-fs');
    fs.writeFile("/data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
      });
    this.setState({ recordsObj: ob, openModal: false });
  }

  render(){
    return(
      <div>
        {
          !this.state.openModal && Object.values(this.state.recordsObj).length > 0 &&
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DISCRIPTION</th>
                <th>CATAGORY </th>
              </tr>
            </thead>
            <tbody>
              {
                Object.values(this.state.recordsObj).map(book => {
                  return (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.description}</td>
                      <td>{book.category}</td>
                      <Button variant="warning" type="button" onClick={() => this.editRecord(book.id)} name="button" >EDIT</Button>
                      <Button variant="danger" type="button" name="button" onClick={() => this.deleteRecord(book.id)}>DELETE</Button>
                    </tr>
                  );
                })
              }
            </tbody>
          </Table>
        }
        {
          this.state.openModal &&
          <ReactModal book={this.state.formData} changeformData= {this.changeformData} closeModal={this.closeModal}/>
        }
      </div>
    );
  }
}

export default BookRecord;
