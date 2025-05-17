import react, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";


import lockIcon from '../../../../assets/images/email/lock.svg';
import prevIcon from '../../../../assets/images/email/arrow-prev.svg';
import nextIcon from '../../../../assets/images/email/arrow-next.svg';
import replyIcon from '../../../../assets/images/email/reply.svg';
import forwardIcon from '../../../../assets/images/email/forward.svg';
import readIcon from '../../../../assets/images/email/read.svg';
import replyAllIcon from '../../../../assets/images/email/reply-all.svg';
import trashIcon from '../../../../assets/images/email/trash.svg';
import spamIcon from '../../../../assets/images/email/spam.svg';

import './single-mail.scss';


const SingleMail = ({userIcon, mailFrom, mailTo, mailSubject, mailTitle, mailMessage, setActiveSingleMail, selectedRow, viewMode}) => {



  return (
    <div className='single-mail'>
      <div className='single-mail_left'>
        <div className='single-mail__header'>
          <div className='single-mail__header-title'>
            {mailSubject}
          </div>

          <div className='single-mail__header-details'>
            {selectedRow.logo ? 
              <Avatar alt={mailTitle} src={selectedRow.logo} />
              : 
              <Avatar sx={{ backgroundColor: '#E0EFFF', color: '#4382C4', fontSize: '24px'}}>
                {selectedRow.name ? `${selectedRow.name.split(' ')[0][0]}${selectedRow.name.split(' ')[1][0]}` : selectedRow.from[0]}
              </Avatar>
            }

            <div className='single-mail__header-details_info'>
              <div className='single-mail__header-details_info-sender'>
                {selectedRow.name && 
                  <p className='single-mail__header-details_info-sender-name'>
                    {selectedRow.name}
                  </p>
                }

                <p className='single-mail__header-details_info-sender-email'>
                  {selectedRow.from}
                </p>

                <div className='single-mail__header-details_info-sender-lock'>
                  <img src={lockIcon} alt='lock icon' />
                </div>
                
                <p className='single-mail__header-details_info-sender-date'>
                  {selectedRow.date}
                </p>

              </div>

              <div className='single-mail__header-details_info-cc'>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ArrowForwardIosIcon />}
                  >
                    Me
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </AccordionDetails>
                </Accordion>
              </div>

              <div className='single-mail__header-details_info-folder'>
                Folder: Inbox
              </div>

              {viewMode==='second' || viewMode==='third' && (
                <div className={`single-mail__header-details_info-options ${viewMode == 'first' ? 'first' : ''} ${viewMode == 'second' ? 'second' : ''} ${viewMode == 'third' ? 'third' : ''}`}>
                  <Button
                    startIcon={<img src={replyIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Reply
                  </Button>
      
                  <Button
                    startIcon={<img src={replyAllIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Reply All
                  </Button>
      
                  <Button
                    startIcon={<img src={forwardIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Forward
                  </Button>
      
                  <Button
                    startIcon={<img src={trashIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Delete
                  </Button>
      
                  <Button
                    startIcon={<img src={readIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Read
                  </Button>
      
                  <Button
                    startIcon={<img src={spamIcon} />}
                    className="single-mail__header-details_info-options-btn"
                    // onClick={handleCreateNote}
                  >
                    Spam!
                  </Button>
      
                </div>
              )}

            </div>
          </div>


        </div>

          
        <div className='single-mail__content'>
          <div className='single-mail__content-message'>
            {selectedRow.message}
          </div>
        </div>
      </div>

      <div className='single-mail_right'>
        <div className='single-mail_actions'>
          <div className='single-mail_actions-navigations'>
            <Button>
              <img src={prevIcon} alt='prev icon' />
              Prev.
            </Button>

            <Button>
              Next
              <img src={nextIcon} alt='next icon' />
            </Button>
          </div>

          <div className='single-mail_actions-related'>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ArrowForwardIosIcon />}
                className='single-mail_actions-related-title'  
              >
                Related messages
              </AccordionSummary>
              <AccordionDetails className='single-mail_actions-related-message'>
                <div className='single-mail_actions-related-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-related-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className='single-mail_actions-more'>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowForwardIosIcon />}
                className='single-mail_actions-more-title'  
              >
                Messages from {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
              </AccordionSummary>
              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>

              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>

              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>

              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>

              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>

              <AccordionDetails className='single-mail_actions-more-message'>
                <div className='single-mail_actions-more-message_info'>
                  <span>
                    {selectedRow.name ? selectedRow.name : 'Eva Baumann'}
                  </span>

                  <span>
                    {selectedRow.date}
                  </span>
                </div>
                <div className='single-mail_actions-more-message_text'>
                  {selectedRow.message}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
  }
  
  export default SingleMail;