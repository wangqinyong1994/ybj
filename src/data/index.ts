// 网站配置
export const siteConfig = {
  name: '优保洁居家服务',
  description: '专业新房开荒、深度保洁、甲醛治理服务',
  phone: '400-XXX-XXXX',
  wechat: 'youbaojie_service',
  address: 'XX省XX市XX区XX路XX号',
  workTime: '周一至周日 8:00-20:00',
}

// 服务类型
export const services = [
  {
    id: 'xinfang-kaihuang',
    name: '新房开荒',
    shortDesc: '装修后首次清洁，让新家焕然一新',
    description: '专业新房开荒保洁服务，针对装修后的房屋进行全面清洁，去除装修残留的灰尘、胶渍、油漆点等，让您的新家从零开始守护健康。',
    icon: '🏠',
    image: '/images/service-kaihuang.jpg',
    features: [
      '全屋除尘除胶',
      '玻璃门窗清洁',
      '厨卫深度清洁',
      '地面清洁养护',
      '灯具开关清洁',
      '踢脚线清洁',
    ],
    process: [
      { step: 1, title: '预约上门', desc: '电话/微信预约，确认服务时间' },
      { step: 2, title: '勘察评估', desc: '上门查看房屋情况，评估清洁难度' },
      { step: 3, title: '报价确认', desc: '出具详细报价单，双方确认' },
      { step: 4, title: '施工清洁', desc: '专业团队进场，标准化流程作业' },
      { step: 5, title: '验收交付', desc: '客户验收确认，满意后付款' },
    ],
    faq: [
      { q: '新房开荒需要多长时间？', a: '根据房屋面积和装修程度，一般需要4-8小时。100平米左右的房屋约需4-6小时。' },
      { q: '需要自己准备清洁工具吗？', a: '不需要，我们提供所有专业清洁工具和环保清洁剂，您只需在现场验收即可。' },
      { q: '开荒后多久可以入住？', a: '开荒清洁后建议通风2-3天再入住，如需甲醛治理服务可一并预约。' },
      { q: '周末可以预约吗？', a: '可以，我们全年无休，周末和节假日均可预约服务。' },
    ],
  },
  {
    id: 'shendu-baojie',
    name: '深度保洁',
    shortDesc: '彻底清洁家中顽固污渍',
    description: '专业深度保洁服务，针对日常清洁难以处理的顽固污渍、油垢、水垢等进行彻底清洁，让您的家焕然一新。',
    icon: '✨',
    image: '/images/service-baojie.jpg',
    features: [
      '厨房油烟清洁',
      '卫生间水垢清洁',
      '窗户死角清洁',
      '家电表面清洁',
      '家具除尘除螨',
      '地板打蜡养护',
    ],
    process: [
      { step: 1, title: '预约上门', desc: '电话/微信预约，确认服务时间' },
      { step: 2, title: '需求沟通', desc: '了解重点清洁区域和特殊需求' },
      { step: 3, title: '报价确认', desc: '根据清洁难度出具报价' },
      { step: 4, title: '深度清洁', desc: '专业工具+环保药剂深度作业' },
      { step: 5, title: '验收交付', desc: '客户验收确认，满意后付款' },
    ],
    faq: [
      { q: '深度保洁和日常保洁有什么区别？', a: '深度保洁针对日常难以清洁的顽固污渍，使用专业工具和药剂，清洁更彻底，一般建议半年或一年做一次。' },
      { q: '深度保洁会损坏家具吗？', a: '不会，我们使用环保清洁剂，对家具无腐蚀，专业人员操作，安全可靠。' },
      { q: '厨房油烟机清洗包括在服务内吗？', a: '厨房深度清洁包括油烟机表面清洁，如需拆洗油烟机内部，需另外收费。' },
    ],
  },
  {
    id: 'jiaquan-zhili',
    name: '甲醛治理',
    shortDesc: '科学除醛，健康入住',
    description: '专业甲醛治理服务，采用科学除醛技术，从源头治理甲醛污染，治理后可达标入住，提供专业检测报告。',
    icon: '🌿',
    image: '/images/service-jiaquan.jpg',
    features: [
      '专业甲醛检测',
      '源头催化分解',
      '光触媒治理',
      '臭氧消毒杀菌',
      '长效净化涂层',
      '复检达标入住',
    ],
    process: [
      { step: 1, title: '预约检测', desc: '预约上门检测，了解甲醛浓度' },
      { step: 2, title: '制定方案', desc: '根据检测结果制定治理方案' },
      { step: 3, title: '报价确认', desc: '出具详细报价，双方确认' },
      { step: 4, title: '治理施工', desc: '专业团队进场，多道工序治理' },
      { step: 5, title: '复检交付', desc: '7-15天后复检，达标后交付' },
    ],
    faq: [
      { q: '甲醛治理后多久可以入住？', a: '治理完成后通风7-15天，复检达标后即可安全入住。' },
      { q: '甲醛治理效果能维持多久？', a: '我们采用源头治理技术，效果可持续10年以上，提供质保服务。' },
      { q: '治理过程需要家人搬出去吗？', a: '是的，治理当天需要人员离开，治理后通风7-15天，期间不建议居住。' },
      { q: '有检测报告吗？', a: '有的，治理前后均提供专业CMA检测报告，数据真实可靠。' },
    ],
  },
]

