import React, { useState, useEffect } from "react";
//import { usePosition } from "use-position";
import { MDBRow, MDBCol } from "mdbreact";
import UserNavbar from "../../AppComponents/UserComp/UserNavbar";
import UserBrandPageDetails from "../../AppComponents/UserComp/UserBrandPageDetails";
import UserBrandPageIcons from "../../AppComponents/UserComp/UserBrandPageIcons";
import UserFormManagerDetails from "../../AppComponents/UserComp/UserFormManagerDetails";

import WelcomeUserModal from "../../AppComponents/UserComp/UserIconModels/welcomeUserModel";
import DrinkUserModal from "../../AppComponents/UserComp/UserIconModels/drinkUserModel";
import MenuUserModal from "../../AppComponents/UserComp/UserIconModels/menuUserModel";
import SocialMediaModal from "../../AppComponents/UserComp/UserIconModels/socialMediaModel";
import ShopModal from "../../AppComponents/UserComp/UserIconModels/shopModel";
import TaxiModal from "../../AppComponents/UserComp/UserIconModels/taxiModel";
import FoodTruckModal from "../../AppComponents/UserComp/UserIconModels/foodTruckModel";
import StrandorteLocationModal from "../../AppComponents/UserComp/UserIconModels/strandorteLocationModel";
import FamilyAndFriendsModal from "../../AppComponents/UserComp/UserIconModels/familyAndFriendsModel";
import ReservationModal from "../../AppComponents/UserComp/UserIconModels/reservationModel";
import ContactModal from "../../AppComponents/UserComp/UserIconModels/contactModel";
import LostAndFoundModal from "../../AppComponents/UserComp/UserIconModels/lostAndFoundModel";
import Axios from "axios";
import { UserErrorPage } from "../../AppComponents/UserComp/UserErrorPage";

