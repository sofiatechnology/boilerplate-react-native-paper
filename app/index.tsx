import { Text, View } from "react-native";
import { Button } from "react-native-paper";
export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ padding: 8, width: '100%' }}>
        <Text>Home Screen</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
          Press me
        </Button>
      </View>
    </View>
  );
}