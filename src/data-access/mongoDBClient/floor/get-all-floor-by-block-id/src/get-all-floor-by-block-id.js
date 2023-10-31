module.exports = function buildGetAllFloorByBlockId
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
                throw new Error('buildGetAllFloorByBlockId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllFloorByBlockId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllFloorByBlockId must have translateResponse.');
            }

        const COLLECTION_NAME = 'floors';
        
        return async function getAllFloorByBlockId
        (
            {
                blockId
            }
        )
            {
                if
                (
                    !blockId
                )
                    {
                        throw new Error('getAllFloorByBlockId must have blockId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        blockId: blockId
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