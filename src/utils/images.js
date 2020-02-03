import logo from "assets/img/MyScoot_coloured.png";
import gridImg1 from "assets/img/1107edcd30fa7d9489be394f91168a6c.png";
import gridImg2 from "assets/img/edbbe8a0ac16ec6581d31e5ac6822999.png";
import gridImg3 from "assets/img/5b843e0a7fbf0bbafbafe9276761f262.png";
import gridImg4 from "assets/img/314acac3bdec619261da1b1dd4e970c6.png";
import gridImg5 from "assets/img/07050e3c3b30752249fa6154cdb3796f.png";
import gridImg6 from "assets/img/58c5cbbad03d473f7f3f325d588b1913.png";
import gridImg7 from "assets/img/0d48f26a58e1535f056bb1766fbe02ee.png";
import gridImg8 from "assets/img/b4a8eb9fccafc9104a2fc3f5455927e3.png";
import conversation from "assets/img/conversation.png";
import vip from "assets/img/vip.png";
import tickets from "assets/img/tickets.png";
import card1 from "assets/img/aa81b190d3a697e6445ca919076a9a7a.png";
import card2 from "assets/img/2 (1).png";
import card3 from "assets/img/Copy of S-M-28-V-11.png";
import userThumb from "assets/img/61442e052bfa0442ab5c60443f95d9d4.png";
import userThumb1 from "assets/img/a72e8327b810f9ce287be175c7b70175.png";
import videoIcon from "assets/img/video-play-icon.png";
import WhatsApp1 from "assets/img/Group.png";
import WhatsApp2 from "assets/img/WhatsApp.png";
import WhatsApp3 from "assets/img/5d1971441d9d1ec329e02add54567baf.png";
import footerBg from "assets/img/tumblr_mnz8loQpbP1s7f3fyo1_1280.png";
import phone from "assets/img/phone.png";
import apple from "assets/img/apple.png";
import google from "assets/img/google.png";
import Detailbg1 from "assets/img/music-concerts-intimate.png";
import Detailbg2 from "assets/img/music-concerts-intimate-setting.png";
import bg2 from "assets/img/bg2.png";

// import defaultBg from "assets/img/Group 1-2.png";
// import defaultBg from "assets/img/Group 1-3.png";
// import defaultBg from "assets/img/click.png";
// import defaultBg from "assets/img/Group 1.png";
// import defaultBg from "assets/img/home_page.png";

const images = {
  logo,
  gridImg1,
  gridImg2,
  gridImg3,
  gridImg4,
  gridImg5,
  gridImg6,
  gridImg7,
  gridImg8,
  conversation,
  vip,
  tickets,
  card1,
  card2,
  card3,
  userThumb,
  userThumb1,
  videoIcon,
  WhatsApp1,
  WhatsApp2,
  WhatsApp3,
  footerBg,
  phone,
  apple,
  google,
  Detailbg2,
  Detailbg1,
  bg2
};
export default function(imageName) {
  return images[imageName];
}
