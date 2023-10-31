const buildTranslateGetAllBlockByProjectIdResponse = require('./src/translate-get-all-block-by-project-id-response');
const buildCreateGetAllBlockByProjectIdOptions = require('./src/create-get-all-block-by-project-id-options');
const buildGetAllBlockByProjectId = require('./src/get-all-block-by-project-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllBlockByProjectIdResponse = buildTranslateGetAllBlockByProjectIdResponse();

        const createGetAllBlockByProjectIdOptions = buildCreateGetAllBlockByProjectIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllBlockByProjectId = buildGetAllBlockByProjectId(
            {
                getDb: getDb,
                createOptions: createGetAllBlockByProjectIdOptions,
                translateResponse: translateGetAllBlockByProjectIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllBlockByProjectId
            }
        );

        return servies;
    }