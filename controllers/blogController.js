const Post = require('../models/post');

exports.getPosts = (req, res) => {
    Post.findAll()
        .then(posts => {
            res.render('index', { posts });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getPost = (req, res) => {
    const postId = req.params.id;
    Post.findByPk(postId)
        .then(post => {
            if (!post) {
                return res.redirect('/');
            }
            res.render('post', { post });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.createPost = (req, res) => {
    const { title, content } = req.body;
    Post.create({ title, content })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.updatePost = (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;
    Post.findByPk(postId)
        .then(post => {
            if (!post) {
                return res.redirect('/');
            }
            post.title = title;
            post.content = content;
            return post.save();
        })
        .then(() => {
            res.redirect('/post/' + postId);
        })
        .catch(err => {
            console.log(err);
        });
};

exports.deletePost = (req, res) => {
    const postId = req.params.id;
    Post.findByPk(postId)
        .then(post => {
            if (!post) {
                return res.redirect('/');
            }
            return post.destroy();
        })
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};
