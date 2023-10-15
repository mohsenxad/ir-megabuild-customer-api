module.exports = function buildGetProjectItemById
(
    {
        getDb,
        createOptions,
        translateResponse
    }
)
    {
        if
        (
            !getDb
        )
            {
                throw new Error('buildGetProjectItemById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetProjectItemById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetProjectItemById must have translateResponse.');
            }

        const COLLECTION_NAME = 'projectItemsFullDetail';

        return async function getProjectItemById
        (
            {
                projectItemId
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectItemId: projectItemId
                    }
                );

                const response = await collection.findOne(
                    options.filter
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }