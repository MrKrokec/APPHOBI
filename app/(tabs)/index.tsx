import { Text, View } from '@/components/Themed';
import { Image, StyleSheet } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.mojnaslov}>APPHOBI</Text>
      <Image
        source={{uri:'https://t4.ftcdn.net/jpg/05/64/31/67/360_F_564316725_zE8llusnCk3Sfr9rdfKya6fV7BQbjfyV.jpg'}}
        style={{ width: 250, height: 200, borderRadius: 100}}
        />
        <Text style={{textAlign: 'center', marginTop: 15, fontSize: 16,color:'#ffffff'}}>Dobrodosli v aplikaciji, kjer bom na kratko predstavil sebe in nekaj mojih dejavnosti.
          V tej aplikaciji predstavljam nekaj svojih hobijev in moje top 3. priljubljene video igre.</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#070707'
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
  mojnaslov: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
