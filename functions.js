function reorder(wrapper_id, preppend_element_id) {
	$(wrapper_id).clone().prependTo(preppend_element_id);
	if($(wrapper_id).length == 2 ) {
		$(wrapper_id)[1].remove();
	}
}

function disable(elements){
	for(var i = 0; i < elements.length; i++){
		$(elements[i]).prop("disabled","disabled");
	}
}

function enable(elements){
	for(var i = 0; i < elements.length; i++){
		$(elements[i]).removeAttr("disabled");
	}
}

function addClass(elements, className){
	for(var i = 0; i < elements.length; i++){
		$(elements[i]).addClass(className);
	}
}

function removeClass(elements, className){
	for(var i = 0; i < elements.length; i++){
		$(elements[i]).removeClass(className);
	}
}