import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"
import NewArticleButton from "../components/newArticleButton"
import { useEffect } from "react"
import { useHistory } from "react-router"


const Account = ({token, posts, account}) => {

    const history = useHistory()
    const localToken = JSON.parse(localStorage.getItem('token'))
    console.log(localToken)
    console.log(account)

    useEffect(() => {
        if (!token.access && !localToken) {
            history.push('/')
        }
    }, [])

    //sort to only user posts
    console.log(posts)
    console.log(token)
    posts?.filter(post => {
        post.author === localStorage.getItem("user").id
    })


    return (
        <div>
            {/* <h1>Account</h1> */}
            <div className="banner-three">My Account</div>
            <h3 className="flex-center no-margin add-padding" id="top-posts">My Drafts</h3>
            <BlogCardSmall posts={posts} target={"edit"}/>
            <AllArticles edit={true} posts={posts} header={"My Publications"} />
            <h3 className="flex-center no-margin add-padding" id="top-posts">Account Settings</h3>
            <NewArticleButton />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Account