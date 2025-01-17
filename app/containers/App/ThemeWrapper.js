import { createTheme, ThemeProvider, } from "@mui/material/styles";
import { withStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Loading from "@mui/material/LinearProgress";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";
import { bindActionCreators } from "redux";
import { changeModeAction } from "dan-redux/actions/uiActions";
import applicationTheme from "../../styles/theme/applicationTheme";

const styles = {
  root: {
    width: "100%",
    minHeight: "100%",
    marginTop: 0,
    zIndex: 1,
  },
  loading: {
    zIndex: 10,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    opacity: 1,
    transition: "opacity .5s ease",
  },
  loadingWrap: {
    background: "none",
  },
  bar: {
    background: "rgba(255, 255, 255, 0.7)",
  },
  hide: {
    opacity: 0,
    position: "fixed !important",
  },
};

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const ThemeContext = React.createContext(undefined);

function ThemeWrapper(props) {
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState(
    // eslint-disable-next-line
    createTheme(applicationTheme(props.color, props.mode, props.direction))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
        }
        const diff = Math.random() * 40;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeMode = (mode) => {
    // eslint-disable-line
    const { color, changeMode } = props;
    setTheme(createTheme(applicationTheme(color, mode)));
    changeMode(mode);
  };

  const { classes, children } = props;


  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Loading
            variant="determinate"
            value={progress}
            className={progress >= 100 ? classes.hide : ""}
            classes={{
              root: classes.loading,
              colorPrimary: classes.loadingWrap,
              barColorPrimary: classes.bar,
            }}
          />
          <ThemeContext.Provider value={handleChangeMode}>
            {children}
          </ThemeContext.Provider>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
}

ThemeWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  direction: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  color: state.ui.theme,
  mode: state.ui.type,
  direction: state.ui.direction,
});

const dispatchToProps = (dispatch) => ({
  changeMode: bindActionCreators(changeModeAction, dispatch),
});

const ThemeWrapperMapped = connect(
  mapStateToProps,
  dispatchToProps
)(ThemeWrapper);

export default withStyles(styles)(ThemeWrapperMapped);
