import React, { useState } from "react";
import { MDBRow, MDBCol} from 'mdbreact';
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import UserBrandPageDetails from "../../AppComponents/UserComp/UserBrandPageDetails";
import UserBrandPageIcons from '../../AppComponents/UserComp/UserBrandPageIcons';
import UserFormManagerDetails from "../../AppComponents/UserComp/UserFormManagerDetails";

import WelcomeUserModal from "../../AppComponents/UserComp/UserIconModels/welcomeUserModel";
import DrinkUserModal from "../../AppComponents/UserComp/UserIconModels/drinkUserModel";
import MenuUserModal from "../../AppComponents/UserComp/UserIconModels/menuUserModel";

function UserFormPage () {

    const [modalWelcome, setModalWelcome] = useState(false);
    const [modalDrink, setModalDrink] = useState(false);
    const [modalMenu, setModalMenu] = useState(false);

    const toggleWelcome = () => { setModalWelcome(!modalWelcome); }
    const toggleDrink = () => { setModalDrink(!modalDrink); }
    const toggleMenu = () => { setModalMenu(!modalMenu); }
    
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
        brandpagewelcomedetail: [
            {
                welcomeimg:'/images/others/dff.png',
                welcometext:'Welcome to our Page. Please feel free to order and enjoy your self here.'
            }
        ]
    }

    const [brandPageIcons] = useState(
        [
            {
                id: '1',
                iconName:"heart",
                iconTitle:'Welcome',
                iconToggle: toggleWelcome,
            },
            {
                id: '2',
                iconName:"comment-alt",
                iconTitle:'Feedback',
            },
            {
                id: '3',
                iconName:"clipboard-list",
                iconTitle:'Menu',
                iconToggle: toggleMenu,
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
                iconToggle: toggleDrink,
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
                id: '19',
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
            
       <UserFormManagerDetails 
            pageDetails={brandpagedetail} />

        <WelcomeUserModal
            constName={modalWelcome}
            functionName={toggleWelcome}
            pageDetails={brandpagedetail} 
            />

        <DrinkUserModal
            constName={modalDrink}
            functionName={toggleDrink}
            />  

        <MenuUserModal
            constName={modalMenu}
            functionName={toggleMenu}
            />  
            
        </>
    );
  
}

export default UserFormPage;