// useData.js
import { useState, useEffect } from 'react';
import api from '../../../services/interceptor'; // Adjust the path if needed

const useData = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setError('Failed to load posts'); // You can update this based on your needs
      }
    };
    fetchPosts();
  }, []);

  const fetchPostById = async (postId) => {
    if (postId === '') {
      setSelectedPost(null);
      return;
    }
    try {
      const response = await api.get(`/posts/${postId}`);
      setSelectedPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
      setError('Failed to load post details');
    }
  };

  return { posts, selectedPost, error, fetchPostById };
};

export default useData;
