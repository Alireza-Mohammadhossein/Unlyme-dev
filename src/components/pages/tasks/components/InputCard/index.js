import React, { useContext, useState, useEffect } from "react";
import storeApi from "../../utils/storeApi";
import store from "../../utils/store";
import CloseIcon from '@mui/icons-material/Close';




export default function InputCard({ open, setOpen, listId, type }) {
  const { addMoreCard, addMoreList } = useContext(storeApi);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const comments = [];
  const checklist = [];
  // const [comments, setComments] = useState([]);
  const [tags, setTags] = useState(store.tags);
  const [members, setMembers] = useState([]);
  const [files, setFiles] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [color, setColor] = useState('#3878B9');


  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const handleOnChange = (e) => {

    if(e.key === 'Enter') {
      e.preventDefault();

      setTitle(title);

      if (type === 'list') {
        addMoreList(title, description);
        // setTitle('')
      }

      if (type === 'card') {
        addMoreCard(title, listId, description, comments, checklist, tags, members, color, files);
        // addMoreCard(title, listId);
        // setTitle('')
      }


      setTitle('')
      handleOnBlur()

      // document.getElementById(`input-card-container-${listId}`).blur()
    }
  };

  const handleBtnConfirm = () => {
    if (type === "card") {
      // addMoreCard(title, listId);
      addMoreCard(title, listId, description, comments, checklist, tags, members, color, files);

      console.log('comments', comments)
    } else {
      addMoreList(title, description);
    }
    // setOpen(false);
    setTitle("");
    handleOnBlur()
    // setDescription("");
    // setOpen(false);

    // document.getElementById(`input-card-container-${listId}`).blur()

  };

  const handleOnBlur = () => {
    // if (type === "card") {
      // if(title.length > 0) {
      //   addMoreCard(title, listId);
      // }
      // setOpen(false);
      // setTitle("");
      // setDescription("");
    // } else {
      setTitle('');
      setOpen(false);
    // }
    
  };






  
  useEffect(() => {
    if(open) {
      document.getElementById(`input-card-container-${listId}`).focus()
    }
  }, [open])


  return (

    <div className="input-card">
      <div className="input-card-container">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleOnChange}
          value={title}
          className="input-text"
          onfoc
          id={`input-card-container-${listId}`}
          // onBlur={handleOnBlur}
          placeholder={
            type === "card"
              ? "Enter a title of this card..."
              : "Enter list title"
          }
        />
      </div>

      <div className="confirm">
        <button className="button-confirm" onClick={handleBtnConfirm}>
          {type === "card" ? "Add Card" : "Add List"}
        </button>
        <button
          className="button-cancel"
          onClick={() => {
            setTitle("");
            setOpen(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>


  );
}