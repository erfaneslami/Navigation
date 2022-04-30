import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Classes from "./MobileNav.module.scss";

const menuVariant = {
  initial: {
    height: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    height: "100vh",
    transition: {
      duration: 0.4,
    },
  },
};

const MobileNav = (props) => {
  const [isOpenMenu, setIsMenu] = useState(true);

  const headerClass = `${Classes.mobileNav} ${isOpenMenu && Classes.open}`;

  const toggleMenu = () => {
    setIsMenu((preState) => {
      return !preState;
    });
  };

  return (
    <>
      <ul className={headerClass}>
        <li>
          <a className={Classes.cartIcon}></a>
        </li>
        <li>
          <a className={Classes.appleIcon}></a>
        </li>
        <li>
          <div className={Classes.menuIcon} onClick={toggleMenu}>
            <div>
              <span className={Classes.lineOne}></span>
              <span className={Classes.lineTow}></span>
            </div>
          </div>
        </li>
      </ul>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.ul
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="initial"
            className={Classes.mobileNavList}
          >
            <li>
              <a href="#">فروشگاه</a>
            </li>
            <li>
              <a href="#">مک</a>
            </li>
            <li>
              <a href="#">آیپد</a>
            </li>
            <li>
              <a href="#">آیفون</a>
            </li>
            <li>
              <a href="#">اپل واچ</a>
            </li>
            <li>
              <a href="#">ایرپاد</a>
            </li>
            <li>
              <a href="#">اپل هوم</a>
            </li>
            <li>
              <a href="#">لوازم جانبی</a>
            </li>
            <li>
              <a href="#">فقط در اپل</a>
            </li>
            <li>
              <a href="#">پشتیبانی</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
