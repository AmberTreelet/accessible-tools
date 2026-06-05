<h1 align="center">
  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%237c3aed'/%3E%3Ctext x='50' y='68' text-anchor='middle' font-size='52'%3E♿%3C/text%3E%3C/svg%3E" width="80" alt="logo"><br>
  无障碍工具集 · Accessible Tools
</h1>

<p align="center">
  <b>三个纯前端无障碍公益工具</b><br>
  语音转文字大字幕 · 阅读障碍辅助 · AAC 图片沟通板<br><br>
  <img src="https://img.shields.io/badge/license-MIT-green" alt="MIT">
  <img src="https://img.shields.io/badge/纯前端-零依赖-blue" alt="zero deps">
  <img src="https://img.shields.io/badge/隐私-100%25本地存储-purple" alt="privacy">
  <img src="https://img.shields.io/badge/语言-中文简体-red" alt="lang">
</p>

---

## 🎯 这是什么

三个**零门槛、纯前端**的无障碍工具，帮助 **4.3 亿听障人群、10% 阅读障碍人口、数百万语言障碍患者** 更方便地与世界交流。

> **不需要后端、不需要注册、不需要网络（加载后）。打开浏览器就能用。**

## 🧰 三个工具

| 工具 | 解决什么问题 | 核心功能 |
|------|-------------|---------|
| 🎤 **[语音转文字大字幕](speech-to-text.html)** | 听障人士无法听到对方说话 | 实时语音识别 → 全屏大字显示 · 8种语言 · 打字备选 |
| 📖 **[阅读障碍辅助](reading-aid.html)** | 阅读障碍 / ADHD / 视疲劳导致阅读困难 | 仿生阅读 · RSVP速读 · 行聚焦 · 颜色遮罩 · EPUB/TXT导入 |
| 💬 **[AAC 沟通板](aac-board.html)** | 失语症 / 自闭症 / 渐冻症无法用语言表达 | 17分类 · 300+卡片 · 点击朗读 · 自定义卡片 · 快速打字 |

## ✨ 阅读辅助全部功能

阅读障碍辅助工具集成了目前市面上几乎所有主流阅读辅助技术：

| 技术 | 说明 | 适用人群 |
|------|------|---------|
| **📏 阅读标尺** | 高亮当前行，遮罩上下区域，减少视觉跳跃 | ADHD、阅读障碍 |
| **🧠 仿生阅读 (Bionic Reading)** | 每个词前半自动加粗，建立人工注视点 | ADHD、阅读疲劳 |
| **⚡ RSVP 逐词速读** | 文字在固定位置逐词闪现，眼不需移动 | ADHD、注意力缺陷 |
| **🎯 行聚焦 (Spotlight)** | 仅高亮当前N行，其余全部淡化 | 注意力分散 |
| **🎨 颜色遮罩** | 5种科学验证的色罩 + 自定义取色 | Meares-Irlen 综合征 |
| **🔤 OpenDyslexic** | 底部加重的特殊字体，减少字母跳动 | 阅读障碍 |
| **🔊 TTS 朗读** | 视觉+听觉双通道输入 | 阅读障碍、视疲劳 |
| **📂 EPUB/TXT 导入** | 支持电子书导入 + 自动章节识别 | 所有用户 |
| **🧘 专注模式** | 隐藏所有UI，只剩文字 | 容易分心 |
| **⏱ 阅读测速** | 实时 WPM 统计 | 阅读训练 |

## 📸 预览

### 语音转文字大字幕
> 深色背景 + 大字显示 + 实时识别 + 对话历史，专为听障面对面交流设计

### 阅读障碍辅助
> 左侧目录 + 顶部工具栏 + 阅读标尺 + 仿生阅读，EPUB/TXT 电子书即开即读

### AAC 沟通板
> 17 个分类选项卡 + 4-8 列卡片网格 + 搜索栏 + 造句栏 + 快速打字

