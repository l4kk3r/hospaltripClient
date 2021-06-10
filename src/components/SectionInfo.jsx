import React from "react";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import PeopleIcon from "@material-ui/icons/People";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import ForumIcon from "@material-ui/icons/Forum";

const SectionInfo = () => {
  return (
    <div className="sectionInfo">
      <div className="sectionInfo_block">
        <div className="sectionInfo_block_icon">
          <HowToRegIcon className="sectionInfo_block_icon_size" />
        </div>
        <div className="sectionInfo_block_number">56</div>
        <div className="sectionInfo_block_info">Hospital Partners</div>
      </div>
      <div className="sectionInfo_block">
        <div className="sectionInfo_block_icon">
          <PeopleIcon className="sectionInfo_block_icon_size" />
        </div>
        <div className="sectionInfo_block_number">24/7</div>
        <div className="sectionInfo_block_info">Patient support</div>
      </div>
      <div className="sectionInfo_block">
        <div className="sectionInfo_block_icon">
          <EnhancedEncryptionIcon className="sectionInfo_block_icon_size" />
        </div>
        <div className="sectionInfo_block_number">76</div>
        <div className="sectionInfo_block_info">Medical area</div>
      </div>
      <div className="sectionInfo_block">
        <div className="sectionInfo_block_icon">
          <ForumIcon className="sectionInfo_block_icon_size" />
        </div>
        <div className="sectionInfo_block_number">
          <div className="img_lang">
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003467348x762755173952708700%2F1f1ec-1f1e7.png?w=48&amp;h=48&amp;auto=compress&amp;fit=crop&amp;dpr=1"
            />
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003703051x904856209537192600%2F1f1e8-1f1f3.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
            />
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003712708x241768768970268100%2F1f1ea-1f1f8.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
            />
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003775092x682732746710442000%2F1f1eb-1f1f7.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
            />
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003782772x809793579403245600%2F1f1f7-1f1fa.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
            />
            <img
              className="img_lang_bind"
              alt=""
              src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1614003788612x496218431010318600%2F1f1e6-1f1ea.png?w=48&h=48&auto=compress&fit=crop&dpr=1"
            />
          </div>
        </div>
        <div className="sectionInfo_block_info">We speak</div>
      </div>
    </div>
  );
};

export default SectionInfo;
