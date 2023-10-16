const buildTranslateGetAllProjectByCompanyIdResponse = require('./src/translate-get-all-project-by-companyId-response');
const buildCreateGetAllProjectByCompanyIdOptions = require('./src/create-get-all-project-by-companyId-options');
const buildGetAllProjectByCompanyId = require('./src/get-all-project-by-companyId');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllProjectByCompanyIdResponse = buildTranslateGetAllProjectByCompanyIdResponse();

        const createGetAllProjectByCompanyIdOptions = buildCreateGetAllProjectByCompanyIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllProjectByCompanyId = buildGetAllProjectByCompanyId(
            {
                getDb: getDb,
                createOptions: createGetAllProjectByCompanyIdOptions,
                translateResponse: translateGetAllProjectByCompanyIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllProjectByCompanyId
            }
        );

        return servies;
    }