// 服务承诺
export const promises = [
  { icon: '✓', title: '专业团队', desc: '所有人员经过专业培训，持证上岗' },
  { icon: '✓', title: '标准流程', desc: '标准化作业流程，服务质量有保障' },
  { icon: '✓', title: '环保材料', desc: '使用环保清洁剂，对家人无害' },
  { icon: '✓', title: '价格透明', desc: '明码标价，无隐形消费' },
  { icon: '✓', title: '7天返工', desc: '7天内不满意免费返工' },
  { icon: '✓', title: '保险保障', desc: '服务过程有保险，放心无忧' },
]

// 服务流程
export const serviceProcess = [
  { step: 1, title: '在线预约', desc: '填写预约信息或电话咨询' },
  { step: 2, title: '电话确认', desc: '客服确认需求和时间' },
  { step: 3, title: '上门服务', desc: '专业人员准时上门' },
  { step: 4, title: '验收付款', desc: '验收满意后付款' },
  { step: 5, title: '售后保障', desc: '7天内不满意免费返工' },
]

// 用户评价
export const reviews = [
  {
    id: 1,
    name: '张先生',
    source: '微信客户反馈',
    rating: 5,
    content: '新房装修后灰尘很多，自己根本打扫不干净。请了优保洁的专业团队，效果非常好，特别是窗户和玻璃，简直焕然一新！',
    service: '新房开荒',
  },
  {
    id: 2,
    name: '李女士',
    source: '大众点评',
    rating: 5,
    content: '厨房油烟机用了好几年从来没深度清洁过，这次请了深度保洁，师傅很专业，清洁后跟新的一样，强烈推荐！',
    service: '深度保洁',
  },
  {
    id: 3,
    name: '王先生',
    source: '微信客户反馈',
    rating: 5,
    content: '家里有小孩，对甲醛特别在意。做完甲醛治理后，检测报告显示达标了，心里踏实多了，服务很专业。',
    service: '甲醛治理',
  },
  {
    id: 4,
    name: '陈女士',
    source: '老客户推荐',
    rating: 5,
    content: '已经是第二次预约了，每次服务都很满意。师傅准时到达，做事认真细致，价格也合理。',
    service: '深度保洁',
  },
]

