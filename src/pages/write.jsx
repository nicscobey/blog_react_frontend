import { TextField } from "@mui/material"
import SelectTheme from "../components/selectTheme"
import TextArea from "../components/textarea"
import TextareaAutosize from "react-textarea-autosize"
import ScrollToTop from "../components/ScrollToTop"
import { useState, useEffect } from "react"
import $ from 'jquery';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material"
import { useHistory } from "react-router"
import BannerModal from "../components/bannerModal"

// const Write = ({newPost, account}) => {
const Write = ({newPost, account, title, subtitle, content, theme, banner, token}) => {
    const history = useHistory()
    const localToken = JSON.parse(localStorage.getItem('token'))
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(account)

    const [bannerHover, setBannerHover] = useState(false)
    const [post, setPost] = useState({
        title: title,
        subtitle: subtitle,
        content: content,
        theme: theme,
        author: null,
        published: true,
        banner: banner
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
    
    const uploadBanner = () => {
        console.log('hi')
        handleOpen(true)
    }

    const handleChange = (event) => {
        const newPost = {...post}
        newPost[event.target.name] = event.target.value
        newPost.author = account.id
        setPost(newPost) 
        console.log(newPost)
    }

    const handlePublish = () => {
        if (post.title === "" || post.subtitle === "" || post.content === "" || post.theme === "" || post.banner === "") {
            alert("Please make sure that your post includes a banner image, title, subtitle, content, and a theme.")
        }
        else {
            console.log(account.id)
            console.log(post)
            newPost(post)
            history.push('/')
        }
    }

    const handleSave = () => {
        const draftPost = {...post}
        draftPost.published = false
        console.log(account.id)
        console.log(draftPost)
        newPost(draftPost)
        history.push('/')
    }

    useEffect(() => {
        if (!token.access && !localToken) {
            history.push('/')
        }
    }, [])

    return (
        <div>
            <ScrollToTop />
            <BannerModal post={post} setPost={setPost} open={open} handleClose={handleClose} handleChange={handleChange} />


            {post.banner === "" ? <div onClick={uploadBanner} onMouseEnter={showBannerIcon} onMouseLeave={hideBannerIcon} className="new-post-banner">Click here to select a cover image...{bannerHover ? <IconButton aria-label="delete" id="banner-icon">
        <EditIcon />
        </IconButton> : null}</div> : 
        
        <div className="banner new-post-banner" onClick={uploadBanner} onMouseEnter={showBannerIcon} onMouseLeave={hideBannerIcon}>
                <img className="banner-image" src={post.banner} alt="banner" />{bannerHover ? <IconButton aria-label="delete" id="banner-icon">
        <EditIcon />
        </IconButton> : null}
            </div>

        }
            



            <form className="flex-column blog-content">
                <TextareaAutosize onChange={handleChange} value={post.title} placeholder="Click here to add a title..." className="new-post new-post-title" name="title" />
                <TextareaAutosize onChange={handleChange} value={post.subtitle}  name="subtitle" placeholder="Click here to add a subtitle..." className="new-post new-post-subtitle" />
                {/* <h5 className="flex-center no-margin">Firstname Lastname</h5> */}
                {/* <h5 className="flex-center no-weight no-margin">Month ##, ####</h5> */}
                <TextareaAutosize onChange={handleChange} value={post.content}  placeholder="Click here to add the content of your post..." className="new-post-text" name="content" />
                <SelectTheme post={post} handleChange={handleChange} className="margin-ten"/>
                <br />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin" onClick={handlePublish}>Publish</div>
                    <div className="empty-btn horizontal-margin"  onClick={handleSave}>Save Draft</div>
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