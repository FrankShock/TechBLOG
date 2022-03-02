const { Blog } = require('../models');
const sequelize = require('../Conf/connection')
const blogdata = [
    {
        title: 'Building a Video game',
        blog_content: 'I love designing video games. But its hard to find the time to work on them.',
    },
    {
        title: 'Writing a book',
        blog_content: 'Im going to be working on writing a book once my class is done.',
    },
    {
        title: 'Cooking is Fun',
        blog_content: 'This week I am going to cook turkey sandwich. But Ill probably only eat one serving.',
    },
];
const seedBlogs = () => Blog.bulkCreate(blogdata);

module.exports = seedBlogs;