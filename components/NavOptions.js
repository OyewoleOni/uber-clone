import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'


const Data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"

    },
    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen"

    }
]

const NavOptions = () => {
    const navigation =  useNavigation();
  return (
    <FlatList 
        data={Data}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
            //console.log(item)
            <TouchableOpacity
                onPress={()=> navigation.navigate(item.screen)}
                style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            >
                <View>
                    <Image 
                        style={{width: 100, height: 100, resizeMode: 'contain'}}
                        source={{uri: item.image}}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                </View>
                <Icon style={tw`p-2 bg-black rounded-full w-10 mt-4`} name='arrowright' color='white' type='antdesign' />
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions