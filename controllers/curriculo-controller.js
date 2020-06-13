const CurriculoModel = require('../models/curriculo-model');

exports.getData = () =>{
    return CurriculoModel;
} 

exports.getName = () =>{
    return CurriculoModel.name;
}

exports.getDescription = () =>{
    return CurriculoModel.description;
}

exports.getExprerience = () =>{
    return CurriculoModel.experience;
}

exports.getEducation = ()=>{
    return CurriculoModel.education;
}

exports.getSkills = () =>{
    return CurriculoModel.skills;
}