module.exports= function buildGetAllProjectByCompany
(
    {
        getAllProjectByCompanyIdDB
    }
)
    {
        if
        (
            !getAllProjectByCompanyIdDB
        )
            {
                throw new Error('buildGetAllProjectByCompany must have getAllProjectByCompanyIdDB.');
            }

        return async function getAllProjectByCompany
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
                        throw new Error('getAllProjectByCompany must have companyId.');
                    }
                    
                const getAllProjectByCompanyIdDBResult = await getAllProjectByCompanyIdDB(
                    {
                        companyId: companyId
                    }
                );

                return getAllProjectByCompanyIdDBResult;
            }
    }