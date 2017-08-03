function MarvelService() {
  var apiKey = "?apikey=d18db9539a5b05aead394fd46402d8d7";
  var baseUrl = "https://gateway.marvel.com:443/v1/public/characters";

  var marvelResults = []
  var myRoster = []

  this.search = function(query, cb) {

    if(query){
      query = '?name=' + query + '&'
      apiKey = 'apikey=d18db9539a5b05aead394fd46402d8d7'
    }
    $.get(baseUrl + query + apiKey).then(function(res){
      marvelResults = res.data.results
      cb(res.data.results)
      
    })
  }

  this.addCharacter = function(id){

    var character = marvelResults.find(char => char.id == id)
    
    if(myRoster.indexOf(character) == -1){
      myRoster.push(character)
    }

    // myRoster[id] = character


    // for (var i = 0; i < marvelResults.length; i++) {
    //   var character = marvelResults[i];
    //   if(character.id == id){
    //     return character
    //   }
    // }

  }

  this.getRoster = function(){
    return JSON.parse(JSON.stringify(myRoster))
  }

}