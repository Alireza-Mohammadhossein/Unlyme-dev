import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import VideoConferencingLeftSide from "./left-sidebar/VideoConferencingLeftSide";
import VideoConferencingRightSide from "./right-sidebar/VideoConferencingRightSide";



  
  
  
  const VideoConferencingPageContent = () => {
  
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  
  
  
    return (
      <div className="video-conferencing-page">
        <Grid container spacing={3}>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            sx={{
              display: {
                lg: secondPopupTab ? "none" : "block",
                md: secondPopupTab ? "none" : "block",
              },
            }}
          >
            <div className="video-conferencing-page_sidebar">
                <VideoConferencingLeftSide />
            </div>
          </Grid>
  
  
          <Grid
            item
            lg={secondPopupTab ? 12 : 6}
            md={secondPopupTab ? 12 : 6}
            xs={12}
          >
            <div className="video-conferencing-page_sidebar">
                <VideoConferencingRightSide />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }

  export default VideoConferencingPageContent;