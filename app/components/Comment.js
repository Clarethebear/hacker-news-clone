import * as React from 'react';
import PostMetaData from './PostMetaData';

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <PostMetaData
                comment={true}
                by={comment.by}
                time={comment.time}
                id={comment.id}
             />
            <p dangerouslySetInnerHTML={{__html: comment.text}} />
        </div>
    )
};

export default Comment;