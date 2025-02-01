//here we wil create a function that will write into our sql table. and we need other files to be able to access this one
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        // all table structures in the post sql table
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    
    return Posts
};