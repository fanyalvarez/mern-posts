import { Router } from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controllers.js'

const router = Router()

router.get("/",)
router.get("/posts", getPosts)
router.get("/post/:id", getPost)
router.post("/post", createPost)
router.put("/post", updatePost)
router.delete("/post", deletePost)

export default router