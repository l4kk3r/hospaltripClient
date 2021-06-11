import React, { useContext } from "react";
import TouchAppOutlinedIcon from "@material-ui/icons/TouchAppOutlined";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
import BookOutlinedIcon from "@material-ui/icons/BookOutlined";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const LatestSection = observer(() => {
  const { user } = useContext(Context);
  const handleOpen = () => {
    user.setIsOpenAsk(true);
  };
  return (
    <div className="latestSection">
      <div className="latestSection_div">
        <div className="latestSection_div_title">
          <div className="yourMain_first_content_icon_last">
            <div>
              <TouchAppOutlinedIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div>
            <h3 className="yourMain_first_content_icon_last_h">
              Select an action
            </h3>
          </div>
        </div>
        <div className="latestSection_div_content">
          <div className="latestSection_div_content_p">
            <p className="latestSection_div_content_ppp">
              Send your request to the selected clinic
            </p>
          </div>
          <div className="latestSection_div_content_over">
            <button className="latestSection_div_content_over_butt">
              REQUEST AN APPOINTMENT
            </button>
          </div>
          <div className="latestSection_div_content_p">
            <p className="latestSection_div_content_ppp">
              Write to us and we will advise you
            </p>
          </div>
          <div className="latestSection_div_content_over">
            <button
              className="latestSection_div_content_out_butt"
              onClick={handleOpen}
            >
              GET MEDICAL ADVICE
            </button>
          </div>
        </div>
      </div>
      <div className="latestSection_div">
        <div className="latestSection_div_title">
          <div className="yourMain_first_content_icon_last">
            <div>
              <FavoriteBorderSharpIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div>
            <h3 className="yourMain_first_content_icon_last_h">
              All hospitals on your map
            </h3>
          </div>
        </div>
        <div className="latestSection_div_content"></div>
      </div>
      <div className="latestSection_div">
        <div className="latestSection_div_title">
          <div className="yourMain_first_content_icon_last">
            <div>
              <BookOutlinedIcon className="yourMain_first_content_icon_color" />
            </div>
          </div>
          <div>
            <h3 className="yourMain_first_content_icon_last_h">
              Latest articles
            </h3>
          </div>
        </div>
        <div className="latestSection_div_content">
          <div className="latestSection_div_content_p">
            <p className="latestSection_div_content_ppp">
              Send your request to the selected clinic
            </p>
          </div>
          <div className="latestSection_div_content_over">
            <button className="latestSection_div_content_over_butt">
              REQUEST AN APPOINTMENT
            </button>
          </div>
          <div className="latestSection_div_content_p">
            <p className="latestSection_div_content_ppp">
              Write to us and we will advise you
            </p>
          </div>
          <div className="latestSection_div_content_over">
            <button
              className="latestSection_div_content_out_butt"
              onClick={handleOpen}
            >
              GET MEDICAL ADVICE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LatestSection;
