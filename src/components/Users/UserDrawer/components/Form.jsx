import { TextField } from '@material-ui/core';
import { func, shape, string } from 'prop-types';
import React from 'react';
import * as R from 'ramda';
import { formOrder } from '../UserDrawer';

const Form = ({ formData, formStyle, onChange }) => (
  <form autoComplete="off" className={formStyle}>
    {formOrder.map(({ item, label }) => (
      <TextField
        id={item}
        key={item}
        label={label}
        name={item}
        onChange={R.compose(onChange, R.pick(['value', 'name']), R.prop('target'))}
        value={formData[item]}
      />
    ))}
  </form>
);

Form.propTypes = {
  formData: shape({}).isRequired,
  formStyle: string.isRequired,
  onChange: func.isRequired,
};

export default Form;
