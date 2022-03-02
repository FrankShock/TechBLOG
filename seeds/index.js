const seedUsers = require('./seeds-user');
const seedBlogs = require('./seeds-blog');
const seedComments = require('./seeds-comment');
const seedVotes = require('./seeds-vote');
const sequelize = require('../Conf/connection')


const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedBlogs();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    await seedVotes();
    console.log('--------------');

    process.exit(0);
};

seedAll();