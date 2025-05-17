import React, { useState }from 'react';
import TableFooter from '@mui/material/TableFooter';
import Button from "@mui/material/Button";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


  
const EmailTableFooter = () => {

  return (

    <TableFooter className='email-footer'>

      <TableRow>
        <TableCell colSpan={6}>
          <div className='email-footer__container'>
            <Button className='email-footer__btn'>More</Button>

            <div className='email-footer__details'>
              <span>Messages by month:</span>
              <span>2023:</span>
              <span>December</span>
              <span>2024:</span>
              <span>January</span>
                  
            </div>
          </div>
        </TableCell>
      </TableRow>


      
    </TableFooter>
  );

}

export default EmailTableFooter