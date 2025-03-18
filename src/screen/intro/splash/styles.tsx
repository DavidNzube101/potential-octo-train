import { StyleSheet } from "react-native";
import appColors from "../../../theme/appColors";
import { windowHeight, windowWidth } from "../../../theme/appConstant";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    splashBg: { position: "absolute", height: "100%", width: "100%" },
    img: {
        width: windowWidth(70),
        height: windowHeight(50),
        resizeMode: 'contain',
    },
})
export default styles