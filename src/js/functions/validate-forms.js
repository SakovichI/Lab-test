import Inputmask from "inputmask";
import JustValidate from "just-validate";

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const label = form.querySelectorAll(".callback-form__label");
  const telSelector = form?.querySelector('input[type="tel"]');
  label.forEach((label) => {
    const input = label.querySelector("input");
    const labelText = label.querySelector(".callback-form__label-text");
    input.addEventListener("focus", () => {
      labelText.classList.add("active");
    });
    input.addEventListener("blur", () => {
      if (!input.value) {
        labelText.classList.remove("active");
      }
    });
    input.addEventListener("input", () => {
      if (input.classList.contains("focus-visible") && input.value) {
        labelText.classList.add("active");
      }
    });
  });
  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  if (telSelector) {
    const inputMask = new Inputmask("+7 (999) 999-99-99");
    inputMask.mask(telSelector);

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: "function",
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError,
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    validateBeforeSubmitting: true,
  });

  for (let item of rules) {
    validation.addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        } else {
          console.log("Ошибка отправки");
        }
      }
    };
    xhr.open("POST", "http://localhost:3000/#callback", true);
    xhr.send(formData);

    ev.target.reset();
    label.forEach((label) => {
      const labelText = label.querySelector(".callback-form__label-text");
      labelText.classList.remove("active");
    });
  });
};
