import React from "react";
import Iframe from "react-iframe";

const GoogleMaps = () => {
  return (
    <div className="mt-10 m-12">
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8643.98116881353!2d89.87599373953984!3d24.369250627734104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdf05a4014cf01%3A0x92168f4a6366c12f!2z4Kav4Kau4KeB4Kao4Ka-IOCmleCmsuCnh-CmnCwg4Ka54Ka-4Kak4Ka_4Kef4Ka-LCDgppXgpr7gprLgpr_gprngpr7gpqTgp4AsIOCmn-CmvuCmmeCnjeCml-CmvuCmh-Cmsg!5e0!3m2!1sen!2sbd!4v1675058345646!5m2!1sen!2sbd"
        width="100%"
        height="420px"
        id=""
        className=""
        display="block"
        position="relative"
      />
    </div>
  );
};

export default GoogleMaps;
