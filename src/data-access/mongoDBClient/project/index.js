module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {

        const { getAllProject } = require('./get-all-project')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            } 
        );

        const { getProjectById } = require('./get-project-by-id')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        
        const { getAllProjectByCompanyId } = require('./get-all-project-by-companyId')
        (
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const services = Object.freeze(
            {
                getAllProject,
                getProjectById,
                getAllProjectByCompanyId
            }
        );

        return services;

    }