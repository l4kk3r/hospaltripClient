import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
import AskQues from "./modal/AskQues";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const AskQuestion = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="askQuestion">
      <div className="askQuestion_div">
        {/* <div className="askQuestion_picture">
          <img
            className="askQuestion_picture_img"
            alt=""
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614033840550x323840642950818500%2F2020-11-11_012708.jpg?w=384&amp;h=384&amp;auto=compress&amp;fit=crop&amp;dpr=1"
          />
        </div> */}
        <div className="askQuestion_div_h">
          <h1 className="askQuestion_div_hhh">Let us help you</h1>
        </div>
        <div lassName="askQuestion_div_content_prosto">
          <div className="askQuestion_div_content">
            <p className="askQuestion_div_content_ppp">
              Not sure how to start? Not sure which clinic you need? It's not a
              problem. Let's find the right clinic together. It's totally free.
            </p>
          </div>
        </div>
        {isMatch ? (
          <div className="askQuestion_sm">
            <AskQues />
          </div>
        ) : (
          <div className="askQuestion_div_footer">
            <div className="askQuestion_div_footer_row">
              <div>
                <div>
                  <h2 className="askQuestion_div_footer_row_h">
                    Dr. Walid Mhamda
                  </h2>
                </div>
                <div>
                  <p className="askQuestion_div_footer_row_p">
                    Co-founder and your personal <br />
                    Patient Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="askQuestion_div_footer_row">
              <AskQues />
            </div>

            <div className="askQuestion_div_footer_row_icon">
              <p className="askQuestion_div_footer_row_p">or contact via</p>

              <WhatsAppIcon className="ask_block_icon_size_w" />
              <TelegramIcon className="ask_block_icon_size_t" />
              <FacebookIcon className="ask_block_icon_size_f" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AskQuestion;
