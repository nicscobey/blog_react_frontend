import { Link } from "react-router-dom"

const BlogCardSmall = () => {

    // theme border will likely need to be written in JS to make the color dynamic based on theme

    const CreateCards = () => {
        return (
            <div className="blog-card-small">
                <Link to="/blog"><img className="card-image-small" src="https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/></Link>
                <Link to="/blog" className="color-black"><b><p className="small-card-text">Name of the blog</p></b></Link>
                <p className="theme-border small-card-text">Theme</p>
            </div>
        )
    }

    return (
        <div className="flex-center">
            <CreateCards />
            <CreateCards />
        </div>
    )
}

export default BlogCardSmall