import React from "react";
import MonetizationOnOutlinedIcon from "@material-ui/icons/MonetizationOnOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import EnhancedEncryptionOutlinedIcon from "@material-ui/icons/EnhancedEncryptionOutlined";
const YourMain = () => {
  return (
    <div className="yourMain">
      <div className="yourMain_first">
        <div className="yourMain_first_hhhh">
          <h1 className="yourMain_first_h">
            Your main benefits using Hospaltrip.com
          </h1>
        </div>
        <div className="yourMain_first_ppp">
          <p className="yourMain_first_p">
            A web platform with the ability to find medical care in the absence
            of it locally to
          </p>
        </div>
        <div className="yourMain_first_content">
          <div className="yourMain_first_content_icon">
            <div>
              <MonetizationOnOutlinedIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div className="yourMain_first_content_ppppp">
            <p className="yourMain_first_content_p1"> Save money</p>
            <p className="yourMain_first_content_p2"> Cheap treatment abroad</p>
          </div>
        </div>
        <div className="yourMain_first_content">
          <div className="yourMain_first_content_icon">
            <div>
              <EnhancedEncryptionOutlinedIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div className="yourMain_first_content_ppppp">
            <p className="yourMain_first_content_p1"> Highest quality</p>
            <p className="yourMain_first_content_p2">
              {" "}
              Providing medicine of the required level
            </p>
          </div>
        </div>
        <div className="yourMain_first_content">
          <div className="yourMain_first_content_icon">
            <div>
              <FavoriteBorderSharpIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div className="yourMain_first_content_ppppp">
            <p className="yourMain_first_content_p1"> Save lives</p>
            <p className="yourMain_first_content_p2">
              {" "}
              Thanks to the availability of qualified doctors
            </p>
          </div>
        </div>
      </div>
      <div className="yourMain_second">
        <div className="yourMain_second_rows1">
          <div className="yourMain_second_rows1_firs">
            <img
              className="yourMain_second_rows1_firs_img"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614024882077x907650479026316400%2F7ff1c6fd0b13de64f0b2.jpg?w=384&amp;h=263&amp;auto=compress&amp;fit=crop&amp;dpr=1"
            />
          </div>
          <div className="yourMain_second_rows1_firs">
            <img
              className="yourMain_second_rows1_firs_img"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614025115267x567591139103547100%2F8615566b7ae05c07054-.jpg?w=384&h=287&auto=compress&fit=crop&dpr=1"
            />
          </div>
        </div>
        <div className="yourMain_second_rows2">
          <img
            className="yourMain_second_rows1_firs_img"
            alt=""
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614027591605x868053450186039700%2FMejo-klinik-Rocheste.jpg?w=768&h=271&auto=compress&fit=crop&dpr=1"
          />
        </div>
      </div>
    </div>
  );
};

export default YourMain;
