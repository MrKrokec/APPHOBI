import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      
      {/* vrh slika in ime */}
      <View style={{ alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
        <Image 
          source={{ uri: 'https://ahkrneki.wordpress.com/wp-content/uploads/2026/09/slikica.jpg?w=906&allow_lossy=1' }} 
          style={{ width: 80, height: 80, borderRadius: 40 }} 
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2f95dc', marginTop: 8 }}>
          Ali Husanovic
        </Text>
        <Text style={{ fontSize: 12, color: '#2f95dc' }}>3.TRA / SCV ERS</Text>
      </View>

      <View style={{ height: 1, backgroundColor: '#333', marginBottom: 15 }} />

      {/* o meni */}
      <View style={styles.box}>
        <Text style={styles.naslov}>O meni</Text>
        <Text style={{ color: '#fff', fontSize: 13 }}>
          Sem Ali Husanovic, hodim na SCV ERS. Tukaj je moja 1. Mobilna aplikacija pri IMA(Izdelava mobilnih aplikacij). 
          V prostem času pa rad igram video igrice in rekreativno igrati nogomet ali pa grem v gym.
        </Text>
      </View>

      {/* hobiji */}
      <View style={styles.box}>
        <Text style={styles.naslov}>Moji hobiji</Text>
        <Text style={{ color: '#ccc', fontSize: 13 }}>- Video igrice</Text>
        <Text style={{ color: '#ccc', fontSize: 13 }}>- Fitness oziroma Gym</Text>
        <Text style={{ color: '#ccc', fontSize: 13 }}>- Druzenje</Text>
      </View>

      {/* projekt*/}
      <View style={styles.box}>
        <Text style={styles.naslov}>Projekt info</Text>
        <Text style={{ color: '#aaa', fontSize: 12 }}>Aplikacija: APPHOBI</Text>
      </View>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070707',
  },
  box: {
    backgroundColor: '#131212',
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
  naslov: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2f95dc',
    marginBottom: 4,
  },
});