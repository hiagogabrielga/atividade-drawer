import { Text, View } from 'react-native';

export default function HomeScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Bem-vindo ao App das Disciplinas
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        Este aplicativo foi desenvolvido com o objetivo de reunir as principais
        informações das disciplinas estudadas neste semestre. Aqui você poderá
        visualizar conteúdos resumidos, navegar entre as matérias e acessar
        detalhes importantes de cada área.
        {"\n\n"}
        Use o menu lateral para navegar entre as telas. Bons estudos!
      </Text>
    </View>
  );
}
