import { Link } from "react-router-dom"
import LoadingIcon from "./loadingIcon"

const BlogCardSmall = ({posts, target}) => {

    const sortPosts = ( a, b ) => {
        if ( a.created_at > b.created_at){
            return -1;
        }
        if ( a.created_at < b.created_at){
            return 1;
        }
        return 0;
    }

    const getLatestPosts = () => {

        const sortedPosts = posts.sort(sortPosts)

        const latestPosts = []

        for (let i = 0; i < 3 && i < sortedPosts.length ; i++) {
            latestPosts.push(sortedPosts[i])
        }
        return latestPosts
    }

    const CreateCards = () => {

        const smallCards = getLatestPosts().map((post) => {
            return (
                <div key={`small-card-${post.id}`} className="blog-card-small">
                    <Link to={`/${target}/${post.id}`}><img className="card-image-small" src={post.banner !== "" ? post.banner : "https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"} alt=""/></Link>
                    <Link to={`/${target}/${post.id}`} className="color-black"><b><p className="small-card-text">{post.title}</p></b></Link>
                    <p className={`theme-border small-card-text ${post.theme}-border`}>{post.theme}</p>
                </div>
            )
        })

        return smallCards
        
        // return (
        //     <div className="blog-card-small">
        //         <Link to={target}><img className="card-image-small" src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/></Link>
        //         <Link to={target} className="color-black"><b><p className="small-card-text">Name of the blog</p></b></Link>
        //         <p className="theme-border small-card-text">Theme</p>
        //     </div>
        // )
    }

    return (
        <div className="flex-center flex-wrap">
            {/* <CreateCards />
            <CreateCards /> */}
            {posts ? CreateCards() : <LoadingIcon />}
        </div>
    )
}

export default BlogCardSmall