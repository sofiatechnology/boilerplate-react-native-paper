import { Appbar } from 'react-native-paper';

export function Header() {
  return (
    <Appbar.Header>
      <Appbar.Content title="SOFIA Tech" subtitle={'Subtitle'} />
      <Appbar.Action icon="magnify" onPress={() => { }} />
      <Appbar.Action icon={"account-circle-outline"} onPress={() => { }} />
    </Appbar.Header>
  )
}