// Importing necessary React hooks and components
import React, { useEffect, useState } from 'react';
import PostDropdown from './PostDropdown'; 
import PostDetails from './PostDetails'; 
import api from '../../interceptor'; 

// Defining the PostSelectorPage functional component
const PostSelectorPage = () => {
  // Defining the states 
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  // useEffect hook to fetch the list of posts when the component comes on screen
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Sending a GET request to the API to fetch posts
        const response = await api.get('/posts');
        setPosts(response.data); // Updating the posts state with the response data
      } catch (error) {
        console.error('Error fetching posts:', error); // Logging an error if the request fails
      }
    };
    fetchPosts(); // Calling the function to fetch postss
  }, []); 

  // Function to fetch a single post by ID
  const fetchPostById = async (postId) => {
    if (postId === "") {
      setSelectedPost(null); // If no post is selected, clear the selected post
      return;
    }
    try {
      // Sending a GET request to fetch a post by its ID
      const response = await api.get(`/posts/${postId}`);
      setSelectedPost(response.data);   // Updating the selectedPost state with the fetched post
    } catch (error) {
      console.error('Error fetching post:', error);  // Logging an error if the request fails
    }
  };

  return (
    // A container div that centers the content vertically and horizontally
    <div className="d-flex vw-90 vh-100 justify-content-center align-items-center">
      <div className="w-55 border shadow-lg px-5 pt-5 rounded primary-card-color">
        <h1 className="p-3 mb-4 text-center text-white">Select a Post</h1>

        {/* Dropdown for selecting a post */}
        <div className="mb-5">
          <PostDropdown posts={posts} onSelect={fetchPostById} /> {/* Pass posts and onSelect function to dropdown */}
        </div>

        {/* Conditionally display the post details if a post is selected */}
        {selectedPost ? (
          <div className="mt-4 mb-5">
            {/* Displaying the selected post's details */}
            <PostDetails post={selectedPost} /> 
          </div>
        ) : (
          // Showing a message if no post is selected
          <div className="text-center text-white mt-4">
            <p>Please select a post from the dropdown to view details.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the PostSelectorPage component for use in other parts of the app
export default PostSelectorPage;
