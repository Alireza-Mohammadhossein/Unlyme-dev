import React from 'react';
import Grid from "@mui/material/Grid";
import { useDispatch} from 'react-redux';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import CustomToolbar from './CustomToolbar';




const WorkDriveDetailsBar = () => {
    const dispatch = useDispatch();

    
    return (
        <Grid container spacing={2}>
            <Grid item lg={12} md={12} xs={12} sx={{
              paddingLeft: {
                lg: '15px !important',
                md: '15px !important',
              },
            }}>
                <div className='cloud-page__header_work-drive-page-details_search'>
                    

                    <div>
                        {/* <FileNavbar />
                        <FileToolbar /> */}
                    </div>

                    <div>
                        <CustomToolbar />
                    </div>
                </div>
            </Grid>
        </Grid>
    )
} 

export default WorkDriveDetailsBar;
