const express = require('express');
const { getPosts, getPost, createPost, updatePost, deletePost } = require('../controllers/blogController');

const router = express.Router();

router.get('/', getPosts);
router.get('/post/:id', getPost);
router.post('/add-post', createPost);
router.post('/edit-post/:id', updatePost);
router.post('/delete-post/:id', deletePost);

module.exports = router;
