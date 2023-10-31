module.exports = function buildCreateGetAllFloorByBlockIdOptions
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
                throw new Error('buildCreateGetAllFloorByBlockIdOptions must have ObjectId.');
            }
        return function createGetAllFloorByBlockIdOptions
        (
            {
                blockId
            }
        )
            {
                if
                (
                    !blockId
                )
                    {
                        throw new Error('createGetAllFloorByBlockIdOptions must have blockId.');
                    }

                const blockObjectId = new ObjectId(
                    blockId
                );

                const filter = {
                    block: blockObjectId
                }

                const options = {
                    filter: filter
                }

                return options;
                
            }
    }