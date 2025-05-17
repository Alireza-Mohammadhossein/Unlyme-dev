import React, { useState, useEffect } from 'react';
import lockpageIcon from "../../../assets/images/notepage/new/lockpage.svg";





const NotesLockPage = ({ selectedNote, setSelectedNote, handleSubmitPassword }) => {
    
    const [enteredPassword, setEnteredPassword] = useState('')


    

    
    return (

        <div className='notes-lock-page'>
          <div className='notes-lock-page_container'>
            <div className='notes-lock-page_icon'>
              <img src={lockpageIcon} alt='lockpage' />
            </div>

            <div className='notes-lock-page_info'>
              <div className='notes-lock-page_info-title'>
                This note is locked.
              </div>

              <div className='notes-lock-page_info-text'>
                Enter the notes password to view locked notes.
              </div>
            </div>

            <form className='notes-lock-page_form' onSubmit={(e) => {
              e.preventDefault();
              handleSubmitPassword(enteredPassword)
            }}>
              <input placeholder='Enter password' value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)} />
            </form>
          </div>
        </div>
        
    )
} 

export default NotesLockPage;
