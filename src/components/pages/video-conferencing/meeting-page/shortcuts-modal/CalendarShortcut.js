// start calendar without api
import React, { useState } from 'react';
import './meeting-shortcut.scss';
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
import calendarIcon from '../../../../../assets/images/my-services/calendar.png'





const CalendarShortcut = ({ setShortcutPopup, categories }) => {


  const [eventName, setEventName] = useState('');
  const handleEventName = (event) => {
    setEventName(event.target.value);
  };

  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const handleStartDate = (newValue) => {
    setStartDate(newValue);
  };

  const [startTime, setStartTime] = useState(dayjs(new Date()));
  const handleStartTime = (newValue) => {
    setStartTime(newValue);
  };

  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const handleEndDate = (newValue) => {
    setEndDate(newValue);
  };

  const [endTime, setEndTime] = useState(dayjs(new Date()));
  const handleEndTime = (newValue) => {
    setEndTime(newValue);
  };

  const [allDay, setAllDay] = useState(false);
  const handleAllDay = () => {
    setAllDay(!allDay);
  };

  const [repeat, setRepeat] = useState('');
  const handleRepeat = (event) => {
    setRepeat(event.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  const [note, setNote] = useState('');
  const handleNote = (event) => {
    setNote(event.target.value);
  };


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
    setEventName('')
    setStartDate(dayjs(new Date()))
    setStartTime(dayjs(new Date()))
    setEndDate(dayjs(new Date()))
    setEndTime(dayjs(new Date()))
    setAllDay(false)
    setRepeat('')
    setCategory('')
    setNote('')
    setRepeatNumber(0)
    setRepeatLoop('day')
    setEndRepeat('')
    setEndRepeatDate(dayjs(new Date()))
    setEndLoop('day')
  }

  const handleSubmitEvent = () => {
    setShortcutPopup(false)
    setEventName('')
    setStartDate(dayjs(new Date()))
    setStartTime(dayjs(new Date()))
    setEndDate(dayjs(new Date()))
    setEndTime(dayjs(new Date()))
    setAllDay(false)
    setRepeat('')
    setCategory('')
    setNote('')
    setRepeatNumber(0)
    setRepeatLoop('day')
    setEndRepeat('')
    setEndRepeatDate(dayjs(new Date()))
    setEndLoop('day')
  }


  return (
    <div className='meeting-shortcut'>
      <div className='meeting-shortcut-header'>
        <div className='meeting-shortcut-header-title'>
          {/* <FilterListIcon /> */}
          <img src={calendarIcon} alt='Calendar icon' />
          <p>Add Event</p>
        </div>

        <div className='meeting-shortcut-header-btn'>
          <IconButton onClick={() => setShortcutPopup(false)}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='meeting-shortcut-list'>
        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Event
          </p>

          <FormControl fullWidth>
            <TextField className="meeting-shortcut-item-input" value={eventName} onChange={handleEventName} />
          </FormControl>

        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Start
          </p>

          <div className='meeting-shortcut-item-double'>
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
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              :
                ''
            }

            
          </div>
        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              End
          </p>

          <div className='meeting-shortcut-item-double'>
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
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              :
                ''
            }

            
          </div>
        </div>

        <div className='meeting-shortcut-item'>
          <div className='meeting-shortcut-item-checkbox'>
            <FormControlLabel control={<Checkbox value={allDay} onChange={handleAllDay} />} label="All Day" />
          </div>
        </div>

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Repeat
          </p>

          <FormControl fullWidth>
            <Select
              className="meeting-shortcut-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={repeat}
              onChange={handleRepeat}
            >
              <MenuItem value='never'>Never</MenuItem>
              <MenuItem value='daily'>Daily</MenuItem>
              <MenuItem value='weekly'>Weekly</MenuItem>
              <MenuItem value='monthly'>Monthly</MenuItem>
              <MenuItem value='yearly'>Yearly</MenuItem>
              <MenuItem value='custom'>Custom</MenuItem>
            </Select>
          </FormControl>
        </div>

        {
          repeat === 'custom' ?
          <>
            <div className='meeting-shortcut-item'>
              <p className="meeting-shortcut-item-title">
                  Every
              </p>

              <div className='meeting-shortcut-item-double'>
                <div className='meeting-shortcut-item-repeat-days'>
                  <div className='meeting-shortcut-item-repeat-days-decrease'>
                    <span onClick={handleDecreaseRepeatNumber}>-</span>
                  </div>

                  <div className='meeting-shortcut-item-repeat-days-number'>
                    <input type='number' value={repeatNumber} onChange={handleRepeatNumber} />
                  </div>

                  <div className='meeting-shortcut-item-repeat-days-increase'>
                    <span onClick={handleIncreseRepeatNumber}>+</span>
                  </div>
                </div>

                <div className='meeting-shortcut-item-repeat-loop'>
                  <FormControl fullWidth>
                    <Select
                      className="meeting-shortcut-item-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={repeatLoop}
                      onChange={handleRepeatLoop}
                    >
                      <MenuItem value='day'>Day</MenuItem>
                      <MenuItem value='week'>Week</MenuItem>
                      <MenuItem value='month'>Month</MenuItem>
                      <MenuItem value='year'>Year</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>


            <div className='meeting-shortcut-item'>
              <p className="meeting-shortcut-item-title">
                  End repeat
              </p>

              <div className='meeting-shortcut-item-double'>
                <div className='meeting-shortcut-item-end-select'>
                  <FormControl>
                    <RadioGroup
                      className='meeting-shortcut-item-end-select-radio'
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      value={endRepeat}
                      onChange={handleEndRepeat}
                    >
                      <FormControlLabel value="never" control={<Radio />} label="Never" />
                      <FormControlLabel value="date" control={<Radio />} label="Date" />
                      <FormControlLabel value="after" control={<Radio />} label="After several occurrences" />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className='meeting-shortcut-item-end-data'>
                  {
                    endRepeat === 'date' ?
                      <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <MobileDatePicker
                          value={endRepeatDate} 
                          onChange={handleEndRepeatDate}
                          // defaultValue={dayjs()}
                          // disablePast
                        />
                      </LocalizationProvider>
                     :
                     endRepeat === 'after' ?
                       <FormControl fullWidth>
                         <Select
                           className="meeting-shortcut-item-select"
                           labelId="demo-simple-select-label"
                           id="demo-simple-select"
                           value={endLoop}
                           onChange={handleEndLoop}
                         >
                           <MenuItem value='day'>Day</MenuItem>
                           <MenuItem value='week'>Week</MenuItem>
                           <MenuItem value='month'>Month</MenuItem>
                           <MenuItem value='year'>Year</MenuItem>
                         </Select>
                       </FormControl>
                     :
                        ''
                  }
                </div>
              </div>
            </div>
          </>

        :
          ''
        }

        <div className='meeting-shortcut-item'>
          <p className="meeting-shortcut-item-title">
              Calendar
          </p>

          <FormControl fullWidth>
            <Select
              className="meeting-shortcut-item-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              onChange={handleCategory}
            >
              {categories.map((category) => (
                <MenuItem className='meeting-shortcut-item-select-item' value={category.category}>{category.name} <span className='color-bullet' style={{backgroundColor: category.color}}></span></MenuItem>  
              ))}
            </Select>
          </FormControl>

        </div>

        <div className='meeting-shortcut-item note'>
          <p className="meeting-shortcut-item-title">
              Note
          </p>

          <FormControl fullWidth>
            <TextField
                className='meeting-shortcut-item-input'
                variant="outlined"
                onChange={handleNote}
                multiline
                maxRows={5}
            />
          </FormControl>

        </div>




        <div className='meeting-shortcut-btn'>
          <Button className='meeting-shortcut-btn-reset' onClick={handleResetEvent}>Reset</Button>

          <Button className='meeting-shortcut-btn-submit' onClick={handleSubmitEvent}>Submit</Button>
        </div>
      </div>
    </div>
  );
}


export default CalendarShortcut;