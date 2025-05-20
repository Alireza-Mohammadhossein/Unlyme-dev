import React, { useContext, useState, useEffect } from "react";
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { v4 as uuid } from "uuid";
import storeApi from "../../utils/storeApi";
import store from "../../utils/store";
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
// import { DropzoneArea } from 'material-ui-dropzone';
// import { DropzoneDialog } from 'material-ui-dropzone';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';


import { sampleUsers, sampleColors } from "../../../../../mocks/mocks";
import DeleteModal from "./DeleteModal";

import uploadIcon from '../../../../../assets/images/invoice-manager/upload-cloud.png';
import attachIcon from '../../../../../assets/images/tasks/attach.svg';
import avatarIcon from '../../../../../assets/images/tasks/avatar.svg';
import membersIcon from '../../../../../assets/images/tasks/user.svg';
import checkIcon from '../../../../../assets/images/tasks/check.svg';
import colorIcon from '../../../../../assets/images/tasks/color.svg';
import labelIcon from '../../../../../assets/images/tasks/label.svg';
import trashIcon from '../../../../../assets/images/tasks/trash.svg';
import deleteIcon from '../../../../../assets/images/tasks/delete.svg';
import checkedUsersIcon from '../../../../../assets/images/todos/more/check-user.svg';
import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
import realativeTime from 'dayjs/plugin/relativeTime';
import Popover from '@mui/material/Popover';




