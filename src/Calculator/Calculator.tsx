import React from "react"
import { View, Text, Pressable } from "react-native"
import { styles } from "./styles"

const Calculator = () => {
    return (
        <View style={styles.calculator}>
            <View style={styles.screen}>
                <Text style={styles.screenValue}>000000</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>AC</Text>
                </Pressable>
                <Pressable style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>+/-</Text>
                </Pressable>
                <Pressable style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>%</Text>
                </Pressable>
                <Pressable style={styles.operationButton}>
                    <Text style={styles.button}>/</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>7</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>8</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>9</Text>
                </Pressable>
                <Pressable style={styles.operationButton}>
                    <Text style={styles.button}>X</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>4</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>5</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>6</Text>
                </Pressable>
                <Pressable style={styles.operationButton}>
                    <Text style={styles.button}>-</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>1</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>2</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>3</Text>
                </Pressable>
                <Pressable style={styles.operationButton}>
                    <Text style={styles.button}>+</Text>
                </Pressable>
                <Pressable style={styles.zeroButton}>
                    <Text style={styles.button}>0</Text>
                </Pressable>
                <Pressable style={styles.numberButton}>
                    <Text style={styles.button}>,</Text>
                </Pressable>
                <Pressable style={styles.operationButton}>
                    <Text style={styles.button}>=</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Calculator;