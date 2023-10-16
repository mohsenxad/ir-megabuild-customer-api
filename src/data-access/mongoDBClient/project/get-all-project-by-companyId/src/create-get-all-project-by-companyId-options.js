module.exports = function buildCreateGetAllProjectByCompanyIdOptions
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
                throw new Error('buildCreateGetAllProjectByCompanyIdOptions must have ObjectId.');
            }
        return function createGetAllProjectByCompanyIdOptions
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
                        throw new Error('createGetAllProjectByCompanyIdOptions must have companyId.');
                    }

                const companyObjectId = new ObjectId(
                    companyId
                );


                const pipeline = [
                    {
                        '$match': {
                          'company': companyObjectId
                        }
                    },
                    {
                        '$lookup': {
                            'from': 'projectTypes', 
                            'localField': 'projectType', 
                            'foreignField': '_id', 
                            'as': 'projectType'
                        }
                      },
                    {
                        '$unwind': {
                            'path': '$projectType'
                        }
                    }
                ];


                const options = {
                    pipeline: pipeline
                }

                return options;
            }
    }