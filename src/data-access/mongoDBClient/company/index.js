module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllCompany } = require('./get-all-company')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        

        const { getCompanyById } = require('./get-company-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const services = Object.freeze(
            {
                getAllCompany,
                getCompanyById
            }
        );

        return services;

    }