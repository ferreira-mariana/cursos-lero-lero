$(document).ready(function() {
    $('#form-novo-admin').validate({
        rules: {
            nome: { required: true, minlength: 3 },
            login: { required: true, minlength: 3 },
            senha: { required: true, minlength: 3 }
        }, messages: {
            nome: { required: 'Nome obrigatório.', minlength: 'Mínimo de 3 dígitos.' },
            login: { required: 'Login é obrigatório.', minlength: 'Mínimo de 3 dígitos.' },
            senha: { required: 'Senha é obrigatória.', minlength: 'Mínimo de 3 dígitos.' },
        },
        submitHandler: function(form) {
          form.submit();
        }
    });
});