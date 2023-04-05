import React, { useContext } from "react";
import { useFormik } from "formik";
import { FormSchema } from "../schemas/FormSchema";
import "../styles/cart.css";
import { cartContext } from "../context/cartContext";

const Form = () => {
  const { setModal, setSuccess, dispatch } = useContext(cartContext);
  const onSubmit = (_, actions) => {
    setTimeout(() => {
      actions.resetForm();
      setModal(false);
      setSuccess(true);
      dispatch({ type: "RESET_CART" });
    }, 2000);
  };
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullname: "",
      phone: "",
      province: "",
      city: "",
      area: "",
      address: "",
      landmark: "",
    },
    validationSchema: FormSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="formleft">
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.fullname && touched.fullname ? "input-error" : ""}
            type="text"
            placeholder="Full Name"
            id="fullname"
          />
          {errors.fullname && touched.fullname && (
            <p className="error-msg">{errors.fullname}</p>
          )}
        </div>
        <div>
          <label htmlFor="phone">Mobile Number</label>
          <input
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phone && touched.phone ? "input-error" : ""}
            type="number"
            placeholder="Mobile Number"
            id="phone"
          />
          {errors.phone && touched.phone && (
            <p className="error-msg">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <input
            value={values.province}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.province && touched.province ? "input-error" : ""}
            type="text"
            placeholder="Province"
            id="province"
          />
          {errors.province && touched.province && (
            <p className="error-msg">{errors.province}</p>
          )}
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.city && touched.city ? "input-error" : ""}
            type="text"
            placeholder="City"
            id="city"
          />
          {errors.city && touched.city && (
            <p className="error-msg">{errors.city}</p>
          )}
        </div>
        <div>
          <label htmlFor="area">Area</label>
          <input
            value={values.area}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.area && touched.area ? "input-error" : ""}
            type="text"
            placeholder="Area"
            id="area"
          />
          {errors.area && touched.area && (
            <p className="error-msg">{errors.area}</p>
          )}
        </div>
      </div>
      <div className="formright">
        <div>
          <label htmlFor="address">Address</label>
          <input
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.address && touched.address ? "input-error" : ""}
            type="text"
            placeholder="House no. / building / street /area"
            id="address"
          />
          {errors.address && touched.address && (
            <p className="error-msg">{errors.address}</p>
          )}
        </div>
        <div>
          <label htmlFor="landmark">Landmark (Optional)</label>
          <input
            value={values.landmark}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.landmark && touched.landmark ? "input-error" : ""}
            type="text"
            placeholder="Eg. beside bus station"
            id="landmark"
          />
          {errors.landmark && touched.landmark && (
            <p className="error-msg">{errors.landmark}</p>
          )}
        </div>
        <div>
          <button type="submit" disabled={isSubmitting}>
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
