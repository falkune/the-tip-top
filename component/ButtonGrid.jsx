import React from "react";
import { useRouter } from "next/router";

const ButtonGrid = (props) => {
const router = useRouter();

  console.log(props)
     const buttonClicked = () => {
        router.push({
        pathname: `resultat`,
        query: { number: num },
      });
    };
    
  return (
     <span>
          {<button style={styles.button} onClick={() => buttonClicked()}>Voir le résulat </button>} 
    </span>
  );
};

export default ButtonGrid;

const styles = {
  stat: {
    backgroundColor: "#F1F1F1",
        padding: 25,
    },
    button: {
        backgroundColor: "#41D8C2",
        border: "none",
        color: "white",
        padding: 8,
        borderRadius:5
    }
};
