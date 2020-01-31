$(document).ready(function() {
    $('#form-registro').validate({
        rules: {
            nome: { required: true, minlength: 3 }
        }, messages: {
            nome: { required: 'Nome obrigatório', minlength: 'Mínimo de 3 letras' }
        }
    });

    /*novo curso*/
    $(function() {
        // Initialize form validation on the registration form.
        // It has the name attribute "registration"
        $("form[name='novocurso']").validate({
          // Specify validation rules
          rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            nome_curso: "required",
            requisito: "required",
            ementa: "required",
            carga_horaria: "required",
            preco: "required",
          },
          // Specify validation error messages
          messages: {
            nome_curso: "Por favor, digite o nome do curso.",
            requisito: "Por favor, digite o requisito do curso.",
            ementa: "Por favor, digite a ementa do curso.",
            carga_horaria: "Por favor, digite a carga horaria do curso.",
            preco: "Por favor, digite o preco do curso.",
          },
          // Make sure the form is submitted to the destination defined
          // in the "action" attribute of the form when valid
          submitHandler: function(form) {
            form.submit();
          }
        });
      });
});