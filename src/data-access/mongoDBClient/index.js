const mongoDBDriver = require('mongodb');
var MongoClient = mongoDBDriver.MongoClient;
const { ObjectId } = require('mongodb');

module.exports  = function
(
    {
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        DATABASE_NAME
    }
)
    {

        if(
            !MONGODB_USERNAME
        )
            {
                throw new Error("MongoDB Client must have an MONGODB_USERNAME");
            }

        if
        (
            !MONGODB_PASSWORD
        )
            {
                throw new Error("MongoDB Client must have an MONGODB_PASSWORD");
            }

        if
        (
            !DATABASE_NAME
        )
            {
                throw new Error("MongoDB Client must have an DATABASE_NAME");
            }

            const { getDb } = require('./get-db')
                (
                    {
                        MongoClient: MongoClient,
                        MONGODB_USERNAME : MONGODB_USERNAME,
                        MONGODB_PASSWORD: MONGODB_PASSWORD,
                        DATABASE_NAME: DATABASE_NAME
                    }
                );

            
           

            const projectServices = require('./project')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            


            const customerServices = require('./customer')(
                {
                    getDb: getDb
                }
            );

            const projectItemServices = require('./project-item')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );


           

            const companyServices = require('./company')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

           

            const projectItemGalleryServices = require('./project-item-gallery')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const services = Object.freeze(
                {
                    project: projectServices,
                    customer: customerServices,
                    projectItem: projectItemServices,
                    company: companyServices,
                    projectItemGallery: projectItemGalleryServices
                }
            );

            return services;

        
    }