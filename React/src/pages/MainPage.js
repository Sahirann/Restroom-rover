import { useState, useCallback } from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";

const MainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.MainPage}>
        <img className={styles.mapIcon} alt="" src="/map.svg" />
        <div className={styles.menu} onClick={openMenu}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </div>
        <div className={styles.searchAni}>
          <div className={styles.searchToolWrapper}>
            <div className={styles.searchTool}>
              <div className={styles.search}>Search...</div>
              <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.mubanSirinpark}>MuBan Sirinpark</div>
            <div className={styles.theLife}>The Life</div>
            <div className={styles.kmutnb}>Kmutnb</div>
            <div className={styles.ngamwongwan}>Ngamwongwan</div>
            <div className={styles.smartBall}>Smart Ball</div>
            <div className={styles.maiyakfsignal}>MaiyakFsignal</div>
            <div className={styles.groupItem} />
            <div className={styles.groupInner} />
            <div className={styles.lineDiv} />
            <div className={styles.groupChild1} />
            <div className={styles.groupChild2} />
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default MainPage;
