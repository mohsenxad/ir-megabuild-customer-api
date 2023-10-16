const buildGetCompanyById = require('./get-company-by-id');

module.exports = function
(
    {
        getCompanyByIdDB
    }
)
    {

        const getCompanyById = buildGetCompanyById(
            {
                getCompanyByIdDB: getCompanyByIdDB
            }
        );

        const services = Object.freeze(
            {
                getCompanyById
            }
        );

        return services;

    }