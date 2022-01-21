import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import NewComment from './newComment';
import Replies from './reply';
import { useState } from 'react';

const Comments = ({comments, getComments, editComment, deleteComment, newComment}) => {

    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState(false)

    const handleShow = () => {
        setShowComments(true)
        getComments()
        console.log(comments)
    }
    const handleComment = () => {setComment(true)}

    const writeComment = () => {
        return (
            <>
        {comment ? null : <div className="yellow-btn inline-block" onClick={handleComment}>Write a Comment</div>}
        </>
        )
    }

    return (
        <div>
            <h1>Comments</h1>
            <div className="flex-center">
                {showComments ?  writeComment() : <div className="yellow-btn inline-block" onClick={handleShow}>Show Comments</div>}
            </div>
            <br />
            {showComments ? <>
            {comment ? <NewComment setComment={setComment} /> : null}
            <div className="comment">
                <div className="comment-top">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="reply-author" className="comment-author-img" />
                    <div className="comment-right">
                        <div className="comment-published">
                            <b><p className="no-margin">Username</p></b>
                            <p className="no-margin">Month ##, ####</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
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
                        <IconButton><ChatBubbleIcon /></IconButton>Reply
                    </div>
                    <div className="comment-button">
                        <IconButton><EditIcon /></IconButton>Edit
                    </div>
                    <div className="comment-button">
                        <IconButton><DeleteIcon /></IconButton>Delete
                    </div>
                </div>
                <Replies />
            </div>
            </> : null}
        </div>
    )
}

export default Comments