import {TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextArea  from './textarea';
const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
  }));

const NewComment = () => {
    return (
        <div className="new-comment">
            <div className="comment-header">Add a Comment</div>
            <form className="new-comment-bottom">
                <TextArea />
                <div className="flex-center">
                    <div className="blue-btn horizontal-margin">Add Comment</div>
                    <div className="empty-btn horizontal-margin">Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default NewComment