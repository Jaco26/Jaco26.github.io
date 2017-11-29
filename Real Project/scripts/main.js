function addLi(){
	for(i = 0; i < 16; i++){
		$('<li>').text('new item').appendTo('.list');
	}
}

function addColor(){
	$('<p>').text('hello hello hello').appendTo('.container');
	$(this).style.color = 'blue';
}

$('<input>').attr('type')