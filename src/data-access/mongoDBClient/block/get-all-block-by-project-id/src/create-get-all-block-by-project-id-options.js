module.exports = function buildCreateGetAllBlockByProjectIdOptions
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
                throw new Error('buildCreateGetAllBlockByProjectIdOptions must have ObjectId.');
            }
        return function createGetAllBlockByProjectIdOptions
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
                        throw new Error('createGetAllBlockByProjectIdOptions must have projectId.');
                    }

                const porjectObjectId = new ObjectId(
                    projectId
                );

                const filter = {
                    project: porjectObjectId
                }

                const options = {
                    filter: filter
                }

                return options;
                
            }
    }