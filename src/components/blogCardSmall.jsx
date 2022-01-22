import { Link } from "react-router-dom"
import LoadingIcon from "./loadingIcon"

const BlogCardSmall = ({posts, target}) => {

    // console.log(hi)
    // console.log(posts)
    // theme border will likely need to be written in JS to make the color dynamic based on theme

    // {posts ? console.log(posts[0].created_at) : null}

    posts?.sort((a,b) => {
        // console.log('hi')
        return a.created_at - b.created_at
    })
    // const latestPosts = () => {
    //     const sortedPosts = posts.sort((a,b) => a.created_at > b.created_at ? 1 : -1)
    //     return sortedPosts()
    // }

    // console.log(posts)

    const getLatestPosts = () => {
        const latestPosts = []
        // console.log(posts)
        // console.log(posts.length)

        for (let i = 0; i < 3 && i < posts.length ; i++) {
            // console.log(i)
            latestPosts.push(posts[i])
            // console.log(latestPosts)
        }
        // console.log(latestPosts)
        return latestPosts
    }

    // console.log(getLatestPosts())

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
        <div className="flex-center">
            {/* <CreateCards />
            <CreateCards /> */}
            {posts ? CreateCards() : <LoadingIcon />}
        </div>
    )
}

export default BlogCardSmall