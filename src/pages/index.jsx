import React from "react";

export default function Index() {
  const styles = {
    container: {
      backgroundImage: "url('chessback1.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#f2e9ea",
      overflow: "hidden",
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
      maxWidth: "30rem",
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

    logoContainer: {
      width: "492px",
      height: "60px",
      backgroundColor: "rgba(67, 64, 61, 0.7)",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
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
  };

  return (
    <div style={styles.container}>
      <div style={styles.mainContainer}>
        <div style={styles.loginButtonContainer}>
          <div style={styles.loginButtonText}>LOG IN</div>
        </div>

        <div style={styles.contentContainer}>
          {/* <div style={styles.logoContainer}> */}
          <div style={styles.Heading1Text}>CHESS CLUB</div>
          <div style={styles.headingText}>OXYGENE</div>
          {/* </div> */}
          <div style={styles.subHeadingText}>
            THE GAME THAT HELPS TRAIN YOUR MIND
          </div>
        </div>
        <div className="w-[10vw] h-[34px] justify-between items-start inline-flex">

        </div>
        
      </div>
    </div>
  );
}
