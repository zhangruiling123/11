'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async login() {
        const { ctx, service } = this;
        const { username, password } = ctx.request.body
        if (!username || !password) {
            ctx.body = {
                code: -1,
                msg: '缺少参数'
            }
        } else {
            const loginHn = await service.user.login(username, password)
            if (loginHn.length) {
                try {
                    ctx.bode = {
                        code: 1,
                        msg: '登陆成功'
                    }
                } catch (e) {
                    ctx.body = {
                        code: 2,
                        msg: e
                    }
                }
            } else {
                ctx.body = {
                    code: 3,
                    msg: '输入有误'
                }
            }
        }
    }
}

module.exports = HomeController;
