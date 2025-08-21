import React, { useState } from 'react';
import { Text } from 'react-native';
import TextInput from '../../../../components/TextInput';

const ActivateBatSinal = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <>
      <TextInput
        placeholder="Nome completo"
        value={username}
        onChangeText={(val) => setUsername(val)}
      />

      <TextInput
        placeholder="Telefone"
        value={phoneNumber}
        onChangeText={(val) => setPhoneNumber(val)}
      />

      <TextInput
        placeholder="Localização"
        value={location}
        onChangeText={(val) => setLocation(val)}
      />

      <TextInput
        placeholder="Observação"
        value={notes}
        onChangeText={(val) => setNotes(val)}
        extraTextInput={{ multiline: true, numberOfLines: 5 }}
      />
    </>
  );
};

export default ActivateBatSinal;
