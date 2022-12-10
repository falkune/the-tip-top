import { useState, useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import ApiContext from '../context/apiContext';
import { resetPassword } from '../fonctions/users';
import { notifier } from "../fonctions/utils";


export default function Changepassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(ApiContext);
    const router = useRouter();

    const modifierPassword = (e) => {
        e.preventDefault();
        resetPassword(context, email, password)
            .then((response) => {
                notifier(response.message, 'success');
                router.push({ pathname: "/connexion" }, undefined, { shallow: true });
            })
            .catch((error) => {
                notifier(error.message);
            })
    }

    return (
        <div>
            <div className="container">
                <Head>
                    <title>TeaBingo - Jeux concours</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <section className={styles.login}>
                    <form
                        className={styles.log}
                        style={{ borderBottom: "solid 1px #D2D2D2" }}
                    >
                        <h1 className={styles.h1} style={{ fontSize: 25 }}>
                            Modification de mot de passe
                        </h1>
                        <input
                            label='Password'
                            name='password'
                            aria-label='formEmail'
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <input
                            label='Password'
                            name='password'
                            type='password'
                            aria-label='formPassword'
                            placeholder="Mot de passe"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                            className={styles.action}
                            style={{ animation: "pulse 1sec infite" }}
                            onClick={e => modifierPassword(e)}
                        >
                            Changer votre mot de passe
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </div>
    );
}