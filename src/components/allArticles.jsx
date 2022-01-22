import BlogCardLarge from "./blogCardLarge"
import LoadingIcon from "./loadingIcon"

const AllArticles = ({header, posts, edit = false, handleOpen, deletePost}) => {

    // console.log(posts)

    const mapArticles = () => {

        // console.log(posts)
        const allPosts = posts.map((post) => {
            return <BlogCardLarge key={`large-card-${post.id}`}deletePost={deletePost} handleOpen={handleOpen} edit={edit} post={post}/>
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
                {posts ? mapArticles(): <LoadingIcon />}
            </div>
        </div>
    )
}

export default AllArticles