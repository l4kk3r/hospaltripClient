import React from "react";
import AskQuestion from "../components/AskQuestion";
import Slide from "../components/Slide";
import Contacts from "../components/Contacts";
import ContentFind from "../components/ContentFind";
import CountriesTourism from "../components/CountriesTourism";
import Covid from "../components/Covid";
import GetStart from "../components/GetStart";
import Partnership from "../components/Partnership";
import SectionInfo from "../components/SectionInfo";
import SectionWitPic from "../components/SectionWitPic";
import TelNumber from "../components/TelNumber";
import TreatmentList from "../components/TreatmentList";
import Turkey from "../components/Turkey";
import YourMain from "../components/YourMain";
import LatestSection from "../components/LatestSection";
import AppBarLeft from "../components/modal/AppBarLeft";

const Content = () => {
  return (
    <div className="content_page">
      <ContentFind />
      <GetStart />
      <Covid />
      <SectionInfo />

      <Slide />

      {/* <SectionWitPic /> error*/}
      <YourMain />
      <TreatmentList />
      <CountriesTourism />
      <Turkey />
      <AskQuestion />
      <Partnership />
      <TelNumber />
      <Contacts />
      <LatestSection />
    </div>
  );
};

export default Content;
