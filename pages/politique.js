import React from 'react';
import Head from 'next/head'
import Header from '../component/Header'
import Footer from "../component/Footer"
import Breadcrumbs from 'nextjs-breadcrumbs';

export default function Politique() {
  return (
    <div className="container">
      <Head>
        <title>Politique de confidentialié</title>
        <meta name="policy" content="page de politique de confidentialité" />
        <meta name="google-site-verification" content="iDBitZ99_g4ELVANaUEpnh57Tum7BZhycjYf21Zxy-M" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="part">
        <h1 className="h1">Politique de confidentialié</h1>
        <Breadcrumbs useDefaultStyle={false}
          containerClassName="breakLight"
          rootLabel="Accueil" />
        <h2 className='h2'>Nature des données collectées</h2>
        <p>
          Dans le cadre de l’utilisation des Sites, l’Editeur est susceptible de collecter
          les catégories de données suivantes concernant ses utilisateurs :

          Agrégation des données
          Agrégation avec des données non personnelles
          Nous pouvons publier, divulguer et utiliser les informations agrégées (informations
          relatives à tous nos Utilisateurs ou à des groupes ou catégories spécifiques d’Utilisateurs
          que nous combinons de manière à ce qu’un Utilisateur individuel ne puisse plus être
          identifié ou mentionné) et les informations non personnelles à des fins d’analyse du
          secteur et du marché, de profilage démographique, à des fins promotionnelles et
          publicitaires et à d’autres fins commerciales.
          Agrégation avec des données personnelles disponibles sur les comptes sociaux de l’Utilisateur
        </p>
        <h2 className='h2'>Cookies</h2>
        <p>Les cookies ne contiennent pas d’information personnelle.
          Le cookie enregistre des informations relatives à la navigation sur le service (les pages
          que vous avez consultées, la date et l’heure de la consultation…) que nous pourrons lire
          lors de vos visites ultérieures.
          L’Utilisateur doit toutefois donner son consentement quant à l’utilisation de certains cookies.
          A défaut d’acceptation, l’Utilisateur est informé que certaines fonctionnalités ou pages risquent de lui être refusées.
          L’Utilisateur pourra désactiver ces cookies par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
        <h2 className='h2'>Les données personnelles</h2>
        <p>
          Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles
          dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978
          relative à l'informatique, aux fichiers et aux libertés.
          En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit
          d'accès,de rectification, de suppression et d'opposition de ses données personnelles.
          L'Utilisateur exerce ce droit via son espace personnel.</p>

      </section>

      <Footer />

    </div>
  )
}
