import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from 'react';
import NewReply from './newReply';
import EditReply from './editReply'


const Reply = ({url, comment_id, account, handleShowNewReply, showNewReply, token, reply, editReply, deleteReply}) => {

    // const [showNewReply, setShowNewReply] = useState(false)
    // const localToken = JSON.parse(localStorage.getItem('token'))
    // console.log(account)

    // console.log(account)
    // console.log(reply)
    
    const [showEditReply, setShowEditReply] = useState(false)

    const openEditReply = () => {
        setShowEditComment(true)
    }

    const handleShowEditReply = () => {
        setShowEditReply(true)
    }


    // GET REPLIES
// const [replies, setReplies] = useState(null)
// const getReplies = async () => {
//   const response = await fetch(url + 'reply/', {
//     method: "get",
//   })
//   const data = await response.json()
//   console.log(data)
//   setReplies(data)
// }

// // NEW REPLY
// const newReply = async (reply) => {
//   const response = await fetch(url + 'reply/', {
//     method: "post",
//     headers: {
//       Authorization: `Bearer ${token.access}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(reply)
//   })

//   getReplies()
// }

// //EDIT REPLIES
// const editReply = async (reply, reply_id) => {
//   const response = await fetch(url + 'reply/' + reply_id + '/', {
//     method: "put",
//     headers: {
//       Authorization: `Bearer ${localToken.access}`,
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(reply)
//   })

//   getReplies()
// }

// //DELETE REPLIES
// const deleteReply = async (reply_id) => {

//   const response = await fetch(url + 'reply/' + reply_id + '/', {
//     method: "delete",
//     headers: {
//       Authorization: `Bearer ${localToken.access}`,
//     },
//   })

//   getReplies()
// }


const convertToDate = (ms) => {
    const dateObj = new Date(ms)
    // console.log(dateObj)
    // console.log("HOURS: ", dateObj.getHours())


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


    // let myReplies = replies?.filter(reply => reply.comment === comment_id)
    // console.log(myReplies)

    // const mapReplies = () => {
    //     const mappedReplies = myReplies?.map((reply) => {

            const handleDelete = () => {
                deleteReply(reply.id)
            }

            // console.log(reply.author)

            // const handleUpdate = () => {
            //     editReply({})
            // }

            return (
                <div className="reply" key={`reply-${reply.id}`}>
                    {showEditReply ? <EditReply setShowEditReply={setShowEditReply} reply={reply} account={account} editReply={editReply}/> : 
                    <>
                    <div className="reply-top">
                        <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="reply-author" className="reply-author-img" />
                        <div className="comment-right">
                            <div className="comment-published">
                                <b><p className="no-margin">{reply.author.username}</p></b>
                                <p className="no-margin">{convertToDate(reply.created_at)}</p>
                            </div>
                            <p>{reply.content}</p>
                        </div>
                        </div>
                        <div className="flex-center">
                        <div className="reply-button">
                            <IconButton  size="small"><ThumbUpIcon /></IconButton>{reply.likes}
                        </div>
                        <div className="reply-button">
                            <IconButton  size="small"><ThumbDownIcon /></IconButton>{reply.dislikes}
                        </div>
                        <div className="reply-button">
                            <IconButton onClick={handleShowNewReply} size="small"><ChatBubbleIcon /></IconButton>Reply
                        </div>
                        { account && account.id === reply.author.id ?
                            <>
                                <div className="reply-button">
                                    <IconButton  size="small" onClick={setShowEditReply}><EditIcon /></IconButton>Edit
                                </div>
                                <div className="reply-button">
                                    <IconButton  size="small" onClick={handleDelete}><DeleteIcon /></IconButton>Delete
                                </div>
                            </>
                        : null}
                    </div>
                    </>
                    }
                </div>
            )
        // })

        // return mappedReplies
    // }

    // return (
    //     <>
    //         {showNewReply || replies && myReplies.length > 0 ? 
    //         <div className="replies-container">
    //             <div className="replies-line"></div>
    //             <div className="replies">
    //                 {/* <Reply />
    //                 <Reply /> */}
    //                 {mapReplies()} 
    //                 {/* <h5>New Reply</h5> */}
    //                 {showNewReply ? <NewReply token={token} setShowNewReply={setShowNewReply} comment_id={comment_id} newReply={newReply} account={account} /> : null}
    //             </div> 
    //         </div> : null}
    //     </>
    // )
}

export default Reply