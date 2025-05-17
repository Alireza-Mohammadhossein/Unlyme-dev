// start old assistant design
// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import AddIcon from "@mui/icons-material/Add";
// import CloseIcon from "@mui/icons-material/Close";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { assistants } from "../../../../mocks/mocks";
// import dayjs from "dayjs";
// import InputAdornment from "@mui/material/InputAdornment";
// import FormControl from "@mui/material/FormControl";
// import searchIcon from "../../../../assets/images/header/search.gif";
// import SendIcon from "@mui/icons-material/Send";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleAssistantPopup ,toggleNewAssistantPopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
// import search from "../../../../assets/images/header/new-icons/search-1.svg";
// import moreIcon from "../../../../assets/images/header/new-icons/more.svg";
// import closeIcon from "../../../../assets/images/header/new-icons/close.svg";
// import editIcon from "../../../../assets/images/header/new-icons/edit-1.svg";
// import trashIcon from "../../../../assets/images/header/new-icons/trash.svg";



// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-assistant-tabpanel-${index}`}
//       aria-labelledby={`vertical-assistant-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography component={"div"}>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-assistant-tab-${index}`,
//     "aria-controls": `vertical-assistant-tabpanel-${index}`,
//   };
// }

// const HeaderAssistantPopup = ({
//   // setAssistantPopupToggler,
//   // newAssistantToggler,
//   // setNewAssistantToggler,
//   assistantText,
//   props,
//   // message,
//   // setMessage,
// }) => {

//   const dispatch = useDispatch();
//   const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);
//   const newAssistantPopup = useSelector((state) => state.popup.newAssistantPopupToggler);
//   const [assistantMessage, setAssistantMessage] = useState(useSelector((state) => state.popup.assistantMessage));


//   const { t } = useTranslation();
//   const options = ["Edit", "Add description", "Delete"];
//   const ITEM_HEIGHT = 48;

//   // start showing assitant tab
//   const [showAssistant, setShowAssistant] = useState(false);
//   const handleShowAssistant = (event, newValue) => {
//     setShowAssistant(newValue);
//     dispatch(toggleNewAssistantPopup(false))
//     dispatch(toggleSecondPopupTab())

//     // setNewAssistantToggler(false);

//     // if (event.target === event.currentTarget) {
//     // }
//   };
//   // end showing chat tab

//   // start create new note
//   // const [newAssistantToggler, setNewAssistantToggler] = useState(false);
//   const [newAssistant, setNewAssistant] = useState([]);
//   const handleCreateAssitant = () => {
//     // setNewAssistantToggler(true);
//     dispatch(toggleNewAssistantPopup())

//     setShowAssistant(false);
//     setNewAssistant([]);
//   };
//   // end create new note

//   const handleDeleteAssistant = (index) => {
//     // const updatedNotes = [...notes];
//     // updatedNotes.splice(index, 1);
//     // setNotes(updatedNotes);
//     // setNewNoteToggler(false);
//     // setShowNote(false);
//     console.log("deleted");
//   };



//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const [message, setMessage] = useState('');

//   const handleTextChange = (event) => {
//     setMessage(event.target.value);
//   };

//   const handleAssistantChange = (event) => {
//     setAssistantMessage(event.target.value);
//   };

//   return (
//     <div className="header-popup assistant-popup">
//       <div className="assistant-popup-list">
//         <div className="assistant-popup-list__header">
//           <p className="assistant-popup-list__header-title">
//             {t("ASSISTANT_POPUP.TITLE")}
//           </p>
//           {
//             showAssistant === false && newAssistantPopup === false ?
//               <div className="assistant-popup-list__header-actions">
//                 <div className="assistant-popup-list__header-actions_more">
//                   <IconButton
//                     aria-label="more"
//                     id="long-button"
//                     aria-controls={open ? "long-menu" : undefined}
//                     aria-expanded={open ? "true" : undefined}
//                     aria-haspopup="true"
//                     onClick={handleClick}
//                   >
//                     {/* <MoreHorizIcon sx={{ color: "#000000" }} /> */}
//                     <img src={moreIcon} />
//                   </IconButton>

//                   <Menu
//                     id="long-menu"
//                     MenuListProps={{
//                       "aria-labelledby": "long-button",
//                     }}
//                     anchorEl={anchorEl}
//                     open={open}
//                     onClose={handleClose}
//                     disableScrollLock={true}
//                     PaperProps={{
//                       style: {
//                         maxHeight: ITEM_HEIGHT * 4.5,
//                         width: "20ch",
//                       },
//                     }}
//                   >
//                     {options.map((option) => (
//                       <MenuItem
//                         key={option}
//                         selected={option === "Pyxis"}
//                         onClick={handleClose}
//                       >
//                         {option}
//                       </MenuItem>
//                     ))}
//                   </Menu>
//                 </div>

