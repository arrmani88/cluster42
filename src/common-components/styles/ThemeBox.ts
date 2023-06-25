import { StyleSheet } from "react-native";
import { CustomTheme } from "../../constants/theme";
import { padding } from "../../utils/padding";


export default (theme: CustomTheme) => StyleSheet.create({
  container: {
    marginTop: 15,
    ...padding(15, 15),
    width: '100%',
    backgroundColor: theme.colors.bgPrimary,
    borderRadius: 8,

    elevation: 10,
    shadowColor: theme.colors.boxShadow,
    shadowOffset: {
      width: 0,
      height: 21,
    },
    shadowOpacity: 1,
    shadowRadius: 59,
  },
})

