module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllFloorByBlockId } = require('./get-all-floor-by-block-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );


        const services = Object.freeze(
            {
                getAllFloorByBlockId
            }
        );

        return services;

    }