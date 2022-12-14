


const DelivredButton = ({delivred,DelivredLot}) => {

console.log(delivred)

    
  return (

    <div>     
        {!delivred ? (
        <button
          style={{
            width: 180,
            height: 50,
            border: "none",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 10,
            borderRadius: 5,
          }}
          onClick={DelivredLot}
        >
          Délivrer le cadeau
        </button>
      ) : (
        <p style={{ background: "#96D614", padding: 10, borderRadius: 8 }}> Lot délivré </p>

      )}
    </div>
  
  )
};

export default DelivredButton;

const styles = {
  stat: {
    backgroundColor: "#F1F1F1",
        padding: 25,
    },
    button: {
        backgroundColor: " #38870D",
        border: "none",
        color: "white",
        padding: 8,
        borderRadius:5
    }
};
