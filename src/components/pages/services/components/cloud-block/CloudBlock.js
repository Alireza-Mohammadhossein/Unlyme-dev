import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { handleOpenAppsModal } from "../../../../../redux/app/appsModalSlice";


const CloudBlock = ({ 
  title,
  subtitle,
  iconContainerColor,
  iconName,
  iconAction,
  content,
  mdiIcon,
  mdiIconColor,
  infoContent,
  rightButtonAction,
  rightButtonTitle,
  directComponent,
  icon
}) => {


  const appsModal = useSelector((state) => state.appsModal.openAppsModal);
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);


  
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
  };
  

  const dispatch = useDispatch();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }


  return (
    <div className="cloud-block">

      {/* header */}
      <div className={`cloud-block__header ${appsModal || openNotesWidgetModal || openCalendarWidgetModal ? 'back-transparent' : ''}`}>
          <div
            className="cloud-block__header_icon-container"
            onClick={iconAction || undefined}
            style={{
              backgroundImage: iconName ? `../../../assets/icons/${iconName}.svg)` : '',
              cursor: iconAction ? 'pointer' : 'default',
            }}
          >
            {/* {mdiIcon && <i className="material-icons" style={{ color: mdiIconColor || 'white' }}>{mdiIcon}</i>} */}
            <img className="cloud-block__header-icon" src={icon} />
          </div>
        <div className="cloud-block__header_title-container">
          <p className="cloud-block__header-title">{title}</p>
          <p className="cloud-block__header-subtitle">{subtitle}</p>
        </div>

        {directComponent != null && (
          <div className="btn btn--blue-text cloud-block__header_btn" 
            // onClick={handleOpen}
            onClick={() => dispatch(handleOpenAppsModal(directComponent))}
          >
            <i className="material-icons">add</i>
          </div>
        )}
        
        <div className={`cloud-block__header_collapse ${directComponent ? '' : 'ml-auto'} `}>
          <button className="material-icons cloud-block__header_collapse_btn" onClick={handleCollapse}>
            {isCollapsed ? 'keyboard_arrow_down' : 'keyboard_arrow_up'}
          </button>
        </div>
      </div>


      {/* content */}
      <div className={`cloud-block__content ${isCollapsed ? 'isCollapsed' : ''}  ${appsModal || openNotesWidgetModal || openCalendarWidgetModal ? 'back-transparent' : ''}`}>{content}</div>
      

      {/* modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ maxHeight: '80%', maxWidth: '80%', m: 'auto' }}
      >
        <Box sx={style}>
          <Button
            onClick={handleClose}
            sx={{position: 'sticky', left: '100%', top: '10px', minWidth: '40px'}}
          >
            <i className='material-icons'>
              close
            </i>
          </Button>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {directComponent}
          </Typography>
        </Box>
      </Modal>
    </div>
  ) 
}

export default CloudBlock;
