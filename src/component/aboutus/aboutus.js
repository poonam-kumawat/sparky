import "./aboutus.css";
import main_img from "./../../assets/svg/aboutus_MainImg.svg";

const AboutUs = () => {
  return (
    <div>
      <div className="hidden xl:block">
        <img src={main_img} alt="img"></img>
      </div>
      <h1>About us</h1>
    </div>
  );
};
export default AboutUs;
