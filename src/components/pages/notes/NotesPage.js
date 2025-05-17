import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import icon from "../../../assets/images/my-services/notes.png";
import gridIcon from "../../../assets/images/notepage/new/grid-view.svg";
import listIcon from "../../../assets/images/notepage/new/list-view.svg";
import NotesPageContent from './NotesPageContent';
import "./notes-page.scss";



const NotesPage = ({ firstTimeNoteAppLaunch, setFirstTimeNoteAppLaunch }) => {
  const { t } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  const [searchNote, setSearchNote] = useState('');
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [viewMode, setViewMode] = useState('list');

  const handleViewMode = (event, newView) => {
    if (newView !== null) {
      setViewMode(newView);
    }
  };




  return (
    <div className="page-container">
      <div className="cloud-page">
        <div className="cloud-page__header">
          <div className='grid-content' style={{ width: '100%' }}>
            <div className='grid-content_left' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='cloud-page__header_share_icon'>
                  <img src={icon} alt="Notes Icon" />
                </div>
                <div className="cloud-page__header_share_title">
                  {t("NOTES_PAGE.TITLE")}
                </div>
              </div>
              <div className='cloud-page__header_share_view'>
                <ToggleButtonGroup
                  value={viewMode}
                  exclusive
                  onChange={handleViewMode}
                  aria-label="view mode"
                  className='cloud-page__header_notes-details_actions_toggler'
                >
                  <ToggleButton value="list" aria-label="list view">
                    <img src={listIcon} alt="List View" />
                  </ToggleButton>
                  <ToggleButton value="grid" aria-label="grid view">
                    <img src={gridIcon} alt="Grid View" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </div>
            <div className='grid-content_right'>
              {/* Add any additional content for the right section if needed */}
            </div>
          </div>
        </div>
        <div className="cloud-page__content notes-page">
          <NotesPageContent 
            searchNote={searchNote} 
            setSearchNote={setSearchNote} 
            viewMode={viewMode} 
            currentTitle={currentTitle} 
            setCurrentTitle={setCurrentTitle} 
            currentMessage={currentMessage} 
            setCurrentMessage={setCurrentMessage}
            firstTimeNoteAppLaunch={firstTimeNoteAppLaunch}
            setFirstTimeNoteAppLaunch={setFirstTimeNoteAppLaunch}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
