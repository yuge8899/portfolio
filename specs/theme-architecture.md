# 主题架构规约（Theme Architecture Spec）

## 主题系统

- **策略**：Tailwind `darkMode: 'class'` + React Context
- **默认**：跟随系统 `prefers-color-scheme`，无 localStorage 时自动检测
- **持久化**：localStorage `theme` key，值为 `dark` 或 `light`
- **覆盖**：用户手动切换后，系统偏好不再自动覆盖（除非清除 localStorage）

## 颜色映射

| Token | 深色 | 浅色 |
|-------|------|------|
| 背景 | `#0A0A0F` | `#F8FAFC` |
| 主文字 | `#FFFFFF` | `#0F172A` |
| 次要文字 | `#94A3B8` | `#64748B` |
| 卡片 | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.8)` |
| 边框 | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.06)` |
| 按钮/主色 | `#6366F1`（双模式共用） |

## 切换组件

- 位置：Navigation 右侧，CTA 按钮左边
- 图标：lucide-react `Sun`（深色模式，点击切浅）/ `Moon`（浅色模式，点击切深）
- 过渡：300ms `transition-colors` 全页面

## 实现文件

| 文件 | 角色 |
|------|------|
| `src/context/ThemeContext.jsx` | 状态管理 + 系统监听 + localStorage |
| `src/App.jsx` | ThemeProvider 包裹根组件 |
| `src/components/Navigation.jsx` | 切换按钮 |
| `tailwind.config.js` | `darkMode: 'class'` + 浅色 tokens |
| `src/index.css` | 浅色模式 CSS 覆盖 + 过渡动画 |

## 历史

| 日期 | 变更 |
|------|------|
| 2026-06-05 | 新增主题系统：深/浅切换 + 系统跟随 + localStorage 持久化 |
