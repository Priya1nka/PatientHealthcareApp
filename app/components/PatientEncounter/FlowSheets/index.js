import React from "react";
import PropTypes from "prop-types";
import withStyles from "@mui/styles/withStyles";
import { Grid, Box } from "@mui/material";
import PapperBlock from "../../PapperBlock";
import VitalsComponent from "./VitalsComponent";
import BodyMeasurementComp from "./BodyMeasurementComp";
import "./FlowSheets.css";
function FlowSheet(props) {
  return (
    <Grid item xs={12} md={12}>
      <PapperBlock title="FlowSheets" icon="none">
        <Box className="table-container">
          <VitalsComponent />
          <BodyMeasurementComp />
        </Box>
      </PapperBlock>
    </Grid>
  );
}

FlowSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: theme.shade.light,
    color: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    "&$noMargin": {
      margin: 0,
    },
  },
});

export default withStyles(styles)(FlowSheet);
