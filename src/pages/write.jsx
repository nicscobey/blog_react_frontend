import { TextField } from "@mui/material"
import SelectTheme from "../components/selectTheme"
import TextArea from "../components/textarea"
import TextareaAutosize from "react-textarea-autosize"

const Write = () => {
    return (
        <div>
            {/* <h1>Write</h1> */}
            {/* banner */}
            <form className="flex-column blog-content">
                <TextField placeholder="Title" className="margin-ten new-blog-entry" />
                <TextField placeholder="Subtitle" className="margin-ten new-blog-entry"/>
                <SelectTheme className="margin-ten"/>
                {/* <div className="fill-width">
                    <TextArea />
                </div> */}
                <TextareaAutosize className="new-blog-text margin-ten " placeholder="Click here to write your post..."/>
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin">Publish</div>
                    <div className="empty-btn horizontal-margin">Save Draft</div>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Write