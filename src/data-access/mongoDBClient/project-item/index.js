module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const { getProjectItemById } = require('./get-project-item-by-id')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                getProjectItemById
            }
        );

        return services;

    }