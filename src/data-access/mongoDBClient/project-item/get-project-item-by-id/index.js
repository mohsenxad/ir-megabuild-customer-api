const buildTranslateGetProjectItemByIdResponse = require('./src/translate-get-project-item-by-id-response');
const buildCreateGetProjectItemByIdOptions = require('./src/create-get-project-item-by-id-options');
const buildGetProjectItemById = require('./src/get-project-item-by-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetProjectItemByIdResponse = buildTranslateGetProjectItemByIdResponse();

        const createGetProjectItemByIdOptions = buildCreateGetProjectItemByIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getProjectItemById = buildGetProjectItemById(
            {
                getDb: getDb,
                createOptions: createGetProjectItemByIdOptions,
                translateResponse: translateGetProjectItemByIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getProjectItemById
            }
        );

        return servies;
    }