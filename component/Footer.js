import { useState } from 'react';
import Link from "next/link"
import Modal from '@mui/material/Modal';

const Footer = () => {
    const [open, setOpen] = useState(false);
    const [inscrip,setInscrip] = useState({
        name:"",
        email:"Email"
    })
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    
    return (
        <footer>
            <button onClick={handleOpen}>
                S'inscrire à la newsletter
            </button>
            <nav style={styles.nav}>
                <small>Copyright © 2022 - TipTop </small>
                <ul style={styles.ul} >
                    <Link href="/politique">
                        <li style={styles.li}>Politique de confidentialié </li>
                    </Link>
                    <Link href="/condition">
                        <li style={styles.li}>Mention légales</li>
                    </Link>
                </ul>
                <Link href={"https://dsp-archiwebo21-ct-df-an-cd.fr/sitemap-0.xml"}>
                sitemap</Link>
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div style={styles.modal}>
                    <form style={styles.form}>
                        <h3>Newsletter</h3>
                        <small>Suivre notre actualité</small>
                        <input onChange={ (e)=> setInscrip( {...inscrip, name : e.target.value})}
                        placeholder='Nom' type={"text"} value={inscrip.name} style={styles.input} />
                        <input  onChange={ (e) => setInscrip( {...inscrip, email : e.target.value})} 
                        placeholder='Email' type={"email"} value={inscrip.email} style={styles.input} />
                        <button style={styles.button}>S'inscrire</button>
                    </form>
                </div>
            </Modal>

        </footer>
    )
}

export default Footer

const styles = {

    nav: {
        marginTop: 10,
        marginBottom: 20,
        display: "flex",
        flexWrap: "wrap-reverse",
        width: "100%",
        justifyContent: "center"
    },

    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        textAlign: "center",
        color: "white",
        width: "100%"
    },

    input: {
        height: 50,
        marginTop: 10,
        marginBottom: 5,
        outline:"none",
        border: "none",
        padding: 8,
        paddingLeft: 15,
        fontSize:18,
        background: "#F9F9F9",
        width: "90%",
        fontWeight: "bold"

    },

    button: {
        border: "none",
        margin: 10,
        width: "95%",
        fontSize: 16,
        color: "white",
        background: "#2D6005",
        height: 50,
        borderRadius: 8
    },

    ul: {
        display: "flex",
        flexWrap: "wrap",
    },


    li: {
        listStyleType: "none",
        marginLeft: 10,
        textAlign: "center"
    },
modal:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "white",
    width: 320,
    height: 320,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#38870D",
}


}