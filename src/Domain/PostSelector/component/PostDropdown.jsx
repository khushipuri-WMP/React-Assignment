import React from 'react';

// Define a functional component named PostDropdown
const PostDropdown = ({ posts, onSelect }) => {
  return (
    // Rendering a dropdown for the list of posts
    <select
      onChange={(e) => onSelect(e.target.value)}    // Calling the onSelect function when an option is selected
      className="form-select"   
    >
      <option value="">Select a Post</option>
      
      {/* Maping through the posts array and creating an option for each post */}
      {posts.map((post) => (
        <option key={post.id} value={post.id}> 
        {/* Display the post title as the option text */}
          {post.title} 
        </option>
      ))}
    </select>
  );
};

// Exporting the PostDropdown component so it can be used in other parts of the app
export default PostDropdown;
