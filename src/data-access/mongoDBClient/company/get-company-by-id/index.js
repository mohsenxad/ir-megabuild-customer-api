const buildTranslateGetCompanyByIdResponse = require('./src/translate-get-company-by-id-response');
const buildCreateGetCompanyByIdOptions = require('./src/create-get-company-by-id-options');
const buildGetCompanyById = require('./src/get-company-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetCompanyByIdResponse = buildTranslateGetCompanyByIdResponse();

        const createGetCompanyByIdOptions = buildCreateGetCompanyByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getCompanyById = buildGetCompanyById(
            {
                getDb: getDb,
                createOptions: createGetCompanyByIdOptions,
                translateResponse: translateGetCompanyByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getCompanyById
            }
        );

        return servies;
    }