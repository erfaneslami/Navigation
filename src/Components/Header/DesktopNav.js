import { motion } from "framer-motion";
import Classes from "./DesktopNav.module.scss";

const navVariants = {
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.36 - i * 0.03,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    scale: 0.8,
    transition: {
      delay: i * 0.03,
    },
  }),
};

const DesktopNav = (props) => {
  return (
    <ul className={Classes.desktopNav}>
      <motion.li
        variants={navVariants}
        custom={0}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a className={Classes.logo}></a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={1}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">فروشگاه</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={2}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">مک</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={3}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">آیپد</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={4}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">آیفون</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={5}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">اپل واچ</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={6}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">ایرپاد</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={7}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">اپل هوم</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={8}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">لوازم جانبی</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={9}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">فقط در اپل</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={10}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#">پشتیبانی</a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={11}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="#" className={Classes.search} onClick={props.onSearch}></a>
      </motion.li>
      <motion.li
        variants={navVariants}
        custom={12}
        initial="exit"
        animate="show"
        exit="exit"
      >
        <a href="" className={Classes.cart}></a>
      </motion.li>
    </ul>
  );
};

export default DesktopNav;
