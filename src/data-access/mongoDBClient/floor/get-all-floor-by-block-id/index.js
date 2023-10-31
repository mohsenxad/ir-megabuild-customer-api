const buildTranslateGetAllFloorByBlockIdResponse = require('./src/translate-get-all-floor-by-block-id-response');
const buildCreateGetAllFloorByBlockIdOptions = require('./src/create-get-all-floor-by-block-id-options');
const buildGetAllFloorByBlockId = require('./src/get-all-floor-by-block-id');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateGetAllFloorByBlockIdResponse = buildTranslateGetAllFloorByBlockIdResponse();

        const createGetAllFloorByBlockIdOptions = buildCreateGetAllFloorByBlockIdOptions(
            {
                ObjectId: ObjectId
            }
        );

        const getAllFloorByBlockId = buildGetAllFloorByBlockId(
            {
                getDb: getDb,
                createOptions: createGetAllFloorByBlockIdOptions,
                translateResponse: translateGetAllFloorByBlockIdResponse
            }
        );

        const servies = Object.freeze(
            {
                getAllFloorByBlockId
            }
        );

        return servies;
    }