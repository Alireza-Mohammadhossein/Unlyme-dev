import React, { useState, useEffect } from "react";
import Header from "../common/header/Header";
import Menu from "../common/menu/Menu";
import Switcher from "../../routes";
import Spinner from "../common/spinner/Spinner";
import { GetScreenSize } from "../common/getScreenSize/GetScreenSize";
import { fetchUserInfo } from "../../redux/app/appSlice";
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from 'react-redux';
import "../../styles/sass/app.scss";
import HeaderPopups from "../common/header-popups/HeaderPopups";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "../pages/register/Register";



function App() {

  const location = useLocation();
  const isNotHome = location.pathname !== '/';


  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  const chatPopup = useSelector((state) => state.popup.chatPopupToggler);
  const emailPopup = useSelector((state) => state.popup.emailPopupToggler);
  const notePopup = useSelector((state) => state.popup.notePopupToggler);
  const notificationPopup = useSelector((state) => state.popup.notificationPopupToggler);
  const settingPopup = useSelector((state) => state.popup.settingPopupToggler);
  const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);

  const popupShow = chatPopup || emailPopup || notePopup || notificationPopup || settingPopup || assistantPopup;

  // // const defaultBrowserDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const screenSize = GetScreenSize();

  const [ready, setReady] = useState(false);
  const data = useSelector((state) => state.app);

  // const token = localStorage.getItem('token');
  const token = true;

  // console.log("app token", token);

  useEffect(() => {
    const {
      user,
      authenticated,
      fetchUserInfo,
      i18nextLanguageLoaded,
      userInfoFetching,
    } = data;
    // console.log('token', token);
    // console.log('user', user);

    // 1. If the languages are loaded
    // 2. Authorization:
    // a) If the user is authorized and data about him is received
    // b) either unauthorized
    // const readyCurrent = ((authenticated && user != null) || !authenticated) && i18nextLanguageLoaded;

    const readyCurrent = token;

    if (!token) {
      setTimeout(() => {
        window.location.href = "http://unlyme.com";
      }, 3000);
    }

    if (ready !== readyCurrent) {
      setReady(readyCurrent);
    }

    if (authenticated && user === null && !userInfoFetching) {
      dispatch(fetchUserInfo());
    }
  }, [data]);

  if(location.pathname === '/register') {
    // console.log('load')
    return(
      <Register />
    )
  } else {
      return (
        <div
          id="siteWrapper"
          className={`
            siteWrapper
            ${
              screenSize === "XXL"
                ? "siteWrapperXL"
                : screenSize === "XL"
                ? "siteWrapperXL"
                : screenSize === "LG"
                ? "siteWrapperLG"
                : screenSize === "MD"
                ? "siteWrapperMD"
                : screenSize === "SM"
                ? "siteWrapperSM"
                : "siteWrapperXS"
            }
            ${darkMode ? "dark" : ""}
          `}
        >
          {!ready && (
            <div className="be-loading be-loading-active be-loading-full-size">
              <Spinner />
            </div>
          )}
          {token && (
            <div id="be-wrapper" className="be-wrapper">
              <Header />
              <Menu screenSize={screenSize} />
              <div className={`contentWrapper ${isNotHome ? 'isnot-home' : ''} ${popupShow ? 'popup-show' : ''}`} >
                <Switcher screenSize={screenSize} />
                <HeaderPopups />
              </div>
              {/* <div className="modal-backdrop fade show" style={{ display: "none" }} /> */}
            </div>
          )}
    
          <ToastContainer />
        </div>
      );
  }


}

// const mapStateToProps = state => ({
//   userInfoFetching: state.app.userInfoFetching,
//   i18nextLanguageLoaded: state.app.i18nextLanguageLoaded,
//   authenticated: state.app.authenticated,
//   user: state.app.user,
//   token: state.app.token,
// });

// const mapDispatchToProps = {
//   fetchUserInfoAction: fetchUserInfo,
// };

export default App;
