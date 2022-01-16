import BlogCardLarge from "./blogCardLarge"

const AllArticles = () => {
    return (
        <div className="gray-bg all-cards">
            <h3 className="flex-center no-margin add-padding">All Posts</h3>
            <div className="flex-center flex-wrap">
                <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge />
            </div>
            
        </div>
    )
}

export default AllArticles