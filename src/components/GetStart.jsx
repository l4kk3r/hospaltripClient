import React, { useContext } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const GetStart = observer(() => {
  const { user } = useContext(Context);
  const handleClickOpen = () => {
    user.setIsOpen(true);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="content_page">
      {isMatch ? (
        <div className="content_page">
          {/*  <div className="getStart_mob">
          {/* <div className="getStart_first_coll">
            <div className="getStart_mobile_first">
              <div>
                <div>
                  <p className="getStart_mobile_first_coll_p">
                    Say goodbye to agencies
                  </p>
                </div>
                <h3 className="getStart_first_coll_fir_h">
                  FIND <br /> A TOP-LEVEL CLINIC <br /> HERE
                </h3>
              </div>
              <div>
                <p>*It's TOTALLY FREE</p>
              </div>
            </div>

            <div>
              <button>GET STARTED</button>
            </div>
          </div> */}
          {/* <div className="box_second_woman_mob">
            <div className="box_on_woman_mob"></div>
            <div className="img_woman_mob"></div>
          </div> */}
        </div>
      ) : (
        <div className="getStart">
          <div className="getStart_first_coll">
            <div className="getStart_first_coll_fir">
              <div>
                <p className="getStart_first_coll_p">Say goodbye to agencies</p>
              </div>
              <div>
                <h1 className="getStart_first_coll_h">
                  FIND A TOP-LEVEL CLINIC <br /> HERE*
                </h1>
              </div>
              <div>
                <p className="getStart_first_coll_r">*It's TOTALLY FREE</p>
              </div>
            </div>

            <button className="get_start_butt" onClick={handleClickOpen}>
              GET STARTED
            </button>
          </div>
          <div>
            <h2 className="uppercase">
              Digital healthcare platform <br /> will help you to <br />
              find the best clinic abroad, <br />
              organize trip and return home.
            </h2>
          </div>
          <div>
            <div className="box_on_woman">
              <p className="box_on_woman_p">
                Hit <a className="box_on_woman_a">Hospaltrip service</a> above
                to explore
              </p>
            </div>
            <div className="img_woman"></div>
          </div>
        </div>
      )}
    </div>
  );
});

export default GetStart;
