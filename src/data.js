export const restaurants = [
  {
    id: 'r1',
    name: '阳光小馆',
    category: '中式快餐',
    description: '经典快餐组合，营养均衡，适合学生与上班族。',
    opening: '上午10:30 - 晚上21:30',
    delivery: '满20元起送，预计30分钟送达',
    menu: [
      { id: 'd101', name: '宫保鸡丁', description: '微辣鸡丁，花生香脆', price: 28 },
      { id: 'd102', name: '番茄炒蛋', description: '家常风味，酸甜开胃', price: 22 },
      { id: 'd103', name: '红烧狮子头', description: '汤汁浓郁，软糯入味', price: 36 },
      { id: 'd104', name: '青菜豆腐汤', description: '清爽配餐，滋补不油腻', price: 12 },
    ],
  },
  {
    id: 'r2',
    name: '小镇披萨屋',
    category: '西式轻食',
    description: '手工披萨与意面，满足多种口味。',
    opening: '上午11:00 - 晚上22:00',
    delivery: '全国配送，预计40分钟送达',
    menu: [
      { id: 'd201', name: '玛格丽特披萨', description: '经典芝士与番茄酱', price: 48 },
      { id: 'd202', name: '培根意面', description: '烟熏培根搭配奶油酱', price: 42 },
      { id: 'd203', name: '凯撒沙拉', description: '新鲜生菜与香脆面包丁', price: 28 },
      { id: 'd204', name: '奶油蘑菇汤', description: '浓郁蘑菇风味，暖胃首选', price: 18 },
    ],
  },
  {
    id: 'r3',
    name: '健康轻食',
    category: '沙拉 / 养生',
    description: '低脂轻食，适合减脂族与健康饮食。',
    opening: '上午09:30 - 晚上20:30',
    delivery: '满30元起送，预计35分钟送达',
    menu: [
      { id: 'd301', name: '鸡胸肉凯撒沙拉', description: '高蛋白低脂，清爽饱腹', price: 38 },
      { id: 'd302', name: '牛油果蔬菜卷', description: '丰富蔬菜与香浓牛油果', price: 32 },
      { id: 'd303', name: '藜麦水果碗', description: '营养均衡，酸甜可口', price: 30 },
      { id: 'd304', name: '柠檬姜茶', description: '暖身解腻，清新不甜', price: 14 },
    ],
  },
];
