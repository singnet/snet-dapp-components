import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((theme: CustomThemeOptions) => ({
  codeSnippetContainer: {
    boxSizing: "border-box",
    width: "100%",
    borderRadius: 4,
    backgroundColor: "#1F1F1F",
    padding: "0 0 0 10px",
    color: theme.palette.text.white,
    fontFamily: "'Space Mono', monospace;",
  },
  codeSnippet: { padding: 10 },
}));
