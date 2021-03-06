import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"
import NewArticleButton from "../components/newArticleButton"
import { Link } from "react-router-dom"
import LoadingIcon from "../components/loadingIcon"

const Home = ({posts, token, handleOpen, handleOpenSignup, refreshToken, getPosts}) => {
    const localToken = JSON.parse(localStorage.getItem('token'))

    console.log(token)
    console.log(localToken)
    // console.log(posts)

    return (
        <div>
            <div className="banner"><br /><br />Technical & Career Blog</div>
            {token !== "" || localToken ? <div className="cta add-padding flex-center">
                <Link to="/new" className="color-black"><h3 className="no-margin"><div className="blue-btn no-weight">Start a new post</div></h3></Link>
            </div> : <div className="cta add-padding flex-center">
                <h3 className="no-margin">Want to write a post? <div className="blue-btn no-padding flex-center no-weight" onClick={handleOpen}>Log in</div> or <div className="blue-btn no-padding flex-center no-weight" onClick={handleOpenSignup} >Sign up</div></h3> 
            </div> }

            {/* <button onClick={refreshToken}>PUSH ME!</button> */}
            <h3 className="flex-center no-margin add-padding" id="top-posts">Latest Posts</h3>
            {/* <LoadingIcon /> */}
            {/* <div className="flex-center"> */}
                <BlogCardSmall posts={posts} target="blog" />
            {/* </div> */}
            <AllArticles posts={posts} getPosts={getPosts} header={"All Articles"}/>
            {token !== "" || localToken ? <NewArticleButton />  : null}
        </div>
    )
}

export default Home