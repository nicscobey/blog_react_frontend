import { TextField } from "@mui/material"
import SelectTheme from "../components/selectTheme"
import TextArea from "../components/textarea"
import TextareaAutosize from "react-textarea-autosize"
import ScrollToTop from "../components/ScrollToTop"
import { useState, useEffect } from "react"
import $ from 'jquery';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material"
import { useParams, useHistory } from "react-router"
import { compose } from "@mui/system"

// const Write = ({newPost, account}) => {
const Edit = ({editPost, posts, account}) => {

    const history = useHistory()
    
    const loadedData = () => {

    const {id} = useParams()
    const post_id = parseInt(id)
    // console.log(localStorage.user)
    const myPost = posts.find(post => post.id === post_id)
    console.log(myPost)
    const {theme, subtitle, title, content} = myPost

    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)

    const [bannerHover, setBannerHover] = useState(false)
    const [post, setPost] = useState({
        title: myPost.title,
        subtitle: myPost.subtitle,
        content: myPost.content,
        theme: myPost.theme,
        author: user.id,
        published: true
    })
    // const [post, setPost] = useState({
    //     title: "",
    //     subtitle: "",
    //     content: "",
    //     theme: "",
    //     author: null
    // })
    
    

    const showBannerIcon = () => {setBannerHover(true)}
    const hideBannerIcon = () => {setBannerHover(false)}
    const uploadBanner = () => {console.log('hi')}
    const handleChange = (event) => {
        const newPost = {...post}
        newPost[event.target.name] = event.target.value
        // newPost.author = account.id
        setPost(newPost) 
        console.log(newPost)
    }

    const handlePublish = () => {
        console.log(user.id)
        console.log(post)
        editPost(post, post_id)
        history.push('/my')
    }

    // if (posts) {
        // console.log(editPost, account, title, subtitle, content, theme)
        console.log(posts)
        console.log(post_id)
        console.log(user)
        // const post = posts.find(post => post.id === post_id)
        // console.log(post)
        // const {theme, subtitle, title, content} = post
        // setPost({title: title, theme: theme, subtitle: subtitle, content: content, author: user.id})
    // }
    // useEffect(() => {setPost({title: title, theme: theme, subtitle: subtitle, content: content, author: user.id})}, [])

    return (
        <div>
            <ScrollToTop />
            <div onClick={uploadBanner} onMouseEnter={showBannerIcon} onMouseLeave={hideBannerIcon} id="new-post-banner">Click here to select a cover image...{bannerHover ? <IconButton aria-label="delete" id="banner-icon">
        <EditIcon />
        </IconButton> : null}</div>
            <form className="flex-column blog-content">
                <TextareaAutosize onChange={handleChange} value={post.title} placeholder="Click here to add a title..." className="new-post new-post-title" name="title" />
                <TextareaAutosize onChange={handleChange} value={post.subtitle}  name="subtitle" placeholder="Click here to add a subtitle..." className="new-post new-post-subtitle" />
                <h5 className="flex-center no-margin">Firstname Lastname</h5>
                <h5 className="flex-center no-weight no-margin">Month ##, ####</h5>
                <TextareaAutosize onChange={handleChange} value={post.content}  placeholder="Click here to add the content of your post..." className="new-post-text" name="content" />
                <SelectTheme post={post} handleChange={handleChange} className="margin-ten"/>
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handlePublish}>Publish</div>
                    {/* <div className="empty-btn horizontal-margin">Save Draft</div> */}
                    <div className="empty-btn horizontal-margin">Cancel Changes</div>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    )
    }

    const noData = () => {
        return (<h1>no data!</h1>)
    }

    return (
        <div>
            {posts ? loadedData() : noData()}
        </div>
    )
}

export default Edit