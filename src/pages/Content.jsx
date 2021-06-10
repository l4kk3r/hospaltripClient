import React from "react";
import AskQuestion from "../components/AskQuestion";
import Contacts from "../components/Contacts";
import ContentFind from "../components/ContentFind";
import CountriesTourism from "../components/CountriesTourism";
import Covid from "../components/Covid";
import GetStart from "../components/GetStart";
import Partnership from "../components/Partnership";
import SectionInfo from "../components/SectionInfo";
import SectionWitPic from "../components/SectionWitPic";
import Slider from "../components/Slider";
import TelNumber from "../components/TelNumber";
import TreatmentList from "../components/TreatmentList";
import Turkey from "../components/Turkey";
import YourMain from "../components/YourMain";

const Content = () => {
  return (
    <div className="content_page">
      <ContentFind />
      <GetStart />
      <Covid />
      <SectionInfo />
      <Slider />
      <div>ef</div>
      {/* <SectionWitPic /> */}
      <YourMain />
      <TreatmentList />
      <CountriesTourism />
      <Turkey />
      <AskQuestion />
      <Partnership />
      <TelNumber />
      <Contacts />
    </div>
  );
};

export default Content;
