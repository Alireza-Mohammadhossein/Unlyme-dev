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
import "swiper/css";
import firstStep from '../../../../assets/images/header/ai-assistant/first.mov';
import secondStep from '../../../../assets/images/header/ai-assistant/second.mov';
import enterIcon from '../../../../assets/images/header/ai-assistant/enter.svg';
import questionIcon from '../../../../assets/images/header/ai-assistant/question.png';

import axios from 'axios';





const HeaderAssistantPopup = ({}) => {

  const dispatch = useDispatch();
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




  const token = "";



  const [history, setHistory] = useState([
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
