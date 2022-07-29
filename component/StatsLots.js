import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
import tea1 from "../image/tea1.png"
import tea2 from "../image/tea2.png"
import tea3 from "../image/tea3.png"
import tea4 from "../image/tea4.png"

const StatsLots = (props) => {
    
    const lots = {
        tea1:{now:200,
              max:1000
        },
        tea2:{now:3600,
            max:5000
      }, 
      tea3:{now:4500,
        max:10000
      },
      tea4:{now:5000,
        max:1000000
  } 
 

      

    }
  return (
<div style ={{display:"flex",padding:15,marginBottom:25,border:"solid 1px #46E8D1 ",borderRadius:8,flexWrap:"wrap"}}>
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",margin:20}}>
    <p style={styles.lot}><strong style={{color:"#46E8D1"}}>{lots.tea1.now}</strong>  ticket validés</p>
        <p style={styles.lot}>sur <strong style={{color:"#46E8D1"}}>{lots.tea1.max}</strong></p>
        <Image src={tea1} height={150} width={150} alt=""/>
        <small style={{margin:5,color:"grey"}}> Un infuseur à thé</small>
    </div>

    {/* lot2 */}
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",margin:20}}>
    <p style={styles.lot}><strong style={{color:"#46E8D1"}}>{lots.tea2.now}</strong> ticket validés</p>
    <p style={styles.lot}>sur <strong style={{color:"#46E8D1"}}>{lots.tea2.max}</strong></p>

        <Image src={tea2} height={150} width={150} alt=""/>
        <small style={{margin:5,color:"grey"}}> Une boite de 100g<br></br> d’un thé détox ou d’infusion</small>
    </div>

    {/* lot3 */}
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",margin:20}}>
    <p style={styles.lot}><strong style={{color:"#46E8D1"}}>{lots.tea3.now}</strong> ticket validés</p>
        <p style={styles.lot}>sur <strong style={{color:"#46E8D1"}}>{lots.tea3.max}</strong></p>

        <Image src={tea3} height={150} width={150} alt=""/>
        <small style={{margin:5,color:"grey"}}>Une boite de 100g <br></br>d’un thé signature</small>
    </div>

    {/* lot4 */}
    <div style={{textAlign:"center",display:"flex",flexDirection:"column",margin:20}}>
    <p style={styles.lot}><strong style={{color:"#46E8D1"}}>{lots.tea4.now}</strong> ticket validés</p>
        <p style={styles.lot}>sur <strong style={{color:"#46E8D1"}}>{lots.tea4.max}</strong></p>

        <Image src={tea4} height={150} width={150} alt=""/>
        <small style={{margin:5,color:"grey"}}> Un coffret découverte <br/>d’une valeur de 39€ </small>
    </div>
  
</div>

  )
}

export default StatsLots

const styles = {

    lot:{
        margin:2,
    }

}