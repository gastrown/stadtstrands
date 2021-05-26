import React, { useState } from 'react';
import { 
    MDBContainer, MDBBtn, MDBIcon
  } from 'mdbreact';
import AdminNavbar from '../../AppComponents/AdminComp/AdminNavbar';
import AdminStyle from '../../AppStyles/AdminStyles.module.css';
import { Link, useHistory } from 'react-router-dom';


export default function AdminMenuDrinkManager(props) {

    const history = useHistory();

    const onChangeFile = (event) => {
        console.log('event.target.files[0]', event.target)
    }

    const [drinkList] = useState(
        [
            {
                id: '1',
                drinkImg:'/images/others/stadtstrandFeature3.jpeg',
                drinkName:'Rose Drink',
                drinkPrice:'5.00',
                drinkLink:'/edit/rose-drink'
            },
            {
                id: '2',
                drinkImg:'/images/others/stadtstrandFeature2.jpg',
                drinkName:'Pepsi',
                drinkPrice:'7.00',
                drinkLink:'/edit/pepsi'
            },
            {
                id: '3',
                drinkImg:'/images/others/stadtstrandFeature3.jpeg',
                drinkName:'Coca Cola',
                drinkPrice:'8.00',
                drinkLink:'/edit/coca-cola'
            },
            {
                id: '4',
                drinkImg:'/images/others/stadtstrandFeature1.jpeg',
                drinkName:'Lime Tea',
                drinkPrice:'3.54',
                drinkLink:'/edit/lime-tea'
            },
            {
                id: '5',
                drinkImg:'/images/others/stadtstrandFeature2.jpg',
                drinkName:'Zobo Drink',
                drinkPrice:'6.32',
                drinkLink:'/edit/zobo-drink'
            }
        ]
    );


    let drinkLists = drinkList.map( drinklist => {
        return(
            <div key={drinklist.id} className="col-md-3" id={AdminStyle.scroll_card}>
                <Link to={{
                    pathname:drinklist.drinkLink,
                    state: {
                        drinkdetail: drinklist,
                    }
                    }}>
                    <img src={drinklist.drinkImg} 
                         style={{width:'120px',height:'100px', borderRadius:'15px'}} 
                         className="img-fluid" alt="image1"  
                     />
                </Link>
                <h6 className="mt-2"><b>{drinklist.drinkName}</b></h6>
                <p style={{fontSize:'12px'}}>${drinklist.drinkPrice}</p>
                
            </div>
        );
    }
    );

    return (
        <React.Fragment>
        <MDBContainer fluid className={AdminStyle.adminbody}>
            <AdminNavbar />
        </MDBContainer>
        <MDBContainer fluid style={{height:'100vh', background:'#b5cdd9'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 text-center" style={{background:'#ffffff',borderRadius:'10px'}}>
                        
                        <div className="mt-3">
                            <h5><b>{props.location.state.title}</b></h5>
                        </div>

                        <div className="mt-3">
                            <form>
                                <div className="form-group mt-5">
                                    
                                    <input type="file" id="file" className={AdminStyle.uploadDiv} 
                                        onChange={(e) => onChangeFile(e)}/>
                                    <label htmlFor="file" className={AdminStyle.imgInputStyle}>
                                        <h6><b>Upload image</b></h6>
                                        
                                        <MDBIcon 
                                            icon="cloud-download-alt" 
                                            style={{backgroundColor:'#39729b', color:'#ffffff', padding:'5px', borderRadius:'10px'}}/>
                                       
                                    </label>
                                </div>
                                <div className="row form-group mt-4">
                                    <div className="col-md-4 mt-4">
                                        <input 
                                            placeholder="Enter item name"
                                            type="text" 
                                            className="form-control text-center" 
                                            style={{border:'1px solid #39729b',borderRadius:'20px'}} />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <input 
                                            placeholder="Enter price"
                                            type="text" 
                                            className="form-control text-center" 
                                            style={{border:'1px solid #39729b',borderRadius:'20px'}} />
                                    </div>
                                    <div className="col-md-4 mt-4">
                                        <MDBBtn
                                        type="button"
                                        color="#39729b"
                                        style={{borderRadius:'20px', backgroundColor:'#39729b', color:'#ffffff'}}
                                        className="waves-effect z-depth-1a"
                                        size="sm"
                                        >
                                        Create item
                                        </MDBBtn>
                                    </div>
                                </div>
                            </form>                             
                        </div>

                        <div className="mt-5">
                            <div className="row" id={AdminStyle.scrolling_wrapper}>
                               {drinkLists}
                            </div>
                        </div>

                        <div className="mt-5 font-small text-center pb-3">
                            <div onClick={history.goBack} className="black-text">
                                <MDBIcon icon="chevron-circle-left" /> Back 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MDBContainer>
        
        </React.Fragment>
    )
}
