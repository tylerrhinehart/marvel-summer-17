function MarvelController() {
  var service = new MarvelService();

  function drawMarvel(arr) {
    var template = ''

    for (var i = 0; i < arr.length; i++) {
      var character = arr[i];
      template += `<div>${character.name} <button onclick="app.controllers.marvelController.addCharacter(${character.id})">Add</button></div>`
    }
    document.getElementById('search-results').innerHTML = template
  }

  drawRoster = function () {
    //TODO: DRAW ROSTER
    var roster = service.getRoster()
    var template = ''

    roster.forEach(char => {
      template += `<div>${char.name}</div>`
    })

    document.getElementById('my-roster').innerHTML = template

  }

  this.addCharacter = function (id) {

    service.addCharacter(id)
    drawRoster()

  }

  this.search = function (e) {
    e.preventDefault()
    console.log(e.target.name.value)
    var character = e.target.name.value.toLowerCase()
    service.search(character, drawMarvel)
  }
    service.search('', drawMarvel);
}
