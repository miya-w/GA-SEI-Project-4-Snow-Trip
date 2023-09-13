require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Australia', sortOrder: 10},
    {name: 'Japan', sortOrder: 20},
    {name: 'New Zeland', sortOrder: 30},
  
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Mount Hotham', 
    state: 'Victoria', 
    category: categories[0], 
    lift: 13, 
    website:'https://www.mthotham.com.au/',
    image:'https://www.snow-forecast.com/system/images/36181/medium/Mount-Hotham.jpg',
    slope:30,
    elevation:'395 m (1450 m - 1845 m)',
    description:'Hotham Alpine Resort offers premier accommodation, a complete snowsports school and programs, equipment hire, a range of activities, over 20+ bars and restaurants and everything you need to ensure you have a complete holiday above the snowline.', 
    trail:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lRdFoAXG3rOQIBhX-L6ljeEbB8EL2iZbKnaD77--Oxh-IAO3S3h51HC8Xp-3BRnBDxw&usqp=CAU',

},

    {name: 'Falls Creek', 
    state: 'Victoria', 
    category: categories[0], 
    lift: 15, 
    website:'https://www.fallscreek.com.au/',
    image:'https://static.ffx.io/images/$width_620%2C$height_349/t_crop_fill/q_86%2Cf_auto/247ce39205dd82e5b6ea0e2a71cb5ed9a5aa2483',
    slope:51,
    elevation:'	280 m (1500 m - 1780 m)',
    description:'The ski resort Falls Creek is located in Victoria (Australia). For skiing and snowboarding, there are 49 km of slopes available. 15 lifts transport the guests. The winter sports area is situated between the elevations of 1,500 and 1,780 m.',
    trail:'https://www.fallscreek.com.au/wp-content/uploads/sites/67/2021/04/FC_2020_Trail-Map_A4_NoPrintMarks.jpg',

},

    {
    name: 'Mt. Buller', 
    state: 'Victoria', 
    category: categories[0], 
    lift: 21, 
    website:'https://www.mtbuller.com.au/Winter/',
    image:'https://mogulski.com.au/wp-content/uploads/2019/01/mt-buller-Australia-Mogul-Ski-World.jpg',
    slope:47.5,
    elevation:'400 m (1380 m - 1780 m)',
    description:'The Mt Buller Village is situated picturesquely at the heart of the mountain, offering ski in, ski out accommodation and a huge range of bars and restaurants. With a wide range of accommodation to suit all tastes and budgets, there is something to cater for all needs. Over 30 bars and restaurants provide a range of delectable treats, from quick snacks to fine dining and a choice of nightlife options.',
    trail:'https://media.skigebiete-test.de/images/ecu/entity/e_skiresort/ski-resort_mt-buller_n5018-160087-1_raw.jpg', 


    },

    {name: 'Thredbo', 
    state: 'New South Wales', 
    category: categories[0], 
    lift: 15, 
    website:'https://www.thredbo.com.au/',
    image:'https://cdn.thredbo.com.au/wp-content/uploads/2023/01/14115210/24.08.22_24.08.22_POW_DAY_BLUE_BIRD_RICHIE_BOEN_WEB_036A2420_AK-scaled.jpg',
    slope:52,
    elevation:'672 m (1365 m - 2037 m)',
    description:'',
    trail:'https://cdn.thredbo.com.au/wp-content/uploads/2023/05/16112155/Thredbo-Winter-2023-Tear-off-Trail-Map-Low-Res-1-700x500.jpg', 


},

    {name: 'Perisher', 
    state: 'New South Wales', 
    category: categories[0], 
    lift: 49, 
    website:'https://www.perisher.com.au/',
    image:'https://i.shgcdn.com/38310671-b8ac-4540-8d64-819fd1819d1b/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    slope:65,
    elevation:'	429 m (1605 m - 2034 m)',
    description:'The ski resort Perisher is located in New South Wales (Australia). For skiing and snowboarding, there are 65 km of slopes available. 49 lifts transport the guests. The winter sports area is situated between the elevations of 1,605 and 2,034 m.', 
    trail:'https://www.perisher.com.au/images/trailmaps/2022/17175_PSR_FA_WebsiteTrailMaps_Apr22_Guthega.jpg',

},

   

    {
        name: 'Niseko United',
        subtitle:'Annupuri ​Grand Hirafu Hanazono ​Niseko Village',
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 32, 
        website:'https://www.niseko.ne.jp/en/',
        image:'https://www.niseko.ne.jp/en/wp-content/uploads/2019/07/niseko-united-powder-ski-yotei.jpg',
        slope:51,
        elevation:'255 m - 1188 m (Difference 933 m)',
        description: '',
        trail:'https://www.niseko.ne.jp/en/wp-content/uploads/2022/10/Niseko-United_Trail-Map_2022-23_EN_Web.jpg',
    },
    {
        name: 'Rusutsu', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 18, 
        website:'https://rusutsu.com/en/',
        image:'https://d2pezh87cv9xn8.cloudfront.net/destination/Rusutsu/_1536x1024_crop_center-center_45_line/Rusutsu_PowderHounds-14-2.jpg',
        slope:42,
        elevation:'	594 m (400 m - 994 m)',
        description: '',
        trail:'https://rusutsu.com/wp-content/uploads/rusutsu-in-winter-img01_en.jpg',
        
    },
    {
        name: 'Furano', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 9, 
        website:'https://www.princehotels.com/en/ski/furano/',
        image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/bf/e7/f5/furano-ski-resort.jpg?w=1200&h=-1&s=1',
        slope: 32,
        elevation:'	829 m (245 m - 1074 m)',
        description: '',
        trail:'https://www.furanotourism.com/en/assets/images/contents/ski/skimap.jpg',
    },
   
    {
        name: 'Sapporo Teine', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 10, 
        website:'https://www.skiresort.info/ski-resort/sapporo-teine/',
        image:'https://sapporo-teine.com/snow/lang/assets/images/top/img-youtube.jpg',
        slope:20,
        elevation:'	683 m (340 m - 1023 m)',
        description: '',
        trail:'https://sapporo-teine.com/snow/lang/assets/images/course/course-map.jpg',
    },
    {
        name: 'Kamui Ski Links', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 6, 
        website:'https://www.kamui-skilinks.com/',
        image:'https://i0.wp.com/snowaction.com.au/wp-content/uploads/2018/08/kamui.2018.carve1_.jpg?resize=696%2C417&ssl=1',
        slope:24.3,
        elevation:'	601 m (150 m - 751 m)',
        description: '',
        trail:'https://www.kamui-skilinks.com/wp/wp-content/themes/Circles/images/course-image2018_en.jpg',
    },
  

 
  ]);

  console.log(items)

  process.exit();
})();