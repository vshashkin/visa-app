import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {
  const buttonpressed = () => console.log('button pressed'); 

  return (
    <SafeAreaView style={styles.container}>
      <Text>start of the project</Text>
      <StatusBar style="auto" />
      <Button title={'Add Trip'} color='green' onPress={buttonpressed}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
