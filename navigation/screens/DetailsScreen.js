import * as React from 'react';
import { View, Text } from 'react-native';

export default function DetailsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Pills')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Pills</Text>
        </View>
    );
}
