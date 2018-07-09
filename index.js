var musicians = []
var instruments = []

function theBeatlesPlay(musicians, instruments) {
  var beatlesArray = []
  for (var i = 0; i < musicians.length; i ++) {
    beatlesArray.push("${musicians} plays ${instruments}")
  }
  return beatlesArray
}