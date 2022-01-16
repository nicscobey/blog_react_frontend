import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Replies = () => {

    const Reply = () => {
        return (
            <div className="reply">
                {/* <div className="comment-top"> */}
                <div className="reply-top">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="reply-author" className="reply-author-img" />
                    <div className="comment-right">
                        <div className="comment-published">
                            <b><p className="no-margin">Username</p></b>
                            <p className="no-margin">Month ##, ####</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet.  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                    </div>
                    <div className="flex-center">
                    <div className="reply-button">
                        <IconButton  size="small"><ThumbUpIcon /></IconButton>#
                    </div>
                    <div className="reply-button">
                        <IconButton  size="small"><ThumbDownIcon /></IconButton>#
                    </div>
                    <div className="reply-button">
                        <IconButton  size="small"><ChatBubbleIcon /></IconButton>Reply
                    </div>
                    <div className="reply-button">
                        <IconButton  size="small"><EditIcon /></IconButton>Edit
                    </div>
                    <div className="reply-button">
                        <IconButton  size="small"><DeleteIcon /></IconButton>Delete
                    </div>
                    {/* <div className="reply-button">
                        <Button variant="text" startIcon={<DeleteIcon />}>Delete</Button>
                    </div> */}
                </div>
                {/* </div> */}
                </div>
        )
    }

    return (
        <div className="replies-container">
            <div className="replies-line"></div>
            <div className="replies">
                <Reply />
                <Reply />
            </div>

        </div>
    )
}

export default Replies