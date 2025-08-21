import React from 'react';
import { Pressable, Text } from 'react-native';
import { styles } from './styles';

interface IButton {
  onPress: () => void;
  label: string;
}

const Button = ({ onPress, label }: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default Button;
