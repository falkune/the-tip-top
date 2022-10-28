import React from "react"


const Email = (props) => {
  return (
    <div style={styles.email}>  
<<<<<<< HEAD
<<<<<<< HEAD
=======
    
>>>>>>> cc647dd (count down)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
         <small style={styles.date}>{props.date}</small>     
          <p style={styles.elem}>{props.name}</p>
          <p style={styles.elem}>{props.email}</p>
    </div>
  )
}

export default Email

const styles = {

    email:{
        width:"100%",
<<<<<<< HEAD
<<<<<<< HEAD
        backgroundColor:"#41D8C2",
=======
        backgroundColor:"#40EFD7",
>>>>>>> cc647dd (count down)
=======
        backgroundColor:"#41D8C2",
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        color:"white",
        margin:10,
        padding:8
    },

    elem:{
        margin:0,
        marginBottom:3
    },
   
    date:{
        padding:8,
        borderBottom:"solid 1px white",
        marginBottom:5
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
 
 

 





>>>>>>> cc647dd (count down)
=======
>>>>>>> a584e821a7aee8a69ef870781d3a7bb3e50d105c
}