//                 <div className="assistant-popup-list__header-actions_close">
//                   <IconButton
//                     aria-label="more"
//                     id="long-button"
//                     aria-controls={open ? "long-menu" : undefined}
//                     aria-expanded={open ? "true" : undefined}
//                     aria-haspopup="true"
//                     onClick={() => 
//                       dispatch(toggleAssistantPopup())
//                       // setAssistantPopupToggler(false)
//                     }
//                   >
//                     {/* <CloseIcon sx={{ color: "#000000" }} /> */}
//                     <img src={closeIcon} />
//                   </IconButton>
//                 </div>
//               </div>
//              :
//                ''
//           }

//         </div>

//         <div className="assistant-popup-list__body">
//           <div className="assistant-popup-list__body-search">
//             <FormControl
//               variant="standard"
//               className="assistant-popup-list__body-search_form"
//             >
//               <TextField
//                 className="assistant-popup-list__body-search_input"
//                 placeholder={t("CHAT_POPUP.LIST.HEADER.SEARCH")}
//                 variant="outlined"
//                 size="small"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       {/* <SearchIcon sx={{ color: "#ACACAC" }} /> */}
//                     <img src={search} />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </FormControl>
//           </div>

//           <div className="assistant-popup-list__body-create">
//             <Button
//               variant="outlined"
//               startIcon={<AddIcon />}
//               className="assistant-popup-list__body-create_btn"
//               onClick={handleCreateAssitant}
//             >
//               {t("ASSISTANT_POPUP.NEW_CHAT")}
//             </Button>
//           </div>

//           <div className="assistant-popup-list__body-messages_container">
//             <div className="assistant-popup-list__body-messages">
//               <div className="assistant-popup-list__body-messages_list">
//                 <Tabs
//                   orientation="vertical"
//                   variant="scrollable"
//                   value={showAssistant}
//                   onChange={handleShowAssistant}
//                   aria-label="Vertical tabs example"
//                 >
//                   {assistants.map((item, index) => (
//                     <Tab
//                       className="assistant-popup-list__body-messages_item"
//                       key={item.id}
//                       {...a11yProps(index)}
//                       component={"div"}
//                       label={
//                         <>
//                           <div className="assistant-popup-list__body-messages_item_content">
//                             <p className="assistant-popup-list__body-messages_item_content_name">
//                               {item.title}
//                             </p>
//                             <p className="assistant-popup-list__body-messages_item_content_last-message">
//                               {item.subtitle}
//                             </p>
//                           </div>

//                           <div className="assistant-popup-list__body-messages_item_actions">
//                             <div className="assistant-popup-list__body-messages_item_actions-delete">
//                               <IconButton
//                                 aria-label="delete"
//                                 id="long-button"
//                                 aria-controls={open ? "long-menu" : undefined}
//                                 aria-expanded={open ? "true" : undefined}
//                                 aria-haspopup="true"
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                 }}
//                               >
//                                 {/* <DeleteOutlineIcon sx={{ color: "#6E6F6F" }} /> */}
//                                 <img src={editIcon} />
//                               </IconButton>
//                             </div>


//                             <div className="assistant-popup-list__body-messages_item_actions-delete">
//                               <IconButton
//                                 aria-label="delete"
//                                 id="long-button"
//                                 aria-controls={open ? "long-menu" : undefined}
//                                 aria-expanded={open ? "true" : undefined}
//                                 aria-haspopup="true"
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   handleDeleteAssistant(index)
//                                 }}
//                               >
//                                 {/* <DeleteOutlineIcon sx={{ color: "#6E6F6F" }} /> */}
//                                 <img src={trashIcon} />
//                               </IconButton>
//                             </div>
//                           </div>
//                         </>
//                       }
//                     />
//                   ))}
//                 </Tabs>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {showAssistant !== false ? (
//         <div className="assistant-popup-messages">
//           {assistants.map((item, index) => (
//             <TabPanel
//               key={item.id}
//               value={showAssistant}
//               index={index}
//               className="assistant-popup-messages-tabpanel"
//             >
//               <div className="assistant-popup-messages__header">
//                 <div className="assistant-popup-messages__header-info">
//                   <img
//                     src={searchIcon}
//                     alt="Unlyme assistant"
//                     className="assistant-popup-messages__header-info_img"
//                   />

