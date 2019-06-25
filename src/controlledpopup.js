import React from 'react';
import Popup from 'reactjs-popup';

class ControlledPopup extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }
  openModal (){
    console.log("sdffadsf");
    this.setState({ open: true })
  }
  closeModal () {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.openModal}>
          Controlled Popup
        </button>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div>
            <a className="close" onClick={this.closeModal}>
            </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni
            omnis delectus nemo, maxime molestiae dolorem numquam mollitia, voluptate
            ea, accusamus excepturi deleniti ratione sapiente! Laudantium, aperiam
            doloribus. Odit, aut.
          </div>
        </Popup>
      </div>
    )
  }
}

export default ControlledPopup;
