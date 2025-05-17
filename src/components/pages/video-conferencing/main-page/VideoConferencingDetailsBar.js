import React from 'react';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import expandIcon from '../../../../assets/images/header/expand.png';
import compressIcon from '../../../../assets/images/header/compress.png';
import { useDispatch, useSelector} from 'react-redux';
import { handleCloseAppsModal, handleOpenAppModalIsFullPage, handleCloseAppModalIsFullPage } from '../../../../redux/app/appsModalSlice';



const VideoConferencingDetailsBar = () => {
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
        <Grid container spacing={2}>
            <Grid style={{display: 'flex', flexDirection: 'row-reverse'}} item xs={12}>
                <div className='cloud-page__header_video-conferencing_details-close'>
                    <IconButton aria-label="delete" onClick={() => {
                        dispatch(handleCloseAppsModal())
                        dispatch(handleCloseAppModalIsFullPage())
                    }}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <div className='cloud-page__header_video-conferencing_details-close'>
                    {!appIsFullPage ?
                            <IconButton aria-label="expand" onClick={openFullPage}>
                                <img src={expandIcon} alt='expand' />    
                            </IconButton>
                        :
                            <IconButton aria-label="compress" onClick={closeFullPage}>
                                <img src={compressIcon} alt='compress' />    
                            </IconButton>
                      }
                </div>
            </Grid>
        </Grid>
    )
} 

export default VideoConferencingDetailsBar;
