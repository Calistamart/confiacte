import React from "react";

const LegalNotice = () => {
    return (
        <div style={{ margin: '20px', padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <h1>Mentions Légales</h1>

            <h2>1. Informations générales</h2>
            <p><strong>Éditeur du site :</strong><br />
                Nom de l'étude notariale : Étude Notariale Dupont & Associés<br />
                Forme juridique : Société Civile Professionnelle (SCP)<br />
                Capital social : 100 000 euros<br />
                Adresse : 15 Rue des Notaires, 31000 Toulouse, France<br />
                Téléphone : +33 5 61 23 45 67<br />
                Email : <a href="mailto:contact@notairedupont.fr">contact@notairedupont.fr</a><br />
                Numéro SIRET : 123 456 789 00010<br />
                Numéro de TVA intracommunautaire : FR12 345678900</p>

            <p><strong>Directeur de la publication :</strong><br />
                Nom : Maître Jean Dupont<br />
                Email : <a href="mailto:jean.dupont@notairedupont.fr">jean.dupont@notairedupont.fr</a></p>

            <p><strong>Hébergement du site :</strong><br />
                Nom de l'hébergeur : OVH<br />
                Adresse de l'hébergeur : 2 Rue Kellermann, 59100 Roubaix, France<br />
                Téléphone : +33 9 72 10 10 07<br />
                Site web : <a href="https://www.ovh.com">www.ovh.com</a></p>

            <h2>2. Propriété intellectuelle</h2>
            <p>L'ensemble du contenu présent sur le site <a href="https://www.notairedupont.fr">www.notairedupont.fr</a>, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la SCP Dupont & Associés à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs.</p>

            <h2>3. Protection des données personnelles</h2>
            <p>Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données personnelles. Pour exercer ce droit, vous pouvez contacter Maître Jean Dupont à l'adresse email suivante : <a href="mailto:jean.dupont@notairedupont.fr">jean.dupont@notairedupont.fr</a>.</p>

            <h2>4. Cookies</h2>
            <p>Le site <a href="https://www.notairedupont.fr">www.notairedupont.fr</a> peut être amené à vous demander l’acceptation des cookies pour des besoins de statistiques et d'affichage. Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées sur votre ordinateur dans un fichier texte auquel un serveur accède pour lire et enregistrer des informations.</p>

            <h2>5. Liens hypertextes</h2>
            <p>Le site <a href="https://www.notairedupont.fr">www.notairedupont.fr</a> peut offrir des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet. La SCP Dupont & Associés ne dispose d'aucun moyen pour contrôler les sites en connexion avec ses sites internet. La SCP Dupont & Associés ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.</p>

            <h2>6. Droit applicable et juridiction compétente</h2>
            <p>Tout litige en relation avec l’utilisation du site <a href="https://www.notairedupont.fr">www.notairedupont.fr</a> est soumis au droit français. Il est fait attribution exclusive de juridiction aux tribunaux compétents de Toulouse.</p>
        </div>
    );
};

export default LegalNotice