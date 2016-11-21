module.exports = {
  port: 8081,
  session: {
    secret: 'nodeweb',
    key: 'nodeweb',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/nodeweb'
};
