# 在线订餐系统

这是一个 React + Vite 实现的在线订餐系统演示项目，包含：

- 餐厅浏览
- 菜品展示
- 购物车功能
- 订单确认
- 支付模拟
- 响应式布局（手机、平板、PC）

## 启动方式

1. 进入项目目录

```bash
cd 在线订餐系统
```

2. 安装依赖

```bash
npm install
```

3. 运行开发服务器

```bash
npm run dev
```

## 生产构建与部署

1. 生成静态文件

```bash
npm run build
```

2. 本地预览生成结果

```bash
npm run preview
```

## GitHub Pages 部署

1. 安装 gh-pages：

```bash
npm install --save-dev gh-pages
```

2. 确保 `package.json` 包含以下脚本：

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. 如果你还没有 GitHub 仓库，先创建一个，推荐仓库名：`online-order-system`。

4. 初始化 Git 并推送到 GitHub：

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/你的用户名/online-order-system.git
git push -u origin main
```

5. 执行部署：

```bash
npm run deploy
```

6. 在 GitHub 仓库设置中开启 Pages，选择 `gh-pages` 分支。

7. 访问发布网址：

```text
https://你的用户名.github.io/online-order-system/
```

> 如果你使用的仓库名不是 `online-order-system`，请把 `vite.config.js` 中的 `base` 修改为对应的仓库名路径。

## 生产构建与部署

1. 生成静态文件

```bash
npm run build
```

2. 本地预览生成结果

```bash
npm run preview
```

3. 访问页面

- 开发模式：`http://localhost:5173/`
- 预览模式：`http://localhost:4173/`

4. 部署上线

将 `dist/` 目录下的文件上传到任意静态网站托管服务，例如 GitHub Pages、Netlify、Vercel，或直接放到静态服务器的根目录。

5. 浏览器打开

部署完成后，用浏览器访问该静态托管服务提供的 URL，即可直接打开该程序。
