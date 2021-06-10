import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts_h">
        <h1 className="contacts_hhh">Our contacts</h1>
      </div>
      <div className="contacts_p">
        <p className="contacts_ppp">
          Feel free to write, call and visit us. <br />
          We really love to <br />
          communicate with our clients and partners.
        </p>
      </div>
      <div className="contacts_content">
        <div className="contacts_content_block">
          <h2 className="contacts_content_block_h">Say Hello</h2>
          <p className="contacts_content_block_p">For general questions</p>
          <p className="contacts_content_block_p_green">hello@hospaltrip.com</p>
        </div>
        <div className="contacts_content_block">
          <h2 className="contacts_content_block_h">Personal medical support</h2>
          <p className="contacts_content_block_p">Dr. Walid Mhamda</p>
          <p className="contacts_content_block_p_green">dr@hospaltrip.com</p>
        </div>
        <div className="contacts_content_block">
          <h2 className="contacts_content_block_h">Work With Us, ect.</h2>
          <p className="contacts_content_block_p">Vladislav Serov</p>
          <p className="contacts_content_block_p_green">ceo@hospaltrip.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
