import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helpers';
import { ThemeConsumer } from '../contexts/theme';

const PostMetaData = ({ by, time, id, descendants }) => {
    return (
        <ThemeConsumer>
            {({ theme }) => (
                <div className={`meta-info-${theme}`}>
                    <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
                    <span>on {formatDate(time)}</span>
                    {typeof descendants === 'number' && (
                        <span>
                            with <Link to={`/post?id=${id}`}>{descendants}</Link>
                            comments
                        </span>
                    )}
                </div>
            )}
        </ThemeConsumer>
    )
};

PostMetaData.propTypes = {
    time: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    descendants: PropTypes.number,
}

export default PostMetaData;