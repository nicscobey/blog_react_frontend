import {TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextArea  from './textarea';
import { useState } from 'react';  

const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));

const EditComment = ({comment, post_id, account, setShowEditComment, editComment}) => {

    const [writeComment, setWriteComment] = useState(comment.content)

    const handleSetComment = () => {
        setShowEditComment(false)
    }

    const handleSave = () => {
        console.log({content: writeComment, author: account.id, blog: comment.blog})
        editComment({content: writeComment, author: account.id, blog: comment.blog}, comment.id)
        setWriteComment("")
        setShowEditComment(false)
    }
    
    return (
        <div className="new-comment comment-editor">
            <div className="comment-header">Edit Comment</div>
            <form className="new-comment-bottom">
                <TextArea comment={writeComment} setWriteComment={setWriteComment} />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handleSave}>Update Comment</div>
                    <div className="empty-btn horizontal-margin" onClick={handleSetComment}>Cancel Changes</div>
                </div>
            </form>
        </div>
    )
}

export default EditComment