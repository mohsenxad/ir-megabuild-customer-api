module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllProject } = require('./get-all-project')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getProjectById } = require('./get-project-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        )

        const services = Object.freeze(
            {
                getAllProject,
                getProjectById
            }
        );

        return services;

    }