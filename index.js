const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const packageJson = require('./package.json');

var app = express();

app.use(bodyParser.json())


app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, usercompanyaccessid");
        next();
    }
);

const customerServices = require('./src');

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '🙂',
                name: packageJson.name,
                version : packageJson.version
            };

            sendResult(
                res,
                result
            );
        }
);

//========= PROJECT ITEM ======================

app.get('/projectItem/:projectItemId',
    async (req, res) =>
        {
            try 
                {
                    const projectItemId = req.params["projectItemId"];

                    const projectItem = await customerServices.projectItem.getProjectItemById(
                        {
                            projectItemId: projectItemId
                        }
                    );

                    const result = {
                        projectItem : projectItem
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

//========= COMPANY ======================

app.get('/company/:companyId',
    async (req, res) =>
        {
            try 
                {
                    const companyId = req.params["companyId"];

                    const company = await customerServices.company.getCompanyById(
                        {
                            companyId: companyId
                        }
                    );

                    const result = {
                        company : company
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);


//========= PROJECT ======================

app.get('/project/byCompany/:companyId',
    async (req, res) =>
        {
            try 
                {
                    const companyId = req.params["companyId"];

                    const projectList = await customerServices.project.getAllProjectByCompany(
                        {
                            companyId: companyId
                        }
                    );

                    const result = {
                        projectList : projectList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.error(
            error
        );

        res.status(400).json(
            {
                type:false,
                message: error.message 
            }
        );
    }


app.listen(
    process.env.PORT,
    function()
        {
            console.info('... بسم الله الرزاق ...');
            console.log(`Init ${packageJson.name} on ${process.env.PORT} : http://localhost:${process.env.PORT}`);
        }
);