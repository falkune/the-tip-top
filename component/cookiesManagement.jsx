import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
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
                    <p>Ce site utilise des cookies <a href="/condition" style={styles.link}>  en savoir plus</a></p>
                </div>
                <div>
                    <span onClick={cookiesAccept} style={styles.btn}><FontAwesomeIcon style={styles.check} icon={faCheck} /> accepter</span>
                    <span onClick={cookiesReject} style={styles.btn}><FontAwesomeIcon style={styles.mark} icon={faXmark} /> rejeter</span>
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
        height: 50,
        padding: "15px 30px"
    },
    link: {
        color: "#0077b6"
    },
    btn: {
        border: "none",
        background: "none",
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
    }
}