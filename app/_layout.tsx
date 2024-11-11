import React from "react";
import { NativeBaseProvider, Box, Button } from "native-base";

export default function RootLayout() {

  return (
    <NativeBaseProvider>
      <Box alignItems="center">
      <Button onPress={() => console.log("hello world")}>Click Me</Button>
    </Box>
    <Box>Hello world</Box>
  </NativeBaseProvider>
  );
}
