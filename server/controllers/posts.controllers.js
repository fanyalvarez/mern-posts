import Post from '../models/Post.js'

// req el user envia  y resp lo que la bd envia
export const getPosts = async (req, resp) => {
    try {
        const posts = await Post.find()
        resp.send(posts)
        console.log(posts)
    } catch (error) {
        throw console.error(error)
    }
}

export const getPost = async (req, resp) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post) return resp.sendStatus(404)
        console.log(post)
        return resp.send(post)
    } catch (error) {
        throw console.error(error)
    }
}

export const createPost = async (req, resp) => {
    try {
        // --crear post
        const { title, description } = req.body
        const newPost = new Post({ title, description })
        console.log(newPost)

        // --guardar post
        await newPost.save()
        return resp.json(newPost)
    } catch (error) {
        throw console.error(error)
    }
}

export const updatePost = async (req, resp) => {
    try {
        const postUpdated = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
        resp.send(postUpdated)
        console.log(postUpdated)
    } catch (error) {
        throw console.error(error)
    }
}

export const deletePost = async (req, resp) => {
    try {
        const postDeleted = await Post.findByIdAndDelete(req.params.id)
        if (!postDeleted) return resp.sendStatus(404)
        resp.sendStatus(204)
        console.log("postDeleted")
    } catch (error) {
        throw console.error(error)
    }
}