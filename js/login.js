function customAlert(title, message, type) {
	$.notify({
		// options
		icon: 'glyphicon glyphicon-warning-sign',
		title: title,
		message: message
	},{
		// settings
		element: 'body',
		position: null,
		type: type,
		allow_dismiss: true,
		newest_on_top: false,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "right"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 5000,
		timer: 1000,
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		}
	});
};

function checkIsNull() {
	if ($("[name='username']").val()=="" || $("[name='password']").val()==""){
		// username and password required
		customAlert("Info:", "Username and Password required.", "info");
	} else {
		$("[name='loginform']").submit();
	}
};

$(function(){
	$("[name='username']").blur(function(){
		if ($(this).val()==""){
			// username required
			customAlert("Info:", "Username required.", "info");
			$(this).focus().select();
		}
	});
	$("[name='password']").blur(function(){
		if ($(this).val()==""){
			// password is required
			customAlert("Info:", "Password required.", "info");
			$(this).focus().select();
		}
	});
	$("[name='submit']").click(function(e){
		e.preventDefault();
		checkIsNull();
	});
});