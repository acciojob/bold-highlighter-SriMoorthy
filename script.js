let bold_items = document.getElementsByTagName('strong')

function highlight() {
    //Write your code here
	for (let i = 0; i < bold_items.length; i++) {
		bold_items[i].style.color = 'green'
	}


}


function return_normal() {
    //Write your code here
	for (let i = 0; i < bold_items.length; i++) {
		bold_items[i].style.color = 'black'
	}
}
