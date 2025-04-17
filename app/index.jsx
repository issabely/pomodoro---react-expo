import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')}/>
      <View> style={styles.actions}
        <Text style={styles.timer}>
          25:00
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#021123',
  },
  text:{
    color:'#fff',
  },
  actions:{
    paddingVertical:24,
    paddingHorizontal: 24,
    backgroundColor:'#144480',
    width: '80%',
    borderRadius:32,
    borderWidth:2,
    borderColor:'#144480',
  },
  timer:{
    fontSize: 54,
  }
})