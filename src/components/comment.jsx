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
import EditComment from "./editComment";
import Edit from "@mui/icons-material/Edit";

const Comment = ({comment, account, url, token, localToken, deleteComment, editComment, post_id, refreshToken}) => {
    console.log(token)


    const [showNewReply, setShowNewReply] = useState(false)
    const [showEditComment, setShowEditComment] = useState(false)

    const openEditComment = () => {
        setShowEditComment(true)
    }

    const handleShowNewReply = () => {
        setShowNewReply(true)
    }

    console.log(comment)

    const handleDelete = () => {
        console.log('delete')
        deleteComment(comment.id)
    }

    const convertToDate = (ms) => {
        const dateObj = new Date(ms)
    
    let hour
    
    if (dateObj.getHours() === 0) {
        hour = 12;
    }
    else if (dateObj.getHours() > 12) {
        hour = dateObj.getHours() - 12
    }
    else {
        hour = dateObj.getHours()
    }
    
    return `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()} at ${hour}:${dateObj.getMinutes()>9 ? dateObj.getMinutes() : "0" + dateObj.getMinutes()} ${dateObj.getHours() >= 12 ? "pm" : "am"}`
    }

    return (
        <>
            <div className="comment">
                {showEditComment ? 
                    <div className="comment-top">
                        {/* <h1>Comment Editor</h1> */}
                        <EditComment account={account} editComment={editComment} comment={comment} setShowEditComment={setShowEditComment} />
                    </div> 
                    : <><div className="comment-top">
                    <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="reply-author" className="comment-author-img" />
                    <div className="comment-right">
                        <div className="comment-published">
                            <b><p className="no-margin">{comment.author.username}</p></b>
                            <p className="no-margin">{convertToDate(comment.created_at)}</p>
                        </div>
                        <p>{comment.content}</p>
                    </div>
                </div>
                <div className="flex-center">
                    {token !== "" || localToken ?
                    <>
                    <div className="comment-button">
                        <IconButton><ThumbUpIcon /></IconButton>{comment.likes}
                    </div>
                    <div className="comment-button">
                        <IconButton><ThumbDownIcon /></IconButton>{comment.dislikes}
                    </div>
                     <div className="comment-button">
                        <IconButton onClick={handleShowNewReply}><ChatBubbleIcon /></IconButton>Reply
                    </div>
                    </> : null}
                    { account && account.id === comment.author.id ?
                        <>
                            <div className="comment-button">
                                <IconButton><EditIcon onClick={openEditComment} /></IconButton>Edit
                            </div>
                            <div className="comment-button">
                                <IconButton><DeleteIcon onClick={handleDelete} /></IconButton>Delete
                            </div>
                        </> 
                    : null }
                </div></>
                }
                <Replies localToken={localToken} refreshToken={refreshToken} token={token} handleShowNewReply={handleShowNewReply} setShowNewReply={setShowNewReply} showNewReply={showNewReply} account={account} comment_id={comment.id} url={url} />
            </div>
            <br />
        </>
    )
}

export default Comment