import React, {useState, useEffect, useRef} from 'react';
import './register.scss';
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Visibility from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { sampleRegisterCodes } from '../../../mocks/mocks';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/css";

import motionGif from '../../../assets/images/register/motion.gif';
import firstStep from '../../../assets/images/register/first.mov';
import secondStep from '../../../assets/images/register/second.mov';
import thirdStep from '../../../assets/images/register/third.mov';
import enterIcon from '../../../assets/images/register/enter.svg';

import driveIcon from '../../../assets/images/my-services/drive.png';
import tasksIcon from '../../../assets/images/my-services/tasks.png';
import invoiceIcon from '../../../assets/images/my-services/invoice-manager.png';
import calendarIcon from '../../../assets/images/my-services/calendar.png';
import notesIcon from '../../../assets/images/my-services/notes.png';
import emailIcon from '../../../assets/images/my-services/email.png';
import videoConferencingIcon from '../../../assets/images/my-services/video-conference.png';
import todosIcon from '../../../assets/images/my-services/todos.png';




const Register = () => {

  const [verifying, setVerifying] = useState(true);
  const [verfiyingFirstStep, setVerfiyingFirstStep] = useState(true);
  const [showVerifyingInput, setShowVerifyingInput] = useState(false);
  const [hasVerifyCode, setHasVerifyCode] = useState(null);
  const [correctVerifyCode, setCorrectVerifyCode] = useState(1111);
  const [verifyCodeText, setVerifyCodeText] = useState(null);
  const [codeIsCorrect, setCodeIsCorrect] = useState(false);
  const [codeIsUsed, setCodeIsUsed] = useState(false);
  const [emailForWrongCode, setEmailForWrongCode] = useState(false);
  const [emailForWrongCodeIsEntered, setEmailForWrongCodeIsEntered] = useState(false);
  const [notRegisteredEmail, setNotRegisteredEmail] = useState(false);



  const [showInput, setShowInput] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [isSecondStep, setIsSecondStep] = useState(false);
  const [isThirdStep, setIsThirdStep] = useState(false);
  const [isForthStep, setIsForthStep] = useState(false);
  const [isFinalStep, setIsFinalStep] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isAiWritting, setIsAiWritting] = useState(true);
  const [redirect ,setRedirect] = useState(false);



  const submitName = () => {
    
    setIsFirstStep(false);
    setIsSecondStep(true);    
  }

  
  const submitEmail = () => {
    
    setIsSecondStep(false);
    setIsThirdStep(true);    
  }

  const submitCompany = () => {
    
    setIsThirdStep(false);
    setIsForthStep(true);
    // setIsFinalStep(true);

    // setTimeout(() => {
    //   console.log('is ende', isEnded)
    //   setIsEnded(true)

    //   setTimeout(() => {
    //     window.location.href = "/";
    //   }, 1000);

    // }, 19000);
    
  }



  // start get register codes for the first time
  const storedCodes = JSON.parse(localStorage.getItem('sampleRegisterCodes'));
  const [fetchedRegisterCodes, setFetchedRegisterCodes] = useState(storedCodes || sampleRegisterCodes);
  // end get register codes for the first time


  // start update register codes
  useEffect(() => {
    localStorage.setItem('sampleRegisterCodes', JSON.stringify(fetchedRegisterCodes));
  }, [fetchedRegisterCodes]);
  // end update register codes


  // start function to handle code usage
  const handleCodeUsage = (codeId) => {
    // Check if the code is already used
    const codeIndex = fetchedRegisterCodes.findIndex((code) => code.id === codeId);
    
    // Update the used value to true
    const updatedCodes = [...fetchedRegisterCodes];
    updatedCodes[codeIndex] = { ...updatedCodes[codeIndex], used: true };
    setFetchedRegisterCodes(updatedCodes);

    // Additional logic for handling code usage (e.g., API call, user authentication, etc.)
    
  };
  // end function to handle code usage


  // start code exist and is used or not
  const handleCodeEntry = (enteredCode) => {
    const enteredCodeIndex = fetchedRegisterCodes.findIndex((code) => code.code === enteredCode);
    
    if (enteredCodeIndex !== -1) {
      const code = fetchedRegisterCodes[enteredCodeIndex];

      if (!code.used) {
        handleCodeUsage(code.id);

        setVerifying(false)
        setCodeIsCorrect(true)
        setCodeIsUsed(false)

      } else {
        setCodeIsUsed(true)
        setVerifying(false)
        setVerifyCodeText('')
      }

    } else {
      setAddShakeClass(true)
      setVerifying(false)
      setCodeIsCorrect(false)
      setVerifyCodeText('')

      setTimeout(() => {
        setAddShakeClass(false)
      }, 1000);
    }
  };
  // end code exist and is used or not






  const [swiper, setSwiper] = useState(null);
  const [step, setStep] = useState(false);
  
  useEffect(() => {
    // Check if swiper and step are both available
    if (swiper && step) {
      // Function to recursively slide to the next until the last slide is reached
      const slideToLast = (currentIndex) => {
        if (currentIndex < swiper.slides.length - 12) {
          swiper.slideNext();
          setTimeout(() => slideToLast(currentIndex + 1), 100);
        } else if (currentIndex < swiper.slides.length - 2) {
          swiper.slideNext();
          setTimeout(() => slideToLast(currentIndex + 2), 50);
        } else {
          // Reset the step state after reaching the last slide
          setStep(true);
        }
      };

      // Start sliding
      slideToLast(0);
      swiper.autoplay.stop();
      setIsFinalStep(true)
    }
  }, [swiper, step]);


  useEffect(() => {
    if (redirect) {
      setTimeout(() => {
        window.location.href = "https://unlyme.com/";
        // console.log('redirect', redirect)
      }, 9000);
    }
  }, [isFinalStep])



  const [addShakeClass, setAddShakeClass] = useState(false)


  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <div className='register-page'>
        <div className='register-page__wrapper'>     
            <AnimatePresence>
              {isEnded === false && (
                <motion.div
                  key="end"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0}}
                  // animate={isSecondStep ? "hide" : "show"}
                  transition={{ duration: 0.5 }}
                  className='register-page__content'
                >
                  <>
                    <div className='register-page__content__quit'>
                      <AnimatePresence>
                        {!isEnded && (
                          <motion.div
                            key="quit"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            transition={{ duration: 1, delay: 5 }}
                            className='register-page__content__quit-container'
                          >
                            <button onClick={() => window.location.href = "https://unlyme.com/"}>Quit</button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className='register-page__content__motion'>
                      <AnimatePresence>
                        {isAiWritting && (
                          <motion.div
                            key="firstVideo"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, transition: { duration: 1.5 } }}
                            transition={{ duration: 1 }}
                            className='register-page__content__motion-item'
                          >
                            <video
                              autoPlay
                              muted
                              loop
                              className='register-page__content__motion-item-img'
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
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0, transition: {delay: 1} }}
                           transition={{ duration: 2}}
                           className='register-page__content__motion-item'
                         >
                           <video
                             autoPlay
                             muted
                             loop
                             className='register-page__content__motion-item-img'
                             src={secondStep} type="video/mp4"
                           />
                         </motion.div>
                        )}
                      </AnimatePresence>

                    </div>

                    <div className='register-page__content__info'>

                      {/* start verifying - first step ask for verify code */}
                      <AnimatePresence>
                        {verifying && verfiyingFirstStep && hasVerifyCode === null && (
                          <>
                            <motion.div
                              key="verifyingFirstText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Hello, I am Unlyme AI. I will help you solve issues and manage all business processes of your company. \n \n \n Right now, access to the system is only available by invite code. Do you have one?`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
                            
                              {showVerifyingInput && (
                                <motion.div
                                  key="firstVerifyingInput"
                                  initial={{ opacity: 0 }}
                                  // animate={isSecondStep ? "hide" : "show"}
                                  // variants={exitTextAnimation}
                                  animate={{opacity: 1}}
                                  transition={{ duration: 1 }}
                                  exit={{opacity: 0, transition: {duration: 1}}}
                                  className='register-page__content__info_form'
                                >
                                  <div className='register-page__content__info_form-btns'>
                                    <Button className='register-page__content__info_form-btns_yes' onClick={() => {
                                      setHasVerifyCode(true);
                                    }}>Yes</Button>
                                    <Button className='register-page__content__info_form-btns_no' onClick={() => {
                                      setHasVerifyCode(false);
                                    }}>No</Button>
                                  </div>
                                </motion.div>
                              )}

                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - first step ask for verify code */}


                      {/* start verifying - has verify code and get it */}
                      <AnimatePresence>
                        {verifying && hasVerifyCode && (
                          <>
                            <motion.div
                              key="hasVerifyCodeText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Please enter the code.`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>

                            <motion.div
                              key="verifyingSecondInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 4 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className='register-page__content__info_form'
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                if(verifyCodeText.length > 0) {
                                  handleCodeEntry(verifyCodeText)
                                }

                                // if (verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(true)
                                // }

                                // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(false)
                                //   setVerifyCodeText('')
                                // }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={verifyCodeText}
                                  onChange={(e) => setVerifyCodeText(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      // if (verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(true)
                                      // }

                                      // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(false)
                                      // }

                                      if(verifyCodeText.length > 0) {
                                        handleCodeEntry(verifyCodeText)
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div> 
                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - has verify code and get it */}


                      {/* start verifying - has not verify code and get email */}
                      <AnimatePresence>
                        {verifying && hasVerifyCode === false && !notRegisteredEmail &&(
                          <>
                            <motion.div
                              key="hasNotVerifyCodeText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Please provide your email, and I will let you know when there are spots available for registration.`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>

                            <motion.div
                              key="hasNotVerifyCodeInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 7 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className={`register-page__content__info_form ${addShakeClass && 'shake'}`}
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();

                                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                if ( regex.test(email) ) {
                                  setNotRegisteredEmail(true)
                                } else {
                                  setAddShakeClass(true)

                                  setTimeout(() => {
                                    setAddShakeClass(false)
                                  }, 1500);
                                }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                      if ( regex.test(email) ) {
                                        setNotRegisteredEmail(true)
                                      } else {
                                        setAddShakeClass(true)
                                        
                                        setTimeout(() => {
                                          setAddShakeClass(false)
                                        }, 1500);
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                      {/* <IconButton
                                        aria-label="submit form"
                                        className='register-page__content__info_form-enter'
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                      > */}
                                        {/* <img src={enterIcon} alt='enter' /> */}
    
                                      {/* </IconButton> */}
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div> 
                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - has not verify code and get email */}

                      
                      {/* start verifying - has not verify code and email entered, show thanks text*/}
                      <AnimatePresence>
                        {verifying && hasVerifyCode === false && notRegisteredEmail && (
                          <>
                            <motion.div
                              key="hasNotVerifyCodeEmailText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Thank you for your interest! I will let you know when registration is available. Goodbye :)`,
                                   
                                  () => {
                                    // setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      {/* end verifying - has not verify code and email entered, show thanks text */}


                      {/* start not verifying - verify code is used */}
                      <AnimatePresence>
                        {!verifying && codeIsUsed && isEnded === false && !emailForWrongCode && (
                          <>
                            <motion.div
                              key="incorrectCodeText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `The code you entered is already used. Please try again or provide your email, and I will let you know when there are spots available for registration.`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>

                            <motion.div
                              key="provideEmailButton"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 9 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className='register-page__content__info_form'
                            >

                              <form onSubmit={(e) => {
                                e.preventDefault();

                                if(verifyCodeText.length > 0) {
                                  handleCodeEntry(verifyCodeText)
                                }
                                
                                // if(verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(true)
                                // }

                                // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(false)
                                // }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={verifyCodeText}
                                  onChange={(e) => setVerifyCodeText(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {

                                      if(verifyCodeText.length > 0) {
                                        handleCodeEntry(verifyCodeText)
                                      }


                                      // if (verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(true)
                                      // }

                                      // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(false)
                                      // }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                    </InputAdornment>
                                  }
                                />
                              </form>


                              <div className='register-page__content__info_form-btns'>
                                <Button className='register-page__content__info_form-btns_yes' onClick={() => {
                                  setEmailForWrongCode(true);
                                }}>Provide an emaill</Button>
                                
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is used */}


                      {/* start not verifying - verify code is incorrect */}
                      <AnimatePresence>
                        {!verifying && !codeIsUsed && !codeIsCorrect && isEnded === false && !emailForWrongCode && (
                          <>
                            <motion.div
                              key="incorrectCodeText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `You have entered the wrong code. Please try again or provide your email, and I will let you know when there are spots available for registration.`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>

                            <motion.div
                              key="provideEmailButton"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 9 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className='register-page__content__info_form'
                            >

                              <form onSubmit={(e) => {
                                e.preventDefault();

                                if(verifyCodeText.length > 0) {
                                  handleCodeEntry(verifyCodeText)
                                }
                                
                                // if(verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(true)
                                // }

                                // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                //   setVerifying(false)
                                //   setCodeIsCorrect(false)
                                // }
                              }}>
                                <Input
                                  className={`register-page__content__info_form-input ${addShakeClass && 'shake'}`}
                                  type='text'
                                  value={verifyCodeText}
                                  onChange={(e) => setVerifyCodeText(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {

                                      if(verifyCodeText.length > 0) {
                                        handleCodeEntry(verifyCodeText)
                                      }


                                      // if (verifyCodeText.length > 0 && verifyCodeText == correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(true)
                                      // }

                                      // if (verifyCodeText.length > 0 && verifyCodeText != correctVerifyCode) {
                                      //   setVerifying(false)
                                      //   setCodeIsCorrect(false)
                                      // }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                    </InputAdornment>
                                  }
                                />
                              </form>


                              <div className='register-page__content__info_form-btns'>
                                <Button className='register-page__content__info_form-btns_yes' onClick={() => {
                                  setEmailForWrongCode(true);
                                }}>Provide an emaill</Button>
                                
                              </div>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is incorrect */}


                      {/* start not verifying - verify code is incorrect and getting email */}
                      <AnimatePresence>
                        {!verifying && !codeIsCorrect && isEnded === false && emailForWrongCode && !emailForWrongCodeIsEntered &&(
                          <>
                            <motion.div
                              key="provideEmailText"
                              initial={{ opacity: 0.5 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 2}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Please enter email.`,
                                   
                                  () => {
                                    setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>

                            <motion.div
                              key="provideEmailInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 4 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className={`register-page__content__info_form  ${addShakeClass && 'shake'}`}
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                if ( regex.test(email) ) {
                                  setEmailForWrongCodeIsEntered(true)
                                } else {
                                  setAddShakeClass(true)
                                  
                                  setTimeout(() => {
                                    setAddShakeClass(false)
                                  }, 1500);
                                }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                      if ( regex.test(email) ) {
                                        setEmailForWrongCodeIsEntered(true)
                                      } else {
                                        setAddShakeClass(true)
                                        
                                        setTimeout(() => {
                                          setAddShakeClass(false)
                                        }, 1500);
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is incorrect and getting email */}


                      {/* start not verifying - verify code is incorrect and email is entered, show thanks text */}
                      <AnimatePresence>
                        {!verifying && !codeIsCorrect && isEnded === false && emailForWrongCodeIsEntered && (
                          <>
                            <motion.div
                              key="emailForWrongCodeIsEnteredText"
                              initial={{ opacity: 0.5 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 2}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Thank you for your interest! I will let you know when registration is available. Goodbye :)`,
                                   
                                  () => {
                                    // setShowVerifyingInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is incorrect and email is entered, show thanks text */}


                      {/* start not verifying - verify code is correct and getting name */}
                      <AnimatePresence>
                        {!verifying && codeIsCorrect && isEnded === false && isFirstStep && (
                          <>
                            <motion.div
                              key="firstText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `What is your name?`,
                                   
                                  () => {
                                    setShowInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
    
                            <motion.div
                              key="firstInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 4 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className='register-page__content__info_form'
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                if(name.length > 0) {
                                  submitName()
                                }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      if (name.length > 0) {
                                        submitName()
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                      {/* <IconButton
                                        aria-label="submit form"
                                        className='register-page__content__info_form-enter'
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                      > */}
                                        {/* <img src={enterIcon} alt='enter' /> */}
    
                                      {/* </IconButton> */}
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div>
                            
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is correct and getting name */}


                      {/* start not verifying - verify code is correct and getting email */}
                      <AnimatePresence>
                        {!verifying && codeIsCorrect && isEnded === false && isSecondStep && (
                          <>
                            <motion.div
                              key="secondText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `${name}, please enter your email.`,
                                   
                                  () => {
                                    setShowInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
    
                            <motion.div
                              key="secondInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 4 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className={`register-page__content__info_form  ${addShakeClass && 'shake'}`}
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                if ( regex.test(email) ) {
                                  submitEmail()
                                } else {
                                  setAddShakeClass(true)
                                  
                                  setTimeout(() => {
                                    setAddShakeClass(false)
                                  }, 1500);
                                }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                                      if ( regex.test(email) ) {
                                        submitEmail()
                                      } else {
                                        setAddShakeClass(true)
                                        
                                        setTimeout(() => {
                                          setAddShakeClass(false)
                                        }, 1500);
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                      {/* <IconButton
                                        aria-label="submit form"
                                        className='register-page__content__info_form-enter'
                                        // onClick={handleClickShowPassword}
                                        // onMouseDown={handleMouseDownPassword}
                                      > */}
                                        {/* <img src={enterIcon} alt='enter' /> */}
    
                                      {/* </IconButton> */}
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div>
                            
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is correct and getting email */}


                      {/* start not verifying - verify code is correct and getting company */}
                      <AnimatePresence>
                        {!verifying && codeIsCorrect && isEnded === false && isThirdStep && (
                          <>
                            <motion.div
                              key="thirdText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `What's the name of your company or project?`,
                                   
                                  () => {
                                    setShowInput(true);
                                    setIsAiWritting(false)
                                  }
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
                          
    
                            <motion.div
                              key="thirdInput"
                              initial={{ opacity: 0 }}
                              // animate={isSecondStep ? "hide" : "show"}
                              // variants={exitTextAnimation}
                              animate={{opacity: 1}}
                              transition={{ duration: 1, delay: 4 }}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              className='register-page__content__info_form'
                            >
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                
                                if(company.length > 0) {
                                  submitCompany()
                                }
                              }}>
                                <Input
                                  className='register-page__content__info_form-input'
                                  type='text'
                                  value={company}
                                  onChange={(e) => setCompany(e.target.value)}
                                  autoFocus
                                  endAdornment={
                                    <InputAdornment position="end" onClick={() => {
                                      if (company.length > 0) {
                                        submitCompany()
                                      }
                                    }}>
                                      <motion.button
                                        className='register-page__content__info_form-enter'
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <img src={enterIcon} alt='enter' />
                                      </motion.button>
                                    </InputAdornment>
                                  }
                                />
                              </form>
                            </motion.div>
                            
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - verify code is correct and getting company */}

    
                      {/* start not verifying - creating workspace */}
                      <AnimatePresence>
                        {!verifying && codeIsCorrect && isEnded === false && isForthStep && (
                          <>
                            <motion.div
                              key="forthText"
                              initial={{ opacity: 0 }}
                              animate={{opacity: 1}}
                              transition={{ duration: 1}}
                              exit={{opacity: 0, transition: {duration: 1}}}
                              // variants={exitTextAnimation}
                            >
                             <TypeAnimation
                                className='register-page__content__info_text'
                                style={{ whiteSpace: 'pre-line'}}
                                sequence={[
                                  () => {
                                    setIsAiWritting(true);
                                  },
                                  2000,
                                  `Hey ${name}! We are Creating a workspace for you...`,
                                   
                                  () => {
                                    setIsAiWritting(false)
                                    setIsFinalStep(true)
                                    setRedirect(true)
                                  },
    
                                  setTimeout(() => {
                                    setStep(true)
                                  }, 10000),
    
                                ]}
                                wrapper="p"
                                speed={60}
                                cursor={false}
                                repeat={false}
                              />
                            </motion.div>
    
                            {!isAiWritting && (
                              <>
                                <motion.div
                                  key="line"
                                  initial={{ opacity: 0 }}
                                  animate={{opacity: 1}}
                                  transition={{ duration: 1, delay: 1}}
                                >
                                  <div className='register-page__content__info_line'>
                                    <p></p>
                                  </div>
                                </motion.div>
    
                                <motion.div
                                  key="icons"
                                  initial={{ opacity: 0 }}
                                  animate={{opacity: 1}}
                                  transition={{ duration: 0.5, delay: 1.5}}
                                >
                                  <Swiper
                                    onSwiper={setSwiper}
                                    watchSlidesProgress={false}
                                    slidesPerView={3}
                                    // spaceBetween={20}
                                    className="mySwiper register-page__content__info_list"
                                    centeredSlides={true}
                                    // loop={true}
                                    // rewind={true}
                                    autoplay={{
                                      delay: 1500,
                                      disableOnInteraction: false,
                                    }}
    
                                    
                                    
                                    modules={[Autoplay]}
                                  >
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={calendarIcon} alt='calendar' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={notesIcon} alt='notes' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={emailIcon} alt='emails' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={driveIcon} alt='drive' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={tasksIcon} alt='tasks' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={videoConferencingIcon} alt='vodeo conferences' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={invoiceIcon} alt='invoice' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={todosIcon} alt='todos' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={calendarIcon} alt='calendar' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={notesIcon} alt='notes' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={emailIcon} alt='emails' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={driveIcon} alt='drive' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={tasksIcon} alt='tasks' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={videoConferencingIcon} alt='vodeo conferences' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={invoiceIcon} alt='invoice' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={todosIcon} alt='todos' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={calendarIcon} alt='calendar' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={notesIcon} alt='notes' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={emailIcon} alt='emails' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={driveIcon} alt='drive' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={tasksIcon} alt='tasks' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={videoConferencingIcon} alt='vodeo conferences' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={invoiceIcon} alt='invoice' /></SwiperSlide>
                                    <SwiperSlide className='register-page__content__info_list-item'><img src={todosIcon} alt='todos' /></SwiperSlide>
                                    
                                  </Swiper>
                                </motion.div>
                              </>
                            )}
                          </>
                        )}
                      </AnimatePresence>
                      {/* end not verifying - creating workspace */}
                    </div>
                  </>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Register;