import React, { useState } from 'react';
import './clients-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';




const AddNewClientsPopup = ({ handleCloseAddNewClientPopup }) => {

  const [companyName, setCompanyName] = useState('');
  const handleCompanyName = (event) => {
      setCompanyName(event.target.value);
  };


  const [firstName, setFirstName] = useState('');
  const handleFirstName = (event) => {
      setFirstName(event.target.value);
  };


  const [lastName, setLastName] = useState('');
  const handleLastName = (event) => {
      setLastName(event.target.value);
  };


  const [email, setEmail] = useState('');
  const handleEmail = (event) => {
      setEmail(event.target.value);
  };


  const [category, setCategory] = useState('');
  const handleCategory = (event) => {
      setCategory(event.target.value);
  };


  const [project, setProject] = useState('');
  const handleProject = (event) => {
      setProject(event.target.value);
  };


  const [descriptionSwitch, setDescriptionSwitch] = useState(false);
  const handleDescriptionSwitch = () => {
      setDescriptionSwitch(!descriptionSwitch);
  };
  // start description & details 
  const [notes, setNotes] = useState('');
  const handleNotes = (event) => {
      setNotes(event.target.value);
  };


  const tags = [
    'Tag 1',
    'Tag 2',
    'Tag 3',
    'Tag 4',
    'Tag 5',
    'Tag 6',
    'Tag 7',
  ];

  const [tag, setTag] = useState([]);
  const handleTag = (event) => {
    const {
      target: { value },
    } = event;
    setTag(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  // end description & details 


  const [billingSwitch, setBillingSwitch] = useState(false);
  const handleBillingSwitch = () => {
      setBillingSwitch(!billingSwitch);
  };
  // start billing address
  const [billingStreet, setBillingStreet] = useState('');
  const handleBillingStreet = (event) => {
      setBillingStreet(event.target.value);
  };

  const [billingCity, setBillingCity] = useState('');
  const handleBillingCity = (event) => {
      setBillingCity(event.target.value);
  };

  const [billingState, setBillingState] = useState('');
  const handleBillingState = (event) => {
      setBillingState(event.target.value);
  };

  const [billingZipCode, setBillingZipCode] = useState('');
  const handleBillingZipCode = (event) => {
      setBillingZipCode(event.target.value);
  };

  const [billingCountry, setBillingCountry] = useState('');
  const handleBillingCountry = (event) => {
      setBillingCountry(event.target.value);
  };

  const [billingPhone, setBillingPhone] = useState('');
  const handleBillingPhone = (event) => {
      setBillingPhone(event.target.value);
  };

  const [billingWebsite, setBillingWebsite] = useState('');
  const handleBillingWebsite = (event) => {
      setBillingWebsite(event.target.value);
  };

  const [billingTax, setBillingTax] = useState('');
  const handleBillingTax = (event) => {
      setBillingTax(event.target.value);
  };
  // end billing address 


  const [shippingSwitch, setShippingSwitch] = useState(false);
  const handleShippingSwitch = () => {
      setShippingSwitch(!shippingSwitch);
  };
  // start shipping address
  const [shippingStreet, setShippingStreet] = useState('');
  const handleShippingStreet = (event) => {
      setShippingStreet(event.target.value);
  };

  const [shippingCity, setShippingCity] = useState('');
  const handleShippingCity = (event) => {
      setShippingCity(event.target.value);
  };

  const [shippingState, setShippingState] = useState('');
  const handleShippingState = (event) => {
      setShippingState(event.target.value);
  };

  const [shippingZipCode, setShippingZipCode] = useState('');
  const handleShippingZipCode = (event) => {
      setShippingZipCode(event.target.value);
  };

  const [shippingCountry, setShippingCountry] = useState('');
  const handleShippingCountry = (event) => {
      setShippingCountry(event.target.value);
  };
  // end shipping address 


  const [modulesSwitch, setModulesSwitch] = useState(false);
  const handleModulesSwitch = () => {
      setModulesSwitch(!modulesSwitch);
  };
  // start modules app
  const [enabledModules, setEnabledModules] = useState('system');
  const handleEnabledModules = (event) => {
      setEnabledModules(event.target.value);
  };
  // end modules app 


  const [moreInfoSwitch, setMoreInfoSwitch] = useState(false);
  const handleMoreInfoSwitch = () => {
      setMoreInfoSwitch(!moreInfoSwitch);
  };
  // start more info
  const [vatInfo, setVatInfo] = useState('');
  const handleVatInfo = (event) => {
      setVatInfo(event.target.value);
  };
  
  const [lastProjectInfo, setLastProjectInfo] = useState('');
  const handleLastProjectInfo = (event) => {
      setLastProjectInfo(event.target.value);
  };

  const [commentsInfo, setCommentsInfo] = useState('');
  const handleCommentsInfo = (event) => {
      setCommentsInfo(event.target.value);
  };
  
  const [projectTypeInfo, setProjectTypeInfo] = useState('');
  const handleProjectTypeInfo = (event) => {
      setProjectTypeInfo(event.target.value);
  };
  // end more info




  const handleCancelAddClient = () => {
    handleCloseAddNewClientPopup();
  }

  const handleSubmitAddClient = () => {
    handleCloseAddNewClientPopup();
    toast.success('You have clicked on Submit client', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }



  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 31,
    height: 18,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      height: '100%',
      marginTop: 0 ,
      marginBottom: 0 ,
      marginRight: 0 ,
      marginLeft: 2 ,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        marginTop: 0 ,
        marginBottom: 0 ,
        marginRight: 2 ,
        marginLeft: 0 ,
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#51A3FFCC',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 13,
      height: 13,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#7676804D' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));



  return (
    <div className='clients-addnewpopup'>
      <div className='clients-addnewpopup-header'>
        <div className='clients-addnewpopup-header-title'>
          <p>Add new client</p>
        </div>

        <div className='clients-addnewpopup-header-btn'>
          <IconButton onClick={handleCloseAddNewClientPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='clients-addnewpopup-list'>
        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              Company name*
            </p>

            <TextField
              className='clients-addnewpopup-item-input'
              variant="outlined"
              onChange={handleCompanyName}
              // multiline
              // maxRows={5}
            />
        </div>

        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              First name*
            </p>

            <TextField
              className='clients-addnewpopup-item-input'
              variant="outlined"
              onChange={handleFirstName}
              // multiline
              // maxRows={5}
            />
        </div>


        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              Last name*
            </p>
            
            <TextField
              className='clients-addnewpopup-item-input'
              variant="outlined"
              onChange={handleLastName}
              // multiline
              // maxRows={5}
            />
        </div>


        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              Email address*
            </p>

            <TextField
              className='clients-addnewpopup-item-input'
              variant="outlined"
              onChange={handleEmail}
              // multiline
              // maxRows={5}
            />
        </div>


        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              Category*
            </p>

            <FormControl fullWidth>
                <Select
                  className="clients-addnewpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  onChange={handleCategory}
                >
                  <MenuItem value='category1'>Category 1</MenuItem>
                  <MenuItem value='category2'>Category 2</MenuItem>
                  <MenuItem value='category3'>Category 3</MenuItem>
                  <MenuItem value='category4'>Category 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        
        <div className='clients-addnewpopup-item flex'>
            <p className='clients-addnewpopup-item-title'>
              Project*
            </p>

            <FormControl fullWidth>
              <Select
                className="clients-addnewpopup-item-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={project}
                onChange={handleProject}
              >
                <MenuItem value='project1'>Project 1</MenuItem>
                <MenuItem value='project2'>Project 2</MenuItem>
                <MenuItem value='project3'>Project 3</MenuItem>
                <MenuItem value='project4'>Project 4</MenuItem>
              </Select>
            </FormControl>
        </div>


        <div className='clients-addnewpopup-item switch'>
            <p className='clients-addnewpopup-item-title' onClick={handleDescriptionSwitch}>
              Description & Details
            </p>

            <IOSSwitch
              checked={descriptionSwitch}
              onChange={handleDescriptionSwitch}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
        {
          descriptionSwitch ? 
              <>
                <div className='clients-addnewpopup-item notes'>
                  {/* <p className='clients-addnewpopup-item-title'>
                    Notes
                  </p> */}

                  <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleNotes}
                      multiline
                      maxRows={5}
                  />
                </div>

                <div className='clients-addnewpopup-item tags'>
                  <p className='clients-addnewpopup-item-title'>
                    Tags
                  </p>

                  <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={tag}
                    onChange={handleTag}
                  >
                    {tags.map((tag) => (
                      <MenuItem
                        key={tag}
                        value={tag}
                      >
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
              </>
            :
              ''
        }


        <div className='clients-addnewpopup-item switch'>
            <p className='clients-addnewpopup-item-title' onClick={handleBillingSwitch}>
              Billing address
            </p>

            <IOSSwitch
              checked={billingSwitch}
              onChange={handleBillingSwitch}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>
        {
          billingSwitch ? 
              <>
                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Street
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingStreet}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      City
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingCity}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      State
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingState}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Zipcode
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingZipCode}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                  <p className='clients-addnewpopup-item-title'>
                    Country
                  </p>

                  <FormControl fullWidth>
                    <Select
                      className="clients-addnewpopup-item-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={billingCountry}
                      onChange={handleBillingCountry}
                    >
                      <MenuItem value='country1'>Country 1</MenuItem>
                      <MenuItem value='country2'>Country 2</MenuItem>
                      <MenuItem value='country3'>Country 3</MenuItem>
                      <MenuItem value='country4'>Country 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Telephone
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingPhone}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Website
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingWebsite}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      VAX / TAX Number
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleBillingTax}
                      // multiline
                      // maxRows={5}
                    />
                </div>
              </>
            :
              ''
        }


        <div className='clients-addnewpopup-item switch'>
            <p className='clients-addnewpopup-item-title' onClick={handleShippingSwitch}>
              Shipping address
            </p>

            <IOSSwitch
              checked={shippingSwitch}
              onChange={handleShippingSwitch}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>

        {
          shippingSwitch ? 
              <>
                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Street
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleShippingStreet}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      City
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleShippingCity}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      State
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleShippingState}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Zipcode
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleShippingZipCode}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                  <p className='clients-addnewpopup-item-title'>
                    Country
                  </p>

                  <FormControl fullWidth>
                    <Select
                      className="clients-addnewpopup-item-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={billingCountry}
                      onChange={handleShippingCountry}
                    >
                      <MenuItem value='country1'>Country 1</MenuItem>
                      <MenuItem value='country2'>Country 2</MenuItem>
                      <MenuItem value='country3'>Country 3</MenuItem>
                      <MenuItem value='country4'>Country 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className='clients-addnewpopup-item flex'>
                  <FormControlLabel control={<Checkbox sx={{color: '#3089dc'}} defaultChecked />} label="Same as billing" sx={{color: '#888888'}} />
                </div>
              </>
            :
              ''
        }



        <div className='clients-addnewpopup-item switch'>
            <p className='clients-addnewpopup-item-title' onClick={handleModulesSwitch}>
              App modules
            </p>

            <IOSSwitch
              checked={modulesSwitch}
              onChange={handleModulesSwitch}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>

        {
          modulesSwitch ? 
              <>
                <div className='clients-addnewpopup-item flex'>
                  <p className='clients-addnewpopup-item-title'>
                    Enabled modules
                  </p>

                  <FormControl fullWidth>
                    <Select
                      className="clients-addnewpopup-item-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={enabledModules}
                      onChange={handleEnabledModules}
                    >
                      <MenuItem value='system'>Use system settings</MenuItem>
                      <MenuItem value='custom'>Set custom settings</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            :
              ''
        }



        <div className='clients-addnewpopup-item switch'>
            <p className='clients-addnewpopup-item-title' onClick={handleMoreInfoSwitch}>
              More information
            </p>

            <IOSSwitch
              checked={moreInfoSwitch}
              onChange={handleMoreInfoSwitch}
              // inputProps={{ 'aria-label': 'controlled' }}
            />
        </div>

        {
          moreInfoSwitch ? 
              <>
                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      VAT
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleVatInfo}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item flex'>
                    <p className='clients-addnewpopup-item-title'>
                      Last project
                    </p>

                    <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleLastProjectInfo}
                      // multiline
                      // maxRows={5}
                    />
                </div>

                <div className='clients-addnewpopup-item notes'>
                  <p className='clients-addnewpopup-item-title'>
                    Comments
                  </p>

                  <TextField
                      className='clients-addnewpopup-item-input'
                      variant="outlined"
                      onChange={handleCommentsInfo}
                      multiline
                      maxRows={5}
                  />
                </div>

                <div className='clients-addnewpopup-item flex'>
                  <p className='clients-addnewpopup-item-title'>
                    Projects type
                  </p>

                  <FormControl fullWidth>
                    <Select
                      className="clients-addnewpopup-item-select"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={handleProjectTypeInfo}
                    >
                      <MenuItem value='type1'>Type 1</MenuItem>
                      <MenuItem value='type2'>Type 2</MenuItem>
                      <MenuItem value='type3'>Type 3</MenuItem>
                      <MenuItem value='type4'>Type 4</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </>
            :
              ''
        }


        <div className='clients-addnewpopup-item flex'>
          <p className='clients-addnewpopup-item-title required'>
            * Required
          </p>
        </div>


        <div className='clients-addnewpopup-btn'>
          <Button className='clients-addnewpopup-btn-reset' onClick={handleCancelAddClient}>Cancel</Button>

          <Button className='clients-addnewpopup-btn-submit' onClick={handleSubmitAddClient}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddNewClientsPopup;
