import React from "react";
require('dotenv').config();


export default function Index() {
  const styles = {
    container: {
      backgroundImage: "url('chessback1.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      color: "#f2e9ea",
      overflow: "hidden",
      position: "relative", // Added this to make child elements position relative to the container
    },
    image: {
      width: "100vw",
      height: "100vh",
      position: "absolute",
      top: 0,
      left: 0,
      objectFit: "cover",
    },
    loginButtonContainer: {
      position: "absolute",
      top: "2rem",
      right: "2rem",
      backgroundColor: "rgba(31, 19, 9, 0.2)",
      borderRadius: "1rem",
      padding: ".5rem 1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid #e7e0ec",
    },
    loginButtonText: {
      color: "#f2ced2",
      fontSize: ".7rem",
      fontWeight: "500",
      fontFamily: "Roboto, sans-serif",
    },
    contentContainer: {
      width: "80vw",
      maxWidth: "28rem",
      height: "auto",
      maxHeight: "15rem",
      backgroundColor: "rgba(67, 64, 61, 0.7)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxSizing: "border-box",
    },
    Heading1Text: {
      fontSize: "2vh",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },
    headingText: {
      fontSize: "10vw",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },
    subHeadingText: {
      fontSize: "1vh",
      fontFamily: "Inter, sans-serif",
      textAlign: "center",
    },
    navItemHover: {
      borderBottom: "2px solid white",
    },
    bottomBar: {
      width: "auto",
      height: "34px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      // border: "1px solid red",
      position: "absolute",
      bottom: "9vh",
      left: "50%",
      transform: "translateX(-50%)",
    },
    barItem: {
      paddingLeft: "1vw",
      paddingRight: "1vw",
      paddingTop: "1.5rem",
      paddingBottom: "0.5rem",
      marginLeft: "8vw",
      borderRadius: "0.375rem 0.375rem 0 0",
      borderBottom: "1px solid #b1b1b1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "@media (maxWidth: 768px)": {
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        paddingTop: "1rem",
        paddingBottom: "0.75rem",
      },
      "@media (maxWidth: 480px)": {
        paddingLeft: "0.25rem",
        paddingRight: "0.25rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        marginLeft: "0.25rem",
      },
    },
    barText: {
      color: "#767676",
      fontSize: "1vw",
      fontWeight: "400",
      fontFamily: "Inter, sans-serif",
      "@media (maxWidth: 768px)": {
        fontSize: "4vw",
      },
      "@media (maxWidth: 480px)": {
        fontSize: "5vw",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContainer}>
        <div style={styles.loginButtonContainer}>
          <div style={styles.loginButtonText}>LOG IN</div>
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.Heading1Text}>CHESS CLUB</div>
          <div style={styles.headingText}>OXYGENE</div>
          <div style={styles.subHeadingText}>
            THE GAME THAT HELPS TRAIN YOUR MIND
          </div>
        </div>

        {/* Positioned Bottom Bar */}
        <div style={styles.bottomBar}>
          <div style={styles.barItem}>
            <div style={styles.barText}>CLUB INFO</div>
          </div>

          <div style={styles.barItem}>
            <div style={styles.barText}>TOURNAMENT</div>
          </div>

          <div style={styles.barItem}>
            <div style={styles.barText}>CALENDAR</div>
          </div>

          <div style={styles.barItem}>
            <div style={styles.barText}>PLAYER</div>
          </div>
        </div>
      </div>
    </div>
  );
}
