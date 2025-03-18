import React, { useState, useEffect } from "react";
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { CustomRadioButton } from "../../../../../commonComponents";
import Icons from "../../../../../utils/icons/icons";
import styles from "../currencyModal/styles";
import { language } from "./data";
import { useTheme } from "@react-navigation/native";
import { useValues } from "../../../../../utils/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { translateDataGet } from "../../../../../api/store/action";
import appColors from "../../../../../theme/appColors";

export function LanguageModal() {
  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { viewRtlStyle, setRtl, viewSelfRtlStyle } = useValues();
  const { translateData, languageData } = useSelector((state) => state.setting);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const selectedLanguage = await AsyncStorage.getItem("selectedLanguage");
        if (selectedLanguage !== null) {
          setSelectedLanguage(selectedLanguage);

          if (selectedLanguage === "ar") {
            setRtl(true);
          }
        } else {
        }
      } catch (error) {
        console.error("Error retrieving selected language:", error);
      }
    };
    getData();
  }, []);

  const openModal = () => {
    setModalVisible(true);
    const getData = async () => {
      try {
        const selectedLanguage = await AsyncStorage.getItem("selectedLanguage");
        if (selectedLanguage !== null) {
          setSelectedLanguage(selectedLanguage);
        } else {
        }
      } catch (error) {
        console.error("Error retrieving selected language:", error);
      }
    };
    getData();
  };

  const closeModal = () => {
    dispatch(translateDataGet());
    setModalVisible(false);
    AsyncStorage.setItem("selectedLanguage", selectedLanguage);
    if (selectedLanguage === "ar") {
      setRtl(true);
    } else {
      setRtl(false);
    }
  };

  const modelClose = () => {
    setModalVisible(false);
  };


  return (
    <View>
      <View style={[styles.border, { borderColor: colors.border }]} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openModal}
        style={[styles.main, { flexDirection: viewRtlStyle }]}
      >
        <View style={[styles.container, { flexDirection: viewRtlStyle }]}>
          <View
            style={[styles.iconView, { backgroundColor: colors.background }]}
          >
            <Icons.Language color={colors.text} />
          </View>
          <Text style={[styles.title, { color: colors.text }]}>
            {translateData.changeLanguage}
          </Text>
        </View>
        <View>
          <Icons.NextLarge color={appColors.iconColor} />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBg}>
            <TouchableWithoutFeedback>
              <View
                style={[styles.modalView, { backgroundColor: colors.card }]}
              >
                <TouchableOpacity
                  onPress={modelClose}
                  style={{ alignSelf: viewSelfRtlStyle }}
                >
                  <Icons.Close />
                </TouchableOpacity>
                <Text style={[styles.modalTitle, { color: colors.text }]}>
                  {translateData.changeLanguage}
                </Text>
                {languageData?.data?.length > 0 &&
                languageData?.data.map((item, index) => (
                  <View key={index}>
                    <View
                      key={index}
                      style={[
                        styles.modalAlign,
                        { flexDirection: viewRtlStyle },
                      ]}
                    >
                      <View
                        style={[
                          styles.selection,
                          { flexDirection: viewRtlStyle },
                        ]}
                      >
                        <Image
                          source={{ uri: item.flag }}
                          style={styles.imageCountry}
                        />
                        <Text
                          style={[
                            styles.name,
                            { color: colors.text },
                            {
                              color: colors.text,
                              fontWeight:
                                selectedLanguage === item.name ? "500" : "300",
                            },
                          ]}
                        >{`${item.name.toLowerCase()}`}</Text>
                      </View>
                      <CustomRadioButton
                        selected={selectedLanguage === item.locale}
                        onPress={() => {
                          setSelectedLanguage(item.locale);
                        }}
                      />
                    </View>
                    {index !== language.length - 1 && (
                      <View
                        style={[
                          styles.borderBottom,
                          { borderColor: colors.border },
                        ]}
                      />
                    )}
                  </View>
                ))}
                <TouchableOpacity
                  onPress={closeModal}
                  style={styles.buttonView}
                >
                  <Text style={styles.buttonTitle}>{translateData.update}</Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
