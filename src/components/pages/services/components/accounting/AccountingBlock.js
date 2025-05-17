import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import calendarIcon from '../../../../../assets/images/my-services/accounting/calendar.svg';
import calendarGrayIcon from '../../../../../assets/images/my-services/accounting/calendar-gray.svg';
import archiveIcon from '../../../../../assets/images/my-services/accounting/archive.svg';
import alertIcon from '../../../../../assets/images/my-services/accounting/alert.svg';
import pinIcon from '../../../../../assets/images/my-services/accounting/pin.svg';
import successIcon from '../../../../../assets/images/my-services/accounting/success.svg';
import { sampleAccountingTasks, sampleAccountingReports } from "../../../../../mocks/mocks";
import { useSelector, useDispatch } from "react-redux";
import { handleOpenEmailsWidgetModal, handleCloseEmailsWidgetModal } from '../../../../../redux/app/appsModalSlice';
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



const AccountingBlock = () => {


  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    console.log('new value', newValue)
  };

  

  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

 

  const handleOpenAccountingPopup = () => {
    // const emailsButton = document.querySelector('[aria-label="Video Conferencing"]')  
    // emailsButton.click();

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
      <div className={`my-services__accounting 
        ${
          // openNotesWidgetModal || 
          appsModal 
          // openCalendarWidgetModal ||
          // openTasksWidgetModal || 
          // openWorkDriveWidgetModal 
          ? 'back-transparent' : ''}`}>
        <div className="my-services__accounting_header">

          <div className="my-services__accounting_header-view">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="my-services__accounting_header-view_tabs"
              // variant="scrollable"
              // scrollButtons="auto"
              allowScrollButtonsMobile
              TabIndicatorProps={{
                style: { display: 'none' }
              }}
            >
              <Tab label={<p>Future</p>} />
              <Tab label={<p>Current</p>} />
              <Tab label={<p>Overdue</p>} />
            </Tabs>
          </div>

          <div className="my-services__accounting_header-due">
            Tax due: <span>3450 CHF</span>
          </div>

          <div className="react-grid-dragHandleArea"></div>

          <div className="my-services__accounting_header-more">
            <IconButton aria-label="expand" onClick={handleOpenAccountingPopup}>
              <img src={expandIcon} />
            </IconButton>
          </div>
        </div>

        <div className="my-services__accounting_content">
          <TabPanel value={value} index={0} className="my-services__accounting_content-tab">
            <div className="my-services__accounting_content-tab-container">
              <div className="my-services__accounting_content-tab_left">
                <p className="my-services__accounting_content-tab_left-title">
                  Accounting tasks
                </p>

                <div className="my-services__accounting_content-tab_left-list">
                  {
                    sampleAccountingTasks.map((item) => (
                      <div className="my-services__accounting_content-tab_left-item">
                        <div className="my-services__accounting_content-tab_left-item_info">
                          <div className="my-services__accounting_content-tab_left-item_info-icon">
                            <img src={item.iconType === 'alert' ? alertIcon : '' } alt="alert" />
                          </div>

                          <div className="my-services__accounting_content-tab_left-item_info-data">
                            <p className="my-services__accounting_content-tab_left-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_left-item_info-data_date">
                              <img src={calendarIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_left-item_actions">
                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>

              <div className="my-services__accounting_content-tab_right">
                <p className="my-services__accounting_content-tab_right-title">
                  Reporst submitted
                </p>

                <div className="my-services__accounting_content-tab_right-list">
                  {
                    sampleAccountingReports.map((item) => (
                      <div className="my-services__accounting_content-tab_right-item">
                        <div className="my-services__accounting_content-tab_right-item_info">
                          <div className="my-services__accounting_content-tab_right-item_info-icon">
                            <img src={item.iconType === 'success' ? successIcon : '' } alt="success" />
                          </div>

                          <div className="my-services__accounting_content-tab_right-item_info-data">
                            <p className="my-services__accounting_content-tab_right-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_right-item_info-data_date">
                              <img src={calendarGrayIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_right-item_actions">
                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>

          </TabPanel>

          <TabPanel value={value} index={1} className="my-services__accounting_content-tab">
            <div className="my-services__accounting_content-tab-container">
              <div className="my-services__accounting_content-tab_left">
                <p className="my-services__accounting_content-tab_left-title">
                  Accounting tasks
                </p>

                <div className="my-services__accounting_content-tab_left-list">
                  {
                    sampleAccountingTasks.map((item) => (
                      <div className="my-services__accounting_content-tab_left-item">
                        <div className="my-services__accounting_content-tab_left-item_info">
                          <div className="my-services__accounting_content-tab_left-item_info-icon">
                            <img src={item.iconType === 'alert' ? alertIcon : '' } alt="alert" />
                          </div>

                          <div className="my-services__accounting_content-tab_left-item_info-data">
                            <p className="my-services__accounting_content-tab_left-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_left-item_info-data_date">
                              <img src={calendarIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_left-item_actions">
                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>

              <div className="my-services__accounting_content-tab_right">
                <p className="my-services__accounting_content-tab_right-title">
                  Reporst submitted
                </p>

                <div className="my-services__accounting_content-tab_right-list">
                  {
                    sampleAccountingReports.map((item) => (
                      <div className="my-services__accounting_content-tab_right-item">
                        <div className="my-services__accounting_content-tab_right-item_info">
                          <div className="my-services__accounting_content-tab_right-item_info-icon">
                            <img src={item.iconType === 'success' ? successIcon : '' } alt="success" />
                          </div>

                          <div className="my-services__accounting_content-tab_right-item_info-data">
                            <p className="my-services__accounting_content-tab_right-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_right-item_info-data_date">
                              <img src={calendarGrayIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_right-item_actions">
                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={2} className="my-services__accounting_content-tab">
            <div className="my-services__accounting_content-tab-container">
              <div className="my-services__accounting_content-tab_left">
                <p className="my-services__accounting_content-tab_left-title">
                  Accounting tasks
                </p>

                <div className="my-services__accounting_content-tab_left-list">
                  {
                    sampleAccountingTasks.map((item) => (
                      <div className="my-services__accounting_content-tab_left-item">
                        <div className="my-services__accounting_content-tab_left-item_info">
                          <div className="my-services__accounting_content-tab_left-item_info-icon">
                            <img src={item.iconType === 'alert' ? alertIcon : '' } alt="alert" />
                          </div>

                          <div className="my-services__accounting_content-tab_left-item_info-data">
                            <p className="my-services__accounting_content-tab_left-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_left-item_info-data_date">
                              <img src={calendarIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_left-item_actions">
                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_left-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>

              <div className="my-services__accounting_content-tab_right">
                <p className="my-services__accounting_content-tab_right-title">
                  Reporst submitted
                </p>

                <div className="my-services__accounting_content-tab_right-list">
                  {
                    sampleAccountingReports.map((item) => (
                      <div className="my-services__accounting_content-tab_right-item">
                        <div className="my-services__accounting_content-tab_right-item_info">
                          <div className="my-services__accounting_content-tab_right-item_info-icon">
                            <img src={item.iconType === 'success' ? successIcon : '' } alt="success" />
                          </div>

                          <div className="my-services__accounting_content-tab_right-item_info-data">
                            <p className="my-services__accounting_content-tab_right-item_info-data_title">
                              {item.title}
                            </p>

                            <div className="my-services__accounting_content-tab_right-item_info-data_date">
                              <img src={calendarGrayIcon} alt="calendar" />
                              <span>
                                {item.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="my-services__accounting_content-tab_right-item_actions">
                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={archiveIcon} alt="archive"/>
                          </IconButton>

                          <IconButton className="my-services__accounting_content-tab_right-item_actions-btn">
                            <img src={pinIcon} alt="pin"/>
                          </IconButton>
                        </div>
                      </div>
                    ))
                  }
                  
                </div>
              </div>
            </div>
          </TabPanel>
          
        </div>
      </div>
    </>
    
  );
};

export default AccountingBlock;
