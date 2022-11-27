import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image 
        style = {{ width:300, height: 300 }}
        source = {require('./assets/shoptbarberlogo.png')}
      />

      <Text>ShopTonBarber !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E7D8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
