import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';

function CookiesManagement() {
    const [cookies, setCookies] = useState(undefined);
    useEffect(() => {
        setCookies(Cookies.get("cookiesAccept"));
    }, [])

    const cookiesAccept = () => {
        Cookies.set("cookiesAccept", "accepted");
        setCookies(true);
    }

    const cookiesReject = () => {
        Cookies.set("cookiesAccept", "notAccepted");
        setCookies(true);
    }

    if (cookies == "notAccepted" || cookies == undefined) {
        return (
            <div style={styles.container}>
                <div>
                    <p style={styles.text}>Ce site utilise des cookies <a href="/condition" style={styles.link}>  en savoir plus</a></p>
                </div>
                <div>
                    <p>
                        <button style={styles.btna}><span onClick={cookiesAccept}> accepter</span></button>
                        <button style={styles.btnr}><span onClick={cookiesReject}> rejeter</span></button>
                    </p>
                </div>
            </div>
        )
    }else{
        return(
            <div>

            </div>
        )
    }
}

export default CookiesManagement;

const styles = {
    container: {
        position: "fixed",
        bottom: 0,
        background: "#ffffff",
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        // height: 50,
        padding: "0 40px"
    },
    link: {
        color: "#0077b6"
    },
    btna: {
        background: "#386641",
        margin: "0 10px",
        cursor: "pointer"
    },
    btnr: {
        background: "#9e2a2b",
        margin: "0 10px",
        cursor: "pointer"
    },
    check: {
        color: "#008000",
        fontSize: "1em"
    },
    mark: {
        color: "#9a031e",
        fontSize: "1em"
    },
    text:{
        
    }
}