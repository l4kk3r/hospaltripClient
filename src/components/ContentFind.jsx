import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

const ContentFind = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
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
    </div>
  );
};

export default ContentFind;
