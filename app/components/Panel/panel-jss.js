const expand = {
  bottom: "auto",
  right: "auto",
  left: "50%",
  top: "50%",
  transform: "translateX(-50%) translateY(-50%)",
};
import { lighten, darken, alpha } from "@mui/material/styles";

const styles = (theme) => ({
  formTheme: {
    //background: theme.palette.background.paper,
    background:
      theme.palette.mode === "dark"
        ? theme.palette.primary.dark
        : theme.palette.background.paper,
    boxShadow: theme.shadows[7],
  },
  hideForm: {
    visibility: "hidden",
    opacity: 0,
    bottom: -20,
    transform: "scale(0.9)",
  },
  btnOpt: {},
  expandButton: {
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
  floatingFormContainer: {
    transition: "all 0.3s cubic-bezier(0.01, 0.65, 0.3, 0.9)",
    position: "fixed",
    zIndex: 1300,
    overflow: "hidden",
    right: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    //border: `1px solid ${theme.palette.primary.main}`,
    //borderRadius: theme.rounded.medium,
  },

  floatingFormHelper: {
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    //border: `1px solid ${theme.palette.primary.main}`,
  },
  drawerButton: {
    marginTop: 50,
    boxShadow: "none",
    textTransform: "none",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    fontSize: 16,
    padding: 4,
    height: 50,
    border: "1px solid",
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      borderColor: theme.palette.secondary.dark,
    },
  },
  floatingFormHelperSection: {
    borderBottomLeftRadius: theme.rounded.medium,
    borderTopLeftRadius: theme.rounded.medium,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    marginTop: 30,
    minHeight: 200,
    width: 400,
    border: `1px solid ${theme.palette.primary.main}`,
    overflow: "auto",
    transition: "width 300ms",
  },
  showHelperSection: {
    display: "block",
  },
  hideHelperSection: {
    width: 0,
    border: 0,
  },
  floatingFormHelperContent: {
    width: 400,
  },
  floatingForm: {
    //transition: 'all 0.3s cubic-bezier(0.01, 0.65, 0.3, 0.9)',
    //position: 'fixed',
    width: 500,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.rounded.medium,
    overflow: "hidden",
    [theme.breakpoints.down('md')]: {
      width: "95% !important",
      ...expand,
    },
    "& header": {
      color:
        theme.palette.mode === "dark"
          ? theme.palette.primary.light
          : theme.palette.primary.dark,
      fontSize: 22,
      padding: "16px 20px",
      position: "relative",
      boxShadow: `0 10px 10px 10px ${theme.palette.background.paper}`,
      fontWeight: 600,
      marginBottom: theme.spacing(1),
      zIndex: 1,
      "&:after": {
        content: '""',
        position: "absolute",
        width: 60,
        height: 4,
        background: theme.palette.primary.main,
        bottom: 0,
        left: 20,
      },
      "& $btnOpt": {
        position: "absolute",
        right: 0,
        top: 0,
        "& > *": {
          margin: "0 5px",
        },
        "& $expandButton": {
          transform: "rotate(270deg)",
        },
        "& svg": {
          fill: theme.palette.text.secondary,
        },
      },
    },
    '& [class^="bodyForm"]': {
      backgroundColor: theme.palette.background.paper,
    },
    '& [class^="buttonArea"]': {
      backgroundColor: theme.palette.background.default,
    },
  },
  showForm: {
    visibility: "visible",
    opacity: 1,
    zIndex: 14181,
    [theme.breakpoints.up("md")]: {
      bottom: 10,
      transform: "scale(1)",
    },
  },
  buttonArea: {
    background: theme.palette.primary.light,
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "right",
    padding: "10px 30px",
    "& button": {
      marginRight: 5,
    },
  },
  expanded: {
    ...expand,
  },
  formOverlay: {
    position: "fixed",
    background: theme.palette.grey[900],
    opacity: 0.7,
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 1300,
  },
  large: {
    width: 650,
  },
  bodyForm: {
    position: "relative",
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      padding: "15px 10px",
    },
    maxHeight: 450,
    overflow: "auto",
  },
});

export default styles;
