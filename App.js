import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button; ScrollView } from 'react-native';
import React from 'react';
import { PricingCard, lightColors } from '@rneui/themed';

export default function App() {
  const buttonpressed = () => console.log('button pressed'); 

  return (
    <SafeAreaView style={styles.container}>
      <Text>start of the project</Text>
      <StatusBar style="auto" />
      <Button title={'Add Trip 1'} color='green' onPress={buttonpressed}/>
    </SafeAreaView>
  );
}

const PricingCardComponentProps = () => {
return (
  <>
    <ScrollView>
      <PricingCard
        color={lightColors.primary}
        title="Free"
        price="$0"
        info={['1 User', 'Basic Support', 'All Core Features']}
        button={{ title: ' GET STARTED', icon: 'flight-takeoff' }}
      />
    </ScrollView>
  </>
);
};

export default PricingCardComponentProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
