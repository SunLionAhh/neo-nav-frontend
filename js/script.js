// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    // 为每个卡片添加延迟动画
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});

// 添加手绘动画效果
const addHandDrawnEffect = () => {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.filter = 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.filter = 'none';
        });
    });
};

// 初始化
addHandDrawnEffect(); 