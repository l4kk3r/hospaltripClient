import React from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Turkey = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      {isMatch ? (
        <div className="turkey_sm">
          <div className="turkey_hdiv">
            <h1 className="turkey_h">
              For instance, a <a className="greeeeeen">Hollywood smile</a> in
              Turkey
            </h1>
            <div className="turkey_list">
              <div className="turkey_block_sm">
                <div className="turkey_bloc_small_sm">
                  <p className="turkey_bloc_small_p">from 700$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
              <div className="turkey_block2_sm">
                <div className="turkey_bloc_small_sm">
                  <p className="turkey_bloc_small_p">from 1200$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
              <div className="turkey_block3_sm">
                <div className="turkey_bloc_small_sm">
                  <p className="turkey_bloc_small_p">from 1400$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="turkey">
          <div className="turkey_hdiv">
            <h1 className="turkey_h">
              For instance, a <a className="greeeeeen">Hollywood smile</a> in
              Turkey
            </h1>
            <div className="turkey_list">
              <div className="turkey_block">
                <div className="turkey_bloc_small">
                  <p className="turkey_bloc_small_p">from 700$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
              <div className="turkey_block2">
                <div className="turkey_bloc_small">
                  <p className="turkey_bloc_small_p">from 1200$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
              <div className="turkey_block3">
                <div className="turkey_bloc_small">
                  <p className="turkey_bloc_small_p">from 1400$</p>
                </div>
                <div className="turkey_block_p_bottm">
                  <div className="turkey_block_p">
                    <p className="turkey_block_ppp">
                      Memorial Atasehir Hospital
                    </p>
                  </div>
                  <div className="turkey_block_p_small">
                    <p className="turkey_block_ppp_small">Istanbul, Turkey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Turkey;
