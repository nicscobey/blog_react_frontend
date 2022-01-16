const Header = () => {
    return (
        <div className="header">
            <h2 className="flex-center no-weight no-margin">App Name</h2>
            <div className="nav">
                <a href="/#top-posts" className="nav-link">Top Posts</a>
                <a href="/#all-articles" className="nav-link">All Posts</a>
                <h4 className="nav-link">Log In</h4>
                <a href="/blog" className="nav-link">Blog</a>
            </div>
        </div>
    )
}

export default Header