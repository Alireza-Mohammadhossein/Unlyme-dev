import React, {useState} from 'react';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';




const DeleteModal = ({type, onClose, onClick}) => {


  return (
    <div className='deletepopup'>
      <div className='deletepopup-header'>
        <p className='deletepopup-header-title'>
          {`Delete ${type === 'deleteCard' ? 'card' : type === 'deleteList' ? 'list' : type === 'deleteComment' ? 'comment' : type === 'deleteAttachment' ? 'file' : type === 'deleteLabel' ? 'label' : type === 'deleteChecklist' ? 'checklist' : ''}`}
        </p>

        <div className='deletepopup-header-btn'>
          <IconButton
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </div>

      <div className='deletepopup-content'>
        <p>{`Are you sure you want to delete this ${type === 'deleteCard' ? 'card' : type === 'deleteList' ? 'list' : type === 'deleteComment' ? 'comment' : type === 'deleteAttachment' ? 'file' : type === 'deleteLabel' ? 'label' : type === 'deleteCommentAttachment' ? 'comment file' : type === 'deleteChecklist' ? 'checklist' : '' } ?`}</p>
      </div>

      <div className='deletepopup-actions'>
        <Button
          className='deletepopup-actions-btn'
          onClick={() => {
            onClick()
            onClose()
          }}
        >
          Delete
        </Button>
      </div>
    </div>

  );
}


export default DeleteModal;
