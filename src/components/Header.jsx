import React, { useState } from "react";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggleClick = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = () => {
    setIsActive(false); // Close the menu when a link is clicked
  };

  const [checkedItem, setCheckedItem] = useState(null);

  const handleCheckboxChange = (value) => {
    if (checkedItem === value) {
      // If the same checkbox is clicked again, uncheck it
      setCheckedItem(null);
    } else {
      // Otherwise, update the checked item
      setCheckedItem(value);
    }
  };

  return (
    <header id="header">
      <div className="logo">
        <a href="http://www.issatm.rnu.tn/fr/index.php">
          <img src="images/logo.png" className="issat" alt="ISSAT Logo" />
        </a>
      </div>
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        id="toggle"
        onClick={handleToggleClick}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav
        className={`nav-bar ${isActive ? "active" : ""}`}
        id="navbar"
        onClick={handleLinkClick}
      >
        <ul>
          <li className="dropdown">
            <a to="/" className="dropbtn">
              1 LMD
            </a>
            <div className="dropdown-content">
              <a to="/">
                <label for="1-SI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-SI"}
                    onChange={() => handleCheckboxChange("1-SI")}
                  />{" "}
                  SI
                </label>
              </a>
              <a to="/">
                <label for="1-EEA">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-EEA"}
                    onChange={() => handleCheckboxChange("1-EEA")}
                  />{" "}
                  EEA
                </label>
              </a>
              <a to="/">
                <label for="1-ISI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-ISI"}
                    onChange={() => handleCheckboxChange("1-ISI")}
                  />{" "}
                  ISI
                </label>
              </a>
              <a to="/">
                <label for="1-TIC">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-TIC"}
                    onChange={() => handleCheckboxChange("1-TIC")}
                  />{" "}
                  TIC
                </label>
              </a>
            </div>
          </li>
          <li className="dropdown">
            <a to="/" className="dropbtn">
              2 LMD
            </a>
            <div className="dropdown-content">
              <a to="/">
                <label for="2-SI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-SI"}
                    onChange={() => handleCheckboxChange("2-SI")}
                  />{" "}
                  SI
                </label>
              </a>
              <a to="/">
                <label for="2-AII">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-AII"}
                    onChange={() => handleCheckboxChange("2-AII")}
                  />{" "}
                  AII
                </label>
              </a>
              <a to="/">
                <label for="2-EA">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-EA"}
                    onChange={() => handleCheckboxChange("2-EA")}
                  />{" "}
                  EA
                </label>
              </a>
              <a to="/">
                <label for="2-EI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-EI"}
                    onChange={() => handleCheckboxChange("2-EI")}
                  />{" "}
                  EI
                </label>
              </a>
              <a to="/">
                <label for="2-IRS">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-IRS"}
                    onChange={() => handleCheckboxChange("2-IRS")}
                  />{" "}
                  IRS
                </label>
              </a>
              <a to="/">
                <label for="2-SE">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-SE"}
                    onChange={() => handleCheckboxChange("2-SE")}
                  />{" "}
                  SE
                </label>
              </a>
              <a to="/">
                <label for="2-SEIO">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-SEIO"}
                    onChange={() => handleCheckboxChange("2-SEIO")}
                  />{" "}
                  SEIO
                </label>
              </a>
              <a to="/">
                <label for="2-TIC">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-TIC"}
                    onChange={() => handleCheckboxChange("2-TIC")}
                  />{" "}
                  TIC
                </label>
              </a>
            </div>
          </li>
          <li className="dropdown">
            <a to="/" className="dropbtn">
              3 LMD
            </a>
            <div className="dropdown-content">
              <a to="/">
                <label for="3-SI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-SI"}
                    onChange={() => handleCheckboxChange("3-SI")}
                  />{" "}
                  SI
                </label>
              </a>
              <a to="/">
                <label for="3-AII">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-AII"}
                    onChange={() => handleCheckboxChange("3-AII")}
                  />{" "}
                  AII
                </label>
              </a>
              <a to="/">
                <label for="3-EA">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-EA"}
                    onChange={() => handleCheckboxChange("3-EA")}
                  />{" "}
                  EA
                </label>
              </a>
              <a to="/">
                <label for="3-EI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-EI"}
                    onChange={() => handleCheckboxChange("3-EI")}
                  />{" "}
                  EI
                </label>
              </a>
              <a to="/">
                <label for="3-IRS">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-IRS"}
                    onChange={() => handleCheckboxChange("3-IRS")}
                  />{" "}
                  IRS
                </label>
              </a>
              <a to="/">
                <label for="3-SE">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-SE"}
                    onChange={() => handleCheckboxChange("3-SE")}
                  />{" "}
                  SE
                </label>
              </a>
              <a to="/">
                <label for="3-SEIO">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-SEIO"}
                    onChange={() => handleCheckboxChange("3-SEIO")}
                  />{" "}
                  SEIO
                </label>
              </a>
              <a to="/">
                <label for="3-TIC">
                  <input
                    type="checkbox"
                    checked={checkedItem === "3-TIC"}
                    onChange={() => handleCheckboxChange("3-TIC")}
                  />{" "}
                  TIC
                </label>
              </a>
            </div>
          </li>
          <li className="dropdown">
            <a to="/" className="dropbtn">
              1 Mastère
            </a>
            <div className="dropdown-content">
              <a to="/">
                <label for="1-CPS">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-CPS"}
                    onChange={() => handleCheckboxChange("1-CPS")}
                  />{" "}
                  CPS
                </label>
              </a>
              <a to="/">
                <label for="1-CSI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-CSI"}
                    onChange={() => handleCheckboxChange("1-CSI")}
                  />{" "}
                  CSI
                </label>
              </a>
              <a to="/">
                <label for="1-RT">
                  <input
                    type="checkbox"
                    checked={checkedItem === "1-RT"}
                    onChange={() => handleCheckboxChange("1-RT")}
                  />{" "}
                  RT
                </label>
              </a>
            </div>
          </li>
          <li className="dropdown">
            <a to="/" className="dropbtn">
              2 Mastère
            </a>
            <div className="dropdown-content">
              <a to="/">
                <label for="2-CPS">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-CPS"}
                    onChange={() => handleCheckboxChange("2-CPS")}
                  />{" "}
                  CPS
                </label>
              </a>
              <a to="/">
                <label for="2-CSI">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-CSI"}
                    onChange={() => handleCheckboxChange("2-CSI")}
                  />{" "}
                  CSI
                </label>
              </a>
              <a to="/">
                <label for="2-TRT">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-TRT"}
                    onChange={() => handleCheckboxChange("2-TRT")}
                  />{" "}
                  TRT
                </label>
              </a>
              <a to="/">
                <label for="2-SSR">
                  <input
                    type="checkbox"
                    checked={checkedItem === "2-SSR"}
                    onChange={() => handleCheckboxChange("2-SSR")}
                  />{" "}
                  SSR
                </label>
              </a>
            </div>
          </li>
          <div className="login" id="login">
            <li>
              <a href="index.html" className="navlogin">
                Agent administratif
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
