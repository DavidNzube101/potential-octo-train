import { View } from 'react-native';
import React from 'react';
import {RideContainer} from '../../rideContainer/index';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import appColors from '@theme/appColors';
import { useValues } from '../../../../../../App';

type PendingProp = NativeStackNavigationProp<RootStackParamList>;

export function ScheduleRide() {
    const { navigate } = useNavigation<PendingProp>();
    const { t } = useValues();
    return (
        <View>
            <RideContainer
                status={'● Schedule'}
                onPress={() => navigate('ScheduleRideScreen')}
                color={appColors.scheduleColor}
            />
        </View>
    );
};
