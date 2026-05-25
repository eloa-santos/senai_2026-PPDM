import { useState } from "react";
import { View, Text, StyleSheet,TextInput, TouchableOpacity} from "react-native";
export default function Login({navigation}){
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return(
        <View style={estilos.container}>
      <Text >Pet Shop App</Text>

      <TextInput
        placeholder="E-mail"
        value={usuario}
        onChangeText={setUsuario}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity
        onPress={() => navigation.replace('Principal')}
      >
        <Text >Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text>Criar conta</Text>
      </TouchableOpacity>
    </View>
    )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa", // Fundo claro e moderno
    padding: 24,
    justifyContent: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1e293b", // Azul escuro para boa leitura
  },
  subtitulo: {
    fontSize: 16,
    color: "#64748b",
    marginTop: 4,
  },
  formContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#ffffff",
    height: 54,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#334155",
    marginBottom: 16,
    // Sombra leve para iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    // Sombra para Android
    elevation: 2,
  },
  botaoLogin: {
    backgroundColor: "#4f46e5", // Cor de destaque (Indigo/Azul)
    height: 54,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    shadowColor: "#4f46e5",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  botaoLoginTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoCadastro: {
    marginTop: 32,
    alignItems: "center",
  },
  cadastroTexto: {
    fontSize: 15,
    color: "#64748b",
  },
  cadastroTextoDestaque: {
    color: "#4f46e5",
    fontWeight: "bold",
  },
});