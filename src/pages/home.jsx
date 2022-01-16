import BlogCardSmall from "../components/blogCardSmall"
import AllArticles from "../components/allArticles"

const Home = () => {
    return (
        <div>
            <div className="banner">Greetings</div>
            <h3 className="flex-center no-margin add-padding">Latest Posts</h3>
            <BlogCardSmall />
            <AllArticles />
        </div>
    )
}

export default Home