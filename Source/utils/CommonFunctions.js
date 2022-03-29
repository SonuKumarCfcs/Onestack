import Snackbar from 'react-native-snackbar';

const showSnackbar = (title, color) => {
    Snackbar.show({
      text: title,
      duration: 2000,
      textColor: constants.Colors.white,
      backgroundColor: color,
    });
};
const showSlowSnackbar = (title, color) => {
    Snackbar.show({
      text: title,
      duration: 3000,
      textColor: constants.Colors.white,
      backgroundColor: color,
    });
};
  /**
   * Shows internet not connected error
   *
   */
const showInternetError = () => {
    Keyboard.dismiss();
    setTimeout(() => {
      showSnackbar(strings('internetError'), constants.Colors.black);
    }, 300);
};

export default{
    showInternetError,
    showSlowSnackbar,
    showSnackbar,
}