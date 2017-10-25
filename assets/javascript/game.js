var currentGameObj = {
	randomNumberSet: 0,
	crystal1:0,
	crystal2:0,
	crystal3:0,
	crystal4:0,
	randomNumberForCrystal: function(max, min){
		return Math.floor(Math.random()*(max - min + 1)) + min
	}
}

var myStatus = {
	win: 0,
	lose: 0
}

$(document).ready(function(){

	var finalNumber = 0
	var result = 0
	var ruby = 0
	var diamond = 0
	var spire = 0
	var crystal = 0
	var values = ""

	GenerateGame()



	$(".image").on('click', function(){
		value = $(this).attr('value')
		if (value === "ruby"){
			result += ruby
		} else if (value === "diamond"){
			result += diamond
		} else if (value === "spire") {
			result += spire
		} else {
			result += crystal
		}
		
		$(".result").text(result)
		if(finalNumber === result){
			myStatus.win += 1
			$(".winBox").text("You win: " + myStatus.win)
			ClearTheGame()

		} else if (finalNumber < result) {
			myStatus.lose += 1
			$(".loseBox").text("You lose: " + myStatus.lose)
			ClearTheGame()
		}

	})

	function ClearTheGame() {
		$(".result, .randomNumberSet").empty()
		finalNumber = 0
		result = 0
		ruby = 0
		diamond = 0
		spire = 0
		crystal = 0
		GenerateGame()
	}

	function GenerateGame() {
		currentGameObj.randomNumberSet = currentGameObj.randomNumberForCrystal(120, 18)
		$(".randomNumberSet").text(currentGameObj.randomNumberSet)
		finalNumber = currentGameObj.randomNumberSet

		currentGameObj.crystal1 = currentGameObj.randomNumberForCrystal(12, 1)
		currentGameObj.crystal2 = currentGameObj.randomNumberForCrystal(12, 1)
		currentGameObj.crystal3 = currentGameObj.randomNumberForCrystal(12, 1)
		currentGameObj.crystal4 = currentGameObj.randomNumberForCrystal(12, 1)

		ruby = currentGameObj.crystal1
		console.log(ruby)
		diamond = currentGameObj.crystal2
		console.log(diamond)
		spire = currentGameObj.crystal3
		console.log(spire)
		crystal = currentGameObj.crystal4
		console.log(crystal)
	}

})