import React, { useState, useMemo }from 'react';
import './compose-email.scss'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import ComposeEmailEditor from './compose-email-editor/ComposeEmailEditor';

import closeIcon from '../../../../assets/images/email/x.svg';
import minusIcon from '../../../../assets/images/email/minus.svg';
import squareIcon from '../../../../assets/images/email/square.svg';
import moreIcon from '../../../../assets/images/email/more-horizontal.svg';
import trashIcon from '../../../../assets/images/email/trash.svg';
import arrowIcon from '../../../../assets/images/email/small-arrow.svg';
import attachedIcon from '../../../../assets/images/email/attached.svg';



const ComposeEmail = ({ setComposeEmailToggle }) => {
  
  const sampleEmails = [
    { title: 'eva.baumann@helvetic.com'},
    { title: 'luca.mueller@alpineco.com'},
    { title: 'fabian.roth@helveticgro.com'},
    { title: 'emma.baer@alpinco.com'},
    { title: 'nicoroth@swissgroup.com'},
    { title: "isabellafischer@alpinec.com"},
    { title: 'vivictori.graf@alpinesys.com'},
  ];


  // more popup
  const [anchorMore, setAnchorMore] = useState(null);

  const handleClickMore = (event) => {
    setAnchorMore(event.currentTarget);
  };

  const handleCloseMore = () => {
    setAnchorMore(null);
  };

  const openMore = Boolean(anchorMore);
  const moreID = openMore ? 'more_compose-email_popup' : undefined;


// schedule popup
  const [anchorSchedule, setAnchorSchedule] = useState(null);

  const handleClickSchedule = (event) => {
    setAnchorSchedule(event.currentTarget);
  };

  const handleCloseSchedule = () => {
    setAnchorSchedule(null);
  };

  const openSchedule = Boolean(anchorSchedule);
  const scheduleID = openSchedule ? 'schedule_compose-email_popup' : undefined;


  
  return (
    
    <Box sx={{ width: '100%' }} className='compose-email'>
      <Grid container>
        <Grid item>
          <Paper sx={{ width: '100%', mb: 2}}>
            <div className='compose-email__container'>
              <div className='compose-email__header'>
                <div className='compose-email__header-actions'>
                  <ButtonGroup variant="outlined" aria-label="actions">
                    <IconButton aria-label="minus">
                        <img src={minusIcon} alt='minus' />
                    </IconButton>

                    <IconButton aria-label="square">
                        <img src={squareIcon} alt='square' />    
                    </IconButton>
                    
                    <IconButton aria-label="close" onClick={() => {
                      // closeComposeEmail()
                      setComposeEmailToggle(false);
                    }}>
                        <img src={closeIcon} alt='close' />    
                    </IconButton>
                  </ButtonGroup>
                </div>
              </div>

              <div className='compose-email__info'>
                <div className='compose-email__info-list'>
                  <div className='compose-email__info-item'>
                    <p className='compose-email__info-item_title'>
                      From
                    </p>

                    <div className='compose-email__info-item_text'>
                      mariedupont@umail.com
                    </div>
                  </div>

                  <div className='compose-email__info-item'>
                    <p className='compose-email__info-item_title'>
                      To
                    </p>

                    <div className='compose-email__info-item_text'>
                      <Autocomplete
                        multiple
                        limitTags={4}
                        id="email-to"
                        options={sampleEmails.map((option) => option.title)}
                        // defaultValue={[sampleEmails[13].title]}
                        // defaultValue='Email address'
                        freeSolo
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => {
                            const { key, ...tagProps } = getTagProps({ index });
                            return (
                              <Chip variant="outlined" label={option} key={key} {...tagProps} />
                            );
                          })
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            // label="Email address"
                            placeholder="Email address"
                          />
                          )}
                        />
                    </div>
                  </div>

                  <div className='compose-email__info-item'>
                    <p className='compose-email__info-item_title'>
                      Subject
                    </p>

                    <div className='compose-email__info-item_text'>
                      <TextField
                        variant="outlined"
                        // label="Email address"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='compose-email__message'>
                <ComposeEmailEditor />
              </div>

              <div className='compose-email__footer'>
                <div className='compose-email__footer-left'>
                  <ButtonGroup variant="outlined" aria-label="actions">
                    <IconButton aria-label="trash">
                      <img src={trashIcon} alt='trash' />    
                    </IconButton>

                    <IconButton aria-label="more" aria-describedby={moreID} onClick={handleClickMore}>
                      <img src={moreIcon} alt='more' />    
                    </IconButton>

                    <Popover
                      className='more-compose-email-popup'
                      id={moreID}
                      open={openMore}
                      anchorEl={anchorMore}
                      onClose={handleCloseMore}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                    >
                      <div className='more-compose-email-popup_list'>
                        <div className='more-compose-email-popup_item'>
                          Normal
                        </div>
                        
                        <div className='more-compose-email-popup_item'>
                          Plain text
                        </div>
                        
                        <div className='more-compose-email-popup_divider'></div>
                        
                        <div className='more-compose-email-popup_item'>
                          Attach public key
                        </div>
                        
                        <div className='more-compose-email-popup_item'>
                          Request read receipt
                        </div>
                        
                        <div className='more-compose-email-popup_divider'></div>

                        <div className='more-compose-email-popup_item'>
                          Expiration time
                        </div>
                      </div>
                    </Popover>
                  </ButtonGroup>
                </div>

                <div className='compose-email__footer-right'>

                  <p>Not saved</p>

                  <IconButton aria-label="attached">
                    <img src={attachedIcon} alt='attached' />
                  </IconButton>
                  

                  <Button className='send-btn'>
                    Send
                    <span>|</span>

                    <IconButton aria-label="schedule" aria-describedby={scheduleID} onClick={handleClickSchedule}>
                      <img src={arrowIcon} alt='arrow down' />    
                    </IconButton>

                    <Popover
                      className='schedule-compose-email-popup'
                      id={scheduleID}
                      open={openSchedule}
                      anchorEl={anchorSchedule}
                      onClose={handleCloseSchedule}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    >
                      <div className='schedule-compose-email-popup_header'>
                        <div className='schedule-compose-email-popup_header-title'>Schedule send</div>
                        <div className='schedule-compose-email-popup_header-timezone'>Central European Summer Time</div>
                      </div>

                      <div className='schedule-compose-email-popup_divider'></div>

                      <div className='schedule-compose-email-popup_list'>
                        <div className='schedule-compose-email-popup_item'>
                          <div className='schedule-compose-email-popup_item-day'>Tomorrow</div>
                          <div className='schedule-compose-email-popup_item-date'>September 8th at 08:00</div>
                        </div>

                        <div className='schedule-compose-email-popup_item'>
                          <div className='schedule-compose-email-popup_item-day'>Monday</div>
                          <div className='schedule-compose-email-popup_item-date'>September 8th at 08:00</div>
                        </div>

                        <div className='schedule-compose-email-popup_custom'>
                          <div className='schedule-compose-email-popup_custom-text'>Custom</div>
                        </div>
                      </div>
                    </Popover>
                  </Button>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ComposeEmail;
