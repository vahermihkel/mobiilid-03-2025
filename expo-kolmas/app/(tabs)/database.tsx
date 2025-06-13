import { StyleSheet, FlatList, Text, TouchableHighlight, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useEffect, useState } from 'react';
import { ParcelMachine } from '@/models/ParcelMachine';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function TabThreeScreen() {
  const [parcelMachines, setParcelMachines] = useState<ParcelMachine[]>([]);

  // uef
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json.filter((pm: any) => pm.A0_NAME === "EE")))
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
        headerImage={
          <IconSymbol
            size={310}
            color="#808080"
            name="chevron.left.forwardslash.chevron.right"
            style={styles.headerImage}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Database</ThemedText>
        </ThemedView>

        {/* <FlatList
          data={parcelMachines}
          renderItem={({item, index, separators}) => (
            <TouchableHighlight
              key={item.ZIP}
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}>
              <View style={{backgroundColor: 'white'}}>
                <Text>{item.NAME}</Text>
              </View>
            </TouchableHighlight>
          )}
        /> */}

      {parcelMachines.map((item) => (
          <TouchableHighlight key={item.ZIP}>
            <View style={{ backgroundColor: 'white' }}>
              <Text>{item.NAME}</Text>
            </View>
          </TouchableHighlight>
        ))}


        
      </ParallaxScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

// 5 kohtumist 3ak/h
// 4s kohtumine

// 11.04    1h15min    9.00-10.15
// 18.04    1h         9.00-10.00