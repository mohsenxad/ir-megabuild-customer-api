module.exports = function buildTranslateGetAllProjectByCompanyIdResponse
()
    {
        return function translateGetAllProjectByCompanyIdResponse
        (
            {
                response
            }
        )
            {
                if
                (
                    !response
                )
                    {
                        throw new Error('translateGetAllProjectByCompanyIdResponse must have response');
                    }
                    
                return response.toArray();
            }
    }