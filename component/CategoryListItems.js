import React from 'react';
import { View, FlatList, Text, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { toUnicode } from 'punycode';
const { width, height } = Dimensions.get('window');

export default function CategoryListItems(props) {
    const { category } = props;
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{Alert.alert(category.name)}}>
            <View style={{ width: width / 1.2, margin: 20, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffe6e6', borderRadius: 10 }}>
                <Text style={{ margin: 10, fontSize: 20, color: 'red' }}>{category.name}</Text>
                <Image style={{ marginBottom: 10, width: width / 4, height: height / 8 }} source={{ uri: "https://img.icons8.com/color/2x/google-images.png" }} />
            </View>
        </TouchableOpacity>
    );
}