import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import NewComment from './newComment';
import Replies from './replies';

const Comment = ({comment, account, url, token}) => {

    const [showNewReply, setShowNewReply] = useState(false)

    const handleShowNewReply = () => {
        setShowNewReply(true)
    }

    return (
        <>
            <div className="comment">
                <div className="comment-top">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="reply-author" className="comment-author-img" />
                    <div className="comment-right">
                        <div className="comment-published">
                            <b><p className="no-margin">Username</p></b>
                            <p className="no-margin">Month ##, ####</p>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="comment-button">
                        <IconButton><ThumbUpIcon /></IconButton>#
                    </div>
                    <div className="comment-button">
                        <IconButton><ThumbDownIcon /></IconButton>#
                    </div>
                    <div className="comment-button">
                        <IconButton onClick={handleShowNewReply}><ChatBubbleIcon /></IconButton>Reply
                    </div>
                    { account && account.id === comment.author ?
                            <>
                    <div className="comment-button">
                        <IconButton><EditIcon /></IconButton>Edit
                    </div>
                    <div className="comment-button">
                        <IconButton><DeleteIcon /></IconButton>Delete
                    </div>
                    </> 
                    : null }
                </div>
                <Replies token={token} handleShowNewReply={handleShowNewReply} setShowNewReply={setShowNewReply} showNewReply={showNewReply} account={account} comment_id={comment.id} url={url} />
            </div>
            <br />
        </>
    )
}

export default Comment