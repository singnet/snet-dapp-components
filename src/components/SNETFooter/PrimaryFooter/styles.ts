import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  PrimaryFooter: {
    width: "100%",
    display: "flex",
    "@media (max-width:1023px)": { display: "inline-block" },
  },
  LeftData: {
    padding: "12px 30px 0 0",
    borderRightWidth: 1,
    borderRightStyle: "solid",
    borderRightColor: "rgba(219, 227, 231, 0.5)",
    "@media (max-width:1023px)": {
      borderBottom: 1,
      borderBottomStyle: "solid",
      padding: "0 15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    "@media (max-width:400px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  footerLogoSection: {
    textAlign: "right",
    padding: 0,
    margin: 0,
    "& img": {
      "@media (max-width:1023px)": {
        width: 140,
        marginRight: 52,
      },
    },
    "& li": {
      "&:last-of-type": {
        "@media (max-width:1023px)": { marginRight: 0 },
      },
      "@media (max-width:1023px)": {
        marginRight: 25,
        display: "inline-block",
      },
    },
    "@media (max-width:1023px)": {
      padding: "0 15px 10px",
      borderRight: "none",
      display: "inline-block",
      alignItems: "center",
      textAlign: "inherit",
    },
  },
  FooterLogo: {
    "& h1": {
      width: 167,
      margin: 0,
    },
    "& img": { width: "100%" },
  },
}));
