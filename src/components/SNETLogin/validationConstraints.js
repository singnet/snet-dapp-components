export const validationConstraints = {
    email: { presence: { allowEmpty: false }, email: { message: "'%{value}' is not valid" } },
    password: { presence: { allowEmpty: false } },
};
