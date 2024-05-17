import React from 'react';
import '../style/footer1.css';
import logoImage from '../img/toplogo.png';
function Footer() {
  return (
    <div className="styles-module_container_3bCyC styles-module_footer_3vV0p snipcss-XAbyj">
      <div className="styles-module_footerlogo_1LxO9">
        <img src={logoImage} alt="logo" className="styles-module_logo_2W5q-" />
        <p className="styles-module_s_1dYOu styles-module_copyright_w9bq2">
          ©︎2019 Shueisha Inc. <span>All rights reserved</span>.
        </p>
      </div>
      <div className="styles-module_toggle_1Ez_j">
        <div className="styles-module_vertical_1oSu4">
          <div className="styles-module_horizontal_1i3Jc">
            <div className="styles-module_container_3Ng4k styles-module_footerNavigation_2XusU">
              <div className="styles-module_flexContainer_2BcQU">
                <a href="" className="styles-module_item_19Jr0">Help</a>
                <a href="" className="styles-module_item_19Jr0">News and Events</a>
                <a href="" className="styles-module_item_19Jr0">Privacy Policy</a>
                <a href="" className="styles-module_item_19Jr0">Terms of Services</a>
                <a href="" className="styles-module_item_19Jr0">Content Ratings</a>
                <a href="" className="styles-module_item_19Jr0">Copyrights</a>
              </div>
            </div>
            <div className="styles-module_container_aAOj- styles-module_sns_1MuOK">
              <p className="styles-module_m_1410x styles-module_message_1dxVo">Follow Us!</p>
              <a href=""><img src="https://mangaplus.shueisha.co.jp/img/flogo-HexRBG-Wht-58.e3d3a393.svg" alt="" width="40" className="styles-module_icon_2bT0W" /></a>
            </div>
          </div>
          <div className="styles-module_abj_3Qpv-">
            <img src="https://mangaplus.shueisha.co.jp/img/abj1092_1042.6c597180.png" alt="ABJLogo" width="72" height="59" className="styles-module_abjLogo_2yZ-i" />
            <p className="styles-module_s_1dYOu styles-module_abjText_1tKPN">
              ABJ Mark is a registered trademark (Registration No.10921042) indicating that this e-book store / e-book distribution service is an authorized distribution service that gained permission to use content from the copyright holder. For more information check <a href="https://aebs.or.jp/">https://aebs.or.jp/</a>.
            </p>
          </div>
        </div>
        <div className="styles-module_container_kWnuS styles-module_appInfo_1BHlS">
          <img src={logoImage} alt="app_icon" width="80" height="80" className="styles-module_appIcon_rGZ68" />
          <div className="styles-module_vertical_2WFUo">
            <p className="styles-module_m_1410x styles-module_text_2Gg98">Download the app and read it anytime!</p>
            <div className="styles-module_horizontal_nhDKQ">
              <a href=""><img src="https://mangaplus.shueisha.co.jp/img/AppStoreIcon.2928664f.svg" alt="AppStoreIcon" width="120" height="40" className="styles-module_appStoreIcon_3joeo" /></a>
              <a href=""><img src="https://mangaplus.shueisha.co.jp/img/google-play-badge.2104fab3.png" alt="PlayStoreIcon" width="134" height="40" className="styles-module_playStoreIcon_2Wzvj" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
