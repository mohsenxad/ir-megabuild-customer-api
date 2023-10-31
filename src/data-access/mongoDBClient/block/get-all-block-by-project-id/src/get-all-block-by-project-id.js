module.exports = function buildGetAllBlockByProjectId
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
                throw new Error('buildGetAllBlockByProjectId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllBlockByProjectId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllBlockByProjectId must have translateResponse.');
            }

        const COLLECTION_NAME = 'blocks';
        
        return async function getAllBlockByProjectId
        (
            {
                projectId
            }
        )
            {
                if
                (
                    !projectId
                )
                    {
                        throw new Error('getAllBlockByProjectId must have projectId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        projectId: projectId
                    }
                );

                const response = await collection.find(
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