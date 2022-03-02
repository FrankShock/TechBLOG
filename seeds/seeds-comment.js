const { Comment } = require('../models');
const sequelize = require('../Conf/connection')
const commentdata = [
    {
        comment_text: 'Video games are a difficult process and will take a lot of time.',
        user_id: 3,
        blog_id: 1
    },
    {
        comment_text: 'Ooo, Youre a writer! Thats amazing, take  your time and create something great!',
        user_id: 4,
        blog_id: 2
    },
    {
        comment_text: 'The video game industry is tough Good luck!',
        user_id: 2,
        blog_id: 1
    },
    {
        comment_text: 'I be your cooking will stink',
        user_id: 1,
        blog_id: 3
    },
    {
        comment_text: 'I love to cook just not very good at it yet.',
        user_id: 2,
        blog_id: 3
    }
];
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;