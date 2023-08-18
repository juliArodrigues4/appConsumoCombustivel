import {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';


export default function App() {

function CalcularCombustivel() {
  const resultado = km/combu;
  alert ('O consumo por litro do seu carro é '+ resultado);
}

  const [km, setkm] = useState ('');
  const [combu, setcombu] = useState ('');


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Consumo de Combustível</Text>
      <TextInput
        style={styles.input}
         placeholder="Digite os Km percorridos" 
         placeholderTextColor= '#fff'
         keyboardType="numeric"
         onChangeText={(km)=>setkm(km)}
      />  
      <TextInput style={styles.input}       placeholder="Digite a quantidade de combustível" 
      placeholderTextColor= '#fff'
      keyboardType="numeric"
      onChangeText={(combu)=>setcombu(combu)}
      />

      <TouchableOpacity style={styles.btn} onPress={CalcularCombustivel}>
      <Text style={styles.textobtn}>Calcular o consumo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  btn:
  {
    alignItems:"center",
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    margin:15
  },
  textobtn:
  {
  fontSize: 25,
  color: '#ffff'
  },
  input:
  {
    fontSize:20,
    padding:20,
    backgroundColor:'#a0c225',
    borderRadius:10,
    margin: 10
  },

});
