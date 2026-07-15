const products = [
    {
        id: 1,
        name: '鍐滃か灞辨硥鐭挎硥姘?,
        category: 'food',
        price: 12.00,
        originalPrice: 15.00,
        unit: '绠?,
        minOrder: 10,
        sales: 1250,
        stock: 500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mineral%20water%20bottles%20pack%20product%20photo&image_size=square',
        description: '澶╃劧鐭挎硥姘达紝婧愯嚜娣卞北锛屽彛鎰熸竻鐢滐紝瀵屽惈澶氱鐭跨墿璐ㄣ€傛瘡绠?4鐡讹紝姣忕摱550ml銆?,
        specifications: [
            { name: '瑙勬牸', value: '550ml*24鐡?绠? },
            { name: '淇濊川鏈?, value: '24涓湀' },
            { name: '浜у湴', value: '娴欐睙鏉窞' },
            { name: '鍌ㄥ瓨鏉′欢', value: '甯告俯閬垮厜' }
        ]
    },
    {
        id: 2,
        name: '鍙彛鍙箰楗枡',
        category: 'food',
        price: 45.00,
        originalPrice: 55.00,
        unit: '绠?,
        minOrder: 5,
        sales: 890,
        stock: 300,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coca%20cola%20drink%20cans%20pack%20product%20photo&image_size=square',
        description: '缁忓吀纰抽吀楗枡锛屾竻鐖借В娓淬€傛瘡绠?4缃愶紝姣忕綈330ml銆?,
        specifications: [
            { name: '瑙勬牸', value: '330ml*24缃?绠? },
            { name: '淇濊川鏈?, value: '12涓湀' },
            { name: '浜у湴', value: '涓婃捣' },
            { name: '鍌ㄥ瓨鏉′欢', value: '鍐疯棌鏇翠匠' }
        ]
    },
    {
        id: 3,
        name: '缁磋揪绾稿肪',
        category: 'daily',
        price: 28.00,
        originalPrice: 35.00,
        unit: '鎻?,
        minOrder: 20,
        sales: 2100,
        stock: 800,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tissue%20paper%20pack%20product%20photo&image_size=square',
        description: '鍘熸湪娴嗘潗璐紝鏌旇蒋浜茶偆锛屽洓灞傚姞鍘氾紝鍚告按鎬у己銆傛瘡鎻?0鍖咃紝姣忓寘100鎶姐€?,
        specifications: [
            { name: '瑙勬牸', value: '100鎶?10鍖?鎻? },
            { name: '灞傛暟', value: '鍥涘眰' },
            { name: '鍘熸枡', value: '鍘熸湪娴? },
            { name: '閫傜敤', value: '瀹跺涵鏃ュ父' }
        ]
    },
    {
        id: 4,
        name: '钃濇湀浜礂琛ｆ恫',
        category: 'daily',
        price: 35.00,
        originalPrice: 45.00,
        unit: '鐡?,
        minOrder: 15,
        sales: 1560,
        stock: 400,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laundry%20detergent%20bottle%20product%20photo&image_size=square',
        description: '娣卞眰娲佸噣锛屾姢鑹叉姢琛ｏ紝娓╁拰閰嶆柟锛岄€傚悎鍚勭琛ｇ墿銆傛瘡鐡?kg銆?,
        specifications: [
            { name: '瑙勬牸', value: '2kg/鐡? },
            { name: '棣欏瀷', value: '钖拌。鑽? },
            { name: '閫傜敤', value: '妫夈€侀夯銆佸寲绾ょ瓑' },
            { name: '淇濊川鏈?, value: '3骞? }
        ]
    },
    {
        id: 5,
        name: '灏忕背鍏呯數瀹?,
        category: 'electronics',
        price: 68.00,
        originalPrice: 89.00,
        unit: '涓?,
        minOrder: 10,
        sales: 780,
        stock: 250,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=power%20bank%20product%20photo%20white%20background&image_size=square',
        description: '10000mAh澶у閲忥紝鏀寔蹇厖锛岃交钖勪究鎼猴紝鍙孶SB杈撳嚭銆?,
        specifications: [
            { name: '瀹归噺', value: '10000mAh' },
            { name: '杈撳嚭', value: '5V/2.1A' },
            { name: '杈撳叆', value: '5V/2A' },
            { name: '灏哄', value: '145*73*15mm' }
        ]
    },
    {
        id: 6,
        name: '鍗庝负鏁版嵁绾?,
        category: 'electronics',
        price: 15.00,
        originalPrice: 25.00,
        unit: '鏉?,
        minOrder: 50,
        sales: 3400,
        stock: 1000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=usb%20type%20c%20cable%20product%20photo&image_size=square',
        description: 'Type-C鏁版嵁绾匡紝鏀寔蹇厖锛岀紪缁囨潗璐紝鑰愮敤涓嶆槗鏂€傞暱搴?.5绫炽€?,
        specifications: [
            { name: '鎺ュ彛', value: 'Type-C' },
            { name: '闀垮害', value: '1.5绫? },
            { name: '鏉愯川', value: '缂栫粐' },
            { name: '鏀寔', value: '蹇厖' }
        ]
    },
    {
        id: 7,
        name: '绾T鎭?,
        category: 'clothing',
        price: 18.00,
        originalPrice: 28.00,
        unit: '浠?,
        minOrder: 100,
        sales: 5600,
        stock: 2000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=plain%20cotton%20t-shirt%20product%20photo&image_size=square',
        description: '100%绾闈㈡枡锛岃垝閫傞€忔皵锛岀畝绾︾櫨鎼€傚鑹插彲閫夛紝S-XXL灏虹爜榻愬叏銆?,
        specifications: [
            { name: '闈㈡枡', value: '100%妫? },
            { name: '棰滆壊', value: '鐧姐€侀粦銆佺伆銆佽摑銆佺孩' },
            { name: '灏虹爜', value: 'S/M/L/XL/XXL' },
            { name: '鍏嬮噸', value: '180g' }
        ]
    },
    {
        id: 8,
        name: '鍔充繚鎵嬪',
        category: 'clothing',
        price: 8.00,
        originalPrice: 12.00,
        unit: '鎵?,
        minOrder: 50,
        sales: 8900,
        stock: 5000,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=work%20gloves%20product%20photo&image_size=square',
        description: '鑰愮（闃叉粦锛岄€忔皵鑸掗€傦紝閫傜敤浜庡伐鍦般€佸伐鍘傜瓑澶氱鍦烘櫙銆傛瘡鎵?2鍙屻€?,
        specifications: [
            { name: '鏉愯川', value: '灏奸緳+涔宠兌' },
            { name: '瑙勬牸', value: '12鍙?鎵? },
            { name: '棰滆壊', value: '绫抽粍' },
            { name: '閫傜敤', value: '鍔充繚闃叉姢' }
        ]
    },
    {
        id: 9,
        name: '鎵虫墜濂楄',
        category: 'hardware',
        price: 65.00,
        originalPrice: 85.00,
        unit: '濂?,
        minOrder: 10,
        sales: 450,
        stock: 200,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wrench%20set%20tools%20product%20photo&image_size=square',
        description: '纰抽挗鏉愯川锛屽潥鍥鸿€愮敤锛屽瑙勬牸缁勫悎锛屾弧瓒冲悇绉嶇淮淇渶姹傘€傚寘鍚?0浠朵笉鍚岃鏍兼壋鎵嬨€?,
        specifications: [
            { name: '鏉愯川', value: '纰抽挗' },
            { name: '鏁伴噺', value: '10浠?濂? },
            { name: '瑙勬牸', value: '6-22mm' },
            { name: '鍖呰', value: '宸ュ叿绠? }
        ]
    },
    {
        id: 10,
        name: '铻轰笣鍒€濂楄',
        category: 'hardware',
        price: 35.00,
        originalPrice: 48.00,
        unit: '濂?,
        minOrder: 20,
        sales: 1200,
        stock: 500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=screwdriver%20set%20tools%20product%20photo&image_size=square',
        description: '澶氬姛鑳借灪涓濆垁濂楄锛屽寘鍚崄瀛椼€佷竴瀛椼€佹鑺辩瓑澶氱鎵瑰ご锛岀鎬ц璁★紝浣跨敤鏂逛究銆?,
        specifications: [
            { name: '鏉愯川', value: 'CR-V閽? },
            { name: '鏁伴噺', value: '24浠?濂? },
            { name: '绫诲瀷', value: '鍗佸瓧/涓€瀛?姊呰姳' },
            { name: '鐗圭偣', value: '纾佹€ф壒澶? }
        ]
    },
    {
        id: 11,
        name: '搴峰笀鍌呮柟渚块潰',
        category: 'food',
        price: 32.00,
        originalPrice: 40.00,
        unit: '绠?,
        minOrder: 10,
        sales: 4500,
        stock: 1500,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=instant%20noodles%20box%20product%20photo&image_size=square',
        description: '缁忓吀鍙ｅ懗锛屾柟渚垮揩鎹凤紝閫傚悎瀹跺涵甯稿鎴栧姙鍏姞椁愩€傛瘡绠?4鍖呫€?,
        specifications: [
            { name: '瑙勬牸', value: '120g*24鍖?绠? },
            { name: '鍙ｅ懗', value: '绾㈢儳鐗涜倝/棣欒荆鐗涜倝' },
            { name: '淇濊川鏈?, value: '6涓湀' },
            { name: '椋熺敤鏂瑰紡', value: '寮€姘村啿娉? }
        ]
    },
    {
        id: 12,
        name: '閲戦緳楸奸鐢ㄦ补',
        category: 'food',
        price: 68.00,
        originalPrice: 85.00,
        unit: '妗?,
        minOrder: 5,
        sales: 890,
        stock: 300,
        image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cooking%20oil%20bottle%20product%20photo&image_size=square',
        description: '闈炶浆鍩哄洜澶ц眴娌癸紝钀ュ吇鍋ュ悍锛岄€傚悎鍚勭鐑归オ鏂瑰紡銆傛瘡妗?L銆?,
        specifications: [
            { name: '瑙勬牸', value: '5L/妗? },
            { name: '绫诲瀷', value: '澶ц眴娌? },
            { name: '杞熀鍥?, value: '闈炶浆鍩哄洜' },
            { name: '淇濊川鏈?, value: '18涓湀' }
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