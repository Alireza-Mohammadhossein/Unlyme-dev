import React, { useState } from 'react';
import './invoices-popups.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { toast } from "react-toastify";
import { styled } from '@mui/material/styles';





const AddPaymentPopup = ({ handleCloseAddPaymentPopup, data }) => {


    const [createDate, setCreateDate] = useState(null);
    const handleCreateDate = (newValue) => {
      setCreateDate(newValue);
    };

    const [paymentMethod, setPaymentMethod] = useState('');
    const handlePaymentMethod = (event) => {
      setPaymentMethod(event.target.value);
    };

    const [transactionID, setTransactionID] = useState('');
    const handleTransactionID = (event) => {
      setTransactionID(event.target.value);
    };


    const [additionalInfo, setAdditionalInfo] = useState(false);
    const handleAdditionalInfo = () => {
        setAdditionalInfo(!additionalInfo);
    };
    


    const handleCancelPayment = () => {
      handleCloseAddPaymentPopup();
      setCreateDate(null);
      setAdditionalInfo(false);
    }
  
    const handleSubmitPayment = () => {
      handleCloseAddPaymentPopup();
      setCreateDate(null);
      setAdditionalInfo(false);
      toast.error(`You have clicked on Add new payment by id = ${data.data.id}!`, {
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


    const [notes, setNotes] = useState('');
    const handleNotes = (event) => {
        setNotes(event.target.value);
    };


    const [invoiceAmount, setInvoiceAmount] = useState('');
    const handleInvoiceAmount = (event) => {
      setInvoiceAmount(event.target.value);
    };


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
    <div className='invoices-addpaymentpopup'>
      <div className='invoices-addpaymentpopup-header'>
        <div className='invoices-addpaymentpopup-header-title'>
          <p>Add new payment</p>
        </div>

        <div className='invoices-addpaymentpopup-header-btn'>
          <IconButton onClick={handleCloseAddPaymentPopup}>
            <CloseIcon />
          </IconButton>
        </div>

      </div>

      <div className='invoices-addpaymentpopup-list'>
        <div className='invoices-addpaymentpopup-item flex'>
          <p className="invoices-addpaymentpopup-item-title">
              Invoice Amount*
          </p>

          <div className='invoices-addpaymentpopup-item-price'>
            <TextField
              placeholder=""
              value={invoiceAmount}
              onChange={handleInvoiceAmount}
              className="invoices-addpaymentpopup-item-input"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>
        </div>
        
        <div className='invoices-addpaymentpopup-item flex'>
          <p className="invoices-addpaymentpopup-item-title">
              Date*
          </p>

          <div className='invoices-addpaymentpopup-item-date'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <MobileDatePicker
                slotProps={{ textField: { placeholder: '' } }}
                value={createDate} 
                onChange={handleCreateDate}
                // defaultValue={dayjs()}
                // disablePast
              />
            </LocalizationProvider>
          </div>
        </div>

        <div className='invoices-addpaymentpopup-item flex'>
            <p className='invoices-addpaymentpopup-item-title'>
              Payment method*
            </p>

            <FormControl fullWidth>
                <Select
                  className="invoices-addpaymentpopup-item-select"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={paymentMethod}
                  onChange={handlePaymentMethod}
                >
                  <MenuItem value='paypal1'>Paypal 1</MenuItem>
                  <MenuItem value='paypal2'>Paypal 2</MenuItem>
                  <MenuItem value='paypal3'>Paypal 3</MenuItem>
                  <MenuItem value='paypal4'>Paypal 4</MenuItem>
                </Select>
            </FormControl>
        </div>

        <div className='invoices-addpaymentpopup-item flex'>
          <p className='invoices-addpaymentpopup-item-title'>
            Transaction ID
          </p>

          <TextField
              className='invoices-addpaymentpopup-item-input'
              variant="outlined"
              onChange={handleTransactionID}
          />
        </div>

        <div className='invoices-addpaymentpopup-item switch'>
            <p className='invoices-addpaymentpopup-item-title' onClick={handleAdditionalInfo}>
              Additional information
            </p>

            {/* <Switch
                checked={additionalInfo}
                onChange={handleAdditionalInfo}
                // inputProps={{ 'aria-label': 'controlled' }}
            /> */}

            <IOSSwitch
              checked={additionalInfo}
              onChange={handleAdditionalInfo}
            />
        </div>

        {
          additionalInfo ? 
              <>
                <div className='invoices-addpaymentpopup-item notes'>
                  <p className='invoices-addpaymentpopup-item-title'>
                    Notes**
                  </p>

                  <div style={{width: '380px'}}>
                    <TextField
                        className='invoices-addpaymentpopup-item-input'
                        variant="outlined"
                        onChange={handleNotes}
                        multiline
                        maxRows={5}
                    />

                    <span className='notif'>
                      ** Private, not visible to the client
                    </span>
                  </div>
                </div>
              </>
            :
              ''
        }

        <div className='invoices-addpaymentpopup-item flex'>
          <FormControlLabel control={<Checkbox sx={{color: '#51A3FF'}} defaultChecked />} label="Send the client a Payment received email" sx={{color: '#888888', fontSize: '13px'}} />
        </div>

        <div className='invoices-addpaymentpopup-item flex'>
            <p className='invoices-addpaymentpopup-item-title'>
              * Required
            </p>
        </div>

        <div className='invoices-addpaymentpopup-btn'>
          <Button className='invoices-addpaymentpopup-btn-reset' onClick={handleCancelPayment}>Cancel</Button>

          <Button className='invoices-addpaymentpopup-btn-submit' onClick={handleSubmitPayment}>Submit</Button>
        </div>
      </div>

    </div>



  );
}


export default AddPaymentPopup;
