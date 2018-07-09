var musicians = []
var instruments = []

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for (var i = 1; i <= musicians.length; i ++) {
    var string = "${musicians} plays ${instruments}";
    beatlesArray.push(string)
  }
  return beatlesArray
}