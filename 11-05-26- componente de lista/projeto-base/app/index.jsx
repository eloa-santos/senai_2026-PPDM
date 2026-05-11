import { Text, View, SafeAreaViewBase, FlatList, StyleSheet, Image} from "react-native";
import Header from "./componentes/Header";
import tarefas from "./dados/tarefas";

export default function Index() {
  return (
    <View>
      <Header titulo='Sesi Produtividade'/>
    </View>
  );
}
