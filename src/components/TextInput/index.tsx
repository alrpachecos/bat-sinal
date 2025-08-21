import React from 'react';
import {
  TextInput as BatTextInput,
  TextInputProps,
} from 'react-native';
import { styles } from './styles';

interface ITextInput {
  placeholder: string;
  value: string;
  onChangeText: (val: string) => void;
  extraTextInput?: TextInputProps;
}

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  ...extraTextInput
}: ITextInput) => {
  return (
    <BatTextInput
      style={styles.inputText}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...extraTextInput}
    />
  );
};

export default TextInput;
