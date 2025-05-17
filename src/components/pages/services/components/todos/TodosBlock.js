import React, {useState} from "react";
import { useTranslation } from "react-i18next";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Modal from '@mui/material/Modal';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "react-redux";
import { handleOpenWorkDriveWidgetModal, handleCloseWorkDriveWidgetModal } from '../../../../../redux/app/appsModalSlice';
import plusIcon from '../../../../../assets/images/my-services/plus.svg';
import expandIcon from '../../../../../assets/images/my-services/expand.svg';
import arrowDownIcon from '../../../../../assets/images/my-services/workdrive/arrow-down.svg';
import checkIcon from '../../../../../assets/images/my-services/workdrive/check.svg';
import trashIcon from '../../../../../assets/images/my-services/todos/trash.svg';
import eyeIcon from '../../../../../assets/images/my-services/todos/eye.svg';
import editIcon from '../../../../../assets/images/my-services/todos/edit.svg';
import { sampleTodos, sampleProjectsTodos, sampleUsers } from "../../../../../mocks/mocks";
import addBlueIcon from '../../../../../assets/images/todos/plus-blue.svg';
import sortIcon from '../../../../../assets/images/todos/sort.svg';
import upToDownIcon from '../../../../../assets/images/todos/uptodown.svg';
import downToUpIcon from '../../../../../assets/images/todos/downtoup.svg';
import editGrayIcon from '../../../../../assets/images/todos/edit-gray.svg';
import checkedIcon from '../../../../../assets/images/todos/checked.svg';
import noCheckedIcon from '../../../../../assets/images/todos/nochecked.svg';
import dueDateIcon from '../../../../../assets/images/todos/duedate.svg';
import moreIcon from '../../../../../assets/images/todos/more.svg';
import arrowRightIcon from '../../../../../assets/images/todos/more/arrow-right.svg';


import plusGrayIcon from '../../../../../assets/images/todos/more/plus.svg'
import assignIcon from '../../../../../assets/images/todos/more/assign.svg';
import calendarIcon from '../../../../../assets/images/todos/more/calendar.svg';
import copyIcon from '../../../../../assets/images/todos/more/copy.svg';
import duplicateIcon from '../../../../../assets/images/todos/more/duplicate.svg';
import folderIcon from '../../../../../assets/images/todos/more/folder.svg';
import helpIcon from '../../../../../assets/images/todos/more/help.svg';
import indentIcon from '../../../../../assets/images/todos/more/indent.svg';
import pasteIcon from '../../../../../assets/images/todos/more/paste.svg';
import subtaskIcon from '../../../../../assets/images/todos/more/subtask.svg';
import deleteIcon from '../../../../../assets/images/todos/more/trash.svg';
import unindentIcon from '../../../../../assets/images/todos/more/unindent.svg';
import calendarArrowRightIcon from '../../../../../assets/images/todos/more/calendar-arrow-right.svg';
import calendarArrowLeftIcon from '../../../../../assets/images/todos/more/calendar-arrow-left.svg';
import reloadIcon from '../../../../../assets/images/todos/more/reload.svg';
import checkedUsersIcon from '../../../../../assets/images/todos/more/check-user.svg';

import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';

import Calendar from 'react-calendar';
import FormControlLabel from '@mui/material/FormControlLabel';
import { toast } from "react-toastify";






