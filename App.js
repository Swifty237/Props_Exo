import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

const CustomBtn = (props) => {

  let btnColor = null
  let textColor = "white"

  if (props.type == "primary") {
    btnColor = "blue"
    textColor = "white"
  }

  if (props.type =="secondary") {
    btnColor = "gray"
    textColor = "white"
  }

  if (props.type == "success") {
    btnColor = "green"
    textColor = "white"
  }

  if (props.type == "danger") {
    btnColor = "red"
    textColor = "white"
  }

  if (props.type == "warning") {
    btnColor = "yellow"
    textColor = "black"
  }

  if (props.type == "info") {
    btnColor = "aqua"
    textColor = "black"
  }

  if (props.type == "light") {
    btnColor = "#ecf0f1"
    textColor = "black"
  }

  if (props.type == "dark") {
    btnColor = "black"
    textColor = "white"

  }

  return (
    
    <TouchableHighlight style={{backgroundColor : btnColor, height: 50, width: 150, borderRadius: 3, justifyContent: "center",  }}>
      <Text style={{textAlign: "center", color: textColor, }}>{props.label}</Text>
    </TouchableHighlight>
  )
}

export default function App() {
  return (

    <View style ={styles.container}>
      <CustomBtn type ="primary" label ="Primaire"/>
      <CustomBtn type ="secondary" label ="Secondaire"/>
      <CustomBtn type ="success" label ="Succès"/>
      <CustomBtn type ="danger" label ="Danger"/>
      <CustomBtn type ="warning" label ="Vigilance"/>
      <CustomBtn type ="info" label ="Ciel"/>
      <CustomBtn type ="light" label ="Claire"/>
      <CustomBtn type ="dark" label ="Sombre"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
});
