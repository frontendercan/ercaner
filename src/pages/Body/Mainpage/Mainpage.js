import React, { useContext, useState } from "react";
import "./mainpage.css";
import profile from "../../../assets/img/profile.png";
import { motion } from "framer-motion";
import IconComponent from "../../../components/Icon";
import { ThemeContext } from "../../../App";
import arrow from "../../../assets/img/arrow.png";

const bioMessages = {
  shortest: (
    <motion.div
      id="shortest"
      key="shortest"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      I'm a front-end developer
    </motion.div>
  ),
  short: (
    <motion.div
      id="short"
      key="short"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      I'm a front-end developer. I was born in Samsun, Turkey. I'm 32 years old.
      I working 8 years in web and Mobile development.
    </motion.div>
  ),
  medium: (
    <motion.div
      id="medium"
      key="medium"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
  long: (
    <motion.div
      key="long"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
  longest: (
    <motion.div
      key="longest"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      "I'm a full-stack developer, I love to create web applications and mobile
      applications. I'm a self-taught developer and I'm always looking for new
      challenges.",
    </motion.div>
  ),
};

const Mainpage = () => {
  const [slider, setSlider] = useState(() => "medium");
  const theme = useContext(ThemeContext);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

  const onChangeSliderHandler = ({ target }) => {
    setSlider(target.value);
  };

  return (
    <div className="section-profile">
      <div className="arrow-img-container">
        <img className="arrow-image" src={arrow} alt="profile" />
      </div>
      <motion.div
        id="profile-image-container"
        whileTap={{ scale: 0.8, rotate: 1800, borderRadius: "100%" }}
        onTap={() => setIsSocialOpen((prevState) => !prevState)}
      >
        <img
          src={profile}
          alt="profile"
          className="profile-img"
          loading="lazy"
        />
      </motion.div>

      <div className="bio-main-container">
        <h1 className={"defination-person-" + theme}>
          Hello
          <motion.div
            whileHover={{
              scale: 1,
              rotate: 30,
              cursor: "pointer",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            👋
          </motion.div>
          I'am Ercan Er.
        </h1>
        {isSocialOpen && (
          <motion.div
            id="icon-container-animation-div"
            initial={{ opacity: 0, scaleZ: 0, x: -80, z: -10 }}
            animate={{ opacity: 1, scaleZ: 1, x: 20, z: 20 }}
            transition={{
              type: "spring",
              stiffness: 960,
              damping: 200,
            }}
          >
            <IconComponent id="github" iconName="github" />
            <IconComponent id="twitter" iconName="twitter" />
            <IconComponent id="instagram" iconName="instagram" />
          </motion.div>
        )}
        <p
          style={
            theme === "dark"
              ? { color: "#fff", opacity: "0.5" }
              : { color: "#000", opacity: "0.5" }
          }
        >
          Adjust bio length:
        </p>
        <div className="slider-button-list">
          <p
            style={
              theme === "dark"
                ? { color: "#fff", opacity: "0.5" }
                : { color: "#000", opacity: "0.5" }
            }
          >
            shortest
          </p>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="shortest"
              value="shortest"
              checked={slider === "shortest"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="shortest" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="short"
              value="short"
              checked={slider === "short"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="short" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="medium"
              value="medium"
              checked={slider === "medium"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="medium" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="long"
              value="long"
              checked={slider === "long"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="long" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <div className="radio-container">
            <input
              type="radio"
              className="slider-button"
              name="bio"
              id="longest"
              value="longest"
              checked={slider === "longest"}
              onChange={(event) => onChangeSliderHandler(event)}
            />
            <label htmlFor="longest" className="slider-label">
              <span className="slider-label-text" />
            </label>
          </div>
          <p
            style={
              theme === "dark"
                ? { color: "#fff", opacity: "0.5" }
                : { color: "#000", opacity: "0.5" }
            }
          >
            longest
          </p>
        </div>

        <div className={"bioMessages-" + theme}>{bioMessages[slider]}</div>
      </div>
    </div>
  );
};

export default Mainpage;
