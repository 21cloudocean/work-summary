const projects = [
  {
    id: 0,
    name: 'HTML+CSS构建个人主页',
    tech: 'HTML&CSS',
    image: './image/personal-c.jpg',
    link: 'https://21cloudocean.github.io/Dora-s-personal-webpage/',
    intro: '个人主页',
    urlName: 'Personal Webpage',
    summary: '在HTML基础上熟悉CSS+DIV构建，盒模型布局，静态页面搭建'
  },
  {
    id: 1,
    name: 'Bootstrap制作网页',
    tech: 'HTML&CSS',
    image: './image/Tindog-c.jpg',
    link: 'https://21cloudocean.github.io/TingDog/',
    intro: '产品介绍页',
    urlName: 'TinDog',
    summary:
      '1 熟悉并使用Bootstrap的网格系统，页面根据屏幕大小自动调整布局；<br>2 使用Bootstrap各种组件进行页面搭建，包括导航栏、按钮样式、轮播图等。'
  },
  {
    id: 2,
    name: 'DOM - 骰子游戏',
    tech: 'JavaScript',
    image: './image/dicee-challenge.gif',
    link: 'https://21cloudocean.github.io/Dicee-Challenge/',
    intro: '筛子游戏，刷新会显示不同点数。',
    urlName: 'Dicee Challenge',
    summary:
      '1 掌握JavaScript基础语法：variable变量，array数列，function函数，使用if条件句、while/for loop；<br>2 掌握DOM。'
  },
  {
    id: 3,
    name: '进阶DOM - 击鼓页面',
    tech: 'JavaScript',
    image: './image/drum-kit.gif',
    link: 'https://21cloudocean.github.io/Drum-Kit/',
    intro: '鼠标点击或按对应按键，不同乐器会发出对应声音',
    urlName: 'Drum Kit',
    summary:
      '1 综合JavaScript的基础语法及DOM；<br>2 掌握even listener及 switch method。'
  },
  {
    id: 4,
    name: ' jQuery - Simon游戏',
    tech: 'JavaScript',
    image: './image/Simon.gif',
    link: 'https://21cloudocean.github.io/Simon-Game-Challenge/',
    intro:
      '该游戏每个level会提示一个按键，并将该按键加入用户需要点击的序列，即需要点击的按钮数量与level数相同，用户一旦点击错误，游戏则重新开始。',
    urlName: 'Simon',
    summary:
      '1 熟悉并使用jQuery；<br>2 进一步掌握JavaScript中的function、if逻辑、数列操作。'
  },
  {
    id: 5,
    name: 'Express+Git–登记邮箱',
    tech: 'Node',
    image: './image/newsletter.gif',
    link: 'https://desolate-sierra-86985.herokuapp.com/',
    intro:
      '用户留下姓名和地址，提交后可自动添加进邮箱通讯录，方便统一发送营销邮件。',
    urlName: 'Newsletter',
    summary:
      '1 掌握Node.js及其express框架，制作本地服务器；<br>2 使用npm、API等。<br>3 利用Git，将本地服务器上传至host网站。'
  },
  {
    id: 6,
    name: 'EJS+MongoDB+Mongoose-TodoList',
    tech: 'Node',
    image: './image/toDoList.gif',
    link: 'https://fathomless-stream-81556.herokuapp.com/',
    intro: '完成清单。可以在URL后输入不同字符串，创建不同的List。',
    urlName: 'To Do List',
    summary:
      '1 使用同一个EJS文件创建多个格式相同的网页；<br>2 创建MongoDB的本地数据库和在线数据库；<br>3 使用Mongoose对MongoDB数据库进行操作，包括对内容进行上传、修改、删除等。'
  },
  {
    id: 7,
    name: 'DOM–colorFlipper',
    tech: 'JavaScript',
    image: './image/colorFlipper.gif',
    link: 'https://21cloudocean.github.io/color-flipper/hex.html',
    intro: '点击按钮后随机生成背景颜色，并在页面标示HEX 颜色代码。',
    urlName: 'Color Flipper',
    summary:
      '1 使用getElement和querySelector进行element选择；<br>2 添加eventlistener并进行相应操作。'
  },
  {
    id: 8,
    name: 'React+Node.js+MongoDB–Keeper',
    tech: 'React',
    image: './image/KeeperApp.gif',
    link: 'https://21cloudocean.github.io/Dora-s-personal-webpage/',
    intro: '便签。点击后输入框展开，实时添加和删除便签，便签可以长久保存。',
    urlName: 'Keeper',
    summary:
      '1 使用React制作组件，并在不同组件间通过props传输数据和函数；<br>2 使用Hook实现用户与UI的实时互动；<br>3 MERN stack：将React与Node.js+express写成的server及MongoDB连接，实现前后端简单交互。'
  },
  {
    id: 9,
    name: 'CSS- float - Tea Station',
    tech: 'HTML&CSS',
    image: './image/tea-station-c.JPG',
    link: 'https://21cloudocean.github.io/tea-station-CSS/',
    intro: '茶公司产品介绍页。',
    urlName: 'Tea Station',
    summary:
      '1 使用CSS variable，设置global styles；<br>2 使用float和clearfix设置多列布局，使用media queries进行响应式布局；<br>3 使用animation。'
  },
  {
    id: 10,
    name: 'DOM – Countdown Timer',
    tech: 'JavaScript',
    image: './image/count-down-c.JPG',
    link: 'https://21cloudocean.github.io/CountdownTimer-Dom/',
    intro: '倒计时页。',
    urlName: 'Countdown Timer',
    summary:
      '1 使用Date()及其他获取时间的method；<br>2 使用模运算符进行剩余时间计算，使用forEach将剩余时间分配在不同单位的倒计时上；<br>3 获取用户打开页面的时间，使倒计时永不过时。'
  },
  {
    id: 11,
    name: 'DOM – Grocery Bud',
    tech: 'JavaScript',
    image: './image/grocery-bud.gif',
    link: 'https://21cloudocean.github.io/GroceryBud-DOM/',
    intro: '清单，可进行增删改。',
    urlName: 'Grocery Bud',
    summary:
      '1 编辑：使用一个Boolean variable识别是否为编辑状态；<br>2 提示栏：使用setTimeout管理提示栏的持续时间，根据输入状态改变提示栏内容和样式；<br>3 清单增删改：使用creatElement和appendChild增加item，removeChild移除item，使用forEach清空清单；<br>4 使用date和toString生成id，使用local storage。'
  },
  {
    id: 12,
    name: 'DOM – Menu',
    tech: 'JavaScript',
    image: './image/menu.gif',
    link: 'https://21cloudocean.github.io/Menu---DOM/',
    intro: '菜品展示，可点击按钮进行筛选。',
    urlName: 'Menu',
    summary:
      '1 使用DOMContentLoaded事件，使页面自动加载菜品；<br>2 使用reduce生成菜品类别，使用map生成按钮，通过filter实现筛选功能。'
  },
  {
    id: 13,
    name: 'flexbox – Backroads tour company',
    tech: 'HTML&CSS',
    image: './image/backroads-c.JPG',
    link: 'https://21cloudocean.github.io/Backroads-Tour-Company-CSS-flexbox/',
    intro: '旅游公司介绍页。',
    urlName: 'Backroads',
    summary:
      '1 使用position:flex设置网页布局；<br>2 响应式导航栏功能设置，使用height: auto调整大屏navbar的显示。'
  },
  {
    id: 14,
    name: 'Grid – Grid Mini Project',
    tech: 'HTML&CSS',
    image: './image/grid-mini-c.JPG',
    link: 'https://21cloudocean.github.io/Grid-Mini-Project/',
    intro: 'grid布局。',
    urlName: 'Grid Mini Project',
    summary:
      '1 让主页的navbar随屏幕大小变化；<br>2 card页卡片内部icon水平排列；卡片排布随屏幕大小变化；<br>3 tiles页图片响应式布局，大屏时使用grid-template-areas排布；<br>4 layout页通过给grid-line命名，实现大屏的特殊布局。'
  },
  {
    id: 15,
    name: 'Grid – Portfolio',
    tech: 'HTML&CSS',
    image: './image/JohnDoe-c.JPG',
    link: 'https://21cloudocean.github.io/portfolio-grid/',
    intro: '网络开发者个人主页。',
    urlName: 'Portfolio',
    summary:
      '1 使用grid制作响应式navbar和sidebar；<br>2 使用grid对图片进行特殊排布，hover时图片显示文字和背景颜色；<br>3 使用video作为背景，并使用clip-path规定轮廓形状；<br>4 使用grid在网页制作进度条和时间线；<br>5 使用backface-visibility和perspective制作有正反面、可旋转的卡片；<br>6 使用::before和::after，为图片增加底框装饰和overlay。'
  },
  {
    id: 16,
    name: 'Dark Mode',
    tech: 'JavaScript',
    image: './image/dark-mode.gif',
    link: 'https://21cloudocean.github.io/dark-mode-CSS-JS/',
    intro: '点击按钮，页面进入夜间模式。',
    urlName: 'Dark Mode',
    summary:
      '1 使用CSS variable进行夜间模式设置并通过JS实现切换；<br>2 使用map，根据data自动生成文章；<br>3 使用Moment.js对每篇文章的日期格式进行规范。'
  },
  {
    id: 17,
    name: 'Filters',
    tech: 'JavaScript',
    image: './image/filters.gif',
    link: 'https://21cloudocean.github.io/filters-JS/',
    intro: '用户可输入文字对商品进行检索，或通过点击按钮对商品进行分类检索。',
    urlName: 'Filters',
    summary:
      '1 使用spread operator对原数列进行复制；<br>2 使用keyup event实现文字检索；<br>3 使用set对分类进行保存，从而生成类别按钮。'
  },
  {
    id: 18,
    name: 'AJAX - Products',
    tech: 'JavaScript',
    image: './image/products.gif',
    link: 'https://21cloudocean.github.io/products-AJAX/index.html',
    intro:
      '使用API获得商品信息在主页生成商品列表，用户点击主页商品，可打开对应商品详情页。',
    urlName: 'Products',
    summary:
      '1 使用fetch()和async/await从API获取信息，加载中、加载成功、加载失败显示不同的效果；<br>2 将API中获取的商品ID用作query string parameter；<br>3 使用window.location.search和URLSearchParams获取query param，并使用get获取指定的parameter，从而实现在同一个HTML中显示不同商品内容的效果。'
  },
  {
    id: 19,
    name: 'Pagination',
    tech: 'JavaScript',
    image: './image/pagination.JPG',
    link: 'https://21cloudocean.github.io/pagination-JS/',
    intro: '查看关注用户，分页显示。',
    urlName: 'Pagination',
    summary:
      '1 使用fetch()和async/await从API获取信息后在HTML显示；<br>2 使用Array.from对用户进行切分，从而让每页只显示特定数量的用户；<br>3 使用.map()获取Array.from生成的array数量并显示为页码按钮；<br>4 使用ternary operator让当前页码显示不同效果，并通过e.target和data-index实现点击页码后跳转。'
  },
  {
    id: 20,
    name: 'comfy store',
    tech: 'JavaScript',
    image: './image/comfy-store-c.JPG',
    link: 'https://21cloudocean.github.io/comfy-store-JS/',
    intro:
      '由多个页面构成的电商网站。每个页面都可以调取购物车。点击商品详情按钮可进入商品详情页，点击购物车按钮可加购并更改购物车角标，在购物车中可查看商品总金额、删除商品、调整商品数量。购物车数据刷新和切换页面不会消失。',
    urlName: 'Comfy Store',
    summary:
      '1 使用fetch()和async/await从API获取信息后存入local storage，其余页面通过local storage获取商品信息；<br>2 使用data-id生成详情页、实现购物车对应商品的增删效果；<br>3使用local storage实现购物车数据跨页面不消失。'
  },
  {
    id: 21,
    name: 'vue - cart',
    tech: 'Vue',
    image: './image/vue-cart.gif',
    link: 'https://github.com/21cloudocean/demo-cart-vue3',
    intro: '购物车页面，可修改每件商品的数量、全选、实时计算商品数量和总金额。',
    urlName: 'vue cart',
    summary:
      '1 使用vite创建vue项目，创建并封装Header、Footer、Goods、Counter四个组件，使用bootstrap布置页面布局；<br>2 全局配置axios并通过created生命周期函数、async/await等获取商品数据；<br>3 通过自定义属性和自定义事件实现组件之间传值；<br>4 使用v-for渲染每件商品，并封装自定义属性id实现每件商品的选中效果；<br>5 使用watch侦听器监听输入框中数量的变化并将最新数据传递给商品组件。'
  },
  {
    id: 22,
    name: 'vue - table',
    tech: 'Vue',
    image: './image/vue-table.gif',
    link: 'https://github.com/21cloudocean/demo-table-vue3',
    intro: '商品管理表格，可为每个商品增加标签，以及删除商品。',
    urlName: 'vue table',
    summary:
      '1 vite创建项目，bootstrap布置页面布局，axios获取数据，props传值；<br>2 使用命名插槽显示表头，使用作用域插槽和v-for渲染表格内容；<br>3 v-for渲染商品tag，v-if和v-else实现输入框和按钮按需展示；<br>4 通过自定义指令使input自动获取焦点，blur事件提交input信息并展示；<br>5 绑定keyup，enter提交信息，esc清空输入框。'
  },
  {
    id: 23,
    name: 'Element UI - Users',
    tech: 'Vue',
    image: './image/vue-users.gif',
    link: 'https://github.com/21cloudocean/demo-users-vue2-elementUI',
    intro: '用户列表，可查看用户详情、添加、删除用户。',
    urlName: 'vue users',
    summary:
      '1 vue-cli创建项目，使用vue-router配置路由规则，并使用动态路由查看用户详情和删除用户；<br>2 通过axios获取和添加用户，通过proxy解决跨域问题；<br>3 通过axios拦截器实现Loading效果的添加和删除；<br>4 使用Element-ui组件库渲染页面的表格、按钮、表单和对话框；<br>5 通过Element-ui组件库中的Message和MessageBox对用户操作进行提示。'
  }
]
