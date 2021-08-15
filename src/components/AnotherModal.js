
import React,{useState} from 'react'
import {Modal,Button,ModalDialog} from 'react-bootstrap'
import Draggable from 'react-draggable';


class DraggableModalDialog extends React.Component {
	render() {
		return <Draggable handle=".modal-header"
        
        
        
        ><ModalDialog {...this.props} /></Draggable>
	}
}

function AnotherModal(props) {
    const [anotherModal, setAnotherModal] = useState(false)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogAs={DraggableModalDialog} 
      >
        <Modal.Header closeButton={true} style={{cursor:'move'}}>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <Button onClick={() => setAnotherModal(true)}>Click Me</Button>
        </Modal.Body>
        <Modal.Footer  style={{cursor:'move'}}>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        <AnotherModal show={anotherModal} onHide={()=> setAnotherModal(true)}/>
      </Modal>
    );
  }

  export default AnotherModal