import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"
import NewArticleButton from "../components/newArticleButton"
import { Link } from "react-router-dom"

const Home = ({posts, token}) => {
    const localToken = JSON.parse(localStorage.getItem('token'))

    console.log(token)
    console.log(localToken)
    console.log(posts)

    return (
        <div>
            <div className="banner">Greetings</div>
            {token !== "" || localToken ? <div className="cta add-padding flex-center">
                <Link to="/new" className="color-black"><h3 className="no-margin">Start a new post</h3></Link>
            </div> : <div className="cta add-padding flex-center">
                <h3 className="no-margin">Want to write a post? Log in or Sign up!</h3> 
            </div> }


            <h3 className="flex-center no-margin add-padding" id="top-posts">Latest Posts</h3>
            <BlogCardSmall posts={posts} target="blog" />
            <AllArticles posts={posts} header={"All Articles"}/>
            <NewArticleButton />
        </div>
    )
}

export default Home