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
        );

        const companyUseCases = require('./company')(
            {
                getCompanyByIdDB: dataAccess.mongo.company.getCompanyById
            }
        );

        const projectUseCases = require('./project')(
            {
                getAllProjectByCompanyIdDB: dataAccess.mongo.project.getAllProjectByCompanyId,
                getProjectByIdDB: dataAccess.mongo.project.getProjectById
            }
        );

        const blockUseCases = require('./block')(
            {
                getAllBlockByProjectIdDB: dataAccess.mongo.block.getAllBlockByProjectId
            }
        );

        const floorUseCases = require('./floor')(
            {
                getAllFloorByBlockIdDB: dataAccess.mongo.floor.getAllFloorByBlockId
            }
        );

        const services = Object.freeze(
            {
                projectItem: projectItemUseCases,
                company: companyUseCases,
                project: projectUseCases,
                block: blockUseCases,
                floor: floorUseCases
            }
        );
        
        return services;
        
    }