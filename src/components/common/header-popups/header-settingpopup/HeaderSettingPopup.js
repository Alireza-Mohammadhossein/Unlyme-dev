import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import { user_info } from '../../../../mocks/mocks';
import lightIcon from '../../../../assets/images/header/theme_light.svg';
import darkIcon from '../../../../assets/images/header/theme_dark.svg';
import autoIcon from '../../../../assets/images/header/theme_auto.svg';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { signoutUser } from "../../../../redux/app/appSlice";
import { asyncToggleTheme } from '../../../../redux/app/themeSlice'; 
import { toggleSettingPopup } from '../../../../redux/app/popupSlice';


import languuageIcon from '../../../../assets/images/header/new-icons/language.svg';
import arrowDownIcon from '../../../../assets/images/header/new-icons/arrow-down.svg';
import arrowLeftIcon from '../../../../assets/images/header/new-icons/arrow-left.svg';
import closeIcon from '../../../../assets/images/header/new-icons/close.svg';
import userIcon from '../../../../assets/images/header/new-icons/user-img.svg';
import eyeOffIcon from '../../../../assets/images/header/new-icons/eye-off.svg';
import logOutIcon from '../../../../assets/images/header/new-icons/log-out.svg';
import visacardIcon from '../../../../assets/images/header/new-icons/visacard.svg';
import mastercardIcon from '../../../../assets/images/header/new-icons/mastercard.svg';
import settingsIcon from '../../../../assets/images/header/new-icons/settings.svg';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';






