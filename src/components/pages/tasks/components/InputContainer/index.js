import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddModal from "../Modals/AddModal";
import AddList from "../Modals/AddList";
import AddIcon from "@mui/icons-material/Add";
import { Collapse } from "@material-ui/core";
import InputCard from "../InputCard";



export default function InputContainer({ listId, type }) {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAddListModal, setOpenAddListModal] = useState(false);
  const handleOpenAddModal = () => setOpenAddModal(true);
  const handleCloseAddModal = () => setOpenAddModal(false);
  
  const handleOpenAddListModal = () => setOpenAddListModal(true);
  const handleCloseAddListModal = () => setOpenAddListModal(false);


  const [open, setOpen] = useState(false);

  return (

    <div className={`input-container ${type === 'list' ? 'list' : ''}`}>
      <Collapse in={open} timeout={0}>
        <InputCard open={open} setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      <Collapse in={!open} timeout={0}>
        <div className="input-content">
          <Button
            className={`add-backlog-btn ${type === "list" ? 'list' : ''} `}
            startIcon={<AddIcon />}
            // onClick={() => setOpen(!open)}
            onClick={() => setOpen(true)}
          >
            {type === "card" ? "Add a Card" : "Add another List"}

          </Button>
        </div>
      </Collapse>

      
      {/* <AddModal
        listId={listId}
        // type={type}
        type='card'
        handleCloseAddModal={handleCloseAddModal} 
        handleOpenAddModal={handleOpenAddModal} 
        openAddModal={openAddModal} 
        setOpenAddModal={setOpenAddModal}
      />

      <AddList
        listId={listId}
        // type={type}
        type='list'
        handleCloseAddListModal={handleCloseAddListModal} 
        handleOpenAddListModal={handleOpenAddListModal} 
        openAddListModal={openAddListModal} 
        setOpenAddListModal={setOpenAddListModal}
      /> */}
    </div>



    // <div className="input-container" style={{height: '38px'}}>
    //   {/* <Collapse in={open}>
    //     <InputCard setOpen={setOpen} listId={listId} type={type} />
    //   </Collapse> */}
    //   {/* <Collapse in={!open}> */}
    //     <div className="input-content">
    //         {type === "card"
    //           ? 
    //             <Button
    //               className="add-backlog-btn"
    //               startIcon={<AddIcon />}
    //               // onClick={() => setOpen(!open)}
    //               onClick={handleOpenAddModal}
    //               aria-label="add new card"
    //             >
    //               Add New Card
    //             </Button>
    //           : 
    //             <Button
    //               className="add-backlog-btn list"
    //               startIcon={<AddIcon />}
    //               // onClick={() => setOpen(!open)}
    //               onClick={handleOpenAddListModal}
    //             >
    //               Add another list
    //             </Button>
    //         }
    //     </div>
        
    //     <AddModal
    //       listId={listId}
    //       // type={type}
    //       type='card'
    //       handleCloseAddModal={handleCloseAddModal} 
    //       handleOpenAddModal={handleOpenAddModal} 
    //       openAddModal={openAddModal} 
    //       setOpenAddModal={setOpenAddModal}
    //     />

    //     <AddList
    //       listId={listId}
    //       // type={type}
    //       type='list'
    //       handleCloseAddListModal={handleCloseAddListModal} 
    //       handleOpenAddListModal={handleOpenAddListModal} 
    //       openAddListModal={openAddListModal} 
    //       setOpenAddListModal={setOpenAddListModal}
    //     />
    //   {/* </Collapse> */}
    // </div>

  );
}