module.exports = function buildGetCompanyById
(
    {
        getCompanyByIdDB
    }
)
    {
        if
        (
            !getCompanyByIdDB
        )
            {
                throw new Error('buildGetCompanyById must have getCompanyByIdDB.');
            }

        return async function getCompanyById
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
                        throw new Error('getCompanyById must have companyId.');
                    }

                const getCompanyByIdDBResult = await getCompanyByIdDB(
                    {
                        companyId: companyId
                    }
                );

                return getCompanyByIdDBResult;

            }
    }