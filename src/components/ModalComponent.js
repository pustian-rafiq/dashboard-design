import React,{useState} from 'react'
import {Modal,Button,ModalDialog} from 'react-bootstrap'
import Draggable from 'react-draggable';
import AnotherModal from './AnotherModal'
class DraggableModalDialog extends React.Component {
	render() {
		return <Draggable handle=".modal-header"
        
        
        
        defaultPosition={{x: 0, y: 0}}
      
        grid={[25, 25]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        
        ><ModalDialog {...this.props} /></Draggable>
	}
}

function MyVerticallyCenteredModal(props) {
    const [anotherModal, setAnotherModal] = useState(false)
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dialogAs={DraggableModalDialog} 
      >
        <Modal.Header closeButton style={{cursor:'move'}}>
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
        <Modal.Footer  >
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
        <AnotherModal show={anotherModal} onHide={()=> setAnotherModal(false)}/>
      </Modal>
    );
  }
  
  function ModalComponent(props) {
   
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  
export default ModalComponent