export default function UpdateModal({ 
  title: initialTitle,
  description: initialDescription,
  tags: initialTags,
  checklist: initialChecklist,
  members: initialMembers,
  color: initialColor,
  comments: initialComments,
  handleCloseUpdateModal,
  openUpdateModal,
  index,
  listId,
  card: initialCard,
}) {

  dayjs.extend(realativeTime)


  const [data, setData] = useState(JSON.parse(window.localStorage.getItem("tasks")));
  

  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [tags, setTags] = useState(initialTags);
  const [checklist, setChecklist] = useState(initialChecklist);
  const [members, setMembers] = useState(initialMembers);
  const [color, setColor] = useState(initialColor);
  const [card, setCard] = useState(initialCard);
  const [imageFile, setImageFile] = useState(null);
  const [commentImageFile, setCommentImageFile] = useState(null);
  const [comments, setComments] = useState(initialComments);

  
  
  const { updateCard, updateCardTitle, updateCardDescription, addComment, removeCard, updateCardColor, updateCardMembers, updateCardTags, updateCardImageUploaded, removeCardImageUploaded, removeComment, addChecklist, addChecklistItem, handleRemoveChecklist, updateCardChecklistItems, updateCardCommentImageUploaded, removeCommentImageUploaded } = useContext(storeApi);





  // start handle uploaded image
  const [openUploadArea, setOpenUploadArea] = useState(false);
  const handleImageUpload = (event) => {
    // const file = event.target.files[0];
    const file = event[0];
    setImageFile(file);
    convertImageToDataURL(imageFile, (dataURL) => {
      updateCardImageUploaded(imageFile, dataURL, index, listId)
    });

    // convertImageToDataURL(imageFile, (dataURL) => {
    //   updateCard(title, description, tags, members, color, index, listId, dataURL);
    // });
    
  };

  const handleRemoveImageUpload = () => {
    removeCardImageUploaded(index, listId)
  };


  const handleUpdateBacklog = () => {
    if (imageFile) {
      convertImageToDataURL(imageFile, (dataURL) => {
        updateCard(title, description, tags, members, checklist, color, index, listId, dataURL);
      });
    } else {
      updateCard(title, description, tags, members, checklist, color, index, listId);
    }
    handleCloseUpdateModal();
  };


  const convertImageToDataURL = (file, callback) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);

    }
  };


  const CustomUploadIcon = () => (
    <img src={uploadIcon} />
  );
  // end handle uploaded image



  // start handle upload file for comment
  const [openUploadCommentArea, setOpenUploadCommentArea] = useState(false);
  const handleCommentImageUpload = (event) => {

    const file = event[0];
    setCommentImageFile(file);
    convertImageToDataURL(commentImageFile, (dataURL) => {
      updateCardCommentImageUploaded(commentImageFile, dataURL, index, listId, commentId)
    });

  };


  const handleRemoveCommentImageUpload = (commentId) => {
    removeCommentImageUploaded(index, listId, commentId)
  };

  // end handle upload file for comment


    
  // start handle title
  const [openTitleInput, setOpenTitleInput] = useState(false);

  const handleOnBlurTitle = () => {
    updateCardTitle(title, index, listId);
    setOpenTitleInput(!openTitleInput);
  };
  // end handle title


  // start handle description
  const [openDescriptionInput, setOpenDescriptionInput] = useState(false);
  const [newDescription, setNewDescription] = useState(description);

  const handleOnBlurDescription = () => {
    // updateCardDescription(description, index, listId);
    // setOpenDescriptionInput(!openDescriptionInput);
  };

  const handleSubmitUpdateDescription = () => {
    setDescription(newDescription)
    setOpenDescriptionInput(false);
  }

  useEffect(() => {
    updateCardDescription(description, index, listId);
  }, [description])
  // end handle description



  // start comment
  const [commentText, setCommentText] = useState('');
  const handleCommentText = (e) => {
    setCommentText(e.target.value);
  }

  const dayNow = dayjs().date();
  const monthNow = dayjs().format('MMM');
  const yearNow = dayjs().format('YYYY');
  const timeNow = dayjs().format('HH:mm');
  // end comment
  


  // start members popup
  const [anchorMembers, setAnchorMembers] = useState(null);
  const handleOpenMembersPopup = (event) => {
    setAnchorMembers(event.currentTarget);
  };
  const handleCloseMembersPopup = () => {
    setAnchorMembers(null);
  };
  const openMembersPopup = Boolean(anchorMembers);

  useEffect(() => {
    updateCardMembers(members, index, listId);
  }, [members])
  // end members popup

  

  // start tags popup
  const [anchorTags, setAnchorTags] = useState(null);
  const handleOpenTagsPopup = (event) => {
    setAnchorTags(event.currentTarget);
  };
  const handleCloseTagsPopup = () => {
    setAnchorTags(null);
  };
  const openTagsPopup = Boolean(anchorTags);
  // end tags popup



  // start color popup
  const [anchorColor, setAnchorColor] = useState(null);
  const handleOpenColorPopup = (event) => {
    setAnchorColor(event.currentTarget);
  };
  const handleCloseColorPopup = () => {
    setAnchorColor(null);
  };
  const openColorPopup = Boolean(anchorColor);

  const handleChangeColor = (color) => {
    setColor(color);
    handleCloseColorPopup();
  };
  
  useEffect(() => {
    updateCardColor(color, index, listId);
  }, [color])
  // end color popup
  


  // start checklist popup
  const [anchorChecklist, setAnchorChecklist] = useState(null);
  const handleOpenChecklistPopup = (event) => {
    setAnchorChecklist(event.currentTarget);
  };
  const handleCloseChecklistPopup = () => {
    setAnchorChecklist(null);
  };
  const openChecklistPopup = Boolean(anchorChecklist);
  // end checklist popup


  // start handle remove comment
  const handleRemoveComment = (commentId, index, listId) => {
    removeComment(commentId, index, listId);
  };
  // end handle remove comment



  // start selecting assign user
  const [searchMembersTerm, setSearchMembersTerm] = useState('');
  const [users, setUsers] = useState(sampleUsers);
  const [userChecked, setUserChecked] = useState([]);

  const handleAssignUser = (user) => {
    const isUserChecked = userChecked.some((checkedUser) => checkedUser.id === user.id);
    const newChecked = [...userChecked];
  
    if (!isUserChecked) {
      newChecked.push(user);
    } else {
      const indexToRemove = newChecked.findIndex((checkedUser) => checkedUser.id === user.id);
      newChecked.splice(indexToRemove, 1);
    }
  
    setUserChecked(newChecked);

    setMembers(newChecked);
  };
  // end selecting assign user




   // start selecting color
   const [searchColorTerm, setSearchColorTerm] = useState('');
   // end selecting color


  // start add tags 
  const [showAddTagsInput, setShowAddTagsInput] = useState(false);
  const [newTagName, setNewtagName] = useState('');

  
  const handleAddTag = (e) => {
    if (e.key === 'Enter' && newTagName.trim() !== '') {
      e.preventDefault();
      const newTag = {
        id: uuid(), // Assuming the ids are sequential and unique
        name: newTagName.trim(),
        isSelected: false,
      };
  
      setTags((prevTags) => [...prevTags, newTag]);
      setNewtagName('');
      // Additional logic if needed after adding the tag
    }
  };

  
  const handleTagChange = (tag, event) => {
    setTags((prevTags) => {
      const updatedTags = prevTags.map((t) =>
        t.id === tag.id ? { ...t, isSelected: !t.isSelected } : t
      );
      return updatedTags;
    });
  };


  const handleRemoveTag = (tag, event) => {
    setTags(() => tags.filter((t) => t.id !== tag.id));
  };

  useEffect(() => {
    updateCardTags(tags, index, listId);
  }, [tags])
  // end add tags

  

  // start add checklist 
  const [newChecklistName, setNewChecklistName] = useState('');
  
  const handleAddChecklist = (e) => {

    if (e.key === 'Enter' && newChecklistName.trim() !== '') {
      e.preventDefault();
  
      const newChecklist = {
        id: uuid(),
        title: newChecklistName.trim(),
        lists: []
      };

      
      // setChecklist((prevChecklist) => [...prevChecklist, newChecklist]);
      addChecklist(card, newChecklist, index, listId)
      // addChecklist(checklist);

      setNewChecklistName('');
    }


  };

  const [checklistItemText, setChecklistItemText] = useState('');
  // end add checklist 
  

  // start change checklist item
  const [openChecklistItemInput, setOpenChecklistItemInput] = useState(null);

  // end change checklist item


  // start checklist progressbar
  const calculateProgress = (checklist) => {
    const totalItems = checklist.lists.length;
    const checkedItems = checklist.lists.filter((item) => item.checked).length;
  
    return (checkedItems / totalItems) * 100;
  };
  // end checklist progressbar



  // start delete card modal
  const [deleteModalToggler, setDeleteModalToggler] = useState(false);
  const handleOpenDeleteModal = () => {
    setDeleteModalToggler(true)
  };
  const handleCloseDeleteModal = () => {
    setDeleteModalToggler(false)
  };
  // end delete card modal


  
  // start delete comment modal
  const [commentId, setCommentId] = useState(null)
  const [deleteCommentModalToggler, setDeleteCommentModalToggler] = useState(false);
  const handleOpenDeleteCommentModal = () => {
    setDeleteCommentModalToggler(true)
  };
  const handleCloseDeleteCommentModal = () => {
    setDeleteCommentModalToggler(false)
  };
  // end delete comment modal


  // start delete attachment modal
  const [deleteAttachmentModalToggler, setDeleteAttachmentModalToggler] = useState(false);
  const handleOpenDeleteAttachmentModal = () => {
    setDeleteAttachmentModalToggler(true)
  };
  const handleCloseDeleteAttachmentModal = () => {
    setDeleteAttachmentModalToggler(false)
  };
  // end delete attachment modal


  // start delete comment attachment modal
  const [deleteCommentAttachmentModalToggler, setDeleteCommentAttachmentModalToggler] = useState(false);
  const handleOpenDeleteCommentAttachmentModal = () => {
    setDeleteCommentAttachmentModalToggler(true)
  };
  const handleCloseDeleteCommentAttachmentModal = () => {
    setDeleteCommentAttachmentModalToggler(false)
  };
  // end delete comment attachment modal


  // start delete checklist modal
  const [deleteChecklistModalToggler, setDeleteChecklistModalToggler] = useState(false);
  const handleOpenDeleteChecklistModal = () => {
    setDeleteChecklistModalToggler(true)
  };
  const handleCloseDeleteChecklistModal = () => {
    setDeleteChecklistModalToggler(false)
  };
  // end delete checklist modal



  return (

    <Modal
      open={openUpdateModal}
      onClose={handleCloseUpdateModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className='backlog-modal'
      onClick={(e) => e.stopPropagation()}
    >
      <div className='backlog-modal_container'>

        <div className="backlog-modal_header">
          <div className="backlog-modal_header-title">
            {openTitleInput ? (
              <TextField
                className="backlog-modal_header-title-input"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                onBlur={handleOnBlurTitle}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOnBlurTitle();
                  }
                  return;
                }}
                autoFocus
                onFocus={(e) => e.target.select()}
                multiline
              />
            ) : (
              <p onClick={() => setOpenTitleInput(!openTitleInput)} className="backlog-modal_header-title-text">
                {title}
              </p>
            )}

            <p className="backlog-modal_header-title-list">
              In list <span>{data.lists[listId].title}</span>
            </p>
          </div>

          <div className="backlog-modal_header-btn">
            <IconButton
              onClick={handleCloseUpdateModal}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>

        <div className="backlog-modal_content">
          <div className="backlog-modal_content_left">
            <div className="backlog-modal_content_left_item">
              <div className="backlog-modal_content_left_item-title">
                <p className="backlog-modal_content_left_item-title-text">Description</p>

                <div className="backlog-modal_content_left_item-title-action">
                  <IconButton onClick={() => setOpenUploadArea(true)}>
                    <img src={attachIcon} alt='attach' />
                  </IconButton>

                  {/* <DropzoneDialog
                    // acceptedFiles={['image/*']}
                    dropzoneClass= 'backlog-modal_content_left_item-attach'
                    dropzoneText={"Drop files here, or click to upload"}
                    onChange={handleImageUpload}
                    cancelButtonText={"cancel"}
                    submitButtonText={"submit"}
                    maxFileSize={5000000}
                    value={imageFile}
                    open={openUploadArea}
                    onClose={() => setOpenUploadArea(false)}
                    onSave={(files) => {
                      handleImageUpload(files);
                      setOpenUploadArea(false);
                    }}
                    showPreviews={true}
                    showFileNamesInPreview={true}
                    filesLimit={1}
                    Icon= {CustomUploadIcon}
                    // useChipsForPreview={true}

                  /> */}
                </div>

              </div>

              <div className="backlog-modal_content_left_item-input description">
                <TextField
                  className="backlog-modal_content_left_item-input-field"
                  value={newDescription}
                  onChange={(e) => {
                    // setDescription(e.target.value);
                    setNewDescription(e.target.value);
                  }}
                  placeholder="Add a more detailed description..."
                  onBlur={handleOnBlurDescription}
                  // onKeyDown={(e) => {
                  //   if (e.key === "Enter") {
                  //     // handleOnBlurDescription();
                  //     e.preventDefault()
                  //     handleSubmitUpdateDescription();
                  //   }
                  //   return;
                  // }}
                  onFocus={(e) => {
                    // e.target.select()
                    setOpenDescriptionInput(true)
                  }}
                  multiline
                />

                {openDescriptionInput && 
                  <div className="btns">
                    <Button onClick={handleSubmitUpdateDescription}  className="btns-save">
                      Save
                    </Button>

                    <Button 
                      className="btns-cancel"
                      onClick={() => {
                        setOpenDescriptionInput(false);
                        // setDescription(description)
                        setNewDescription(description)
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                }
              </div>

            </div>

            {card.files && card.files !== null &&
              <div className="backlog-modal_content_left_item">
                <div className="backlog-modal_content_left_item-title">
                  <p className="backlog-modal_content_left_item-title-text">Attachments</p>

                  <div className="backlog-modal_content_left_item-title-action">
                    {/* <IconButton>
                      <img src={attachIcon} alt='attach' />
                    </IconButton> */}
                  </div>

                </div>

                <div className="backlog-modal_content_left_item-file">
                  {/* <DropzoneArea
                  //   acceptedFiles={['image/*']}
                    value={imageFile}
                    dropzoneClass= 'backlog-modal_content_left_item-attach'
                    dropzoneText={"Drop files here, or click to upload"}
                    onChange={handleImageUpload}
                    // onChange={(e) => handleImageUpload(e)}
                    showPreviews={true}
                    showPreviewsInDropzone={false}
                    // showFileNames={true}
                    // showFileNamesInPreview={true}
                    useChipsForPreview={true}
                    // previewGridProps={{container: { spacing: 1, direction: 'row' }}}
                    // previewChipProps={{classes: { root: classes.previewChip } }}
                    // previewText="Selected files"
                    showAlerts={false}
                    filesLimit={1}
                    Icon= {CustomUploadIcon}
                  /> */}

                  <div className="backlog-modal_content_left_item-file-img">
                    <img src={card.files.dataURL} alt={card.files.imageFile.path} />
                  </div>

                  <div className="backlog-modal_content_left_item-file-details">
                    <p className="backlog-modal_content_left_item-file-details-name">{card.files.imageFile.path}</p>
                    <span className="backlog-modal_content_left_item-file-details-btn" onClick={handleOpenDeleteAttachmentModal}>Delete</span>
                    <span className="backlog-modal_content_left_item-file-details-btn" onClick={() => setOpenUploadArea(true)}>Replace</span>
                  </div>

                  <Modal
                    open={deleteAttachmentModalToggler}
                    onClose={handleCloseDeleteAttachmentModal}
                    className='deletepopup-container'
                  >
                    <DeleteModal type='deleteAttachment' onClose={handleCloseDeleteAttachmentModal} onClick={handleRemoveImageUpload} />
                  </Modal>

                </div>
              </div>
            }


            {card.checklist && (
              card.checklist.map((checklist, index) => (
                <div className="backlog-modal_content_left_item" key={checklist.id}>
                  <div className="backlog-modal_content_left_item-title">
                    <p className="backlog-modal_content_left_item-title-text">{checklist.title}</p>
  
                    <div className="backlog-modal_content_left_item-title-action">
                      <Button startIcon={<img src={deleteIcon} />}  onClick={() => handleRemoveChecklist(card, checklist.id, listId)}>
                        Delete
                      </Button>
                      
                      {/* <Button
                        startIcon={<img src={deleteIcon} />}
                        onClick={() => {
                            handleOpenDeleteChecklistModal()
                        }}
                      >
                        Delete
                      </Button>

                      <Modal
                        open={deleteChecklistModalToggler}
                        onClose={handleCloseDeleteChecklistModal}
                        className='deletepopup-container'
                      >
                        <DeleteModal type='deleteChecklist' onClose={handleCloseDeleteChecklistModal} onClick={() => {
                          handleRemoveChecklist(card, checklist.id, listId)
                          }} />
                      </Modal> */}
                    </div>
  
                  </div>

                  <div className="backlog-modal_content_left_item-progressbar">
                    <p className="backlog-modal_content_left_item-progressbar-counter">
                      {calculateProgress(checklist, index) ? `${Math.floor(calculateProgress(checklist, index))}%` : '0%'}
                    </p>
                    <Slider disabled value={calculateProgress(checklist, index)} />
                  </div>
  
                  <div className="backlog-modal_content_left_item-input checklist">

                    {checklist.lists.map((item) => (
                      <FormControlLabel
                        key={item.id}
                        className={`item ${item.checked && 'checked'}`}
                        control={
                          <Checkbox
                            checked={item.checked}
                            onChange={() => {
                              updateCardChecklistItems(checklist, item, listId);
                            }}
                          />
                        }
                        label={item.title}
                      />
                    ))}

                    {(!openChecklistItemInput || openChecklistItemInput === null) &&
                      <Button onClick={() => setOpenChecklistItemInput(checklist.id)}>
                        Add item
                      </Button>
                    }

                    {(openChecklistItemInput && openChecklistItemInput === checklist.id) && 
                      <>
                        <TextField
                          className="backlog-modal_content_left_item-input-field comment"
                          value={checklistItemText}
                          onChange={(e) => {
                            setChecklistItemText(e.target.value);
                          }}
                          placeholder="Add an item"
                          onKeyDown={(e) => {

                            if(e.key === 'Enter') {

                              e.preventDefault()
                              addChecklistItem(card, checklistItemText, index, listId)
                              setChecklistItemText('')
                              // setOpenChecklistItemInput(null)
                              // handleOnBlurComment();
                            }
                          }}
                          onFocus={(e) => e.target.select()}
                          autoFocus
                        />

                        <div className="btns">
                          <Button 
                            onClick={() => {
                              addChecklistItem(card, checklistItemText, index, listId)
                              setChecklistItemText('')
                            }}
                            className="btns-save"
                          >
                            Save
                          </Button>

                          <Button 
                            className="btns-cancel"
                            onClick={() => {
                              setOpenChecklistItemInput(null);
                              setChecklistItemText('')
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </>
                    }
                  </div>
                </div>
              ))
            )}


            
            <div className="backlog-modal_content_left_item">
              <div className="backlog-modal_content_left_item-title">
                <p className="backlog-modal_content_left_item-title-text">Comments</p>

                <div className="backlog-modal_content_left_item-title-action">
                    {/* <IconButton>
                      <img src={attachIcon} alt='attach' />
                    </IconButton> */}

                  
                </div>

              </div>

              <div className="backlog-modal_content_left_item-input">
                <div className="backlog-modal_content_left_item-input-user">
                  <img src={avatarIcon} alt='avatar' />
                </div>

                <TextField
                  className="backlog-modal_content_left_item-input-field comment"
                  value={commentText}
                  onChange={(e) => {
                    setCommentText(e.target.value);
                  }}
                  placeholder="Write a comment..."
                  // onBlur={handleOnBlurComment}
                  onKeyDown={(e) => {

                    if(e.key === 'Enter') {
                      // if (commentsContainerRef.current) {
                      //   commentsContainerRef.current.lastChild.scrollIntoView({ behavior: 'smooth' });
                      // }
        
                      e.preventDefault()
                      addComment(card, commentText, index, listId, dayNow, monthNow, yearNow, timeNow, commentImageFile)
                      setCommentText('')

                      console.log('commentImageFile', commentImageFile)
                      // handleOnBlurComment();
                    }
                  }}
                  onFocus={(e) => e.target.select()}
                  multiline
                />
              </div>

              <div className="backlog-modal_content_left_item-comments">
                {comments && comments.map((comment) => (
                  <div className="backlog-modal_content_left_item-comment">
                    <div className="backlog-modal_content_left_item-comment-details">
                      <div className="backlog-modal_content_left_item-comment-details-info">
                        <p className="backlog-modal_content_left_item-comment-details-info-name">
                          User name
                        </p>
                        <p className="backlog-modal_content_left_item-comment-details-info-date">
                        {/* {dayjs().diff(`${comment.year}-${comment.month}-${comment.day}`)} */}
                        {/* {comment.year}/{comment.month}/{comment.day} */}

                        {dayjs().to(dayjs(`${comment.year}-${comment.month}-${comment.day} ${comment.time}`))}

                        {/* {dayjs(`${comment.month}`).format('MM')} */}
                        </p>
                      </div>

                      <button
                        className="backlog-modal_content_left_item-comment-details-delete"
                        onClick={() => {
                          setCommentId(comment.id)
                          handleOpenDeleteCommentModal()
                        }}>
                        Delete
                      </button>

                      <button
                        className="backlog-modal_content_left_item-comment-details-delete"
                        onClick={() => {
                          setOpenUploadCommentArea(true)
                          setCommentId(comment.id)
                          // handleOpenDeleteCommentModal()
                        }}>
                        Attach
                      </button>

                      {/* <DropzoneDialog
                        // acceptedFiles={['image/*']}
                        dropzoneClass= 'backlog-modal_content_left_item-attach'
                        dropzoneText={"Drop files here, or click to upload"}
                        onChange={handleCommentImageUpload}
                        cancelButtonText={"cancel"}
                        submitButtonText={"submit"}
                        maxFileSize={5000000}
                        value={commentImageFile}
                        open={openUploadCommentArea}
                        onClose={() => setOpenUploadCommentArea(false)}
                        onSave={(files) => {
                          handleCommentImageUpload(files);
                          setOpenUploadCommentArea(false);
                        }}
                        showPreviews={true}
                        showFileNamesInPreview={true}
                        filesLimit={1}
                        Icon= {CustomUploadIcon}
                        // useChipsForPreview={true}

                      /> */}


                    </div>
                    <div className="backlog-modal_content_left_item-comment-text">
                      <p>
                        {comment.text}
                      </p>
                    </div>
                    
                    {comment.file && comment.file !== null &&
                      <div className="backlog-modal_content_left_item-comment-file-container">
                        {/* <div className="backlog-modal_content_left_item-comment-file-title">
                          <p className="backlog-modal_content_left_item-comment-title-text">Attachment</p>
                        </div> */}

                        <div className="backlog-modal_content_left_item-comment-file">

                          <div className="backlog-modal_content_left_item-comment-file-img">
                            <img src={comment.file.dataURL} alt={comment.file.imageFile.path} />
                          </div>

                          <div className="backlog-modal_content_left_item-comment-file-details">
                            <p className="backlog-modal_content_left_item-comment-file-details-name">{comment.file.imageFile.path}</p>
                            <span className="backlog-modal_content_left_item-comment-file-details-btn" onClick={handleOpenDeleteCommentAttachmentModal}>Delete</span>
                            <span className="backlog-modal_content_left_item-comment-file-details-btn" onClick={() => setOpenUploadCommentArea(true)}>Replace</span>
                          </div>

                          <Modal
                            open={deleteCommentAttachmentModalToggler}
                            onClose={handleCloseDeleteCommentAttachmentModal}
                            className='deletepopup-container'
                          >
                            <DeleteModal type='deleteCommentAttachment' onClose={handleCloseDeleteCommentAttachmentModal} onClick={() => {
                              handleRemoveCommentImageUpload(comment.id)
                            }} />
                          </Modal>

                        </div>
                      </div>
                    }
                  </div>
                ))}

                <Modal
                  open={deleteCommentModalToggler}
                  onClose={handleCloseDeleteCommentModal}
                  className='deletepopup-container'
                >
                  <DeleteModal type='deleteComment' onClose={handleCloseDeleteCommentModal} onClick={() => handleRemoveComment(commentId, index, listId)} />
                </Modal>
              </div>
            </div>


          </div>

          <div className="backlog-modal_content_right">
            <div className="backlog-modal_content_right-list">
              <div className="backlog-modal_content_right-list-item">
                <p>Add to card</p>
              </div>

              <div className="backlog-modal_content_right-list-item">
                <Button startIcon={<img src={membersIcon} />} onClick={handleOpenMembersPopup}>
                  Members
                </Button>

                <Popover
                  className="backlog-modal_content_right-popup"
                  id="backlog-modal_content_right-popup"
                  open={openMembersPopup}
                  anchorEl={anchorMembers}
                  onClose={handleCloseMembersPopup}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div className="backlog-modal_content_right-popup-container">
                    <div className="backlog-modal_content_right-popup-header">
                      <p> Members</p>
                      
                      <IconButton
                        onClick={handleCloseMembersPopup}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>

                    <div className="backlog-modal_content_right-popup-input">
                      <TextField
                        className="backlog-modal_content_right-popup-input-field"
                        value={searchMembersTerm}
                        onChange={(e) => setSearchMembersTerm(e.target.value)}
                        placeholder="Search members"
                      />
                    </div>

                    <div className="backlog-modal_content_right-popup-assign">
                      {
                        sampleUsers.filter((user) => user.name.toLowerCase().includes(searchMembersTerm.toLowerCase())).map((user) => (
                          <div
                            className="backlog-modal_content_right-popup-assign-item"
                            key={user.id}
                            style={{backgroundColor: userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1 ? 'rgba(81, 163, 255, 0.05)' : '' }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1}
                                  icon={<></>}
                                  checkedIcon={<img src={checkedUsersIcon} alt='checked' />}
                                  onChange={() => {
                                    handleAssignUser(user)
                                  }}
                                />
                              }

                              label={
                                <div>
                                  <img src={user.image} alt={user.name} />

                                  <p>{user.name}</p>
                                </div>
                              }
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </Popover>
              </div>
              
              <div className="backlog-modal_content_right-list-item">
                <Button startIcon={<img src={labelIcon} />} onClick={handleOpenTagsPopup}>
                  Labels
                </Button>

                <Popover
                  className="backlog-modal_content_right-popup"
                  open={openTagsPopup}
                  anchorEl={anchorTags}
                  onClose={handleCloseTagsPopup}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div className="backlog-modal_content_right-popup-container">
                    <div className="backlog-modal_content_right-popup-header">
                      <p>Labels</p>
                      
                      <IconButton
                        onClick={handleCloseTagsPopup}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>

                    <div className="backlog-modal_content_right-popup-tags">
                      {card.tags.map((tag, index) => (
                        <div className="backlog-modal_content_right-popup-tags-item">
                          <FormControlLabel
                            key={tag.id}
                            className="backlog-modal_content_right-popup-tags-item-label"
                            control={
                            <Checkbox
                              checked={tag.isSelected}
                              onChange={(event) => {
                                handleTagChange(tag, event)
                              }}
                            />
                            }
                            label={tag.name}
                          />

                          <IconButton className="backlog-modal_content_right-popup-tags-item-btn" onClick={() => handleRemoveTag(tag)}>
                            {/* <img src={deleteIcon} alt='remove label' /> */}
                            <CloseIcon />
                          </IconButton>
                        </div>
                        

                        
                      ))}
                      
                    </div>

                    <div className="backlog-modal_content_right-popup-addtags">
                      {showAddTagsInput && (
                        <div className="backlog-modal_content_right-popup-addtags_form">
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type='text'
                            autoFocus
                            placeholder="Name this label..."
                            onKeyDown={handleAddTag}
                            value={newTagName}
                            onChange={(e) => setNewtagName(e.target.value)}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={() => setShowAddTagsInput(false)}
                                  // edge="end"
                                >
                                  <CloseIcon />
                                </IconButton>
                              </InputAdornment>
                            }
                          />
                        </div>
                      )}
                      <Button className="backlog-modal_content_right-popup-addtags_btn" onClick={() => setShowAddTagsInput(true)}>Create a new label</Button>
                    </div>

                  </div>
                </Popover>
              </div>
              
              <div className="backlog-modal_content_right-list-item">
                <Button startIcon={<img src={colorIcon} />} onClick={handleOpenColorPopup}>
                  Color
                </Button>

                <Popover
                  className="backlog-modal_content_right-popup"
                  open={openColorPopup}
                  anchorEl={anchorColor}
                  onClose={handleCloseColorPopup}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >

                  <div className="backlog-modal_content_right-popup-container">
                    <div className="backlog-modal_content_right-popup-header">
                      <p>Color</p>
                      
                      <IconButton
                        onClick={handleCloseColorPopup}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>

                    <div className="backlog-modal_content_right-popup-input">
                      <TextField
                        className="backlog-modal_content_right-popup-input-field"
                        value={searchColorTerm}
                        onChange={(e) => setSearchColorTerm(e.target.value)}
                        placeholder="Search members"
                      />
                    </div>

                    <div className="backlog-modal_content_right-popup-color">
                      {
                        sampleColors.filter((color) => color.name.toLowerCase().includes(searchColorTerm.toLowerCase())).map((clr) => (
                          <div
                            className="backlog-modal_content_right-popup-color-item"
                            key={clr.id}
                            style={{backgroundColor: color === clr.value ? 'rgba(81, 163, 255, 0.05)' : '' }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={color === clr.value}
                                  icon={<></>}
                                  checkedIcon={<img src={checkedUsersIcon} alt='checked' />}
                                  onChange={() => {
                                    handleChangeColor(clr.value)
                                    setSearchColorTerm('')
                                  }}
                                />
                              }

                              label={
                                <div>
                                  <span style={{background: clr.value}} />

                                  <p>{clr.name}</p>
                                </div>
                              }
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </Popover>
              </div>
              
              <div className="backlog-modal_content_right-list-item">
                <Button startIcon={<img src={checkIcon} />} onClick={handleOpenChecklistPopup}>
                  Checklist
                </Button>

                <Popover
                  className="backlog-modal_content_right-popup"
                  open={openChecklistPopup}
                  anchorEl={anchorChecklist}
                  onClose={handleCloseChecklistPopup}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                >
                  <div className="backlog-modal_content_right-popup-container">
                    <div className="backlog-modal_content_right-popup-header">
                      <p>Add checklist</p>
                      
                      <IconButton
                        onClick={handleCloseChecklistPopup}
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>

                    <div className="backlog-modal_content_right-popup-checklist">
                      <div className="backlog-modal_content_right-popup-checklist_form">
                        <p className="backlog-modal_content_right-popup-checklist_form-title">Title</p>
                        <OutlinedInput
                          type='text'
                          autoFocus
                          placeholder="Checklist"
                          onKeyDown={handleAddChecklist}
                          value={newChecklistName}
                          onChange={(e) => setNewChecklistName(e.target.value)}
                        />
                      </div>

                      <Button 
                        className="backlog-modal_content_right-popup-checklist_btn"
                        onClick={() => {
                          if (newChecklistName.trim() !== '') {
                            const newChecklist = {
                              id: uuid(),
                              title: newChecklistName.trim(),
                              lists: []
                            };
                      
                            
                            addChecklist(card, newChecklist, index, listId)
                            
                            setNewChecklistName('');
                          }
                        }}
                      >
                        Add
                      </Button>
                    </div>

                   
                  </div>
                </Popover>
              </div>
              
              <div className="backlog-modal_content_right-list-item">
                <Button startIcon={<img src={attachIcon} />}>
                  Attachment
                </Button>
              </div>
            </div>

            <div className="backlog-modal_content_right-list">
              <div className="backlog-modal_content_right-list-item">
                <p>Actions</p>
              </div>

              <div className="backlog-modal_content_right-list-item">
                <Button
                  startIcon={<img src={deleteIcon} />} 
                  onClick={handleOpenDeleteModal}
                >
                  Delete card
                </Button>

                <Modal
                  open={deleteModalToggler}
                  onClose={handleCloseDeleteModal}
                  className='deletepopup-container'
                >
                  <DeleteModal type='deleteCard' onClose={handleCloseDeleteModal} onClick={() => removeCard(index, listId)} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>




  );
}