module.exports = function buildGetAllFloorByBlockId
(
    {
        getAllFloorByBlockIdDB
    }
)
    {
        if
        (
            !getAllFloorByBlockIdDB
        )
            {
                throw new Error('buildGetAllFloorByBlockId must have getAllFloorByBlockIdDB.');
            }
        return async function getAllFloorByBlockId
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
                        throw new Error('getAllFloorByBlockId must have blockId.');
                    }

                const getAllFloorByBlockIdDBResult = await getAllFloorByBlockIdDB(
                    {
                        blockId: blockId
                    }
                );

                return getAllFloorByBlockIdDBResult;

            }
    }