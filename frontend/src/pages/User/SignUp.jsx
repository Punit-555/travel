import React from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import logo from "../../assets/img/logo-black.svg";
import swal from "sweetalert";

const UserSignup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data) {
      swal("Success!", "Verification email sent succesfully!", "success");
    } else {
      swal("Oops!", "Eailed to send email", "error");
    }

    console.log("SIGNUP DATA", data);
  };

  return (
    <>
      <div className="card mainCard">
        <img src={logo} alt="" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="firstLabel">Name</label>
          <input type="text" {...register("Name")} required={true} />

          <label className="firstLabel">Email</label>
          <input
            type="email"
            {...register("Email")}
            required={true}
            defaultValue={""}
          />

          <label className="firstLabel lab">Password</label>
          <input
            type="password"
            {...register("Password")}
            required={true}
            defaultValue={""}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UserSignup;
