# 优保洁居家服务网站

新房开荒、深度保洁、甲醛治理居家服务展示网站，基于 Next.js 14 开发。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: 支持 SSR 或静态导出

## 项目结构

```
src/
├── app/                    # 页面路由
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   ├── sitemap.ts         # 站点地图
│   ├── robots.ts          # 爬虫规则
│   ├── not-found.tsx      # 404页面
│   ├── service/[slug]/    # 服务详情页
│   ├── cases/             # 服务案例页
│   ├── blog/[slug]/       # 博客详情页
│   ├── about/             # 关于我们
│   └── contact/           # 联系我们
├── components/            # 公共组件
│   ├── Header.tsx        # 导航栏
│   ├── Footer.tsx        # 页脚
│   ├── FloatingButtons.tsx # 悬浮联系按钮
│   └── BookingForm.tsx   # 预约表单
└── data/                  # 数据文件
    └── index.ts          # 服务、案例、文章等数据
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3000

### 构建生产版本

```bash
npm run build
```

### 启动生产服务

```bash
npm run start
```

## 自定义配置

### 修改公司信息

编辑 `src/data/index.ts` 文件，修改以下配置：

- `siteConfig` - 网站基本信息（名称、电话、地址等）
- `services` - 服务类型和详情
- `cases` - 服务案例
- `blogs` - 博客文章
- `companyInfo` - 公司信息

### 修改主题色

编辑 `tailwind.config.ts` 文件：

```ts
colors: {
  primary: {
    DEFAULT: 'rgb(28, 118, 44)',  // 主色
    light: 'rgb(56, 176, 82)',     // 浅色
    dark: 'rgb(20, 85, 32)',       // 深色
  },
  // ...
}
```

### 添加图片资源

将图片放入 `public/images/` 目录，然后在数据文件中引用：

```ts
image: '/images/your-image.jpg'
```

### 修改域名

编辑以下文件中的域名：

- `src/app/sitemap.ts`
- `src/app/robots.ts`

## 页面列表

| 路径 | 说明 |
|------|------|
| `/` | 首页 |
| `/service/xinfang-kaihuang` | 新房开荒服务页 |
| `/service/shendu-baojie` | 深度保洁服务页 |
| `/service/jiaquan-zhili` | 甲醛治理服务页 |
| `/cases` | 服务案例页 |
| `/blog` | 保洁知识列表页 |
| `/blog/[slug]` | 博客详情页 |
| `/about` | 关于我们 |
| `/contact` | 联系我们 |

## SEO 优化

- ✅ 每个页面独立 Meta 信息
- ✅ 自动生成 Sitemap
- ✅ Robots.txt 配置
- ✅ 语义化 HTML 结构
- ✅ 响应式设计

## 部署说明

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 静态导出

如需静态部署，修改 `next.config.js`：

```js
const nextConfig = {
  output: 'export',
}
```

然后运行：

```bash
npm run build
```

静态文件将输出到 `out/` 目录。

## 注意事项

1. **Node 版本**: 需要 Node.js 18.17.0 或更高版本
2. **图片资源**: 请自行准备并放入 `public/images/` 目录
3. **预约表单**: 当前为模拟提交，需要对接实际的邮件/微信通知服务
4. **微信二维码**: 需要替换为实际的二维码图片

## 后续优化建议

- [ ] 添加实际图片资源
- [ ] 对接预约表单通知服务
- [ ] 添加百度统计/Google Analytics
- [ ] 添加在线客服功能（可选）
- [ ] 优化博客 Markdown 渲染
- [ ] 添加案例详情页

## 许可证

MIT
