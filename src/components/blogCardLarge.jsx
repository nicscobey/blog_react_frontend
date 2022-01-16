const BlogCardLarge = () => {

    // theme border will likely need to be written in JS to make the color dynamic based on theme

    const CreateCards = () => {
        return (
            <div className="blog-card-large">
                <img className="card-image-large" src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
                <div className="large-card-bottom">
                    <p className="theme-border large-card-text">Theme</p>
                    <b><p className="large-card-text">Name of the blog</p></b>
                    {/* <p className="theme-border large-card-text">Theme</p> */}
                    <p className="large-card-published">Firstname Lastname * ##/##/####</p>
                </div> 
            </div>
        )
    }

    return (
        <div className="flex-center">
            <CreateCards />
        </div>
    )
}

export default BlogCardLarge