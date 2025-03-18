import { useSelector } from "react-redux";
import Images from "../../../../utils/images/images";
export const useSlides = () => {

  const { translateData } = useSelector((state) => state.setting);

  return [
    {
      id: 0,
      image: Images.boarding1,
      imagesDark: Images.boardingDark1,
      text: translateData.title1,
    },
    {
      id: 1,
      image: Images.boarding2,
      imagesDark: Images.boardingDark2,
      text: translateData.title2,
    },
    {
      id: 2,
      image: Images.boarding3,
      imagesDark: Images.boardingDark3,
      text: translateData.title3,
    },
  ];
};
