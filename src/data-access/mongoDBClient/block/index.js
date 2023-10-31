module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllBlockByProjectId } = require('./get-all-block-by-project-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );


        const services = Object.freeze(
            {
                getAllBlockByProjectId
            }
        );

        return services;

    }