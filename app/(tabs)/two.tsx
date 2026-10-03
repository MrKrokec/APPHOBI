import { Text, View } from '@/components/Themed';
import { Image, ScrollView, StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Moje priljubljene video igre</Text>

{/*slike in opisi priljubljenih video iger, 1IGRA */}
    <View style={styles.card}>
      <Text style={styles.gameTitle}>Prva video igra</Text>
      <Image
      source={{uri:'https://wallpaperbat.com/img/8945445-minecraft-wallpaper-minecraft-games.jpg'}}
      style={styles.image}
      />
      <Text style={styles.description}>Minecraft je priljubljena video igra, ki omogoča igralcem ustvarjanje in raziskovanje virtualnega sveta iz blokov. Igra ponuja različne načine igranja, vključno z ustvarjalnim načinom, kjer lahko igralci gradijo in oblikujejo svoje svetove, ter preživetvenim načinom, kjer se morajo spopadati z nevarnostmi in zbirati vire za preživetje.</Text>
      </View>
      {/*Druga igra*/}
      <View style={styles.card}>
        <Text style={styles.gameTitle}>Druga priljubljena video igra</Text>
        <Image
        source={{uri:'https://cdn1.epicgames.com/offer/1d4d85b1051e41ee8f1a099e99d59f3f/EGS_EASPORTSFC26StandardEdition_EACANADA_S1_2560x1440-efabe29766334696db018632ea5ba492'}}
        style={styles.image}
        />
        <Text style={styles.description}>EA Sports FC 26 je nogometna video igra, ki ponuja realistično simulacijo nogometnih tekem. Igra vključuje različne lige, ekipe in igralce, kar omogoča igralcem, da se potopijo v svet profesionalnega nogometa. Poleg tega igra ponuja različne načine igranja, kot so karierni način, turnirji in spletno igranje proti drugim igralcem.</Text>
        </View>
        {/*Tretja igra*/}
        <View style={styles.card}>
          <Text style={styles.gameTitle}>Tretja priljubljena video igra</Text>
          <Image
          source={{uri:'https://static.beebom.com/wp-content/uploads/2026/08/Jonesy-sitting-in-front-of-PC-Fortnite-Chapter-7-Season-4-keyart.jpg?resize=1024%2C576&quality=75&strip=all'}}
          style={styles.image}
          />
          <Text style={styles.description}>Fortnite je priljubljena video igra, ki združuje elemente streljanja in gradnje. Igra je znana po svojem načinu Battle Royale, kjer se igralci borijo proti drugim igralcem na velikem otoku, dokler ne ostane le en zmagovalec. Poleg tega igra ponuja različne sezonske dogodke, izzive in kozmetične predmete, ki omogočajo igralcem prilagajanje svojih likov in izkušenj v igri.</Text>

      
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
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
    card: {
      backgroundColor: '#020202',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      width: '90%',
      alignItems: 'center',
    }, 
    gameTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: 'white',
    },
    image: {
      width: '100%',
      height: 180,
      borderRadius: 10,
      marginVertical: 10,
    },
   description: {
    fontSize: 14,
    color:'#dddddd',


   },
});
