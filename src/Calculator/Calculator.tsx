import { useState } from "react"
import { View, Text, Pressable } from "react-native"
import { styles } from "./styles"

const Calculator = () => {
    const [number, setNumber] = useState<string>("0")
    const [operation, setOperation] = useState<string>("")
    const [firstNum, setFirstNum] = useState<number>(0)
    const [secondNum, setSecondNum] = useState<number>(0)

    const insertValue = (newValue: string) => {
        let value: string = number
        if (value === "0") {
            setNumber(newValue)
        } else {
            setNumber(value + newValue)
        }
    }

    const reset = () => {
        setFirstNum(0)
        setSecondNum(0)
        setNumber("0")
    }

    const selectOperation = (currentOperation: string) => {
        setFirstNum(parseFloat(number))
        setNumber("0")
        setOperation(currentOperation)
    }

    const equalizer = () => {
        switch (operation) {
            case "+":
                setNumber((firstNum + parseFloat(number)).toString())
                break;
            case "-":
                setNumber((firstNum - parseFloat(number)).toString())
                break;
            case "X":
                setNumber((firstNum * parseFloat(number)).toString())
                break;
            case "/":
                setNumber((firstNum / parseFloat(number)).toString())
                break;
            default:
                break;
        }
        setFirstNum(0)
        setSecondNum(0)
    }

    const isNegative = () => {

    } 

    return (
        <View style={styles.calculator}>
            <View style={styles.screen}>
                <Text style={styles.screenValue}>{number}</Text>
            </View>
            <View style={styles.buttons}>
                <Pressable onPress={() => reset()} style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>AC</Text>
                </Pressable>
                <Pressable onPress={() => {isNegative()}} style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>+/-</Text>
                </Pressable>
                <Pressable onPress={() => setNumber((parseFloat(number) / 100).toString())} style={styles.otherOperationsButton}>
                    <Text style={styles.otherButton}>%</Text>
                </Pressable>
                <Pressable onPress={() => selectOperation("/")} style={styles.operationButton}>
                    <Text style={styles.button}>/</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("7")} style={styles.numberButton}>
                    <Text style={styles.button}>7</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("8")} style={styles.numberButton}>
                    <Text style={styles.button}>8</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("9")} style={styles.numberButton}>
                    <Text style={styles.button}>9</Text>
                </Pressable>
                <Pressable onPress={() => selectOperation("X")} style={styles.operationButton}>
                    <Text style={styles.button}>X</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("4")} style={styles.numberButton}>
                    <Text style={styles.button}>4</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("5")} style={styles.numberButton}>
                    <Text style={styles.button}>5</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("6")} style={styles.numberButton}>
                    <Text style={styles.button}>6</Text>
                </Pressable>
                <Pressable onPress={() => selectOperation("-")} style={styles.operationButton}>
                    <Text style={styles.button}>-</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("1")} style={styles.numberButton}>
                    <Text style={styles.button}>1</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("2")} style={styles.numberButton}>
                    <Text style={styles.button}>2</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("3")} style={styles.numberButton}>
                    <Text style={styles.button}>3</Text>
                </Pressable>
                <Pressable onPress={() => selectOperation("+")} style={styles.operationButton}>
                    <Text style={styles.button}>+</Text>
                </Pressable>
                <Pressable onPress={() => insertValue("0")} style={styles.zeroButton}>
                    <Text style={styles.button}>0</Text>
                </Pressable>
                <Pressable onPress={() => insertValue(".")} style={styles.numberButton}>
                    <Text style={styles.button}>,</Text>
                </Pressable>
                <Pressable onPress={() => equalizer()} style={styles.operationButton}>
                    <Text style={styles.button}>=</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Calculator;