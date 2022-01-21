import BlogCardLarge from "./blogCardLarge"

const AllArticles = ({header, posts, edit = false, handleOpen, deletePost}) => {

    // console.log(posts)

    const mapArticles = () => {

        // console.log(posts)
        const allPosts = posts.map((post) => {
            return <BlogCardLarge deletePost={deletePost} handleOpen={handleOpen} edit={edit} post={post}/>
        })

        return allPosts
    }

    return (
        <div className="gray-bg all-cards" id="all-articles">
            <h3 className="flex-center no-margin add-padding">{header}</h3>
            <div className="flex-center flex-wrap">
                {/* <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge />
                <BlogCardLarge /> */}
                {posts ? mapArticles(): null}
            </div>
        </div>
    )
}

export default AllArticles