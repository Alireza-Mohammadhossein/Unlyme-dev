import React, { useState } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
import { useTranslation } from "react-i18next";
import {
  ASSETS_URL,
  LOCAL_STORAGE_LOCALE,
  SUPPORTED_LANGUAGES,
} from "../../../types";
// import logo from "../../../assets/images/header/white-logo.svg";
import logo from "../../../assets/images/logo-new.png";
import bagIcon from "../../../assets/images/header/bag.svg";
import Tooltip from "@mui/material/Tooltip";
// import searchIcon from "../../../assets/images/header/search.gif";
import { useSelector, useDispatch } from "react-redux";
import { 
  toggleChatPopup,
  toggleEmailpopup,
  toggleNotePopup, 
  toggleNotificationPopup, 
  toggleSettingPopup, 
  toggleAssistantPopup, 
  toggleNewAssistantPopup,
  toggleSecondPopupTab, 
  setAssistantText, 
  setAssistantMessage
} from '../../../redux/app/popupSlice';
import searchIcon from "../../../assets/images/header/aiicon.png";
// import searchIcon from "../../../assets/images/header/sphere.gif";
import searchVideo from "../../../assets/images/header/transparent.mov";
import gifIcon from "../../../assets/images/header/gif-transparent.gif";
import expandIcon from "../../../assets/images/header/expand.png";
import compressIcon from "../../../assets/images/header/compress.png";
import search from "../../../assets/images/header/new-icons/search.svg";
import chatIcon from '../../../assets/images/header/new-icons/chat-icon.png';
import mailIcon from '../../../assets/images/header/new-icons/mails-icon.png';
import notesIcon from '../../../assets/images/header/new-icons/notes-icon.png';
import notificationIcon from '../../../assets/images/header/new-icons/notifications-icon.png';
import arrowDownIcon from '../../../assets/images/header/new-icons/arrow-down.svg';
import settingIcon from '../../../assets/images/header/new-icons/setting.png';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HeaderSettingPopup from "../header-popups/header-settingpopup/HeaderSettingPopup";




