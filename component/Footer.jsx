import React from "react"
import Link from "next/link"
import Modal from '@mui/material/Modal';


const style = {
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

};


const Footer = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={styles.footer}>
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
            </nav>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <div style={style}>
                    <form style={styles.form}>
                        <h3>Newsletter</h3>
                        <small>Suivre notre actualité</small>
                        <input style="input" placeholder="Nom" type="text" />
                        <input style="input" placeholder="Email" type="email" />
                        <button style={styles.button}>S'inscrire</button>
                    </form>
                </div>
            </Modal>

        </div>
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
        border: "none",
        padding: 8,
        paddingLeft: 15,
        background: "#F9F9F9",
        width: "90%",
        fontWeight: "bold"

    },

    button: {
        height: 40,
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



}