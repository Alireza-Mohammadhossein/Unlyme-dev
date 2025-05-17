import React, { useState, useMemo }from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import Button from "@mui/material/Button";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from "@mui/material/IconButton";
import star from '../../../assets/images/email/star-not.svg';
import activeStar from '../../../assets/images/email/star.svg';
import SingleMail from './single-mail/SingleMail';
import { useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EmailTableHead from './EmailTableHead';
import EmailTableFooter from './EmailTableFooter';
import Avatar from '@mui/material/Avatar';
import inboxGrayIcon from '../../../assets/images/email/inbox-gray.svg';
import readIcon from '../../../assets/images/email/read-mail.svg';
import unreadIcon from '../../../assets/images/email/unread-mail.svg';
import defaultEmailLogo from '../../../assets/images/email/default-email-logo.svg';
import downloadIcon from '../../../assets/images/email/download.svg';
import markGrayIcon from '../../../assets/images/email/mark-gray.svg';
import markRedIcon from '../../../assets/images/email/mark-red.svg';
import checkboxIcon from '../../../assets/images/email/checkbox.svg';
import checkedIcon from '../../../assets/images/email/checked.svg';



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}


export default function EmailTable({ activeSingleMail, setActiveSingleMail, emails, searchText, setSearchText, viewMode, setViewMode, handleViewModeChange }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('date');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(15);


  // single mail variables
  const [userIcon, setUserIcon] = useState(null);
  const [mailFrom, setMailfrom] = useState('');
  const [mailTo, setMailTo] = useState('');
  const [mailTitle, setMailTitle] = useState('')
  const [mailSubject, setMailSubject] = useState('');
  const [mailMessage, setMailMessage] = useState('');

  const [selectedRow, setSelectedRow] = useState(null);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = visibleRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };


  const isSelected = (id) => selected.indexOf(id) !== -1;



  // start filtering emails based on the search text

  const [filteredEmails, setFilteredEmails] = useState(emails);
  




// start sort by date
  const [isDesc, setIsDesc] = useState(true);
  const sortByDateHandler = () => {
    const sortedList = [...filteredEmails].sort((a, b) => {
      if(isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(b.date) - Date.parse(a.date);
      }

      if(!isDesc) {
        setIsDesc(!isDesc);
        return Date.parse(a.date) - Date.parse(b.date);
      }
    });

    setFilteredEmails(sortedList);
  }

