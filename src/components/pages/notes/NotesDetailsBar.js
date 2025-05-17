import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import { DropzoneDialog } from 'material-ui-dropzone';
import Popover from '@mui/material/Popover';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { handleCloseAppsModal } from '../../../redux/app/appsModalSlice';
import CloseIcon from '@mui/icons-material/Close';
import search from "../../../assets/images/header/new-icons/search.svg";
import { useSelector, useDispatch } from "react-redux";
import aaIcon from "../../../assets/images/notepage/new/Aa.svg";
import bulletIcon from "../../../assets/images/notepage/new/bullet-list.svg";
import copyIcon from "../../../assets/images/notepage/new/image.svg";
import lockIcon from "../../../assets/images/notepage/new/lock.svg";
import moreIcon from "../../../assets/images/notepage/new/more.svg";
import imageIcon from "../../../assets/images/notepage/new/image.svg";
import attachIcon from "../../../assets/images/notepage/new/attach.svg";
import pinIcon from "../../../assets/images/notepage/new/pin.svg";
import eyeIcon from "../../../assets/images/notepage/new/eye.svg";
import trashIcon from "../../../assets/images/notepage/new/trash.svg";
import shareIcon from "../../../assets/images/notepage/new/share.svg";
import tableIcon from "../../../assets/images/notepage/new/table.svg";
import arrowDownIcon from "../../../assets/images/notepage/new/arrow-down.svg";
import checkedUsersIcon from '../../../assets/images/notepage/new/check-user.svg';
import uploadIcon from '../../../assets/images/invoice-manager/upload-cloud.png';
import {BubbleMenu, FloatingMenu} from '@tiptap/react';
import Focus from '@tiptap/extension-focus';
import { sampleUsers } from "../../../mocks/mocks";






