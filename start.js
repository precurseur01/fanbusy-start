$(document).ready(function () {
    for (let i = 0; i < 12; i++) {
        const btn = $(`#btn${i}`);
        const content = $(`#collapseContent${i}`);
        const icon = $(`#collapseIcon${i}`);
        btn.on('click', () => {
            for (let j = 0; j < 12; j++) {
                const otherContent = $(`#collapseContent${j}`);
                const otherIcon = $(`#collapseIcon${j}`);
                if (i === j) {
                    if (content.css('display') === 'none') {
                        content.show();
                        icon.text('-');
                    } else {
                        content.hide();
                        icon.text('+');
                    }
                } else {
                    otherContent.hide();
                    otherIcon.text('+');
                }
            }
        });
    }

    let data = {
        english: {
            t1: "Use your content as a cash machine!",
            t2: "Create exclusive content and monetize it your way! You don't have to be a celebrity.",
            en: 'English',
            fr: "French",
            language: "Language",
            logIn: "Log in",
            singUp: "Sign Up",
            whatIs: "What is Fanbusy ?",
            fanbusyIs: "FanBusy is a platform where content creators can monetize their craft through subscriptions and pay-per-view models.",
            fanbusyCreated: "FanBusy created a platform based on a new set of key values.",
            fanbusyCreators: "FanBusy creators own 100% of their content,and keep 75% of all earnings.",
            inclusivity: "Inclusivity",
            allCreators: "All creators and their fans (18+) deserve a safe and inclusive platform to connect and share.",
            freedom: "Freedom",
            fanbusyCreatorsAreFree: "FanBusy creators are free to express their most authentic selves through their content. Our platform is proof that online safety, freedom of expression and entrepreneurship are a winning cocktail for creative success.",
            safety: "Safety",
            fanbusyStrives: "FanBusy strives to be the safest online platform. We use the most advanced internal controls in the industry, and we will never monetize or sell your data.",
            howToGetStarted: "How to get started",
            createAccount: "Create an account",
            toBegin: "To begin sharing your content on Fanbusy, you'll need to create an account. It's free to sign up, and takes only a few moments",
            setUp: "Set up your subscription rate",
            itIsUp: "It's up to you whether your account should be free or paid. Although free accounts allow fans to access your content without paying for a subscription, there are still many ways to make money. Features like pay-per-view messages, posts, and streams are available to free accounts.",
            crateContent: "Create content & promote your Account",
            once: "Once you’ve started sharing content, let your followers on other social platforms know about your FanBusy profile!",
            question1: " How can I initiate earnings on FanBusy?",
            response1: "Upon establishing a FanBusy account, the next step involves submitting your identification and banking details for a thorough review. Once your identity has been authenticated, you can commence crafting paid content and promoting your profile.",
            question2: " In what ways can I utilize FanBusy as a content creator?",
            response2: "FanBusy offers a plethora of features designed to empower you as a content creator.These include the ability to generate and share content, monetize your creative work,interact with your subscribers, and monitor your overall success. Explore tools such as paid messaging and more to maintain active engagement with your fan base.",
            question3: "What strategies can I employ to generate income on FanBusy ?",
            response3: "While paid subscriptions serve as one avenue for monetizing your content on FanBusy,there are various other approaches to explore. These include offering pay-per-view messages, posts, and streams, as well as receiving tips from your subscribers.Additionally, you have the option to conduct fundraising initiatives for charitable causes directly through your FanBusy profile.",
            frequentlyAsked: "Frequently Asked Questions",
            privacy: "Privacy",
            termsOfService: "Terms of Service",
            copyRight: "© Copyright 2024. All Rights Reserved",
            createContent: "Create content & promote your FanBusy"

        },

        french: {
            t1: "Votre contenu comme machine a cashe !",
            t2: "Créez du contenu exclusif et monétisez-le à votre façon ! Vous n'avez pas besoin d'être une célébrité.",
            en: "Anglais",
            fr: "Français",
            language: "Langue",
            logIn: "Connexion",
            singUp: "S'inscrire",
            whatIs: "Qu'est-ce que Fanbusy ?",
            fanbusyIs: "FanBusy est une plateforme sur laquelle les créateurs de contenu peuvent monétiser leur travail par le biais d'abonnements et de modèles de paiement à la séance.",
            fanbusyCreated: "FanBusy a créé une plateforme basée sur un nouvel ensemble de valeurs clés.",
            creativeOwnership: "Propriété créative",
            fanbusyCreators: "Les créateurs de FanBusy sont propriétaires à 100% de leur contenu et conservent 75% de tous les revenus.",
            inclusivity: "Inclusion",
            allCreators: "Tous les créateurs et leurs fans (18+) méritent une plateforme sûre et inclusive pour se connecter et partager.",
            freedom: "Liberté",
            fanbusyCreatorsAreFree: "Les créateurs de FanBusy sont libres d'exprimer leur personnalité la plus authentique à travers leur contenu. Notre plateforme est la preuve que la sécurité en ligne, la liberté d'expression et l'esprit d'entreprise sont un cocktail gagnant pour le succès créatif.",
            safety: "Sécurité",
            fanbusyStrives: "FanBusy s'efforce d'être la plateforme en ligne la plus sûre. Nous utilisons les contrôles internes les plus avancés de l'industrie, et nous ne monétiserons ni ne vendrons jamais vos données.",
            howToGetStarted: "Comment démarrer",
            createAccount: "Créer un compte",
            toBegin: "Pour commencer à partager votre contenu sur Fanbusy, vous devez créer un compte. L'inscription est gratuite et ne prend que quelques instants",
            setUp: "Fixez votre tarif d'abonnement",
            itIsUp: "C'est à vous de décider si votre compte doit être gratuit ou payant. Bien que les comptes gratuits permettent aux fans d'accéder à votre contenu sans payer d'abonnement, il existe encore de nombreuses façons de gagner de l'argent. Des fonctionnalités telles que les messages, les posts et les flux payants sont disponibles pour les comptes gratuits.",
            crateContent: "Créer du contenu et promouvoir votre Compte",
            once: " Une fois que vous avez commencé à partager du contenu, faites connaître votre profil FanBusy à vos followers sur d'autres plateformes sociales !",
            question1: " Comment puis-je initier des gains sur FanBusy ?",
            response1: "Après avoir créé un compte FanBusy, l'étape suivante consiste à soumettre vos données d'identification et vos coordonnées bancaires à un examen approfondi. Une fois votre identité authentifiée, vous pouvez commencer à créer du contenu payant et à promouvoir votre profil.",
            question2: "Comment puis-je utiliser FanBusy en tant que créateur de contenu ?",
            response2: "FanBusy offre une pléthore de fonctionnalités conçues pour vous permettre, en tant que créateur de contenu, de générer et de partager du contenu, de monétiser votre travail créatif, d'interagir avec vos abonnés et de contrôler votre succès global. Explorez des outils tels que la messagerie payante et plus encore pour maintenir un engagement actif avec votre base de fans.",
            question3: "Quelles stratégies puis-je employer pour générer des revenus sur FanBusy ?",
            response3: "Si les abonnements payants constituent l'un des moyens de monétiser votre contenu sur FanBusy, il existe d'autres approches à explorer, notamment l'offre de messages et de flux payants, ainsi que la réception de conseils de la part de vos abonnés. En outre, vous avez la possibilité de mener des initiatives de collecte de fonds pour des causes caritatives directement à partir de votre profil FanBusy.",
            frequentlyAsked: "Questions fréquemment posées",
            privacy: "Privée",
            termsOfService: "Conditions d'utilisation",
            copyRight: "© Copyright 2024. Tous droits réservés",
            createContent: "Créer du contenu et promouvoir votre compte"
        }
    }

    let langs = $(".langs"),
        link = $(".translate"),
        t1 = $("#t1"),
        t2 = $("#t2"),
        en = $(".en"),
        fr = $(".fr"),
        language = $(".language"),
        logIn = $(".logIn"),
        singUp = $(".singUp"),
        whatIs = $(".whatIs"),
        fanbusyIs = $(".fanbusyIs"),
        fanbusyCreated = $(".fanbusyCreated"),
        creativeOwnership = $(".creativeOwnership"),
        fanbusyCreators = $(".fanbusyCreators"),
        inclusivity = $(".inclusivity"),
        llCreators = $(".allCreators"),
        freedom = $(".freedom"),
        fanbusyCreatorsAreFree = $(".fanbusyCreatorsAreFree"),
        safety = $(".safety"),
        fanbusyStrives = $(".fanbusyStrives"),
        howToGetStarted = $(".howToGetStarted"),
        createAccount = $(".createAccount"),
        toBegin = $(".toBegin"),
        setUp = $(".setUp"),
        itIsUp = $(".itIsUp"),
        once = $(".once"),
        question1 = $(".question1"),
        response1 = $(".response1"),
        question2 = $(".question2"),
        response2 = $(".response2"),
        question3 = $(".question3"),
        response3 = $(".response3"),
        frequentlyAsked = $(".frequentlyAsked"),
        privacy = $(".privacy"),
        termsOfService = $(".termsOfService"),
        copyRight = $(".copyRight"),
        createContent = $(".createContent")


    function changeLanguageAndURL(attr) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', attr);
        history.replaceState(null, null, url.toString());
        langs.find('.active').removeClass("active");
        $(`.translate[language="${attr}"]`).addClass("active");
        t1.text(data[attr].t1);
        t2.text(data[attr].t2);
        en.text(data[attr].en);
        fr.text(data[attr].fr);
        itIsUp.text(data[attr].itIsUp);
        language.text(data[attr].language);
        logIn.text(data[attr].logIn);
        singUp.text(data[attr].singUp);
        whatIs.text(data[attr].whatIs);
        fanbusyIs.text(data[attr].fanbusyIs);
        fanbusyCreated.text(data[attr].fanbusyCreated);
        creativeOwnership.text(data[attr].creativeOwnership);
        fanbusyCreators.text(data[attr].fanbusyCreators);
        inclusivity.text(data[attr].inclusivity);
        llCreators.text(data[attr].llCreators);
        freedom.text(data[attr].freedom);
        fanbusyCreatorsAreFree.text(data[attr].fanbusyCreatorsAreFree);
        safety.text(data[attr].safety);
        fanbusyStrives.text(data[attr].fanbusyStrives);
        howToGetStarted.text(data[attr].howToGetStarted);
        createAccount.text(data[attr].createAccount);
        toBegin.text(data[attr].toBegin);
        setUp.text(data[attr].setUp);
        itIsUp.text(data[attr].itIsUp);
        once.text(data[attr].once);
        question1.text(data[attr].question1);
        response1.text(data[attr].response1);
        question2.text(data[attr].question2);
        response2.text(data[attr].response2);
        question3.text(data[attr].question3);
        response3.text(data[attr].response3);
        frequentlyAsked.text(data[attr].frequentlyAsked);
        privacy.text(data[attr].privacy);
        termsOfService.text(data[attr].termsOfService);
        copyRight.text(data[attr].copyRight);
        createContent.text(data[attr].createContent);


    }

    link.on('click', function () {
        const lang = $(this).attr("language");
        changeLanguageAndURL(lang);

    });

    function getLangFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('lang') || 'en';
    }

    const initialLang = getLangFromURL();
    if (initialLang) {
        changeLanguageAndURL(initialLang);
    }
});
