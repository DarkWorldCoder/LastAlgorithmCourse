export default {
	draw,
	highlight
};

var origBoardEl;
var tiles = []
var highlighted =[]
var diagonals = []
var tileDiagonals = new Map()
// ****************************
const NUM_ROWS = 8
function draw(boardEl) {	

	for (let i =0;i<30;i++){
		diagonals.push([])
	}
	for(let i=0;i<NUM_ROWS;i++){
		let rowEl = document.createElement("div")
		for(let j = 0;j<8;j++){
			let tileEl = document.createElement("div")
			rowEl.appendChild(tileEl)
			let majorDiag =  diagonals[7 - (i-j)]
			let minorDiag = diagonals[15 + (i + j)]
			
			majorDiag.push(tileEl)
			minorDiag.push(tileEl)
            tileDiagonals.set(tileEl,[majorDiag,minorDiag])
		}
		boardEl.appendChild(rowEl)
	}
}

function highlight(tileEl) {

	// clear al currently highlighted tiles 
	for(let diagonal of highlighted){
		for(let el of diagonal){
			el.classList.remove("highlighted")
		}
	}

	if(tileEl){
		highlighted = tileDiagonals.get(tileEl)

		for(let diagonal of highlighted){
			for(let el of diagonal){
				el.classList.add("highlighted")
			}
		}
	}

}

