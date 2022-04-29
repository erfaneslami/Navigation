import { filterProps, motion } from "framer-motion";
import Classes from "./Nav.module.scss";

const navVariants = {
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
  },
};

const Nav = (props) => {
  return (
    <div className={Classes["nav-container"]}>
      <nav>
        <ul className={Classes.desktopNav}>
          <motion.li
            variants={navVariants}
            initial="exit"
            animate="show"
            exit="exit"
            transition={{ delay: 0 }}
          >
            <a href="" className={Classes.logo}></a>
          </motion.li>
          <motion.li
            variants={navVariants}
            initial="exit"
            animate="show"
            exit="exit"
            transition={{ delay: 0.03 }}
          >
            <a href="">فروشگاه</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            initial="exit"
            animate="show"
            exit="exit"
            transition={{ delay: 0.06 }}
          >
            <a href="">مک</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.09 }}
          >
            <a href="">آیپد</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.12 }}
          >
            <a href="">آیفون</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.15 }}
          >
            <a href="">اپل واچ</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.18 }}
          >
            <a href="">ایرپاد</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.21 }}
          >
            <a href="">اپل هوم</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.25 }}
          >
            <a href="">لوازم جانبی</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.28 }}
          >
            <a href="">فقط در اپل</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.31 }}
          >
            <a href="">پشتیبانی</a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.34 }}
          >
            <a href="#" className={Classes.search} onClick={props.onSearch}></a>
          </motion.li>
          <motion.li
            variants={navVariants}
            animate="show"
            exit="exit"
            transition={{ delay: 0.37 }}
          >
            <a href="" className={Classes.cart}></a>
          </motion.li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
