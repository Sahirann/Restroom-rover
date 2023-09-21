import { useState, useCallback } from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import Card from "../components/Card";

const MainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <Card name={"dome"} address={"294/111 domedasdsdasdasdas"} point={3.0} count_comment={5}></Card>
  );
};

export default MainPage;
