import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import { chatMessages } from '../../../../mocks/mocks';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from "react-redux";
import { toggleChatPopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import Avatar from '@mui/material/Avatar';
import CheckIcon from '@mui/icons-material/Check';
import search from "../../../../assets/images/header/new-icons/search-1.svg";
import moreIcon from "../../../../assets/images/header/new-icons/more.svg";
import closeIcon from "../../../../assets/images/header/new-icons/close.svg";
import editIcon from "../../../../assets/images/header/new-icons/edit.svg";
import readIcon from "../../../../assets/images/header/new-icons/tik.svg";
import trashIcon from "../../../../assets/images/header/new-icons/trash.svg";
import chatIconActive from "../../../../assets/images/header/Chat-active.png";
import channelIconActive from "../../../../assets/images/header/Channel-active.png";
import contactIconActive from "../../../../assets/images/header/Contacts-active.png";
import chatIconNotActive from "../../../../assets/images/header/Chat-inactive.png";
import channelIconNotActive from "../../../../assets/images/header/Channel-inactive.png";
import contactIconNotActive from "../../../../assets/images/header/Contacts-inactive.png";






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}



const HeaderChatPopup = ({ props }) => {
  const dispatch = useDispatch();
  const chatPopup = useSelector((state) => state.popup.chatPopupToggler);


  const { t } = useTranslation();
  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  
  
  // start showing main tabs
    const [maintab, setMainTab] = useState(0);
    const handleMainTabs = (event, newValue) => {
      setMainTab(newValue);
      setShowChat(false);
    };
  // end showing main tabs
  
  
  // start showing chat tab
  const [showChat, setShowChat] = useState(false);
  const handleShowChat = (event, newValue) => {
    setNewChatToggler(false)
    setShowChat(newValue);
    dispatch(toggleSecondPopupTab())    
  };
  // end showing chat tab

  // start create new chat
  const [newChatToggler, setNewChatToggler] = useState(false);
  const handleCreateChat = () => {
    setNewChatToggler(true);
    setShowChat(false);
    dispatch(toggleSecondPopupTab())
  }
  // end create new chat



  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  


  const [message, setMessage] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    props.onFileUpload(file); // Pass the uploaded file to the parent component
  };

  const handleTextChange = (event) => {
    setMessage(event.target.value);
  };



  const [isPickerVisible, setIsPickerVisible] = useState(false);


  // start selected messages
  const [selectedMessages, setSelectedMessages] = useState([]);

  const handleselectedMessages = (item) => {
    setSelectedMessages(prevSelectedItems => {
      const itemIndex = prevSelectedItems.findIndex(selectedItem => selectedItem.id === item.id);
      if (itemIndex !== -1) {
        const updatedSelectedMessages = [...prevSelectedItems];
        updatedSelectedMessages.splice(itemIndex, 1);

        return updatedSelectedMessages;
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };
  // end selected messages


  return (
    <div className='header-popup chat-popup'>
      <div className='chat-popup-list'>
        <div className='chat-popup-list__header'>
          <p className='chat-popup-list__header-title'>{t('CHAT_POPUP.LIST.HEADER.TITLE')}</p>
          {
            showChat === false && newChatToggler === false ?
              <div className='chat-popup-list__header-actions'>
                <div className='chat-popup-list__header-actions_more'>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    {/* <MoreHorizIcon sx={{ color: '#000000' }} /> */}
                    <img src={moreIcon} />
                  </IconButton>

                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock = {true}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>

                <div className='chat-popup-list__header-actions_edit'>
                  <IconButton
                    aria-label="more"
                    aria-haspopup="true"
                    // onClick={handleClick}
                    onClick={handleCreateChat}
                  >
                    {/* <EditIcon sx={{ color: '#51A3FF' }} /> */}
                    <img src={editIcon} />
                  </IconButton>
                </div>
                
                <div className='chat-popup-list__header-actions_close'>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={() => {
                      dispatch(toggleChatPopup());
                      // setChatPopupToggler(false)
                      // document.getElementById('cloud-page').classList.remove('first-shrink');
                    }}
                  >
                    {/* <CloseIcon  sx={{ color: '#000000' }}/> */}
                    <img src={closeIcon} />
                  </IconButton>

                </div>
              </div>
            : 
              ''
          }
        </div>

        <div className='chat-popup-list__body'>
          <div className='chat-popup-list__body-search'>
            <FormControl variant="standard" className='chat-popup-list__body-search_form'>
              <TextField
                className="chat-popup-list__body-search_input"
                placeholder={t("CHAT_POPUP.LIST.HEADER.SEARCH")}
                variant="outlined"
                size="small"
                InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {/* <SearchIcon sx={{ color: '#ACACAC' }}/> */}
                        <img src={search} style={{width: '20px'}}/>

                      </InputAdornment>
                    ),
                }}
              />
            </FormControl>
          </div>
          
          <TabPanel value={maintab} index={0} className='chat-popup-list__body-messages_container' >
            <div className='chat-popup-list__body-messages'>
              <div className='chat-popup-list__body-messages_list'>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={showChat}
                  onChange={handleShowChat}
                  aria-label="Vertical tabs example"
                  // sx={{ borderRight: 1, borderColor: 'divider' }}
                >

                  {chatMessages.map((item, index) => (
                    <Tab
                      className='chat-popup-list__body-messages_item'
                      key={item.id}
                      {...a11yProps(index)}
                      component={'div'}
                      label={
                        <>
                          <div className='chat-popup-list__body-messages_item_avatar'
                            onClick={(e) => {
                              e.stopPropagation();
                              handleselectedMessages(item)
                            }}>
                            {
                              selectedMessages.some(selectedItem => selectedItem.id === item.id) ? 
                                <Avatar><CheckIcon /></Avatar>
                              :
                                <img src={item.avatar} alt={item.name}/>
                            }
                          </div>
                    
                          <div className='chat-popup-list__body-messages_item_content'>
                            <p className='chat-popup-list__body-messages_item_content_name'>{item.firstName} {item.lastName}</p>
                            <p
                              className='chat-popup-list__body-messages_item_content_last-message'
                              style={item.new_messages > 0 ? { color:'#51A3FF' , fontWeight: '500'} : {}}  
                            >{item.lastMessage}</p>
                          </div>
                    
                          <div className='chat-popup-list__body-messages_item_status'>
                            {item.new_messages > 0 ?
                              <CircleIcon className='chat-popup-list__body-messages_item_status-unread' />
                              :
                              // <DoneAllIcon className='chat-popup-list__body-messages_item_status-read' />
                              <img src={readIcon}  className='chat-popup-list__body-messages_item_status-read' />
                            }
                          </div>

                          <div className="chat-popup-list__body-messages_item_actions">
                          <div className="chat-popup-list__body-messages_item_actions-delete">
                            <IconButton
                              aria-label="delete"
                              id="long-button"
                              aria-controls={open ? "long-menu" : undefined}
                              aria-expanded={open ? "true" : undefined}
                              aria-haspopup="true"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {/* <DeleteOutlineIcon sx={{ color: "#6E6F6F" }} /> */}
                              <img src={trashIcon} />
                            </IconButton>
                          </div>
                        </div>
                        </>
                      } 
                    />
                  ))}
                </Tabs>
              </div>
            </div>
          </TabPanel>


          <TabPanel value={maintab} index={1} className='chat-popup-list__body-chanels_container'>
            <div className='chat-popup-list__body-chanels'>
            </div>
          </TabPanel>
          

          <TabPanel value={maintab} index={2} className='chat-popup-list__body-contacts_container'>
            <div className='chat-popup-list__body-contacts'>
            </div>
          </TabPanel>
        </div>

        <div className='chat-popup-list__footer'>
          <Tabs value={maintab} onChange={handleMainTabs} aria-label="choosing main tab" className='chat-popup-list__footer_container' >
            <Tab icon={<img src={maintab === 0 ? chatIconActive : chatIconNotActive} alt='chat icon' />} label="Chats" component={'div'}/>
            <Tab icon={<img src={maintab === 1 ? channelIconActive : channelIconNotActive} alt='channels icon' />} label="Channels" component={'div'} />
            <Tab icon={<img src={maintab === 2 ? contactIconActive : contactIconNotActive} alt='contact icon' />} label="Contacts" component={'div'} />
          </Tabs>
        </div>
      </div>


      {showChat !== false
        ? 
        <div className='chat-popup-messages'>
          {chatMessages.map((item, index) => (
            <TabPanel key={item.id} value={showChat} index={index} className='chat-popup-messages-tabpanel'>
                <div className='chat-popup-messages__header'>
                  <div className='chat-popup-messages__header-info'>
                    <img src={item.avatar} alt={item.firstName} className='chat-popup-messages__header-info_img' />

                    <p className='chat-popup-messages__header-info_name'>{item.firstName}</p>
                  </div>
    
                  <div className='chat-popup-messages__header-actions'>
                    <div className='chat-popup-messages__header-actions_more'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        {/* <MoreHorizIcon sx={{ color: '#000000' }} /> */}
                        <img src={moreIcon} />
                      </IconButton>
    
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        disableScrollLock = {true}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                    
                    <div className='chat-popup-messages__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => {
                          setShowChat(false)
                          dispatch(toggleSecondPopupTab(false))
                        }}
                      >
                        {/* <CloseIcon  sx={{ color: '#000000' }}/> */}
                        <img src={closeIcon} />
                      </IconButton>
    
                    </div>
                  </div>
                </div>
    
                <div className='chat-popup-messages__body'>
                  <p className='chat-popup-messages__body-terms'>{t('CHAT_POPUP.MESSAGE.TERMS')} {item.firstName}</p>
    
                  <div className='chat-popup-messages__body-date'>
                    <p>Today</p>
                  </div>
    
                  <div className='chat-popup-messages__body-content'>

                    {item.messages &&
                      item.messages.map((message) => (
                        message.user_id === 'friend' ? 
                          <div key={message.id} className='chat-popup-messages__body-content_friend'>
                            <div className='chat-popup-messages__body-content_friend-avatar'>
                              <img src={item.avatar} alt={item.name} />
                            </div>
                            <div className='chat-popup-messages__body-content_friend-message'>
                              { message.texts &&
                                message.texts.map(text => (
                                  <div className='chat-popup-messages__body-content_friend-message_text'>
                                    <p>{text.text}</p>
                                    <span>11:25</span>
                                  </div>
                                ))
                              }
                            </div>
                          </div> 
                        : 
                          <div className='chat-popup-messages__body-content_own'>
                            <div className='chat-popup-messages__body-content_own-message'>
                              { message.texts &&
                                message.texts.map(text => (
                                  <div key={message.id} className='chat-popup-messages__body-content_own-message_text'>
                                    <p>{text.text}</p>
                                    <span>11:25</span>
                                  </div>
                                ))
                              }
                            </div>
                          </div> 
                      ))
                    }

                  </div>

                  <div className='chat-popup-messages__body-footer'>
                    <form>
                      <div className='chat-popup-messages__body-footer_container'>
                        <div className='chat-popup-messages__body-footer_inputs'>
                          <div className='chat-popup-messages__body-footer_inputs-emoji'>
                            <IconButton
                              aria-label="upload file"
                              component="label"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsPickerVisible(!isPickerVisible)
                              }}>
                              <SentimentSatisfiedAltIcon />
                            </IconButton>
                          </div>

                          <div className='chat-popup-messages__body-footer_inputs-text'>
                            <TextField
                              // className="my-services__sites-copying_form_input"
                              id=""
                              value={message}
                              onChange={handleTextChange}
                              placeholder='Type a message...'
                              variant="outlined"
                              size="small"
                              multiline
                              maxRows={6}
                            />
                          </div>

                          <div className='chat-popup-messages__body-footer_inputs-upload'>
                            <IconButton aria-label="upload file" component="label">
                              <input hidden type="file" />
                              <AttachFileIcon />
                            </IconButton>
                          </div>

                          {/* <input type="file" onChange={handleFileUpload} /> */}
                        </div>

                        <div style={isPickerVisible ? {display: 'block'} : {display: 'none'}} className='emoji-picker'>
                          <Picker
                            data={data}
                            previewPosition='none'
                            navPosition='bottom'
                            searchPosition='none'
                            // set='apple'
                            onClickOutside={() => {
                              if(isPickerVisible) {
                                setIsPickerVisible(false);
                              }
                              // isPickerVisible ? setIsPickerVisible(false)
                            }}
                            onEmojiSelect={(e) => {
                              setSelectedEmoji(e.native);
                              setMessage(message + e.native);
                              setIsPickerVisible(!isPickerVisible);
                            }} 
                          />
                        </div>

                        <div className='chat-popup-messages__body-footer_send-btn'>
                          <IconButton
                            aria-label="send message"
                            component="label"
                            onClick={(e) => {
                              setMessage('')
                            }}
                            disabled={message ? false : true}
                            
                            >
                              
                            <SendIcon />
                          </IconButton>
                        </div>
                      </div>

                    </form>


                  </div>
                </div>
              
            </TabPanel>
        ))}
  
        </div>
        : ''
      }

      {newChatToggler !== false
        ? 
        <div className='chat-popup-messages'>
          
            <div value={newChatToggler} className='chat-popup-messages-tabpanel'>
                <div className='chat-popup-messages__header'>
                  <div className='chat-popup-messages__header-info'>
                    {/* <img className='chat-popup-messages__header-info_img' /> */}
                    <Avatar className='chat-popup-messages__header-info_img'>A</Avatar>

                    <p className='chat-popup-messages__header-info_name'>User</p>
                  </div>
    
                  <div className='chat-popup-messages__header-actions'>
                    <div className='chat-popup-messages__header-actions_more'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        {/* <MoreHorizIcon sx={{ color: '#000000' }} /> */}
                        <img src={moreIcon} />

                      </IconButton>
    
                      <Menu
                        id="long-menu"
                        MenuListProps={{
                          "aria-labelledby": "long-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        disableScrollLock = {true}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: "20ch",
                          },
                        }}
                      >
                        {options.map((option) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={handleClose}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                    
                    <div className='chat-popup-messages__header-actions_close'>
                      <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? "long-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-haspopup="true"
                        onClick={() => {
                          setNewChatToggler(false)
                          dispatch(toggleSecondPopupTab(false))
                        }}
                      >
                        {/* <CloseIcon  sx={{ color: '#000000' }}/> */}
                        <img src={closeIcon} />

                      </IconButton>
    
                    </div>
                  </div>
                </div>
    
                <div className='chat-popup-messages__body'>
                  <p className='chat-popup-messages__body-terms'>This conversation is private</p>
    
                  <div className='chat-popup-messages__body-date'>
                    <p>Today</p>
                  </div>
    
                  <div className='chat-popup-messages__body-content'>

                    {/* {item.messages &&
                      item.messages.map((message) => (
                        message.user_id === 'friend' ? 
                          <div key={message.id} className='chat-popup-messages__body-content_friend'>
                            <div className='chat-popup-messages__body-content_friend-avatar'>
                              <img src={item.avatar} alt={item.name} />
                            </div>
                            <div className='chat-popup-messages__body-content_friend-message'>
                              { message.texts &&
                                message.texts.map(text => (
                                  <div className='chat-popup-messages__body-content_friend-message_text'>
                                    <p>{text.text}</p>
                                    <span>11:25</span>
                                  </div>
                                ))
                              }
                            </div>
                          </div> 
                        : 
                          <div className='chat-popup-messages__body-content_own'>
                            <div className='chat-popup-messages__body-content_own-message'>
                              { message.texts &&
                                message.texts.map(text => (
                                  <div key={message.id} className='chat-popup-messages__body-content_own-message_text'>
                                    <p>{text.text}</p>
                                    <span>11:25</span>
                                  </div>
                                ))
                              }
                            </div>
                          </div> 
                      ))
                    } */}

                  </div>

                  <div className='chat-popup-messages__body-footer'>
                    <form>
                      <div className='chat-popup-messages__body-footer_container'>
                        <div className='chat-popup-messages__body-footer_inputs'>
                          <div className='chat-popup-messages__body-footer_inputs-emoji'>
                            <IconButton
                              aria-label="upload file"
                              component="label"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsPickerVisible(!isPickerVisible)
                              }}>
                              <SentimentSatisfiedAltIcon />
                            </IconButton>
                          </div>

                          <div className='chat-popup-messages__body-footer_inputs-text'>
                            <TextField
                              // className="my-services__sites-copying_form_input"
                              id=""
                              value={message}
                              onChange={handleTextChange}
                              placeholder='Type a message...'
                              variant="outlined"
                              size="small"
                              multiline
                              maxRows={6}
                            />
                          </div>

                          <div className='chat-popup-messages__body-footer_inputs-upload'>
                            <IconButton aria-label="upload file" component="label">
                              <input hidden type="file" />
                              <AttachFileIcon />
                            </IconButton>
                          </div>

                          {/* <input type="file" onChange={handleFileUpload} /> */}
                        </div>

                        <div style={isPickerVisible ? {display: 'block'} : {display: 'none'}} className='emoji-picker'>
                          <Picker
                            data={data}
                            previewPosition='none'
                            navPosition='bottom'
                            searchPosition='none'
                            // set='apple'
                            onClickOutside={() => {
                              if(isPickerVisible) {
                                setIsPickerVisible(false);
                              }
                              // isPickerVisible ? setIsPickerVisible(false)
                            }}
                            onEmojiSelect={(e) => {
                              setSelectedEmoji(e.native);
                              setMessage(message + e.native);
                              setIsPickerVisible(!isPickerVisible);
                            }} 
                          />
                        </div>

                        <div className='chat-popup-messages__body-footer_send-btn'>
                          <IconButton
                            aria-label="send message"
                            component="label"
                            onClick={(e) => {
                              setMessage('')
                            }}
                            disabled={message ? false : true}
                            
                            >
                              
                            <SendIcon />
                          </IconButton>
                        </div>
                      </div>

                    </form>


                  </div>
                </div>
              
            </div>

        </div>
        : ''
      }

    </div>
  )
}


export default HeaderChatPopup;