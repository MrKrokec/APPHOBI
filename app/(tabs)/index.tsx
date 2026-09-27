import { Text, View } from '@/components/Themed';
import { Image, StyleSheet } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Igranje video igric</Text>
      <Image
        source={{uri:'https://tse3.mm.bing.net/th/id/OIP.fzdev2VNa5YBWljycHb-zgHaE7?r=0&pid=ImgDet&w=474&h=315&rs=1&o=7&rm=3'}}
        style={{ width: 270, height: 200 }}
        />
        <Text style={{textAlign: 'center', marginTop: 15, fontSize: 16}}>Dobrodosli v aplikaciji, kjer bom predstavil igranje video igric.
          V tej aplikaciji predstavljam svoj hobi, priljubljene igre ter pravila in zanimivosti.</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
    lineHeight: 22,
  },
});
