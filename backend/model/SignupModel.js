const {model} =require('mongoose');

const {SignupSchema} = require('../schemas/SignupSchema.js');


const SignupModel = new model('Signup', SignupSchema);

module.exports = {SignupModel};