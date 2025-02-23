import { Text, View, Linking } from "react-native";
import { Button } from "react-native-paper";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useState, useCallback, useMemo, useRef } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  
  const data = useMemo(() => [
    { title: 'Documentation', icon: 'book' },
    { title: 'View source', icon: 'code-tags' },
    { title: 'Report an issue', icon: 'bug' },
    { title: 'Feedback', icon: 'message' },
    { title: 'Give us a star on GitHub', icon: 'star' }
  ], []);

  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  const handleItemPress = useCallback((item: string) => {
    const repoBaseUrl = 'https://github.com/sofiatechnology/boilerplate-react-native-paper';
    
    switch (item) {
      case 'Documentation':
        Linking.openURL(`${repoBaseUrl}#documentation`);
        break;
      case 'View source':
        Linking.openURL(repoBaseUrl);
        break;
      case 'Report an issue':
        Linking.openURL(`${repoBaseUrl}/issues/new`);
        break;
      case 'Feedback':
        Linking.openURL(`${repoBaseUrl}/discussions/new`);
        break;
      case 'Give us a star on GitHub':
        Linking.openURL(repoBaseUrl);
        break;
    }
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: { title: string; icon: string } }) => (
      <Button
        icon={item.icon}
        mode="text"
        onPress={() => handleItemPress(item.title)}
        style={styles.menuItem}
        contentStyle={styles.menuItemContent}
        labelStyle={styles.menuItemLabel}
      >
        {item.title}
      </Button>
    ),
    [handleItemPress]
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          React Native Bottom Sheet Demo
        </Text>
        <Button 
          icon="arrow-up"
          mode="contained"
          onPress={() => handleSnapPress(1)}
          style={styles.button}
        >
          View Source
        </Button>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          index={-1}
          enablePanDownToClose
        >
          <BottomSheetFlatList
            data={data}
            keyExtractor={(item) => item.title}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
          />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  button: {
    marginBottom: 10,
  },
  menuItem: {
    width: '100%',
    marginVertical: 4,
    borderRadius: 0,
  },
  menuItemContent: {
    justifyContent: 'flex-start',
    paddingLeft: 16,
  },
  menuItemLabel: {
    fontSize: 16,
    marginLeft: 12,
  },
});