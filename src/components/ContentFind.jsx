import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const ContentFind = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <div>
      {isMatch ? (
        <div className="contentFind">
          <div className="countries_sm">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <PublicIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element_sm">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All countries
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="countries_sm">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <AssignmentIndIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element_sm ">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All departmens
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="countries_sm">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <LocalHospitalIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element_sm">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All types of hospitals
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button className="countries_butt_sm">Search</button>
          </div>
        </div>
      ) : (
        <div className="contentFind">
          <div className="countries">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <PublicIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element " tabindex="2">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All countries
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="countries">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <AssignmentIndIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element " tabindex="2">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All departmens
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="countries">
            <div className="countries_icon">
              <div>
                <button className="countries_icon_b">
                  <LocalHospitalIcon className="countries_icon_button" />
                </button>
              </div>
              <div className="bubble-r-box">
                <select class="bubble-element " tabindex="2">
                  <option
                    class="dropdown-choice_dropdown-placeholder"
                    value=""
                    disabled=""
                  >
                    All types of hospitals
                  </option>
                  <option
                    class="dropdown-choice"
                    value='"BLANK_1427118194589"'
                  ></option>
                  <option class="dropdown-choice" value="">
                    South Korea
                  </option>
                  <option class="dropdown-choice" value="">
                    Germany
                  </option>
                  <option class="dropdown-choice" value="">
                    Israel
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <button className="countries_butt">Search</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentFind;
