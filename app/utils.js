const Utils = {

  generateKey: (length) => {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  },

  cleanChat: (Json) =>{
    for(var Messages of Json.value()){
      if(Json.value().length > 30){
        var Item = Json.value()[0]
       Json.remove({id: Item.id}).write()
      }
    }
  },

  Front: {
    Categories: ["/images/weapons/category/Rifle.png","/images/weapons/category/Shot.png","/images/weapons/category/Sniper.png", "/images/weapons/category/Sub.png"],

    Backgrounds: ["linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)", "linear-gradient(to right, red , yellow)", "linear-gradient(to bottom, #000099 0%, #ff99cc 100%)", "linear-gradient(to bottom, #00cc66 0%, #ff99cc 100%)", "linear-gradient(to bottom, #9900cc 0%, #ff99cc 100%)", "linear-gradient(to bottom, #ffcc00 0%, #ff99cc 100%)", "linear-gradient(to bottom, #ffffff 0%, #ff99cc 100%)", "linear-gradient(to bottom, #ff00ff 0%, #6699ff 100%)", "linear-gradient(to bottom, #99ff66 0%, #6699ff 100%)"],

    Icons: ["/images/icons/diamond.png","/images/icons/sla.png","/images/icons/star-blue.png","/images/icons/star-red.png","/images/icons/weapon.png"]


  }
}

module.exports = Utils