## 🚀 快速开始

### 方式一：直接使用
```bash
git clone https://github.com/AmberTreelet/accessible-tools.git
cd accessible-tools
# 用浏览器打开 index.html 即可
open index.html
```

### 方式二：部署到 GitHub Pages
1. Fork 本仓库
2. Settings → Pages → Source: `main` branch → `/ (root)` → Save
3. 几分钟后访问 `https://你的用户名.github.io/accessible-tools/`

### 方式三：浏览器扩展
1. Chrome 打开 `chrome://extensions/`
2. 开启「开发者模式」
3. 「加载已解压的扩展程序」→ 选择 `reading-aid-extension/` 文件夹
4. 所有网页都能用阅读标尺和特殊字体了

## 🔒 隐私 & 安全

- ✅ **100% 本地处理** — 语音识别、TTS 朗读全部在浏览器本地执行
- ✅ **无服务器** — 不收集、不上传、不存储任何用户数据到云端
- ✅ **无追踪** — 无分析脚本、无广告、无第三方服务
- ✅ **开源透明** — 所有代码可审查，MIT 协议

## 🧪 技术栈

纯前端，零框架依赖。三个核心 API：

| API | 用途 | 工具 |
|-----|------|------|
| `Web Speech API (SpeechRecognition)` | 语音识别 | 语音转文字 |
| `Web Speech API (SpeechSynthesis)` | 文字转语音 | AAC 沟通板、阅读辅助 |
| `CSS Custom Properties` | 颜色遮罩、字体调整 | 阅读辅助 |
| `localStorage` | 数据持久化 | 全部三个工具 |

## 🎯 目标用户

- **听障 / 听力退化** → 语音转文字大字幕
- **阅读障碍 (Dyslexia)** → 阅读障碍辅助
- **ADHD / 注意力缺陷** → 阅读障碍辅助（仿生阅读、RSVP）
- **失语症 (Aphasia)** → AAC 沟通板
- **自闭症谱系 (ASD)** → AAC 沟通板
- **渐冻症 (ALS)** → AAC 沟通板
- **脑瘫 (Cerebral Palsy)** → AAC 沟通板
- **中风康复** → AAC 沟通板、语音转文字
- **Meares-Irlen 综合征** → 阅读障碍辅助（颜色遮罩）
- **老年人** → 全部三个工具
- **特教老师 / 康复治疗师** → 全部三个工具

## 🤝 贡献

欢迎提交 Issue 和 PR！特别需要：

- 🐛 Bug 反馈（特别是不同设备/浏览器上的兼容性）
- 🌍 更多语言支持
- 💡 新的卡片分类建议（AAC 沟通板）
- 🎨 UI/UX 改进建议
- ♿ 无障碍功能改进（用这个工具本身来改进它自己）

## 📄 License

MIT © 2024

---

<p align="center">
  <sub>如果这个项目帮到了你或你身边的人，请给个 ⭐ Star<br>
  这能让更多人搜索到它。</sub>
</p>

## 🔍 关键词索引

`无障碍` `accessibility` `阅读障碍` `dyslexia` `ADHD` `听障` `deaf` `hard of hearing` `失语症` `aphasia` `自闭症` `autism` `ASD` `渐冻症` `ALS` `脑瘫` `cerebral palsy` `中风康复` `stroke recovery` `AAC` `沟通板` `communication board` `语音转文字` `speech to text` `语音识别` `speech recognition` `仿生阅读` `bionic reading` `速读` `speed reading` `RSVP` `颜色遮罩` `color overlay` `Meares-Irlen` `阅读标尺` `reading ruler` `辅助技术` `assistive technology` `特教` `special education` `康复` `rehabilitation` `开源` `open source` `公益` `charity` `老年人` `elderly` `老龄化` `aging` `TTS` `文字转语音` `text to speech` `EPUB阅读` `OpenDyslexic`
