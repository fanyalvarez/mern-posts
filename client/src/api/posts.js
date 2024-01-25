import axios from 'axios'

export const getPostsRequest = async () => axios.get(`http://localhost:4000/posts`)