
import React, { useState } from 'react';
import PostDropdown from './component/PostDropdown';
import PostDetails from './component/PostDetails';
import { ERROR_MESSAGES } from '../../utils/constant'; // Importing error messages from constant.js
import useData from './hooks/useData'; // Import the custom hook

const PostSelector = () => {
  const { posts, selectedPost, error, fetchPostById } = useData(); // Using the custom hook
  const [isSubmitted, setIsSubmitted] = useState(false); // To handle submission
  const [errorMessage, setErrorMessage] = useState(''); // For form error handling

  const handleSubmit = () => {
    if (!selectedPost) {
      setErrorMessage(ERROR_MESSAGES.POST_NOT_SELECTED); // Show error if no post is selected
    } else {
      setErrorMessage('');
      setIsSubmitted(true); // Mark as submitted
    }
  };

  const handleClose = () => {
    setIsSubmitted(false); // Close the post details view
    setErrorMessage(''); // Reset error message
  };

  return (
    <div className="d-flex vw-90 vh-100 justify-content-center align-items-center">
      <div className="w-55 border shadow-lg px-5 pt-5 rounded primary-card-color">
        <h1 className="p-3 mb-4 text-center text-white">Select a Post</h1>

        <div className="mb-5">
          <PostDropdown
            posts={posts}
            onSelect={fetchPostById}
          />
        </div>

        {errorMessage && <div className="text-white text-center mb-3">{errorMessage}</div>}
        {error && <div className="text-danger text-center mb-3">{error}</div>} {/* API errors */}

        {/* Submit and Close buttons */}
        <div className="text-center mb-5">
          <button onClick={handleSubmit} className="btn btn-success mx-2">
            Submit
          </button>
          <button onClick={handleClose} className="btn btn-danger mx-2">
            Close
          </button>
        </div>

        {isSubmitted && selectedPost ? (
          <div className="mt-4 mb-5">
            <PostDetails post={selectedPost} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default PostSelector;
