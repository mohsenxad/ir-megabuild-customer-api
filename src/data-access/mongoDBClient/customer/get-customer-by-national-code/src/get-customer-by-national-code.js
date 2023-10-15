module.exports = function buildGetCustomerByNationalCode
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
                throw new Error('buildGetCustomerByNationalCode must have getDb.');
            }

        if
        (
            !createOptions
        )
            {
                throw new Error('buildGetCustomerByNationalCode must have createOptions.');
            }

        if
        (
            !translateResponse
        )
            {
                throw new Error('buildGetCustomerByNationalCode must have translateResponse.');
            }

        const COLLECTION_NAME = 'customers';

        return async function getCustomerByNationalCode
        (
            {
                nationalCodeNumber
            }
        )
            {

                if
                (
                    !nationalCodeNumber
                )
                    {
                        throw new Error('getCustomerByNationalCode must have nationalCodeNumber.');
                    }
                const db = await getDb();
                
                const collection = db.collection(
                    COLLECTION_NAME
                );

                const options = createOptions(
                    {
                        nationalCodeNumber: nationalCodeNumber
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