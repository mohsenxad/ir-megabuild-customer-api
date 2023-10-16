module.exports = function buildCreateGetCompanyByIdOptions
(
    {
        ObjectId
    }
)
    {
        if
        (
            !ObjectId
        )
            {
                throw new Error('buildCreateGetCompanyByIdOptions must have ObjectId.');
            }
        return function createGetCompanyByIdOptions
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
                        throw new Error('createGetCompanyByIdOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );

                const filter = {
                    "_id": companyObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
                
            }
    }