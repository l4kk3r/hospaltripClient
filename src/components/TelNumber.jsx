import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const TelNumber = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div className="telNumber">
      <div className="telNumber_phone">
        <img
          className="telNumber_phone_img"
          alt=""
          src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614103435031x152349567192252350%2FHospaltrip-2.png?w=384&amp;h=662&amp;auto=compress&amp;fit=crop&amp;dpr=1"
        />
      </div>
      {isMatch ? (
        <div>
          <div className="telNumber_content_h">
            <h3 className="telNumber_content_hhh_h3">
              You will be able to download the <br />
              Hospaltrip app
            </h3>
          </div>
          <div className="telNumber_content_p">
            <p className="telNumber_content_p">
              Search clinics, compare prices, and send a request in our
              <br />
              application. 24/7 support in multiple languages.
            </p>
          </div>
          <div className="telNumber_content_p2">
            <p className="telNumber_content_p2p2">
              Get the link to download the app first
            </p>
          </div>
          <div className="telNumber_content_text_sm">
            <input
              className="telNumber_content_text_text_sm"
              type="input"
              placeholder="Type here your number"
            />
          </div>
          <div className="telNumber_content_button">
            <button className="telNumber_content_button_butt">Send SMS</button>
          </div>
        </div>
      ) : (
        <div className="telNumber_content">
          <div className="telNumber_content_h">
            <h1 className="telNumber_content_hhh">
              You will be able to download the <br />
              Hospaltrip app
            </h1>
          </div>
          <div className="telNumber_content_p">
            <p className="telNumber_content_p">
              Search clinics, compare prices, and send a request in our
              <br />
              application. 24/7 support in multiple languages.
            </p>
          </div>
          <div className="telNumber_content_p2">
            <p className="telNumber_content_p2p2">
              Get the link to download the app first
            </p>
          </div>
          <div className="telNumber_content_text">
            <input
              className="telNumber_content_text_text"
              type="input"
              placeholder="Type here your number"
            />
          </div>
          <div className="telNumber_content_button">
            <button className="telNumber_content_button_butt">Send SMS</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TelNumber;
