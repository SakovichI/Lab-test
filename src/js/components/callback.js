import { validateForms } from "../functions/validate-forms";

const rules = [
  {
    ruleSelector: 'input[name="name"]',
    rules: [
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Введите хотя бы 3 символа",
      },
      {
        rule: "required",
        errorMessage: "Введите хотя бы 3 символа",
      },
    ],
  },
  {
    ruleSelector: 'input[type="tel"]',
    tel: true,
    rules: [
      {
        rule: "required",
        errorMessage: "Заполните номер телефона",
      },
    ],
  },
];

validateForms(".callback-form", rules);
