import {TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextArea  from './textarea';
import { useState } from 'react';  

const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));

const NewComment = ({newComment, post_id, account, setComment}) => {

    const [writeComment, setWriteComment] = useState("")

    const handleSetComment = () => {
        setComment(false)
    }

    const handleSave = () => {
        console.log({content: writeComment, author: account.id, blog: post_id})
        newComment({content: writeComment, author: account.id, blog: post_id})
        setWriteComment("")
        setComment(false)
    }


    
    
    
    
    return (
        <div className="new-comment">
            <div className="comment-header">Add a Comment</div>
            <form className="new-comment-bottom">
                <TextArea comment={writeComment} setWriteComment={setWriteComment} />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handleSave}>Save Comment</div>
                    <div className="empty-btn horizontal-margin" onClick={handleSetComment}>Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default NewComment