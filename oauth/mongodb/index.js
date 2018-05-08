const config = require('../../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = config.mongodbConfig || "mongodb://apul:apul123@47.98.175.30:27017/dcos-auth"
mongoose.connect(uri, function(err) {
  if (err) return console.log(err);
  console.log('Mongoose Connected');
});

module.exports = {
	AccessToken: require('./AccessToken'),
	AuthorizationCode: require('./AuthorizationCode'),
	Client: require('./Client'),
	RefreshToken: require('./RefreshToken'),
	User: require('./User')
};