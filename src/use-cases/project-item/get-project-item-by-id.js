module.exports = function buildGetProjectItemById
(
    {
        getProjectItemByIdDB
    }
)
    {
        if
        (
            !getProjectItemByIdDB
        )
            {
                throw new Error('buildGetProjectItemById must have getProjectItemByIdDB.');
            }
            
        return async function getProjectItemById
        (
            {
                projectItemId
            }
        )
            {
                if
                (
                    !projectItemId
                )
                    {
                        throw new Error('getProjectItemById must have projectItemId.');
                    }

                const getProjectItemByIdDBResult = await getProjectItemByIdDB(
                    {
                        projectItemId: projectItemId
                    }
                );

                return getProjectItemByIdDBResult;
            }
    }