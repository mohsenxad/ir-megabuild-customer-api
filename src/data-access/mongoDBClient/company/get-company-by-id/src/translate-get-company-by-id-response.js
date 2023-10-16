module.exports = function buildTranslateGetCompanyByIdResponse
()
    {
        return function translateGetCompanyByIdResponse
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
                        throw new Error('translateGetCompanyByIdResponse must have response');
                    }
                
                    return response;

            }
    }