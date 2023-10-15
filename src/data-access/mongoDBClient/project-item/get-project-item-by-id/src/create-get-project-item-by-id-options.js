module.exports = function buildCreateGetProjectItemByIdOptions
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
                throw new Error('buildCreateGetProjectItemByIdOptions must have ObjectId.');
            }
        return function createGetProjectItemByIdOptions
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
                        throw new Error('createGetProjectItemByIdOptions must have projectItemId.');
                    }

                const projectItemObjectId = new ObjectId(
                    projectItemId
                );

                const filter = {
                    "_id": projectItemObjectId
                };

                const options = {
                    filter: filter
                }
                
                return options;
                
            }
    }