const telegraf = require('telegraf')

const bot  = new telegraf('1251772381:AAEpC-Q0V_UwH7vckS572ydDaX3faseHbR8')

let Parser = require('rss-parser');
let parser = new Parser();

let RSS_URL = "https://etb.fxexchangerate.com/rss.xml";

// var exchange_elements = []

bot.use(ctx =>{   
 
    (async () => { 
      let feed = await parser.parseURL(RSS_URL);
      console.log(feed);
      bot.telegram.sendMessage(-326107994,"This bot is working")   
     
    //   feed.items.forEach(item => {   
    //       exchange_elements.push(item.title +" "+ item.content)   
          
    // });
});
})


bot.launch()
