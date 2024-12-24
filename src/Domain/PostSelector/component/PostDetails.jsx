import React from 'react';

// Defining a functional component named PostDetails 
const PostDetails = ({ post }) => {
  return (
    // Return a card UI to display post details
    <div className="card text-dark bg-white shadow-lg">
      <div className="card-header text-center">
        {/* Dynamically display the title of the post */}
        <h5>{post.title}</h5> 
      </div>
      <div className="card-body">
        {/* Dynamically display the body/content of the post */}
        <p className="card-text">{post.body}</p> 
      </div>
    </div>
  );
};

// Export the PostDetails component so it can be used in other parts of the app
export default PostDetails;

