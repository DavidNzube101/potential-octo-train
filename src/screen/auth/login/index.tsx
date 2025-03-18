import { View } from "react-native";
import React, {  useState } from "react";
import {  useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/main/types";
import appColors from "../../../theme/appColors";
import { Background, Header } from "../component";
import { LoginView } from "./component/";
import { useValues } from "../../../utils/context/index";
import { useDispatch, useSelector } from "react-redux";
import { UserLoginInterface } from "../../../api/interface/authInterface";
import { AppDispatch } from "../../../api/store/index";
import { userLogin } from "../../../api/store/action/index";
import { notificationHelper } from "../../../commonComponents";

type navigation = NativeStackNavigationProp<RootStackParamList>;

export function Login() {
  const { isDark, setToken } = useValues();
  const dispatch = useDispatch<AppDispatch>();
  const { navigate } = useNavigation<navigation>();
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [demouser, setDemouser] = useState(false);
  const { translateData } = useSelector((state) => state.setting);

  const gotoOTP = () => {
    const formatCountryCode = (code: string): string => {
      if (code.startsWith("+")) {
        return code.substring(1);
      }
      return code;
    };
    let payload: UserLoginInterface = {
      phone: phoneNumber,
      country_code: formatCountryCode(countryCode),
    };
    dispatch(userLogin(payload))
      .unwrap()
      .then((res: any) => {
        if (res?.success) {
          navigate("Otp", { countryCode, phoneNumber, demouser });
          notificationHelper("OTP send",translateData.otpSend,"success")
        } else {
          setSuccess(false);
          setMessage(res.message);
        }
      });
  };

  return (
    <View
      style={[
        styles.main,
        { backgroundColor: isDark ? appColors.darkThemeSub : appColors.graybackground },
      ]}
    >
      <Header
        showBackButton={false}
        backgroundColor={isDark ? appColors.bgDark : appColors.graybackground}
      />
      <Background />
      <View style={styles.loginView}>
        <LoginView
          gotoOTP={gotoOTP}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          countryCode={countryCode}
          setCountryCode={setCountryCode}
          borderColor={isDark ? appColors.primaryFont : appColors.graybackground}
          demouser={demouser}
          setDemouser={setDemouser}
        />
      </View>
    </View>
  );
}
