import React, { useState } from "react";
import arrowLogo from "../assets/Arrow double left active.png";
import layout4 from "../assets/Layout 4 blocks.png";
import layers from "../assets/Layers.png";
import path94 from "../assets/Path 94.png";
import barcode from "../assets/Barcode read.png";
import path95 from "../assets/Path 95.png";
import styled from "styled-components";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [applicationMenu, setApplicationMenu] = useState([
    "Users",
    "Contacts",
    "Chats",
  ]);
  const [PagesMenu, setPagesMenu] = useState(["Home", "Profile", "About"]);
  const [menu, setMenu] = useState([
    { menu: "Applications", logo: layout4 },
    { menu: "Pages", logo: barcode },
  ]);
  const [innerMenu, setInnerMenu] = useState();
  const [open, setOpen] = useState(-1);
  const handleOpen = (index) => {
    setInnerMenu(index == 0 ? applicationMenu : PagesMenu);
    setOpen(index);
  };
  return (
    <Container>
      <header>
        <section className="header1">
          <h1>DASHBOARD</h1>
          <img src={arrowLogo} alt="" onClick={() => setSidebar(!sidebar)} />
        </section>
        <section className="header2">
          <img src={layers} alt="" />
          <h1>Dashboard</h1>
        </section>
      </header>
      <section className="custom">
        <p>Custom</p>
        {menu.map((option, index) => {
          return (
            <>
              <section className="custom-option" key={index}>
                <img src={option.logo} alt="" />
                <div className="option">
                  <h1>{option.menu}</h1>
                  <img
                    src={path94}
                    alt=""
                    className={open == index ? "path94" : "path94 rotate"}
                    onClick={() => handleOpen(index)}
                  />
                </div>
              </section>
              <div className={open == index ? "open-option" : "close-option"}>
                {innerMenu &&
                  innerMenu.map((option, index) => {
                    return (
                      <section className="inner-option" key={index}>
                        -
                        <div className="option">
                          <h1>{option}</h1>
                          <img src={path95} alt="" className="path95" />
                        </div>
                      </section>
                    );
                  })}
              </div>
            </>
          );
        })}
      </section>
    </Container>
  );
};

const Container = styled.div`
  .close-side {
    width: 0;
  }
  display: flex;
  flex-direction: column;
  width: 319.24px;
  height: 100%;
  background-color: #1e1e2d;
  header {
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
  }
  header .header1 {
    width: 100%;
    height: 78.22px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: white;
    background-color: #1b1b28;
    h1 {
      font-size: 30px;
      line-height: 45px;
    }
    img {
      width: 28.91px;
      height: 28.88px;
    }
  }
  header .header2 {
    width: 100%;
    height: 52.95px;
    display: flex;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    color: white;
    background-color: #1b1b28;
    h1 {
      font-size: 13px;
      font-weight: 400;
      line-height: 45px;
    }
    img {
      width: 28.91px;
      height: 28.88px;
    }
  }
  .custom {
    p {
      padding: 1rem 2rem;
      font-size: 12px;
      color: #4a4b68;
    }
    .open-option {
      height: auto;
      transition: height 1000ms ease-in-out;
    }
    .custom-option {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      .option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      img {
        width: 28.91px;
        height: 28.88px;
      }
      .path94 {
        width: 11.24px;
        height: 6.24px;
      }
      h1 {
        font-size: 13px;
        font-weight: 400;
        line-height: 19.5px;
        color: white;
      }
    }
    .inner-option {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      padding-left: 3rem;
      color: #5b5d80;
      .option {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      img {
        width: 28.91px;
        height: 28.88px;
      }
      .path95 {
        height: 8.52px;
        width: 4.82px;
      }
      h1 {
        font-size: 13px;
        font-weight: 400;
        line-height: 19.5px;
        color: #888c9f;
      }
    }
    .close-option {
      height: 0;
      transition: height 1000ms ease-in-out;
      overflow-y: hidden;
    }
    .rotate {
      transform: rotate(-90deg);
    }
  }
`;

export default Sidebar;
