import Comments from "../components/comments" 
import ScrollToTop from "../components/ScrollToTop"
import NewArticleButton from "../components/newArticleButton"
import { useParams } from "react-router"
import LoadingIcon from "../components/loadingIcon"


const Blog = ({posts, comments, getComments, editComment, deleteComment, newComment, url, account, token, refreshToken}) => {

    console.log(token)
    const showBlog = () => {
    // console.log(posts)
    
    const {id} = useParams()
    const post_id = parseInt(id)
    // console.log(id)
    const post = posts.find(post => post.id === post_id)
    console.log(post)
    //will likely need to make the banner in JS to make the background image dynamic 


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


    return (
        <div>
            <ScrollToTop />
            <NewArticleButton />
            <div className="banner">
                {post.banner !== "" ? <img className="banner-image" src={post.banner} alt="banner" />: null}
            </div>
            <div className="blog-content">
                <h1 className="flex-center">{post.title}</h1>
                <h2 className="flex-center">{post.subtitle}</h2>
                <h4 className="flex-center no-margin">{post.author.first_name} {post.author.last_name}</h4>
                <h4 className="flex-center no-weight no-margin">{convertToDate(post.created_at)}</h4>
                <p>{post.content}</p>
                <br />
                <hr />
                <br />
                <h3 className="flex-center">About the Author</h3>
                <div className="about-author">
                    <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" className="author-img" alt="author" />
                    <div className="author-bio no-margin">
                        <b><p>{post.author.first_name} {post.author.last_name}</p></b>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <br />
                <br />
                
                <Comments refreshToken={refreshToken} token={token} account={account} url={url} post_id={post_id} comments={comments} getComments={getComments} editComment={editComment} deleteComment={deleteComment} newComment={newComment} />
            </div>
        </div>
    )
    }

    const loadingData = () => {
        return (
            <div>
                <div>
                    <div className="blank-banner"></div>
                    <ScrollToTop />
                    <LoadingIcon />
                    <br />
                    <br /> 
                    <br />
                </div>
            </div>
        )
    }

    return (
        <>
            {posts ? showBlog() : loadingData()}
        </>
    )
}

export default Blog