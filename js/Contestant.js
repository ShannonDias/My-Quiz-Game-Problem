class contestant {
    constructor(){
      this.name = null 
      this.index = null 
      this.distance = 0
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
      });
    }
  
    static getcontestantinfo (){
      var infoRef = database.ref('contestants')
      infoRef.on('value',(data) =>{
        allcontestants = data.val()
      })
    }
  }
  