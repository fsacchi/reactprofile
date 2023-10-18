import React from "react";
import {View, Text} from "react-native";
import style from './style'

const Card = ({titulo, children}) => {
    return (
        <View style={style.card_box}>
          <View style={style.card_header}>
            <Text style={style.card_header_text}>{titulo}</Text>
            {children}
          </View>

      </View>
    )
}

export default Card