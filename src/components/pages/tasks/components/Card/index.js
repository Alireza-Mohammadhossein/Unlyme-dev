import React, { useEffect, useContext, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import storeApi from "../../utils/storeApi";
import IconButton from "@mui/material/IconButton";
import ViewModal from "../Modals/ViewModal";
import UpdateModal from "../Modals/UpdateModal";
import Avatar from '@mui/material/Avatar';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Popover from '@mui/material/Popover';
import dayjs from 'dayjs';
import Comments from "../Comments/Comments";
import fileIcon from '../../../../../assets/images/tasks/file.svg';
import settingIcon from '../../../../../assets/images/tasks/message.svg';
import messageIcon from '../../../../../assets/images/tasks/settings.svg';
import editIcon from '../../../../../assets/images/invoice-manager/edit.svg';
import NotesIcon from '@mui/icons-material/Notes';
import TextField from '@mui/material/TextField';
import AvatarGroup from '@mui/material/AvatarGroup';





export default function Card({ card, index, listId, data }) {
  const [openViewModal, setOpenViewModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  // const [newTitle, setNewTitle] = useState(card.title);
  const { removeCard, updateCardTitle } = useContext(storeApi);
  const [openEditTitle, setOpenEditTitle] = useState(false);
  const [newTitle, setNewTitle] = useState(card.title);

  const [storedData, setStoredData] = useState(data);
  const [storedChecklist, setStoredChecklist] = useState(data.checklist);
  

  const handleOpenViewModal = () => setOpenViewModal(!openViewModal);
  const handleCloseViewModal = () => {
    setOpenViewModal(false)
  };


  useEffect(() => {
    setStoredChecklist(data.checklist);
  },[data])


  const handleOpenUpdateModal = () => {
    // setStoredData(JSON.parse(window.localStorage.getItem("tasks")))
    

    setOpenUpdateModal(true)
  };
  const handleCloseUpdateModal = () => {
    setOpenUpdateModal(false)

  };

  // const handleTitleOnBlur = () => {
  //   updateCardTitle(newTitle, index, listId);
  //   setOpenUpdateModal(!openUpdateModal);
  // };

  // const handleDescriptionOnBlur = () => {
  //   updateCardDescription(newDescription, index, listId);
  //   setOpen(!open);
  // };




  // setting modals 
  const [anchorElSetting, setAnchorElSetting] = useState(null);
  const open = Boolean(anchorElSetting);
  const handleOpenSetting = (event) => {
    event.stopPropagation()
    setAnchorElSetting(event.currentTarget);
  };
  const handleCloseSetting = (e) => {
    e.stopPropagation()
    setAnchorElSetting(null);
  };



  // comments modal
  const [anchorElComments, setAnchorElComments] = useState(null);
  const handleOpenComments = (event) => {
    event.stopPropagation()
    setAnchorElComments(event.currentTarget);
  };
  const handleCloseComments = (e) => {
    e.stopPropagation()
    setAnchorElComments(null);
  };
  const openComments = Boolean(anchorElComments);
  const idComments = open ? 'comments-popover' : undefined;


  const handleDownloadClick = (e) => {
    e.stopPropagation()
    const anchor = document.createElement('a');

    card.files.forEach((file, index) => {
      const decodedData = file.dataURL.toString('base64'); // Decode base64 data

      const byteArray = new Uint8Array(decodedData.length);
  
      for (let i = 0; i < decodedData.length; i++) {
        byteArray[i] = decodedData.charCodeAt(i);
      }

      const fileType = file.file.path.split('.')[file.file.path.split('.').length - 1]
  
      const blob = new Blob([byteArray], { type: fileType });
  
      const anchor = document.createElement('a');
      anchor.href = URL.createObjectURL(blob);
      anchor.download = file.file.path;
      anchor.click();
      URL.revokeObjectURL(anchor.href);
    })

  };


  const handleOnBlur = (e) => {
    e.stopPropagation();
    updateCardTitle(newTitle, index, listId);
    setOpenEditTitle(!openEditTitle);
  };



  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          // style={{
          //   backgroundColor: snapshot.isDragging
          //     ? "#263B4A"
          //     : "",
          //   ...provided.draggableProps.style
          // }}
        >
          <div className={`card-content ${snapshot.isDragging ? 'dragged-item' : ''}`} style={{outlineColor: `${card.color ? card.color : '#4382C4'}`, boxShadow: `-2px 0 0 ${card.color ? card.color : '#4382C4'}` }}>
            <div className="card-content-container" onClick={handleOpenUpdateModal}>
                {/* {
                  uploadedImage.path ? 
                    <div>{uploadedImage.path}</div>
                  :
                    ''
                } */}

              {card.files ? (
                <div className="card-content_img">
                  <img src={card.files.dataURL} alt={card.title} />
                </div>
              ) : (
                ""
              )}
              <div className="card-content_info">
                <div className="card-content_info-title">
                  {openEditTitle ? (

                    <TextField
                      className="card-content_info-title-textarea"
                      value={newTitle}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      onChange={(e) => setNewTitle(e.target.value)}
                      onBlur={handleOnBlur}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleOnBlur(e);
                        }
                        return;
                      }}
                      autoFocus
                      onFocus={(e) => e.target.select()}
                      multiline
                    />
                
                    ) :
                        (
                          <p>
                            {card.title}
                            {/* <br /> */}
                            {/* {card.description.length > 0 ?
                                <NotesIcon />
                              : 
                                ''
                            } */}
                          </p>
                        )
                    }
                </div>
                
              </div>


              <div className="card-content_details">

                {card.description.length > 0 ?
                    <NotesIcon className="card-content_details-hasdescription" />
                  : 
                    ''
                }

                <div className="card-content_details-buttons">
                  <div className="card-content_details-buttons-comments">
                    <IconButton
                      aria-label="comments"
                      aria-describedby={idComments}
                      // onClick={handleOpenComments}
                    >
                      <img src={settingIcon} />
                    </IconButton>
                    {card.comments ? card.comments.length : '0'}
                  </div>
                </div>
              </div>


              {card.tags.some(tag => tag.isSelected) && (
                <div className="card-content_tags">
                  {card.tags.filter((tag) => tag.isSelected === true).map((tag) => (
                    <span key={tag.id} className="card-content_tags-tag">{tag.name}</span>
                  ))}
                </div>
              )}



              {card.members.length > 0 ? (
                <div className="card-content_members">
                  {card.members.map((member) => (
                    member.image ? 
                      <img className="card-content_members-member" key={member.id} src={member.image} alt={member.name} />
                      :
                      <Avatar key={member.id} className="card-content_members-member">
                        {member.name.split('')[0]}
                      </Avatar>
                  ))}
                </div>
              ) : null}

              {
                !openEditTitle && 
                  <div className="card-content_edit">
                  <IconButton 
                    onClick={(e) => {
                      // e.stopPropagation()
                      // handleOpenUpdateModal()
                        e.stopPropagation()
                        setOpenEditTitle(!openEditTitle)
                    }}
                  >
                    <img src={editIcon} />
                    
                    {/* <SettingsOutlinedIcon /> */}
                  </IconButton>
                </div>
              }



              <UpdateModal
                title={card.title}
                description={card.description}
                tags={card.tags}
                members={card.members}
                checklist={storedChecklist}
                color={card.color}
                imageFile={card.imageFile}
                comments={card.comments}
                handleCloseUpdateModal={handleCloseUpdateModal}
                handleOpenUpdateModal={handleOpenUpdateModal}
                openUpdateModal={openUpdateModal}
                setOpenUpdateModal={setOpenUpdateModal}
                index={index}
                listId={listId}
                card={card}
              />



            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
