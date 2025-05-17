import React, { useState }from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TablePagination from '@mui/material/TablePagination';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import sortIcon from '../../../assets/images/email/date-sort.svg';


import replyIcon from '../../../assets/images/email/reply.svg';
import forwardIcon from '../../../assets/images/email/forward.svg';
import readIcon from '../../../assets/images/email/read.svg';
import replyAllIcon from '../../../assets/images/email/reply-all.svg';
import trashIcon from '../../../assets/images/email/trash.svg';
import spamIcon from '../../../assets/images/email/spam.svg';
import checkboxIcon from '../../../assets/images/email/checkbox.svg';
import checkedIcon from '../../../assets/images/email/checked.svg';


const headCells = [
    {
      id: 1,
      numeric: false,
      disablePadding: true,
      label: 'Logo',
      sortable: false,
      // with: 70
    },
    {
      id: 2,
      numeric: true,
      disablePadding: true,
      label: 'Starred',
      sortable: false,
      // with: 70
    },
    {
      id: 3,
      numeric: true,
      disablePadding: true,
      label: 'Title',
      sortable: false,
      // with: 130
    },
    {
      id: 4,
      numeric: true,
      disablePadding: true,
      label: 'Message',
      sortable: false,
      // with: 190
    },
    {
      id: 5,
      numeric: true,
      disablePadding: true,
      label: 'Attached',
      sortable: false,
      // with: 70
    },
    {
      id: 6,
      numeric: true,
      disablePadding: true,
      label: 'Date',
      // with: 130
    },
];
  
const EmailTableHead = (props) => {
const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, setSearchText, sortByDateHandler, emails, page, setPage, rowsPerPage, handleChangePage, handleChangeRowsPerPage, setReadMode, readMode, handleReadMode} =
  props;
const createSortHandler = (property) => (event) => {
  onRequestSort(event, property);
};



const options = ["Edit", "Add description", "Delete"];
const ITEM_HEIGHT = 48;

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};



const handlePrevClick = () => {
  setPage(page - 1);
};

const handleNextClick = () => {
  setPage(page + 1);
};







return (
  <TableHead className='email-header'>
    <TableRow>
      <TableCell padding="checkbox" className='email-header_selected'
        sx={{
          paddingLeft: '15px !important',
          width: '30px'
        }}
      >
        <Checkbox
          sx={{
            padding: '5px',
          }}
          className='checkbox'
          icon={<img src={checkboxIcon} alt='checkbox' />}
          checkedIcon={<img src={checkedIcon} alt='checked' />}
          indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={rowCount > 0 && numSelected === rowCount}
          onChange={onSelectAllClick}
        />
      </TableCell>
      
      <TableCell colSpan={4} padding="checkbox" className='email-header_selected'>

        <div className='email-header_selected_options'>

          {numSelected > 0 && (
            <span>{numSelected}</span>
          )}

          <Button
            startIcon={<img src={replyIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Reply
          </Button>

          <Button
            startIcon={<img src={replyAllIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Reply All
          </Button>

          <Button
            startIcon={<img src={forwardIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Forward
          </Button>

          <Button
            startIcon={<img src={trashIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Delete
          </Button>

          <Button
            startIcon={<img src={readIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Read
          </Button>

          <Button
            startIcon={<img src={spamIcon} />}
            className="email-header_selected_options-btn"
            // onClick={handleCreateNote}
          >
            Spam!
          </Button>

        </div>
      </TableCell>


      {/* <TableCell padding="checkbox" className='email-header_selected' sx={{maxWidth: '155px', width: '155px',}}>
        
      </TableCell> */}



      <TableCell
        // align={headCell.numeric ? 'right' : 'left'}
        align="center"
        sx={{ cursor: 'pointer', maxHeight: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        className='email-header_pagination'
      >
        <div style={{display: 'flex', justifyContent: 'end', gap: '15px'}}>
          

          <TablePagination
            // rowsPerPageOptions={[20, 50, 100]}
            // component="div"
            labelDisplayedRows = {({from, to, count, page}) => ``}
            rowsPerPageOptions={[]}
            component="div"
            count={emails.length}
            rowsPerPage={rowsPerPage}
            page={page}
            // onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={() => (
              <div className='email-header_pagination-container'>
                <IconButton
                  onClick={handlePrevClick}
                  disabled={page === 0}
                  aria-label="previous page"
                >
                  <ChevronLeftIcon />
                </IconButton>

                <p><span>{page+1}</span><span>of</span><span>{Math.ceil(emails.length / 20)}</span></p>

                <IconButton
                  onClick={handleNextClick}
                  disabled={page >= Math.ceil(emails.length / rowsPerPage) - 1}
                  aria-label="next page"
                >
                  <ChevronRightIcon />
                </IconButton>
              </div>
            )}
          />
        </div>
        
          
      </TableCell>

    </TableRow>


  </TableHead>
);
}

export default EmailTableHead