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

      
    </div>



  );
}