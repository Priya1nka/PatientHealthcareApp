import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import classNames from "classnames";
import { Link, Route } from "react-router-dom";
import styles from "./breadCrumb-jss";

const Breadcrumbs = (props) => {
  const { classes, theme, separator, location } = props;
  return (
    <section
      className={classNames(
        theme === "dark" ? classes.dark : classes.light,
        classes.breadcrumbs
      )}
    >
      <Route
        path="*"
        render={() => {
          let parts = location.pathname.split("/");
          let lastElement = parts.slice(-1)[0];
          let uuidRegex =
            /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
          let numberRegex = /^[0-9]/;
          if (uuidRegex.test(lastElement) || numberRegex.test(lastElement)) {
            parts.pop();
          }
          const place = parts[parts.length - 1];
          parts = parts.slice(1, parts.length - 1);
          return (
            <p>
              You are here:
              <span>
                {parts.map((part, partIndex) => {
                  const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
                  return (
                    <Fragment key={path}>
                      <Link to={path}>{part}</Link>
                      {separator}
                    </Fragment>
                  );
                })}
                &nbsp;
                {place}
              </span>
            </p>
          );
        }}
      />
    </section>
  );
};

Breadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  theme: PropTypes.string.isRequired,
  separator: PropTypes.string.isRequired,
};

export default withStyles(styles)(Breadcrumbs);
