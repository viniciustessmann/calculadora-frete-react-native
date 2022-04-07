import React from "react";
import {View, Text} from "react-native"

export default function Result(data){
    let quotations = data.data
    console.log(quotations)
    return(
      <View>
         {quotations.map ( (item) => {
            <Text>{item.name}</Text>
         })}
      </View>
    );
}