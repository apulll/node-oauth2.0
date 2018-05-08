var Config = {
    // DCOSUI_URL: 'https://dc.njuics.cn',
    // LOGINAUTH_URL: 'http://114.212.189.147:3000',
    DCOSUI_URL: 'http://localhost:4200',
    LOGINAUTH_URL: 'http://localhost:3700',
    LOGINAUTH_PORT: 3700,
    root: __dirname,
   	clientId: "dc-njuics-cn",
  	secret: "dcos-nap",
  	mongodbConfig: "mongodb://apul:apul123@47.98.175.30:27017/dcos-auth",
  	token_destination: ""
}

module.exports = Config;
