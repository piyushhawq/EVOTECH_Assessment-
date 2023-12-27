import React from "react";
import styled from "styled-components";
import search from "../assets/Search.png";
import equalizer from "../assets/Equalizer.png";
import columns from "../assets/Columns.png";
import circle2 from "../assets/circle 2.png";
import circle3 from "../assets/Ellipse 6 (1).png";
import circle4 from "../assets/Ellipse 6 (2).png";
import ellipse from "../assets/Ellipse 6.png";
import group from "../assets/Group.png";
import compiling from "../assets/Compiling.png";
import plurk from "../assets/184-plurk.png";
import telegram from "../assets/186-telegram.png";
import bebo from "../assets/182-bebo.png";
import puzzle from "../assets/194-puzzle.png";
import layout4 from "../assets/Layout 4 blocks.png";
import trash from "../assets/Button Trash.png";
import setting from "../assets/Button Settings.png";
import edit from "../assets/Button Edit.png";
import cart3 from "../assets/Cart#3.png";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon (1).png";
import icon3 from "../assets/Icon (2).png";
import icon4 from "../assets/Icon (3).png";
import icon5 from "../assets/Icon6.png";
import adduser from "../assets/Add-user.png";
import compiling2 from "../assets/compiling2.png";
import equalizer2 from "../assets/Equalizer2.png";
import mail from "../assets/Urgent mail.png";
import filePlus from "../assets/File Plus icon.png";
import library from "../assets/Library (1).png";
import movie from "../assets/Movie-lane#2.png";
import security from "../assets/Shield-check.png";
import gift from "../assets/ecm007.png";
import rocket from "../assets/gen002.png";
import bag from "../assets/ecm002.png";
import star from "../assets/abs025.png";
import vector5 from "../assets/Vector 5.png";
import finger from "../assets/teh004.png";

