import React, { useState} from 'react';
import { MDBRow, MDBCol, MDBInput, MDBInputGroup, MDBBtn, MDBModal, MDBModalBody} from "mdbreact";
import NewsLetterChecker from './NewsLetterChecker';

// import Toggle from 'react-toggle';

function FormDetailFields() {

    const [fields] = useState(
        [
            {
                id: '1',
                inputtype:"text",
                placeholder:'Fullname'
            },
            {
                id: '2',
                inputtype:"text",
                placeholder:'Phone'
            },
            {
                id: '3',
                inputtype:"email",
                placeholder:'Email'
            },
            {
                id: '4',
                inputtype:"password",
                placeholder:'Password'
            },
            {
                id: '5',
                inputtype:"number",
                placeholder:'Table Number'
            },
           
        ]
    );

 

    const [modalAddField, setmodalAddField] = useState(false);

    const toggleModalAddField = () => {
        setmodalAddField(!modalAddField);
    }

    const btnStyle = {
        fontSize:'9px',
        borderRadius:'20px'
    }


    let addfields = fields.map( field => {
        return(
           
                <MDBRow>
                    <MDBCol md="6" sm="12" xs="12" >
                        <MDBRow>
                            <MDBCol size="12" className="mt-2">
                                <MDBInputGroup
                                    material
                                    containerClassName="mb-3 mt-0"
                                    type={field.inputtype}
                                    hint={field.placeholder}
                                    append={
                                        <i class="fa fa-minus-circle mt-3 ml-3"></i>
                                    }
                                />
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="6" sm="12" xs="12" >
                        <MDBRow>
                            <MDBCol size="10" className="mt-2">
                                <MDBRow>
                                    <MDBCol size="8">
                                        <MDBBtn
                                        type="button"
                                        color="blue"
                                        style={btnStyle}
                                        size="sm"
                                        >Remove Autofill</MDBBtn>
                                    </MDBCol>
                                    <MDBCol size="4">
                                        <MDBBtn
                                        type="button"
                                        outline
                                        color="blue"
                                        style={btnStyle}
                                        size="sm"
                                        >Required</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>     
           
                 
            );
        }
);


    return(
        <form className="mt-2">  
                {addfields}

                <MDBRow className="mt-3 mb-3">
                    <MDBCol md="12" sm="12" xs="12">
                        <span style={{fontSize:'22px'}} onClick={toggleModalAddField}>
                            Add new field <i  class="fa fa-plus-circle"></i>
                        </span>
                    </MDBCol>
                    <MDBModal isOpen={modalAddField} toggle={toggleModalAddField} size="sm" centered>
                     
                      <MDBModalBody>
                       
                        <div>
                          <MDBInput label="Field Name" outline size="sm" />
                        </div>


                        <div>
                        <select className="browser-default custom-select">
                            <option>Select Field Type</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        </div>

                        <div className="mt-3">
                        <MDBBtn
                          type="button"
                          color="blue"
                          style={{borderRadius:'20px'}}
                          className="waves-effect z-depth-1a"
                          size="sm"
                          >
                          Add
                        </MDBBtn>
                        </div>
                      </MDBModalBody>
                    </MDBModal>
                </MDBRow>
                
                <MDBRow className="mt-2">
                        <MDBCol md={7} sm={12} xs={12} >
                            <p>Would you like to offer to register accompanying persons?</p>
                        </MDBCol>
                        <MDBCol md={5} sm={12} xs={12} >
                            <MDBRow>
                                <MDBCol md={4} sm={4} xs={4}>
                                    <div className='custom-control custom-switch'>
                                        <input
                                        type='checkbox'
                                        className='custom-control-input'
                                        id='customSwitches'
                                        readOnly
                                        />
                                        <label className='custom-control-label' htmlFor='customSwitches'>
                                        </label>
                                    </div>
                                </MDBCol>
                               
                                <MDBCol md={4} sm={4} xs={4}>
                                    <MDBBtn
                                    type="button"
                                    outline
                                    color="blue"
                                    style={{borderRadius:'20px'}}
                                    size="sm"
                                    >Required</MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                </MDBRow>    
                
                <NewsLetterChecker />
        </form>    
    );
}

export default FormDetailFields;