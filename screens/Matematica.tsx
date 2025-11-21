import { Text, View } from 'react-native';

export default function MatematicaScreens() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10 }}>
        Matemática
      </Text>

      <Text style={{ fontSize: 16, lineHeight: 22, textAlign: 'justify' }}>
        A disciplina de Matemática é responsável por desenvolver o raciocínio
        lógico, analítico e crítico dos alunos. Durante o semestre, trabalhamos
        com conteúdos que vão desde operações fundamentais até conceitos mais
        avançados.
        {"\n\n"}
        A matemática está presente em diversas áreas da tecnologia, como
        algoritmos, análise de dados e modelagem computacional, sendo essencial
        para qualquer estudante da área.
      </Text>
    </View>
  );
}
