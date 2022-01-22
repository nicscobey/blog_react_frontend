import {TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextArea  from './textarea';
import { useState } from 'react';  

const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));

const EditReply = ({reply, editReply, comment_id, account, setShowEditReply, token}) => {

    const [writeReply, setWriteReply] = useState(reply.content)

    const handleSetReply = () => {
        setShowEditReply(false)
    }

    const handleSave = () => {
        console.log({content: writeReply, author: account.id, comment: reply.comment})
        editReply({content: writeReply, author: account.id, comment: reply.comment}, reply.id)
        setWriteReply("")
        setShowEditReply(false)
    }


    
    
    
    
    return (
        <div className="new-comment" id="new-reply">
            <div className="comment-header">Edit Reply</div>
            <form className="new-comment-bottom">
                <TextArea comment={writeReply} setWriteComment={setWriteReply} />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handleSave}>Update Reply</div>
                    <div className="empty-btn horizontal-margin" onClick={handleSetReply}>Cancel Changes</div>
                </div>
            </form>
        </div>
    )
}

export default EditReply