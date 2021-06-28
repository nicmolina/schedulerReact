/** Hook useForm
 * @const useForm
 * hooks for validation and setting the usestates that are used on the inputs;
 * @param type
 * can be 'title', 'number' and 'select', on title there can be no '';
 * number is when you need to validate input of only numbers;
 * select same as number but for select options.
 * @returns
 * value: value of the input;
 * setValue: function that can change the value of input ;
 * onChange: function for input changing;
 * validate: function that returns error if the value its outside of the domain;
 * onBlur: function to validate that value.
 */

import React from 'react';

const types = {
  number: {
    regex: /^\d+$/,
    message: 'Utilize números apenas.',
  },
  select: {
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}/,
    message: 'Utilize números apenas.',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Campo obrigatório');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;
