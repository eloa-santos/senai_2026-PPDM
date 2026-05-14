import { Text, View, SafeAreaView, FlatList, StyleSheet, Image} from "react-native";
import Header from "./componentes/Header";
import tarefas from "./dados/tarefas";

function ItemTarefa({item}){
  return(
    <View style={estilos.card}>
      <Image source={item.photo} style={estilos.foto}/>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      <Text style={estilos.status}>{item.status}</Text>
      <Text style={estilos.desc}>{item.description}</Text>
    </View>
  )
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='Sesi Produtividade'/>
      <FlatList 
        data={tarefas}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ItemTarefa item={item}/>}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F2F5", // Um cinza bem claro para destacar os cards brancos
  },
  // Estilização do Card
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: "hidden", // Garante que a imagem respeite as bordas arredondadas
    // Sombra para Android
    elevation: 4,
    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  foto: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  // Container para os textos (dá um respiro nas bordas)
  infoContainer: {
    padding: 15,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 4,
  },
  status: {
    fontSize: 12,
    fontWeight: "800",
    textTransform: "uppercase",
    marginBottom: 8,
    // Cor padrão (pode ser alterada via style inline como mostrei antes)
    color: "#005DA5", 
  },
  desc: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20, // Melhora a leitura de textos longos
  },
});