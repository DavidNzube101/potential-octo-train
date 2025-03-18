import React, { useCallback, useEffect, useState } from "react";
import { Image, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import images from "../../../utils/images/images";
import styles from "./styles";
import { getValue } from "../../../utils/localstorage/index";
import {
  selfData,
  selfDriverData,
  settingDataGet,
  translateDataGet,
} from "../../../api/store/action";
import { useDispatch, useSelector } from "react-redux";

export function Splash() {
  const { settingData } = useSelector((state) => state.setting);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showNoInternet, setShowNoInternet] = useState(false);

  useEffect(() => {
    dispatch(settingDataGet());
    dispatch(translateDataGet());
    dispatch(selfData());
  }, [dispatch]);

  useEffect(() => {
    if (!settingData?.values?.activation) return;
    const { maintenance_mode } = settingData?.values.activation;
    if (maintenance_mode === "1" || maintenance_mode === 1) {
      setShowNoInternet(true);
    } else {
      proceedToNextScreen();
    }
  }, [settingData]);

  const proceedToNextScreen = useCallback(async () => {
    const token = await getValue("token");

    if (token) {
      dispatch(selfDriverData());
      navigation.replace("TabNav");
    } else {
      navigation.replace("OnBoarding");
    }
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image source={images.splashBg} style={styles.splashBg} />
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={images.splash} />
      </View>
    </View>
  );
}
