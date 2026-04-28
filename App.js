import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: 'https://careful-pulse-daily-flow.base44.app' }} />
    </View>
  );
}