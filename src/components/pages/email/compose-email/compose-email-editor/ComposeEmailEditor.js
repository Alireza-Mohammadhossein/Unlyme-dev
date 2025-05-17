import React , {useState} from 'react';
import './compose-email-editor.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorProvider, useCurrentEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, useEditor } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align';


import boldIcon from '../../../../../assets/images/email/editor/bold.svg';
import italicIcon from '../../../../../assets/images/email/editor/italic.svg';
import underlineIcon from '../../../../../assets/images/email/editor/underline.svg';
import colorIcon from '../../../../../assets/images/email/editor/color.svg';
import bulletIcon from '../../../../../assets/images/email/editor/list.svg';
import numberIcon from '../../../../../assets/images/email/editor/number.svg';
import leftAlignIcon from '../../../../../assets/images/email/editor/align-left.svg';
import centerAlignIcon from '../../../../../assets/images/email/editor/align-center.svg';
import rightAlignIcon from '../../../../../assets/images/email/editor/align-right.svg';
import stickerIcon from '../../../../../assets/images/email/editor/smile.svg';
import linkIcon from '../../../../../assets/images/email/editor/link.svg';
import qouteIcon from '../../../../../assets/images/email/editor/quotation.svg';
import eraseIcon from '../../../../../assets/images/email/editor/erase.svg';
import moreIcon from '../../../../../assets/images/email/editor/more-horizontal.svg';



const ComposeEmailEditor = () => {


  const [fontFamily, setFontFamily] = useState('Arial');

  const handleChangeFontFamily = (event) => {
    setFontFamily(event.target.value);
  };

  const [fontSize, setFontSize] = useState(14);

  const handleChangeFontSize = (event) => {
    setFontSize(event.target.value);
  };


  const [alignFont, setAlignFont] = useState('left');

  const handleChangeAlignFont = (event) => {
    const newAlignment = event.target.value;
    setAlignFont(newAlignment);

    editor.chain().focus().setTextAlign(newAlignment).run();
  };



  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false, 
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false, 
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'], // Specify which types support alignment
      }),
      Placeholder.configure({
        placeholder: 'Write your message here...',
      }),
    ],
    content: '', 
    autofocus: true,
    
    
  });

  if (!editor) {
    return null;
  }







  
  return (
    <div className='compose-email-editor'>
      <div className='compose-email-editor__actions'>

        <Select
          id="font-family-select"
          className='compose-email-editor__actions-select'
          // defaultValue={fontFamily}
          value={fontFamily}
          autoWidth
          onChange={handleChangeFontFamily}
          sx={{paddingRight: '5px', paddingLeft: '5px', minWidth: '100px'}}
        >
          <MenuItem value={'Arial'}>Arial</MenuItem>
          <MenuItem value={'Serif'}>Serif</MenuItem>
          <MenuItem value={'Roboto'}>Roboto</MenuItem>
        </Select>

        <span className='compose-email-editor__actions-divider'></span>

        <Select
          id="font-size-select"
          className='compose-email-editor__actions-select'
          defaultValue={fontSize}
          value={fontSize}
          autoWidth
          onChange={handleChangeFontSize}
          sx={{padding: '0'}}
        >
          <MenuItem value={12}>12px</MenuItem>
          <MenuItem value={13}>13px</MenuItem>
          <MenuItem value={14}>14px</MenuItem>
          <MenuItem value={15}>15px</MenuItem>
          <MenuItem value={16}>16px</MenuItem>
        </Select>


        <span className='compose-email-editor__actions-divider'></span>

        <IconButton
          aria-label="bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          // className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <img src={boldIcon} alt='bold' />
        </IconButton>
        
        <IconButton
          aria-label="italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          // className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <img src={italicIcon} alt='italic' />
        </IconButton>

        <IconButton
          aria-label="underline"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <img src={underlineIcon} alt='underline' />
        </IconButton>


        <span className='compose-email-editor__actions-divider'></span>

        <IconButton aria-label="color">
          <img src={colorIcon} alt='color' />
        </IconButton>

        
        <span className='compose-email-editor__actions-divider'></span>

        <IconButton
          aria-label="bullet"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          // className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <img src={bulletIcon} alt='bullet' />
        </IconButton>
        
        <IconButton
          aria-label="number"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          // className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <img src={numberIcon} alt='number' />
        </IconButton>
        

        <span className='compose-email-editor__actions-divider'></span>

        <Select
          id="align-select"
          className="compose-email-editor__actions-select"
          value={alignFont}
          onChange={handleChangeAlignFont}
          autoWidth
          renderValue={(value) => (
            value === 'left' ? <img src={leftAlignIcon} alt="align left" style={{ width: '20px' }} /> :
            value === 'center' ? <img src={centerAlignIcon} alt="align center" style={{ width: '20px' }} /> :
            <img src={rightAlignIcon} alt="align right" style={{ width: '20px' }} />
          )}
          sx={{ padding: '0' }}
        >
          <MenuItem
            value={'left'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: '#414141'
            }}
          >
            <img src={leftAlignIcon} alt='align left' />Align left
          </MenuItem>
          
          <MenuItem
            value={'center'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: '#414141'
            }}
          >
            <img src={centerAlignIcon} alt='align center' />Center
          </MenuItem>
          
          <MenuItem
            value={'right'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              color: '#414141'
            }}
          >
            <img src={rightAlignIcon} alt='align right' />Align right
          </MenuItem>
        </Select>
        

        <span className='compose-email-editor__actions-divider'></span>

        <IconButton aria-label="sticker">
          <img src={stickerIcon} alt='sticker' />
        </IconButton>
        
        <IconButton aria-label="link">
          <img src={linkIcon} alt='link' />
        </IconButton>
        
        <IconButton
          aria-label="qoute"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          // className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <img src={qouteIcon} alt='qoute' />
        </IconButton>
        
        <IconButton aria-label="erase">
          <img src={eraseIcon} alt='erase' />
        </IconButton>


        <span className='compose-email-editor__actions-divider'></span>

        <IconButton aria-label="more">
          <img src={moreIcon} alt='more' />
        </IconButton>


      </div>

      <div className='compose-email-editor__content'>
        <EditorContent 
          editor={editor}
        />

      </div>
    </div>
  )
}

export default ComposeEmailEditor;
