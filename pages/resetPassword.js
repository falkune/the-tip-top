import React, { useState, useContext } from "react";
import Head from "next/head";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ApiContext from '../context/apiContext';
import { resetPassword } from '../fonctions/users';
import { notifier } from "../fonctions/utils";


export default function Resetpassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const context = useContext(ApiContext);

    const modifierPassword = (e) => {
        e.preventDefault();
        resetPassword(context, email, password)
            .then((response) => {
                notifier(response.message);
            })
            .catch((error) => {
                notifier(error.message);
            })
    }

    return (
        <div>
            <div className="container">
                <Head>
                    <title>Recuperation du mot de passe </title>
                    <meta name="help password" content="page de recuperation du mot de passe" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header />
                <section >
                    <form

                        style={{ borderBottom: "solid 1px #D2D2D2" }}
                    >
                        <h1 className="h1" style={{ fontSize: 25 }}>
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