const NotesDetailsBar = ({ setSearchNote, searchNote, editor, handleDeleteNote, showNote, handleLockNote, setNotePassword, notePassword, handleUpdatePassword, handleUpdateNotePinned, handleUpdateNoteMembers, setNoteMembers, noteMembers}) => {
    const { t, i18n } = useTranslation();
    const dispatch = useDispatch();

    const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



    // useEffect(() => {
    //     if (editor) {
    //       editor.setEditable(true)
    //     }
    //   }, [editor])



    // start lock menu popup
    const [anchorLock, setAnchorLock] = useState(null);
    const openLockOptions = Boolean(anchorLock);
    const handleClickLockOptions = (event) => {
      setAnchorLock(event.currentTarget);
    };
    const handleCloseLockOptions = () => {
      setAnchorLock(null);
    };


    const [anchorLockConfirmation, setAnchorLockConfirmation] = useState(null);
    const handleClickLockConfirmation = (event) => {
      setAnchorLockConfirmation(event.currentTarget);
    };
    const handleCloseLockConfirmation = () => {
      setAnchorLockConfirmation(null);
    };
    const openLockConfirmation = Boolean(anchorLockConfirmation);
    const lockConfirmationId = openLockConfirmation ? 'simple-popover' : undefined;
  

    const [password, setPassword] = useState('')
    // end lock menu popup




    // start share menu popup
    const [anchorShare, setAnchorShare] = useState(null);
    const openShareOptions = Boolean(anchorShare);
    const handleClickShareOptions = (event) => {
      setAnchorShare(event.currentTarget);
    };
    const handleCloseShareOptions = () => {
      setAnchorShare(null);
    };


    const [anchorShareConfirmation, setAnchorShareConfirmation] = useState(null);
    const handleClickShareConfirmation = (event) => {
      setAnchorShareConfirmation(event.currentTarget);
    };
    
    const handleCloseShareConfirmation = () => {
      setAnchorShareConfirmation(null);
      setNoteMembers(selectedMembers);
  
      handleUpdateNoteMembers(selectedMembers)
    };

    const openShareConfirmation = Boolean(anchorShareConfirmation);
    const shareConfirmationId = openShareConfirmation ? 'simple-popover' : undefined;

    // start selecting assign user
    const [searchMembersTerm, setSearchMembersTerm] = useState('');
    const [users, setUsers] = useState(sampleUsers);
    const [userChecked, setUserChecked] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([...noteMembers])


    const handleAssignUser = (user) => {
      // if (showNote) {
        const isUserChecked = selectedMembers.some((checkedUser) => checkedUser.id === user.id);

        if (!isUserChecked) {
          // Add the user to the selected members
          setSelectedMembers([...selectedMembers, user]);
        } else {
          // Remove the user from the selected members
          setSelectedMembers(selectedMembers.filter((checkedUser) => checkedUser.id !== user.id));
        }

        // setSelectedMembers(newChecked)

        // const isUserChecked = selectedMembers.some((checkedUser) => checkedUser.id === user.id);
        // const newChecked = [...noteMembers];
      
        // if (!isUserChecked) {
        //   newChecked.push(user);
        // } else {
        //   const indexToRemove = newChecked.findIndex((checkedUser) => checkedUser.id === user.id);
        //   newChecked.splice(indexToRemove, 1);
        // }

        // setSelectedMembers(newChecked)

        // console.log('newChecked',newChecked)
      
        // setNoteMembers(newChecked);
  
        // handleUpdateNoteMembers(newChecked)
      // }

      // if (!showNote) {
      //   const isUserChecked = noteMembers.some((checkedUser) => checkedUser.id === user.id);
      //   const newChecked = [...userChecked];
      
      //   if (!isUserChecked) {
      //     newChecked.push(user);
      //   } else {
      //     const indexToRemove = newChecked.findIndex((checkedUser) => checkedUser.id === user.id);
      //     newChecked.splice(indexToRemove, 1);
      //   }
      
      //   setUserChecked(newChecked);
      // }
      


      // setNoteMembers(newChecked)
      // console.log('setNoteMembers', noteMembers)

      
      
      // if (showNote) {
      //   handleUpdateNoteMembers(userChecked)
      // }

      // if (!showNote) {
      //   handleSetNoteMembers(newChecked);
      //   // console.log('newChecked',userChecked)
      // }
    };
    // end selecting assign user

    // end share menu popup



    // start view menu popup
    const [anchorView, setAnchorView] = useState(null);
    const openViewOptions = Boolean(anchorView);
    const handleClickViewOptions = (event) => {
      setAnchorView(event.currentTarget);
    };
    const handleCloseViewOptions = () => {
      setAnchorView(null);
    };
    // end view menu popup



    // start search menu popup
    const [searchFocused, setSearchFocused] = useState(null);

    const [searchText, setSearchText] = useState(searchNote);
    // end search menu popup
    


    // start table bubble menu
    const [anchorTableBubbleMenu, setAnchorTableBubbleMenu] = useState(null);
    const openTableBubbleMenuOptions = Boolean(anchorTableBubbleMenu);
    const handleClickTableBubbleMenuOptions = (event) => {
      setAnchorTableBubbleMenu(event.currentTarget);
    };
    const handleCloseTableBubbleMenuOptions = () => {
      setAnchorTableBubbleMenu(null);
      editor.commands.blur();

      
    };
    // end table bubble menu


    // start get position of the table for bubble menu
    const [showBubble, setShowBubble] = useState(false)
    const [position, setPosition] = useState({ top: 0, left: 0 });

    useEffect(() => {
      const tables = document.getElementsByClassName("tableWrapper");
      if (tables.length > 0) {
        const table = tables[0];
        const rect = table.getBoundingClientRect();
        setPosition({
          top: rect.top - 130,
          left: rect.left,
        });
      }

      if (editor.isActive('table')) {
        setShowBubble(true)
      } else {
        setShowBubble(false)
      }

    },[editor.isActive('table')])
    
    // end get position of the table for bubble menu




    // start handle uploaded image
    const [imageFile, setImageFile] = useState(null);
    const [openUploadArea, setOpenUploadArea] = useState(false);
   

    const handleImageUpload = (file) => {
      if (file instanceof Blob) {
        convertImageToDataURL(file, (dataURL) => {
          editor.chain().focus().setImage({ src: dataURL }).run();
        });
      } else {
        console.error('The uploaded file is not of type Blob or File.');
      }
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
 

    

    
    return (

      <div className='tiptap-editor__actions'>

        {editor && (
          // <BubbleMenu
          //   editor={editor}
          //   tippyOptions={{ duration: 50 }}
          //   shouldShow={({ editor }) => editor.isActive('table')}
          //   style={{ background: editor.isActive('table', { color: 'red' })}}
          //   className='tiptap-editor__actions-bubble'
          //   pluginKey='table-bubble-menu'
          // >
          //   {/* {editor.isActive('table') && ( */}
          //     <>
              
          //       <IconButton
          //         className='tiptap-editor__actions-bubble_btn'
          //         value="table-bubble"
          //         aria-label="table-bubble"
          //         disableRipple
          //         // onClick={() => {
          //           // handleLockNote()
          //           // handleClickLockOptions()
          //         // }}
          //         aria-controls={openTableBubbleMenuOptions ? 'table-bubble-menu' : undefined}
          //         aria-haspopup="true"
          //         aria-expanded={openTableBubbleMenuOptions ? 'true' : undefined}
          //         onClick={handleClickTableBubbleMenuOptions}
          //       >
          //         <img src={moreIcon} />
          //       </IconButton>
                
          //       <Menu
          //         className='table-menu__list'
          //         id="table-bubble-menu"
          //         anchorEl={anchorTableBubbleMenu}
          //         open={openTableBubbleMenuOptions}
          //         onClose={handleCloseTableBubbleMenuOptions}
          //       >
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().addColumnBefore().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Add Column Left
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().addColumnAfter().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Add Column Right
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().deleteColumn().run()
          //             handleCloseTableBubbleMenuOptions()                      
          //           }} 
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Delete Column
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().addRowBefore().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Add Row Above
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().addRowAfter().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Add Row Below
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().deleteRow().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Delete Row 
          //         </MenuItem>
          //         <MenuItem 
          //           className='table-menu__list-item' 
          //           onClick={() => {
          //             editor.chain().focus().deleteTable().run()
          //             handleCloseTableBubbleMenuOptions()
          //           }}
          //           // onClick={handleCloseLockOptions}
          //           // aria-describedby={lockConfirmationId}
          //           variant="contained"
          //         >
          //           Delete Table
          //         </MenuItem>
          //         {/* <ul className='table-menu__list'>
          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().addColumnBefore().run()} sx={{width: '120px'}}>
          //             Add Column Left
          //           </li>

          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().addColumnAfter().run()} sx={{width: '120px'}}>
          //             Add Column Right
          //           </li>
                    
          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().deleteColumn().run()} sx={{width: '120px'}}>
          //             Delete Column
          //           </li>
                    
          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().addRowBefore().run()} sx={{width: '120px'}}>
          //             Add Row Above
          //           </li>

          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().addRowAfter().run()} sx={{width: '120px'}}>
          //             Add Row Below
          //           </li>

          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().deleteRow().run()} sx={{width: '120px'}}>
          //             Delete Row
          //           </li>
                    
          //           <li className='table-menu__list-item' onClick={() => editor.chain().focus().deleteTable().run()} sx={{width: '120px'}}>
          //             Delete Table
          //           </li>
          //         </ul> */}
          //       </Menu>

          //     </>
          //   {/* )} */}
          // </BubbleMenu>

          <div
            style={{ display: showBubble ? 'inline-block' : 'none', top: position.top }}
            className='tiptap-editor__actions-bubble'
          >
            <>
              <IconButton
                className='tiptap-editor__actions-bubble_btn'
                value="table-bubble"
                aria-label="table-bubble"
                // disableRipple
                // onClick={() => {
                  // handleLockNote()
                  // handleClickLockOptions()
                // }}
                aria-controls={openTableBubbleMenuOptions ? 'table-bubble-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openTableBubbleMenuOptions ? 'true' : undefined}
                onClick={handleClickTableBubbleMenuOptions}
              >
                {/* <img src={moreIcon} /> */}
                <MoreHorizIcon />
              </IconButton>
              
              <Menu
                className='table-menu__list'
                id="table-bubble-menu"
                anchorEl={anchorTableBubbleMenu}
                open={openTableBubbleMenuOptions}
                onClose={handleCloseTableBubbleMenuOptions}
              >
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().addColumnBefore().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Add Column Left
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().addColumnAfter().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Add Column Right
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().deleteColumn().run()
                    handleCloseTableBubbleMenuOptions()                      
                  }} 
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Delete Column
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().addRowBefore().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Add Row Above
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().addRowAfter().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Add Row Below
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().deleteRow().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Delete Row 
                </MenuItem>
                <MenuItem 
                  className='table-menu__list-item' 
                  onClick={() => {
                    editor.chain().focus().deleteTable().run()
                    handleCloseTableBubbleMenuOptions()
                  }}
                  // onClick={handleCloseLockOptions}
                  // aria-describedby={lockConfirmationId}
                  variant="contained"
                >
                  Delete Table
                </MenuItem>
                
              </Menu>
            </>
          </div>
        )}


          
        <div className='tiptap-editor__actions-container'>
          <div className='cloud-page__header_notes-details_actions-left' style={{marginRight: secondPopupTab ? '30px' : '0'}}>
            <ButtonGroup variant="outlined" aria-label="text formatting">
              <IconButton
                value="bold" 
                aria-label="bold"
                onClick={() => {
                  editor.chain().focus().toggleBold().run()
                }}
                disabled={
                  !editor.can()
                    .chain()
                    .focus()
                    .toggleBold()
                    .run()
                }
                disableRipple
                className={editor.isActive('bold') ? 'is-active' : ''}
              >

                <img src={aaIcon} />
              </IconButton>
              
              <IconButton
                value="bullet"
                aria-label="bullet" 
                onClick={() => editor.chain().focus().toggleTaskList().run()}
                disableRipple
                className={editor.isActive('taskList') ? 'is-active' : ''}
              >
                  <img src={bulletIcon} />
                  {/* <ChecklistOutlinedIcon /> */}
              </IconButton>
              
              <IconButton
                onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}
                value="table" 
                aria-label="table"
                disableRipple
              >
                  <img src={tableIcon} />
                  {/* <TableChartOutlinedIcon /> */}
              </IconButton>

              <IconButton
                value="image" 
                aria-label="image"
                disableRipple
                onClick={() => setOpenUploadArea(true)}
              >
                  <img src={imageIcon} />

                  {/* <img className='arrow' src={arrowDownIcon} /> */}
              </IconButton>

              <DropzoneDialog
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
                  if (files.length > 0) {
                    handleImageUpload(files[0]);
                  }
                  setOpenUploadArea(false);
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
                filesLimit={1}
                Icon= {CustomUploadIcon}
                // useChipsForPreview={true}

              />
            </ButtonGroup>
          </div>

          <div className='cloud-page__header_notes-details_actions-right'>
            <div className='cloud-page__header_notes-details_actions-right-btns'>
              <ButtonGroup variant="outlined" aria-label="actions">
                <IconButton
                  value="lock"
                  aria-label="lock"
                  disableRipple
                  // onClick={() => {
                    // handleLockNote()
                    // handleClickLockOptions()
                  // }}
                  aria-controls={openLockOptions ? 'lock-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openLockOptions ? 'true' : undefined}
                  onClick={handleClickLockOptions}
                >
                  <img src={lockIcon} />

                  <img className='arrow' src={arrowDownIcon} />
                </IconButton>
                <Menu
                  className='locknote-menu-popup'
                  id="lock-menu"
                  anchorEl={anchorLock}
                  open={openLockOptions}
                  onClose={handleCloseLockOptions}
                >
                  <MenuItem 
                    className='locknote-menu-popup_item'
                    disabled
                    variant="contained"
                  >
                    Close All Protected Notes
                  </MenuItem>

                  <Divider variant="middle" component="li" />
                  
                  <MenuItem 
                    className='locknote-menu-popup_item'
                    // onClick={handleCloseLockOptions}
                    aria-describedby={lockConfirmationId}
                    variant="contained"
                    onClick={handleClickLockConfirmation}
                  >
                    Set Password Protection
                  </MenuItem>

                  <Popover
                    className='locknote-options-popup'
                    id={lockConfirmationId}
                    open={openLockConfirmation}
                    anchorEl={anchorLockConfirmation}
                    onClose={handleCloseLockConfirmation}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <div className='locknote-options-popup_header'>
                      <p>
                        Setting password protection
                      </p>

                      <IconButton onClick={handleCloseLockConfirmation}>
                        <CloseIcon />
                      </IconButton>
                    </div>

                    <div className='locknote-options-popup_info'>
                      <p>
                        If you enable this feature, you will need to re-enter your password to access this note. Do you confirm this?
                      </p>

                      <input
                        className='locknote-options-popup_info-input'
                        placeholder='Write your password...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className='locknote-options-popup_actions'>
                      <Button className='locknote-options-popup_actions-close' onClick={handleCloseLockConfirmation}>Close</Button>
                      <Button
                        className='locknote-options-popup_actions-confirm'
                        onClick={() => {
                          // handleLockNote(password)
                          handleUpdatePassword(showNote, password)
                        }}
                      >
                        Confirm
                      </Button>
                    </div>
                  </Popover>
                </Menu>


                <IconButton
                  value="share"
                  aria-label="share"
                  disableRipple
                  aria-controls={openShareOptions ? 'share-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openShareOptions ? 'true' : undefined}
                  onClick={handleClickShareOptions}
                >
                  <img src={shareIcon} />

                  <img className='arrow' src={arrowDownIcon} />
                </IconButton>
                <Menu
                  className='sharenote-menu-popup'
                  id="share-menu"
                  anchorEl={anchorShare}
                  open={openShareOptions}
                  onClose={handleCloseShareOptions}
                >
                  <MenuItem 
                    className='sharenote-menu-popup_item'
                    aria-describedby={shareConfirmationId}
                    variant="contained"
                    onClick={handleClickShareConfirmation}
                  >
                    Members
                  </MenuItem>

                  <Popover
                    className='sharenote-options-popup'
                    id={shareConfirmationId}
                    open={openShareConfirmation}
                    anchorEl={anchorShareConfirmation}
                    onClose={handleCloseShareConfirmation}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                  >
                    <div className="sharenote-options-popup-container">
                      <div className="sharenote-options-popup-header">
                        <p> Members</p>
                        
                        <IconButton
                          onClick={handleCloseShareConfirmation}
                        >
                          <CloseIcon />
                        </IconButton>
                      </div>

                      <div className="sharenote-options-popup-input">
                        <TextField
                          className="sharenote-options-popup-input-field"
                          value={searchMembersTerm}
                          onChange={(e) => setSearchMembersTerm(e.target.value)}
                          placeholder="Search members"
                        />
                      </div>

                      <div className="sharenote-options-popup-assign">
                        {
                          sampleUsers.filter((user) => user.name.toLowerCase().includes(searchMembersTerm.toLowerCase())).map((user) => (
                            <div
                              className="sharenote-options-popup-assign-item"
                              key={user.id}
                              style={{backgroundColor: selectedMembers.findIndex((checkedUser) => checkedUser.id === user.id) !== -1 ? 'rgba(81, 163, 255, 0.05)' : '' }}
                            >
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    checked={selectedMembers.findIndex((checkedUser) => checkedUser.id === user.id) !== -1}
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
                </Menu>


                <IconButton
                  value="eye"
                  aria-label="eye"
                  disableRipple
                  aria-controls={openViewOptions ? 'view-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openViewOptions ? 'true' : undefined}
                  onClick={handleClickViewOptions}
                >
                  <img src={eyeIcon} />
                </IconButton>
                <Menu
                  className='viewnote-menu-popup'
                  id="view-menu"
                  anchorEl={anchorView}
                  open={openViewOptions}
                  onClose={handleCloseViewOptions}
                >
                  <MenuItem 
                    className='viewnote-menu-popup_item'
                    // onClick={handleCloseLockOptions}
                    // aria-describedby={lockConfirmationId}
                    variant="contained"
                    onClick={handleCloseViewOptions}
                  >
                    All
                  </MenuItem>

                  <MenuItem 
                    className='viewnote-menu-popup_item'
                    // onClick={handleCloseLockOptions}
                    // aria-describedby={lockConfirmationId}
                    variant="contained"
                    onClick={handleCloseViewOptions}
                  >
                    Me
                  </MenuItem>
                  
                  <MenuItem 
                    className='viewnote-menu-popup_item'
                    // onClick={handleCloseLockOptions}
                    // aria-describedby={lockConfirmationId}
                    variant="contained"
                    onClick={handleCloseViewOptions}
                  >
                    My members
                  </MenuItem>
                </Menu>


                <IconButton
                  value="pin"
                  aria-label="pin"
                  disableRipple
                  onClick={() => {
                    handleUpdateNotePinned(showNote)
                  }}
                >
                  <img src={pinIcon} />
                </IconButton>


                <IconButton
                  value="trash"
                  aria-label="trash"
                  disableRipple
                  onClick={() => {
                    // console.log(showNote)
                    handleDeleteNote(showNote)
                  }}
                >
                  <img src={trashIcon} />
                </IconButton>
              </ButtonGroup>
            </div>
          </div>

          {/* <div className='cloud-page__header_notes-details_search_wrapper'>
              <div className='cloud-page__header_notes-details_search'>
                  <form onSubmit={(e) => {
                    e.preventDefault()
                    setSearchNote(searchText)
                  }}>
                    <div className="cloud-page__header_notes-details_search_container">
                      <img src={search} />
                      <input
                        className="cloud-page__header_notes-details_search-input"
                        id='notes-detailsbar-search'
                        type='text'
                        // ref={inputRef}
                        // value={searchNote}
                        autocomplete="off"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value)
                          // setSearchNote(e.target.value)
                        }}
                        placeholder={t('NOTES_PAGE.SEARCH_PLACEHOLDER')}
                        // onFocus={(e) => handleClickSearchOptions(e)}
                        // onBlur={(e) => handleCloseSearchOptions(e)}
                        onFocus={() => setSearchFocused(true)}
                        onBlur={() => {
                          setTimeout(() => {
                            setSearchFocused(false)
                          }, 100);
                        }}
                      />

                      {searchFocused && (
                        <ul className='searchnote-menu-popup'>
                          <li className='searchnote-menu-popup_item disabled'>
                            Suggested searches
                          </li>

                          <li className='searchnote-menu-popup_item' onClick={() => {
                            setSearchText('Shared Notes')
                            document.getElementById('notes-detailsbar-search').focus()
                          }}>
                            <img src={shareIcon} alt='shared notes' />
                            Shared Notes
                          </li>

                          <li className='searchnote-menu-popup_item' onClick={() => {
                            setSearchText('Protected Notes')
                            document.getElementById('notes-detailsbar-search').focus()
                          }}>
                            <img src={lockIcon} alt='protected notes' />
                            Protected Notes
                          </li>

                          <li className='searchnote-menu-popup_item' onClick={() => {
                            setSearchText('Notes with Checklist')
                            document.getElementById('notes-detailsbar-search').focus()
                          }}>
                            <img src={bulletIcon} alt='checklist notes' />
                            Notes with Checklist
                          </li>

                          <li className='searchnote-menu-popup_item' onClick={() => {
                            setSearchText('Notes with Attachments')
                            document.getElementById('notes-detailsbar-search').focus()
                          }}>
                            <img src={attachIcon} alt='attached notes' />
                            Notes with Attachments
                          </li>
                        </ul>
                      )}
                    </div>
                  </form>
              </div>

              <div className='cloud-page__header_notes-details_close'>
                  <ButtonGroup variant="outlined" aria-label="actions">
                      <IconButton aria-label="delete" onClick={() => dispatch(handleCloseAppsModal())}>
                          <CloseIcon />
                      </IconButton>
                  </ButtonGroup>
              </div>
          </div> */}
        </div>
      </div>
        
    )
} 

export default NotesDetailsBar;
