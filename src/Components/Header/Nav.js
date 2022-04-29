import { motion } from "framer-motion";
import Classes from "./Nav.module.scss";

const Nav = () => {
  return (
    <motion.div exit={{ scale: 0.5 }} className={Classes["nav-container"]}>
      <nav>
        <ul className={Classes.desktopNav}>
          <li>
            <a href="" className={Classes.logo}></a>
          </li>
          <li>
            <a href="">فروشگاه</a>
          </li>
          <li>
            <a href="">مک</a>
          </li>
          <li>
            <a href="">آیپد</a>
          </li>
          <li>
            <a href="">آیفون</a>
          </li>
          <li>
            <a href="">اپل واچ</a>
          </li>
          <li>
            <a href="">ایرپاد</a>
          </li>
          <li>
            <a href="">اپل هوم</a>
          </li>
          <li>
            <a href="">لوازم جانبی</a>
          </li>
          <li>
            <a href="">فقط در اپل</a>
          </li>
          <li>
            <a href="">پشتیبانی</a>
          </li>
          <li>
            <a href="" className={Classes.search}></a>
          </li>
          <li>
            <a href="" className={Classes.cart}></a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
