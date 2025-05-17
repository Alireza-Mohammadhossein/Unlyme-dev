import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import storeTasks from "../../../tasks/utils/store";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { emails, sentEmails, deletedEmails } from '../../../../../mocks/mocks';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import defaultIcon from '../../../../../assets/images/my-services/emails/default-icon.svg';
import attachIcon from '../../../../../assets/images/my-services/emails/attach.svg';
import readIcon from '../../../../../assets/images/my-services/emails/read-mail.svg';
import unreadIcon from '../../../../../assets/images/my-services/emails/unread-mail.svg';
import trashIcon from '../../../../../assets/images/my-services/emails/trash.svg';
import archiveIcon from '../../../../../assets/images/my-services/emails/archive.svg';
import starNotIcon from '../../../../../assets/images/my-services/emails/star-not.svg';
import starActiveIcon from '../../../../../assets/images/my-services/emails/star.svg';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenEmailsWidgetModal, handleCloseEmailsWidgetModal } from '../../../../../redux/app/appsModalSlice';

import TasksPage from "../../../tasks/TasksPage";





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}



const EmailsBlock = () => {

  // Sample data for columns and tasks
  // const dataStorage = JSON.parse(window.localStorage.getItem("tasks"));
  
  // const initialState = () => {
  //   if (dataStorage) {
  //     return dataStorage;
  //   } else {
  //     window.localStorage.setItem("tasks", JSON.stringify(storeTasks));
  //     return storeTasks;
  //   }
  // };
  // const [data, setData] = useState(initialState);
  const [data, setData] = useState(emails);
  const [sent, setSent] = useState(sentEmails);
  const [deleted, setDeleted] = useState(deletedEmails);


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  


  // const dispatch = useDispatch();
  // const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  // const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  // const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  // const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  // const handleOpenEmailsModal = () => {
  //   dispatch(handleOpenEmailsWidgetModal());
  // };
  // const handleCloseEmailsModal = () => {
  //   dispatch(handleCloseEmailsWidgetModal());
  // };

  
  // const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  // const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);


  // setting modals 
  // const [anchorElSetting, setAnchorElSetting] = useState(null);
  // const open = Boolean(anchorElSetting);
  // const handleOpenSetting = (event) => {
  //   setAnchorElSetting(event.currentTarget);
  // };
  // const handleCloseSetting = () => {
  //   setAnchorElSetting(null);
  // };
  
 

  const handleOpenEmailsPopup = () => {
    const emailsButton = document.querySelector('[aria-label="Emails"]')  
    emailsButton.click();

    // const createEventButton = document.querySelector('[aria-label="calendar create event"]')
    // createEventButton.click();

    // const createEventButtonInterval = setInterval(() => {
    //   const createEventButton = document.querySelector('[tabindex="0"] [aria-label="add new card"]')

    //   if (createEventButton) {
    //     createEventButton.click();

    //     clearInterval(createEventButtonInterval)
    //   }
    // },500)

  }



  const handleStarredEmail = (clickedItem) => {
    // Toggle the 'starred' property of the clicked item
    const updatedData = data.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          starred: !item.starred, // Toggle the starred property
        };
      }
      return item;
    });

    // Update the state with the modified data
    setData(updatedData);
  };

  

  const handleReadEmail = (clickedItem) => {
    // Toggle the 'starred' property of the clicked item
    const updatedData = data.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          unread: !item.unread, // Toggle the starred property
        };
      }
      return item;
    });

    // Update the state with the modified data
    setData(updatedData);
  };


  const handleStarredSent = (clickedItem) => {
    // Toggle the 'starred' property of the clicked item
    const updatedSent = sent.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          starred: !item.starred, // Toggle the starred property
        };
      }
      return item;
    });

    // Update the state with the modified data
    setSent(updatedSent);
  };





  return (
    <>
      <div className={`my-services__emails 
        ${
          // openNotesWidgetModal || 
          appsModal 
          // openCalendarWidgetModal ||
          // openTasksWidgetModal || 
          // openWorkDriveWidgetModal 
          ? 'back-transparent' : ''}`}>
        <div className="my-services__emails_header">

          <div className="my-services__emails_header-view">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="my-services__emails_header-view_tab"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
            >
              <Tab label={<p>Inbox <span className="unread-num">3</span></p>} />
              <Tab label='Sent' />
              <Tab label='Trash' />
            </Tabs>
          </div>

          <div className="react-grid-dragHandleArea"></div>

          <div className="my-services__emails_header-more">
            <IconButton aria-label="add" onClick={handleOpenEmailsPopup}>
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="expand" onClick={handleOpenEmailsPopup}>
              <img src={expandIcon} />
            </IconButton>
          </div>
        </div>

        <div className="my-services__emails_content">
          <TabPanel value={value} index={0} className="my-services__emails_content-list">
            {data.map((item) => (
              <div key={item.id} className="my-services__emails_content-item" style={{backgroundColor: item.unread ? '#fff' : '#F5F5F5'}}>
                <div className="my-services__emails_content-item-icon">
                  {/* <img src={item.logo ? item.logo : defaultIcon} /> */}
                  <Avatar>{item.title.split('')[0]}</Avatar>
                </div>

                <div className="my-services__emails_content-item-info">
                  <p className="my-services__emails_content-item-info-title">{item.title}</p>
                  <p className="my-services__emails_content-item-info-subtitle">{item.subject}</p>
                </div>
                
                <div className="my-services__emails_content-item-attach">
                  {item.attached ? <img src={attachIcon} /> : ''}
                </div>
                
                <div className="my-services__emails_content-item-date">
                  {item.date}
                </div>
                
                <div className="my-services__emails_content-item-actions">
                  <IconButton aria-label="read" onClick={() => handleReadEmail(item)}>
                    <img src={item.unread ? unreadIcon : readIcon} />
                  </IconButton>

                  <IconButton aria-label="trash">
                    <img src={trashIcon} />
                  </IconButton>

                  <IconButton aria-label="archive">
                    <img src={archiveIcon} />
                  </IconButton>
                  
                  <IconButton aria-label="star" onClick={() => handleStarredEmail(item)}>
                    <img src={item.starred ? starActiveIcon : starNotIcon} />
                  </IconButton>
                </div>
              </div>
            ))}
          </TabPanel>
          
          <TabPanel value={value} index={1} className="my-services__emails_content-list">
            {sent.map((item) => (
              <div key={item.id} className="my-services__emails_content-item" style={{backgroundColor: item.unread ? '#fff' : '#F5F5F5'}}>
                <div className="my-services__emails_content-item-icon">
                  <img src={item.logo ? item.logo : defaultIcon} />
                </div>

                <div className="my-services__emails_content-item-info">
                  <p className="my-services__emails_content-item-info-title">{item.title}</p>
                  <p className="my-services__emails_content-item-info-subtitle">{item.subject}</p>
                </div>
                
                <div className="my-services__emails_content-item-attach">
                  {item.attached ? <img src={attachIcon} /> : ''}
                </div>
                
                <div className="my-services__emails_content-item-date">
                  {item.date}
                </div>
                
                <div className="my-services__emails_content-item-actions">
                  {/* <IconButton aria-label="read" onClick={() => handleReadEmail(item)}>
                    <img src={item.unread ? unreadIcon : readIcon} />
                  </IconButton> */}

                  <IconButton aria-label="trash">
                    <img src={trashIcon} />
                  </IconButton>

                  <IconButton aria-label="archive">
                    <img src={archiveIcon} />
                  </IconButton>
                  
                  <IconButton aria-label="star" onClick={() => handleStarredSent(item)}>
                    <img src={item.starred ? starActiveIcon : starNotIcon} />
                  </IconButton>
                </div>
              </div>
            ))}
          </TabPanel>
          
          <TabPanel value={value} index={2} className="my-services__emails_content-list">
            {deleted.map((item) => (
              <div key={item.id} className="my-services__emails_content-item trash" style={{backgroundColor: item.unread ? '#fff' : '#F5F5F5'}}>
                <div className="my-services__emails_content-item-icon">
                  <img src={item.logo ? item.logo : defaultIcon} />
                </div>

                <div className="my-services__emails_content-item-info">
                  <p className="my-services__emails_content-item-info-title">{item.title}</p>
                  <p className="my-services__emails_content-item-info-subtitle">{item.subject}</p>
                </div>
                
                <div className="my-services__emails_content-item-attach">
                  {item.attached ? <img src={attachIcon} /> : ''}
                </div>
                
                <div className="my-services__emails_content-item-date">
                  {item.date}
                </div>
                
                <div className="my-services__emails_content-item-actions">
                  {/* <IconButton aria-label="read" onClick={() => handleReadEmail(item)}>
                    <img src={item.unread ? unreadIcon : readIcon} />
                  </IconButton> */}

                  {/* <IconButton aria-label="trash">
                    <img src={trashIcon} />
                  </IconButton>

                  <IconButton aria-label="archive">
                    <img src={archiveIcon} />
                  </IconButton>
                  
                  <IconButton aria-label="star" onClick={() => handleStarredDeleted(item)}>
                    <img src={item.starred ? starActiveIcon : starNotIcon} />
                  </IconButton> */}
                </div>
              </div>
            ))}
          </TabPanel>
        </div>
      </div>



    </>
    
  );
};

export default EmailsBlock;
