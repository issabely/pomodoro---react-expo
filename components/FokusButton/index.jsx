import { Pressable, Text, StyleSheet } from "react-native"
export const FokusButton = ({ onPress, title }) => {
  return (
      <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
              {title}
          </Text>
      </Pressable>
  )
}
const styles = StyleSheet.create({
    button:{
      backgroundColor:'#B872FF',
      borderRadius:32,
      padding: 8,
    },
    buttonText:{
      textAlign:'center',
      color:'#021123',
      fontSize:18,
    },
  })