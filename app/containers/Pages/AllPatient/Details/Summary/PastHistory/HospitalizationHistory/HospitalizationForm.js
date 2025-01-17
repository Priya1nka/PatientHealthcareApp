import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import css from "dan-styles/Form.scss";
import { TextField as MuiTextField } from "@mui/material";
import "dan-styles/vendors/react-draft-wysiwyg/react-draft-wysiwyg.css";
import useWindowDimensions from "dan-utils/useWindowDimensions";
import { FloatingPanel, TextField, DatePicker } from "dan-components";
import { Box, Button, Grid } from "@mui/material";
import Send from "@mui/icons-material/Send";
import { hospitalizationFormSchema } from "dan-api/schema";
import { Formik } from "formik";
import apiCall from "dan-redux/apiInterface";
import moment from "moment";
import { useParams } from "react-router-dom";

function HospitalizationForm(props) {
  const patient = useParams();
  const { open, closeForm, data, type, callBack, setMessage } = props;
  const [editData, setEditData] = useState({});
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (type == 'edit') {
      setEditData(data)
    } else {
      setEditData({})
    }
  }, []);

  const postHospitalization = async (
    values,
    setErrors,
    setStatus,
    setSubmitting
  ) => {
    await apiCall("ehr/hospitalization-history", "post", values)
      .then((res) => {
        if (res && res.Status === "Success") {
          setMessage("Data saved successfully!");
          setStatus({ success: true });
          callBack(true);
        }
      })
      .catch((Error) => {
        let ErrorMessage = Error.ErrorMessage;
        if (Error.ErrorMessage && Array.isArray(Error.ErrorMessage)) {
          ErrorMessage = Error.ErrorMessage.join("\n");
        }
        setMessage(ErrorMessage);
      });
  };

  return (
    <FloatingPanel
      openForm={open}
      closeForm={closeForm}
      title="Hospitalization History"
      extraSize={false}
    >
      <Formik
        initialValues={{
          patientRef: patient && patient.patientRef,
          hospitalizeRef: editData ? editData['hospitalize_id'] : '',
          diagnosis: editData ? editData['diagnosis'] : '',
          admitDate: editData ? moment(editData['admit_date']).format("YYYY-MM-DD") : '',
          onsetYear: editData ? editData['onset_year'] : '',
        }}
        enableReinitialize={true}
        validationSchema={hospitalizationFormSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          postHospitalization(values, setErrors, setStatus, setSubmitting);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          setFieldValue,
          values,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justify: "space-between",
              }}
            >
              <div
                className={css.bodyForm}
                style={{
                  height: height - 140,
                  maxHeight: height - 140,
                  overflow: "auto",
                  padding: "8px !important",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={12}>
                    <TextField
                      fullWidth
                      type="text"
                      name="diagnosis"
                      label="Diagnosis"
                      placeholder="Enter Diagnosis"
                      value={values.diagnosis}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.diagnosis ? errors.diagnosis : ""}
                      error={touched.diagnosis ? errors.diagnosis : ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <DatePicker
                      inputFormat="YYYY-MM-DD"
                      label="Admit Date"
                      value={values.admitDate}
                      onChange={(value) => {
                        const date = moment(value).format("YYYY-MM-DD");
                        setFieldValue("admitDate", date, true);
                      }}
                      renderInput={(params) => (
                        <MuiTextField
                          {...params}
                          fullWidth
                          name="admitDate"
                          variant="standard"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name="onsetYear"
                      label="OnSetYear"
                      placeholder="Enter OnSetYear"
                      value={values.onsetYear}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={touched.onsetYear ? errors.onsetYear : ""}
                      error={touched.onsetYear ? errors.onsetYear : ""}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={css.buttonArea}>
                <Button type="button" onClick={closeForm}>
                  Discard
                </Button>
                <Button type="submit" variant="contained" color="secondary">
                  Save&nbsp;
                  <Send />
                </Button>
              </div>
            </Box>
          </form>
        )}
      </Formik>
    </FloatingPanel>
  );
}


export default HospitalizationForm;
