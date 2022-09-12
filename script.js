// Math.round(3.2) - kloracnuma tiv@
// Math.pow(2,4)- astichana barcracnum
// Math.ceil(3.8) - kloracnuma barcr
// Math.floor(3.8) - kloracnuma cacr orinak 3.8 = 3
// Math.min(3,10)
// Math.max(3,10)
// Math.sqrt(4)


// for(var x=0;x<30;x++) {
// 	console.log(x)
// }
// for(var y=0;y<30;y++) {
// 	if(y % 3 == 0 && y % 2 != 0) {
// 		console.log(y)
// 	}
// }


// var k=0
// for(var x=0;x<=10;x++){
// 	k = k + x
// }
// console.log(k)

// console.log(arr[5])


// const arr  = [1,2,3,5,8,13,21,34]

// for( let x = 0; x <= arr.length;x++) {
// 	console.log(arr[x-1] + arr[x-2]);
// }


// new Date().getDay()
// new Date().getDate()
// new Date().getMonth()
// new Date().getYear()
// new Date().getFullYear()
/////////////////////////////
// new Date().getHours();
// new Date().getMinutes();
// new Date().getSeconds();
// new Date().getMilliseconds();

// let hours= new Date().getHours(),
// 	minutes = new Date().getMinutes(),
// 	sec = new Date().getSeconds(),
// 	milsec = new Date().getMilliseconds();


// console.log(hours+':'+minutes+':'+sec+":"+milsec);




// let month = new Date().getMonth()+1,
// 	date = new Date().getDate();
// 	year = new Date().getFullYear();
// if(month <= 9) month = '0'+month;
// console.log(date+'.'+month+'.'+year)

var isX = true,
	playCount = 0;
const board = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
function add(x) {
	let getId = document.getElementById(x);
	if(playCount ===8) {
		alert('Game Refresh')
		for(let y = 1; y <= 9; y++) {
			let id = document.getElementById(y);
			id.innerHTML = "";
		}
	}
	if(getId.innerHTML !== '') return false;
	if(isX == true)  { getId.innerHTML = 'x'; isX = false; }
	else { getId.innerHTML = 'o'; isX = true; }
	playCount++;
	isWinn(board);
}
function getId(x) {
	return document.getElementById(x).innerText;
}

function isWinn(arr) {
	if((getId(arr[0][0]) == 'x' && getId(arr[0][1]) == 'x' && getId(arr[0][2]) == 'x') ||
	(getId(arr[0][0]) == 'o' && getId(arr[0][1]) == 'o' && getId(arr[0][2]) == 'o') ||
	(getId(arr[0][0]) == 'x' && getId(arr[1][0]) == 'x' && getId(arr[2][0]) == 'x') ||
	(getId(arr[0][0]) == 'o' && getId(arr[1][0]) == 'o' && getId(arr[2][0]) == 'o') ||
	(getId(arr[0][1]) == 'o' && getId(arr[1][1]) == 'o' && getId(arr[2][1]) == 'o') ||
	(getId(arr[0][1]) == 'x' && getId(arr[1][1]) == 'x' && getId(arr[2][1]) == 'x') ||
	(getId(arr[0][2]) == 'o' && getId(arr[1][2]) == 'o' && getId(arr[2][2]) == 'o') ||
	(getId(arr[0][2]) == 'x' && getId(arr[1][2]) == 'x' && getId(arr[2][2]) == 'x') ||
	(getId(arr[1][0]) == 'x' && getId(arr[1][1]) == 'x' && getId(arr[1][2]) == 'x') ||
	(getId(arr[1][0]) == 'o' && getId(arr[1][1]) == 'o' && getId(arr[1][2]) == 'o') ||
	(getId(arr[2][0]) == 'x' && getId(arr[2][1]) == 'x' && getId(arr[2][2]) == 'x') ||
	(getId(arr[2][0]) == 'o' && getId(arr[2][1]) == 'o' && getId(arr[2][2]) == 'o') ||
	(getId(arr[0][0]) == 'x' && getId(arr[1][1]) == 'x' && getId(arr[2][2]) == 'x') ||
	(getId(arr[0][0]) == 'o' && getId(arr[1][1]) == 'o' && getId(arr[2][2]) == 'o') ||
	(getId(arr[0][2]) == 'x' && getId(arr[1][1]) == 'x' && getId(arr[2][0]) == 'x') ||
	(getId(arr[2][0]) == 'o' && getId(arr[1][1]) == 'o' && getId(arr[2][2]) == 'o')) {
		if(isX === false) alert('X is Winner');
		else alert('O is Winner');
	}
}

console.log(board[0])