const Header = () => {
  // const userTokenStatus = useSelector((state) => state.app.token);
  const dispatch = useDispatch();

  const { t, i18n } = useTranslation();

  const setLanguage = () => {
    const newLang = _.find(SUPPORTED_LANGUAGES, (id) => id !== i18n.language);
    i18n.changeLanguage(newLang, () => {
      localStorage.setItem(LOCAL_STORAGE_LOCALE, newLang);
    });
  };

  
  // popups toggler
  const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);
  const settingPopup = useSelector((state) => state.popup.settingPopupToggler);


  const [assistantInputText, setAssistantInputText] = useState("");
  const [message, setMessage] = useState("");



  
  const [headerSettingPopup, setHeaderSettingPopup] = useState(false);
  const handleOpenHeaderSettingPopup = () => setHeaderSettingPopup(true);
  const handleCloseHeaderSettingPopup = () => setHeaderSettingPopup(false);
  


  const [selectedProject, setSelectedProject] = useState("Project One")

  // start select project menu
  const [anchorProjectMenu, setAnchorProjectMenu] = useState(null);
  const openProjectMenu = Boolean(anchorProjectMenu);
  const handleOpenProjectMenu = (event) => {
    setAnchorProjectMenu(event.currentTarget);
  };
  const handleCloseProjectMenu = () => {
    setAnchorProjectMenu(null);
  };
  // end select project menu



  const [isFullScreen, setIsFullScreen] = useState(false)


  const toggleFullscreen = () => {
    
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true)
    } else if (document.exitFullscreen) {
      setIsFullScreen(false)
      document.exitFullscreen();
    }
  }

  
  return (
    <>
      <div className="header">
        <div className="header__logo-area">
          <Link to="/" className="header__logo-area_link">
            <img
              src={logo}
              alt="Unlyme logo"
              className="header__logo-area_img"
            />
          </Link>

          <Button className='header__logo-area_btn' startIcon={<img src={bagIcon} alt="apps & services" />}>
            App & Service Store
          </Button>
        </div>

        <div className="header__details-area">
          <div className="header__details-area_projects">
            <Button
              className="header__details-area_projects-btn"
              variant="outlined"
              endIcon={<img src={arrowDownIcon} alt='arrow down'/>}
              onClick={handleOpenProjectMenu}
            >
              {selectedProject}
            </Button>

            <Menu
              // id="long-menu"
              className="header__details-area_projects-menu"
              anchorEl={anchorProjectMenu}
              open={openProjectMenu}
              onClose={handleCloseProjectMenu}
              disableScrollLock = {true}
            >
              <MenuItem
                className={`header__details-area_projects-menu_item ${selectedProject === 'Project One' ? 'active' : null}`}
                onClick={() => {
                  setSelectedProject('Project One')
                  handleCloseProjectMenu()
                }}
              >
                <Button variant="outlined" disableRipple>
                  Project One
                </Button>
              </MenuItem>

              <MenuItem
                className={`header__details-area_projects-menu_item ${selectedProject === 'Project Two' ? 'active' : null}`}
                onClick={() => {
                  setSelectedProject('Project Two')
                  handleCloseProjectMenu()
                }}
              >
                <Button variant="outlined" disableRipple>
                  Project Two
                </Button>
              </MenuItem>
              
              <MenuItem
                className={`header__details-area_projects-menu_item ${selectedProject === 'Project Three' ? 'active' : null}`}
                onClick={() => {
                  setSelectedProject('Project Three')
                  handleCloseProjectMenu()
                }}
              >
                <Button variant="outlined" disableRipple>
                  Project Three
                </Button>
              </MenuItem>

            </Menu>
          </div>
          <div className="header__details-area_searchbar">
            <form
              onSubmit={(e) => {
                e.preventDefault();

                if (!assistantPopup) {
                  dispatch(toggleAssistantPopup());
                  dispatch(toggleNewAssistantPopup())
                  dispatch(setAssistantMessage(assistantInputText))
                  setAssistantInputText("");
                  dispatch(toggleSecondPopupTab())
                }
              }}
            >

              <div className="header__details-area_searchbar_container">
                {/* <label><img src={search} /></label> */}
                {/* <input
                  className="header__details-area_searchbar-input"
                  placeholder={t("HEADER.SEARCH_PLACEHOLDER")}
                  // InputProps={{ "aria-label": "search" }}
                  value={assistantInputText}
                  onChange={(e) => {
                    // dispatch(setAssistantText(e.target.value))
                    setAssistantInputText(e.target.value);
                  }}
                /> */}

                <div
                  className="header__details-area_searchbar-globe"
                  onClick={() => {
                    dispatch(toggleAssistantPopup())
                  }}
                >
                  <Tooltip
                    title="Unlyme Assistant"
                    arrow
                    // visible
                    placement="bottom"
                    className="tooltip">
                    <img src={searchIcon} alt="assistant" />
                    
                    {/* <video 
                      autoPlay 
                      loop 
                      muted 
                      controls={false}
                      playsInline
                      width="30" 
                      height="30"
                    >
                      <source src={searchVideo} type="video/mov" />
                    </video> */}
                  </Tooltip>
                </div>


                <span 
                  className="header__details-area_searchbar-input"
                  onClick={() => {
                    dispatch(toggleAssistantPopup())
                  }}
                >
                  Ask Unlyme AI
                </span>

                
              </div>
            </form>
          </div>

          <div className="header__details-area_items">
            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleChatPopup())
              }}
            >
              <Tooltip title="Chat" arrow placement="bottom">
                <img
                  src={chatIcon}
                  alt="chat"
                />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleEmailpopup())
              }}
            >
              <Tooltip title="Mails" arrow placement="bottom">
                <img
                  src={mailIcon}
                  alt="mails"
                />
              </Tooltip>


            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotePopup())
              }}
            >
              <Tooltip title="Notes" arrow placement="bottom">
                <img
                  src={notesIcon}
                  alt="notes"
                  aria-label="Notes header"
                />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleNotificationPopup())
              }}
            >
              <Tooltip title="Notifications" arrow placement="bottom">
                <img
                  src={notificationIcon}
                  alt="notifications"
                />
              </Tooltip>
            </div>

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                dispatch(toggleSettingPopup())
              }}
            >
              <Tooltip title="Settings" arrow placement="bottom">
                <img
                  src={settingIcon}
                  alt="settings"
                />
              </Tooltip>
            </div>


            {isFullScreen ? 
              <div
                className="header__details-area_items-icon"
                onClick={() => {
                  toggleFullscreen()
                }}
              >
                <Tooltip title="Compress" arrow placement="bottom">
                  <img
                    src={compressIcon}
                    alt="compress"
                  />
                </Tooltip>
              </div>
            :

            <div
              className="header__details-area_items-icon"
              onClick={() => {
                toggleFullscreen()
              }}
            >
              <Tooltip title="Expand" arrow placement="bottom">
                <img
                  src={expandIcon}
                  alt="expand"
                />
              </Tooltip>
            </div>

            }
            
            
          </div>
        </div>
      </div>
      
    </>
  );
};


export default Header;
