import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';

import {SAMPLE_DATA} from './assets/data/sampleData';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />

      <ListItem 
      name={SAMPLE_DATA[0].name} 
      sybmol={SAMPLE_DATA[0].symbol} 
      currentPrice={SAMPLE_DATA[0].current_price} 
      priceChangePercentage={SAMPLE_DATA[0].price_change_percentage_24h} 
      logoUrl={SAMPLE_DATA[0].image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleWrapper: {
    marginTop: 80,
    paddingHorizontal: 16,
  },
  largeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#A9ABB1',
    marginHorizontal: 16,
    marginTop: 16,
  }
});
