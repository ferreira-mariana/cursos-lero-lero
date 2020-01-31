$(document).ready(function() {
    $('#form-registro').validate({
        rules: {
            nome: { required: true, minlength: 3 },
            cpf: { required: true, minlength: 14 },
            telefone: { required: true, minlength: 15 },
            email: { required: true },
            senha: { required: true, minlength: 3 }
        }, messages: {
            nome: { required: 'Nome obrigatório.', minlength: 'Mínimo de 3 dígitos.' },
            cpf: { required: 'CPF obrigatório.', minlength: 'Mínimo de 14 dígitos.' },
            telefone: { required: 'Telefone é obrigatório.', minlength: 'Mínimo de 15 dígitos.' },
            email: { required: 'Email é obrigatório.' },
            senha: { required: 'Senha obrigatória.', minlength: 'Mínimo de 3 dígitos.' },
        },
        submitHandler: function(form) {
          form.submit();
        }
    });
});