const projects = require('../Models/projectModel')

//Addprojects

exports.addProjects = async (req, res) => {
    const userId = req.payload
    const { title, overview, language, github, demo } = req.body
    const image = req.file.filename
    // console.log(req.payload)
    // console.log(req.body)
    // console.log(req.file)
    console.log(title, overview, language, github, demo, image)
    try {
        const existingProject = await projects.findOne({ github })
        if (existingProject) {
            res.status(406).json("Project already added!")
        }
        else {
            const newProject = new projects({
                title, overview, languages: language, github, demo, image, userId
            })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch (err) {
        console.log(err)
        res.status(401).json(err)
    }

}

exports.homeProjects = async (req, res) => {
    try {
        const result = await projects.find().limit(3)
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No Projects Available")
        }
    }
    catch(err){
        console.log(err)
        res.status(406).json(err)
    }
    
}

exports.allProjects =async(req,res)=>{
    // console.log("Fine")
    try{
        const result = await projects.find()
        if (result) {
            res.status(200).json(result)
        }
        else {
            res.status(401).json("No Projects Available")
        }
    }
    catch(err){
        console.log(err)
        res.status(406).json(err)
    }
}

exports.userProjects=async(req,res)=>{
    try{
        const userId=req.payload
        const result=await projects.find({userId})
        if(result){
            res.status(200).json(result)
        }
        else{
            res.status(401).json("No Projects Available")
        }
    }
    catch(err){
        console.log(err)
        res.status(406).json(err)
    }
}