//                   <p className="assistant-popup-messages__header-info_name">
//                     Unlyme Assistant
//                   </p>
//                 </div>

//                 <div className="assistant-popup-messages__header-actions">
//                   <div className="assistant-popup-messages__header-actions_more">
//                     <IconButton
//                       aria-label="more"
//                       id="long-button"
//                       aria-controls={open ? "long-menu" : undefined}
//                       aria-expanded={open ? "true" : undefined}
//                       aria-haspopup="true"
//                       onClick={handleClick}
//                     >
//                       {/* <MoreHorizIcon sx={{ color: "#000000" }} /> */}
//                       <img src={moreIcon} />
//                     </IconButton>

//                     <Menu
//                       id="long-menu"
//                       MenuListProps={{
//                         "aria-labelledby": "long-button",
//                       }}
//                       anchorEl={anchorEl}
//                       open={open}
//                       onClose={handleClose}
//                       disableScrollLock={true}
//                       PaperProps={{
//                         style: {
//                           maxHeight: ITEM_HEIGHT * 4.5,
//                           width: "20ch",
//                         },
//                       }}
//                     >
//                       {options.map((option) => (
//                         <MenuItem
//                           key={option}
//                           selected={option === "Pyxis"}
//                           onClick={handleClose}
//                         >
//                           {option}
//                         </MenuItem>
//                       ))}
//                     </Menu>
//                   </div>

//                   <div className="assistant-popup-messages__header-actions_close">
//                     <IconButton
//                       aria-label="more"
//                       id="long-button"
//                       aria-controls={open ? "long-menu" : undefined}
//                       aria-expanded={open ? "true" : undefined}
//                       aria-haspopup="true"
//                       onClick={() => {
//                         setShowAssistant(false)
//                         dispatch(toggleSecondPopupTab(false))
//                       }}
//                     >
//                       {/* <CloseIcon sx={{ color: "#000000" }} /> */}
//                       <img src={closeIcon} />
//                     </IconButton>
//                   </div>
//                 </div>
//               </div>

//               <div className="assistant-popup-messages__body">
//                 <p className="assistant-popup-messages__body-terms">
//                   {item.title}
//                 </p>

//                 <div className="assistant-popup-messages__body-content">
//                   {item.messages &&
//                     item.messages.map((message) =>
//                       message.user_id === "bot" ? (
//                         <div
//                           key={message.id}
//                           className="assistant-popup-messages__body-content_friend"
//                         >
//                           <div className="assistant-popup-messages__body-content_friend-avatar">
//                             <img src={item.avatar} alt={item.name} />
//                           </div>
//                           <div className="assistant-popup-messages__body-content_friend-message">
//                             {message.texts &&
//                               message.texts.map((text) => (
//                                 <div className="assistant-popup-messages__body-content_friend-message_text">
//                                   <p>{text.text}</p>
//                                 </div>
//                               ))}
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="assistant-popup-messages__body-content_own">
//                           <div className="assistant-popup-messages__body-content_own-message">
//                             {message.texts &&
//                               message.texts.map((text) => (
//                                 <div
//                                   key={message.id}
//                                   className="assistant-popup-messages__body-content_own-message_text"
//                                 >
//                                   <p>{text.text}</p>
//                                 </div>
//                               ))}
//                           </div>
//                         </div>
//                       )
//                     )}
//                 </div>

//                 <div className="assistant-popup-messages__body-footer">
//                   <form>
//                     <div className="assistant-popup-messages__body-footer_container">
//                       <div className="assistant-popup-messages__body-footer_inputs">
//                         <div className="assistant-popup-messages__body-footer_inputs-text">
//                           <TextField
//                             id=""
//                             value={message}
//                             onChange={handleTextChange}
//                             placeholder="Type a message..."
//                             variant="outlined"
//                             size="small"
//                             multiline
//                             autoFocus
//                             maxRows={1}
//                           />
//                         </div>
//                       </div>

//                       <div className="assistant-popup-messages__body-footer_send-btn">
//                         <IconButton
//                           aria-label="send message"
//                           component="label"
//                           onClick={(e) => {
//                             setMessage("");
//                           }}
//                           disabled={message ? false : true}
//                         >
//                           <SendIcon />
//                         </IconButton>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </TabPanel>
//           ))}
//         </div>
//       ) : (
//         ""
//       )}

//       {newAssistantPopup ? (
//         <div className="assistant-popup-messages">
//           <div className="assistant-popup-messages__header">
//             <div className="assistant-popup-messages__header-info">
//               <img
//                 src={searchIcon}
//                 alt="Unlyme assistant"
//                 className="assistant-popup-messages__header-info_img"
//               />

