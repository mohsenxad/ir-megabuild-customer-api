module.exports = function buildGetCompanyById
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
                throw new Error('buildGetCompanyById must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetCompanyById must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetCompanyById must have translateResponse.');
            }

        const COLLECTION_NAME = 'companies';

        return async function getCompanyById
        (
            {
                companyId
            }
        )
            {
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        companyId: companyId
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