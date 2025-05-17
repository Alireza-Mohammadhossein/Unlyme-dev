import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch , useSelector} from 'react-redux';
import { handleCloseAppsModal, handleOpenAppModalIsFullPage, handleCloseAppModalIsFullPage } from '../../../redux/app/appsModalSlice';
import expandIcon from '../../../assets/images/header/expand.png';
import compressIcon from '../../../assets/images/header/compress.png';




const CloudPage = ({
  title,
  content,
  icon,
}) => {

  

  const { t } = useTranslation();
  const dispatch = useDispatch();



  const appIsFullPage = useSelector((state) => state.appsModal.appModalIsFullPage);

  // const [isFullPage, setIsFullPage] = useState(false)


  const openFullPage = () => {
    dispatch(handleOpenAppModalIsFullPage())
  }

  const closeFullPage = () => {
    dispatch(handleCloseAppModalIsFullPage())
  }


  return (
    <div className="cloud-page" id='cloud-page'>
      <div className="cloud-page__header">
        <Grid container spacing={2}>
          <Grid item xl={2} lg={3} md={3} xs={12} className='cloud-page__header_share'>
            <div className='cloud-page__header_share_icon'>
              <img src={icon} />
            </div>

            <div className="cloud-page__header_share_title">
              {title}
            </div>
          </Grid>
          <Grid item xl={10} lg={9} md={9} xs={12}>
            <div className='cloud-page__header_details'>
              {!appIsFullPage ?
                  <IconButton aria-label="expand" onClick={openFullPage}>
                    <img src={expandIcon} alt='expand' />    
                  </IconButton>
                :
                  <IconButton aria-label="compress" onClick={closeFullPage}>
                    <img src={compressIcon} alt='compress' />    
                  </IconButton>
              }

              <IconButton aria-label="delete" onClick={() => {
                dispatch(handleCloseAppsModal())
                dispatch(handleCloseAppModalIsFullPage())
              }}>
                <CloseIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="cloud-page__content">{content}</div>
    </div>
  );
};

export default CloudPage;
