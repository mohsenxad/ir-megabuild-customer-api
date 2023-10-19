const buildGetAllProjectByCompany = require('./get-all-project-by-company');
const buildGetProjectById = require('./get-project-by-id');

module.exports = function
(
    {
        getAllProjectByCompanyIdDB,
        getProjectByIdDB
    }
)
    {

        const getAllProjectByCompany = buildGetAllProjectByCompany(
            {
                getAllProjectByCompanyIdDB: getAllProjectByCompanyIdDB
            }
        );

        const getProjectById = buildGetProjectById(
            {
                getProjectByIdDB: getProjectByIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllProjectByCompany,
                getProjectById
            }
        );

        return services;

    }