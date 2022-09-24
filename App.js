import { StyleSheet, Text, View } from 'react-native';
import ListItem from './components/ListItem';
import listItem from './components/ListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.largeTitle}>Markets</Text>
      </View>
      <View style={styles.divider} />

      <ListItem 
      name={'Ethereum'} 
      sybmol={'ETH'} 
      currentPrice={'1800$'} 
      priceChangePercentage={'1.9%'} 
      logoUrl={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fcjdowner%2Fcryptocurrency-flat%2F1024%2FEthereum-ETH-icon.png&f=1&nofb=1&ipt=a97b7dd4644482786d6693a9dbd3eaacecf82e39f79c24b7e958bf7d7ec7f63e&ipo=images'}
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
