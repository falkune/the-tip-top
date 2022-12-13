import Image from "next/image"
import win from "../image/winner.gif"
import loose from "../image/sad.gif"





export default function ResultGame(props) {

    
  
    return (
      <div className="container">
        { props.email ? <>
        <h2>Vous avez Gagné</h2>
        <p>Rendez-vous dans votre magasin le plus proche pour profiter de votre lots</p>
           <Image src={win} alt="smilley" />
        </>
          :
        <>
        <h2>Vous avez perdu !</h2>
        <p>Hélas, mais c'est la vie ..</p>
           <Image width={300} height={300}src={loose} alt="sad" />
        </> }
     
      </div>
    )
  }
  
   const stylez = {
  
    gain : {
  
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      width:"90%",
      maxWidth:360,
      minHeight:"100vh",
    },
  
    export : {
        margin:8,
        padding:8,
        backgroundColor:"white",
        border:"solid 1px  #38870D",
        fontSize:18,
        minHeight:45,
        textAlign:"center",
        minWidth:200,
        color:" #38870D",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"relative"
    }
  }