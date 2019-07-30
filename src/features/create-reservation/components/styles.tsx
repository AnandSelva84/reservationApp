import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    padding: {
        padding: 20
    },
    parentView: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    icon: {
        paddingTop: 20,
        height: 50,
        width: 50
    },
    messageView: {
        paddingTop: 50
    },
    header: {
        fontWeight: '700',
        fontSize: 18,
        color: '#435873'
    },
    blackMessage: {
        fontWeight: '700',
        fontSize: 32,
        color: '#282828'
    },
    centerView: {
        flex: 1,
        justifyContent: 'center',
        paddingBottom: 200
    },
    buttonContainer: {
        backgroundColor: '#435873',
        paddingVertical: 10,
        height: 50,
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
});

export default styles;