// 案例数据
export const cases = [
  {
    id: 1,
    title: 'XX小区新房开荒',
    type: 'xinfang-kaihuang',
    typeName: '新房开荒',
    area: 120,
    location: 'XX区',
    date: '2024-01-15',
    duration: '6小时',
    before: '/images/case-1-before.jpg',
    after: '/images/case-1-after.jpg',
    description: '全屋除尘除胶、玻璃门窗清洁、厨卫深度清洁、地面清洁养护',
    review: '效果非常满意，窗户和玻璃干净透亮，师傅很专业！',
  },
  {
    id: 2,
    title: 'XX花园深度保洁',
    type: 'shendu-baojie',
    typeName: '深度保洁',
    area: 89,
    location: 'XX区',
    date: '2024-01-12',
    duration: '4小时',
    before: '/images/case-2-before.jpg',
    after: '/images/case-2-after.jpg',
    description: '厨房油烟清洁、卫生间水垢清洁、窗户死角清洁',
    review: '厨房和卫生间清洁得太干净了，比我自己弄的好太多了！',
  },
  {
    id: 3,
    title: 'XX公馆甲醛治理',
    type: 'jiaquan-zhili',
    typeName: '甲醛治理',
    area: 200,
    location: 'XX区',
    date: '2024-01-10',
    duration: '8小时',
    before: '/images/case-3-before.jpg',
    after: '/images/case-3-after.jpg',
    description: '全屋甲醛检测、源头催化分解、光触媒治理、复检达标',
    review: '治理后检测达标了，可以放心入住，服务很专业。',
  },
  {
    id: 4,
    title: 'XX小区新房开荒',
    type: 'xinfang-kaihuang',
    typeName: '新房开荒',
    area: 150,
    location: 'XX区',
    date: '2024-01-08',
    duration: '8小时',
    before: '/images/case-4-before.jpg',
    after: '/images/case-4-after.jpg',
    description: '全屋除尘除胶、玻璃门窗清洁、厨卫深度清洁、地面清洁养护',
    review: '新房装修后清洁太重要了，请专业团队做省心省力！',
  },
  {
    id: 5,
    title: 'XX公寓深度保洁',
    type: 'shendu-baojie',
    typeName: '深度保洁',
    area: 75,
    location: 'XX区',
    date: '2024-01-05',
    duration: '3小时',
    before: '/images/case-5-before.jpg',
    after: '/images/case-5-after.jpg',
    description: '全屋深度清洁、厨房油烟清洁、卫生间水垢清洁',
    review: '出租房退房前做的清洁，房东很满意，押金全退了！',
  },
  {
    id: 6,
    title: 'XX别墅甲醛治理',
    type: 'jiaquan-zhili',
    typeName: '甲醛治理',
    area: 350,
    location: 'XX区',
    date: '2024-01-03',
    duration: '12小时',
    before: '/images/case-6-before.jpg',
    after: '/images/case-6-after.jpg',
    description: '全屋甲醛检测、源头催化分解、光触媒治理、臭氧消毒、复检达标',
    review: '别墅面积大，师傅们加班做完的，很敬业，检测达标才交付。',
  },
]

// 文章分类
export const blogCategories = [
  { id: 'all', name: '全部' },
  { id: 'xinfang-kaihuang', name: '新房开荒' },
  { id: 'shendu-baojie', name: '深度保洁' },
  { id: 'jiaquan-zhili', name: '甲醛治理' },
  { id: 'shenghuo-jiqiao', name: '生活技巧' },
]

