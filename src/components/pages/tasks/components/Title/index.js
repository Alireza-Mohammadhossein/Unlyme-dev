import React, { useContext, useState } from "react";
import Modal from '@mui/material/Modal';
import storeApi from "../../utils/storeApi";
import IconButton from '@mui/material/IconButton';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import moreIcon from '../../../../../assets/images/todos/more.svg';
import DeleteModal from "../Modals/DeleteModal";



export default function Title({ title, listId, collapseColumns, collapse }) {
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const { updateListTitle, deleteList } = useContext(storeApi);

  const handleOnBlur = () => {
    updateListTitle(newTitle, listId);
    setOpen(!open);
  };


  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const openActions = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  // More options modals 
  const [anchorElMoreOptions, setAnchorElMoreOptions] = useState(null);
  const openMoreOptions = Boolean(anchorElMoreOptions);
  const handleOpenMoreOptions = (event) => {
    setAnchorElMoreOptions(event.currentTarget);
  };
  const handleCloseMoreOptions = () => {
    setAnchorElMoreOptions(null);
  };


  // start delete modal
  const [deleteModalToggler, setDeleteModalToggler] = useState(false);
  const handleOpenDeleteModal = () => {
    setDeleteModalToggler(true)
  };
  const handleCloseDeleteModal = () => {
    setDeleteModalToggler(false)
  };
  // end delete modal



  return (
    <div className="title-list-container">
      {open ? (
        <div className="input-title-edit">
          <input
            type="text"
            className="input-title"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            onBlur={handleOnBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnBlur();
              }
              return;
            }}
            autoFocus
            onFocus={(e) => e.target.select()}
          />
        </div>
      ) : (
        <div className="editable-title-container">
          <h2 onClick={() => setOpen(!open)} className="editable-title">
            {title}
          </h2>

         
        </div>
      )}


      <div className="title-list-actions">
        <IconButton
          aria-label="more"
          className="title-list-actions-btn"
          // aria-controls={openActions ? "long-menu" : undefined}
          // aria-expanded={openActions ? "true" : undefined}
          // aria-haspopup="true"
          onClick={handleOpenMoreOptions}
        >
          <img src={moreIcon} alt='more' />
          {/* <DeleteOutlineOutlinedIcon /> */}
          {/* <img src={trashIcon} /> */}
        </IconButton>

        <Menu
          anchorEl={anchorElMoreOptions}
          open={openMoreOptions}
          onClose={handleCloseMoreOptions}
          disableScrollLock={true}
        >
          <MenuItem onClick={() => {
            // handleCloseMoreOptions()
            handleOpenDeleteModal()
          }}
          sx={{width: '120px'}}
          >
            Delete
          </MenuItem>

          <Modal
            open={deleteModalToggler}
            onClose={handleCloseDeleteModal}
            className='deletepopup-container'
          >
            <DeleteModal
              type='deleteList'
              onClose={() => {
                handleCloseDeleteModal()
              }}
              onClick={() => {
                deleteList(listId)
                handleCloseMoreOptions()
              }}
            />
          </Modal>
        </Menu>

        <IconButton
          aria-label="more"
          className="title-list-actions-btn"
          // aria-controls={openActions ? "long-menu" : undefined}
          // aria-expanded={openActions ? "true" : undefined}
          // aria-haspopup="true"
          onClick={collapseColumns}
        >
          {collapse ? <ExpandLess /> : <ExpandMore />}
          {/* <ArrowDropDownOutlinedIcon /> */}
        </IconButton>
      </div>
          
    </div>

    // <div className="editable-title-container">
    //   <h2 className="editable-title">
    //     {title}
    //   </h2>
    // </div>
  );
}