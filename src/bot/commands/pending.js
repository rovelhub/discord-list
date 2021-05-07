Bots.find({added: false}).limit(5).then(async bots=>{
 let msg="Showing the Oldest 5 Bots that are not added to this server:\n";
 for await(const bot of bots){
  await fetch(`${process.env.DOMAIN}/api/client/mainserver/${bot.id}`).then(r=>r.json()).then(async d=>{
   if(!d.condition){
    msg+= await `<https://discord.com/api/oauth2/authorize?client_id=${bot.id}&permissions=0&scope=bot> - ${bot.tag}\n`
   }
  });
 }
 await message.channel.send(msg);
})