import React from "react";
import { useForm } from "react-hook-form";

const AuthForm = (props) => {
  const { updateAuthModalView } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.username === "okra_user" && data.password === "okra_pass") {
      updateAuthModalView("user account");
    }
  };

  return (
    <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          className="form-input"
          placeholder="Email Address / Phone Number"
          {...register("username")}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Password / PIN"
          {...register("password")}
        />
      </div>
      <button type="submit" className="button">
        Login
      </button>
    </form>
  );
};
export default AuthForm;
