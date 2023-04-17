import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import Counter from './redux_thunk/view';
import {Provider} from 'react-redux';
import store from './redux_thunk/store';
import styles from './styles';

const Detail = ({ navigation }) => {
  return (
    <Provider store={store}>
      <View style = { styles.container_1 }>
        <View style = { styles.header_1 }>
            <View style = { styles.top }>
              <TouchableOpacity
                style = { styles.button }
                onPress={ () => navigation.goBack()}>
              <AntDesign name="arrowleft" size={24} color="white" />
              </TouchableOpacity>
              <Text style = { styles.heading }>Hiling.Id</Text>
              <FontAwesome5 name="user" size={24} color="white" />
            </View>
            <Text style = { styles.heading2 }>Hasil Pencarian Penerbangan</Text>
            <Text style = { styles.heading2 }>April 20, 2023</Text>
        </View>
        <ScrollView>
          <Counter/>
        </ScrollView>
        <Text style = {styles.copyright_1}>Irsan Romardi Harahap - 120140043</Text>
      </View>
    </Provider>
  );
}

export default Detail;