import React, {useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Dimensions,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {addLabel, fetchLabelsData} from '../service/LabelService';
import LabelsCard from '../component/LabelsCard';
import { styles } from '../utility/GlobalStyle';

import {useDispatch, useSelector} from 'react-redux';
import {setLabelData} from '../redux/actions';


const EditLabels = ({navigation}) => {
  //const [labelData, setLabelData] = React.useState([]);
  const [label, setLabel] = React.useState('');
  const [icon, SetIcon] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [editIcon, setEditIcon] = React.useState(false);

  const labelData = useSelector(state => state.labelData);
  const dispatch = useDispatch();

  // fetch data using redux labelData state
  const fetchData = useCallback(async () => {
    let data = await fetchLabelsData();
    //setLabelData(data);
    dispatch(setLabelData(data));
  }, [dispatch]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation, fetchData]);

  const toggle = () => {
    setAdd(!add);
    SetIcon(!icon);
  };

  //function for add label
  const labelOperation = (changeData = {}) => {
    const noteData = {label};
    addLabel(noteData).then(() => {
      setLabel('');
      fetchData();
    });
  };

  const onCheckButton = () => {
    labelOperation();
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerLabel}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icons name="arrow-left" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.titleLabel}>Edit Labels</Text>
        </View>
      </View>
      <View style={styles.label}>
        <View style={{padding: 10}}>
          <TouchableOpacity onPress={toggle}>
            {icon ? (
              <Icons name="plus" size={25} color="#525252" />
            ) : (
              <AntDesign name="close" size={25} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={{fontSize: 18}}
            placeholder="Create new label"
            placeholderTextColor="grey"
            value={label}
            onChangeText={text => setLabel(text)}
          />
        </View>
        <View style={styles.check}>
          {!add ? (
            <TouchableOpacity onPress={onCheckButton}>
              <AntDesign name="check" size={25} color="black" />
            </TouchableOpacity>
          ) : (null)
          }
        </View>
      </View>
      <View style={{flex: 1, padding: 30, marginBottom: 10}}>
        <FlatList
          data={labelData}
          renderItem={({item}) => <LabelsCard {...item} fetchData={fetchData} />
        }
          keyExtractor={item => item.labelId}
        />
      </View>
    </View>
  );
};



export default EditLabels;
