import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import Checkbox from "@material-ui/core/Checkbox";
import { login, registration } from "../../http/userApi";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import jwt_decode from "jwt-decode";

const SignUp = observer(() => {
  const { user } = useContext(Context);

  const [open, setOpen] = useState(false);
  const [sign, setSign] = useState(false);
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messag, setMessag] = useState("");
  const [messagReg, setMessagReg] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");

  const loginClick = async () => {
    try {
      let data;
      data = await login(email, password).catch(function (error) {
        if (error.response) {
          // alert(error.response.data.message);
          setMessag(error.response.data.message);
        }
      });
      if (data.jwtToken) {
        localStorage.setItem("token", data.jwtToken);
        user.setIsAuth(true);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const createAccaunt = async () => {
    try {
      let data;
      data = await registration(name, email, password, confirmPassword).catch(
        function (error) {
          if (error.response) {
            //alert(error.response.data.message);
            setMessagReg(error.response.data.message);
          }
        }
      );
      if (data.jwtToken) {
        localStorage.setItem("token", data.jwtToken);
        user.setIsAuth(true);
        user.setUser(jwt_decode(data.jwtToken));
      }
    } catch (e) {
      console.log(e.message);
    }
  };

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
      <button className="button_log_butt" onClick={handleClickOpen}>
        Sign up / Login
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
                <div className="input_modal_link_p_c_ddddddddd">
                  <p className="input_modal_link_p_c_ddd">{messagReg}</p>
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="text"
                    placeholder="First name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                  <button className="input_modal_butt" onClick={createAccaunt}>
                    Create an account
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
                <div className="input_modal_link_p_c_ddddddddd">
                  <p className="input_modal_link_p_c_ddd">{messag}</p>
                </div>

                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input_modal">
                  <input
                    className="input_modal_email"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input_modal_butt_div">
                  <button className="input_modal_butt" onClick={loginClick}>
                    Login
                  </button>
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
});

export default SignUp;
