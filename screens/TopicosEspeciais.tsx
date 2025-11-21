import { Text, View } from 'react-native';

export default function TopicosEspeciaisScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Tópicos Especiais II — Jest
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        Em Tópicos Especiais II estamos estudando o Jest, um dos frameworks de
        testes mais usados no JavaScript. Ele permite criar testes rápidos,
        seguros e fáceis de manter, garantindo que o código funcione
        corretamente.
        {"\n\n"}
        Com Jest, aprendemos a escrever testes unitários, mocks, snapshots e
        validações de comportamento. Isso é essencial para o desenvolvimento
        profissional de software, garantindo mais qualidade e menos erros.
      </Text>
    </View>
  );
}
