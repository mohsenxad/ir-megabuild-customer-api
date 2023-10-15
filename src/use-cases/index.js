module.exports = function
(
    {
        mongoDb_credentials,
        JWT_SECRET

    }
    
)
    {

        const dataAccess = require('../data-access')(
            {
                mongoDb_credentials: mongoDb_credentials
            }
        );

        const projectItemUseCases = require('./project-item')(
            {
                getProjectItemByIdDB: dataAccess.mongo.projectItem.getProjectItemById
            }
        )

        const services = Object.freeze(
            {
                projectItem: projectItemUseCases
            }
        );
        
        return services;
        
    }