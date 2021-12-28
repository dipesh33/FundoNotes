import {StyleSheet} from 'react-native';
import {Color, Padding, Size, Border, Font} from './Theme';

export const styles = StyleSheet.create({
  container: {
    flex: Size.FLEX,
  },
  screen: {
    flex: Size.FLEX,
    backgroundColor: Color.SECONDARY,
  },
  topView: {
    flex: Size.FLEX,
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
    paddingVertical: Padding.VERTICAL_PADDING,
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
  },
  textInput: {
    width: '90%',
    borderWidth: 1,
    backgroundColor: Color.PLACE_HOLDER_COLOR,
    borderColor: Color.PRIMARY,
    height: 52,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    marginLeft: Padding.INITIAL_PADDING,
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
  searchBar: {
    backgroundColor: Color.SECONDARY,
    flexDirection: 'row',
  },
  searchBar1: {
    marginLeft: '20%',
    paddingTop: Padding.SECONADARY_PADDING,
  },
  text1: {
    color: Color.PRIMARY,
    fontSize: 18,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    flexDirection: 'column-reverse',
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
  //Drawer Content
  titleStyle: {
    paddingLeft: Padding.PRIMARY_PADDING,
    marginBottom: 40,
  },
  textStyle: {
    fontSize: Font.PRIMARY,
    fontWeight: 'bold',
    color: Color.SECONDARY,
  },
  //Archive
  header: {
    height: '8%',
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
});
