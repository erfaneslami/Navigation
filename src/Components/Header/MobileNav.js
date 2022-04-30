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

    // height: "100%",
    transition: {
      duration: 0.4,
    },
  },
};

const searchMenuVariant = {
  initial: {
    height: 0,
    transition: {
      type: "tween",
      delay: 0.02,
    },
  },
  animate: {
    height: "auto",
    transition: {
      type: "tween",
    },
  },
};

const MobileNav = (props) => {
  const [isOpenMenu, setIsMenu] = useState(false);
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  const headerClass = `${Classes.mobileNav} ${isOpenMenu && Classes.open}`;
  const burgerClass = `${Classes.menuIcon} ${isOpenMenu && Classes.active}`;

  const toggleMenu = () => {
    setIsMenu((preState) => {
      return !preState;
    });
  };

  const setFocus = () => {
    setIsSearchFocus(true);
  };

  const setNoFocus = () => {
    setIsSearchFocus(false);
  };

  return (
    <>
      <ul className={headerClass}>
        <li>
          <div className={burgerClass} onClick={toggleMenu}>
            <div>
              <span className={Classes.lineOne}></span>
              <span className={Classes.lineTow}></span>
            </div>
          </div>
        </li>
        <li>
          <span className={Classes.appleIcon}></span>
        </li>
        <li>
          <span className={Classes.cartIcon}></span>
        </li>
      </ul>

      <AnimatePresence>
        {isOpenMenu && (
          <motion.div
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="initial"
            className={Classes.menu}
          >
            <div className={Classes.searchContainer}>
              <motion.form
                variants={searchMenuVariant}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                {isSearchFocus && (
                  <motion.button
                    onClick={setNoFocus}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type="button"
                    className={Classes.cancelBtn}
                  >
                    کنسل
                  </motion.button>
                )}

                <motion.input
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  type="text"
                  onFocus={setFocus}
                  placeholder=" جستجوی محصولات ..."
                />
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={Classes.searchLogo}
                ></motion.div>
              </motion.form>
            </div>
            <motion.ul variants={menuVariant} className={Classes.mobileNavList}>
              <li>
                <a href="./">فروشگاه</a>
              </li>
              <li>
                <a href="./">مک</a>
              </li>
              <li>
                <a href="./">آیپد</a>
              </li>
              <li>
                <a href="./">آیفون</a>
              </li>
              <li>
                <a href="./">اپل واچ</a>
              </li>
              <li>
                <a href="./">ایرپاد</a>
              </li>
              <li>
                <a href="./">اپل هوم</a>
              </li>
              <li>
                <a href="./">لوازم جانبی</a>
              </li>
              <li>
                <a href="./">فقط در اپل</a>
              </li>
              <li>
                <a href="./">پشتیبانی</a>
              </li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
