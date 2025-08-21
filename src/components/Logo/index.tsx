import React from 'react';
import { Image, ImageSourcePropType, Text, View } from 'react-native';
import { styles } from './styles';

interface ILogo {
  imagePath: ImageSourcePropType;
  textAlt: string;
}

const Logo = ({ imagePath, textAlt }: ILogo) => {
  return (
    <>
      <Image source={imagePath} style={styles.logo} alt={textAlt} />
    </>
  );
};

export default Logo;
