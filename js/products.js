const products = [
    {
        id: 1,
        name: '农夫山泉矿泉水',
        category: 'food',
        price: 12.00,
        originalPrice: 15.00,
        unit: '箱',
        minOrder: 10,
        sales: 1250,
        stock: 500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mineral%20water%20bottles%20pack%20product%20photo&image_size=square',
        description: '天然矿泉水，源自深山，口感清甜，富含多种矿物质。每箱24瓶，每瓶550ml。',
        specifications: [
            { name: '规格', value: '550ml*24瓶/箱' },
            { name: '保质期', value: '24个月' },
            { name: '产地', value: '浙江杭州' },
            { name: '储存条件', value: '常温避光' }
        ]
    },
    {
        id: 2,
        name: '可口可乐饮料',
        category: 'food',
        price: 45.00,
        originalPrice: 55.00,
        unit: '箱',
        minOrder: 5,
        sales: 890,
        stock: 300,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coca%20cola%20drink%20cans%20pack%20product%20photo&image_size=square',
        description: '经典碳酸饮料，清爽解渴。每箱24罐，每罐330ml。',
        specifications: [
            { name: '规格', value: '330ml*24罐/箱' },
            { name: '保质期', value: '12个月' },
            { name: '产地', value: '上海' },
            { name: '储存条件', value: '冷藏更佳' }
        ]
    },
    {
        id: 3,
        name: '维达纸巾',
        category: 'daily',
        price: 28.00,
        originalPrice: 35.00,
        unit: '提',
        minOrder: 20,
        sales: 2100,
        stock: 800,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tissue%20paper%20pack%20product%20photo&image_size=square',
        description: '原木浆材质，柔软亲肤，四层加厚，吸水性强。每提10包，每包100抽。',
        specifications: [
            { name: '规格', value: '100抽*10包/提' },
            { name: '层数', value: '四层' },
            { name: '原料', value: '原木浆' },
            { name: '适用', value: '家庭日常' }
        ]
    },
    {
        id: 4,
        name: '蓝月亮洗衣液',
        category: 'daily',
        price: 35.00,
        originalPrice: 45.00,
        unit: '瓶',
        minOrder: 15,
        sales: 1560,
        stock: 400,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laundry%20detergent%20bottle%20product%20photo&image_size=square',
        description: '深层洁净，护色护衣，温和配方，适合各种衣物。每瓶2kg。',
        specifications: [
            { name: '规格', value: '2kg/瓶' },
            { name: '香型', value: '薰衣草' },
            { name: '适用', value: '棉、麻、化纤等' },
            { name: '保质期', value: '3年' }
        ]
    },
    {
        id: 5,
        name: '小米充电宝',
        category: 'electronics',
        price: 68.00,
        originalPrice: 89.00,
        unit: '个',
        minOrder: 10,
        sales: 780,
        stock: 250,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=power%20bank%20product%20photo%20white%20background&image_size=square',
        description: '10000mAh大容量，支持快充，轻薄便携，双USB输出。',
        specifications: [
            { name: '容量', value: '10000mAh' },
            { name: '输出', value: '5V/2.1A' },
            { name: '输入', value: '5V/2A' },
            { name: '尺寸', value: '145*73*15mm' }
        ]
    },
    {
        id: 6,
        name: '华为数据线',
        category: 'electronics',
        price: 15.00,
        originalPrice: 25.00,
        unit: '条',
        minOrder: 50,
        sales: 3400,
        stock: 1000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=usb%20type%20c%20cable%20product%20photo&image_size=square',
        description: 'Type-C数据线，支持快充，编织材质，耐用不易断。长度1.5米。',
        specifications: [
            { name: '接口', value: 'Type-C' },
            { name: '长度', value: '1.5米' },
            { name: '材质', value: '编织' },
            { name: '支持', value: '快充' }
        ]
    },
    {
        id: 7,
        name: '纯棉T恤',
        category: 'clothing',
        price: 18.00,
        originalPrice: 28.00,
        unit: '件',
        minOrder: 100,
        sales: 5600,
        stock: 2000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plain%20cotton%20t-shirt%20product%20photo&image_size=square',
        description: '100%纯棉面料，舒适透气，简约百搭。多色可选，S-XXL尺码齐全。',
        specifications: [
            { name: '面料', value: '100%棉' },
            { name: '颜色', value: '白、黑、灰、蓝、红' },
            { name: '尺码', value: 'S/M/L/XL/XXL' },
            { name: '克重', value: '180g' }
        ]
    },
    {
        id: 8,
        name: '劳保手套',
        category: 'clothing',
        price: 8.00,
        originalPrice: 12.00,
        unit: '打',
        minOrder: 50,
        sales: 8900,
        stock: 5000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=work%20gloves%20product%20photo&image_size=square',
        description: '耐磨防滑，透气舒适，适用于工地、工厂等多种场景。每打12双。',
        specifications: [
            { name: '材质', value: '尼龙+乳胶' },
            { name: '规格', value: '12双/打' },
            { name: '颜色', value: '米黄' },
            { name: '适用', value: '劳保防护' }
        ]
    },
    {
        id: 9,
        name: '扳手套装',
        category: 'hardware',
        price: 65.00,
        originalPrice: 85.00,
        unit: '套',
        minOrder: 10,
        sales: 450,
        stock: 200,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wrench%20set%20tools%20product%20photo&image_size=square',
        description: '碳钢材质，坚固耐用，多规格组合，满足各种维修需求。包含10件不同规格扳手。',
        specifications: [
            { name: '材质', value: '碳钢' },
            { name: '数量', value: '10件/套' },
            { name: '规格', value: '6-22mm' },
            { name: '包装', value: '工具箱' }
        ]
    },
    {
        id: 10,
        name: '螺丝刀套装',
        category: 'hardware',
        price: 35.00,
        originalPrice: 48.00,
        unit: '套',
        minOrder: 20,
        sales: 1200,
        stock: 500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=screwdriver%20set%20tools%20product%20photo&image_size=square',
        description: '多功能螺丝刀套装，包含十字、一字、梅花等多种批头，磁性设计，使用方便。',
        specifications: [
            { name: '材质', value: 'CR-V钢' },
            { name: '数量', value: '24件/套' },
            { name: '类型', value: '十字/一字/梅花' },
            { name: '特点', value: '磁性批头' }
        ]
    },
    {
        id: 11,
        name: '康师傅方便面',
        category: 'food',
        price: 32.00,
        originalPrice: 40.00,
        unit: '箱',
        minOrder: 10,
        sales: 4500,
        stock: 1500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=instant%20noodles%20box%20product%20photo&image_size=square',
        description: '经典口味，方便快捷，适合家庭常备或办公加餐。每箱24包。',
        specifications: [
            { name: '规格', value: '120g*24包/箱' },
            { name: '口味', value: '红烧牛肉/香辣牛肉' },
            { name: '保质期', value: '6个月' },
            { name: '食用方式', value: '开水冲泡' }
        ]
    },
    {
        id: 12,
        name: '金龙鱼食用油',
        category: 'food',
        price: 68.00,
        originalPrice: 85.00,
        unit: '桶',
        minOrder: 5,
        sales: 890,
        stock: 300,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cooking%20oil%20bottle%20product%20photo&image_size=square',
        description: '非转基因大豆油，营养健康，适合各种烹饪方式。每桶5L。',
        specifications: [
            { name: '规格', value: '5L/桶' },
            { name: '类型', value: '大豆油' },
            { name: '转基因', value: '非转基因' },
            { name: '保质期', value: '18个月' }
        ]
    }
];

function getProductById(id) {
    return products.find(p => p.id === parseInt(id));
}

function getProductsByCategory(category) {
    if (category === 'all') return products;
    return products.filter(p => p.category === category);
}