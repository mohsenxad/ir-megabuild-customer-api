const buildGetAllBlockByProjectId = require('./get-all-block-by-projectId');



module.exports = function
(
    {
        getAllBlockByProjectIdDB
    }
)
    {

        const getAllBlockByProjectId = buildGetAllBlockByProjectId(
            {
                getAllBlockByProjectIdDB: getAllBlockByProjectIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllBlockByProjectId
            }
        );

        return services;

    }