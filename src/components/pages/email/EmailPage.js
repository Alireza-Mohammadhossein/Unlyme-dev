import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { mailsCategory } from '../../../mocks/mocks';
import icon from "../../../assets/images/my-services/email.png";
import './email-page.scss';
import { useSelector } from 'react-redux';
import EmailTable from './EmailTable';
import { emails } from '../../../mocks/mocks';
import EmailDetailsBar from './EmailDetailsBar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// import inboxIconActive from '../../../assets/images/email/inbox.png';
// import inboxIconNot from '../../../assets/images/email/inbox-not.png';
// import draftIconActive from '../../../assets/images/email/draft.png';
// import draftIconNot from '../../../assets/images/email/draft-not.png';
// import sentIconActive from '../../../assets/images/email/sent.png';
// import sentIconNot from '../../../assets/images/email/sent-not.png';
// import starIconActive from '../../../assets/images/email/star.png';
// import starIconNot from '../../../assets/images/email/star-not.png';

import inboxIcon from '../../../assets/images/email/inbox.svg';
import sentIcon from '../../../assets/images/email/sent.svg';
import starredIcon from '../../../assets/images/email/star-black.svg';
import trashIcon from '../../../assets/images/email/trash.svg';
import attachedIcon from '../../../assets/images/email/attached.svg';
import spamIcon from '../../../assets/images/email/spam.svg';
import draftIcon from '../../../assets/images/email/file.svg';


import arrowIcon from '../../../assets/images/email/arrow.svg';
import plusIcon from '../../../assets/images/email/plus.svg';
import settingIcon from '../../../assets/images/email/settings.svg';
import editIcon from '../../../assets/images/email/edit.svg';
import refreshIcon from '../../../assets/images/email/refresh.svg';
import readFilterIcon from '../../../assets/images/email/read-filter.svg';
import markedFilterIcon from '../../../assets/images/email/marked-filter.svg';
import ComposeEmail from './compose-email/ComposeEmail';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