function UserFormPage(props) {
  const brandPageId = props.match.params.Brandpageid;

  //console.log(brandPageId);
  const [modalWelcome, setModalWelcome] = useState(false);
  const [modalDrink, setModalDrink] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalSocialMedia, setModalSocialMedia] = useState(false);
  const [modalShop, setModalShop] = useState(false);
  const [modalTaxi, setModalTaxi] = useState(false);
  const [modalFoodTruck, setModalFoodTruck] = useState(false);
  const [modalStrandorteLocation, setModalStrandorteLocation] = useState(false);
  const [modalFamilyAndFriends, setModalFamilyAndFriends] = useState(false);
  const [modalReservation, setModalReservation] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [modalLostAndFound, setModalLostAndFound] = useState(false);
  const [brandPageDetail, setBrandPageDetail] = useState();
  const [screenLoader, setScreenLoader] = useState(true);

  const getStatus = localStorage.getItem("formStatus");

  useEffect(() => {
    Axios.get(
      `https://stadtstrandapp.ecrdeveloper.website/api/v1/brandpage/user/${brandPageId}`
    )
      .then((response) => {
        setScreenLoader(false);
        setBrandPageDetail(response.data.data);
      })
      .catch((e) => {
        setScreenLoader(false);
      });
  }, [brandPageId, getStatus]);

  useEffect(() => {
    /////Check Form Time Status///////
    const currentDate = new Date();
    let saveDate = localStorage.getItem("saveDate");
    saveDate = new Date(saveDate);
    const fourHoursAgo = currentDate.getHours() - saveDate.getHours();
    if (fourHoursAgo > 4) {
      // localStorage.setItem("formStatus", false);
      localStorage.clear();
    }
  });

  const toggleWelcome = () => {
    setModalWelcome(!modalWelcome);
  };
  const toggleDrink = () => {
    setModalDrink(!modalDrink);
  };
  const toggleMenu = () => {
    setModalMenu(!modalMenu);
  };
  const toggleSocialMedia = () => {
    setModalSocialMedia(!modalSocialMedia);
  };
  const toggleShop = () => {
    setModalShop(!modalShop);
  };
  const toggleTaxi = () => {
    setModalTaxi(!modalTaxi);
  };
  const toggleFoodTruck = () => {
    setModalFoodTruck(!modalFoodTruck);
  };
  const toggleStrandorteLocation = () => {
    setModalStrandorteLocation(!modalStrandorteLocation);
  };
  const toggleFamilyAndFriends = () => {
    setModalFamilyAndFriends(!modalFamilyAndFriends);
  };
  const toggleReservation = () => {
    setModalReservation(!modalReservation);
  };
  const toggleContact = () => {
    setModalContact(!modalContact);
  };
  const toggleLostAndFound = () => {
    setModalLostAndFound(!modalLostAndFound);
  };

  const toggleAbout = () => {
    window.location = `/about-brandpage/${brandPageId}`;
  };

  const toggleFeedBack = () => {
    window.location = `/brand-page/feedback/${brandPageId}`;
  };

  const toggleOrders = () => {
    window.location = "/user/orders";
  };

  const toggleJobs = () => {
    window.location = "/brand-page/jobs";
  };

  const toggleEvents = () => {
    window.location = "/brand-page/events";
  };

  const [brandPageIcons] = useState([
    {
      id: "1",
      iconName: "heart",
      iconTitle: "Welcome",
      iconToggle: toggleWelcome,
    },
    {
      id: "2",
      iconName: "comment-alt",
      iconTitle: "Feedback",
      iconToggle: toggleFeedBack,
    },
    {
      id: "3",
      iconName: "clipboard-list",
      iconTitle: "Menu",
      iconToggle: toggleMenu,
    },
    {
      id: "4",
      iconName: "camera",
      iconTitle: "Social Media",
      iconToggle: toggleSocialMedia,
    },
    {
      id: "5",
      iconName: "box-open",
      iconTitle: "Lost and Found",
      iconToggle: toggleLostAndFound,
    },
    {
      id: "6",
      iconName: "cocktail",
      iconTitle: "Drink",
      iconToggle: toggleDrink,
    },
    {
      id: "7",
      iconName: "map-marker-alt",
      iconTitle: "Strandorte",
      iconToggle: toggleStrandorteLocation,
    },
    {
      id: "8",
      iconName: "phone-alt",
      iconTitle: "Contact",
      iconToggle: toggleContact,
    },
    {
      id: "9",
      iconName: "paper-plane",
      iconTitle: "Free Icon",
    },
    {
      id: "10",
      iconName: "info-circle",
      iconTitle: "About Us",
      iconToggle: toggleAbout,
    },
    {
      id: "11",
      iconName: "store",
      iconTitle: "Shop",
      iconToggle: toggleShop,
    },
    {
      id: "12",
      iconName: "users",
      iconTitle: "Family & Friends",
      iconToggle: toggleFamilyAndFriends,
    },
    {
      id: "13",
      iconName: "taxi",
      iconTitle: "Taxi",
      iconToggle: toggleTaxi,
    },
    {
      id: "14",
      iconName: "calendar-alt",
      iconTitle: "Events",
      iconToggle: toggleEvents,
    },
    {
      id: "15",
      iconName: "truck",
      iconTitle: "Food Truck",
      iconToggle: toggleFoodTruck,
    },

    {
      id: "16",
      iconName: "book-open",
      iconTitle: "Reservation",
      iconToggle: toggleReservation,
    },
    {
      id: "17",
      iconName: "toolbox",
      iconTitle: "Jobs",
      iconToggle: toggleJobs,
    },
    {
      id: "18",
      iconName: "luggage-cart",
      iconTitle: "Order",
      iconToggle: toggleOrders,
    },
    {
      id: "19",
      iconName: "cloud-download-alt",
      iconTitle: "Get Icon",
    },
  ]);

  if (brandPageDetail) {
    return (
      <React.Fragment>
        <UserNavbar />
        <UserBrandPageDetails pageDetails={brandPageDetail} />
        <MDBRow>
          <MDBCol className="text-center mt-2">
            <UserBrandPageIcons icons={brandPageIcons} />
          </MDBCol>
        </MDBRow>

        {getStatus === "true" ? (
          <span></span>
        ) : (
          <UserFormManagerDetails pageDetails={brandPageDetail} />
        )}

        <WelcomeUserModal
          constName={modalWelcome}
          functionName={toggleWelcome}
          pageDetails={brandPageDetail}
        />
        <DrinkUserModal
          constName={modalDrink}
          functionName={toggleDrink}
          pageDetails={brandPageDetail}
        />

        <MenuUserModal
          constName={modalMenu}
          functionName={toggleMenu}
          pageDetails={brandPageDetail}
        />
        <SocialMediaModal
          constName={modalSocialMedia}
          functionName={toggleSocialMedia}
          pageDetails={brandPageDetail}
        />
        <ShopModal
          constName={modalShop}
          functionName={toggleShop}
          pageDetails={brandPageDetail}
        />
        <TaxiModal
          constName={modalTaxi}
          functionName={toggleTaxi}
          pageDetails={brandPageDetail}
        />
        <FoodTruckModal
          constName={modalFoodTruck}
          functionName={toggleFoodTruck}
          pageDetails={brandPageDetail}
        />
        <StrandorteLocationModal
          constName={modalStrandorteLocation}
          functionName={toggleStrandorteLocation}
          pageDetails={brandPageDetail}
        />
        <FamilyAndFriendsModal
          constName={modalFamilyAndFriends}
          functionName={toggleFamilyAndFriends}
          pageDetails={brandPageDetail}
        />
        <ReservationModal
          constName={modalReservation}
          functionName={toggleReservation}
          pageDetails={brandPageDetail}
        />
        <ContactModal
          constName={modalContact}
          functionName={toggleContact}
          pageDetails={brandPageDetail}
        />
        <LostAndFoundModal
          constName={modalLostAndFound}
          functionName={toggleLostAndFound}
          pageDetails={brandPageDetail}
        />
      </React.Fragment>
    );
  } else {
    if (screenLoader) {
      return (
        <div className="row text-center" style={{ marginTop: "250px" }}>
          <div className="col-12">
            <div
              className="spinner-grow spinner-grow-md text-primary"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      );
    } else return <UserErrorPage errorText="Brand page not found" />;
  }
}

export default UserFormPage;
