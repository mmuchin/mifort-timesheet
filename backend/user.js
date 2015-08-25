var dbSettings = require('./libs/mongodb_settings');

exports.findUserByEmail = function(email, callback) {
    var users = dbSettings.userCollection();
    users.findOne({email: email}, function(err, user){
        callback(err, user);
    });
};

exports.findUserById = findUserById;

function findUserById(id, callback) {
    var users = dbSettings.userCollection();
    users.findOne({_id: id}, function(err, user){
        callback(err, user);
    });
};

exports.save = function(user, callback) {
    var users = dbSettings.userCollection();
    users.save(user, {safe:true}, function (err, results) {
        callback(err, results);
    });
};

//or from db???
exports.restGetUserById = function(req, res) {
    var user = req.user;
    res.json(user);
};