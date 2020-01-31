$(document).ready(function () {
  /*novo curso*/
  $(function () {
    $("form[name='novocurso']").validate({
      rules: {
        nome_curso: {required: true, minlength: 3},
        requisito: {required: true, minlength: 3},
        ementa: {required: true, minlength: 20},
        carga_horaria: "required",
        preco: "required",
      },
      messages: {
        nome_curso: {
          required: "Por favor, digite o nome do curso.",
          minlength: "O nome deve ter pelo menos três caracteres."
        },
        requisito: {
          required: "Por favor, digite o requisito do curso.",
          minlength: "O requisito deve ter pelo menos três caracteres."
        },
        ementa: {
          required: "Por favor, digite a ementa do curso.",
          minlength: "O ementa deve ter pelo menos vinte caracteres."
        },
        carga_horaria: "Por favor, digite a carga horaria do curso.",
        preco: "Por favor, digite o preco do curso.",
      },
      submitHandler: function (form) {
        form.submit();
      }
    });
  });
});