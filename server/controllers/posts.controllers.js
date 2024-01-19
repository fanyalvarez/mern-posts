

export const getPosts = (req, resp) => resp.send([])
 export const getPost = (req, resp) => resp.send("getting a post")
 export const createPost = (req, resp) => resp.send("New post create")
 export const updatePost = (req, resp) => resp.send("updating a post")
 export const deletePost = (req, resp) => resp.send("deleting post")