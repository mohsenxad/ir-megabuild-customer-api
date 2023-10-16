module.exports = function buildGetAllProjectByCompanyId
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
                throw new Error('buildGetAllProjectByCompanyId must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetAllProjectByCompanyId must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetAllProjectByCompanyId must have translateResponse.');
            }

        const COLLECTION_NAME = 'projects';
        return async function getAllProjectByCompanyId
        (
            {
                companyId
            }
        )
            {

                if
                (
                    !companyId
                )
                    {
                        throw new Error('getAllProjectByCompanyId must have companyId.');
                    }

                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId: companyId
                    }
                );

                const response = await collection.aggregate(
                    options.pipeline
                );

                const result = translateResponse(
                    {
                        response: response
                    }
                );

                return result;
            }
    }