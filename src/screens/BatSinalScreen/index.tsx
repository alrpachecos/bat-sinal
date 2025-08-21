import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Logo from '../../components/Logo';
import logoBatSinal from '../../../assets/bat-sinal-logo.png';
import Button from '../../components/Button';
import ActivateBatSinal from './components/ActivateBatSinal';

const BatSinal = () => {
  const [showActivateBatSinal, setShowActivateBatSinal] =
    useState(false);

  const handleSendBatSinal = () => {
    Alert.alert('Bat Sinal', 'Dados registrados com sucesso!');
    setShowActivateBatSinal(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!showActivateBatSinal ? (
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 80,
            paddingBottom: 80,
            paddingHorizontal: 32,
          }}
        >
          <View>
            <Logo imagePath={logoBatSinal} textAlt="Logo bat sinal" />
          </View>

          <View style={{ width: '100%' }}>
            <Button
              onPress={() => setShowActivateBatSinal(true)}
              label="Ativar bat sinal"
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 32,
          }}
        >
          <View>
            <Logo imagePath={logoBatSinal} textAlt="Logo bat sinal" />
          </View>
          <ActivateBatSinal />

          <View style={{ width: '100%' }}>
            <Button onPress={handleSendBatSinal} label="Enviar" />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default BatSinal;
