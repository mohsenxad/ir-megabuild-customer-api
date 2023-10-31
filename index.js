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


app.get('/project/:projectId',
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];

                    const project = await customerServices.project.getProjectById(
                        {
                            projectId: projectId
                        }
                    );

                    const result = {
                        project : project
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


app.get('/project/svg/:projectId',
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];

                    // const project = await customerServices.project.getProjectById(
                    //     {
                    //         projectId: projectId
                    //     }
                    // );

                    const svgContent = `<svg width="399" height="187" viewBox="0 0 399 187" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
    <a href="http://www.w3.org" xlink:title="طبقه اول" >
        <path d="M45 0L398 34L370 58L1 18L45 0Z" fill="#E4D3D3"/><path d="M1 122L372 163V187L1 145V122Z" fill="#D9D9D9"/>    
    </a>

    <a href="http://www.w3.org" xlink:title="طبقه دوم">
        <path d="M372.5 162L398.5 139.5V164L372.5 187L372.5 162Z" fill="#D9D9D9"/><path d="M1 96L372 137V161L1 119V96Z" fill="#D9D9D9"/>
    </a>

    <a href="http://www.w3.org" xlink:title="طبقه سوم">
        <path d="M372.5 136L398.5 113.5V138L372.5 161L372.5 136Z" fill="#D9D9D9"/><path d="M1 70L372 111V135L1 93V70Z" fill="#D9D9D9"/>
    </a>

    <a href="http://www.w3.org" xlink:title="طبقه چهارم">
        <path d="M372.5 110L398.5 87.5V112L372.5 135L372.5 110Z" fill="#D9D9D9"/><path d="M0 43L371 84V108L0 66V43Z" fill="#D9D9D9"/>
    </a>
    
    
    
   <a href="http://www.w3.org" xlink:title="طبقه پنجم">
    <path d="M371.5 83L397.5 60.5V85L371.5 108L371.5 83Z" fill="#D9D9D9"/><path d="M0 17L371 58V82L0 40V17Z" fill="#D9D9D9"/><path d="M371.5 57L397.5 34.5V59L371.5 82L371.5 57Z" fill="#D9D9D9"/>
   </a>
   
    
    </svg>`

                    res.setHeader('content-type', 'image/svg+xml')
 
                    res.status(200).send(svgContent)


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



//========= BLOCK ======================

app.get('/block/byProject/:projectId',
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];

                    const blockList = await customerServices.block.getAllBlockByProjectId(
                        {
                            projectId: projectId
                        }
                    );

                    const result = {
                        blockList : blockList
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

app.get('/block/svg/byProject/:projectId',
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];

                    const blockList = await customerServices.block.getAllBlockByProjectId(
                        {
                            projectId: projectId
                        }
                    );

                    let svgContent=`<svg  fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">`;

                    for (let index = 0; index < blockList.length; index++)
                        {
                            const currentBlock = blockList[index];

                            svgContent = svgContent+ `<a xlink:href="../block/detail/${currentBlock._id}" xlink:title="${currentBlock.title}">${currentBlock.plan}</a>`;
                        }

                    svgContent = svgContent+`</svg>`;

                    // res.setHeader('content-type', 'image/svg+xml')
 
                    // res.status(200).send(svgContent);

                    const result = {
                        svgContent : svgContent.toString()
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



//========= FLOOR ======================

app.get('/floor/byBlock/:blockId',
    async (req, res) =>
        {
            try 
                {
                    const blockId = req.params["blockId"];

                    const floorList = await customerServices.floor.getAllFloorByBlockId(
                        {
                            blockId: blockId
                        }
                    );

                    const result = {
                        floorList: floorList
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

app.get('/floor/svg/byBlock/:blockId',
    async (req, res) =>
        {
            try 
                {
                    const blockId = req.params["blockId"];

                    const floorList = await customerServices.floor.getAllFloorByBlockId(
                        {
                            blockId: blockId
                        }
                    );

                    let svgContent=`<svg  width="100%" height="200" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    >`;

                    for (let index = 0; index < floorList.length; index++)
                    {
                        const currentFloor = floorList[index];
                        svgContent = svgContent+ `<a xlink:href="./block/detail/${currentFloor._id}" xlink:title="${currentFloor.title}">${currentFloor.plan}</a>`;
                    }

                    svgContent = svgContent+`</svg>`;

                    // res.setHeader('content-type', 'image/svg+xml')
 
                    // res.status(200).send(svgContent);

                    const result = {
                        svgContent : svgContent.toString()
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