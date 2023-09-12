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
    {name: 'Mount Hotham', state: 'Victoria', category: categories[0], lift: 13, website:'https://www.mthotham.com.au/'},
    {name: 'Falls Creek', state: 'Victoria', category: categories[0], lift: 15, website:'https://www.fallscreek.com.au/'},
    {name: 'Mt. Buller', state: 'Victoria', category: categories[0], lift: 21, website:'https://www.mtbuller.com.au/Winter/'},
    {name: 'Thredbo', state: 'New South Wales', category: categories[0], lift: 15, website:'https://www.thredbo.com.au/'},
    {name: 'Perisher', state: 'New South Wales', category: categories[0], lift: 49, website:'https://www.perisher.com.au/'},
    {name: 'Thredbo', state: 'New South Wales', category: categories[0], lift: 15, website:'https://www.thredbo.com.au/'},
    {name: 'Charlotte Pass', state: 'New South Wales', category: categories[0], lift: 15, website:'https://www.thredbo.com.au/'},

    {
        name: 'Niseko United – Annupuri/​Grand Hirafu/​Hanazono/​Niseko Village', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 32, 
        website:'https://www.niseko.ne.jp/en/'
    },
    {
        name: 'Rusutsu', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 18, 
        website:'https://rusutsu.com/en/'
    },
    {
        name: 'Furano', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 9, 
        website:'https://www.princehotels.com/en/ski/furano/'
    },
    {
        name: 'Kiroro', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 10, 
        website:'https://www.kiroro.co.jp/'
    },
    {
        name: 'Sapporo Teine', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 10, 
        website:'https://www.skiresort.info/ski-resort/sapporo-teine/'
    },
    {
        name: 'Kamui Ski Links', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 6, 
        website:'https://www.kamui-skilinks.com/'
    },
    {
        name: 'Hoshino Resorts Tomamu', 
        state: 'Hokkaido', 
        category: categories[1], 
        lift: 6, 
        website:'https://www.snowtomamu.jp/winter/'
    },

    {
        name: 'Hoshino Resorts Tomamu', 
        state: 'Hokkaido', 
        category: categories[2], 
        lift: 6, 
        website:'https://www.snowtomamu.jp/winter/'
    },
  ]);

  console.log(items)

  process.exit();
})();