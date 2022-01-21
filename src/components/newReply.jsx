import {TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextArea  from './textarea';
import { useState } from 'react';  

const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));

const NewReply = ({newReply, comment_id, account, setShowNewReply, token}) => {

    const [writeReply, setWriteReply] = useState("")

    const handleSetReply = () => {
        setShowNewReply(false)
    }

    const handleSave = () => {
        console.log({content: writeReply, author: account.id, comment: comment_id})
        newReply({content: writeReply, author: account.id, comment: comment_id})
        setWriteReply("")
        setShowNewReply(false)
    }


    
    
    
    
    return (
        <div className="new-comment" id="new-reply">
            <div className="comment-header">Add a Reply</div>
            <form className="new-comment-bottom">
                <TextArea comment={writeReply} setWriteComment={setWriteReply} />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handleSave}>Save Reply</div>
                    <div className="empty-btn horizontal-margin" onClick={handleSetReply}>Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default NewReply