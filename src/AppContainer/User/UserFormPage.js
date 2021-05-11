import React, { useState } from "react";
import { MDBModal, MDBModalBody, MDBIcon, MDBInput, MDBBtn, MDBRow, MDBCol} from 'mdbreact';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import UserBrandPageDetails from "../../AppComponents/UserComp/UserBrandPageDetails";
import UserBrandPageIcons from '../../AppComponents/UserComp/UserBrandPageIcons';




function UserFormPage () {
    const [userFormModal, setUserFormModal] = useState(true);
    const [radio, setRadio] = useState(true);

    const toggleRadio= () => { 
        setRadio(!setRadio); 
    }

    const toggleForm= () => { 
        setUserFormModal(!userFormModal); 
    }

    const formInputStyle = {
        borderRadius: '20px',
        border: '1px dotted #000000',
        fontSize:'12px'
    }

    const brandpagedetail = {
        brandpagename:'Theodor-Heuss-Brucke',
        brandpageimg:'/images/others/beachparty.jpg',
        brandpagelogo:'/images/others/1674929.png',
        brandpagedescription:'These amazing cocktail bars where you can find  world class drinks. Here are our picks for the cocktail bars',
        brandpagesocialmedialink: [
            {
                facebooklink:'https://facebook.com',
                twitterlink:'https://twitter.com',
                instagramlink:'https://instagram.com'
            }
        ],
    }

    const [brandPageIcons] = useState(
        [
            {
                id: '1',
                iconName:"heart",
                iconTitle:'Welcome',
            },
            {
                id: '2',
                iconName:"comment-alt",
                iconTitle:'Feedback',
            },
            {
                id: '3',
                iconName:"shopping-cart",
                iconTitle:'Menu',
            },
            {
                id: '4',
                iconName:"camera",
                iconTitle:'Social Media',
            }, 
            {
                id: '5',
                iconName:"box-open",
                iconTitle:'Lost and Found',
            },
            {
                id: '6',
                iconName:"cocktail",
                iconTitle:'Drink',
            },
            {
                id: '7',
                iconName:"map-marker-alt",
                iconTitle:'Strandorte',
            },
            {
                id: '8',
                iconName:"phone-alt",
                iconTitle:'Contact',
            },
            {
                id: '9',
                iconName:"paper-plane",
                iconTitle:'Free Icon',
            },
            {
                id: '10',
                iconName:"info-circle",
                iconTitle:'About Us',
            },
            {
                id: '11',
                iconName:"shopping-bag",
                iconTitle:'Shop',
            },
            {
                id: '12',
                iconName:"users",
                iconTitle:'Family & Friends',
            },
            {
                id: '13',
                iconName:"taxi",
                iconTitle:'Taxi',
            },
            {
                id: '14',
                iconName:"calendar-alt",
                iconTitle:'Events',
            },
            {
                id: '15',
                iconName:"truck",
                iconTitle:'Food Truck',
            },
    
            {
                id: '16',
                iconName:"book-open",
                iconTitle:'Reservation',
            },
            {
                id: '17',
                iconName:"toolbox",
                iconTitle:'Jobs',
            },
            {
                id: '18',
                iconName:"luggage-cart",
                iconTitle:'Order',
            },
            {
                id: '18',
                iconName:"cloud-download-alt",
                iconTitle:'Get Icon',
            },
        ]
    );

   
    return (
        <>
        <UserNavbar />
        <UserBrandPageDetails 
        pageDetails={brandpagedetail} 
        />
        <MDBRow>
            <MDBCol className="text-center mt-2">
                <UserBrandPageIcons icons={brandPageIcons}/>
            </MDBCol>
        </MDBRow>
            
        <MDBModal isOpen={userFormModal} toggle={toggleForm} size="sm">
            <MDBModalBody>      
                <h5 className="text-center"><MDBIcon icon="map-marker-alt" /> {brandpagedetail.brandpagename}</h5>   
                <div className="mt-5">
                    <form>
                        <div className="form-group row">
                           <div className="col-12 col-md-12">
                                <input type="text" className="form-control" placeholder="Full Name" style={formInputStyle}/>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-12 col-md-12">
                                <input type="text" className="form-control" placeholder="Phone" style={formInputStyle}/>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-12 col-md-12">
                                <input type="email" className="form-control" placeholder="Email" style={formInputStyle}/>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-12 col-md-12">
                                <input type="password" className="form-control" placeholder="Password" style={formInputStyle}/>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-12 col-md-12">
                                <input type="number" className="form-control" placeholder="Table number" style={formInputStyle}/>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-12 col-md-12 text-center">
                                <span style={{fontSize:'12px'}}>Please enter the persons accompanying you to which you live in a household</span>   
                           </div>
                        </div>

                        <div className="form-group row">
                           <div className="col-9 col-md-9">
                                <input type="text" className="form-control" placeholder="Add member" style={formInputStyle}/>   
                           </div>
                           <div className="col-3 col-md-3 mt-2">
                           <MDBIcon icon="plus-circle" />
                           </div>
                        </div>
                       
                        <div className="form-group row mt-4">
                           <div className="col-2 col-md-2">
                            <MDBInput onClick={toggleRadio} checked={radio}  type="radio" id="radio2" style={{fontSize:'8px'}} />
                           </div>
                           <div className="col-9 col-md-9">
                            <label style={{fontSize:'11px'}}>By submitting this form, i agree to receive newsletters & updates from stadstrand</label>
                           </div>
                        </div>

                        <div className="form-group row text-center mt-3 mb-3">
                            <div className="col-5 col-md-5 mt-2 text-right">
                                <a onClick={toggleForm} href="#!" className="black-text">
                                    <MDBIcon icon="chevron-circle-left" /> Close 
                                </a>
                            </div>
                            <div className="col-6 col-md-6">
                                <MDBBtn
                                type="button"
                                color="blue"
                                style={{borderRadius:'20px'}}
                                className="waves-effect z-depth-1a"
                                size="sm"

                                >
                                finish
                                </MDBBtn>
                            </div>
                        </div>
                    </form>
                </div>         
            </MDBModalBody>
        </MDBModal>  
            
        </>
    );
  
}

export default UserFormPage;