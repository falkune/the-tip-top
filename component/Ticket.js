import React from "react"
import Image from 'next/image'
import Link from "next/link"
import logo from "../image/logo.png"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cc647dd (count down)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
import tea1 from "../image/tea1.png"
import tea2 from "../image/tea2.png"
import tea3 from "../image/tea3.png"
import tea4 from "../image/tea4.png"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c

const Ticket = (props) => {
  return (
    <div style={styles.ticket}>   
      <div style={styles.bloc}>
          <p>{props.date}</p>
          <p>N{props.number}</p>
      </div>
      <div style={styles.bloc2}>
          {/* lot 1 */}
            { props.lot === 1 && <Image src={tea1} height={100} width={100} alt="lot 1"/>}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
            { props.lot === 1 && <p style={styles.text}> Un infuseur à thé </p>}
         {/* lot 2 */}
            { props.lot === 2 && <Image src={tea2} height={100} width={100} alt="lot 2"/>}
            { props.lot === 2 && <p style={styles.text}> Une boite de 100g d’un thé détox ou d’infusion </p>}
         {/* lot 3 */}
            { props.lot === 3 && <Image src={tea3} height={100} width={100} alt="lot 3"/>}
            { props.lot === 3 && <p style={styles.text}> Une boite de 100g d’un thé signature </p>}
         {/* lot 4 */}
            { props.lot === 4 && <Image src={tea4} height={100} width={100} alt="lot 4"/>}
            { props.lot === 4 && <p style={styles.text}>  Un coffret découverte d’une valeur de 39€  </p>}
         {/* lot 5 */}
            { props.lot === 5 && <Image src={tea4} height={100} width={100} alt="lot 5"/>}
            { props.lot === 5 && <p style={styles.text}>   Un coffret découverte d’une valeur de 69€  </p>}
<<<<<<< HEAD
=======
=======
>>>>>>> cc647dd (count down)

const Ticket = (props) => {
  return (
    <div style={styles.ticket}>   
      <div style={styles.bloc}>
          <p>{props.date}</p>
          <p>N{props.number}</p>
      </div>
      <div style={styles.bloc2}>
<<<<<<< HEAD
        <p>1 thé infusion</p>
        <p>Jack Atlas</p>     
>>>>>>> ddce213 (add ticket page)
=======
          {/* lot 1 */}
            { props.lot === 1 && <Image src={tea1} height={100} width={100} alt=""/>}
=======
>>>>>>> 97af433 (login function)
            { props.lot === 1 && <p style={styles.text}> Un infuseur à thé </p>}
         {/* lot 2 */}
            { props.lot === 2 && <Image src={tea2} height={100} width={100} alt="lot 2"/>}
            { props.lot === 2 && <p style={styles.text}> Une boite de 100g d’un thé détox ou d’infusion </p>}
         {/* lot 3 */}
            { props.lot === 3 && <Image src={tea3} height={100} width={100} alt="lot 3"/>}
            { props.lot === 3 && <p style={styles.text}> Une boite de 100g d’un thé signature </p>}
         {/* lot 4 */}
            { props.lot === 4 && <Image src={tea4} height={100} width={100} alt="lot 4"/>}
            { props.lot === 4 && <p style={styles.text}>  Un coffret découverte d’une valeur de 39€  </p>}
         {/* lot 5 */}
            { props.lot === 5 && <Image src={tea4} height={100} width={100} alt="lot 5"/>}
            { props.lot === 5 && <p style={styles.text}>   Un coffret découverte d’une valeur de 69€  </p>}
>>>>>>> cc647dd (count down)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
      </div>
    </div>
  )
}

export default Ticket

const styles = {

    ticket:{
        width:"100%",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        backgroundColor:"#46E8D1",
=======
        backgroundColor:"#40EFD7",
>>>>>>> ddce213 (add ticket page)
=======
        backgroundColor:"#46E8D1",
>>>>>>> 5a5dbe1 (update dashboard)
=======
        backgroundColor:"#46E8D1",
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"white",
        margin:10,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        padding:8,
        borderRadius:8,
=======
        padding:8
>>>>>>> ddce213 (add ticket page)
=======
        padding:8,
        borderRadius:8,
>>>>>>> 5a5dbe1 (update dashboard)
=======
        padding:8,
        borderRadius:8,
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    },
    bloc:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        width:"50%"

    },

    bloc2:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        borderLeft:"solid 1px white",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cc647dd (count down)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
        backgroundColor:"white",
        width:"50%",
        borderRadius:8,
        paddingTop:8,
        paddingBottom:8
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
    },
  text:{
      color:"#46E8D1",
      margin:0,
      textAlign:'center',
      padding:8
  }
<<<<<<< HEAD
=======
        width:"50%"


=======
>>>>>>> cc647dd (count down)
    },
  text:{
      color:"#46E8D1",
      margin:0,
      textAlign:'center',
      padding:8
  }
<<<<<<< HEAD

>>>>>>> ddce213 (add ticket page)
=======
>>>>>>> 76f6607 (fix bug)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
}