function EmailPageContent() {
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);




  // start showing mail category tab
  const [showMail, setShowMail] = useState(0);
  const handleShowMail = (event, newValue) => {
    // if (event.target === event.currentTarget) {
      setShowMail(newValue);
      // setNewMailToggler(false);
    // }
  };
  // end showing chat tab

  
  // start handle category show
  const [showCategory, setShowCategory] = useState(true);
  // end handle category show
  
  // start handle single mail show
  const [activeSingleMail, setActiveSingleMail] = useState(false);
  // end handle single mail show
  
  const [searchText, setSearchText] = useState('');



  // get value of progressbar
  const totalSpace = 5000000000;
  const usedSpace = 143000000;
  const freeSpace = totalSpace - usedSpace;
  const updatedSpaceDate = '5.0.20.13';

  const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];
   
  function convertToGigaByte(x){

    let l = 0, n = parseInt(x, 10) || 0;

    while(n >= 1000 && ++l){
        n = n/1000;
    }
    
    return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
  }

  const value = calculatePercentageBetweenNumbers(usedSpace, totalSpace)
  
  function calculatePercentageBetweenNumbers(usedSpace, totalSpace) {
    // Calculate the difference between the two numbers
    const difference = totalSpace - usedSpace;
  
    // Calculate the percentage increase or decrease
    const percentage = (difference / usedSpace) * 100;
  
    return percentage;
  }

  const percentageUsed = (usedSpace / totalSpace) * 100;



  const [unreadFilter, setUnreadFilter] = useState(false);
  const [markedFilter, setMarkedFilter] = useState(false);



  const [composeEmailToggle, setComposeEmailToggle] = useState(false);

  const composeEmailHandler = () => {
    setComposeEmailToggle(true);
  }



  const [viewMode, setViewMode] = useState('first')
  const handleViewModeChange = (view) => {
    setViewMode((prevState) => view);
    
  }


  
  return (

    <div className="cloud-page">
      <div className="cloud-page__header">


        <div className='grid-content'>
            <div className='grid-content_left cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("EMAIL_PAGE.TITLE")}
              </div>
            </div>

            <div className='grid-content_right grid-content_right_email'>
              <div className='cloud-page__header_email-details'>
                <EmailDetailsBar searchText={searchText} setSearchText={setSearchText} emails={emails} viewMode={viewMode} setViewMode={setViewMode} handleViewModeChange={handleViewModeChange} />
              </div>
            </div>
        </div>


      </div>

      <div className="cloud-page__content">
        <div className='email-page'>

          <div className='grid-content'>
            <div className='grid-content_left'>
              <div className='email-page_sidebar'>
                <div className='email-page_sidebar_actions'>
                  <div className='email-page_sidebar_actions_create-event'>
                    <Button
                      startIcon={<img src={editIcon} />}
                      className="email-page_sidebar_actions_create-event_btn"
                      // onClick={handleCreateNote}
                      onClick={composeEmailHandler}
                    >
                      {t("EMAIL_PAGE.CREATE_MAIL_BUTON")}
                    </Button>

                    <Button
                      startIcon={<img src={refreshIcon} />}
                      className="email-page_sidebar_actions_create-event_refresh"
                      // onClick={handleCreateNote}
                    >
                    </Button>
                  </div>

                  <div className='email-page_sidebar_actions-section'>
                    <div className='email-page_sidebar_actions-section_category'>
                      <Tabs
                        orientation="vertical"
                        // variant="scrollable"
                        value={showMail}
                        onChange={handleShowMail}
                        aria-label="Vertical tabs example"
                        className='email-page_sidebar_actions-section_category-list'
                      >
                        {mailsCategory.map((item, index) => (
                          <Tab
                            className='email-page_sidebar_actions-section_category-item'
                            key={item.id}
                            {...a11yProps(index)}
                            component={'div'}
                            label={
                              <>
                                <div className='email-page_sidebar_actions-section_category-item_content'>
                                  {
                                    // item.title === 'Inbox' ? <img src={showMail === 0 ? inboxIconActive : inboxIconNot} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'Inbox' ? <img src={inboxIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'Sent' ? <img src={sentIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :
                                    
                                    item.title === 'Starred' ? <img src={starredIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'Trash' ? <img src={trashIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'With file' ? <img src={attachedIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    item.title === 'Spam' ? <img src={spamIcon} className='email-page_sidebar_actions-section_category-item_content-icon' /> :

                                    <img src={draftIcon} className='email-page_sidebar_actions-section_category-item_content-icon'/>
                                  }
                                    <p className='email-page_sidebar_actions-section_category-item_content-title'>{item.title}</p>
                                </div>

                                {/* {item.unreadNum > 0 ?
                                  <div className='email-page_sidebar_actions-section_category-item_unreadnum'>
                                    <p>{item.unreadNum}</p>
                                  </div>
                                  :
                                  ''
                                } */}
                                
                              </>
                            } 
                          />
                        ))}
                      
                      </Tabs>

                      {/* <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              <ListItemText primary="MORE" />
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView> */}

                      {/* <Divider /> */}

                      {/* <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              <ListItemText primary="FOLDERS" />
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView> */}

                      {/* <Divider /> */}

                      {/* <TreeView
                        aria-label="file system navigator"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<img src={arrowIcon} />}
                        className="email-page_sidebar_actions-section_category-tree"
                      >
                        <TreeItem
                          nodeId="1"
                          label={
                            <div className="email-page_sidebar_actions-section_category-tree_item">
                              <ListItemText primary="LABELS" />
                            </div>
                          }
                        >
                          <TreeItem
                            nodeId="2"
                            label={
                              <div  className="email-page_sidebar_actions-section_category-tree_item">
                                <ListItemText primary="Documents" />
                              </div>
                            } 
                          >
                          </TreeItem>
                        </TreeItem>
                      </TreeView> */}

                    </div>
                  </div>


                  <div className='email-page_sidebar_actions-filters'>
                    <ToggleButton
                      value="check"
                      selected={unreadFilter}
                      onChange={() => {
                        setUnreadFilter(!unreadFilter);
                      }}
                    >
                      <img src={readFilterIcon} alt='read filter' />
                    </ToggleButton>

                    <ToggleButton
                      value="check"
                      selected={markedFilter}
                      onChange={() => {
                        setMarkedFilter(!markedFilter);
                      }}
                    >
                      <img src={markedFilterIcon} alt='marked filter' />
                      
                    </ToggleButton>
                  </div>

                  
                </div>

                <div className="email-page_sidebar_space">
                  <LinearProgress  className="email-page_sidebar_space-progressbar" variant="determinate" value={percentageUsed} />

                  <div className="email-page_sidebar_space-text">
                    <span><b>{convertToGigaByte(usedSpace)}</b> / {convertToGigaByte(totalSpace)}</span>
                    <span>{updatedSpaceDate}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid-content_right'>
              <div className='email-page_main'>
                <div className='email-page_main_email'>
                  <TabPanel value={showMail} index={0} className='email-page_main_email-tab'>

                    {!composeEmailToggle ? 
                      <EmailTable activeSingleMail={activeSingleMail} setActiveSingleMail={setActiveSingleMail} emails={emails} searchText={searchText} setSearchText={setSearchText} viewMode={viewMode} setViewMode={setViewMode} handleViewModeChange={handleViewModeChange}/>
                      : 
                        <ComposeEmail setComposeEmailToggle={setComposeEmailToggle} />
                    }
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={1}>
                    Sent
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={2}>
                    Starred
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={3}>
                    Trash
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={4}>
                    With file
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={5}>
                    Spam
                  </TabPanel>
                  
                  <TabPanel value={showMail} index={6}>
                    Drafts
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>

        </div>  
      </div>
    </div>


  );
}


const EmailPage = () => {
  return (
    <div className="page-container">
      <EmailPageContent />
    </div>
  )
}

export default EmailPage;