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
import { UpcomingTodayMeetings, upcomingMeetings } from '../../../../../mocks/mocks';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import calendarIcon from '../../../../../assets/images/my-services/videoconference/calendar.svg';
import meetIcon from '../../../../../assets/images/my-services/videoconference/video.svg';
import copyIcon from '../../../../../assets/images/my-services/videoconference/copy.svg';
import editIcon from '../../../../../assets/images/my-services/videoconference/edit-3.svg';
import calendarGrayIcon from '../../../../../assets/images/my-services/videoconference/calendar-gray.svg';
import archiveIcon from '../../../../../assets/images/my-services/videoconference/archive.svg';
import deleteIcon from '../../../../../assets/images/my-services/videoconference/trash.svg';
import emptyListIcon from '../../../../../assets/images/my-services/videoconference/emptylist.svg';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector, useDispatch } from "react-redux";
import { handleOpenEmailsWidgetModal, handleCloseEmailsWidgetModal } from '../../../../../redux/app/appsModalSlice';

import TasksPage from "../../../tasks/TasksPage";
import { Button } from "@mui/material";





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



const VideoConferencingBlock = () => {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

 

  const handleOpenVideoConferencingPopup = () => {
    const videoConferencingButton = document.querySelector('[aria-label="Video Conferencing"]')  
    videoConferencingButton.click();

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


  
  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <div className={`my-services__video-conference 
        ${
          // openNotesWidgetModal || 
          appsModal 
          // openCalendarWidgetModal ||
          // openTasksWidgetModal || 
          // openWorkDriveWidgetModal 
          ? 'back-transparent' : ''}`}>
        <div className="my-services__video-conference_header">

          <div className="my-services__video-conference_header-view">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="my-services__video-conference_header-view_tab"
              // variant="scrollable"
              // scrollButtons="auto"
              allowScrollButtonsMobile
              TabIndicatorProps={{
                style: { display: 'none' }
              }}
            >
              <Tab label={<p>Upcoming today <span className="unread-num">{UpcomingTodayMeetings.length}</span></p>} />
              {/* <Tab label='Sent' />
              <Tab label='Trash' /> */}
            </Tabs>
          </div>

          <div className="react-grid-dragHandleArea"></div>

          <div className="my-services__video-conference_header-more">
            <IconButton aria-label="calendar" >
              <img src={calendarIcon} />
            </IconButton>

            <IconButton aria-label="add" onClick={handleOpenVideoConferencingPopup}>
              <img src={plusIcon} />
            </IconButton>

            <IconButton aria-label="expand" onClick={handleOpenVideoConferencingPopup}>
              <img src={expandIcon} />
            </IconButton>
          </div>
        </div>

        <div className="my-services__video-conference_content">
          <TabPanel value={value} index={0} className="my-services__video-conference_content-list">
              
            {UpcomingTodayMeetings.length > 0 && 
              UpcomingTodayMeetings.map((meeting) => (
                <div className="my-services__video-conference_content-item" key={meeting.id}>
                  <div className="my-services__video-conference_content-item_icon">
                    <Avatar>{meeting.name.split('')[0][0].toLocaleUpperCase()}{meeting.name.split(' ')[1][0].toLocaleUpperCase()}</Avatar>
                  </div>

                  <div className="my-services__video-conference_content-item_details">
                    <div className="my-services__video-conference_content-item_details-name">{meeting.name}</div>
                    
                    <div className="my-services__video-conference_content-item_details-info">
                      <div className="my-services__video-conference_content-item_details-info-date">{meeting.time_from} - {meeting.time_to}</div>
                      <div className="my-services__video-conference_content-item_details-info-description">{meeting.description}</div>
                    </div>
                    
                  </div>

                  <div className="my-services__video-conference_content-item_meet">
                    <Button className="my-services__video-conference_content-item_meet-btn" >
                      Meet now
                    </Button>
                  </div>
                  
                  <div className="my-services__video-conference_content-item_actions">
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls={open ? "long-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                   
                  </div>
                </div>
              ))
            }


            {!UpcomingTodayMeetings.length > 0 && 
              <div className="my-services__video-conference_content-emptylist">
                <div className="my-services__video-conference_content-emptylist-img">
                  <img src={emptyListIcon} alt='empty list' />
                </div>

                <p className="my-services__video-conference_content-emptylist-text">
                  You don't have any conferences scheduled at Meet today.
                </p>
              </div>
            }

              
          </TabPanel>
          
          {/* <TabPanel value={value} index={1} className="my-services__video-conference_content-list">
            {sent.map((item) => (
              <div key={item.id} className="my-services__video-conference_content-item" style={{backgroundColor: item.unread ? '#fff' : '#F5F5F5'}}>
                <div className="my-services__video-conference_content-item-icon">
                  <img src={item.logo ? item.logo : defaultIcon} />
                </div>

                <div className="my-services__video-conference_content-item-info">
                  <p className="my-services__video-conference_content-item-info-title">{item.title}</p>
                  <p className="my-services__video-conference_content-item-info-subtitle">{item.subject}</p>
                </div>
                
                <div className="my-services__video-conference_content-item-attach">
                  {item.attached ? <img src={attachIcon} /> : ''}
                </div>
                
                <div className="my-services__video-conference_content-item-date">
                  {item.date}
                </div>
                
                <div className="my-services__video-conference_content-item-actions">

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
          
          <TabPanel value={value} index={2} className="my-services__video-conference_content-list">
            {deleted.map((item) => (
              <div key={item.id} className="my-services__video-conference_content-item trash" style={{backgroundColor: item.unread ? '#fff' : '#F5F5F5'}}>
                <div className="my-services__video-conference_content-item-icon">
                  <img src={item.logo ? item.logo : defaultIcon} />
                </div>

                <div className="my-services__video-conference_content-item-info">
                  <p className="my-services__video-conference_content-item-info-title">{item.title}</p>
                  <p className="my-services__video-conference_content-item-info-subtitle">{item.subject}</p>
                </div>
                
                <div className="my-services__video-conference_content-item-attach">
                  {item.attached ? <img src={attachIcon} /> : ''}
                </div>
                
                <div className="my-services__video-conference_content-item-date">
                  {item.date}
                </div>
                
                <div className="my-services__video-conference_content-item-actions">
                  
                </div>
              </div>
            ))}
          </TabPanel> */}
        </div>
      </div>


      <Menu
        // id="long-menu"
        className="videoconferenceblock-menu-popup"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock = {true}
      >
        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={meetIcon} />}>
            Meet now
          </Button>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={copyIcon} />}>
            Copy link
          </Button>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={editIcon} />}>
            View / Edit
          </Button>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={calendarGrayIcon} />}>
            Add to calendar
          </Button>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={archiveIcon} />}>
            Archive
          </Button>
        </MenuItem>

        <MenuItem
          onClick={handleClose}
        >
          <Button variant="outlined" startIcon={<img src={deleteIcon} />}>
            Delete
          </Button>
        </MenuItem>
        
      </Menu>

    </>
    
  );
};

export default VideoConferencingBlock;
