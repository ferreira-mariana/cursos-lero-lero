$(document).ready(function() {
    $('#form-registro').validate({
        rules: {
            nome: { required: true, minlength: 3 }
        }, messages: {
            nome: { required: 'Nome obrigatório', minlength: 'Mínimo de 3 letras' }
        }
    });
});