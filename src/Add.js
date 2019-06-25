import React from "react";
import ReactModal from './reactModal';
import 'bootstrap/dist/css/bootstrap.css';
import JsonData from './data.json';
class Add extends React.Component {
  constructor(props){
    super(props)
    const obj = {}
    JsonData.forEach( (x) =>{
      obj[x.id] = x;
    });
    this.state = {
      recordsObj: obj,
      formData: {
        id: '',
        name: '',
        category: '',
        description: ''
      },
      openModal: true
    };
  }

  changeformData = (userchangedData) =>{
    const data = this.state.recordsObj;
    data[userchangedData.id] = userchangedData;
    const fs = require('browserify-fs');
    fs.writeFile("./data.json", JSON.stringify(data, null, 4), function(err) {
        if (err) throw err;
        console.log("fgd")
    });
    console.log(data)
    this.setState({formData:userchangedData});
  }

  closeModal = (close) => {
    this.setState({ openModal: close });
  }

  render(){
    console.log(this.state.openModal);
    return(
      <div>
        {
          this.state.openModal &&
          <ReactModal book = {this.state.formData} changeformData= {this.changeformData} closeModal={this.closeModal}/>
        }
      </div>
    );
  }
}

export default Add;
