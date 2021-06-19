import * as React from 'react';
import PostMetaData from './PostMetaData';
import Title from './Title';

const PostsList = ({ posts }) => {
    if (posts.length === 0) {
      return (
        <p className='center-text'>
          This user hasn't posted yet
        </p>
    )
}
 
    return (
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id} className='post'>
              <Title url={post.url} title={post.title} id={post.id} />
              <PostMetaData
                by={post.by}
                time={post.time}
                id={post.id}
                descendants={post.descendants}
              />
            </li>
          )
        })}
      </ul>
    )
};

  export default PostsList;