//               <p className="assistant-popup-messages__header-info_name">
//                 Unlyme Assistant
//               </p>
//             </div>

//             <div className="assistant-popup-messages__header-actions">
//               <div className="assistant-popup-messages__header-actions_more">
//                 <IconButton
//                   aria-label="more"
//                   id="long-button"
//                   aria-controls={open ? "long-menu" : undefined}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   <MoreHorizIcon sx={{ color: "#000000" }} />
//                 </IconButton>

//                 <Menu
//                   id="long-menu"
//                   MenuListProps={{
//                     "aria-labelledby": "long-button",
//                   }}
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   disableScrollLock={true}
//                   PaperProps={{
//                     style: {
//                       maxHeight: ITEM_HEIGHT * 4.5,
//                       width: "20ch",
//                     },
//                   }}
//                 >
//                   {options.map((option) => (
//                     <MenuItem
//                       key={option}
//                       selected={option === "Pyxis"}
//                       onClick={handleClose}
//                     >
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </div>

//               <div className="assistant-popup-messages__header-actions_close">
//                 <IconButton
//                   aria-label="more"
//                   id="long-button"
//                   aria-controls={open ? "long-menu" : undefined}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-haspopup="true"
//                   onClick={() => {
//                       // setNewAssistantToggler(false)
//                       dispatch(toggleNewAssistantPopup(false))
//                       dispatch(toggleSecondPopupTab(false))
//                     }
//                   }
//                 >
//                   <CloseIcon sx={{ color: "#000000" }} />
//                 </IconButton>
//               </div>
//             </div>
//           </div>

//           <div className="assistant-popup-messages__body">
//             <div className="assistant-popup-messages__body-content"></div>

//             <div className="assistant-popup-messages__body-footer">
//               <form>
//                 <div className="assistant-popup-messages__body-footer_container">
//                   <div className="assistant-popup-messages__body-footer_inputs">
//                     <div className="assistant-popup-messages__body-footer_inputs-text">
//                       <TextField
//                         id=""
//                         value={assistantMessage}
//                         onChange={handleAssistantChange}
//                         placeholder="Type a message..."
//                         variant="outlined"
//                         size="small"
//                         multiline
//                         autoFocus
//                         maxRows={1}
//                       />
//                     </div>
//                   </div>

//                   <div className="assistant-popup-messages__body-footer_send-btn">
//                     <IconButton
//                       aria-label="send message"
//                       component="label"
//                       onClick={(e) => {
//                         setAssistantMessage("");
//                       }}
//                       disabled={assistantMessage ? false : true}
//                     >
//                       <SendIcon />
//                     </IconButton>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}

//     </div>
//   );
// };

// export default HeaderAssistantPopup;

// end old assistant design




// start new assistant design

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { toggleAssistantPopup ,toggleNewAssistantPopup, toggleSecondPopupTab } from '../../../../redux/app/popupSlice';
import closeIcon from "../../../../assets/images/header/new-icons/close.svg";

import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { InputAdornment } from '@mui/material';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
import Fade from '@mui/material/Fade';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Zoom from '@mui/material/Zoom';
import "swiper/css";
import firstStep from '../../../../assets/images/header/ai-assistant/first.mov';
import secondStep from '../../../../assets/images/header/ai-assistant/second.mov';
import enterIcon from '../../../../assets/images/header/ai-assistant/enter.svg';
import questionIcon from '../../../../assets/images/header/ai-assistant/question.png';

import axios from 'axios';

const NLPCloudClient = require('nlpcloud');




