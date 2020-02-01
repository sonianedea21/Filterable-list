/*
Ideas for improvement: 
- sa citeasca search-ul doar dupa literele consecutive (ex acum gaseste Allan cand scrii an)
- design 
*/

// Get inoput element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
	// get value of input
	let filterValue = document.getElementById('filterInput').value.toUpperCase();
	
	// get names ul
	let ul = document.getElementById('names');
	
	// get li-s from ul 
	let li = ul.querySelectorAll('li.collection-item');
	
	// loop through colletion-item li-s
	for(let i=0; i < li.length; i++){
		let a = li[i].getElementsByTagName('a')[0];
		
	// if matched 
		if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
			li[i].style.display = '';
	
		} else {
			li[i].style.display = 'none';
		}
	}
}