// import React from "react";
// import styles from "./styles";
// import { useValues } from "../../../../utils/context";
// import { View } from "react-native";
// import { windowHeight } from "../../../../theme/appConstant";
// import { useTheme } from "@react-navigation/native";
// import { LoaderRide } from "../../rideContainer/loaderRide";
// import appColors from "../../../../theme/appColors";
// import { Loader } from "../../../settings/subscription/loader";


// export function DetailsLoader() {
//     const { viewRtlStyle, isDark } = useValues()
//     const { colors } = useTheme()
//     return (
//         <View >
//             <LoaderRide />
    

//             <View style={[styles.rideInfoContainer, { backgroundColor: isDark ? colors.card : appColors.white, borderColor: colors.border }]}>
//                 <View
//                     style={[
//                         styles.profileInfoContainer,
//                         { flexDirection: viewRtlStyle },
//                     ]}
//                 >
//                     <View style={styles.profileTextContainer}>
//                         <View
//                             style={[
//                                 styles.carInfoContainer,
//                                 { flexDirection: viewRtlStyle },
//                             ]}
//                         >
//                             <View
//                                 style={[styles.ratingContainer, { flexDirection: viewRtlStyle }]}
//                             >
                          
//                             </View>
//                         </View>
//                     </View>
                   
//                 </View>


//                 <View style={{ top: windowHeight(1) }}>
//                 </View>


//                 <View style={{ bottom: windowHeight(1), left: windowHeight(35) }}>
//                 </View>






//                 <View style={{ top: windowHeight(1) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '30%' }} />} />
//                 </View>


//                 <View style={{ bottom: windowHeight(1), left: windowHeight(35) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '13%' }} />} />
//                 </View>



//                 <View style={{ top: windowHeight(1) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '30%' }} />} />
//                 </View>


//                 <View style={{ bottom: windowHeight(1), left: windowHeight(35) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '13%' }} />} />
//                 </View>



//                 <View style={{ top: windowHeight(3.7) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '30%' }} />} />
//                 </View>


//                 <View style={{ top: windowHeight(1.3), left: windowHeight(35) }}>
//                     <Loader view={<View style={{ height: windowHeight(2.3), width: '13%' }} />} />
//                 </View>


//             </View>

//         </View>
//     )
// }