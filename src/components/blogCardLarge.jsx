import {Link} from 'react-router-dom '
import { useState } from 'react';
import Confirm from "../components/confirmModal"


const BlogCardLarge = ({post, edit = false, deletePost}) => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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

        return `${dateObj.getMonth()+1}/${dateObj.getDate()}/${dateObj.getFullYear()}`
    }

    // console.log(edit)
    // console.log(handleOpen)
    // theme border will likely need to be written in JS to make the color dynamic based on theme
    if(post){
    // console.log(post)
    const {id, title, subtitle, content, theme} = post

       

    // console.log(id, title, subtitle, content, theme)
    const CreateCard = () => {

        const handleDelete = () => {
            // console.log(id)
            deletePost(id)
        }



        return (
                <div key={`large-card-${id}`} className="blog-card-large">
                    <Link to={`/blog/${id}`} className="color-black">
                        <img className="card-image-large" src={post.banner !== "" ? post.banner : "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt=""/>
                    </Link>
                    <div className="large-card-bottom">
                        <Link to={`/blog/${id}`} className="color-black flex-column">
                            {/* <p className={`large-card-text theme-border ${theme}-border`}>{theme}</p> */}
                            <b><p className="large-card-text">{title}</p></b>
                            {/* <p className="theme-border large-card-text">Theme</p> */}
                            <p className="large-card-published">{post.author.first_name} {post.author.last_name} &#8226; {convertToDate(post.created_at)}</p>
                            {/* <div className="flex-center"> */}
                            <p className={`large-card-text theme-border ${theme}-border`}>{theme}</p>
                            {/* </div> */}
                            
                        </Link>
                        {edit ? 
                        <>
                            <Link to={`/edit/${id}`}><div className="empty-btn horizontal-margin flex-center margin-ten">Edit</div></Link>
                            <div onClick={handleOpen} className="empty-btn horizontal-margin flex-center margin-ten">Delete</div>
                        </>
                         : null}
                    </div> 
                    {open ? <Confirm blog_id={id} open={open} handleClose={handleClose} deletePost={handleDelete} /> : null}
                </div>
            
        )
    }
    return (
        <div className="flex-center">
            <CreateCard />
        </div>
    )

    }
    // const CreateCards = () => {
    //     return (
    //             <div className="blog-card-large">
    //                 <Link to="/blog" className="color-black">
    //                 <img className="card-image-large" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
    //                 <div className="large-card-bottom">
    //                     <p className="theme-border large-card-text">Theme</p>
    //                     <b><p className="large-card-text">Name of the blog</p></b>
    //                     {/* <p className="theme-border large-card-text">Theme</p> */}
    //                     <p className="large-card-published">Firstname Lastname 	&#8226; ##/##/####</p>
    //                 </div> 
    //                 </Link>
    //             </div>
            
    //     )
    // }

    // return (
    //     <div className="flex-center">
    //         <CreateCards />
    //     </div>
    // )
    return null

}

export default BlogCardLarge