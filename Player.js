class Player{
    constructor(x,y,width,height){
        this.PlayerName=null;
        this.index=0;
        this.x=x;
        this.y=y;
        this.body=createSprite(x,y,width,height);
        
     }
     writePosition(x,y,plno){
        var index = 'player'+ plno+'/position';
        database.ref(index).set({
            'x':index.x+x,
            'y':index.y+y
        });
    }
     readPosition1(data){
        var playerPosition = data.val();
        this.body.x = playerPosition.x;
        this.body.y = playerPosition.y;
    }
    
    
}