import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import NewReply from './newReply';

const Replies = ({url, comment_id, account, showNewReply, setShowNewReply, handleShowNewReply, token}) => {

    // const [showNewReply, setShowNewReply] = useState(false)
    const localToken = JSON.parse(localStorage.getItem('token'))
    console.log(account)

    


    // GET REPLIES
const [replies, setReplies] = useState(null)
const getReplies = async () => {
  const response = await fetch(url + 'reply/', {
    method: "get",
  })
  const data = await response.json()
  console.log(data)
  setReplies(data)
}

// NEW REPLY
const newReply = async (reply) => {
  const response = await fetch(url + 'reply/', {
    method: "post",
    headers: {
      Authorization: `Bearer ${token.access}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reply)
  })

  getReplies()
}

//EDIT REPLIES
const editReply = async (reply, reply_id) => {
  const response = await fetch(url + 'reply/' + reply_id + '/', {
    method: "put",
    headers: {
      Authorization: `Bearer ${localToken.access}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reply)
  })

  getReplies()
}

//DELETE REPLIES
const deleteReply = async (reply_id) => {

  const response = await fetch(url + 'reply/' + reply_id + '/', {
    method: "delete",
    headers: {
      Authorization: `Bearer ${localToken.access}`,
    },
  })

  getReplies()
}


useEffect(() => {getReplies()}, [])

    let myReplies = replies?.filter(reply => reply.comment === comment_id)
    console.log(myReplies)

    const mapReplies = () => {
        const mappedReplies = myReplies?.map((reply) => {

            const handleDelete = () => {
                deleteReply(reply.id)
            }

            console.log(reply.author)


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
                            <p>{reply.content}</p>
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
                            <IconButton onClick={handleShowNewReply} size="small"><ChatBubbleIcon /></IconButton>Reply
                        </div>
                        { account && account.id === reply.author ?
                            <>
                                <div className="reply-button">
                                    <IconButton  size="small"><EditIcon /></IconButton>Edit
                                </div>
                                <div className="reply-button">
                                    <IconButton  size="small" onClick={handleDelete}><DeleteIcon /></IconButton>Delete
                                </div>
                            </>
                        : null}
                        {/* <div className="reply-button">
                            <Button variant="text" startIcon={<DeleteIcon />}>Delete</Button>
                        </div> */}
                    </div>
                {/* </div> */}
                </div>
            )
        })

        return mappedReplies
    }

    const Reply = () => {
        return (
            <div className="reply">
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
                </div>
            </div>
        )
    }

    return (
        <>
            {showNewReply || replies && myReplies.length > 0 ? 
            <div className="replies-container">
                <div className="replies-line"></div>
                <div className="replies">
                    {/* <Reply />
                    <Reply /> */}
                    {mapReplies()} 
                    {/* <h5>New Reply</h5> */}
                    {showNewReply ? <NewReply token={token} setShowNewReply={setShowNewReply} comment_id={comment_id} newReply={newReply} account={account} /> : null}
                </div> 
            </div> : null}
        </>
    )
}

export default Replies