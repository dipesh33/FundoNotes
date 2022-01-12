import {StyleSheet, Dimensions} from 'react-native';
import {Color, Padding, Size, Border, Font, Height, Width} from './Theme';

const widthOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: Size.FLEX,
  },
  screen: {
    flex: Size.FLEX,
    backgroundColor: Color.SECONDARY,
  },
  topView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: Padding.PRIMARY_PADDING,
    paddingBottom: Padding.BOTTOM_PADDING,
  },
  bottomView: {
    flex: 3,
    backgroundColor: Color.PRIMARY,
    borderTopLeftRadius: Border.ROUND_CORNER,
    borderTopRightRadius: Border.ROUND_CORNER,
    paddingHorizontal: Padding.PRIMARY_PADDING,
    paddingVertical: 40,
    flexShrink: 0,
  },
  titleText: {
    fontSize: 35,
    color: Color.PRIMARY,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: Font.PRIMARY,
    fontWeight: 'bold',
    color: Color.HEADING,
  },
  Text: {
    fontSize: Font.PRIMARY,
    fontStyle: 'italic',
    color: 'grey',
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    backgroundColor: Color.PLACE_HOLDER_COLOR,
    borderColor: Color.PRIMARY,
    // height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    marginLeft: Padding.INITIAL_PADDING,
    color: Color.HEADING,
  },
  fieldBar: {
    paddingTop: Padding.VERTICAL_PADDING,
  },
  button: {
    width: '90%',
    color: 'white',
    height: 52,
    backgroundColor: Color.SECONDARY,
    borderRadius: Border.BUTTON_BORDER,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  buttonText: {
    color: Color.PRIMARY,
    fontWeight: 'bold',
    fontSize: Font.PRIMARY,
  },
  TextButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  //SignUp Screen
  heading: {
    padding: Padding.VERTICAL_PADDING,
  },
  bottomTab: {
    borderBottomEndRadius: Border.ROUND_CORNER,
    borderBottomLeftRadius: Border.ROUND_CORNER,
  },
  //Dashboard
  headings: {
    paddingLeft: Padding.SECONADARY_PADDING,
    paddingTop: Padding.INITIAL_PADDING,
  },
  searchBar: {
    backgroundColor: Color.TRANSPARENT,
    justifyContent: 'center',
    paddingVertical: Padding.FIRST_PADDING,
  },
  searchBar2: {
    backgroundColor: Color.SECONDARY,
    borderRadius: Border.BORDER,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    alignItems: 'center',
    height: 500,
    width: 400,
    justifyContent: 'center',
  },
  searchBar1: {
    marginLeft: '20%',
    paddingTop: Padding.SECONADARY_PADDING,
  },
  text1: {
    color: Color.HEADING,
    fontSize: Font.PRIMARY,
    paddingLeft: Padding.SECONADARY_PADDING,
  },
  menu: {
    alignSelf: 'flex-start',
    paddingLeft: '5%',
  },
  Footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    color: Color.HEADING,
  },
  Grid: {
    flexDirection: 'row-reverse',
  },
  title: {
    color: Color.HEADING,
    fontSize: 18,
    fontStyle: 'italic',
  },
  space: {
    height: 50,
    backgroundColor: Color.SECONDARY,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'column-reverse',
  },
  listStyle: {
    marginLeft: 120,
  },
  //Notecard
  footer: {
    backgroundColor: Color.SECONDARY,
    borderTopLeftRadius: Border.THICK_BORDER,
    borderTopRightRadius: Border.THICK_BORDER,
    flexDirection: 'row',
    padding: Padding.SECONADARY_PADDING,
  },
  view: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  float: {
    backgroundColor: Color.TRANSPARENT,
    borderColor: Color.TRANSPARENT,
    borderWidth: Border.CORNER,
    width: 67,
    height: 67,
    bottom: '80%',
    right: '7%',
    position: 'absolute',
  },
  floatTouch: {
    borderRadius: 15,
    height: 55,
    width: 55,
    borderColor: Color.PRIMARY,
    borderWidth: 5,
    alignSelf: 'center',
    elevation: 8,
    backgroundColor: Color.PRIMARY,
  },
  plusIcon: {
    padding: '15%',
  },
  itemStyle: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    fontSize: Font.PRIMARY,
    marginLeft: 20,
    color: Color.HEADING,
  },
  itemsStyle: {
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  //Drawer Content
  titleStyle: {
    paddingLeft: Padding.PRIMARY_PADDING,
    marginBottom: 40,
    paddingTop: Padding.INITIAL_PADDING,
  },
  textStyle: {
    fontSize: Font.PRIMARY,
    fontWeight: 'bold',
    color: Color.SECONDARY,
  },
  //Archive
  header: {
    height: '9%',
    backgroundColor: Color.SECONDARY,
    flexDirection: 'row',
    padding: Padding.SECONADARY_PADDING,
  },
  archiveTitle: {
    padding: Padding.SECONADARY_PADDING,
    color: 'black',
    fontSize: Font.PRIMARY,
  },
  //Create Notes
  screen2: {
    backgroundColor: Color.TRANSPARENT,
  },
  topBar: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginTop: 10,
  },
  topIcon: {
    padding: 12,
  },
  bottomStyle: {
    padding: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  textColor: {
    color: Color.HEADING,
  },
  //SearchNote
  container1: {
    flex: 1,
  },
  searchHeader: {
    height: 70,
    width: '100%',
  },
  headerItem: {
    flexDirection: 'row',
  },
  searchInput: {
    fontSize: 18,
  },
  searchCard: {
    padding: 5,
    paddingTop: 5,
  },
  editedText: {
    flex: 1,
    alignItems: 'center',
  },
  header2: {
    height: 70,
    width: '100%',
  },
  container2: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
  },
  createtxt: {
    marginLeft: 30,
    fontSize: 18,
    color: 'black',
  },
  textBoxScreen: {
    width: '100%',
    borderRadius: 3,
    borderStyle: 'solid',
    borderWidth: 0.5,
    height: 50,
    marginVertical: 4,
  },
  textBoxInput: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: 'Avenir-Medium',
    color: 'black',
  },
  titleBoxStyles: {
    position: 'absolute',
    fontFamily: 'Avenir-Medium',
    left: 4,
  },
  // Labels
  labelHead: {
    height: 70,
    width: '100%',
  },
  headingItem: {
    flexDirection: 'row',
  },
  textLabel: {
    paddingTop: Padding.INITIAL_PADDING,
    fontSize: 20,
    fontWeight: '400',
    color: Color.HEADING,
  },
  horizontzlLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'grey',
  },
  exception: {
    paddingTop: Padding.INITIAL_PADDING,
  },
  line: {
    borderBottomColor: Color.HEADING,
    borderBottomWidth: 1,
  },
  //Label
  headerLabel: {
    height: '12%',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'transparent',
  },
  titleLabel: {
    marginLeft: 15,
    color: 'black',
    fontSize: 18,
  },
  label: {
    borderColor: 'grey',
    borderBottomWidth: 0.7,
    borderTopWidth: 0.7,
    flexDirection: 'row',
  },
  labelScreen: {
    backgroundColor: 'red',
    width: widthOfScreen,
    height: heightOfScreen - 270,
  },
  labelText: {
    fontSize: 20,
    color: 'black',
    marginLeft: 30,
  },
  check: {
    padding: 10,
    marginLeft: '35%',
  },
  headerLabels: {
    height: 70,
    width: '100%',
  },
  headerItems: {
    flexDirection: 'row',
  },
  containers: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
  },
  createtext: {
    marginLeft: 30,
    fontSize: 18,
    color: 'black',
  },
  textInputs: {
    fontSize: 18,
  },
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttons: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalContainer1: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  modalContainer2: {
    width: '80%',
    height: '50%',
    marginLeft: '10%',
    marginRight: '10%',
  },
  modalTitle: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  firstRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalText1: {
    fontSize: 15,
    color: 'black',
  },
});
