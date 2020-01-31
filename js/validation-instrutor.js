$(document).ready(function () {
  /*novo instrutor*/
  $(function () {
    $("form[name='novoinstrutor']").validate({
      rules: {
        nome: {required: true, minlength: 3},
        email: {required: true, minlength: 5},
        valor_hora: "required",
        login: {required: true, minlength: 5},
        senha: {required: true, minlength: 5},
      },
      messages: {
        nome: {
          required: "Por favor, digite o nome do instrutor.",
          minlength: "O nome deve ter pelo menos três caracteres."
        },
        email: {
          required: "Por favor, digite o email do instrutor.",
          minlength: "O email deve ter pelo menos cinco caracteres."
        },
        login: {
          required: "Por favor, digite o seu nome para login.",
          minlength: "O login deve ter pelo menos cinco caracteres."
        },
        senha: {
          required: "Por favor, digite a seu senha.",
          minlength: "A senha deve ter pelo menos cinco caracteres."
        },
        valor_hora: "Por favor, digite o valor da hora.",
      },
      submitHandler: function (form) {
        form.submit();
      }
    });
  });
});