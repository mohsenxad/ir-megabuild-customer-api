const buildGetAllProjectByCompany = require('./get-all-project-by-company');

module.exports = function
(
    {
        getAllProjectByCompanyIdDB
    }
)
    {

        const getAllProjectByCompany = buildGetAllProjectByCompany(
            {
                getAllProjectByCompanyIdDB: getAllProjectByCompanyIdDB
            }
        );

        const services = Object.freeze(
            {
                getAllProjectByCompany
            }
        );

        return services;

    }