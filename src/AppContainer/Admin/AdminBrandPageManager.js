import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import AdminStyle from "../../AppStyles/AdminStyles.module.css";
import AdminNavbar from "../../AppComponents/AdminComp/AdminNavbar";
import BrandPageFormDetails from "../../AppComponents/AdminComp/AdminBrandPageComponents/BrandPageFormDetails";
import BrandPageIcons from "../../AppComponents/AdminComp/AdminBrandPageComponents/BrandPageIcons";
import { useHistory } from "react-router-dom";

import WelcomeModal from "../../AppComponents/AdminComp/AdminIconsModal/welcomeModal";
import FeedbackModal from "../../AppComponents/AdminComp/AdminIconsModal/feedbackModal";
import MenuModal from "../../AppComponents/AdminComp/AdminIconsModal/menuModal";
import FreeIconModal from "../../AppComponents/AdminComp/AdminIconsModal/freeIconModal";
import DrinkIconModal from "../../AppComponents/AdminComp/AdminIconsModal/drinkIconModal";
import SocialMediaIconModal from "../../AppComponents/AdminComp/AdminIconsModal/socialMediaIconModal";
import LostAndFoundIconModal from "../../AppComponents/AdminComp/AdminIconsModal/lostAndFoundIconModal";
import ContactIconModal from "../../AppComponents/AdminComp/AdminIconsModal/contactIconModal";
import StrandorteIconModal from "../../AppComponents/AdminComp/AdminIconsModal/strandorteIconModal";
import AboutIconModal from "../../AppComponents/AdminComp/AdminIconsModal/aboutIconModal";
import ShopIconModal from "../../AppComponents/AdminComp/AdminIconsModal/shopIconModal";
import FamilyAndFriendIconModal from "../../AppComponents/AdminComp/AdminIconsModal/familyAndFriendIconModal";
import TaxiIconModal from "../../AppComponents/AdminComp/AdminIconsModal/taxiIconModal";
import EventIconModal from "../../AppComponents/AdminComp/AdminIconsModal/eventIconModal";
import FoodTruckIconModal from "../../AppComponents/AdminComp/AdminIconsModal/foodTruckIconModal";
import ReservationIconModal from "../../AppComponents/AdminComp/AdminIconsModal/reservationIconModal";
import JobIconModal from "../../AppComponents/AdminComp/AdminIconsModal/jobIconModal";
import DeliveryBoxIconModal from "../../AppComponents/AdminComp/AdminIconsModal/deliveryBoxIconModal";
import Axios from "axios";