const HeaderSettingPopup = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const settingPopup = useSelector((state) => state.popup.settingPopupToggler);



  const [mode, setMode] = useState(darkMode ? 'dark' : 'light')


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const firstname = user_info.firstname;
  const lastname = user_info.lastname;
  const mail = user_info.mail;
  const avatar = user_info.avatar;

  // start changing theme
  const handleChangeTheme = (event, newTheme) => {
    if (newTheme !== null) {
      dispatch(asyncToggleTheme());
      setMode(newTheme);
    }
  };
  // end changing theme



  const [selectedLanguage, setSelectedLanguage] = useState('English')

  // start language menu
    const [anchorLangMenu, setAnchorLangMenu] = useState(null);
    const openLangMenu = Boolean(anchorLangMenu);
    const handleOpenLangMenu = (event) => {
      setAnchorLangMenu(event.currentTarget);
    };
    const handleCloseLangMenu = () => {
      setAnchorLangMenu(null);
    };
  // end language menu


  const [showAmount, setShowAmount] = useState(false);
  
  
  const sliderRef = useRef(null);

  const goToTopup = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(1);
    }
  };

  const goToPopup = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideTo(0);
    }
  };


  const [topupAmount, setTopupAmount] = useState(500)


  

  return (
    <Swiper ref={sliderRef} spaceBetween={50} slidesPerView={1} className='header-popup setting-popup'>
      
      <SwiperSlide className='setting-popup-list'>
        <div className='setting-popup-list__header'>
            <div className='setting-popup-list__header-title'>
              Settings
            </div>

            <div className='setting-popup-list__header-actions'>
              <div className='setting-popup-list__header-actions_language-selector'>
                <Button
                  variant="outlined"
                  startIcon={<img src={languuageIcon} alt='language'/>}
                  endIcon={<img src={arrowDownIcon} alt='arrow down'/>}
                  onClick={handleOpenLangMenu}
                >
                  {selectedLanguage}
                </Button>

                <Menu
                  // id="long-menu"
                  className="setting-popup-list__language-menu"
                  anchorEl={anchorLangMenu}
                  open={openLangMenu}
                  onClose={handleCloseLangMenu}
                  disableScrollLock = {true}
                >
                  <MenuItem
                    className='setting-popup-list__language-menu_item'
                    onClick={() => {
                      setSelectedLanguage('Français')
                      handleCloseLangMenu()
                    }}
                  >
                    <Button variant="outlined" disableRipple>
                      Français
                    </Button>
                  </MenuItem>
                  
                  <MenuItem
                    className='setting-popup-list__language-menu_item'
                    onClick={() => {
                      setSelectedLanguage('English')
                      handleCloseLangMenu()
                    }}
                  >
                    <Button variant="outlined" disableRipple>
                      English
                    </Button>
                  </MenuItem>

                </Menu>
              </div>

              <div className='setting-popup-list__header-actions_close'>
                <IconButton
                  onClick={() => 
                    // setSettingPopupToggler(false)
                    dispatch(toggleSettingPopup())
                    // handleCloseHeaderSettingPopup()
                    
                  }
                >
                  <img src={closeIcon} alt='close button' />
                </IconButton>

              </div>
            </div>
        </div>

        <div className='setting-popup-list__body'>
          <div className='setting-popup-list__body-user'>
            <img className='setting-popup-list__body-user_img' src={userIcon} alt='user image' />
            <p className='setting-popup-list__body-user_name'>Christine Dupont</p>
            <p className='setting-popup-list__body-user_email'>cd@mail.live</p>
          </div>

          <div className='setting-popup-list__body-balance'>

            <div className='setting-popup-list__body-balance_info'>
              <div className='setting-popup-list__body-balance_info-title'>
                Balance
              </div>

              <div className='setting-popup-list__body-balance_info-amount'>
                {!showAmount ? '100 CHF' : '***'}
              </div>
            </div>

            <div className='setting-popup-list__body-balance_action'>
                <IconButton onClick={() => setShowAmount(prevAmount => !prevAmount)}>
                  <img src={eyeOffIcon} alt='show amoount' />
                </IconButton>
            </div>
          </div>

          <div className='setting-popup-list__body-topup'>
            <Button onClick={goToTopup}>
              Top Up
            </Button>
          </div>
        </div>

        <div className='setting-popup-list__footer'>
          <div className='setting-popup-list__footer-options'>
            <Button startIcon={<img src={settingsIcon} alt='setting' />}>
              {t('SETTING_POPUP.SETTINGS')}
            </Button>
          </div>

          <div className='setting-popup-list__footer-options'>
            <Button
              startIcon={<img src={logOutIcon} alt='logout' />}
              onClick={() => {
                toast.info('You are about to logging out...', {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  });

                dispatch(signoutUser())
              }}   
            >
              Log out
            </Button>

          </div>
        </div> 
      </SwiperSlide>

      <SwiperSlide className='setting-popup-topup'>
        <div className='setting-popup-topup__header'>
          <div className='setting-popup-topup__header_back'>
            <IconButton onClick={goToPopup}>
              <img src={arrowLeftIcon} alt='back button' />
            </IconButton>
          </div>

          <div className='setting-popup-topup__header_title'>
            Top-Up Balance
          </div>


          <div className='setting-popup-topup__header_close'>
            <IconButton onClick={() => {
              // handleCloseHeaderSettingPopup()
              dispatch(toggleSettingPopup())

            }}>
              <img src={closeIcon} alt='close button' />
            </IconButton>
          </div>
        </div>

        <div className='setting-popup-topup__content'>
          <div className='setting-popup-topup__content_title'>
            Current balance: 100 CHF
          </div>

          <div className='setting-popup-topup__content_amount'>
            <div className='setting-popup-topup__content_amount-title'>
              <p>Amount</p>

              <p>CHF</p>
            </div>

            
            <div className='setting-popup-topup__content_amount-number'>
              <input type='number' value={topupAmount} onChange={(e) => setTopupAmount(e.target.value)} />
            </div>
          </div>


          <div className='setting-popup-topup__content_actions'>
            <Button className={`setting-popup-topup__content_actions-btn ${!topupAmount && 'disabled' }`} disabled={topupAmount ? false : true}>
              Pay
            </Button>

            <div className='setting-popup-topup__content_actions-flags'>
              <img src={visacardIcon} alt='visa card' />
              <img src={mastercardIcon} alt='master card' />
            </div>
          </div>
          
        </div>


        <div className='setting-popup-topup__footer'>
          
        </div>
      </SwiperSlide>
    </Swiper>
  )
}


export default HeaderSettingPopup;