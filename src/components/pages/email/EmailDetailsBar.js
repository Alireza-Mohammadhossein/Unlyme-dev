import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import { Avatar } from '@mui/material';
import Button from "@mui/material/Button";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useSelector, useDispatch} from 'react-redux';
import { handleCloseAppsModal, handleOpenAppModalIsFullPage, handleCloseAppModalIsFullPage} from '../../../redux/app/appsModalSlice';

import searchIcon from "../../../assets/images/header/new-icons/search.svg";
import settingIcon from "../../../assets/images/email/setting.svg";
import historyIcon from "../../../assets/images/email/history.svg";
import avatarIcon from "../../../assets/images/email/avatar.svg";
import aIcon from "../../../assets/images/email/A.svg";
import alIcon from "../../../assets/images/email/AL.svg";
import inIcon from "../../../assets/images/email/IN.svg";
import expandIcon from '../../../assets/images/header/expand.png';
import compressIcon from '../../../assets/images/header/compress.png';
import firstViewIcon from "../../../assets/images/email/first-view.svg";
import secondViewIcon from "../../../assets/images/email/second-view.svg";
import thirdViewIcon from "../../../assets/images/email/third-view.svg";



const EmailDetailsBar = ({ searchText, setSearchText, emails, viewMode, setViewMode, handleViewModeChange }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  const appIsFullPage = useSelector((state) => state.appsModal.appModalIsFullPage);


  const [inputFocused, setInputFocused] = useState(false);


    
  // start filtering emails based on the search text

  const [filteredEmails, setFilteredEmails] = useState([]);
  
  useEffect(() => {
    if (!searchText) {
      setFilteredEmails([]);
    }

    if (searchText) {
      setFilteredEmails(emails.filter( email => {
        const filterValue = searchText.toLowerCase();
  
        return (
          email.title.toLowerCase().match(filterValue) ||
          email.message.toLowerCase().match(filterValue) ||
          email.subject.toLowerCase().match(filterValue)
        );
      }));
    }
  }, [searchText]);
  
  // end filtering emails based on the search text


  
  const openFullPage = () => {
    dispatch(handleOpenAppModalIsFullPage())
  }

  const closeFullPage = () => {
    dispatch(handleCloseAppModalIsFullPage())
  }



  const [anchorSetting, setAnchorSetting] = useState(null);
  const handleClickSetting = (event) => {
    setAnchorSetting(event.currentTarget);
  };
  const handleCloseSetting = () => {
    setAnchorSetting(null);
  };
  const openSetting = Boolean(anchorSetting);
  const settingID = openSetting ? 'emain-setting-popover' : undefined;





  const [view, setView] = useState('first');

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
      handleViewModeChange(newView)
    }
  };




  
  return (
    <div className='cloud-page__header_email-details_grid-content'>
      <div className='cloud-page__header_email-details_grid-content_left'>
        <div className='cloud-page__header_email-details_left_search' style={{width: inputFocused && '700px'}}>
          <FormControl>
            <div className="cloud-page__header_email-details_left_search_container">
              <label><img src={searchIcon} /></label>
              <input
                className="cloud-page__header_email-details_left_search-input"
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={inputFocused ? '' : t('EMAIL_PAGE.SEARCH_PLACEHOLDER')}
                value={searchText}
                id='emails-detailsbar-search'
                type='text'
                autocomplete="off"
                onFocus={() => setInputFocused(true)}
                onBlur={() => {
                  setTimeout(() => {
                    setInputFocused(false)
                  }, 100);
                }}
              />
              
              <span
                className='cloud-page__header_email-details_left_search-clear'
                style={{opacity: inputFocused && 1, visibility: inputFocused && 'visible', width: inputFocused && 'auto', display: inputFocused && 'inline-block'}}
                onClick={() => {
                  setSearchText('');
                  setInputFocused(false);
                  setFilteredEmails([])
                }}
              >
                Clear
              </span>

              {inputFocused && (
                <ul className='searchemail-menu-popup'>
                  <li className='searchemail-menu-popup_item' onClick={() => {
                    setSearchText('tinkoff.ru')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={historyIcon} alt='tinkoff.ru' />
                    <span>tinkoff.ru...</span>
                  </li>

                  <li className='searchemail-menu-popup_item' onClick={() => {
                    setSearchText('info@idcollect.ru')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={historyIcon} alt='info@idcollect.ru' />
                    <span>info@idcollect.ru...</span>
                  </li>

                  <li className='searchemail-menu-popup_item' onClick={() => {
                    setSearchText('marieleden')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={historyIcon} alt='marieleden' />
                    <span>marieleden...</span>
                  </li>

                  <li className='searchemail-menu-popup_item' onClick={() => {
                    setSearchText('salvador')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={historyIcon} alt='attached notes' />
                    <span>salvador...</span>
                  </li>

                  <li className='searchemail-menu-popup_item' onClick={() => {
                    setSearchText('d.lorensen@gmail.com')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={historyIcon} alt='attached notes' />
                    <span>d.lorensen@gmail.com...</span>
                  </li>

                  <li className='searchemail-menu-popup_item user' onClick={() => {
                    setSearchText('academy@fa.com')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={aIcon} alt='a icon' />
                    <div>
                      <p>academy</p>
                      <span>academy@fa.com</span>
                    </div>
                  </li>

                  <li className='searchemail-menu-popup_item user' onClick={() => {
                    setSearchText('odabundgaard@gmail.com')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={avatarIcon} alt='avatar icon' />
                    <div>
                      <p>Oda Bundgaard</p>
                      <span>odabundgaard@gmail.com</span>
                    </div>
                  </li>

                  <li className='searchemail-menu-popup_item user' onClick={() => {
                    setSearchText('odabundgaard@gmail.com')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={alIcon} alt='al icon' />
                    <div>
                      <p>alekseev</p>
                      <span>alekseev@multihost.ru</span>
                    </div>
                  </li>

                  <li className='searchemail-menu-popup_item user' onClick={() => {
                    setSearchText('odabundgaard@gmail.com')
                    // document.getElementById('emails-detailsbar-search').focus()
                  }}>
                    <img src={inIcon} alt='in icon' />
                    <div>
                      <p>info</p>
                      <span>info@artsg.com</span>
                    </div>
                  </li>
                </ul>
              )}
                
            </div>
          </FormControl>

        </div>

        {inputFocused && filteredEmails.length > 0 &&(
          <div className='cloud-page__header_email-details_left_result'>
            <div className='cloud-page__header_email-details_left_result-list'>
              {filteredEmails.map((email) => (
                <div key={email.id} className='cloud-page__header_email-details_left_result-item'>
                  <div className='cloud-page__header_email-details_left_result-item_logo'>
                    {email.logo ? 
                        <Avatar src={email.logo} alt={email.title} />
                      :
                        <Avatar>{email.title.split('')[0]}</Avatar>
                    }
                  </div>

                  <div className='cloud-page__header_email-details_left_result-item_info'>
                    <p className='cloud-page__header_email-details_left_result-item_info-title'>
                      {email.title}
                    </p>

                    <p className='cloud-page__header_email-details_left_result-item_info-email'>
                      {email.from}
                    </p>
                  </div>
                </div>
              ))}
            </div>            
          </div>
        )}
      </div>

      <div className='cloud-page__header_email-details_grid-content_right'>
        <div className='cloud-page__header_email-details_right'>
          <div className='cloud-page__header_email-details_right_setting'>
            <IconButton aria-describedby={settingID} variant="contained" onClick={handleClickSetting}>
                <img src={settingIcon} alt='setting' />
            </IconButton>

            <Popover
              className='email-setting-popup'
              id={settingID}
              open={openSetting}
              anchorEl={anchorSetting}
              onClose={handleCloseSetting}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div className='email-setting-popup__header'>
                <p>Setting</p>

                <IconButton onClick={handleCloseSetting}>
                  <CloseIcon />
                </IconButton>
              </div>

              <div className='email-setting-popup__content'>
                <p className='email-setting-popup__content-title'>Display emails</p>

                <div className='email-setting-popup__content-options'>
                  <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleView}
                    aria-label="display view"
                  >
                    <ToggleButton
                      value="first"
                      aria-label="first"
                      className='email-setting-popup__content-options_item'
                    >
                      <img src={firstViewIcon} alt='first view' />
                    </ToggleButton>
                    <ToggleButton value="second" aria-label="second" className='email-setting-popup__content-options_item'>
                      <img src={secondViewIcon} alt='second view' />
                    </ToggleButton>
                    <ToggleButton value="third" aria-label="third" className='email-setting-popup__content-options_item'>
                      <img src={thirdViewIcon} alt='third view' />
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </div>
            </Popover>
            
          </div>

          <div className='cloud-page__header_email-details_right_user'>
            <p className='cloud-page__header_email-details_right_user-name'>Jura Alexis</p>
            <p className='cloud-page__header_email-details_right_user-email'>ja@mail.live</p>
          </div>

          
          <div className='cloud-page__header_email-details_right_close'>
            <ButtonGroup variant="outlined" aria-label="actions">
              {!appIsFullPage ?
                <IconButton aria-label="expand" onClick={openFullPage}>
                    <img src={expandIcon} alt='expand' />    
                </IconButton>
                :
                <IconButton aria-label="compress" onClick={closeFullPage}>
                    <img src={compressIcon} alt='compress' />    
                </IconButton>
              }

              <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                <CloseIcon />
              </IconButton>
            </ButtonGroup>
          </div>

   
        </div>
       
      </div>
    </div>
  );
};

export default EmailDetailsBar;