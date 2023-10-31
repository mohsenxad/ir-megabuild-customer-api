module.exports = function buildGetAllBlockByProjectId
(
    {
        getAllBlockByProjectIdDB
    }
)
    {
        if
        (
            !getAllBlockByProjectIdDB
        )
            {
                throw new Error('buildGetAllBlockByProjectId must have getAllBlockByProjectIdDB.');
            }
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

                const getAllBlockByProjectIdDBResult = await getAllBlockByProjectIdDB(
                    {
                        projectId: projectId
                    }
                );

                return getAllBlockByProjectIdDBResult;

            }
    }