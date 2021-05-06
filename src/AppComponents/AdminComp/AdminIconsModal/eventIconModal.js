import React,{ useState } from 'react';
import { 
    MDBModal, MDBModalBody, MDBBtn, MDBIcon
  } from 'mdbreact';
import DeactivateButton from '../../DeactivateButton';
import CreateEvent from '../../AdminComp/AdminIconsModal/createEventIconModal';


export default function EventIconModal(props) {
    const [modalCreateEvent, setModalCreateEvent] = useState(false);

    const toogleCreateEvent = () => {
        setModalCreateEvent(!modalCreateEvent);
    }

    return (
        <MDBModal isOpen={props.constName} toggle={props.functionName}  centered >
            <MDBModalBody>
            <div className="mt-1 font-small text-left">
                <div onClick={props.functionName} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                </div>
            </div>
            <h6 className="mt-2"><strong>Events</strong></h6>
            <hr/>

            <div className="form-group row mt-5">
                <div className="col-md-12 text-center">
                    <MDBBtn
                        type="button"
                        color="#39729b"
                        style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                        className="waves-effect z-depth-1a"
                        size="sm"
                        onClick={toogleCreateEvent}
                        >
                        Create event
                    </MDBBtn>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-3 ml-2" style={{width:'120px',height:'120px', borderRadius:'20px',
                background:'url("/images/others/stadtstrandFeature3.jpeg") no-repeat fixed center',opacity:'12'}}>
                    <div className="row mt-3" style={{color:'#ffffff'}}>
                        <div className="col-md-12">
                            <MDBBtn
                                type="button"
                                color="#39729b"
                                style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff',padding:'5px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"
                                >
                                Edit
                            </MDBBtn>
                             <MDBBtn
                                type="button"
                                color="#39729b"
                                style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff',padding:'5px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"
                                >
                                Delete
                            </MDBBtn>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 ml-2" style={{width:'120px',height:'120px', borderRadius:'20px',
                background:'url("/images/others/stadtstrandFeature1.jpeg") no-repeat fixed center',opacity:'12'}}>
                    <div className="row mt-3" style={{color:'#ffffff'}}>
                        <div className="col-md-12">
                            <MDBBtn
                                type="button"
                                color="#39729b"
                                style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff',padding:'5px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"
                                >
                                Edit
                            </MDBBtn>
                             <MDBBtn
                                type="button"
                                color="#39729b"
                                style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff',padding:'5px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"
                                >
                                Delete
                            </MDBBtn>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-10 offset-md-2">
                    <DeactivateButton /> 
                </div>
            </div>

            <CreateEvent
                constName={modalCreateEvent}
                functionName={toogleCreateEvent}/>

     
                
            <div className="mt-5 font-small text-center pb-3">
                <div onClick={props.functionName} className="black-text">
                    <MDBIcon icon="chevron-circle-left" /> Back 
                </div>
            </div>

            </MDBModalBody>
        </MDBModal>
    )
}
