import { StyleSheet, View } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { useState } from 'react';
import classificarIMC from './classificacao';

export default function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);

  const calcularImc = () => {
    const calc = (peso / (altura * 2 )).toFixed(2);
  
    setImc(calc);
  };

  const alterarAltura = (value) =>  {
    const valorNumerico = value.replace(/[^0-9.]/g, '');

    setAltura(valorNumerico);
  };

  const alterarPeso = (value) =>  {
    const valorNumerico = value.replace(/[^0-9.]/g, '');

    setPeso(valorNumerico);
  };

  return (
    <View style={styles.container}>
      <Text variant='bodyLarge'>Calculadora IMC</Text>
      <View>
        <Text>Altura</Text>
        <TextInput mode='outlined' value={altura} onChange={(e) => alterarAltura(e.target.value)} />
      </View>
      <View>
        <Text>Peso</Text>
        <TextInput mode='outlined' value={peso} onChange={(e) => alterarPeso(e.target.value)} />
      </View>
      <Button mode='contained' onPress={calcularImc}>Calcular IMC</Button>
      <View style={styles.imc}>
        {imc ? (<Text style={styles.imc} >O IMC é {imc} - {classificarIMC(imc)}</Text> ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(238 238 238)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    maxWidth: 'min-content',
    height: 'min-content',
    padding: 20,
    margin: 'auto',
    borderRadius: 10
  },
  imc: {
    margin: 'auto',
    fontWeight: 'bold'
  }
});
