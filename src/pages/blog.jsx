import Comments from "../components/comments" 
import ScrollToTop from "../components/ScrollToTop"
import NewArticleButton from "../components/newArticleButton"
import { useParams } from "react-router"

const Blog = ({posts, comments, getComments, editComment, deleteComment, newComment}) => {
    console.log(posts)
    
    const {id} = useParams()
    const post_id = parseInt(id)
    console.log(id)
    const post = posts.find(post => post.id === post_id)
    console.log(post)
    //will likely need to make the banner in JS to make the background image dynamic 

    return (
        <div>
            <ScrollToTop />
            <NewArticleButton />
            <div className="banner"></div>
            <div className="blog-content">
                <h1 className="flex-center">{post.title}</h1>
                <h3 className="flex-center">{post.subtitle}</h3>
                <h5 className="flex-center no-margin">Firstname Lastname</h5>
                <h5 className="flex-center no-weight no-margin">Month ##, ####</h5>
                <p>{post.content}</p>
                <br />
                <hr />
                <br />
                <h3 className="flex-center">About the Author</h3>
                <div className="about-author">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" className="author-img" alt="author" />
                    <p className="author-bio no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <br />
                <br />
                
                <Comments comments={comments} getComments={getComments} editComment={editComment} deleteComment={deleteComment} newComment={newComment} />
            </div>
        </div>
    )
}

export default Blog