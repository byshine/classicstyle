$("form").submit( function( event ) {
	event.preventDefault();
	let first_name = $("#firstname").val();
	let last_name = $("#lastname").val();
	let email_form = $("#emailform").val();
	let company_form =$("#company").val();
	let message_form = $("#message").val();
	emailjs.send("gmail","template_EHy7ATYB", {

		firstname: first_name, 
		lastname: last_name,
		email: email_form,
		company: company_form,
		message: message_form
	});
});