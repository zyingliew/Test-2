const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// **卡片数据（写死在代码里）**
const cards = [
    { name: '🔥 火龙', rarity: 'SSR' },
    { name: '❄️ 冰凤凰', rarity: 'SR' },
    { name: '⚡ 雷兽', rarity: 'R' },
    { name: '🌲 绿叶精灵', rarity: 'N' },
    { name: '🐍 巨蛇', rarity: 'N' }
];

// **抽卡 API**
app.get('/draw', (req, res) => {
    const count = parseInt(req.query.count) || 1; // 获取抽卡数量
    let result = [];

    for (let i = 0; i < count; i++) {
        const randomCard = cards[Math.floor(Math.random() * cards.length)];
        result.push(randomCard);
    }

    res.json(result);
});

// **启动服务器**
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 服务器运行在 http://localhost:${PORT}`));
