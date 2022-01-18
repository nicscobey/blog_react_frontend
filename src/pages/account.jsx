import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"
import NewArticleButton from "../components/newArticleButton"


const Account = () => {
    return (
        <div>
            {/* <h1>Account</h1> */}
            <div className="banner-three">My Account</div>
            <h3 className="flex-center no-margin add-padding" id="top-posts">My Drafts</h3>
            <BlogCardSmall />
            <AllArticles header={"My Publications"} />
            <h3 className="flex-center no-margin add-padding" id="top-posts">Account Settings</h3>
            <NewArticleButton />
            <br />
            <br />
            <br />
        </div>
    )
}

export default Account