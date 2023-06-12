import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { log } from "react-native-reanimated";
import { checkImageurl } from "../../../../utils/index";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  log(item);
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageurl(item.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
        {item.job_title}
      </Text>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
