import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    calculator: {
        padding: 20,
        backgroundColor: "#000000",
        height: "100%",
        width: "100%"
    },
    screen: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "50%",
        width: "100%",
        padding: 20
    },
    screenValue: {
        color: "#fff",
        fontSize: 50
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10,
        height: "60%",
        width: "100%",
    },
    numberButton: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: "#333333",
    },
    zeroButton: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "center",
        paddingLeft: 22,
        height: 55,
        width: 130,
        borderRadius: 100,
        backgroundColor: "#333333",
    },
    operationButton: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: "#ff9601",
    },
    otherOperationsButton: {
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: "#a7a6a7"
    },
    button: {
        color: "#fff",
        fontSize: 24,
        fontFamily: "RobotoMono-Regular"
    },
    otherButton: {
        color: "#000",
        fontSize: 24
    }
})