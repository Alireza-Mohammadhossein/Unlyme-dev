import React, { useState, useEffect, useCallback, useMemo, Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./notes-page.scss";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import trashIcon from "../../../assets/images/notepage/new/trash.svg";
import smallLockedIcon from "../../../assets/images/notepage/new/small-locked.svg";
import expandIcon from '../../../assets/images/header/expand.png';
import compressIcon from '../../../assets/images/header/compress.png';
import { useSelector, useDispatch } from "react-redux";
import { toggleNotePopup, toggleSecondPopupTab } from '../../../redux/app/popupSlice';
import { handleCloseAppsModal, handleOpenAppModalIsFullPage, handleCloseAppModalIsFullPage, handleSetSelectedNoteTab } from '../../../redux/app/appsModalSlice';
import NotesDetailsBar from "./NotesDetailsBar";



import './tiptap.scss'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { EditorProvider, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Image } from '@tiptap/extension-image';

import Gapcursor from '@tiptap/extension-gapcursor'
import Paragraph from '@tiptap/extension-paragraph'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Focus from '@tiptap/extension-focus'
import NotesLockPage from "./NotesLockPage";

import CloseIcon from '@mui/icons-material/Close';
import pinIcon from "../../../assets/images/notepage/new/pin.svg";
import lockIcon from "../../../assets/images/notepage/new/lock.svg";
import bulletIcon from "../../../assets/images/notepage/new/bullet-list.svg";
import attachIcon from "../../../assets/images/notepage/new/attach.svg";
import ButtonGroup from '@mui/material/ButtonGroup';
import search from "../../../assets/images/header/new-icons/search.svg";
import shareIcon from "../../../assets/images/notepage/new/share.svg";
import lockpageIcon from "../../../assets/images/notepage/new/lockpage.svg";
import documentGrayIcon from '../../../assets/images/notepage/new/document.svg';
import documentColorIcon from '../../../assets/images/notepage/new/document-color.svg';






function TabPanel(props) {
    const { children, value, id, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== id}
        id={`vertical-tabpanel-${id}`}
        aria-labelledby={`vertical-tab-${id}`}
        {...other}
      >
        {value === id && (
          <Box sx={{ p: 3 }}>
            <Typography component={"div"}>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
  
function a11yProps(id) {
  return {
    id: `vertical-tab-${id}`,
    "aria-controls": `vertical-tabpanel-${id}`,
  };
}
  
  
  
const NotesPageContent = ({searchNote, setSearchNote, viewMode, currentTitle, setCurrentTitle, currentMessage, setCurrentMessage, firstTimeNoteAppLaunch, setFirstTimeNoteAppLaunch}) => {

  

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);
  const appIsFullPage = useSelector((state) => state.appsModal.appModalIsFullPage);
  const selectedNoteTab = useSelector((state) => state.appsModal.selectedNoteTab);


  const openFullPage = () => {
    setFirstTimeNoteAppLaunch(false)
    setNewNoteToggler(false)
    
    dispatch(handleOpenAppModalIsFullPage())
  }

  const closeFullPage = () => {
    setFirstTimeNoteAppLaunch(false)
    setNewNoteToggler(false)

    dispatch(handleCloseAppModalIsFullPage())
  }

  
  // console.log('newNoteToggler', newNoteToggler)
  // console.log('render') 
  


  const options = ["Edit", "Add description", "Delete"];
  const ITEM_HEIGHT = 48;

  // start showing chat tab
  // const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [showNote, setShowNote] = useState(null);
  const [notes, setNotes] = useState([]);
  // const [currentMessage, setCurrentMessage] = useState("");
  // const [currentTitle, setCurrentTitle] = useState("");
  const [filteredNote, setFilteredNote] = useState([]);
  const [hasEntered, setHasEntered] = useState(false);
  const [inputText, setInputText] = useState('');
  const [noteIsLocked, setNoteIsLocked] = useState(false)
  const [notePassword, setNotePassword] = useState('')
  const [selectedNote, setSelectedNote] = useState(null)
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null)
  const [noteIsPinned, setNoteIsPinned] = useState(false)
  const [noteMembers, setNoteMembers] = useState([])


  useEffect(() => {
    if (!showNote) {
      setShowNote(selectedNoteTab)
    }
  },[])

  // const handleShowNote = (event, newValue) => {
    
  //   // if (event.target === event.currentTarget) {
  //     setShowNote(newValue);
  //     setNewNoteToggler(false);
  //     setNewTitleValue(notes[newValue].title)
  //     setNewMessageValue(notes[newValue].message)

  //     setSelectedNote(notes[newValue]);
  //     setSelectedNoteIndex(newValue);
  //   // }
  // };

  const handleShowNote = (id) => {
    dispatch(handleSetSelectedNoteTab(id))

    setNewNoteToggler(false);

    setShowNote(id);
    setSelectedNote(notes.find((note) => note.id === id));
    if (selectedNote) {
      setNewTitleValue(selectedNote.title);
      setNewMessageValue(selectedNote.message);
      
    } else {
      setNewTitleValue("");
      setNewMessageValue("");
    }
  };
  // end showing chat tab


  // start create new note
  const [newNoteToggler, setNewNoteToggler] = useState(false);
  const [newNote, setNewNote] = useState([]);
  const handleCreateNote = () => {
    setNewNoteToggler(true);
    setSelectedNote(null);
    setNotePassword('');
    setShowNote(null);
    setNewNote('');
    setNoteMembers([])

    // newHandleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage, noteIsLocked, notePassword, noteIsPinned, noteMembers)

  };
  // end create new note

  
  // start update currenttitle and currentmessage when view mode is changed
  useEffect(() => {

    if (currentTitle !== '') {
      setCurrentTitle(currentTitle)
    }

    if (currentMessage !== '') {
      setCurrentMessage(currentMessage)
    }
  }, [viewMode])
  // end update currenttitle and currentmessage when view mode is changed


  // start getting notes from localstorage
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes)
      setFilteredNote(storedNotes)
    };
  }, []);

  useEffect(() => {
    setFilteredNote(notes)
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // end getting notes from localstorage


  useEffect(() => {
    if (firstTimeNoteAppLaunch) {
      setNewNoteToggler(true)
    }
  },[])

  useEffect(() => {
    // return (
    //   note.title.toLowerCase().match(filterValue) ||
    //   note.message.toLowerCase().match(filterValue)
    // );

    if (searchNote && searchNote === 'Notes with Checklist') {
      setFilteredNote(notes.filter(note => (
        note.message.content.some(item => item.type === 'taskList')
      )));
    } 
    else if (searchNote && searchNote === 'Shared Notes') {
      setFilteredNote(notes.filter(note => (
        note.members.length > 0
      )));
    } 
    else if (searchNote && searchNote === 'Protected Notes') {
      setFilteredNote(notes.filter(note => (
        note.locked
      )));
    }
    else if (searchNote) {
      setFilteredNote(notes.filter(note => {
        const filterValue = searchNote.toLowerCase();
  
        if (note.title.toLowerCase().includes(filterValue)) {
          return true;
        } else if (note.message.content){
            return note.message.content.some(item => (
              item.content[0].text && 
              item.content[0].text.toLowerCase().includes(filterValue)
            ));
        } else {
          return false;
        }
      }));
    }
    else {
      setFilteredNote(notes);
    }
  }, [searchNote, notes]);


  
  const handleLockNote = (password) => {
    setNotePassword(password)
    setNoteIsLocked(!noteIsLocked);
  }



  const handleUpdateNotePinned = (id) => {
    const updatedNotes = [...notes];
    const index = notes.findIndex((note) => note.id === id);
  
    if (index !== -1) {
      updatedNotes[index] = {
        ...updatedNotes[index],
        pinned: updatedNotes[index].pinned !== undefined ? !updatedNotes[index].pinned : true,
      };
  
      setNotes(updatedNotes);
  
      // console.log('note is pinned', updatedNotes[index].pinned);
    } else {
      setNoteIsPinned(!noteIsPinned)
    }
  };
  

  const handleAddNote = (
    dayNow,
    monthNow,
    yearNow,
    timeNow,
    currenTitle,
    currentMessage
  ) => {
    if (currentMessage !== "" && currentTitle !== "") {
      const newNote = {
        id: new Date().getTime(),
        day: dayNow,
        month: monthNow,
        year: yearNow,
        time: timeNow,
        title: currenTitle,
        message: currentMessage,
      };
      setNotes([...notes, newNote]);
      setFilteredNote([...notes, newNote]);
      setCurrentTitle("");
      setCurrentMessage("");
      setNewNoteToggler(false);
      setHasEntered(false)
      setInputText('')
    }
  };


  const newHandleAddNote = (
    dayNow,
    monthNow,
    yearNow,
    timeNow,
    currenTitle,
    currentMessage, 
    noteIsLocked,
    notePassword,
    notePinned,
    noteMembers
  ) => {

    if (currentMessage !== "" && currentTitle !== "") {
      const newNote = {
        id: new Date().getTime(),
        day: dayNow,
        month: monthNow,
        year: yearNow,
        time: timeNow,
        title: currenTitle || '',
        message: currentMessage || '',
        locked: noteIsLocked,
        password: notePassword,
        pinned: notePinned,
        members: noteMembers
      };
      setNotes([...notes, newNote]);
      setFilteredNote([...notes, newNote]);
      setCurrentTitle("");
      setCurrentMessage("");
      setNewNoteToggler(false);
      setHasEntered(false);
      setInputText('');
      setNoteIsLocked(false);
      setNoteIsPinned(false);
      setNotePassword('');
      setNoteMembers([]);
    }
    
  };


  const handleAddBlankNote = () => {

    let newDayNow = dayjs().date();
    let newMonthNow = dayjs().format("MMM");
    let newYearNow = dayjs().format("YYYY");
    let newTimeNow = dayjs().format("HH:mm");

    let id =  new Date().getTime();

    const newNote = {
      id: id,
      day: newDayNow,
      month: newMonthNow,
      year: newYearNow,
      time: newTimeNow,
      title: '',
      message: '',
      locked: false,
      password: '',
      pinned: false,
      members: []
    };

    setNotes([...notes, newNote]);
    setFilteredNote([...notes, newNote]);
    // setCurrentTitle("");
    // setCurrentMessage("");
    // setNewNoteToggler(false);
    // setHasEntered(false);
    // setInputText('');
    handleShowNote(id)
    
  };


  const handleDeleteNote = (id) => {
    const index = notes.findIndex((note) => note.id === id);

    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setNewNoteToggler(false);
    setShowNote(null);
  };

  const [newTitleValue, setNewTitleValue] = useState("");
  const [newMessageValue, setNewMessageValue] = useState("");

  const handleUpdateNote = (index, newTitleValue, newMessageValue) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      title: newTitleValue,
      message: newMessageValue,
    };

    // console.log('updatedNotes',updatedNotes)
    setNotes(updatedNotes);


    // setNewTitleValue("");
    // setNewMessageValue("");
    // setShowNote(false);
  };


  const newHandleUpdateNote = (index, newTitleValue, newMessageValue) => {
    let newDayNow = dayjs().date();
    let newMonthNow = dayjs().format("MMM");
    let newYearNow = dayjs().format("YYYY");
    let newTimeNow = dayjs().format("HH:mm");

    const updatedNotes = [...notes];
    updatedNotes[index] = {
      ...updatedNotes[index],
      title: newTitleValue,
      message: newMessageValue,
      day: newDayNow,
      month: newMonthNow,
      year: newYearNow,
      time: newTimeNow,
    };

    setNotes(updatedNotes);


    // setNewTitleValue("");
    // setNewMessageValue("");
    // setShowNote(false);
  };

  

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const dayNow = dayjs().date();
  const monthNow = dayjs().format("MMM");
  const yearNow = dayjs().format("YYYY");
  const timeNow = dayjs().format("HH:mm");



  // getting title from first enter
  const handleMessageChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    const lines = newText.split('\n');
    const firstLine = lines[0];
    const restLines = lines.slice(1).join('\n');

    if (!hasEntered && newText.includes('\n')) {
      setCurrentTitle(firstLine);
      setCurrentMessage(restLines);
      setHasEntered(true);
    } else if (hasEntered && currentTitle !== firstLine) {
      setCurrentTitle(firstLine);
      setCurrentMessage(restLines);
    } else if (hasEntered && currentTitle === firstLine) {
      setCurrentMessage(restLines);
    }
  };



  // start text editor
  const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
      orderedList: {
        keepMarks: true,
        keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
      },
    }),
    Document,
    Paragraph.configure({
      HTMLAttributes: {
        class: 'paragraph',
      },
    }),
    Text,
    Gapcursor,
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableHeader,
    TableCell,
    Image,
    // Focus.configure({
    //   className: 'has-focus',
    //   mode: 'deepest',
    // }),
    Placeholder.configure({
      placeholder: 'Write something …',
    }),
  ]
  
  const content = `
  <h2>
    Hi there,
  </h2>
  <p>
    this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
  </p>
  <ul>
    <li>
      That’s a bullet list with one …
    </li>
    <li>
      … or two list items.
    </li>
  </ul>
  <p>
    Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
  </p>
  <pre><code class="language-css">body {
  display: none;
  }</code></pre>
  <p>
    I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
  </p>
  <blockquote>
    Wow, that’s amazing. Good work, boy! 👏
    <br />
    — Mom
  </blockquote>
  `

  const newContent = `
  <p><strong>
  </strong></p>
  <p>
  </p>
  `


  const handleSubmitPassword = (password) => {
    // const selected = notes.find((note) => note.id === id);
    const index = notes.findIndex((note) => note.id === selectedNote.id)

    if(password === selectedNote.password) {
      
      const updatedNotes = [...notes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        locked: false,
        password: ''
      };

      setNotes(updatedNotes);
    } else if (password !== selectedNote.password) {
      alert('Wrong')
    }
  }

  const handleUpdatePassword = (id, password) => {

    const index = notes.findIndex((note) => note.id === id);
    // const selected = notes.find((note) => note.id === id);

    if (selectedNote != null) {
      const updatedNotes = [...notes];
      updatedNotes[index] = {
        ...updatedNotes[index],
        locked: true,
        password: password
      };
  
      setNotes(updatedNotes);
    }

    if (selectedNote === null) {
      setNotePassword(password)
      setNoteIsLocked(!noteIsLocked);
    }
  };


  const handleUpdateNoteMembers = (members) => {
    const index = notes.findIndex((note) => note.id === showNote);

    if (index !== -1) { 
        const updatedNotes = [...notes];
        updatedNotes[index] = {
            ...updatedNotes[index],
            members: members
        };

        setNotes(updatedNotes);
    } else {
        setNoteMembers(members);
    }
  }


  



  const MenuBar = () => {
    const { editor } = useCurrentEditor()
  
    if (!editor) {
      return null
    }
  
    return (
  
      <NotesDetailsBar editor={editor} setSearchNote={setSearchNote} searchNote={searchNote} handleDeleteNote={handleDeleteNote} showNote={showNote} handleLockNote={handleLockNote} setNotePassword={setNotePassword} notePassword={notePassword} handleUpdatePassword={handleUpdatePassword} handleUpdateNotePinned={handleUpdateNotePinned} handleUpdateNoteMembers={handleUpdateNoteMembers} setNoteMembers={setNoteMembers} noteMembers={noteMembers} selectedNote={selectedNote}/>
  
    )
  }

  
  // start search menu popup
  const [searchFocused, setSearchFocused] = useState(null);

  const [searchText, setSearchText] = useState(searchNote);
  // end search menu popup
 


  // start create new blank note when the get open for the first time
  // useEffect(() => {
  //   handleAddBlankNote()
  // },[])
  // end create new blank note when the get open for the first time
  

  return (
    <>
      <div className='cloud-page__header_notes-details'>
        <div className='cloud-page__header_notes-details_search_wrapper'>
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
              {!appIsFullPage ?
                <IconButton aria-label="expand" onClick={openFullPage}>
                    <img src={expandIcon} alt='expand' />    
                </IconButton>
                :
                <IconButton aria-label="compress" onClick={closeFullPage}>
                    <img src={compressIcon} alt='compress' />    
                </IconButton>
              }

              <IconButton aria-label="delete" onClick={() => {
                dispatch(handleCloseAppsModal())
                setFirstTimeNoteAppLaunch(false)
              }}>
                <CloseIcon />
              </IconButton>
            </ButtonGroup>
          </div>
        </div>
      </div>

      {viewMode === 'list' && (
        <div className="listview-notes-page">
          <div className='grid-content'>
            <div className='grid-content_left'>
              <div className="listview-notes-page_sidebar">
                <div className="listview-notes-page_sidebar_create-event">

                  {
                    newNoteToggler && currentTitle && currentMessage ?
                      <Button
                        // variant="outlined"
                        // startIcon={<AddIcon />}
                        className="listview-notes-page_sidebar_create-event_btn"
                        // onClick={() => handleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage)}
                        onClick={() => {
                          const newDayNow = dayjs().date();
                          const newMonthNow = dayjs().format("MMM");
                          const newYearNow = dayjs().format("YYYY");
                          const newTimeNow = dayjs().format("HH:mm");
                          newHandleAddNote(newDayNow, newMonthNow, newYearNow, newTimeNow, currentTitle, currentMessage, noteIsLocked, notePassword, noteIsPinned, noteMembers)
                        }}
                      >
                        {t("NOTES_PAGE.CREATE_NOTE_BUTON")}
                      </Button>

                    :
                      <Button
                        // variant="outlined"
                        // startIcon={<AddIcon />}
                        className="listview-notes-page_sidebar_create-event_btn"
                        // onClick={handleCreateNote}
                        onClick={() => {
                          handleAddBlankNote()
                          setFirstTimeNoteAppLaunch(true)
                        }}
                      >
                        {t("NOTES_PAGE.CREATE_NOTE_BUTON")}
                      </Button>

                  }

                  
                </div>

                {filteredNote.some(item => item.pinned) && (
                  <>
                    <p className="listview-notes-page_sidebar-title">
                      <img src={pinIcon} alt="pinned" />
                      Pinned
                    </p>

                    <Tabs
                      orientation="vertical"
                      variant="scrollable"
                      value={showNote}
                      // value={showNote !== null && notes.some(note => note.id === showNote) ? showNote : 0}
                      // onChange={handleShowNote}
                      // onChange={(event) => handleShowNote(event, id)}
                      aria-label="Vertical tabs example"
                      className="listview-notes-page_sidebar-section_notes-list"
                    >
                      {filteredNote
                      .filter(item => item.pinned)
                      .map((item, index) => (
                        <Tab
                          className={`listview-notes-page_sidebar-section_notes-item ${showNote === item.id && 'Mui-selected'}`}
                          key={item.id}
                          // tabIndex={item.id}
                          tabIndex={showNote === item.id  ? showNote : -1}
                          aria-selected={showNote === item.id  ? true : false}
                          {...a11yProps(item.id)}
                          component={"div"}
                          onClick={() => {
                            handleShowNote(item.id)
                            setNoteMembers(item.members);

                          }}
                          label={
                            <>
                              <div className="listview-notes-page_sidebar-section_notes-item_content">
                                <p className="listview-notes-page_sidebar-section_notes-item_content_name">
                                  {item.title}
                                </p>
                                <p className="listview-notes-page_sidebar-section_notes-item_content_message">
                                  <span>{item.time}</span> 
                                  <span>{item.message.content[1].content ? item.message.content[1].content[0].text : ''}</span>
                                </p>
                              </div>

                              <div className="listview-notes-page_sidebar-section_notes-item_actions">
                                {/* <div className="listview-notes-page_sidebar-section_notes-item_actions-delete">
                                  <IconButton
                                    aria-label="delete"
                                    id="long-button"
                                    aria-controls={open ? "long-menu" : undefined}
                                    aria-expanded={open ? "true" : undefined}
                                    aria-haspopup="true"
                                    onClick={() => handleDeleteNote(index)}
                                  >
                                    <img src={trashIcon} />
                                  </IconButton>
                                </div> */}

                                {item.locked && (
                                  <div className="listview-notes-page_sidebar-section_notes-item_actions-locked">
                                    <img src={smallLockedIcon} />
                                  </div>
                                )}
                              </div>
                            </>
                          }
                        />
                      ))
                      }
                    </Tabs>
                  </>
                )}

                <div className="listview-notes-page_sidebar-section">
                  
                  {filteredNote.some(item => item.pinned) && (
                    <p className="listview-notes-page_sidebar-title">Notes</p>
                  )}
                  
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={showNote}
                    // value={showNote !== null && notes.some(note => note.id === showNote) ? showNote : 0}
                    // onChange={handleShowNote}
                    // onChange={(event) => handleShowNote(event, id)}
                    aria-label="Vertical tabs example"
                    className="listview-notes-page_sidebar-section_notes-list"
                  >
                    {filteredNote
                    .filter(item => !item.pinned)
                    .map((item, index) => (
                      <Tab
                        className={`listview-notes-page_sidebar-section_notes-item ${showNote === item.id && 'Mui-selected'}`}
                        key={item.id}
                        // tabIndex={item.id}
                        tabIndex={showNote === item.id  ? showNote : -1}
                        aria-selected={showNote === item.id  ? true : false}
                        {...a11yProps(item.id)}
                        component={"div"}
                        onClick={() => {
                          handleShowNote(item.id)
                          setNoteMembers(item.members);
                        }}
                        label={
                          <>
                            <div className="listview-notes-page_sidebar-section_notes-item_content">
                              <div className="listview-notes-page_sidebar-section_notes-item_content-icon" style={{paddingTop: item.title ? '2px' : '0' }}>
                                {
                                  showNote === item.id ? 
                                    <img src={documentColorIcon} alt="active note" />
                                  :
                                    <img src={documentGrayIcon} alt="not active note" />
                                }
                              </div>

                              <div className="listview-notes-page_sidebar-section_notes-item_content-text">
                                {item.title && 
                                  <p className={`listview-notes-page_sidebar-section_notes-item_content-text_name ${showNote === item.id && 'active'}`}>
                                    {item.title}
                                  </p>
                                }
                                <p className={`listview-notes-page_sidebar-section_notes-item_content-text_message ${showNote === item.id && 'active'}`}>
                                  <span>{item.time}</span> 
                                  <span>{item.message.content && item.message.content[1] && item.message.content[1].content ? item.message.content[1].content[0].text : ''}</span>
                                </p>
                              </div>
                              
                            </div>

                            <div className="listview-notes-page_sidebar-section_notes-item_actions">
                              {/* <div className="listview-notes-page_sidebar-section_notes-item_actions-delete">
                                <IconButton
                                  aria-label="delete"
                                  id="long-button"
                                  aria-controls={open ? "long-menu" : undefined}
                                  aria-expanded={open ? "true" : undefined}
                                  aria-haspopup="true"
                                  onClick={() => handleDeleteNote(index)}
                                >
                                  <img src={trashIcon} />
                                </IconButton>
                              </div> */}

                              {item.locked && (
                                <div className="listview-notes-page_sidebar-section_notes-item_actions-locked">
                                  <img src={smallLockedIcon} />
                                </div>
                              )}
                            </div>
                          </>
                        }
                      />
                    ))
                    }
                  </Tabs>
                </div>
              </div>
            </div>

            <div className='grid-content_right'>
              <div className="listview-notes-page_main">
                <div className="listview-notes-page_main_notes">

                  {showNote &&
                     
                    <div className='listview-notes-page_main_notes-messages'>
                      {filteredNote.map((item, index) => {
                        return (
                          <TabPanel key={item.id} value={showNote} id={item.id} className='listview-notes-page_main_notes-messages-tabpanel'>
                            
                            {item.locked && (
                              <NotesLockPage selectedNote={selectedNote} setSelectedNote={setSelectedNote} handleSubmitPassword={handleSubmitPassword} />
                            )}

                            {!item.locked && (
                             <div className='listview-notes-page_main_notes-messages__body'>
                            
                               <div className='listview-notes-page_main_notes-messages__body-date'>
                                 <p>{item.day} {item.month} {item.year} at {item.time}</p>
                               </div>

                               <div className='listview-notes-page_main_notes-messages__body-content'>
                                 {/* <TextField
                                   // className='listview-notes-page_main_notes-messages__body-content-title'
                                   className='listview-notes-page_main_notes-messages__body-content-message'
                                   placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                                   multiline
                                   value={newTitleValue || item.title}
                                   onChange={(e) => {
                                     setNewTitleValue(e.target.value)
                                     handleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)
                                   }}
                                 />

                                 <TextField
                                   className='listview-notes-page_main_notes-messages__body-content-message'
                                   placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                                   multiline
                                   value={newMessageValue || item.message}
                                   onChange={(e) => {
                                     setNewMessageValue(e.target.value)
                                     handleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)
                                   }}
                                 /> */}


                                 <EditorProvider
                                   slotBefore={<MenuBar />}
                                   extensions={extensions}
                                   content={item.message ? item.message : newContent}

                                   onCreate= {({ editor }) => {
                                    // editor.commands.focus('end')
                                   }}

                                   onBeforeCreate= {({ editor }) => {
                                    // editor.commands.focus('end')
                                   }}
                                   
                                   autofocus = {item.message && 'end'}

                                   onUpdate={({editor}) => {
                                     setNewTitleValue(editor.getJSON().content[0].content ? editor.getJSON().content[0].content[0].text : '')
                                     setNewMessageValue(editor.getJSON())

                                     newHandleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)
                                     

                                   }}
                                 >
                                 </EditorProvider>


                                 <div className='listview-notes-page_main_notes-messages__body-content_save'>
                                  <Button
                                    className='listview-notes-page_main_notes-messages__body-content_save-btn'
                                    onClick={() => newHandleUpdateNote(index, newTitleValue || item.title, newMessageValue || item.message)}
                                  >
                                    Save
                                  </Button>

                                  <p className='listview-notes-page_main_notes-messages__body-content_save-date'>
                                    Last save {item.month} {item.day}, {item.year} at {item.time}
                                  </p>

                                 
                                </div>
                                  
                               </div>
                               

                               <div className='listview-notes-page_main_notes-messages__body-members' style={{borderTop: noteMembers.length > 0 ? '1px solid #E8E7E4' : 'unset'}}>
                                {noteMembers.map((member) => (
                                  <div className='listview-notes-page_main_notes-messages__body-members_item' key={member.id}>
                                    <Avatar alt={member.name} src={member.image} />
                                  </div>
                                ))}
                               </div>

                               {/* <div className='listview-notes-page_main_notes-messages__body-submit'>
                                 <button
                                   className='btn'
                                   disabled= {!newTitleValue || !newMessageValue}
                                   onClick={() => handleUpdateNote(index, newTitleValue, newMessageValue)}>
                                     Update note
                                 </button>
                               </div> */}
                             </div>
                            )}
   
                          </TabPanel>
                        )
                      }
                      )}
                    </div>
                    
                  }

                  {newNoteToggler &&
                    
                    <div className='listview-notes-page_main_notes-messages'>
                      <div className='listview-notes-page_main_notes-messages__body'>
                        <div className='listview-notes-page_main_notes-messages__body-date'>
                          <p>{dayNow} {monthNow} {yearNow} at {timeNow}</p>
                        </div>
          
                        <div className='listview-notes-page_main_notes-messages__body-content'> 
                            {/* <TextField
                              className='listview-notes-page_main_notes-messages__body-content-title'
                              placeholder={t('NOTE_POPUP.CREATE_NOTE.TITLE')}
                              multiline
                              value={currentTitle}
                              onChange={(e) => setCurrentTitle(e.target.value)}
                            /> */}
                           
                            {/* <TextField
                              className='listview-notes-page_main_notes-messages__body-content-message'
                              placeholder={t('NOTE_POPUP.CREATE_NOTE.PLACEHOLDER')}
                              multiline
                              value={inputText}
                              autoFocus
                              onChange={handleMessageChange}
                            /> */}



                          <EditorProvider
                            slotBefore={<MenuBar />}
                            extensions={extensions}
                            content={currentMessage}
                            
                            // onCreate= {({ editor }) => {
                            //   editor.commands.focus('end')
                            //   handleAddBlankNote()
                            // }}

                            onCreate= {({ editor }) => {
                              // editor.commands.focus('end')
                              // handleAddBlankNote()
                              if (firstTimeNoteAppLaunch) {
                                handleAddBlankNote()
                              }
                            }}

                            onDestroy= {(editor) => {
                              
                            }}

                            onBeforeCreate= {({ editor }) => {
                              // editor.commands.focus('end')
                              // handleAddBlankNote()
                              // console.log('before')
                            }}
                            
                            // autofocus= 'end'

                            onUpdate={({editor}) => {
                              setCurrentTitle(editor.getJSON().content[0].content[0] ? editor.getJSON().content[0].content[0].text : '')
                              setCurrentMessage(editor.getJSON())
                            }}
                          >
                          </EditorProvider>

                          <div className='listview-notes-page_main_notes-messages__body-content_save'>
                            <Button
                              className='listview-notes-page_main_notes-messages__body-content_save-btn'
                              onClick={() => {
                                let newDayNow = dayjs().date();
                                let newMonthNow = dayjs().format("MMM");
                                let newYearNow = dayjs().format("YYYY");
                                let newTimeNow = dayjs().format("HH:mm");
                                newHandleAddNote(newDayNow, newMonthNow, newYearNow, newTimeNow, currentTitle, currentMessage, noteIsLocked, notePassword, noteIsPinned, noteMembers)}

                              }
                            >
                              Save
                            </Button>

                            {/* <p className='listview-notes-page_main_notes-messages__body-content_save-date'>
                              Last save {monthNow} {dayNow} {yearNow} at {timeNow}
                            </p> */}
                          </div>


                        </div>

                        <div className='listview-notes-page_main_notes-messages__body-members' style={{borderTop: noteMembers.length > 0 ? '1px solid #E8E7E4' : 'unset'}}>
                          {noteMembers.length > 0 && (noteMembers.map((member) => (
                            <div className='listview-notes-page_main_notes-messages__body-members_item' key={member.id}>
                              <Avatar alt={member.name} src={member.image} />
                            </div>
                          )))
                          }
                        </div>

                        {/* <div className='listview-notes-page_main_notes-messages__body-submit' >
                          <button
                            className='btn'
                            disabled={!currentTitle || ! currentMessage}
                            onClick={() => handleAddNote(dayNow, monthNow, yearNow, timeNow, currentTitle, currentMessage)}>
                            Add
                          </button>
                        </div> */}



                      </div>
                    </div>
                    
                  }

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {viewMode === 'grid' && (
        <div className="gridview-notes-page">
          <div className="gridview-notes-page_container">
            <Tabs
              // orientation="vertical"
              variant="scrollable"
              value={showNote}
              // value={showNote !== null && notes.some(note => note.id === showNote) ? showNote : 0}
              // onChange={handleShowNote}
              // onChange={(event, id) => handleShowNote(event, id)}
              aria-label="Vertical tabs example"
              className="gridview-notes-page_list"
            >
              {filteredNote.map((item, index) => (
                <Tab
                  className={`gridview-notes-page_item ${showNote === item.id && 'Mui-selected'}`}
                  key={item.id}
                  tabIndex={showNote === item.id  ? showNote : -1}
                  aria-selected={showNote === item.id  ? true : false}
                  {...a11yProps(item.id)}
                  component={"div"}
                  onClick={() => handleShowNote(item.id)}
                  label={
                    <>
                      <div className="gridview-notes-page_item_content">
                        <p className="gridview-notes-page_item_content_title">
                          {item.title}
                        </p>
                        <p className="gridview-notes-page_item_content_message">
                          {item.locked && (
                            <div className="gridview-notes-page_item_content_message-locked">
                              <img src={lockpageIcon} alt="locked" />
                            </div>
                          )}

                          {!item.locked && (
                            <EditorProvider
                              extensions={extensions}
                              content={item.message}
                              editable= {false}
                            >
                            </EditorProvider>
                          )}
                        </p>
                      </div>


                      <p className="gridview-notes-page_item_info">
                        <p className="gridview-notes-page_item_info-title">
                          {item.title}
                        </p>

                        <p className="gridview-notes-page_item_info-time">
                          {item.time}
                        </p>
                      </p>

                     
                    </>
                  }
                />
              ))}
            </Tabs>
          </div>
        </div>
      )}

      
    </>
  );
}

export default NotesPageContent;