const Right = () => {
  return (
    <Container>
      <section className="header1">
        <div className="top-div">
          <div className="options">
            <img src={search} alt="" style={{ width: "30px" }} />
            <img src={compiling} alt="" style={{ width: "28.91px" }} />
            <img src={equalizer} alt="" style={{ width: "28.91px" }} />
            <img src={cart3} alt="" style={{ width: "28.91px" }} />
            <img src={layout4} alt="" style={{ width: "28.91px" }} />
          </div>
          <div className="profile">
            <p><b>Piyush</b> </p>
            <p
              style={{
                fontSize: "15px",
                backgroundColor: "#D7F9EF",
                color: "#0BB783",
                padding: ".5rem 1rem",
                borderRadius: "4px",
              }}>
              P
            </p>
          </div>
        </div>
      </section>
      <section className="header2">
        <div className="left">
          <p
            style={{ borderRight: "0.1px solid grey", paddingRight: "2.3rem" }}>
            Dashboard
          </p>
          <p
            style={{
              backgroundColor: "#FFF4DE",
              color: "#FFA800",
              padding: ".2rem .5rem",
            }}>
            Add New
          </p>
        </div>
        <div className="right">
          <p style={{ backgroundColor: "#F3F6F9", color: "#6993FF" }}>Today</p>
          <p>Month</p>
          <p>Year</p>
          <p>Actions</p>
          <img
            src={filePlus}
            alt=""
            style={{ width: "36.14px", height: "36.1px" }}
          />
        </div>
      </section>
      <section className="header3">
        <div className="left">
          <div className="left-top">
            <div>
              <img src={library} alt="" />
              <h1>Saas Application</h1>
            </div>
            <div>
              <img src={layout4} alt="" />
              <h1>Main Categories</h1>
            </div>
            <div style={{ backgroundColor: "#50CD89" }}>
              <img src={movie} alt="" />
              <h1 style={{ color: "white" }}>Video Tutorials</h1>
            </div>
            <div>
              <img src={equalizer} alt="" />
              <h1>Sales Statistics</h1>
            </div>
            <div>
              <img src={security} alt="" />
              <h1>
                ARC
                <br /> Security
              </h1>
            </div>
          </div>
          <div className="left-bottom">
            <div className="left-left">
              <div
                style={{
                  backgroundColor: "#F64E60",
                  height: "242px",
                  borderRadius: "12px",
                  padding: "2rem",
                }}>
                <h1 style={{ color: "white" }}>Categories</h1>
              </div>
              <img
                src={vector5}
                alt=""
                style={{
                  width: "475px",
                  marginTop: "-170px",
                  borderRadius: "12px",
                }}
              />
            </div>
            <div className="left-right">
              <div className="top">
                <div className="left-side">
                  <h1
                    style={{
                      fontSize: "18px",
                      fontWeight: "500",
                      lineHeight: "21px",
                    }}>
                    Recent Activities
                  </h1>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "21px",
                      color: "#80808F",
                    }}>
                    890,456 Sales
                  </p>
                </div>
                <div className="right-side">
                  <h1>.</h1>
                  <h1>.</h1>
                </div>
              </div>
              <div className="bottom">
                <div className="activity">
                  <div className="first">08:42</div>
                  <div className="secound">
                    <img src={ellipse} alt="" />
                    <div className="bar"></div>
                  </div>
                  <div className="third">
                    <p>
                      Outlines keep you honest. Indulging in poorly driving and
                      keep structure
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="first">10:00</div>
                  <div className="secound">
                    <img src={circle2} alt="" />
                    <div className="bar"></div>
                  </div>
                  <div className="third">
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#464E5F",
                      }}>
                      AEOL meeting with
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="first">14:37</div>
                  <div className="secound">
                    <img src={circle3} alt="" />
                    <div className="bar"></div>
                  </div>
                  <div className="third">
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: "600",
                        color: "#464E5F",
                      }}>
                      Make deposit
                      <span style={{ color: "#8950FC" }}> USD 700</span> to ESL
                    </p>
                  </div>
                </div>
                <div className="activity">
                  <div className="first">16:50</div>
                  <div className="secound">
                    <img src={circle4} alt="" />
                    <div className="bar"></div>
                  </div>
                  <div className="third">
                    <p>
                      Outlines keep you honest. Indulging in poorly driving and
                      keep structure keep you honest great
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <img src={gift} alt="" />
            <h1>Great Gifts</h1>
          </div>
          <div>
            <img src={gift} alt="" />
            <h1>Great Gifts</h1>
          </div>
          <div>
            <img src={finger} alt="" />
            <h1>Great Gifts</h1>
          </div>
          <div>
            <img src={star} alt="" />
            <h1>Great Gifts</h1>
          </div>
          <div>
            <img src={bag} alt="" />
            <h1>Great Gifts</h1>
          </div>
          <div>
            <img src={rocket} alt="" />
            <h1>Great Gifts</h1>
          </div>
        </div>
      </section>
      <section className="header4">
        <div className="left">
          <div className="top">
            <h1 style={{ fontSize: "17px", fontWeight: "600" }}>
              Sales Progress
            </h1>
            <div className="dots">
              <p>.</p>
              <p>.</p>
            </div>
          </div>
          <div className="bottom">
            <img src={icon1} alt="" />
            <div className="context">
              <h1>Briviba Saas</h1>
              <p>PHP, SQLite, Artisan CLIмм</p>
            </div>
          </div>
          <div className="bottom">
            <img src={icon5} alt="" />
            <div className="context">
              <h1>Briviba Saas</h1>
              <p>PHP, SQLite, Artisan CLIмм</p>
            </div>
          </div>
          <div className="bottom">
            <img src={icon2} alt="" />
            <div className="context">
              <h1>Briviba Saas</h1>
              <p>PHP, SQLite, Artisan CLIмм</p>
            </div>
          </div>
          <div className="bottom">
            <img src={icon3} alt="" />
            <div className="context">
              <h1>Briviba Saas</h1>
              <p>PHP, SQLite, Artisan CLIмм</p>
            </div>
          </div>
          <div className="bottom">
            <img src={icon4} alt="" />
            <div className="context">
              <h1>Briviba Saas</h1>
              <p>PHP, SQLite, Artisan CLIмм</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="top">
            <div className="left-side">
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "21px",
                }}>
                New Arrivals
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "21px",
                  color: "#80808F",
                }}>
                More than 400+ new members
              </p>
            </div>
            <div className="right-side">
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#80808F",
                }}>
                Month
              </h1>
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#80808F",
                }}>
                Week
              </h1>
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "white",
                  backgroundColor: "#464E5F",
                  padding: ".8rem 1.5rem",
                  borderRadius: "12px",
                }}>
                Day
              </h1>
            </div>
          </div>
          <div className="bottom">
            <div className="option1">
              <div
                style={{
                  backgroundColor: "#F3F6F9",
                  padding: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}>
                <img src={plurk} alt="" />
              </div>
              <div className="context">
                <h1>Briviba Saas</h1>
                <p>FTP: bprow@bnc.cc</p>
              </div>
            </div>
            <div className="sec">
              <h1 style={{ fontSize: "14px", fontWeight: "500" }}>
                $2,000,000
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#B5B5C3",
                }}>
                Paid
              </p>
            </div>
            <div className="third">Approved</div>
            <div className="fourth">
              <img src={setting} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
          <div className="bottom">
            <div className="option1">
              <div
                style={{
                  backgroundColor: "#F3F6F9",
                  padding: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}>
                <img src={telegram} alt="" />
              </div>
              <div className="context">
                <h1>Briviba Saas</h1>
                <p>FTP: bprow@bnc.cc</p>
              </div>
            </div>
            <div className="sec">
              <h1 style={{ fontSize: "14px", fontWeight: "500" }}>
                $4,600,000
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#B5B5C3",
                }}>
                Paid
              </p>
            </div>
            <div
              className="third"
              style={{ backgroundColor: "#FFF4DE", color: "#FFA800" }}>
              In Progress
            </div>
            <div className="fourth">
              <img src={setting} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
          <div className="bottom">
            <div className="option1">
              <div
                style={{
                  backgroundColor: "#F3F6F9",
                  padding: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}>
                <img src={puzzle} alt="" />
              </div>
              <div className="context">
                <h1>Briviba Saas</h1>
                <p>FTP: bprow@bnc.cc</p>
              </div>
            </div>
            <div className="sec">
              <h1 style={{ fontSize: "14px", fontWeight: "500" }}>$560,000</h1>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#B5B5C3",
                }}>
                Paid
              </p>
            </div>
            <div
              className="third"
              style={{ backgroundColor: "#C9F7F5", color: "#1BC5BD" }}>
              Success
            </div>
            <div className="fourth">
              <img src={setting} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
          <div className="bottom">
            <div className="option1">
              <div
                style={{
                  backgroundColor: "#F3F6F9",
                  padding: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}>
                <img src={bebo} alt="" />
              </div>
              <div className="context">
                <h1>Briviba Saas</h1>
                <p>FTP: bprow@bnc.cc</p>
              </div>
            </div>
            <div className="sec">
              <h1 style={{ fontSize: "14px", fontWeight: "500" }}>$57,000</h1>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#B5B5C3",
                }}>
                Paid
              </p>
            </div>
            <div
              className="third"
              style={{ backgroundColor: "#FFE2E5", color: "#F64E60" }}>
              Rejected
            </div>
            <div className="fourth">
              <img src={setting} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
          <div className="bottom">
            <div className="option1">
              <div
                style={{
                  backgroundColor: "#F3F6F9",
                  padding: ".5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "6px",
                }}>
                <img src={group} alt="" />
              </div>
              <div className="context">
                <h1>Briviba Saas</h1>
                <p>FTP: bprow@bnc.cc</p>
              </div>
            </div>
            <div className="sec">
              <h1 style={{ fontSize: "14px", fontWeight: "500" }}>
                $45,200,000
              </h1>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  color: "#B5B5C3",
                }}>
                Paid
              </p>
            </div>
            <div
              className="third"
              style={{ backgroundColor: "#FFF4DE", color: "#FFA800" }}>
              In Progress
            </div>
            <div className="fourth">
              <img src={setting} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="header5">
        <div className="left">
          <div className="top">
            <div className="left-side">
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "21px",
                }}>
                Recent Status
              </h1>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "21px",
                  color: "#80808F",
                }}>
                More than 400+ new Members
              </p>
            </div>
            <div className="right-side">
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#80808F",
                }}>
                Month
              </h1>
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "#80808F",
                }}>
                Week
              </h1>
              <h1
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  lineHeight: "18px",
                  color: "white",
                  backgroundColor: "#464E5F",
                  padding: ".8rem 1.5rem",
                  borderRadius: "12px",
                }}>
                Day
              </h1>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div className="yaxis">
                <div>
                  <p>150</p>
                </div>
                <div>
                  <p>120</p>
                </div>
                <div>
                  <p>90</p>
                </div>
                <div>
                  <p>60</p>
                </div>
                <div>
                  <p>30</p>
                </div>
                <div>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className="graph">
              <div className="graph-bars">
                <img
                  src={columns}
                  alt=""
                  style={{ width: "90%", float: "right" }}
                />
              </div>
              <div className="xaxis">
                <div>
                  <p></p>
                </div>
                <div>
                  <p>1 Aug</p>
                </div>
                <div>
                  <p>8 Aug</p>
                </div>
                <div>
                  <p>15 Aug</p>
                </div>
                <div>
                  <p>22 Aug</p>
                </div>
                <div>
                  <p>29 Aug</p>
                </div>
                <div>
                  <p>1 Sep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div
            style={{
              width: "232.94px",
              height: "211.27px",
              backgroundColor: "#FFF4DE",
              borderRadius: "12px",
            }}>
            <img src={equalizer2} alt="" />
            <h1 style={{ color: "#634100" }}>Weekly Sales</h1>
          </div>
          <div
            style={{
              width: "232.94px",
              height: "211.27px",
              backgroundColor: "#EEE5FF",
              borderRadius: "12px",
            }}>
            <img src={adduser} alt="" />
            <h1 style={{ color: "#8A50FC" }}>New Users</h1>
          </div>
          <div
            style={{
              width: "232.94px",
              height: "211.27px",
              backgroundColor: "#FFE2E6",
              borderRadius: "12px",
            }}>
            <img src={compiling2} alt="" />
            <h1 style={{ color: "#F65464" }}>Item Orders</h1>
          </div>
          <div
            style={{
              width: "232.94px",
              height: "211.27px",
              backgroundColor: "#C9F7F5",
              borderRadius: "12px",
            }}>
            <img src={mail} alt="" />
            <h1 style={{ color: "#74BBB7" }}>Bug Reports</h1>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  width: 1487.76px;
  height: 100%;
  .header1 {
    width: 100%;
    height: 78.22px;
    background-color: white;
    .top-div {
      float: right;
      width: 431.27px;
      height: 57.77px;
      display: flex;
      align-items: center;
      padding: 0.5rem;
      .options {
        display: flex;
        align-items: center;
        gap: 1.2rem;
        justify-content: space-between;
        margin-right: 2rem;
        box-sizing: border-box;
      }
      .profile {
        display: flex;
        align-items: center;
        gap: 2rem;
        justify-content: space-between;
        font-size: 11px;
        color: #959cb6;
      }
    }
  }
  .header2 {
    width: 100%;
    height: 64.98px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    background-color: white;
    .left {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 267.79px;
      height: 38.51px;
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 422.84px;
      height: 38.51px;
      p {
        color: #959cb6;
      }
    }
  }
  .header3 {
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eff2f5;
    .left {
      width: 70%;
      height: 565px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      .left-top {
        width: 988px;
        height: 197px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          width: 144px;
          height: 197px;
          padding: 1rem;
          border-radius: 12px;
          background-color: white;
          img {
            width: 48px;
          }
          h1 {
            text-align: center;
            font-size: 16px;
            color: #b5b5c3;
          }
        }
      }
      .left-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-left {
          width: 475px;
          height: 342px;
          border-radius: 12px;
          background-color: white;
        }
        .left-right {
          width: 475px;
          height: 342px;
          border-radius: 12px;
          padding: 2rem;
          background-color: white;
          .top {
            width: 821px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left-side {
              display: flex;
              flex-direction: column;
              gap: 0.5rem;
            }
            .right-side {
              display: flex;
              align-items: center;
              gap: 2rem;
              justify-content: space-between;
            }
          }
          .bottom {
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.2rem;
            justify-content: center;
            .activity {
              width: 411px;
              display: flex;
              justify-content: space-between;
              /* border: 1px solid black; */
              .first {
                font-size: 14px;
                font-weight: 600;
                width: 49px;
                /* border: 1px solid black; */
              }
              .secound {
                width: 14px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                img {
                  width: 14px;
                  height: 14px;
                  margin: 4px;
                }
                .bar {
                  width: 3px;
                  height: 35px;
                  border: 1px solid #e5eaee;
                }
                /* border: 1px solid black; */
              }
              .third {
                p {
                  font-size: 12px;
                  font-weight: 400;
                  color: #80808f;
                }
                width: 339px;
                /* border: 1px solid black; */
              }
            }
          }
        }
      }
    }
    .right {
      display: grid;
      align-items: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      width: 390px;
      height: 565px;
      div {
        width: 180px;
        height: 167.41px;
        border-radius: 12px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: white;
        img {
          width: 50px;
        }
        h1 {
          color: #3f4254;
          font-size: 16px;
        }
      }
    }
  }
  .header4 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eff2f5;
    padding: 1rem 2rem;
    .left {
      width: 474px;
      height: 495px;
      border-radius: 12px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      background-color: white;
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 414px;
        height: 26px;
        .dots {
          display: flex;
          align-items: center;
          margin-top: -25px;
          gap: 0.4rem;
          font-size: 50px;
          color: #b5b5c3;
        }
        /* border: 1px solid black; */
      }
      .bottom {
        width: 208px;
        height: 41px;
        /* border: 1px solid black; */
        display: flex;
        align-items: center;
        gap: 1rem;
        img {
          width: 40px;
        }
        .context {
          h1 {
            font-size: 13px;
            font-weight: 500;
          }
          p {
            font-size: 12px;
            font-weight: 500;
            color: #b5b5c3;
          }
        }
      }
    }
    .right {
      width: 902px;
      height: 495px;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      background-color: white;
      .top {
        width: 821px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-side {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .right-side {
          display: flex;
          align-items: center;
          gap: 2rem;
          justify-content: space-between;
        }
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .sec {
          text-align: end;
          width: 131px;
          height: 44px;
          /* border: 1px solid black; */
        }
        .third {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          border-radius: 6px;
          color: #8950fc;
          background-color: #eee5ff;
          width: 74px;
          height: 26px;
          /* border: 1px solid black; */
        }
        .fourth {
          width: 116px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 32px;
          }
        }
        .option1 {
          width: 208px;
          height: 41px;
          /* border: 1px solid black; */
          display: flex;
          align-items: center;
          gap: 1rem;
          img {
            width: 28px;
            background-color: #f3f6f9;
          }
          .context {
            h1 {
              font-size: 13px;
              font-weight: 500;
            }
            p {
              font-size: 12px;
              font-weight: 500;
              color: #b5b5c3;
            }
          }
        }
      }
    }
  }
  .header5 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #eff2f5;
    padding: 1rem 2rem;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 880px;
      height: 472px;
      border-radius: 12px;
      padding: 2rem;
      background-color: white;
      .top {
        width: 821px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-side {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .right-side {
          display: flex;
          align-items: center;
          gap: 2rem;
          justify-content: space-between;
        }
      }
      .bottom {
        display: flex;
        align-items: end;
        justify-content: space-evenly;
        width: 773.79px;
        height: 342px;
        /* border: 1px solid black; */
        .left {
          width: 30.34px;
          height: 321px;
          .yaxis {
            width: 30.34px;
            height: 321px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            div {
              font-size: 12px;
              font-weight: 500;
              text-align: end;
              width: 30.34px;
              height: 21px;
              color: #b5b5c3;
            }
          }
        }
        .graph {
          width: 100%;
          height: 290px;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
          .graph-bars {
            width: 92%;
            height: 300px;
            display: flex;
            justify-content: end;
            /* border: 1px solid black; */
            .lines {
              width: 100%;
              height: 55px;
              border-top: 0.1px dashed #b5b5c3;
              border-bottom: 0.1px dashed #b5b5c3;
            }
          }
          .xaxis {
            width: 92%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #b5b5c3;
            font-size: 12px;
            font-weight: 500;
            /* border: 1px solid black; */
          }
          /* border: 1px solid black; */
        }
      }
    }
    .right {
      width: 498px;
      height: 456px;
      border-radius: 12px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      place-items: center;
      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        img {
          width: 107.94px;
        }
        h1 {
          font-size: 24px;
          line-height: 21px;
          font-weight: 500;
        }
      }
    }
  }
`;

export default Right;
