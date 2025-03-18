import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ListItem } from '../listItem';
import Icons from '../../../../../utils/icons/icons';
import styles from './styles';
import appColors from '../../../../../theme/appColors';
import { useNavigation, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../navigation/main/types';
import { useValues } from '../../../../../utils/context';
import { useLoadingContext } from '../../../../../utils/loadingContext';
import { SkeletonAppPage } from '../../../appSettings/component';
import { windowHeight } from '../../../chat/context';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { windowWidth } from '../../../../../theme/appConstant';
import { useSelector } from 'react-redux';

type Navigation = NativeStackNavigationProp<RootStackParamList>;

export function RegistrationDetails() {
  const navigation = useNavigation<Navigation>();
  const { colors } = useTheme();
  const { textRtlStyle, isDark } = useValues();
  const [loading, setLoading] = useState(false);
  const { addressLoaded, setAddressLoaded } = useLoadingContext();
  const { translateData } = useSelector((state) => state.setting);

  useEffect(() => {
    if (!addressLoaded) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setAddressLoaded(true);
      }, 3000);
    }
  }, [addressLoaded, setAddressLoaded]);

  const skeletonTitle = () => (

    <ContentLoader
      speed={1}
      width={windowWidth(40)}
      height={windowHeight(18)}
      backgroundColor={isDark ? appColors.bgDark : appColors.loaderBackground}
      foregroundColor={isDark ? appColors.darkThemeSub : appColors.loaderLightHighlight}
    >
      <Rect
        x="0"
        y="0"
        width={windowWidth(40)}
        height={windowHeight(15)}
        rx={0}
        ry={0}
      />
    </ContentLoader>
  );

  return (
    <View>

      {loading ? skeletonTitle() : (
        <Text
          style={[styles.title, { color: colors.text, textAlign: textRtlStyle }]}>
          {translateData.registrationDetails}
        </Text>
      )}
      <View style={[styles.listView, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {loading ? (
          Array.from({ length: 3 }).map((_, index) => (
            <View key={index} >
              <SkeletonAppPage />
              {index !== 2 && (
                  <View style={[styles.border, { borderColor:isDark?appColors.darkborder:appColors.border }]} />
              )}
            </View>
          ))
        ) : (
          <>
            <ListItem
              icon={<Icons.DocumentSetting color={colors.text} />}
              text={translateData.documentRegistration}
              backgroundColor={isDark ? colors.background : appColors.graybackground}
              color={isDark ? appColors.white : appColors.primaryFont}
              showNextIcon={true}
              onPress={() => navigation.navigate('DocumentDetail')}
            />
            <View style={[styles.border, { borderColor: colors.border }]} />

            <ListItem
              icon={<Icons.vehicleSetting color={colors.text} />}
              text={translateData.vehicleRegistration}
              showNextIcon={true}
              backgroundColor={isDark ? colors.background : appColors.graybackground}
              color={isDark ? appColors.white : appColors.primaryFont}
              onPress={() => navigation.navigate('VehicleDetail')}
            />
            <View style={[styles.border, { borderColor: colors.border }]} />

            <ListItem
              icon={<Icons.Bank color={colors.text} />}
              text={translateData.bankDetails}
              showNextIcon={true}
              backgroundColor={isDark ? colors.background : appColors.graybackground}
              color={isDark ? appColors.white : appColors.primaryFont}
              onPress={() => navigation.navigate('BankDetails')}
            />
          </>
        )}
      </View>
    </View>
  );
}
