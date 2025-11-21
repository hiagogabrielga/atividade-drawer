import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Home,
  Cable,
  Calculator,
  TestTube,
  Smartphone,
} from "lucide-react-native";

const Drawer = createDrawerNavigator();

import RedesScreens from "./screens/Redes";
import TopicosEspeciaisScreens from "./screens/TopicosEspeciais";
import DesenvolvimentoMobileScreens from "./screens/DesenvolvimentoMobile";
import MatematicaScreens from "./screens/Matematica";
import HomeScreens from "./screens/Home";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeScreens}
          options={{
            drawerIcon: ({ color }) => <Home size={20} color={color} />,
          }}
        />
        <Drawer.Screen
          name="Redes"
          component={RedesScreens}
          options={{
            drawerIcon: ({ color }) => <Cable size={20} color={color} />,
          }}
        />

        <Drawer.Screen
          name="Desenvolvimento mobile"
          component={DesenvolvimentoMobileScreens}
          options={{
            drawerIcon: ({ color }) => <Smartphone size={20} color={color} />,
          }}
        />

        <Drawer.Screen
          name="Tópicos especiais II"
          component={TopicosEspeciaisScreens}
          options={{
            drawerIcon: ({ color }) => <TestTube size={20} color={color} />,
          }}
        />

        <Drawer.Screen
          name="Matemática"
          component={MatematicaScreens}
          options={{
            drawerIcon: ({ color }) => <Calculator size={20} color={color} />,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
