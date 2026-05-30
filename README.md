# vueagc

> 基于 vite3.x 重构整个前后端项目，完善后端权限控制细粒度，封装更多场景化组件...正在完善中

基于 vite3.x + vue3.x + antd-design-vue3.x + typescript4.x 的后台管理系统模板

- 账号：rootadmin，密码：123456
- [前端仓库](https://github.com/pyf0304/vue3AgcSpa)
- 根据 JSON 生成 typescript 的工具：[http://json2ts.com/](http://json2ts.com/)

部分设计参考了 [vue-vben-admin](https://github.com/vbenjs/vue-vben-admin)

## 安装使用

- 获取项目代码

```bash
git clone https://github.com/pyf0304/vue3AgcSpa
```

- 安装依赖

```bash
cd vue3AgcSpa

pnpm install

```

- 运行

```bash
pnpm serve
```

- 打包

```bash
pnpm build
```

## WebApi 场景切换

项目中的 WebApi 配置已经统一到 [src/ts/PubConfig/clsSysPara4WebApi.ts](src/ts/PubConfig/clsSysPara4WebApi.ts)，`.env*` 文件只负责声明场景，不再直接维护完整 API 地址。

- 开发模式使用 [.env.development](.env.development)
- 生产模式使用 [.env.production](.env.production)
- 远程测试模式使用 [.env.remote-test](.env.remote-test)
- 本项目开发服务器端口在 [vite.config.ts](vite.config.ts#L155) 中固定为 `8099`

场景值说明：

- `local`: 本地 WebApi
- `test`: 远程测试 WebApi
- `prod`: 远程正式 WebApi

常用命令：

```bash
# 本地开发（调用本地 WebApi）
pnpm dev

# 以生产模式启动（调用远程正式 WebApi）
npm run dev:production

# 一键清理 8099 占用 + 生产模式启动 + 自动打开浏览器(Windows)
npm run dev:prod:auto

# 远程测试开发（调用远程测试 WebApi）
npm run dev:remote-test

# 正式环境打包
pnpm build

# 远程测试环境打包
pnpm build:remote-test

# 远程测试环境预览
pnpm preview:remote-test
```

发布到子路径 `/vueagc/` 时，请使用生产构建后的 `dist` 目录，并确保静态服务器把 `/vueagc/` 转发到前端入口页。当前项目已经按这个路径配置好：

- [\.env.production](.env.production) 中 `VITE_BASE_URL = /vueagc/`
- [src/router/index.ts](src/router/index.ts) 中 `createWebHashHistory(import.meta.env.BASE_URL)`
- [default.conf.template](default.conf.template) 中已补充 `/vueagc/` 的 nginx 规则

所以最终访问地址应为：`https://www.sh-tz.com/vueagc/#/login?redirect=/dashboard/welcome`

> **注意**：`npm run dev -- --mode production` 这种写法在 npm 下存在 `--mode` flag 被丢弃的问题， Vite 会将 `production` 当作根目录参数导致 HTTP 404。请统一使用 `npm run dev:production`。

说明：

- `--mode production` 会加载 [.env.production](.env.production)
- `--mode remote-test` 会加载 [.env.remote-test](.env.remote-test)
- 前端仍然在本地运行，只是 WebApi 场景切换到了对应环境
- 默认开发模式访问地址：`http://localhost:8099/`
- `--mode production` 访问地址：`http://localhost:8099/`
- 不要按 Vite 默认值 `5173` 访问

如果启动时报 `Port 8099 is already in use`，可以先释放 8099 端口再重启：

```powershell
Get-NetTCPConnection -LocalPort 8099 -State Listen -ErrorAction SilentlyContinue |
Select-Object -ExpandProperty OwningProcess -Unique |
ForEach-Object { Stop-Process -Id $_ -Force }
```

提示：

- 这条命令会结束占用 8099 的进程，建议在确认是本地开发进程时再执行。
- 也可以直接使用 `npm run dev:prod:auto` 一键完成清理端口和启动。

默认约定：

- [.env.development](.env.development) 使用 `local`
- [.env.production](.env.production) 使用 `prod`
- [.env.remote-test](.env.remote-test) 使用 `test`

如果需要切换普通接口和登录/GP 接口，可以分别修改：

- `VITE_WEBAPI_SCENE`
- `VITE_WEBAPI_GP_SCENE`

## vscode 配置

安装项目根目录.vscode 推荐的插件，再安装 Volar，并禁用 Vetur，重启 vscode 即可。

> 使用了 Vue3.x 全家桶、ant-design-vue3.x 和 typescript4.x，实践 vue3.x 的新特性以及玩法，不得不说 vue3.x 的 Composition API 相比于 vue2.x 的 Options API 灵活很多，让我们可以灵活地组合组件逻辑，我们可以很轻松的使用 hooks 的形式去代替以前 mixins 等的写法。更多 hooks 可以参考[vueuse](https://vueuse.org/functions.html)

## 项目简要说明

`rootadmin` 默认开放多点登录，其他新建的账号默认都是单点登录。建议自己拉后端代码到本地跑，避免多人同时操作时产生冲突和误解。

### todolist

- [x] 动态表格(完善中)
- [x] 动态表单(完善中)
- [ ] 电商 SKU 功能演示
- [ ] 纯前端导出 PDF 动态分页
- [ ] 其他...

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中

## 更新日志

[CHANGELOG](./CHANGELOG.md)
