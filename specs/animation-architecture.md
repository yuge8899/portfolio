# 动画架构规约（Animation Architecture Spec）

> 不变式文件 — 所有动画相关决策记录于此，防止多轮开发中认知漂移

## 动画类型

| 类型 | 实现方式 | 触发条件 | 用途 |
|------|----------|----------|------|
| 背景动画 | AnimatedBackground.jsx（Canvas） | 页面加载即运行 | 粒子/光晕/极光背景 |
| 首屏进入 | CSS keyframe `fade-in-up` | 页面加载 | Hero 标题/按钮入场 |
| 滚动淡入 | ScrollReveal.jsx（IntersectionObserver） | 元素进入视口15% | About/Projects/Skills/Contact |
| 悬停效果 | CSS transition（card-glass） | 鼠标悬停 | 项目卡片上移5px |

## ScrollReveal 规范

- 使用 IntersectionObserver，不用 scroll 事件
- threshold: 0.15
- 触发后 unobserve，每个元素只播一次
- CSS transition: opacity 0.6s ease-out, transform 0.6s ease-out
- 复用 `animate-fade-in-up` keyframe（定义在 tailwind.config.js）

## 约束

- 不在首屏（Hero）使用滚动动画
- 不在 Navigation 和 Footer 使用入场动画
- 不新增 CSS keyframe——复用已定义的 11 个
- 动画不应影响页面布局（使用 opacity + transform，不改变尺寸）

## 历史

| 日期 | 变更 | 原因 |
|------|------|------|
| 2026-06-05 | 创建 ScrollReveal 组件 | 添加滚动驱动淡入动画，提升浏览体验 |
