# Modern Blog - Gatsby TypeScript 博客模板

这是一个使用 Gatsby、TypeScript 和 styled-components 构建的现代化、高性能博客模板。它专为开发者设计，提供了极佳的开发体验和最终用户体验。

## ✨ 主要特性

- **⚡ 极致性能** - 基于 Gatsby 构建，静态生成，加载速度极快
- **📱 完全响应式** - 完美适配各种设备和屏幕尺寸
- **🔧 TypeScript** - 全面的类型安全支持，提升开发效率和代码质量
- **📝 Markdown 支持** - 使用 Markdown 编写博客文章，支持 Frontmatter
- **💅 Styled Components** - 使用 CSS-in-JS 进行灵活的样式管理
- **🔍 SEO 优化** - 内置 SEO 优化和元标签管理
- **🎨 现代化 UI** - 简洁美观的设计风格

## 🚀 快速开始

### 前置要求

- Node.js (建议 v18 或更高版本)
- npm 或 yarn

### 安装步骤

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/gatsby-blog-template.git
   cd gatsby-blog-template
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run develop
   ```

4. **访问网站**
   打开浏览器访问 `http://localhost:8000`

## 📁 项目结构

```text
gatsby-blog-template/
├── src/
│   ├── components/          # 可复用的 React 组件
│   │   ├── Header.tsx       # 顶部导航栏
│   │   ├── Footer.tsx       # 底部页脚
│   │   └── Layout.tsx       # 页面布局组件
│   ├── pages/               # 页面组件 (路由)
│   │   ├── index.tsx        # 首页
│   │   ├── blog.tsx         # 博客列表页
│   │   ├── about.tsx        # 关于页面
│   │   └── 404.tsx          # 404 错误页
│   ├── templates/           # 页面模板
│   │   └── blog-post.tsx    # 博客文章详情页模板
│   ├── content/             # 内容文件
│   │   └── blog/            # 博客文章 Markdown 文件 (文件夹/index.md)
│   ├── styles/              # 全局样式
│   │   └── GlobalStyles.ts  # 全局样式定义
│   └── images/              # 静态图片资源
├── gatsby-config.ts         # Gatsby 配置文件 (插件、元数据)
├── gatsby-node.ts           # Gatsby Node API (动态生成页面等)
├── package.json             # 项目依赖和脚本
└── tsconfig.json            # TypeScript 配置
```

## 📝 撰写博客

在 `src/content/blog/` 目录下创建一个新的文件夹（例如 `my-first-post`），并在其中创建 `index.md` 文件。每篇文章都需要包含 Frontmatter 元数据：

```markdown
---
title: "文章标题"
date: "2024-03-20"
description: "这是一段关于文章的简短描述，将显示在列表中。"
---

# 这里是正文标题

在这里使用 Markdown 语法编写你的文章内容...
```

## 🎨 自定义指南

### 修改样式
你可以通过编辑 `src/styles/GlobalStyles.ts` 来修改全局样式、颜色主题和字体设置。

### 修改站点信息
打开 `gatsby-config.ts` 文件，修改 `siteMetadata` 对象中的信息，这些信息将用于 SEO 和页面标题：

```typescript
siteMetadata: {
  title: `你的博客名称`,
  description: `博客描述`,
  author: `@你的名字`,
  siteUrl: `https://your-blog.com`,
},
```

## � 可用脚本

- `npm run develop`: 启动本地开发服务器（支持热重载）
- `npm run build`: 构建生产环境版本
- `npm run serve`: 本地预览生产环境构建结果
- `npm run clean`: 清除 Gatsby 缓存（`.cache` 和 `public` 目录）
- `npm run type-check`: 运行 TypeScript 类型检查
- `npm run format`: 使用 Prettier 格式化代码

## 🛠 技术栈

- [Gatsby](https://www.gatsbyjs.com/) v5
- [React](https://reactjs.org/) v18
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Gatsby Plugin Image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)

## 📄 许可证

本项目基于 [0BSD](LICENSE) 许可证开源。
