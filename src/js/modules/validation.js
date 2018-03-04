var validationForm = (function($) {
    'use strict';
    var form = $('#subscript-form');

    if (!form.length) return;

    // validation init
    function init() {

        var successMsg = $(".alert-success");

        $('#subscript-form').validate({
            errorClass: "error",
            onkeyup: false,
            rules: {
                country: {
                    required: true,
                },
                email: {
                    email: true,
                    required: true,
                },
            },
            messages: {
                email: "This field has to be filled.",
                country: "This field has to be filled.",
            },
            highlight: function(element, errorClass, validClass) {
                $(element).closest(".input-col").addClass(errorClass);
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).closest(".error").removeClass(errorClass);
            },
            submitHandler: function(){
                form.submit();
            }
        });
    }

    return {
        init: init
    };

}(jQuery));

export default validationForm;