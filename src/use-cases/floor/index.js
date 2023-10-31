const buildGetAllFloorByBlockId = require('./get-all-floor-by-blockId');



module.exports = function
(
    {
        getAllFloorByBlockIdDB
    }
)
    {

        const getAllFloorByBlockId = buildGetAllFloorByBlockId(
            {
                getAllFloorByBlockIdDB: getAllFloorByBlockIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllFloorByBlockId
            }
        );

        return services;

    }