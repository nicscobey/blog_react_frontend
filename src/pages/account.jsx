import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"
import NewArticleButton from "../components/newArticleButton"
import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import ScrollToTop from "../components/ScrollToTop"


const Account = ({token, posts, account, deletePost}) => {

    const history = useHistory()
    const localToken = JSON.parse(localStorage.getItem('token'))
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);


    // console.log(localToken)
    // console.log(account)

    useEffect(() => {
        if (!token.access && !localToken) {
            history.push('/')
        }
    }, [])
    

    //sort to only user posts
    // console.log(posts)
    // console.log(token)

    const author_id = JSON.parse(localStorage.getItem("user")).id
    console.log(author_id)
    const myPosts = posts?.filter(post => 
        
        // console.log(post)
        // console.log(post.author)
        // console.log(post.author === author_id)
        post.author === author_id
    )

    console.log(myPosts)

    const draftPosts = []
    const publishedPosts = []
    // const filterPosts = () => {

    // }


    myPosts?.forEach(post => {
        if (post.published) {
            publishedPosts.push(post)
        }
        else {
            draftPosts.push(post)
        }
    })
    

    // console.log('OPEN ', open)

    return (
        <div>
            {/* <h1>Account</h1> */}
            <ScrollToTop />
            <div className="banner-three">My Account</div>
            <div className="cta add-padding flex-center"><Link to="/new" className="color-black"><h3 className="no-margin"><div className="blue-btn no-weight">Start a new post</div></h3></Link></div>
            <h3 className="flex-center no-margin add-padding" id="top-posts">My Drafts</h3>
            <BlogCardSmall posts={draftPosts} target={"edit"}/>
            <AllArticles deletePost={deletePost} edit={true} posts={publishedPosts} header={"My Publications"} />
            <h3 className="flex-center no-margin add-padding" id="top-posts">Account Settings</h3>
            <NewArticleButton />
            <br />
            <br />
            <br />
            {/* {open ? <Confirm  open={open} handleClose={handleClose} deletePost={deletePost} /> : null} */}
        </div>
    )
}

export default Account