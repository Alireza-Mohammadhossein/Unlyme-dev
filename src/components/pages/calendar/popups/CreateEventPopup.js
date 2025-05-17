import React, { useState, useEffect } from 'react';
import './createevent-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import dayjs from "dayjs";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { getCalendars } from '../../../../api/Api';






const CreateEventsPopup = ({ setCreateEventPopup, handleSubmitEvent, categories, eventName, handleEventName, startDate, handleStartDate, startTime, handleStartTime, endDate, handleEndDate, endTime, handleEndTime,  allDay, handleAllDay, repeat, handleRepeat, calendars, calendar, handleCalendar, details, handleDetails, handleDeleteEvent, closeEventPopup, editEventMode }) => {








  const minRepeatNumber = 0;
  const maxRepeatNumber = 30;
  
  const [repeatNumber, setRepeatNumber] = useState(0);
  const handleRepeatNumber = (event) => {
    const newValue = parseInt(event.target.value, 10);
    
    if (!isNaN(newValue) && newValue >= minRepeatNumber && newValue <= maxRepeatNumber) {
      setRepeatNumber(newValue);
    }
    // setRepeatNumber(event.target.value);
  };

  const handleDecreaseRepeatNumber = () => {
    if (repeatNumber > minRepeatNumber) {
      setRepeatNumber(repeatNumber - 1);
    }
  }

  const handleIncreseRepeatNumber = () => {
    if (repeatNumber < maxRepeatNumber) {
      setRepeatNumber(repeatNumber + 1);
    }
  }


  const [repeatLoop, setRepeatLoop] = useState('day');
  const handleRepeatLoop = (event) => {
    setRepeatLoop(event.target.value);
  };

  const [endRepeat, setEndRepeat] = useState('');
  const handleEndRepeat = (event) => {
    setEndRepeat(event.target.value);
  };

  const [endRepeatDate, setEndRepeatDate] = useState(dayjs(new Date()));
  const handleEndRepeatDate = (newValue) => {
    setEndRepeatDate(newValue);
  };
  
  const [endLoop, setEndLoop] = useState('day');
  const handleEndLoop = (event) => {
    setEndLoop(event.target.value);
  };




  const handleResetEvent = () => {
    setRepeatNumber(0)
    setRepeatLoop('day')
    setEndRepeat('')
    setEndRepeatDate(dayjs(new Date()))
    setEndLoop('day')
  }

  // const handleSubmitEvent = () => {
  //   // setCreateEventPopup(false)
  //   // setEventName('')
  //   // setStartDate(dayjs(new Date()))
  //   // setStartTime(dayjs(new Date()))
  //   // setEndDate(dayjs(new Date()))
  //   // setEndTime(dayjs(new Date()))
  //   setAllDay(false)
  //   setRepeat('')
  //   setCategory('')
  //   setNote('')
  //   setRepeatNumber(0)
  //   setRepeatLoop('day')
  //   setEndRepeat('')
  //   setEndRepeatDate(dayjs(new Date()))
  //   setEndLoop('day')
  // }


  return (
    <div className='create-eventpopup'>
      <div className='create-eventpopup-header'>
        <div className='create-eventpopup-header-title'>
          {/* <FilterListIcon /> */}
          {editEventMode ? <p>Edit event</p> : <p>Create event</p>}
          {/* <p>Create event</p> */}
        </div>

        <div className='create-eventpopup-header-btn'>
          <IconButton onClick={closeEventPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='create-eventpopup-list'>
        <div className='create-eventpopup-item'>
          <p className="create-eventpopup-item-title">
              Event
          </p>

          <FormControl fullWidth>
            <TextField className="create-eventpopup-item-input" value={eventName} onChange={handleEventName} />
          </FormControl>

        </div>

        <div className='create-eventpopup-item'>
          <p className="create-eventpopup-item-title">
              Start
          </p>

          <div className='create-eventpopup-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                value={startDate} 
                onChange={handleStartDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            {
              !allDay ?
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DesktopTimePicker',
                    ]}
                  >
                    <DemoItem>
                      <DesktopTimePicker
                        value={startTime}
                        onChange={handleStartTime}
                        endAdornment ={<InputAdornment position="end"><FilterListIcon /></InputAdornment>}
                        ampm={false}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              :
                ''
            }

            
          </div>
        </div>

        <div className='create-eventpopup-item'>
          <p className="create-eventpopup-item-title">
              End
          </p>

          <div className='create-eventpopup-item-double'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                value={endDate} 
                onChange={handleEndDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>

            {
              !allDay ?
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={[
                      'DesktopTimePicker',
                    ]}
                  >
                    <DemoItem>
                      <DesktopTimePicker
                        value={endTime}
                        onChange={handleEndTime}
                        endAdornment ={<InputAdornment position="end"><FilterListIcon /></InputAdornment>}
                        ampm={false}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              :
                ''
            }

            
          </div>
        </div>

        <div className='create-eventpopup-item'>
          <div className='create-eventpopup-item-checkbox'>
            <FormControlLabel control={<Checkbox value={allDay} onChange={handleAllDay} />} label="All Day" />
          </div>
        </div>

      
        <div className='create-eventpopup-item'>
          <p className="create-eventpopup-item-title">
              Calendar
          </p>

          <FormControl fullWidth>
            <Select
              className="create-eventpopup-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={calendar}
              onChange={handleCalendar}
            >
              {calendars.map((calendar) => (
                <MenuItem className='calendar_create-eventpopup-item-select-item' value={calendar.id}>{calendar.name} <span className='color-bullet' style={{backgroundColor: calendar.color}}></span></MenuItem>
              ))}
            </Select>
          </FormControl>

        </div>

        <div className='create-eventpopup-item note'>
          <p className="create-eventpopup-item-title">
              Note
          </p>

          <FormControl fullWidth>
            <TextField
                className='create-eventpopup-item-input'
                variant="outlined"
                value={details}
                onChange={handleDetails}
                multiline
                maxRows={5}
            />
          </FormControl>

        </div>




        <div className='create-eventpopup-btn'>
          <Button className='create-eventpopup-btn-reset' onClick={handleDeleteEvent}>{editEventMode ? 'Delete' : 'Reset'}</Button>

          <Button className='create-eventpopup-btn-submit' onClick={handleSubmitEvent}>Submit</Button>
        </div>
      </div>
    </div>
  );
}


export default CreateEventsPopup;






