import React, { useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import { observer } from "mobx-react-lite";
import { Context } from "../../index";

const AskQues = observer(() => {
  const { user } = useContext(Context);
  const handleClickOpen = () => {
    user.setIsOpenAsk(true);
    // setOpen(true);
  };

  const handleClose = () => {
    user.setIsOpenAsk(false);
    //setOpen(false);
  };
  return (
    <div>
      <button
        className="askQuestion_div_footer_row_button"
        onClick={handleClickOpen}
      >
        Ask a question
      </button>

      <Dialog
        open={user.isOpenAsk}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <div className="dialog_sign">
          <div className="dialog_title">
            <h3 className="dialog_title_h2">Get a 5% diccount</h3>
            <div className="dialog_title_askque">
              <p className="dialog_title_p_askque">
                Hey! We will give full access to the{" "}
                <a className="dialog_title_a_askque">Hospaltrip.com</a> service
                very soon. Leave your email to receive an invitation.
              </p>
            </div>

            <div className="input_modal">
              <input
                className="input_modal_email"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="input_modal">
              <input
                className="input_modal_email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input_modal_butt_div">
              <button className="input_modal_butt_green">Send Email</button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
});

export default AskQues;
