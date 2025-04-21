import { Pressable, Text, StyleSheet } from "react-native"
export const FokusButton = () => {
    return(
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
          Começar
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