function AdminBrandPageManager(props) {
  const locationId = props.match.params.locationId;
  const history = useHistory();
  const [locationName, setLocationName] = useState("");

  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/admin/0/login";
  };

  useEffect(() => {
    Axios.get(
      `https://stadstrandnodeapi.herokuapp.com/api/v1/brandpagewelcome/${locationId}`
    )
      .then((response) => {
        console.log(response.data.data);
        setLocationName(response.data.data.BrandPage.name);
      })
      .catch((e) => {
        console.log(e.response);
      });
  }, []);

  const [modalWelcome, setModalWelcome] = useState(false);
  const [modalFeedback, setModalFeedback] = useState(false);
  const [modalMenu, setModalMenu] = useState(false);
  const [modalFreeIcon, setModalFreeIcon] = useState(false);
  const [modalDrinkIcon, setModalDrinkIcon] = useState(false);
  const [modalSocialMediaIcon, setModalSocialMediaIcon] = useState(false);
  const [modalLostAndFoundIcon, setModalLostAndFoundIcon] = useState(false);
  const [modalContactIcon, setModalContactIcon] = useState(false);
  const [modalStrandorteIcon, setModalStrandorteIcon] = useState(false);
  const [modalAboutIcon, setModalAboutIcon] = useState(false);
  const [modalShopIcon, setModalShopIcon] = useState(false);
  const [modalFamilyAndFriendIcon, setModalFamilyAndFriendIcon] =
    useState(false);
  const [modalTaxiIcon, setModalTaxiIcon] = useState(false);
  const [modalEventIcon, setModalEventIcon] = useState(false);
  const [modalFoodTruckIcon, setModalFoodTruckIcon] = useState(false);
  const [modalReservationIcon, setModalReservationIcon] = useState(false);
  const [modalJobIcon, setModalJobIcon] = useState(false);
  const [modalDeliveryBoxIcon, setModalDeliveryBoxIcon] = useState(false);

  const toggleWelcome = () => {
    setModalWelcome(!modalWelcome);
  };

  const toggleFeedback = () => {
    setModalFeedback(!modalFeedback);
  };

  const toggleMenu = () => {
    setModalMenu(!modalMenu);
  };

  const toggleFreeIcon = () => {
    setModalFreeIcon(!modalFreeIcon);
  };

  const toggleDrinkIcon = () => {
    setModalDrinkIcon(!modalDrinkIcon);
  };

  const toggleSocialMediaIcon = () => {
    setModalSocialMediaIcon(!modalSocialMediaIcon);
  };

  const toggleLostAndFoundIcon = () => {
    setModalLostAndFoundIcon(!modalLostAndFoundIcon);
  };

  const toggleContactIcon = () => {
    setModalContactIcon(!modalContactIcon);
  };

  const toggleStrandorteIcon = () => {
    setModalStrandorteIcon(!modalStrandorteIcon);
  };

  const toggleAboutIcon = () => {
    setModalAboutIcon(!modalAboutIcon);
  };

  const toggleShopIcon = () => {
    setModalShopIcon(!modalShopIcon);
  };

  const toggleFamilyAndFriendIcon = () => {
    setModalFamilyAndFriendIcon(!modalFamilyAndFriendIcon);
  };

  const toggleTaxiIcon = () => {
    setModalTaxiIcon(!modalTaxiIcon);
  };

  const toggleEventIcon = () => {
    setModalEventIcon(!modalEventIcon);
  };

  const toggleFoodTruckIcon = () => {
    setModalFoodTruckIcon(!modalFoodTruckIcon);
  };

  const toggleReservationIcon = () => {
    setModalReservationIcon(!modalReservationIcon);
  };

  const toggleJobIcon = () => {
    setModalJobIcon(!modalJobIcon);
  };

  const toggleDeliveryBoxIcon = () => {
    setModalDeliveryBoxIcon(!modalDeliveryBoxIcon);
  };

  const [brandIcons] = useState([
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
      iconToggle: toggleFeedback,
    },
    {
      id: "3",
      iconName: "shopping-cart",
      iconTitle: "Menu",
      iconToggle: toggleMenu,
    },
    {
      id: "4",
      iconName: "camera",
      iconTitle: "Social Media",
      iconToggle: toggleSocialMediaIcon,
    },
    {
      id: "5",
      iconName: "box-open",
      iconTitle: "Lost and Found",
      iconToggle: toggleLostAndFoundIcon,
    },
    {
      id: "6",
      iconName: "cocktail",
      iconTitle: "Drink",
      iconToggle: toggleDrinkIcon,
    },
    {
      id: "7",
      iconName: "map-marker-alt",
      iconTitle: "Strandorte",
      iconToggle: toggleStrandorteIcon,
    },
    {
      id: "8",
      iconName: "phone-alt",
      iconTitle: "Contact",
      iconToggle: toggleContactIcon,
    },
    {
      id: "9",
      iconName: "paper-plane",
      iconTitle: "Free",
      iconToggle: toggleFreeIcon,
    },
    {
      id: "10",
      iconName: "info-circle",
      iconTitle: "About",
      iconToggle: toggleAboutIcon,
    },
    {
      id: "11",
      iconName: "shopping-bag",
      iconTitle: "Shop",
      iconToggle: toggleShopIcon,
    },
    {
      id: "12",
      iconName: "users",
      iconTitle: "Family & Friends",
      iconToggle: toggleFamilyAndFriendIcon,
    },
    {
      id: "13",
      iconName: "taxi",
      iconTitle: "Taxi",
      iconToggle: toggleTaxiIcon,
    },
    {
      id: "14",
      iconName: "calendar-alt",
      iconTitle: "Events",
      iconToggle: toggleEventIcon,
    },
    {
      id: "15",
      iconName: "truck",
      iconTitle: "Food Truck",
      iconToggle: toggleFoodTruckIcon,
    },

    {
      id: "16",
      iconName: "book-open",
      iconTitle: "Reservation",
      iconToggle: toggleReservationIcon,
    },
    {
      id: "17",
      iconName: "toolbox",
      iconTitle: "Jobs",
      iconToggle: toggleJobIcon,
    },
    {
      id: "18",
      iconName: "check",
      iconTitle: "Delivery Confirmation Box",
      iconToggle: toggleDeliveryBoxIcon,
    },
  ]);

  return (
    <React.Fragment>
      <MDBContainer fluid className={AdminStyle.adminbody}>
        <AdminNavbar />
      </MDBContainer>
      <MDBContainer fluid>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="text-center mt-5">
              <BrandPageFormDetails
                locationId={locationId}
                locationName={locationName}
              />
            </MDBCol>
          </MDBRow>

          {/* Brand page Icons  */}
          <MDBRow>
            <MDBCol className="text-center mt-2">
              <BrandPageIcons icons={brandIcons} />

              <WelcomeModal
                constName={modalWelcome}
                functionName={toggleWelcome}
                locationId={locationId}
              />

              <FeedbackModal
                constName={modalFeedback}
                functionName={toggleFeedback}
              />

              <MenuModal constName={modalMenu} functionName={toggleMenu} />

              <FreeIconModal
                constName={modalFreeIcon}
                functionName={toggleFreeIcon}
              />

              <DrinkIconModal
                constName={modalDrinkIcon}
                functionName={toggleDrinkIcon}
              />

              <SocialMediaIconModal
                constName={modalSocialMediaIcon}
                functionName={toggleSocialMediaIcon}
              />

              <LostAndFoundIconModal
                constName={modalLostAndFoundIcon}
                functionName={toggleLostAndFoundIcon}
              />

              <ContactIconModal
                constName={modalContactIcon}
                functionName={toggleContactIcon}
              />

              <StrandorteIconModal
                constName={modalStrandorteIcon}
                functionName={toggleStrandorteIcon}
              />

              <AboutIconModal
                constName={modalAboutIcon}
                functionName={toggleAboutIcon}
              />

              <ShopIconModal
                constName={modalShopIcon}
                functionName={toggleShopIcon}
              />

              <FamilyAndFriendIconModal
                constName={modalFamilyAndFriendIcon}
                functionName={toggleFamilyAndFriendIcon}
              />

              <TaxiIconModal
                constName={modalTaxiIcon}
                functionName={toggleTaxiIcon}
              />

              <EventIconModal
                constName={modalEventIcon}
                functionName={toggleEventIcon}
              />

              <FoodTruckIconModal
                constName={modalFoodTruckIcon}
                functionName={toggleFoodTruckIcon}
              />

              <ReservationIconModal
                constName={modalReservationIcon}
                functionName={toggleReservationIcon}
              />

              <JobIconModal
                constName={modalJobIcon}
                functionName={toggleJobIcon}
              />

              <DeliveryBoxIconModal
                constName={modalDeliveryBoxIcon}
                functionName={toggleDeliveryBoxIcon}
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <div className="row mt-5 font-small text-center pb-3">
                <div className="col-6 black-text " onClick={history.goBack}>
                  <MDBIcon icon="chevron-circle-left" /> Back
                </div>
                <div className="col-6 black-text " onClick={logout}>
                  Log out <MDBIcon icon="sign-out-alt" />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </React.Fragment>
  );
}

export default AdminBrandPageManager;