// 文章数据
export const blogs = [
  {
    id: 1,
    title: '新房开荒必看！装修后清洁全攻略',
    slug: 'xinfang-kaihuang-quan-gonglve',
    category: 'xinfang-kaihuang',
    categoryName: '新房开荒',
    date: '2024-01-15',
    views: 1234,
    summary: '装修完成后，很多业主都面临着如何清洁新房的问题。本文将详细介绍新房开荒的重要性、清洁步骤和注意事项。',
    content: `
## 一、什么是新房开荒

新房开荒是指房屋装修后的首次清洁工作。装修过程中会产生大量的灰尘、胶渍、油漆点等污渍，这些污渍如果不及时清理，不仅影响美观，还可能影响居住健康。

## 二、为什么要做新房开荒

装修过程中会产生各种污染物：

- **灰尘**：装修材料切割、打磨产生大量粉尘
- **胶渍**：地板、门窗安装残留的胶
- **油漆点**：墙面刷漆时飞溅的油漆点
- **水泥渍**：贴砖时残留的水泥

这些污染物如果自己清洁，不仅费时费力，还可能损坏装修材料。

## 三、新房开荒的步骤

### 1. 粗清洁
先清理大件垃圾和装修废料，用吸尘器清理地面和大面积灰尘。

### 2. 除胶除漆
使用专业除胶剂清理地板、门窗上的胶渍和油漆点。

### 3. 玻璃清洁
清洁窗户玻璃、窗框、纱窗等。

### 4. 厨卫清洁
厨房和卫生间是重点区域，需要深度清洁。

### 5. 地面清洁
最后进行地面清洁和养护。

## 四、注意事项

1. 开荒前先通风散味
2. 准备好专业清洁工具
3. 按照从上到下、从里到外的顺序
4. 注意保护已清洁的区域
5. 使用环保清洁剂

## 五、建议

如果装修程度较重，建议请专业开荒保洁公司进行清洁，既省心省力，又能保证清洁效果。
    `,
    image: '/images/blog-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: '深度保洁和日常保洁有什么区别？',
    slug: 'shendu-baojie-vs-richang-baojie',
    category: 'shendu-baojie',
    categoryName: '深度保洁',
    date: '2024-01-10',
    views: 856,
    summary: '很多朋友问，深度保洁到底有多深？和日常保洁有什么区别？本文将详细解答这个问题。',
    content: `
## 什么是日常保洁

日常保洁是指日常的清洁维护工作，包括：

- 扫地、拖地
- 擦桌子、擦柜子
- 清理垃圾
- 简单的厨房、卫生间清洁

日常保洁的目的是保持家庭基本整洁，一般每周做1-2次。

## 什么是深度保洁

深度保洁是指对家庭进行彻底、全面的清洁，针对日常保洁难以处理的：

- 厨房油烟机、灶台油垢
- 卫生间水垢、霉斑
- 窗户死角、纱窗灰尘
- 家具底部、床底积灰
- 家电表面清洁

深度保洁一般建议半年或一年做一次。

## 主要区别

| 对比项 | 日常保洁 | 深度保洁 |
|--------|----------|----------|
| 频率 | 每周1-2次 | 半年或一年1次 |
| 时间 | 1-2小时 | 4-8小时 |
| 工具 | 基本清洁工具 | 专业工具+清洁剂 |
| 重点 | 表面清洁 | 顽固污渍、死角 |
| 目的 | 保持整洁 | 彻底清洁 |

## 建议

日常保洁自己动手即可，深度保洁建议请专业公司，效果更好也更省心。
    `,
    image: '/images/blog-2.jpg',
    featured: false,
  },
  {
    id: 3,
    title: '甲醛治理的常见误区，你中了几个？',
    slug: 'jiaquan-zhili-wuqu',
    category: 'jiaquan-zhili',
    categoryName: '甲醛治理',
    date: '2024-01-08',
    views: 1023,
    summary: '关于甲醛，网上流传着很多说法，哪些是对的？哪些是误区？本文为您一一解答。',
    content: `
## 误区一：新房通风半年就能入住

**真相**：甲醛释放周期长达3-15年，通风半年只能说降低了甲醛浓度，但不能保证达标。

建议：入住前做一次专业甲醛检测，数据说话。

## 误区二：放几盆绿植就能除甲醛

**真相**：绿植确实能吸收甲醛，但效率极低。一间房放几十盆绿植才有一点点效果。

建议：绿植可以作为辅助，但不能作为主要除甲醛方式。

## 误区三：活性炭除甲醛效果好

**真相**：活性炭能吸附甲醛，但很快就会饱和，饱和后还会重新释放甲醛。

建议：活性炭需要定期更换，否则可能造成二次污染。

## 误区四：闻不到味道就没有甲醛

**真相**：甲醛浓度超标2-3倍时，人是闻不到明显气味的。能闻到味道时，甲醛可能已经严重超标了。

建议：不要靠嗅觉判断，要做专业检测。

## 误区五：甲醛治理一次就永久有效

**真相**：甲醛治理可以大幅降低甲醛浓度，但不能保证永远达标。后续新添家具、装修等还可能带来新的甲醛。

建议：治理后定期检测，保持通风。

## 正确做法

1. 入住前做专业甲醛检测
2. 超标则请专业公司治理
3. 选择正规公司，索要检测报告
4. 治理后通风7-15天
5. 复检达标后入住
    `,
    image: '/images/blog-3.jpg',
    featured: false,
  },
  {
    id: 4,
    title: '冬季家庭清洁保养小技巧',
    slug: 'dongji-qingjie-baoyang',
    category: 'shenghuo-jiqiao',
    categoryName: '生活技巧',
    date: '2024-01-05',
    views: 654,
    summary: '冬季气候干燥，家庭清洁保养有一些小技巧，掌握这些可以让家里更舒适。',
    content: `
## 冬季清洁注意事项

### 1. 地板保养

冬季气候干燥，地板容易开裂。建议：

- 保持室内湿度40%-60%
- 减少拖地频率
- 使用微湿拖把，避免过湿
- 定期打蜡保养

### 2. 玻璃清洁

冬季玻璃容易起雾，清洁时注意：

- 使用温水加少量洗洁精
- 用报纸擦干效果更好
- 避免使用冷水，容易结冰

### 3. 家具保养

冬季家具保养要点：

- 避免暖气直吹
- 定期用柔软布擦拭
- 木质家具可涂护理油
- 皮沙发避免暴晒

### 4. 卫生间清洁

冬季卫生间要注意：

- 保持通风，防止霉变
- 定期清理地漏
- 镜面可涂肥皂水防雾

## 冬季清洁小妙招

1. **去除静电**：用柔顺剂稀释后擦拭家具
2. **去除油污**：温水加小苏打效果更好
3. **去除水垢**：白醋浸泡后擦拭
4. **去除霉斑**：84消毒液稀释后擦拭

希望这些小技巧对您有帮助！
    `,
    image: '/images/blog-4.jpg',
    featured: false,
  },
  {
    id: 5,
    title: '新房开荒清洁工具清单',
    slug: 'xinfang-kaihuang-gongju',
    category: 'xinfang-kaihuang',
    categoryName: '新房开荒',
    date: '2024-01-03',
    views: 789,
    summary: '准备自己动手做新房开荒？这份工具清单请收好！',
    content: `
## 必备工具清单

### 清洁工具

1. **吸尘器** - 用于清理大面积灰尘
2. **扫帚、簸箕** - 清理大件垃圾
3. **拖把** - 地面清洁
4. **玻璃刮** - 玻璃清洁必备
5. **清洁布** - 准备多块不同用途的
6. **钢丝球** - 清理顽固污渍
7. **小铲刀** - 铲除胶渍、油漆点
8. **牙刷** - 清理缝隙
9. **梯子** - 清理高处

### 清洁剂

1. **全能清洁剂** - 通用清洁
2. **玻璃清洁剂** - 玻璃、镜面
3. **除胶剂** - 清理胶渍
4. **洁厕剂** - 卫生间清洁
5. **油烟净** - 厨房清洁

### 防护用品

1. **手套** - 保护双手
2. **口罩** - 防止吸入灰尘
3. **护目镜** - 保护眼睛
4. **工作服** - 避免弄脏衣服

## 建议

如果清洁面积大、装修程度重，建议请专业保洁公司，他们有更专业的工具和经验。
    `,
    image: '/images/blog-5.jpg',
    featured: false,
  },
]

// 公司数据
export const companyInfo = {
  name: '优保洁居家服务',
  founded: '2018年',
  serviceCount: '5000+',
  satisfactionRate: '99%',
  experience: '6年',
  responseTime: '24小时',
  description: '优保洁居家服务成立于2018年，专注于新房开荒、深度保洁、甲醛治理等居家服务。多年来服务超过5000户家庭，赢得客户一致好评。我们秉承"专业、诚信、品质"的服务理念，为客户提供高品质的居家服务。',
  advantages: [
    { title: '专业团队', value: '6年', desc: '行业经验' },
    { title: '服务家庭', value: '5000+', desc: '累计服务' },
    { title: '好评率', value: '99%', desc: '客户满意' },
    { title: '响应时间', value: '24小时', desc: '快速响应' },
  ],
  certificates: [
    { name: '营业执照', image: '/images/cert-1.jpg' },
    { name: '保洁服务资质', image: '/images/cert-2.jpg' },
    { name: '甲醛治理资质', image: '/images/cert-3.jpg' },
    { name: 'ISO认证', image: '/images/cert-4.jpg' },
  ],
}