// end sort by date



   
  const visibleRows = useMemo(() => stableSort(filteredEmails, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),[filteredEmails, order, orderBy, page, rowsPerPage]
  );



  // start show single mail handler 
  const showSingleMailHanlder = (row) => {
    setActiveSingleMail(true);
    setUserIcon(row.logo);
    setMailfrom(row.from);
    setMailTo(row.to);
    setMailTitle(row.title);
    setMailSubject(row.subject);
    setMailMessage(row.message);

    // setSelectedRow(row)
  }
  // end show single mail handler


  const [readMode, setReadMode] = useState('all');

  const handleReadMode = (event, newReadMode) => {
    if (newReadMode !== null) {
      setReadMode(newReadMode);
    }
  };


  const handleStarredEmail = (e, clickedItem) => {
    // Toggle the 'starred' property of the clicked item
    e.stopPropagation();

    const updatedData = filteredEmails.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          starred: !item.starred, // Toggle the starred property
        };
      }
      return item;
    });

    // Update the state with the modified data
    setFilteredEmails(updatedData);
  };


  const handleMarkEmail = (e, clickedItem) => {
    e.stopPropagation();

    const updatedData = filteredEmails.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          mark: !item.mark,
        }
      }
      return item;
    })

    setFilteredEmails(updatedData);
  }

  const handleReadEmail = (e, clickedItem) => {
    // Toggle the 'starred' property of the clicked item
    e.stopPropagation();
    
    const updatedData = filteredEmails.map((item) => {
      if (item.id === clickedItem.id) {
        return {
          ...item,
          unread: !item.unread, // Toggle the starred property
        };
      }
      return item;
    });

    // Update the state with the modified data
    setFilteredEmails(updatedData);
  };



  // Function to check if the file is an image
  const isImageFile = (fileName) => {
    const imageExtensions = ['.png', '.jpeg', '.jpg'];
    // const fileExtension = fileName.slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2);

    // console.log('filename', fileName.includes('.png'))
    return imageExtensions.some(extension => fileName.toLowerCase().includes(extension));
  };


  // Function to download attached files
  const downloadFile = (fileUrl, fileName) => {
    // Create an invisible link element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    // Append the link to the document and trigger a click on it
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };







  return (
    <Box sx={{ width: '100%' }}>
      <Grid container>
        <Grid item 
          xs = {activeSingleMail ? 0 : 12}
        >
          <Paper sx={{ width: '100%', mb: 2}}>
            {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
            <TableContainer
              sx={{
                width: '100%',
                height: '100%'
              }}
            >
              <Table
                aria-labelledby="tableTitle"
              >

          
                <EmailTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={visibleRows.length}
                  setSearchText={setSearchText}
                  sortByDateHandler={sortByDateHandler}
                  emails={emails}
                  rowsPerPage={rowsPerPage}
                  handleChangePage={handleChangePage}
                  handleChangeRowsPerPage={handleChangeRowsPerPage}
                  page={page}
                  setPage={setPage}
                  readMode={readMode}
                  setReadMode={setReadMode}
                  handleReadMode={handleReadMode}
                />

                <div className={`table-body-container ${viewMode == 'first' ? 'first' : ''} ${viewMode == 'second' ? 'second' : ''} ${viewMode == 'third' ? 'third' : ''}`}>

                  <TableBody className={`email-body ${viewMode == 'second' ? 'second' : ''} ${viewMode == 'third' ? 'third' : ''}`}
                    sx={{ display: activeSingleMail & viewMode =='first' ? 'none !important' : activeSingleMail & viewMode =='second' ? 'inline-block !important' : 'inline-block' }}
                  >
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.id);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow 
                          hover
                          // onClick={(event) => handleClick(event, row.id)}
                          onClick={() => {
                            setSelectedRow(row)
                            showSingleMailHanlder(row)
                          }}
                          // role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.id}
                          selected={isItemSelected}
                          sx={{ cursor: 'pointer' }}
                          className={`${row.unread ? 'unread-mail' : ''}`}

                        >
                          {/* <TableCell
                            sx={{ height: 40, padding: '0' }}
                          > */}
                            
                          {/* </TableCell> */}

                          <TableCell padding="checkbox"
                            sx={{ cursor: 'pointer', height: 40, width: '40px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', boxSizing: 'border-box' }}
                            
                          >
                            <IconButton 
                              className='mark-btn' 
                              disableRipple
                              onClick={(e) => {handleMarkEmail(e, row)}}
                            >
                              <img src={row.mark ? markRedIcon : markGrayIcon} alt='mark' />
                            </IconButton>

                            <Checkbox
                              className='checkbox'
                              checked={isItemSelected}
                              icon={<img src={checkboxIcon} alt='checkbox' />}
                              checkedIcon={<img src={checkedIcon} alt='checked' />}
                              sx={{
                                padding: '5px',
                              }}
                              onClick={(event) => {
                                event.stopPropagation();
    
                                handleClick(event, row.id)
                              }}
                              disableRipple
                              // inputProps={{
                              //   'aria-labelledby': labelId,
                              // }}
                            />
                          </TableCell>
                          
                          <TableCell
                            // component="th"
                            id={labelId}
                            scope="row"
                            // padding="none"
                            align="center"
                            sx={{ cursor: 'pointer', height: 40, width: 30, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0' }}
                          >
                            {row.logo ? 
                              <img className="email-logo" src={row.logo} alt={row.name ? row.name : row.from} />
                              :
                              <Avatar className="email-logo" style={{backgroundColor: row.color ? row.color : '#6F194F' }}>
                                {row.name ? `${row.name.split(' ')[0][0]}${row.name.split(' ')[1][0]}` : row.from[0]}
                              </Avatar>
                            }
                            
                            
                          </TableCell>
                          
                          <TableCell
                            onClick={(event) => {
                              event.stopPropagation();
                            }}
                            align="center"
                            sx={{ cursor: 'pointer', height: 40, width: 20, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0', paddingLeft: '10px' }}
                          >
                            <IconButton aria-label="star" onClick={(e) => handleStarredEmail(e, row)} disableRipple>
                              <img src={row.starred ? activeStar : star} className='star-icon' />
                            </IconButton>
                          </TableCell>
                          
                          <TableCell
                            align="left"
                            sx={{ cursor: 'pointer', width: 190 ,maxWidth: 190, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px', boxSizing: 'border-box' }}
                          >
                            {row.name ? row.name : row.from}
                            {/* {row.title} */}
                          </TableCell>
                          
                          <TableCell
                            align="left"
                            sx={{ cursor: 'pointer', width: '100%', maxWidth: 500, height: 40, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '5px', paddingRight: '15px' }}
                          >
                            
                            <div className='row-info'>
                              <IconButton aria-label="read" onClick={(e) => handleReadEmail(e, row)} disableRipple>
                                <img src={row.unread ? unreadIcon : readIcon} className='read-icon' />
                              </IconButton>
                              {/* {
                                row.unread ?
                                  <img src={unreadIcon} className='read-icon' />
                                :
                                  <img src={readIcon} className='read-icon' />
                              } */}

                              <div className='row-text'>
                                <span className='email-subject'>{row.subject}</span>
                                <span className='email-divider'>-</span>
                                <span className='email-message'>{row.message}</span>
                              </div>


                              {row.attached && (
                                <div className='email-attached'
                                  onClick={(event) => {
                                    event.stopPropagation();
                                  }}
                                >
                                  <div className='email-attached_file'>
                                    {isImageFile(row.attachedName) ? (
                                      <img src={row.attachedFile} alt='Attached Image' className='email-attached_file-img' />
                                    ) : (
                                      <div className='email-attached_file-name'>
                                        <p>{row.attachedName}</p>
                                        <span>{row.attachedType}</span>
                                      </div>
                                    )}
                                  </div>

                                  <div className='email-attached_actions'>
                                    <div className='email-attached_actions-number'>{row.attachedNumber}</div>
                                    
                                    <Button className='email-attached_actions-download' onClick={() => {
                                      downloadFile(row.attachedFile, row.attachedName);
                                    }}>
                                      <img src={downloadIcon} alt='download file' />
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          </TableCell>
                          
                          {/* <TableCell
                            align="center"
                            sx={{ cursor: 'pointer', height: 40, maxWidth: '155px', width: '155px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0'}}
                          >
                            

                           
                          </TableCell> */}
                          
                          <TableCell
                            align="center"
                            sx={{ cursor: 'pointer', height: 40, width: '30px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', padding: '0 5px 0 0', textAlign: 'right', paddingRight: '10px' }}
                          >
                            <div className='date-attached'>
                              

                              {row.date}
                            </div>
                            
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>

                  {selectedRow && activeSingleMail &&
                    <Grid item 
                      // sx={{display: activeSingleMail ? 'block' : 'none'}}
                      // xs = {12}
                      className={`single-email-container ${viewMode == 'second' ? 'second' : ''} ${viewMode == 'third' ? 'third' : ''}`}
                    >
                      <SingleMail userIcon={userIcon} mailFrom={mailFrom} mailTo={mailTo} mailSubject={mailSubject} mailTitle={mailTitle} mailMessage={mailMessage} setActiveSingleMail={setActiveSingleMail} selectedRow={selectedRow} viewMode={viewMode} />
                    </Grid>
                  }

                  {!selectedRow && !activeSingleMail && (
                    <Grid item className={`empty-single-email ${viewMode == 'first' ? 'first' : ''} ${viewMode == 'second' ? 'second' : ''} ${viewMode == 'third' ? 'third' : ''}`}>
                      No messages selected
                    </Grid>
                  )}

                </div>
                

                {!activeSingleMail && viewMode!=='third' && <EmailTableFooter />}

              </Table>
            </TableContainer>
            {/* <TablePagination
              rowsPerPageOptions={[20, 50, 100]}
              component="div"
              count={emails.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
          </Paper>
        </Grid>

        
      </Grid>
    </Box>
  );
}