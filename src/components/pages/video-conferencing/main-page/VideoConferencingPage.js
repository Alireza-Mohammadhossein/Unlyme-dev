import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import icon from "../../../../assets/images/my-services/video-conference.png";
import "./video-conferencing-page.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import VideoConferencingDetailsBar from './VideoConferencingDetailsBar';
import VideoConferencingPageContent from './VideoConferencingPageContent';
// import { CustomToolbarQuill } from "./CustomToolbarQuill";






const VideoConferencingPage = () => {
  const { t, i18n } = useTranslation();


  return (
    <div className="page-container">
      {/* <CloudPage
        title={t("NOTES_PAGE.TITLE")}
        icon={icon}
        content={NotesPageContent()}
      /> */}
      <div className="cloud-page">
        <div className="cloud-page__header">
          <Grid container spacing={2}>  
            <Grid item lg={3} md={3} xs={12} className='cloud-page__header_share'>
              <div className='cloud-page__header_share_icon'>
                <img src={icon} />
              </div>

              <div className="cloud-page__header_share_title">
                {t("VIDEO_CONFERENCING_PAGE.TITLE")}
              </div>
            </Grid>
            <Grid item lg={9} md={9} xs={12} sx={{display: 'flex', alignItems: 'center'}}>
              <div className='cloud-page__header_video-conferencing_details'>
                <VideoConferencingDetailsBar />
              </div>
            </Grid>
          </Grid>


        </div>
        <div className="cloud-page__content">
          <VideoConferencingPageContent />
        </div>
      </div>

    </div>
  );
};

export default VideoConferencingPage;