const TodosBlock = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const openWorkDriveWidgetModal = useSelector((state) => state.appsModal.openWorkDriveWidgetModal);
  const openCalendarWidgetModal = useSelector((state) => state.appsModal.openCalendarWidgetModal);
  const openTasksWidgetModal = useSelector((state) => state.appsModal.openTasksWidgetModal);
  const openNotesWidgetModal = useSelector((state) => state.appsModal.openNotesWidgetModal);
  const appsModal = useSelector((state) => state.appsModal.openAppsModal);

  const firstPopupTab = useSelector((state) => state.popup.firstPopupTab);
  const secondPopupTab = useSelector((state) => state.popup.secondPopupTab);



  // const handleOpenWorkDriveModal = () => {
  //   dispatch(handleOpenWorkDriveWidgetModal());
  // };
  // const handleCloseWorkDriveModal = () => {
  //   dispatch(handleCloseWorkDriveWidgetModal());
  // };


  const handleOpenTodosPopup = () => {
    const todosButton = document.querySelector('[aria-label="Todos"]')  
    todosButton.click();

    // const createEventButton = document.querySelector('[aria-label="calendar create event"]')
    // createEventButton.click();

    // const createEventButtonInterval = setInterval(() => {
    //   const createEventButton = document.querySelector('[aria-label="calendar create event"]')

    //   if (createEventButton) {
    //     createEventButton.click();

    //     clearInterval(createEventButtonInterval)
    //   }
    // },500)
  }


  const [projects, setProjects] = useState(sampleProjectsTodos)
  const [todos, setTodos] = useState(sampleTodos);


  // handle project popup
  const [anchorElProject, setAnchorElProject] = useState(null);
  const openProject = Boolean(anchorElProject);
  const handleProjectClick = (event) => {
    setAnchorElProject(event.currentTarget);
  };
  const handleCloseProject = () => {
    setAnchorElProject(null);
  };
  const [selectedProject, setSelectedProject] = useState(projects[0].name);



  const [addTask, setAddTask] = useState(false)
  const [addSubtask, setAddSubtask] = useState(false)

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newSubtaskTitle, setNewSubtaskTitle] = useState('');


  
  // handle sort popup
  const [anchorElSort, setAnchorElSort] = useState(null);
  const openSort = Boolean(anchorElSort);
  const handleSortClick = (event) => {
    setAnchorElSort(event.currentTarget);
  };
  const handleCloseSort = () => {
    setAnchorElSort(null);
  };
  const [selectedSort, setSelectedSort] = useState('');



  const handleSubmitNewTask = (e) => {

    if (e.key === 'Enter') {
      const newTask = {
        id: uuidv4(),
        done: false,
        title: newTaskTitle,
      };

      setTodos([newTask, ...todos]);

      setAddTask(false);
      setNewTaskTitle('');
      
    }
  }

  const handleSubmitNewSubtask = (e) => {

    if (e.key === 'Enter' && selectedTask && newSubtaskTitle) {
      const newSubtask = {
        id: uuidv4(),
        done: false,
        title: newSubtaskTitle,
      };

      const updatedTodos = todos.map((todo) => {
        if (todo === selectedTask) {
          return {
            ...todo,
            subtask: [newSubtask, ...(todo.subtask || [])],
          };
        }
        return todo;
      });

      setTodos(updatedTodos);
      setAddSubtask(false);
      setNewSubtaskTitle('');
      setSelectedTask(null);
      
    }
  }


  const [selectedTask, setSelectedTask] = useState([]);


  const handleDone = (id) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(updated);
  };


  const handleSubtaskDone = (todoToUpdate, subtaskId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoToUpdate.id) {
        const updatedTodo = { ...todo };
  
        updatedTodo.subtask = updatedTodo.subtask.map((subtask) => {
          if (subtask.id === subtaskId) {
            subtask.done = !subtask.done;
          }
          return subtask;
        });
  
        return updatedTodo;
      } else {
        return todo;
      }
    });
  
    setTodos(updatedTodos);
  };


  // start delete invoice popup
  const [deleteTaskPopup, setDeleteTaskPopup] = useState(false);
  const handleOpenDeleteTaskPopup = () => {
    // setDeleteTaskId(id);
    setDeleteTaskPopup(true)
  };
  const handleCloseDeleteTaskPopup = () => {
    setSelectedTask([]);
    setDeleteTaskPopup(false)
  };
  // end delete Task popup


  
  
  // start handel delete task
  const handleDeleteTask = () => {
    const updatedTodosAfterDelete = todos.filter((todo) => todo.id !== selectedTask.id);
    
    setTodos(updatedTodosAfterDelete)
  }
  // end handel delete task
  
  
  
  // count number of done subtasks
  function countDoneSubtasks(subtasks) {
    return subtasks.reduce((doneTasksNumber, subtask) => {
      if (subtask.done) {
        return doneTasksNumber + 1;
      }
      return doneTasksNumber;
    }, 0);
  }



  // handle more option popup
  const [anchorElMoreOption, setAnchorElMoreOption] = useState(null);
  const openMoreOption = Boolean(anchorElMoreOption);
  const handleMoreOptionClick = (event) => {
    console.log('event',event);

    console.log('event target',event.currentTarget);
    setAnchorElMoreOption(event.currentTarget);
  };
  const handleCloseMoreOption = () => {
    setAnchorElMoreOption(null);
  };


  
  // handle popover
  const dueDatePopupState = usePopupState({
    variant: 'popover',
    popupId: 'dueDatePopover',
  })

  const priorityPopupState = usePopupState({
    variant: 'popover',
    popupId: 'priorityPopover',
  })

  const assignPopupState = usePopupState({
    variant: 'popover',
    popupId: 'assignPopover',
  })

  const movePopupState = usePopupState({
    variant: 'popover',
    popupId: 'movePopover',
  })

 
  // calendar popover
  const [dueDate, setDueDate] = useState(new Date());

  const onChangeDueDate = (newDueDate) => {
    setDueDate(newDueDate);
    console.log(dueDate)
  }


  const [selectedTaskProject, setSelectedTaskProject] = useState('No project');

  // start selecting assign user
  const [users, setUsers] = useState(sampleUsers);
  const [userChecked, setUserChecked] = useState([]);

  const handleAssignUser = (user) => () => {
    const isUserChecked = userChecked.some((checkedUser) => checkedUser.id === user.id);
    const newChecked = [...userChecked];
  
    if (!isUserChecked) {
      newChecked.push(user);
    } else {
      const indexToRemove = newChecked.findIndex((checkedUser) => checkedUser.id === user.id);
      newChecked.splice(indexToRemove, 1);
    }
  
    setUserChecked(newChecked);

    console.log('userChecked',userChecked)
  };


  // handle show all popup
  const [anchorElShow, setAnchorElShow] = useState(null);
  const openShow = Boolean(anchorElShow);
  const handleShowClick = (event) => {
    setAnchorElShow(event.currentTarget);
  };
  const handleCloseShow = () => {
    setAnchorElShow(null);
  };
  const [selectedShow, setSelectedShow] = useState('All');


    



  return (
    <>
      <div className={`my-services__todos ${openNotesWidgetModal || appsModal || openCalendarWidgetModal || openTasksWidgetModal || openWorkDriveWidgetModal ? 'back-transparent' : ''}`}>
        <div className="my-services__todos_header">
          <div className="my-services__todos_header-view">
            <Button
              onClick={handleProjectClick}
            >
              {selectedProject}

              <img src={arrowDownIcon} alt='arrow down' />
            </Button>


            <Menu
              id="todos-project-popup"
              anchorEl={anchorElProject}
              open={openProject}
              onClose={handleCloseProject}
              disableScrollLock = {true}
            >
              {
                projects.map((project) => (
                  <MenuItem onClick={handleCloseProject} key={project.id}>
                    <Button
                      className={`todos-page-main_header-filter-project-btn ${selectedProject === project.name ? 'selected' : ''}`}
                      onClick={() => setSelectedProject(project.name)}
                    >
                      {project.name}

                      {
                        selectedProject === project.name ? <img src={checkIcon} /> : ''
                      }
                    </Button>
                  </MenuItem>
                ))
              }

            </Menu>
          </div>

          <div className="react-grid-dragHandleArea"></div>

          <div className="my-services__todos_header-more">

            <IconButton 
              aria-label="add" 
              // onClick={handleOpenWorkDrivePopup}
            >
              <img src={plusIcon} />
            </IconButton>

            <IconButton
              aria-label="view"
              onClick={handleShowClick}
              // onClick={handleOpenUploadMode}
            >
              <img src={eyeIcon} />
            </IconButton>

            <Menu
              id="todos-show-popup"
              anchorEl={anchorElShow}
              open={openShow}
              onClose={handleCloseShow}
              disableScrollLock = {true}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleCloseShow}>
                <Button
                  className={`todos-page-main_header-filter-project-btn ${selectedShow === 'All' ? 'selected' : ''}`}
                  onClick={() => setSelectedShow('All')}
                >
                  All
                </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseShow}>
                <Button
                  className={`todos-page-main_header-filter-project-btn ${selectedShow === 'Active' ? 'selected' : ''}`}
                  onClick={() => setSelectedShow('Active')}
                >
                  Active
                </Button>
              </MenuItem>
              
              <MenuItem onClick={handleCloseShow}>
                <Button
                  className={`todos-page-main_header-filter-project-btn ${selectedShow === 'Completed' ? 'selected' : ''}`}
                  onClick={() => setSelectedShow('Completed')}
                >
                  Completed
                </Button>
              </MenuItem>
            </Menu>

            <IconButton
              aria-label="edit"
            >
              <img src={editIcon} />
            </IconButton>

            <IconButton
              aria-label="trash"
            >
              <img src={trashIcon} />
            </IconButton>
            
            <IconButton
              aria-label="expand"
              onClick={handleOpenTodosPopup}
            >
              <img src={expandIcon} />
            </IconButton>

          </div>
        </div>

        <div className="my-services__todos_filter">
          <div className="my-services__todos_filter-add">
            <Button className="my-services__todos_filter-add-btn" onClick={() => setAddTask(!addTask)}>
              <img src={addBlueIcon} />
              Add Task
            </Button>
          </div>

          <div className="my-services__todos_filter-sort">
            <Button className="my-services__todos_filter-sort-btn" onClick={handleSortClick}>
              <img src={sortIcon} />
              Sort by
            </Button>


            <Menu
              id="todos-sort-popup"
              anchorEl={anchorElSort}
              open={openSort}
              onClose={handleCloseSort}
              disableScrollLock = {true}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('text a to z')}
                >
                  <img src={downToUpIcon} alt='down to up' />
                  Text (a-z)
                </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('text z to a')}
                >
                  <img src={upToDownIcon} alt='down to up' />
                  Text (z-a)
                </Button>
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('priority low to high')}
                >
                  <img src={downToUpIcon} alt='down to up' />
                  Priority (low to high)
                </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('priority high to low')}
                >
                  <img src={upToDownIcon} alt='up to down' />
                  Priority (high to low)
                </Button>
              </MenuItem>

              <Divider />

              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('due date old to new')}
                >
                  <img src={downToUpIcon} alt='down to up' />
                  Due date (old to new)
                </Button>
              </MenuItem>

              <MenuItem onClick={handleCloseSort}>
                <Button
                  className='my-services__todos_filter-sort-item'
                  onClick={() => setSelectedSort('due date new to old')}
                >
                  <img src={upToDownIcon} alt='up to down' />
                  Due date (new to old)
                </Button>
              </MenuItem>
            </Menu>
          </div>
          
        </div>

        <div className="my-services__todos_content">
          {
            addTask ? 
              <div className="my-services__todos_content-input">
                <TextField
                  autoFocus
                  // onBlur={() => setAddTask(false)}
                  value={newTaskTitle}
                  onKeyDown={handleSubmitNewTask}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img src={editGrayIcon} alt="Edit Icon" />
                      </InputAdornment>
                    ),
                  }}
                  placeholder='Enter a description' />
              </div>
            :
              ''
          }

          <div className="my-services__todos_content-list">
            {todos.map((todo) => (
              todo.subtask ?
                <Accordion className="accordion">
                  <AccordionSummary
                    expandIcon={<img src={arrowRightIcon} />}
                    aria-controls="panel1a-content"
                    className="accordion-summary"
                    style={{height: 'auto'}}
                  >
                    <div className="my-services__todos_content-list-task" key={todo.id}>
                      <div className="my-services__todos_content-list-task-info">
                        <Checkbox
                          className="my-services__todos_content-list-task-info-checkbox"
                          checked={todo.done}
                          icon={<img src={noCheckedIcon} alt='no checked' />}
                          checkedIcon={<img src={checkedIcon} alt='checked' />}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDone(todo.id);
                          }}
                        />
          
                        <div className="my-services__todos_content-list-task-info-title">
                          <p className={`${todo.done ? 'done' : ''}`}>
                            {todo.title}
                          </p>

                          {
                            todo.duedate ?
                              <span className="my-services__todos_content-list-task-info-title-date">
                                <img src={dueDateIcon} alt='due date' />
                                
                                {todo.duedate.date} at {todo.duedate.time}
                              </span>
                            :
                              ''
                          }


                        </div>

                        <div className="my-services__todos_content-list-task-info-numbers">
                          {countDoneSubtasks(todo.subtask)} / {todo.subtask.length}
                        </div>
                        
                        {
                          todo.members ?
                            <div className="my-services__todos_content-list-task-info-members">
                              <AvatarGroup max={3}>
                                  {
                                    todo.members ? 
                                      todo.members.map((member) => (
                                        <Avatar src={member.icon} className="my-services__todos_content-list-task-info-members-member" />
                                      ))
                                    :
                                      ''
                                  }
                              </AvatarGroup>
                            </div>
                          :
                            ''
                        }
          
                        <div className="my-services__todos_content-list-task-info-action">
                          <IconButton onClick={(e) => {
                            e.stopPropagation();
                            setSelectedTask(todo)
                            handleMoreOptionClick(e)
                          }}>
                            <img src={moreIcon} alt="more" />
                          </IconButton>
                        </div>
                      </div>

                      {
                        addSubtask && selectedTask.id === todo.id ? 
                          <div className="my-services__todos_content-list-task-input">
                            <TextField
                              autoFocus
                              // onBlur={() => {
                              //   setAddSubtask(false)
                              //   setSelectedTask(null)
                              // }}
                              onClick={(e) => e.stopPropagation()}
                              value={newSubtaskTitle}
                              onKeyDown={handleSubmitNewSubtask}
                              onChange={(e) => setNewSubtaskTitle(e.target.value)}
                              InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <img src={editGrayIcon} alt="Edit Icon" />
                                  </InputAdornment>
                                ),
                              }}
                              placeholder='Enter a description' />
                          </div>
                        :
                          ''
                      }
                    </div>

                  </AccordionSummary>
                  
                  <AccordionDetails className="accordion-details">
                    {
                      todo.subtask.map((item) => (
                        <div className="my-services__todos_content-list-task" key={item.id} style={{minHeight: item.duedate ? '68px' : '50px'}}>
                          <div className="my-services__todos_content-list-task-info">
                            <Checkbox
                              className="my-services__todos_content-list-task-info-checkbox"
                              checked={item.done}
                              icon={<img src={noCheckedIcon} alt='no checked' />}
                              checkedIcon={<img src={checkedIcon} alt='checked' />}
                              onClick={() => handleSubtaskDone(todo, item.id)}
                            />
              
                            <div className="my-services__todos_content-list-task-info-title">
                              <p className={`${item.done ? 'done' : ''}`}>
                                {item.title}
                              </p>

                              {
                                item.duedate ?
                                  <span className="my-services__todos_content-list-task-info-title-date">
                                    <img src={dueDateIcon} alt='due date' />

                                    {item.duedate.date} at {item.duedate.time}
                                  </span>
                                :
                                  ''
                              }
                            </div>
                          </div>

                        </div>
                      ))
                    }
                  </AccordionDetails>

                  {/* {todo.subtask && todo.subtask.length > 0 && <RenderTask todos={todo.subtask} />} */}
                  {/* {todo.subtask.subtask && todo.subtask.subtask.length > 0 && <RenderTask todos={todo.subtask} />} */}

                </Accordion>
              :
                <>
                  <div className="my-services__todos_content-list-task" key={todo.id}>
                    <div className="my-services__todos_content-list-task-info">
                      <Checkbox
                        className="my-services__todos_content-list-task-info-checkbox"
                        checked={todo.done}
                        icon={<img src={noCheckedIcon} alt='no checked' />}
                        checkedIcon={<img src={checkedIcon} alt='checked' />}
                        onClick={() => handleDone(todo.id)}
                      />
        
                      <div className="my-services__todos_content-list-task-info-title">
                        <p className={`${todo.done ? 'done' : ''}`}>
                          {todo.title}
                        </p>

                        {
                          todo.duedate ?
                            <span className="my-services__todos_content-list-task-info-title-date">
                              <img src={dueDateIcon} alt='due date' />

                              {todo.duedate.date} at {todo.duedate.time}
                            </span>
                          :
                            ''
                        }
                      </div>
                      
                      <div className="my-services__todos_content-list-task-info-members">
                        <AvatarGroup max={3}>
                            {
                              todo.members ? 
                                todo.members.map((member) => (
                                  <Avatar src={member.icon} className="my-services__todos_content-list-task-info-members-member" />
                                ))
                              :
                                ''
                            }
                        </AvatarGroup>
                      </div>
        
                      <div className="my-services__todos_content-list-task-info-action">
                        <IconButton onClick={(e) => {
                          setSelectedTask(todo)
                          handleMoreOptionClick(e)
                        }}>
                          <img src={moreIcon} alt="more" />
                        </IconButton>
                      </div>
                    </div>

                    {
                      addSubtask && selectedTask.id === todo.id ? 
                        <div className="my-services__todos_content-list-task-input">
                          <TextField
                            autoFocus
                            // onBlur={() => {
                            //   setAddSubtask(false)
                            //   setSelectedTask(null)
                            // }}
                            value={newSubtaskTitle}
                            onKeyDown={handleSubmitNewSubtask}
                            onChange={(e) => setNewSubtaskTitle(e.target.value)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <img src={editGrayIcon} alt="Edit Icon" />
                                </InputAdornment>
                              ),
                            }}
                            placeholder='Enter a description' />
                        </div>
                      :
                        ''
                    }

                  </div>
                </>  
            ))
            }

          </div>
        </div>


      </div>


      <Menu
        id="todos-more-option-popup"
        anchorEl={anchorElMoreOption}
        open={openMoreOption}
        onClose={handleCloseMoreOption}
        disableScrollLock = {true}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => {
          handleCloseMoreOption()
        }}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={plusGrayIcon} alt='Add task below' />
              Add task below
            </span>
          </Button>
        </MenuItem>

        <MenuItem>
          <Button
            className='my-services__todos_content-list-action-item'
            onClick={() => {
              handleCloseMoreOption()
              setAddSubtask(!addSubtask)
            }}
          >
            <span>
              <img src={subtaskIcon} alt='Add subtask' />
              Add subtask
            </span>
          </Button>
        </MenuItem>

        <Divider />
        
        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={indentIcon} alt='Indent' />
              Indent
            </span>
          </Button>
        </MenuItem>
        
        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={unindentIcon} alt='Unindent' />
              Unindent
            </span>
          </Button>
        </MenuItem>

        <MenuItem {...bindHover(dueDatePopupState)} disableRipple>
          <Button
            className='my-services__todos_content-list-action-item'
            disableRipple
            // onClick={}
          >
            <span>
              <img src={calendarIcon} alt='Set due date' />
              Set due date
            </span>
            
            <span>
              <img src={arrowRightIcon} />
            </span>
          </Button>

          <HoverPopover
            className="todos-more-option-submenu"
            {...bindPopover(dueDatePopupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className="todos-more-option-submenu-calendar">
              <Calendar
                onChange={onChangeDueDate}
                value={dueDate}
                nextLabel= {<img src={calendarArrowRightIcon} />}
                prevLabel= {<img src={calendarArrowLeftIcon} />}
                formatShortWeekday={(locale, date) => [ `S`, `M`, `T`, `W`, `T`, `F`, `S` ][date.getDay()]}
              />

              <Divider />

              <div className="todos-more-option-submenu-calendar-actions">
                <Button className="todos-more-option-submenu-calendar-actions-cancel" onClick={dueDatePopupState.close}>Cancel</Button>
                <Button className="todos-more-option-submenu-calendar-actions-save" onClick={dueDatePopupState.close}>Save</Button>
              </div>
            </div>
          </HoverPopover>
        </MenuItem>

        <MenuItem {...bindHover(priorityPopupState)} disableRipple>
          <Button
            className='my-services__todos_content-list-action-item'
            disableRipple
            // onClick={}
          >
            <span>
              <img src={helpIcon} alt='Priority' />
              Priority
            </span>

            <span>
              <img src={arrowRightIcon} />
            </span>
          </Button>

          <HoverPopover
            className="todos-more-option-submenu"
            {...bindPopover(priorityPopupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className="todos-more-option-submenu-priority">
              <div className="todos-more-option-submenu-priority-item">
                <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                  <span className="circle low"></span>
                  <p>Low</p>
                </Button>
              </div>
              
              <div className="todos-more-option-submenu-priority-item">
                <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                  <span className="circle medium"></span>
                  <p>Medium</p>
                </Button>
              </div>
              
              <div className="todos-more-option-submenu-priority-item">
                <Button className="todos-more-option-submenu-priority-item-btn" onClick={priorityPopupState.close} >
                  <span className="circle high"></span>
                  <p>High</p>
                </Button>
              </div>

              <Divider />

              <div className="todos-more-option-submenu-priority-item">
                <Button className="todos-more-option-submenu-priority-item-btn reset" onClick={priorityPopupState.close} >
                  <img src={reloadIcon} alt="reset priority" />
                  <p>Reset priority</p>
                </Button>
              </div>

            </div>
          </HoverPopover>
        </MenuItem>

        <MenuItem {...bindHover(assignPopupState)} disableRipple>
          <Button
            className='my-services__todos_content-list-action-item'
            disableRipple
            // onClick={}
          >
            <span>
              <img src={assignIcon} alt='Assign to' />
              Assign to
            </span>

            <span>
              <img src={arrowRightIcon} />
            </span>
          </Button>

          <HoverPopover
            className="todos-more-option-submenu"
            {...bindPopover(assignPopupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className="todos-more-option-submenu-assign">

              {
                users.map((user) => (
                  <div
                    className="todos-more-option-submenu-assign-item"
                    key={user.id}
                    style={{backgroundColor: userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1 ? 'rgba(81, 163, 255, 0.05)' : '' }}
                  >
                    <FormControlLabel

                      control={
                        <Checkbox
                          checked={userChecked.findIndex((checkedUser) => checkedUser.id === user.id) !== -1}
                          icon={<></>}
                          checkedIcon={<img src={checkedUsersIcon} alt='checked' />}
                          onChange={handleAssignUser(user)}
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
          </HoverPopover>
        </MenuItem>

        <MenuItem {...bindHover(movePopupState)} disableRipple>
          <Button
            className='my-services__todos_content-list-action-item'
            disableRipple
            // onClick={}
          >
            <span>
              <img src={folderIcon} alt='Move to' />
              Move to
            </span>

            <span>
              <img src={arrowRightIcon} />
            </span>
          </Button>

          <HoverPopover
            className="todos-more-option-submenu"
            {...bindPopover(movePopupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className="todos-more-option-submenu-move">
              <div className="todos-more-option-submenu-move-item">
                <Button
                  className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'No project' ? 'active' : ''}`}
                  onClick={() => {
                    movePopupState.close()
                    setSelectedTaskProject('No project')
                  }} 
                >
                  No project

                  {
                    selectedTaskProject === 'No project' ? <img src={checkIcon} /> : ''
                  }
                </Button>
              </div>

              <div className="todos-more-option-submenu-move-item">
                <Button
                  className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project one' ? 'active' : ''}`}
                  onClick={() => {
                    movePopupState.close()
                    setSelectedTaskProject('Project one')
                  }}
                >
                  Project one

                  {
                    selectedTaskProject === 'Project one' ? <img src={checkIcon} /> : ''
                  }
                </Button>
              </div>

              <div className="todos-more-option-submenu-move-item">
                <Button
                  className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project two' ? 'active' : ''}`}
                  onClick={() => {
                    movePopupState.close()
                    setSelectedTaskProject('Project two')
                  }} 
                >
                  Project two

                  {
                    selectedTaskProject === 'Project two' ? <img src={checkIcon} /> : ''
                  }
                </Button>
              </div>

              <div className="todos-more-option-submenu-move-item">
                <Button
                  className={`todos-more-option-submenu-move-item-btn ${selectedTaskProject === 'Project three' ? 'active' : ''}`}
                  onClick={() => {
                    movePopupState.close()
                    setSelectedTaskProject('Project three')
                  }} 
                >
                  Project three

                  {
                    selectedTaskProject === 'Project three' ? <img src={checkIcon} /> : ''
                  }
                </Button>
              </div>
            </div>
          </HoverPopover>
        </MenuItem>

        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={duplicateIcon} alt='Duplicate' />
              Duplicate
            </span>

            <span style={{color: '#B4B4B4'}}>
              Ctrl + D
            </span>
          </Button>
        </MenuItem>
        
        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={copyIcon} alt='Copy' />
              Copy
            </span>

            <span style={{color: '#B4B4B4'}}>
              Ctrl + C
            </span>
          </Button>
        </MenuItem>

        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item'
            // onClick={}
          >
            <span>
              <img src={pasteIcon} alt='Paste' />
              Paste
            </span>

            <span style={{color: '#B4B4B4'}}>
              Ctrl + V
            </span>
          </Button>
        </MenuItem>

        <Divider />

        <MenuItem onClick={handleCloseMoreOption}>
          <Button
            className='my-services__todos_content-list-action-item delete'
            onClick={(e) => {
              handleOpenDeleteTaskPopup()
            }}
          >
            <span>
              <img src={deleteIcon} alt='Delete' />
              Delete
            </span>
          </Button>
        </MenuItem>

      </Menu>

      <Modal
        open={deleteTaskPopup}
        onClose={() => handleCloseDeleteTaskPopup()}
        className='todos-page-modal'
      >
        <div className='todos-deletepopup'>
          <div className='todos-deletepopup-header'>
            <div className='todos-deletepopup-header-title'>
              <p>Delete Task</p>
            </div>

            <div className='todos-deletepopup-header-subtitle'>
              <p>This task will be deleted permanently. Are you sure?</p>
            </div>
          </div>

          <div className='todos-deletepopup-content'>
            <div className='todos-deletepopup-content-btn'>
                <Button onClick={() => handleCloseDeleteTaskPopup(false)}>
                    Cancel
                </Button>
            </div>

            <div className='todos-deletepopup-content-btn'>
                <Button onClick={() => {
                  // toast.error(`You have clicked on Delete invoice by id = ${selectedTask.id}!`, {
                  //   position: "top-center",
                  //   autoClose: 5000,
                  //   hideProgressBar: false,
                  //   closeOnClick: true,
                  //   pauseOnHover: false,
                  //   pauseOnFocusLoss: false,
                  //   draggable: true,
                  //   progress: undefined,
                  //   theme: "light",
                  // });
                  handleDeleteTask()
                  handleCloseDeleteTaskPopup(false);
                  }}>
                    Delete
                </Button>
            </div>
          </div>
        </div>
      </Modal>

    </>
  );
};

export default TodosBlock;
