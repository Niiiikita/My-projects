import popup from "./Popup.js";

export default function validationForm() {
    const validate = new JustValidate('.questions__form', {
        validateBeforeSubmitting: true,
    })

    validate.addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
    ]);

    validate.addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Введите почту',
      },
      {
        rule: 'email',
        errorMessage: 'Почта введена не верно!',
      },
    ]);

    validate.addField('#agree', [
        {
          rule: 'required',
          errorMessage: 'Необходимо Ваше согласие',
        },
      ]);

    validate.onSuccess(function () {
        const overlay = document.querySelector('#overlay');
        overlay.classList.add("show");
        popup.style.display = "block";
        document.body.append(popup);

        document.querySelector('.closeModal').addEventListener('click', function (e) {
            e.preventDefault();
            overlay.classList.remove("show");
            popup.style.display = "none";
            popup.remove();
        });
    });
}