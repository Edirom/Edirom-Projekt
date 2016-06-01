jQuery(document).ready(function() {

	var fieldcount = jQuery('.fields').size() -1;
	
	jQuery('#tx_airfilemanager_addfields_btn').show();
	
	jQuery('#tx_airfilemanager_addfields_btn').click(function() {
		
		fieldcount++;
		
		var clonedElement = jQuery('.fields_template').clone();
						
		clonedElement
			.html(clonedElement.html().replace(/###FIELD_NO###/g, fieldcount))
			.html(clonedElement.html().replace(/###FILE_NUMBER###/g, fieldcount+1))
			.attr('class', 'fields')
			.show()
			.insertBefore(jQuery('#insert_new_fields_here'));
		
		return false;
	});
});
