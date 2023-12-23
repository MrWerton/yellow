import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input } from "../../../components/Input";
import { AddressBook } from "phosphor-react-native";
export function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handlerEmailChange = (email: string) => {
        setEmail(email)
    }
    const handlerPasswordChange = (password: string) => {
        setPassword(password)
    }
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Text>To do login, insert a credentials</Text>
            <Input Icon={AddressBook} onChangeText={handlerEmailChange} />
            <Input onChangeText={handlerPasswordChange} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})