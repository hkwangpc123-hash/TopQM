// 获取菜单按钮、菜单和覆盖区域
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');

// 点击菜单按钮时显示菜单和覆盖层
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // 切换菜单显示与隐藏
  overlay.style.display = menu.classList.contains('active') ? 'block' : 'none'; // 显示或隐藏覆盖层
});

// 点击覆盖层时收起菜单
overlay.addEventListener('click', () => {
  menu.classList.remove('active'); // 隐藏菜单
  overlay.style.display = 'none'; // 隐藏覆盖层
});

// 点击菜单之外的地方时收起菜单
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    // 如果点击的区域不在菜单内，也不在菜单按钮上
    menu.classList.remove('active'); // 隐藏菜单
    overlay.style.display = 'none'; // 隐藏覆盖层
  }
});
