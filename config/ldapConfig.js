var OPTS = {
  server: {
    url: 'ldap://localhost:389',
    bindDN: 'cn=admin,dc=njuics,dc=cn',
    bindCredentials: 'dr0w55@P#nap',
    searchBase: 'dc=njuics,dc=cn',
    searchFilter: '(uid={{username}})'
  }
};

module.exports = OPTS;