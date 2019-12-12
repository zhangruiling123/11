const Service = require('egg').Service;

class UserService extends Service {
    async login(username, password) {
        const user = await this.app.mysql.query('select * from listname where username=? and password=?', [username, password]);
        return user;
    }
}

module.exports = UserService;