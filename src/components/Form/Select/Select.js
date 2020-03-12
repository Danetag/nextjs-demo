import React from "react";

const Select = props => {

  const { onChange, label, defaultOption, value, options } = props;

  return (
    <div>
      <label>{ label }
        <select onChange={onChange} value={value !== null ? value : "default"}>
          <option value="default" disabled>{ defaultOption }</option>
          { options.map(option => (
            <option
              key={`select_${option.value}`}
              value={option.value}
            >
              { option.label }
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;