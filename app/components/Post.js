import * as React from 'react';
import queryString from 'query-string';
import { fetchItem, fetchPosts, fetchComments } from '../utils/api';
import Loading from './Loading';
import PostMetaData from './PostMetaData';
import Title from './Title';
import Comment from './Comment';

class Post extends React.Component {
    state = {
        post: null,
        loadingPost: true,
        comments: null,
        loadingComments: true,
        error: null,
}

    componentDidMount() {
        const { id } = queryString.parse(this.props.location.search)
   
        fetchItem(id)
          .then((post) => {
            this.setState({ post, loadingPost: false })
   
            return fetchComments(post.kids || [])
          })
          .then((comments) => this.setState({
            comments,
            loadingComments: false
          }))
          .catch(({ message }) => this.setState({
            error: message,
            loadingPost: false,
            loadingComments: false
          }))
}
      render() {
        const { post, loadingPost, comments, loadingComments, error } = this.state
   
        if (error) {
          return <p className='center-text error'>{error}</p>
        }
   
        return (
          <>
            {loadingPost === true
              ? <Loading text='Fetching post' />
              : <>
                  <h1 className='header'>
                    <Title url={post.url} title={post.title} id={post.id} />
                  </h1>
                  <PostMetaData
                    by={post.by}
                    time={post.time}
                    id={post.id}
                    descendants={post.descendants}
                  />
                  <p dangerouslySetInnerHTML={{__html: post.text}} />
                </>}
            {loadingComments === true
              ? loadingPost === false && <Loading text='Fetching comments' />
              : <>
                  {this.state.comments.map((comment) =>
                    <Comment
                      key={comment.id}
                      comment={comment}
                    />
                  )}
                </>}
          </>
        )
    }
};

export default Post;