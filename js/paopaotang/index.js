function Player(name , teamColor){
    this.enemies=[];//敌人
    this.partners=[];//队友
    this.name=name;
    this.teamColor=teamColor;
    this.state='live';

}
Player.prototype.win=function(){
    //kill all
    console.log(`${this.name} win`);
}
Player.prototype.lose=function(){
    console.log(`${this.name} lose`);
}
Player.prototype.die=function(){
    console.log(`${this.name} die`);
    this.state='die';
    //对队友死亡的统计
    let all_dead=true;//假设一开始都死了
    for(var i=0,partners;partner=this.partners[i++];){
       if(partner.state=='live'){
         all_dead=false;
         break;
 
        }    
    }
    if(all_dead){
        this.lose();
        for(var i=0,partner;partner=this.partners[i++];){
            partner.lose();
        }
        for(var i=0,enemy;enemy=this.enemies[i++];){
            enemy.win();
        }
    }
}

//组队
//工厂模式，把队伍敌人工厂化
//生成玩家，工厂类来负责
var players=[];
var playerFactory=function(name,teamColor){
   var newPlayer=new Player(name,teamColor);
   for(var i=0,player;player=players[i++];){
       if(player.teamColor==newPlayer.teamColor){
           player.partners.push(newPlayer);
           newPlayer.partners.push(player);
       }else{
           player.enemies.push(newPlayer);
           newPlayer.enemies.push(player);
       }
   }
   players.push(newPlayer);
   return newPlayer;
}
var player1=playerFactory('奇奇国王','red');
var player2=playerFactory('熊二','red');
var player3=playerFactory('熊大','red');
var player4=playerFactory('强哥','red');
//对象是谁，敌人是谁 交给工厂去做
var player5=playerFactory('暖羊羊','blue');
var player6=playerFactory('费羊羊','blue');
var player7=playerFactory('喜羊羊','blue');
var player8=playerFactory('懒羊羊','blue');
//console.log(player1.partners,player1.enemies);

player1.die();
player2.die();
player3.die();
player4.die();




