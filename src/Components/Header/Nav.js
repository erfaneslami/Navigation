import { filterProps, motion } from "framer-motion";
import Classes from "./Nav.module.scss";

const navVariants = {
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

const Nav = (props) => {
  return (
    <div className={Classes["nav-container"]}>
      <nav>
        <ul className={Classes.desktopNav}>
          <motion.li variants={navVariants} exit="exit">
            <a href="" className={Classes.logo}></a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">فروشگاه</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">مک</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">آیپد</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">آیفون</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">اپل واچ</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">ایرپاد</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">اپل هوم</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">لوازم جانبی</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">فقط در اپل</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="">پشتیبانی</a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="#" className={Classes.search} onClick={props.onSearch}></a>
          </motion.li>
          <motion.li variants={navVariants} exit="exit">
            <a href="" className={Classes.cart}></a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