const HeaderAssistantPopup = ({}) => {

  const dispatch = useDispatch();
  // const assistantPopup = useSelector((state) => state.popup.assistantPopupToggler);
  // const newAssistantPopup = useSelector((state) => state.popup.newAssistantPopupToggler);
  // const [assistantMessage, setAssistantMessage] = useState(useSelector((state) => state.popup.assistantMessage));
  const { t } = useTranslation();


  const [showVerifyingInput, setShowVerifyingInput] = useState(false);
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [isFirstStepPartOne, setIsFirstStepPartOne] = useState(false);
  const [isFirstStepPartTwo, setIsFirstStepPartTwo] = useState(true);
  const [newResponse, setNewResponse] = useState(true);
  
  const [isAiWritting, setIsAiWritting] = useState(true);


  const [userQuestionText, setUserQuestionText] = useState('');
  const [aiAnswerText, setAiAnswerText] = useState(t(`AI_ASSISTANT_FIRSTSTEP_SECONDPART.TEXT`));
  


  const initialContents = [
    {
      "role": "user",
      "parts": {
          "text": "Company Unlyme"
      }
    },
    {
      "role": "model",
      "parts": {
          "text": "Unlyme is an AI-centric cloud OS for business management, focused on data protection and privacy. The OS contains apps and services, tools for teamwork, and business process automation."
      }
    },
    {
      "role": "user",
      "parts": {
          "text": "Where is the Unlyme company located?"
      }
    },
    {
      "role": "model",
      "parts": {
          "text": "Unlyme is a Swiss company from the city of Lausanne."
      }
    },
    {
      "role": "user",
      "parts": {
          "text": "Who made you?"
      }
    },
    {
      "role": "model",
      "parts": {
          "text": "I'm designed by the experts at Unlyme."
      }
    },
    {
      "role": "user",
      "parts": {
          "text": "What kind of model are you?"
      }
    },
    {
      "role": "model",
      "parts": {
          "text": "I'm a big language model for Unlyme."
      }
    },

  ]


  const [contents, setContents] = useState(initialContents);



    // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       const response = await fetch('https://api.jsonsilo.com/public/35ef1f51-d03f-4e9a-9da0-88f3758d6949');
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch token');
  //       }
  //       const data = await response.json();
  //       // const token = data.token;
  //       setToken(data.token)
  //       // Now you have the token, you can use it in your app
  //     } catch (error) {
  //       console.error('Error fetching token:', error);
  //     }
  //   };
    
  //   fetchToken();
    
    
  // }, [])


  // const [token, setToken] = useState();


  // useEffect(() => {
  //   fetch('https://oauth2.googleapis.com/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: new URLSearchParams({
  //       'client_id': '1089099935666-tsmhv5p4maktj51ua1dtgjglct7oa5t1.apps.googleusercontent.com',
  //       'client_secret': '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',
  //       'refresh_token': '1//09vPuFGI54D9kCgYIARAAGAkSNwF-L9Ir34VLUjR-AwF2Xt27eX5VcJRjYZNF-ak1YMIsK9VTcxtIki9GUZaTuBCNMEOamdX3ctY',
  //       'grant_type': 'refresh_token',
  //     }),
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     setToken(data.access_token)
  //     console.log('token',data.access_token);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  // },[])


  // const handleUserQuestion = async (userQuestion) => {
  //   setIsAiWritting(true);
  //   setNewResponse(false);


  //   try {
  //     const newContentsUser = [
  //       ...contents,
  //       {
  //         role: 'user',
  //         parts: { text: userQuestion },
  //       },
  //     ];


  //     setContents(newContentsUser);



  //     const requestData = {
        
  //       "contents": newContentsUser,
  //       "safety_settings": {
  //         "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
  //         "threshold": "BLOCK_LOW_AND_ABOVE"
  //       },
  //       "generation_config": {
  //         "temperature": 0.2,
  //         "topP": 0.8,
  //         "topK": 40,
  //         "maxOutputTokens": 200,
  //       }
  //     };

  //     // const token = 'ya29.a0Ad52N3-bYg9rOyj_S0RX--ZS3G8OPM995Dhm7bKuCI-kRymJZuZuKrJbF1Z2qL7BTxGZk1Xi_X8TuSHmr_imewcx5wBzpGVv2MIYUx5_LFHnUhA5drHGZK6c6A8LjVGZbzNiIkDJ170UtEA7zU0G6Q-90lOL9VuEJxP_awaCgYKAUkSARMSFQHGX2Mi5Cfe_n22yefsUrA32Z42vg0173'
  
      
  //     const response = await fetch("https://us-central1-aiplatform.googleapis.com/v1/projects/unlyme-415613/locations/us-central1/publishers/google/models/gemini-1.0-pro-001:streamGenerateContent", {
  //       method: "POST",
  //       headers: {
  //         "Authorization": `Bearer ${token}`,
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(requestData)
  //     });
  
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }

  //   const data = await response.json();
  //   // console.log('data', data);

  //   const newText = data.reduce((accumulator, item) => {
  //     const texts = item.candidates.map((candidate) => candidate.content.parts[0].text);
  //     return accumulator + texts.join('');
  //   }, '');

  //   const newContentsModel = [
  //     ...newContentsUser,
  //     {
  //       role: 'model',
  //       parts: { text: newText },
  //     },
  //   ];


  //   setContents(newContentsModel);
  //   setAiAnswerText(newText);

  //     // setNewResponse(true)

  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };





  

  



  const [addShakeClass, setAddShakeClass] = useState(false)



  const [openTooltip, setOpenTooltip] = useState(false);



  const apiUrl = "https://api.nlpcloud.io/v1/gpu/finetuned-llama-2-70b/chatbot";
  const token = "3110f17a3723cd0b37c851ddc38339bd91c46d7f";



  const [history, setHistory] = useState([
    // { input: "Hello friend", response: "Hi there, how is it going today?" },
    // { input: "Well, not that good...", response: "Oh? What happened?" }
  ])


  const handleSubmit = () => {
    const requestData = {
      input: userQuestionText,
      context: "This is a discussion between a human and an AI. The AI is called Unlyme AI Assistant and created by Unlyme and a big language model for Unlyme. Unlyme is an AI-centric cloud OS for business management, focused on data protection and privacy. The OS contains apps and services, tools for teamwork, and business process automation.Unlyme is a Swiss company from the city of Lausanne.I'm a ",
      history: history
    };

    const config = {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type': 'application/json'
      }
    };

    axios.post('https://api.nlpcloud.io/v1/gpu/finetuned-llama-2-70b/chatbot', requestData, config)
      .then(response => {
        setAiAnswerText(response.data.response);
        // console.log('data',response.data)
        // console.log('responsee',response.data.response)
        

        history.push({
          input: userQuestionText,
          response: response.data.response
        })
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  
  
  useEffect(() => {
    if (aiAnswerText) {
      setTimeout(() => {
        setNewResponse(true);
      }, 500);
      
    }
  }, [aiAnswerText]);

  // useEffect(() => {
  //     console.log('newResponse', newResponse)
  // }, [newResponse]);




  const infoContainerRef = useRef(null);
  
  useEffect(() => {
    // Scroll to the bottom of the history container when the component mounts or when history changes
    if (infoContainerRef.current) {
      infoContainerRef.current.scrollTop = infoContainerRef.current.scrollHeight;
    }
  }, [history]);
  


  const [helpIsShowing, setHelpIsShowing] = useState(false)



  return (
    <div className="header-popup assistant-popup">
      {!helpIsShowing && (
        <div className="assistant-popup-list">
          <div className="assistant-popup-list__header">
            <div className='assistant-popup-list__header-title'>
              {t("ASSISTANT_POPUP.TITLE")}
            </div>

            <div className='assistant-popup-list__header-actions'>
              {/* <ClickAwayListener onClickAway={() => setOpenTooltip(false)}> */}
                <div className='assistant-popup-list__header-actions_btn'>
                  {/* <Tooltip 
                    title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Arcu dictum varius duis at consectetur lorem donec massa.'
                    id="header-aipopup__tooltip"
                    placement="bottom"
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 400 }}
                    onClose={() => setOpenTooltip(false)}
                    open={openTooltip}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                  >
                    <IconButton onClick={() => {
                      setOpenTooltip((open) => !open)
                    }}>
                      <img src={questionIcon} alt='question button' />
                    </IconButton>
                  </Tooltip> */}

                  <IconButton onClick={() => {
                    setHelpIsShowing(true)
                    // setShowVerifyingInput(false)
                    setIsFirstStepPartTwo(false)
                  }}>
                    <img src={questionIcon} alt='question button' />
                  </IconButton>


                </div>
              {/* </ClickAwayListener> */}

              <div className='assistant-popup-list__header-actions_btn'>
                <IconButton
                  onClick={() => dispatch(toggleAssistantPopup())}
                >
                  <img src={closeIcon} alt='close button' />
                </IconButton>

              </div>
            </div>

          </div>

          <div className="assistant-popup-list__body">
            <AnimatePresence>
              {helpIsShowing === false && (
                <motion.div
                  key="end"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0}}
                  // animate={isSecondStep ? "hide" : "show"}
                  transition={{ duration: 1 }}
                  className='assistant-popup-list__body-content'
                >
                  <>
                    <div className='assistant-popup-list__body-content__motion'>
                      <AnimatePresence>
                        {isAiWritting && (
                          <motion.div
                            key="firstVideo"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, transition: { duration: 1.5 } }}
                            transition={{ duration: 1 }}
                            className='assistant-popup-list__body-content__motion-item first'
                          >
                            <video
                              autoPlay
                              muted
                              loop
                              controls={false}
                              playsInline
                              className='assistant-popup-list__body-content__motion-item-img'
                              src={firstStep}
                              type="video/mp4"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {!isAiWritting && (
                         <motion.div
                           key="secondVideo"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1}}
                           exit={{ opacity: 0, transition: {delay: 1} }}
                           transition={{ duration: 2}}
                           className='assistant-popup-list__body-content__motion-item second'
                         >
                           <video
                             autoPlay
                             muted
                             loop
                             controls={false}
                             playsInline
                             className='assistant-popup-list__body-content__motion-item-img'
                             src={secondStep} type="video/mp4"
                           />
                         </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                    <div className='assistant-popup-list__body-content__info' ref={infoContainerRef}>
                      <div className='assistant-popup-list__body-content__info_history'>
                        {history.map((chat, index) => (
                          (index !== history.length - 1) ? (
                            <div className='assistant-popup-list__body-content__info_history-item' key={index}>
                              <div className='assistant-popup-list__body-content__info_history-item-user'>
                                <p className='assistant-popup-list__body-content__info_history-item-user-title'>You: <span className='assistant-popup-list__body-content__info_history-item-user-text'>{chat.input}</span></p>
                              </div>

                              <div className='assistant-popup-list__body-content__info_history-item-user'>
                                <p className='assistant-popup-list__body-content__info_history-item-user-title'>AI: <span className='assistant-popup-list__body-content__info_history-item-user-text'>{chat.response}</span></p>
                              </div>
                            </div>
                          ) : (
                            <div className='assistant-popup-list__body-content__info_history-item' key={index}>
                              <div className='assistant-popup-list__body-content__info_history-item-user'>
                                <p className='assistant-popup-list__body-content__info_history-item-user-title'>You: <span className='assistant-popup-list__body-content__info_history-item-user-text'>{chat.input}</span></p>
                              </div>
                            </div>
                          )
                        ))}


                          {/* {contents.map((chat, index) => (
                            index > 7 && index !== contents.length - 1 &&
                              <div className='assistant-popup-list__body-content__info_history-item' key={index}>
                                <div className='assistant-popup-list__body-content__info_history-item-user'>
                                  <p className='assistant-popup-list__body-content__info_history-item-user-title'>{chat.role === 'user' ? 'You' : 'AI'}: <span className='assistant-popup-list__body-content__info_history-item-user-text'>{chat.parts.text}</span></p>
                                </div>
                              </div> 

                          ))} */}
                      </div>

                      {/* start verifying - first step part one */}
                      <AnimatePresence>
                        {isFirstStepPartOne && !isFirstStepPartTwo && (
                          <>
                            <motion.div
                              key="firstpartStepOneText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='assistant-popup-list__body-content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  1000,
                                  // `${t(`FIRSTSTEP_FIRSTPART.TEXT`)} \n \n \n ${t(`FIRSTSTEP_SECONDPART.TEXT`)}`,
                                  `${t(`AI_ASSISTANT_FIRSTSTEP_FIRSTPART.TEXT`)}`,
                                   
                                  () => {
                                    // setShowVerifyingInput(true);
                                    setShowConfirmButton(true)
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={80}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
                            
                            {showConfirmButton && (
                              <motion.div
                                key="firstpartStepOneInput"
                                initial={{ opacity: 0 }}
                                // animate={isSecondStep ? "hide" : "show"}
                                // variants={exitTextAnimation}
                                animate={{opacity: 1}}
                                transition={{ duration: 1 }}
                                exit={{opacity: 0, transition: {duration: 1}}}
                                className='assistant-popup-list__body-content__info_form'
                              >
                                <div className='assistant-popup-list__body-content__info_form-btns'>
                                  <Button className='assistant-popup-list__body-content__info_form-btns_yes' onClick={() => {
                                    setIsFirstStepPartOne(false);
                                    setShowVerifyingInput(false);
                                    setIsFirstStepPartTwo(true);
                                  }}>{t(`AI_ASSISTANT_BUTTON.LETSGO`)}</Button>
                                </div>
                              </motion.div>
                            )}

                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - first step part one */}




                      {/* start verifying - first step part two */}
                      <AnimatePresence>
                        {!isFirstStepPartOne && isFirstStepPartTwo && newResponse && (
                          <>
                            <motion.div
                              key="firstpartSteptwoText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='assistant-popup-list__body-content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                    // setShowVerifyingInput(true);
                                    
                                  },
                                  1000,
                                  // `${t(`FIRSTSTEP_FIRSTPART.TEXT`)} \n \n \n ${t(`FIRSTSTEP_SECONDPART.TEXT`)}`,
                                  aiAnswerText,
                                   
                                  () => {

                                    if (infoContainerRef.current) {
                                      infoContainerRef.current.scrollTop = infoContainerRef.current.scrollHeight;
                                    }

                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={80}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
                          
                            {showVerifyingInput && (
                              <motion.div
                                key="firstpartSteptwoInput"
                                initial={{ opacity: 0 }}
                                // animate={isSecondStep ? "hide" : "show"}
                                // variants={exitTextAnimation}
                                animate={{opacity: 1}}
                                transition={{ duration: 1 }}
                                exit={{opacity: 0, transition: {duration: 1}}}
                                className='assistant-popup-list__body-content__info_form'
                              >
                                <form onSubmit={(e) => {
                                  e.preventDefault();

                                  if (userQuestionText.trim().length > 0) {
                                    setShowVerifyingInput(false)
                                    setUserQuestionText('')
                                    setNewResponse(false)
                                    handleSubmit()

                                    setIsAiWritting(true)
                                    // handleUserQuestion(userQuestionText.trim())
                                  } 
                                }}>
                                  <Input
                                    className='assistant-popup-list__body-content__info_form-input'
                                    type='text'
                                    value={userQuestionText}
                                    onChange={(e) => setUserQuestionText(e.target.value)}
                                    autoFocus
                                    endAdornment={
                                      <InputAdornment type='submit' position="end" onClick={(e) => {
                                        e.preventDefault();

                                        
                                        if (userQuestionText.trim().length > 0) {
                                          setShowVerifyingInput(false)
                                          setUserQuestionText('')
                                          setNewResponse(false)
                                          handleSubmit()

                                          setIsAiWritting(true)
                                          // handleUserQuestion(userQuestionText.trim())
                                        }
                                      }}>
                                        <motion.button
                                          className='assistant-popup-list__body-content__info_form-enter'
                                          whileHover={{ scale: 1.1 }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          <img src={enterIcon} alt='enter' />
                                        </motion.button>
                                      </InputAdornment>
                                    }
                                  />
                                </form>

                                <div className='assistant-popup-list__body-content__info_form-btns'>
                                  <Button className='assistant-popup-list__body-content__info_form-btns_yes' onClick={() => {
                                    setHistory([])
                                    setShowVerifyingInput(false)
                                    setIsAiWritting(true)
                                    setNewResponse(false)
                                    // setHistory([])
                                    setAiAnswerText('')
                                    // setContents(initialContents)

                                    setTimeout(() => {
                                      setAiAnswerText(t(`AI_ASSISTANT_FIRSTSTEP_SECONDPART.TEXT`))
                                      setIsAiWritting(false)
                                      setNewResponse(true)
                                      setShowVerifyingInput(true)


                                    }, 2000);
                                  }}>{t(`AI_ASSISTANT_BUTTON.NEWDIALOGUE`)}</Button>
                                </div>
                              </motion.div>
                            )}

                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - first step part two */}


                    </div>

                  </>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}


      {helpIsShowing && (
        <AnimatePresence>
          <motion.div
            className="assistant-popup-help"
            key="help"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            transition={{ duration: 0.5 }}
            // animate={isSecondStep ? "hide" : "show"}
          >
            <div className="assistant-popup-help__header">
              <div className='assistant-popup-help__header-title'>
                About Unlyme AI
              </div>

              <div className='assistant-popup-help__header-actions'>
                <div className='assistant-popup-help__header-actions_btn'>
                  <IconButton onClick={() => {
                    setHelpIsShowing(false)
                    setShowVerifyingInput(false)
                    setIsFirstStepPartTwo(true)
                  }}>
                    <img src={closeIcon} alt='close button' />
                  </IconButton>

                </div>
              </div>
            </div>

            <div className="assistant-popup-help__body">
              <div className='assistant-popup-help__body-content'>
                <div className='assistant-popup-help__body-content__info'>
                  <p className='assistant-popup-help__body-content__info-text'>
                  Unlyme AI is an interactive assistant based on artificial intelligence. You can ask any question, such as tax, accounting, law, marketing, IT and so on, and get a detailed answer. Or ask how to solve a specific business problem and get a ready-made action plan. 
                  </p>

                  <p className='assistant-popup-help__body-content__info-text'>
                  Soon, you will be able to communicate with the interactive assistant also by voice. 
                  </p>
                  
                  <p className='assistant-popup-help__body-content__info-text'>
                  Also soon it will be able to execute your tasks, for example, send or read an email, invoice a customer, schedule a meeting, or assign a task to an employee, tell you about the current situation in your business.
                  </p>
                  
                  <p className='assistant-popup-help__body-content__info-text'>
                  We do not have access to your requests to Unlyme AI and do not store this data. 
                  </p>
                  
                  <p className='assistant-popup-help__body-content__info-text'>
                  The servers that process your requests are located in Switzerland and are securely protected from unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      )}
      


    </div>
  );
};

export default HeaderAssistantPopup;
