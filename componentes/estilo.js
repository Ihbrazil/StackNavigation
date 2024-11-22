import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700',
    flex:1
  },

  boxBotoes: {
    flexDirection: "row",
    width: 300,
    justifyContent: "space-around"
  },

  titulo: {
    fontSize: 26, 
    marginBottom: 10,
    textAlign: "center",
    fontWeight: 'bold'
  },  

  texto: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    width: 350,
  },
});

export default estilo;