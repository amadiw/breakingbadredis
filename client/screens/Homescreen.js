import React from 'react'
import { View, Image , Text, Button} from 'react-native'

export default function Homescreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        style={{ width: 480, height: 200, margin: 40 }}
        source={{
          uri:
            "https://www.dkoding.in/wp-content/uploads/Breaking-Bad-Season-13-Release-Date-Trending-Today-DKODING.jpg",
        }}
      />
      <Text style={{ fontSize: 20, padding: 30 }}>
        Ready for some Breaking Bad Quotes?
      </Text>
      <Button title="Let's go!" onPress={() => navigation.navigate("Quotes")} />
    </View>
  )
}
