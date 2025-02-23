import { StyleSheet } from 'react-native';
import { themes } from './theme';

export const commonStyles = StyleSheet.create({
  header: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Manrope_700Bold',

  },
  title: {
    fontSize: 16,
    fontFamily: 'Manrope_700Bold',
  },
  input: {
    borderColor: '#00000014',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    backgroundColor: '#27557A',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
  },
  sectionTitle: {
    fontSize: 22,
    marginVertical: 5,
    fontFamily: 'Manrope_600Bold',

  },
  paragraph: {
    lineHeight: 20,
    fontFamily: 'Manrope_400Regular',
  },
  headerTitle: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 4,
    paddingHorizontal: 20,
    color: themes.light.primary,
    fontFamily: 'Manrope_700Bold',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#C6C6C6',
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Manrope_700Bold',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '600',
    color: '#C6C6C6',
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#FFF00000',
    textTransform: 'uppercase',
    fontFamily: 'Manrope_700Bold',
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  icon: {
    marginRight: 1,
  },
  h1: {
    // page-header
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 30,
    lineHeight: 44,
    textDecorationLine: 'none',
    letterSpacing: -0.02, // Converted percentage to decimal
  },
  h2: {
    // section-header
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 21,
    lineHeight: 26,
    textDecorationLine: 'none',
    letterSpacing: -0.02, // Converted percentage to decimal
  },
  h3: {
    // card-title
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 16,
    lineHeight: 22,
    textDecorationLine: 'none',
    letterSpacing: 0, // Normal letter spacing
  },
  text500SemiBold: {
    // card-title
    fontFamily: 'Manrope_500SemiBold',
    fontSize: 16,
    lineHeight: 22,
    textDecorationLine: 'none',
    letterSpacing: 0, // Normal letter spacing
  },
  h4: {
    // card-text
    fontFamily: 'Manrope_500Medium',
    fontSize: 12,
    lineHeight: 16,
    textDecorationLine: 'none',
    letterSpacing: 0.01, // Converted percentage to decimal
  },
  h5: {
    // page-text
    fontFamily: 'Manrope_500Medium',
    fontSize: 13,
    lineHeight: 16,
    textDecorationLine: 'none',
    letterSpacing: 0.01, // Converted percentage to decimal
  },
  h6: {
    // Default smaller heading style (adjustable if needed)
    fontFamily: 'Manrope_500Medium',
    fontSize: 10,
    textDecorationLine: 'none',
    letterSpacing: 0, // Normal letter spacing
  },
  pageTitle: {
    // page-title
    fontFamily: 'Manrope_600SemiBold',
    fontWeight: 600,
    fontSize: 26,
    lineHeight: 38,
    textDecorationLine: 'none',
    letterSpacing: -0.02, // Converted percentage to decimal
  },
  colorMain: {
    color: '#1A2633'
  },
  textAccent: {
    color: '#004A99'
  },
  textGeneralWhite: {
    color: '#FFFFFF'
  },
  textSecondary: {
    color: 'rgba(89, 108, 128, 1)'
  },
  textTabNoneActive: {
    color: 'rgba(115, 139, 174, 1)'
  },
  textPlaceholder: {
    color: '#7E8C9E'
  },
  textDisabled: {
    color: '96A2B2'
  },
  btnBgPrimary: {
    backgroundColor: '#004A99'
  },
  btnBgSecondary: {
    backgroundColor: '#005EC1'
  },
  btnBgDisabled: {
    backgroundColor: 'rgba(0, 74, 153, 0.04)'
  },
  btnBgActive: {
    backgroundColor: '#1667BD'
  },
  inputBg: {
    backgroundColor: '#EBF0F5'
  },
  inputBorder: {
    borderColor: '#000000'
  },
  bgMain: {
    backgroundColor: '#F5F7FA'
  },
  bgLight: {
    backgroundColor: '#E5F2FF'
  },
  btnPrimary: {
    backgroundColor: 'rgba(0, 74, 153, 1)',
    paddingVertical: 16,
    textAlign:'center',
    color: '#fff',
    borderWidth: 0,
    borderRadius: 12,
    minHeight: 54
  },
  btnDisabled: {
    backgroundColor: '#acc3dd',
    paddingHorizontal: 120,
    paddingVertical: 16,
    color: '#fff',
    borderWidth: 0,
    borderRadius: 12,
    minHeight: 54
  },
  
  btnSecondary: {
    backgroundColor: 'rgba(0, 94, 193, 0.07)',
    textAlign:'center',
    paddingVertical: 12,
    color: '#004A99',
    lineHeight: 20,
    borderWidth: 0,
    borderRadius: 12,
  },
  btnDanger: {
    backgroundColor: 'rgba(158, 65, 65, 1)',
    textAlign:'center',
    paddingVertical: 12,
    color: '#004A99',
    lineHeight: 20,
    borderWidth: 0,
    borderRadius: 12,
  },

  //Flex Styles
  flexRow: {
    flexDirection: 'row'
  },
  selfCenter: {
    alignSelf: 'center'
  },
  itemsCenter: {
    alignItems: 'center'
  },
  itemsBaseline: {
    alignItems: 'baseline'
  },
  itemsStart: {
    alignItems: 'flex-start'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },

  //width style
  width100: {
    width: '100%'
  },
  width50: {
    width: '50%'
  },

  // input style
  inputRegular: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    width: '100%',
    borderTopLeftRadius: 12,  // Round the top-left corner
    borderTopRightRadius: 12, // Round the top-right corner
    borderBottomLeftRadius: 12, // Optionally set bottom corners to 12 if you want them squared
    borderBottomRightRadius: 12, // Optionally set bottom corners to 0
    height: 50,
    textDecorationLine: 'none',
  },
  inputNative: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    width: '100%',
    borderTopLeftRadius: 12,  // Round the top-left corner
    borderTopRightRadius: 12, // Round the top-right corner
    borderBottomLeftRadius: 12, // Optionally set bottom corners to 12 if you want them squared
    borderBottomRightRadius: 12, // Optionally set bottom corners to 0
    height: 50,
    textDecorationLine: 'none',
    paddingLeft:16,
    paddingVertical:12
  },
  inputTextArea: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    width: '100%',
    borderTopLeftRadius: 12,  // Round the top-left corner
    borderTopRightRadius: 12, // Round the top-right corner
    borderBottomLeftRadius: 12, // Optionally set bottom corners to 12 if you want them squared
    borderBottomRightRadius: 12, // Optionally set bottom corners to 0
    textDecorationLine: 'none',
  },
  inputTextAreaNative: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderWidth: 1,
    width: '100%',
    borderTopLeftRadius: 12,  // Round the top-left corner
    borderTopRightRadius: 12, // Round the top-right corner
    borderBottomLeftRadius: 12, // Optionally set bottom corners to 12 if you want them squared
    borderBottomRightRadius: 12, // Optionally set bottom corners to 0
    textDecorationLine: 'none',
    paddingLeft:16,
    paddingVertical:12,
    paddingTop:0,
    lineHeight:0
  },
  inputCheckbox:{
    borderColor: 'rgba(0, 0, 0, 0.08)',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  textXxs: { fontFamily:'Manrope_500Medium',fontSize: 12 },
  textXs: { fontSize: 13 },
  textS: { fontSize: 14 },
  textM: { fontSize: 16 },
  textL: { fontSize: 18 },
  textXl: { fontSize: 21 },
  textXxl: { fontSize: 30 },

  lineHeightXxS: { lineHeight: 16 },
  lineHeightXs: { lineHeight: 18 },
  lineHeightS: { lineHeight: 20 },
  lineHeightM: { lineHeight: 22 },
  lineHeightL: { lineHeight: 24 },
  lineHeightXl: { lineHeight: 26 },
  lineHeightXxl: { lineHeight: 44 },
});
