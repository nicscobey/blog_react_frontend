import { TextField } from "@mui/material"
import SelectTheme from "../components/selectTheme"
import TextArea from "../components/textarea"
import TextareaAutosize from "react-textarea-autosize"
import ScrollToTop from "../components/ScrollToTop"
import { useState } from "react"
import $ from 'jquery';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material"

// const Write = ({newPost, account}) => {
const Write = ({newPost, account, title, subtitle, content, theme}) => {

    const [bannerHover, setBannerHover] = useState(false)
    const [post, setPost] = useState({
        title: title,
        subtitle: subtitle,
        content: content,
        theme: theme,
        author: null
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
        newPost.author = account.id
        setPost(newPost) 
        console.log(newPost)
    }

    const handlePublish = () => {
        console.log(account.id)
        console.log(post)
        newPost(post)
    }

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
                    <div className="empty-btn horizontal-margin">Save Draft</div>
                    <div className="empty-btn horizontal-margin">Cancel Draft</div>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Write