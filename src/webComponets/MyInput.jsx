import PropTypes from 'prop-types';
import styled from 'styled-components';
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: ${props => props.width || '100%'};
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: red;
`;

function MyInput({ id, label, placeholder, width = '100%', value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        type="text"
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={id}
      />
    </InputContainer>
  );
}

MyInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  width: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MyInput;
