import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import SignUp from "./SignUp";
import Checkbox from "@material-ui/core/Checkbox";

const SignIn = () => {
  const [open, setOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleChangeChecked = (event) => {
    setChecked(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handle = () => {
    if (sign) {
      setSign(false);
    } else setSign(true);
  };
  return (
    <div>
      <button className="get_start_butt" onClick={handleClickOpen}>
        GET STARTED
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="dialog_sign">
          <div className="dialog_title">
            {sign ? (
              <>
                <h2 className="dialog_title_h2">Register</h2>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="text"
                    placeholder="First name"
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Repeat password"
                  />
                </div>
                <div className="input_modal_link_ckecked">
                  <div>
                    <Checkbox
                      color="primary"
                      checked={checked}
                      onChange={handleChangeChecked}
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  </div>
                  <div>
                    <p className="input_modal_link_p_c">
                      I agree with terms & conditions{" "}
                    </p>
                  </div>
                </div>
                <div className="input_modal_butt_div">
                  <button className="input_modal_butt">
                    Create an account
                  </button>
                </div>
                <div className="input_modal_butt_div">
                  <button className="input_modal_butt">
                    Signup as a manager
                  </button>
                </div>
                <div className="input_modal_link">
                  <p className="input_modal_link_p">
                    Already a member?{" "}
                    <a className="input_modal_link_a" onClick={handle}>
                      Sign in!
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <h2 className="dialog_title_h2">Login</h2>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div className="input_modal_butt_div">
                  <button className="input_modal_butt">Login</button>
                </div>
                <div className="input_modal_link">
                  <p className="input_modal_link_p">
                    Dont have an account?{" "}
                    <a className="input_modal_link_a" onClick={handle}>
                      Sign up!
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SignIn;
