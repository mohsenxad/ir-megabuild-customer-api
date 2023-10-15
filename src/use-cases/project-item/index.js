const buildGetProjectItemById = require('./get-project-item-by-id');

module.exports = function
(
    {
        getProjectItemByIdDB
    }
)
    {

        const getProjectItemById = buildGetProjectItemById(
            {
                getProjectItemByIdDB: getProjectItemByIdDB
            }
        );

        const services = Object.freeze(
            {
                getProjectItemById
            }
        );

        return services;

    }