import { TranslationKeys } from './translations';

export const es: TranslationKeys = {
  meta: {
    title: 'FreeGDPR - Generador Gratuito de Políticas de Privacidad con IA',
    description: 'Genera políticas de privacidad compatibles con GDPR y CCPA gratis usando IA. Políticas de privacidad instantáneas, personalizadas y legalmente sólidas para tu sitio web o app.',
    keywords: 'generador de política de privacidad, GDPR, CCPA, política de privacidad gratis, política de privacidad IA',
  },
  header: { generator: 'Generador', whyFree: '¿Por qué gratis?', howItWorks: 'Cómo funciona', resources: 'Recursos legales' },
  hero: { badge: 'Tecnología Legal con IA', title: 'FreeGDPR', titleHighlight: 'Generador de Políticas de Privacidad', subtitle: 'Genera políticas compatibles con CCPA, GDPR, Google Analytics y AdSense en segundos usando IA avanzada.' },
  steps: { generalInfo: 'Info General', dataCollection: 'Recopilación de Datos', compliance: 'Cumplimiento', thirdParty: 'Terceros', back: 'Atrás', nextStep: 'Siguiente', generatePolicy: 'Generar Política' },
  generalInfoForm: { title: 'Información General', subtitle: 'Comencemos con los datos básicos de tu negocio o proyecto.', companyName: 'Nombre de Empresa', companyNamePlaceholder: 'ej. Mi Empresa S.L.', websiteName: 'Nombre del Sitio/App', websiteNamePlaceholder: 'ej. Mi App', websiteUrl: 'URL del Sitio', websiteUrlPlaceholder: 'https://ejemplo.com', contactEmail: 'Email de Contacto', contactEmailPlaceholder: 'privacidad@ejemplo.com', country: 'País', policyLanguage: 'Idioma de la Política', platformType: 'Tipo de Plataforma', website: 'Sitio Web', mobileApp: 'App Móvil', both: 'Sitio Web y App Móvil' },
  dataCollectionForm: { title: 'Recopilación de Datos', subtitle: '¿Qué tipo de información recopilas de tus usuarios?', emailAddresses: 'Direcciones de Email', emailDesc: 'Para boletines, creación de cuentas o soporte.', personalNames: 'Nombres Personales', namesDesc: 'Nombres y apellidos de usuarios.', cookies: 'Cookies y Seguimiento', cookiesDesc: 'Cookies web estándar para análisis o preferencias.', paymentInfo: 'Información de Pago', paymentDesc: 'Números de tarjeta, direcciones de facturación.', phoneNumbers: 'Números de Teléfono', phoneDesc: 'Para notificaciones SMS o contacto.', physicalAddresses: 'Direcciones Físicas', addressDesc: 'Direcciones de envío o facturación.', geolocation: 'Geolocalización', locationDesc: 'Datos GPS o seguimiento de ubicación precisa.', deviceData: 'Datos del Dispositivo', deviceDesc: 'Dirección IP, ID de dispositivo, tipo de navegador.' },
  complianceForm: { title: 'Cumplimiento Legal', subtitle: 'Selecciona las regulaciones que necesitas cumplir según tu base de usuarios.', gdpr: 'GDPR (Europa)', gdprDesc: 'Reglamento General de Protección de Datos. Esencial si tienes usuarios en la UE.', ccpa: 'CCPA (California)', ccpaDesc: 'Ley de Privacidad del Consumidor de California.', cpra: 'CPRA (California Enmendada)', cpraDesc: 'Ley de Derechos de Privacidad de California. Actualización del CCPA.', caloppa: 'CalOPPA (California Online)', caloppaDesc: 'Ley de Protección de Privacidad en Línea de California.', coppa: 'COPPA (Niños)', coppaDesc: 'Ley de Protección de Privacidad Infantil en Línea. Si tu público son menores de 13 años.' },
  thirdPartyForm: { title: 'Servicios de Terceros', subtitle: '¿Qué herramientas o servicios externos interactúan con los datos de tus usuarios?', googleAnalytics: 'Google Analytics', googleAdSense: 'Google AdSense', facebookPixel: 'Meta / Facebook Pixel', stripe: 'Pagos Stripe', paypal: 'PayPal', intercom: 'Intercom / Chat' },
  aiThinking: { analyzing: 'Analizando estructura del negocio...', checking: 'Verificando requisitos GDPR y CCPA...', formulating: 'Formulando cláusulas de retención de datos...', drafting: 'Redactando documento legal...', poweredBy: 'Impulsado por IA', finalizing: 'Finalizando estructura del documento...' },
  result: {
    savedBadge: '¡Acabas de ahorrar ~$500 en honorarios legales!',
    title: 'Política Generada con Éxito',
    subtitle: 'Tu documento es legalmente sólido y está listo para usar. Si te resultó útil, considera compartirlo.',
    shareText: 'Acabo de generar una política de privacidad completa gratis con FreeGDPR. ¡Échale un vistazo!',
    shareTwitter: 'Compartir en Twitter',
    shareLinkedin: 'Compartir en LinkedIn',
    documentPreview: 'Vista Previa del Documento',
    showHtml: 'Mostrar HTML',
    showPreview: 'Mostrar Vista Previa',
    copy: 'Copiar',
    copied: 'Copiado',
    whatsNext: {
      title: '¿Qué sigue?',
      steps: [
        'Copia el texto HTML o Markdown.',
        'Crea una nueva página en tu sitio (ej. /privacidad).',
        'Enlázala desde tu pie de página.',
      ],
    },
    makeAdjustments: 'Hacer Ajustes',
    badge: {
      title: 'Insignia de Confianza Gratis',
      description: 'Añade esta insignia al pie de página de tu sitio para mostrar que te importa la privacidad de tus usuarios.',
      preview: 'Privacidad verificada por FreeGDPR',
    },
    disclaimer: 'Aviso: Esta política fue generada por IA. Se proporciona solo con fines informativos y no constituye asesoramiento legal. Debes consultar con un abogado calificado para revisar tu política de privacidad.',
  },
  howItWorks: {
    title: 'Cómo Funciona FreeGDPR',
    subtitle: 'Genera una política de privacidad legalmente sólida en minutos, no días.',
    steps: [
      {
        title: '1. Ingresa Detalles',
        description: 'Completa un cuestionario simple sobre tu sitio web o app, prácticas de recopilación de datos y herramientas de terceros.',
      },
      {
        title: '2. Generación IA',
        description: 'Nuestra IA avanzada analiza tus entradas y redacta una política de privacidad completa adaptada a tus necesidades.',
      },
      {
        title: '3. Revisa Cumplimiento',
        description: 'La política generada incluye cláusulas para GDPR, CCPA y otras regulaciones según tu selección.',
      },
      {
        title: '4. Descarga y Publica',
        description: 'Copia el markdown o descarga el archivo, luego publícalo en tu sitio web o app móvil.',
      },
    ],
    cta: {
      title: '¿Listo para proteger tu negocio?',
      description: 'Inicia el asistente ahora y obtén tu política de privacidad gratis.',
    },
  },
  legalResources: {
    title: 'Recursos Legales',
    subtitle: 'Enlaces útiles y documentación para entender las regulaciones de privacidad de datos.',
    resources: [
      {
        title: 'Texto Oficial GDPR',
        description: 'El texto oficial completo del Reglamento General de Protección de Datos.',
      },
      {
        title: 'Guía CCPA (California)',
        description: 'Información oficial sobre la Ley de Privacidad del Consumidor de California.',
      },
      {
        title: 'FAQ COPPA',
        description: 'Guía de la FTC sobre la Regla de Protección de Privacidad Infantil en Línea.',
      },
      {
        title: 'Privacidad Google Analytics',
        description: 'Información de privacidad y seguridad de datos para usuarios de Google Analytics.',
      },
    ],
  },
  whyFree: {
    openSourceBadge: 'Filosofía Open Source',
    title: 'La privacidad no debería ser un {highlight}.',
    titleHighlight: 'impuesto de lujo',
    subtitle: 'Creemos que cada emprendedor, creador y desarrollador merece protección legal sin el precio de $5,000. Usamos IA para democratizar el cumplimiento.',
    comparison: {
      header: 'Compara Opciones',
      subheader: '¿Es gratis realmente mejor?',
      lawyer: {
        title: 'Bufete Tradicional',
        price: '$500 - $5,000',
        pros: ['Cobertura de Responsabilidad Completa'],
        cons: ['Muy Lento (Semanas)', 'Facturación por Hora'],
      },
      template: {
        title: 'Plantillas Genéricas',
        price: '$29 - $99',
        pros: ['Descarga Instantánea'],
        cons: ['Genérico / Desactualizado', 'Sin Personalización'],
      },
      freeGdpr: {
        title: 'FreeGDPR',
        price: '$0.00',
        features: ['Borrador IA Instantáneo', 'Adaptado a Ti', 'Siempre Gratis'],
      },
    },
    professional: {
      title: 'Una Política es Solo el Primer Paso',
      subtitle: 'Tener un documento te hace cumplir en papel. ¿Pero tienes la implementación técnica para respaldarlo?',
      technical: {
        title: 'Implementación Técnica',
        description: '¿Tienes configurado Google Consent Mode v2? ¿Tus cookies realmente se bloquean antes del consentimiento? Escribir el texto es fácil; codificar la barrera es difícil.',
      },
      riskAudit: {
        title: 'Auditoría de Riesgos y Necesidades Empresariales',
        description: 'Si manejas datos sensibles (Salud, Finanzas, Niños), un generador gratuito no es suficiente. Necesitas un experto humano para auditar tus flujos de datos.',
      },
    },
    cta: {
      title: '¿Necesitas Implementación Profesional?',
      description: 'No arriesgues multas por una mala configuración técnica. Contrata al equipo que construyó esta herramienta para implementar tus Gestores de Consentimiento de Cookies, seguimiento del lado del servidor y Gobernanza de Datos.',
      button: 'Contactar Tenten AI Agency',
      tagline: 'La Agencia AI-First Líder en Asia',
    },
  },
  footer: { copyright: '© {year} FreeGDPR. Todos los derechos reservados.', builtBy: 'Construido con Amor ❤️ por', tentenDesc: 'La Agencia AI-First Líder en Asia', disclaimer: 'Generador de Políticas de Privacidad proporcionado solo con fines informativos.' },
  cookieConsent: {
    title: 'Valoramos tu Privacidad',
    description: 'Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. Al hacer clic en "Aceptar Todo", consientes el uso de cookies.',
    customize: 'Personalizar Preferencias',
    acceptAll: 'Aceptar Todo',
    acceptSelected: 'Aceptar Seleccionados',
    rejectAll: 'Rechazar Todo',
    alwaysActive: 'Siempre Activo',
    privacyLink: 'Leer nuestra Política de Privacidad',
    necessary: {
      title: 'Cookies Necesarias',
      description: 'Esenciales para que el sitio web funcione correctamente. No se pueden desactivar.',
    },
    analytics: {
      title: 'Cookies de Análisis',
      description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
    },
    marketing: {
      title: 'Cookies de Marketing',
      description: 'Se utilizan para mostrar anuncios personalizados.',
    },
    preferences: {
      title: 'Cookies de Preferencias',
      description: 'Recuerdan tu configuración y preferencias para una mejor experiencia.',
    },
  },
};

export const fr: TranslationKeys = {
  meta: { title: 'FreeGDPR - Générateur Gratuit de Politique de Confidentialité IA', description: 'Générez des politiques de confidentialité conformes au RGPD et CCPA gratuitement avec l\'IA.', keywords: 'générateur politique de confidentialité, RGPD, CCPA, politique de confidentialité gratuite' },
  header: { generator: 'Générateur', whyFree: 'Pourquoi Gratuit?', howItWorks: 'Comment ça marche', resources: 'Ressources Juridiques' },
  hero: { badge: 'Technologie Juridique IA', title: 'FreeGDPR', titleHighlight: 'Générateur de Politique de Confidentialité', subtitle: 'Générez des politiques conformes CCPA, RGPD, Google Analytics et AdSense en quelques secondes.' },
  steps: { generalInfo: 'Info Générale', dataCollection: 'Collecte de Données', compliance: 'Conformité', thirdParty: 'Tiers', back: 'Retour', nextStep: 'Suivant', generatePolicy: 'Générer la Politique' },
  generalInfoForm: { title: 'Informations Générales', subtitle: 'Commençons par les informations de base sur votre entreprise ou projet.', companyName: 'Nom de l\'Entreprise', companyNamePlaceholder: 'ex. Ma Société SARL', websiteName: 'Nom du Site/App', websiteNamePlaceholder: 'ex. Mon App', websiteUrl: 'URL du Site', websiteUrlPlaceholder: 'https://exemple.com', contactEmail: 'Email de Contact', contactEmailPlaceholder: 'confidentialite@exemple.com', country: 'Pays', policyLanguage: 'Langue de la Politique', platformType: 'Type de Plateforme', website: 'Site Web', mobileApp: 'App Mobile', both: 'Site Web et App Mobile' },
  dataCollectionForm: { title: 'Collecte de Données', subtitle: 'Quel type d\'informations collectez-vous auprès de vos utilisateurs?', emailAddresses: 'Adresses Email', emailDesc: 'Pour newsletters, création de compte ou support.', personalNames: 'Noms Personnels', namesDesc: 'Prénoms et noms des utilisateurs.', cookies: 'Cookies et Suivi', cookiesDesc: 'Cookies web standard pour analyse ou préférences.', paymentInfo: 'Info de Paiement', paymentDesc: 'Numéros de carte, adresses de facturation.', phoneNumbers: 'Numéros de Téléphone', phoneDesc: 'Pour notifications SMS ou contact.', physicalAddresses: 'Adresses Physiques', addressDesc: 'Adresses de livraison ou facturation.', geolocation: 'Géolocalisation', locationDesc: 'Données GPS ou suivi de localisation précis.', deviceData: 'Données Appareil', deviceDesc: 'Adresse IP, ID appareil, type de navigateur.' },
  complianceForm: { title: 'Conformité Légale', subtitle: 'Sélectionnez les réglementations auxquelles vous devez vous conformer.', gdpr: 'RGPD (Europe)', gdprDesc: 'Règlement Général sur la Protection des Données. Essentiel pour les utilisateurs UE.', ccpa: 'CCPA (Californie)', ccpaDesc: 'Loi sur la Protection de la Vie Privée des Consommateurs de Californie.', cpra: 'CPRA (Californie Amendée)', cpraDesc: 'Loi sur les Droits de Confidentialité de Californie.', caloppa: 'CalOPPA (Californie Online)', caloppaDesc: 'Loi de Protection de la Confidentialité en Ligne de Californie.', coppa: 'COPPA (Enfants)', coppaDesc: 'Loi sur la Protection de la Vie Privée des Enfants en Ligne.' },
  thirdPartyForm: { title: 'Services Tiers', subtitle: 'Quels outils ou services externes interagissent avec les données de vos utilisateurs?', googleAnalytics: 'Google Analytics', googleAdSense: 'Google AdSense', facebookPixel: 'Meta / Facebook Pixel', stripe: 'Paiements Stripe', paypal: 'PayPal', intercom: 'Intercom / Chat' },
  aiThinking: { analyzing: 'Analyse de la structure commerciale...', checking: 'Vérification des exigences RGPD et CCPA...', formulating: 'Formulation des clauses de rétention des données...', drafting: 'Rédaction du document juridique...', poweredBy: 'Propulsé par IA', finalizing: 'Finalisation de la structure du document...' },
  result: {
    savedBadge: 'Vous venez d\'économiser ~500$ en frais juridiques!',
    title: 'Politique Générée avec Succès',
    subtitle: 'Votre document est juridiquement solide et prêt à l\'emploi. Si cet outil vous a été utile, pensez à le partager.',
    shareText: 'Je viens de générer une politique de confidentialité complète gratuitement avec FreeGDPR. Découvrez-le!',
    shareTwitter: 'Partager sur Twitter',
    shareLinkedin: 'Partager sur LinkedIn',
    documentPreview: 'Aperçu du Document',
    showHtml: 'Afficher HTML',
    showPreview: 'Afficher Aperçu',
    copy: 'Copier',
    copied: 'Copié',
    whatsNext: {
      title: 'Et Maintenant?',
      steps: [
        'Copiez le texte HTML ou Markdown.',
        'Créez une nouvelle page sur votre site (ex. /confidentialite).',
        'Liez-la depuis votre pied de page.',
      ],
    },
    makeAdjustments: 'Faire des Ajustements',
    badge: {
      title: 'Badge de Confiance Gratuit',
      description: 'Ajoutez ce badge au pied de page de votre site pour montrer que vous vous souciez de la confidentialité de vos utilisateurs.',
      preview: 'Confidentialité vérifiée par FreeGDPR',
    },
    disclaimer: 'Avertissement: Cette politique a été générée par IA. Elle est fournie à titre informatif uniquement et ne constitue pas un conseil juridique.',
  },
  howItWorks: {
    title: 'Comment Fonctionne FreeGDPR',
    subtitle: 'Générez une politique juridiquement solide en minutes, pas en jours.',
    steps: [
      {
        title: '1. Entrez les Détails',
        description: 'Remplissez un questionnaire simple sur votre site ou app, vos pratiques de collecte de données et outils tiers.',
      },
      {
        title: '2. Génération IA',
        description: 'Notre IA avancée analyse vos entrées et rédige une politique de confidentialité complète adaptée à vos besoins.',
      },
      {
        title: '3. Vérifiez la Conformité',
        description: 'La politique générée inclut des clauses pour RGPD, CCPA et autres réglementations selon votre sélection.',
      },
      {
        title: '4. Téléchargez et Publiez',
        description: 'Copiez le markdown ou téléchargez le fichier, puis publiez-le sur votre site web ou application mobile.',
      },
    ],
    cta: {
      title: 'Prêt à protéger votre entreprise?',
      description: 'Démarrez l\'assistant maintenant et obtenez votre politique de confidentialité gratuite.',
    },
  },
  legalResources: {
    title: 'Ressources Juridiques',
    subtitle: 'Liens utiles pour comprendre les réglementations sur la confidentialité des données.',
    resources: [
      {
        title: 'Texte Officiel RGPD',
        description: 'Le texte officiel complet du Règlement Général sur la Protection des Données.',
      },
      {
        title: 'Guide CCPA (Californie)',
        description: 'Informations officielles sur la Loi sur la Protection de la Vie Privée des Consommateurs de Californie.',
      },
      {
        title: 'FAQ COPPA',
        description: 'Guide FTC sur la règle de Protection de la Vie Privée des Enfants en Ligne.',
      },
      {
        title: 'Confidentialité Google Analytics',
        description: 'Informations de confidentialité et sécurité des données pour les utilisateurs Google Analytics.',
      },
    ],
  },
  whyFree: {
    openSourceBadge: 'Philosophie Open Source',
    title: 'La confidentialité ne devrait pas être une {highlight}.',
    titleHighlight: 'taxe de luxe',
    subtitle: 'Nous croyons que chaque entrepreneur, créateur et développeur mérite une protection juridique sans le prix de 5 000$. Nous avons utilisé l\'IA pour démocratiser la conformité.',
    comparison: {
      header: 'Comparez les Options',
      subheader: 'Gratuit est-il vraiment mieux?',
      lawyer: {
        title: 'Cabinet Traditionnel',
        price: '$500 - $5,000',
        pros: ['Couverture Responsabilité Complète'],
        cons: ['Très Lent (Semaines)', 'Facturation Horaire'],
      },
      template: {
        title: 'Modèles Génériques',
        price: '$29 - $99',
        pros: ['Téléchargement Instantané'],
        cons: ['Générique / Obsolète', 'Pas de Personnalisation'],
      },
      freeGdpr: {
        title: 'FreeGDPR',
        price: '$0.00',
        features: ['Brouillon IA Instantané', 'Adapté à Vous', 'Toujours Gratuit'],
      },
    },
    professional: {
      title: 'Une Politique n\'est que la Première Étape',
      subtitle: 'Avoir un document vous rend conforme sur papier. Mais avez-vous l\'implémentation technique pour le soutenir?',
      technical: {
        title: 'Implémentation Technique',
        description: 'Avez-vous configuré Google Consent Mode v2? Vos cookies sont-ils vraiment bloqués avant le consentement? Écrire le texte est facile; coder la barrière est difficile.',
      },
      riskAudit: {
        title: 'Audit des Risques et Besoins Entreprise',
        description: 'Si vous traitez des données sensibles (Santé, Finance, Enfants), un générateur gratuit ne suffit pas. Vous avez besoin d\'un expert humain pour auditer vos flux de données.',
      },
    },
    cta: {
      title: 'Besoin d\'une Implémentation Professionnelle?',
      description: 'Ne risquez pas d\'amendes à cause d\'une mauvaise configuration technique. Engagez l\'équipe qui a construit cet outil pour implémenter vos Gestionnaires de Consentement Cookies, suivi côté serveur et Gouvernance des Données.',
      button: 'Contacter Tenten AI Agency',
      tagline: 'L\'Agence AI-First Leader en Asie',
    },
  },
  footer: { copyright: '© {year} FreeGDPR. Tous droits réservés.', builtBy: 'Construit avec Amour ❤️ par', tentenDesc: 'L\'Agence AI-First Leader en Asie', disclaimer: 'Générateur de politique de confidentialité fourni à titre informatif uniquement.' },
  cookieConsent: {
    title: 'Nous Respectons Votre Vie Privée',
    description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En cliquant sur "Tout Accepter", vous consentez à notre utilisation des cookies.',
    customize: 'Personnaliser les Préférences',
    acceptAll: 'Tout Accepter',
    acceptSelected: 'Accepter la Sélection',
    rejectAll: 'Tout Refuser',
    alwaysActive: 'Toujours Actif',
    privacyLink: 'Lire notre Politique de Confidentialité',
    necessary: {
      title: 'Cookies Nécessaires',
      description: 'Essentiels au bon fonctionnement du site web. Ne peuvent pas être désactivés.',
    },
    analytics: {
      title: 'Cookies Analytiques',
      description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site web.',
    },
    marketing: {
      title: 'Cookies Marketing',
      description: 'Utilisés pour diffuser des publicités personnalisées.',
    },
    preferences: {
      title: 'Cookies de Préférences',
      description: 'Mémorisent vos paramètres et préférences pour une meilleure expérience.',
    },
  },
};

export const de: TranslationKeys = {
  meta: { title: 'FreeGDPR - Kostenloser KI-Datenschutzrichtlinien-Generator', description: 'Erstellen Sie kostenlos DSGVO- und CCPA-konforme Datenschutzrichtlinien mit KI.', keywords: 'Datenschutzrichtlinien-Generator, DSGVO, CCPA, kostenlose Datenschutzrichtlinie' },
  header: { generator: 'Generator', whyFree: 'Warum kostenlos?', howItWorks: 'So funktioniert\'s', resources: 'Rechtliche Ressourcen' },
  hero: { badge: 'KI-gestützte Rechtstechnologie', title: 'FreeGDPR', titleHighlight: 'Datenschutzrichtlinien-Generator', subtitle: 'Erstellen Sie in Sekunden CCPA-, DSGVO-, Google Analytics- und AdSense-konforme Richtlinien.' },
  steps: { generalInfo: 'Allgemeine Info', dataCollection: 'Datenerfassung', compliance: 'Compliance', thirdParty: 'Drittanbieter', back: 'Zurück', nextStep: 'Weiter', generatePolicy: 'Richtlinie erstellen' },
  generalInfoForm: { title: 'Allgemeine Informationen', subtitle: 'Beginnen wir mit den Grundlagen Ihres Unternehmens oder Projekts.', companyName: 'Firmenname', companyNamePlaceholder: 'z.B. Meine Firma GmbH', websiteName: 'Website/App-Name', websiteNamePlaceholder: 'z.B. Meine App', websiteUrl: 'Website-URL', websiteUrlPlaceholder: 'https://beispiel.de', contactEmail: 'Kontakt-E-Mail', contactEmailPlaceholder: 'datenschutz@beispiel.de', country: 'Land', policyLanguage: 'Richtlinien-Sprache', platformType: 'Plattformtyp', website: 'Website', mobileApp: 'Mobile App', both: 'Website & Mobile App' },
  dataCollectionForm: { title: 'Datenerfassung', subtitle: 'Welche Art von Informationen sammeln Sie von Ihren Nutzern?', emailAddresses: 'E-Mail-Adressen', emailDesc: 'Für Newsletter, Kontoerstellung oder Support.', personalNames: 'Persönliche Namen', namesDesc: 'Vor- und Nachnamen der Nutzer.', cookies: 'Cookies & Tracking', cookiesDesc: 'Standard-Web-Cookies für Analysen oder Einstellungen.', paymentInfo: 'Zahlungsinformationen', paymentDesc: 'Kreditkartennummern, Rechnungsadressen.', phoneNumbers: 'Telefonnummern', phoneDesc: 'Für SMS-Benachrichtigungen oder Kontakt.', physicalAddresses: 'Physische Adressen', addressDesc: 'Versand- oder Rechnungsadressen.', geolocation: 'Geolokalisierung', locationDesc: 'GPS-Daten oder präzise Standortverfolgung.', deviceData: 'Gerätedaten', deviceDesc: 'IP-Adresse, Geräte-ID, Browsertyp.' },
  complianceForm: { title: 'Rechtliche Compliance', subtitle: 'Wählen Sie die Vorschriften aus, die Sie einhalten müssen.', gdpr: 'DSGVO (Europa)', gdprDesc: 'Datenschutz-Grundverordnung. Erforderlich für EU-Nutzer.', ccpa: 'CCPA (Kalifornien)', ccpaDesc: 'California Consumer Privacy Act.', cpra: 'CPRA (Kalifornien geändert)', cpraDesc: 'California Privacy Rights Act.', caloppa: 'CalOPPA (Kalifornien Online)', caloppaDesc: 'California Online Privacy Protection Act.', coppa: 'COPPA (Kinder)', coppaDesc: 'Children\'s Online Privacy Protection Act.' },
  thirdPartyForm: { title: 'Drittanbieter-Dienste', subtitle: 'Welche externen Tools oder Dienste interagieren mit den Nutzerdaten?', googleAnalytics: 'Google Analytics', googleAdSense: 'Google AdSense', facebookPixel: 'Meta / Facebook Pixel', stripe: 'Stripe-Zahlungen', paypal: 'PayPal', intercom: 'Intercom / Chat' },
  aiThinking: { analyzing: 'Geschäftsstruktur wird analysiert...', checking: 'DSGVO- und CCPA-Anforderungen werden geprüft...', formulating: 'Datenaufbewahrungsklauseln werden formuliert...', drafting: 'Rechtsdokument wird erstellt...', poweredBy: 'Powered by KI', finalizing: 'Dokumentstruktur wird finalisiert...' },
  result: {
    savedBadge: 'Sie haben gerade ~500$ an Anwaltskosten gespart!',
    title: 'Richtlinie erfolgreich erstellt',
    subtitle: 'Ihr Dokument ist rechtlich solide und einsatzbereit. Wenn dieses Tool hilfreich war, teilen Sie es bitte.',
    shareText: 'Ich habe gerade eine umfassende Datenschutzrichtlinie kostenlos mit FreeGDPR erstellt. Schau es dir an!',
    shareTwitter: 'Auf Twitter teilen',
    shareLinkedin: 'Auf LinkedIn teilen',
    documentPreview: 'Dokumentvorschau',
    showHtml: 'HTML anzeigen',
    showPreview: 'Vorschau anzeigen',
    copy: 'Kopieren',
    copied: 'Kopiert',
    whatsNext: {
      title: 'Was nun?',
      steps: [
        'Kopieren Sie den HTML- oder Markdown-Text.',
        'Erstellen Sie eine neue Seite auf Ihrer Website (z.B. /datenschutz).',
        'Verlinken Sie sie aus dem Footer.',
      ],
    },
    makeAdjustments: 'Anpassungen vornehmen',
    badge: {
      title: 'Kostenloses Vertrauens-Badge',
      description: 'Fügen Sie dieses Badge zu Ihrem Website-Footer hinzu, um zu zeigen, dass Ihnen die Privatsphäre Ihrer Nutzer wichtig ist.',
      preview: 'Datenschutz verifiziert durch FreeGDPR',
    },
    disclaimer: 'Hinweis: Diese Richtlinie wurde von KI erstellt. Sie dient nur zu Informationszwecken und stellt keine Rechtsberatung dar.',
  },
  howItWorks: {
    title: 'Wie FreeGDPR funktioniert',
    subtitle: 'Erstellen Sie in Minuten statt Tagen eine rechtlich solide Datenschutzrichtlinie.',
    steps: [
      {
        title: '1. Details eingeben',
        description: 'Füllen Sie einen einfachen Fragebogen über Ihre Website oder App, Datenerfassungspraktiken und Drittanbieter-Tools aus.',
      },
      {
        title: '2. KI-Generierung',
        description: 'Unsere fortschrittliche KI analysiert Ihre Eingaben und erstellt eine umfassende Datenschutzrichtlinie, die auf Ihre Bedürfnisse zugeschnitten ist.',
      },
      {
        title: '3. Compliance prüfen',
        description: 'Die generierte Richtlinie enthält Klauseln für DSGVO, CCPA und andere Vorschriften basierend auf Ihrer Auswahl.',
      },
      {
        title: '4. Herunterladen & Veröffentlichen',
        description: 'Kopieren Sie den Markdown oder laden Sie die Datei herunter und veröffentlichen Sie sie auf Ihrer Website oder mobilen App.',
      },
    ],
    cta: {
      title: 'Bereit, Ihr Unternehmen zu schützen?',
      description: 'Starten Sie jetzt den Assistenten und erhalten Sie Ihre kostenlose Datenschutzrichtlinie.',
    },
  },
  legalResources: {
    title: 'Rechtliche Ressourcen',
    subtitle: 'Hilfreiche Links zum Verständnis der Datenschutzvorschriften.',
    resources: [
      {
        title: 'Offizieller DSGVO-Text',
        description: 'Der vollständige offizielle Text der Datenschutz-Grundverordnung.',
      },
      {
        title: 'CCPA-Leitfaden (Kalifornien)',
        description: 'Offizielle Informationen zum California Consumer Privacy Act.',
      },
      {
        title: 'COPPA FAQ',
        description: 'FTC-Leitfaden zur Children\'s Online Privacy Protection Rule.',
      },
      {
        title: 'Google Analytics Datenschutz',
        description: 'Datenschutz- und Sicherheitsinformationen für Google Analytics-Nutzer.',
      },
    ],
  },
  whyFree: {
    openSourceBadge: 'Open-Source-Philosophie',
    title: 'Datenschutz sollte keine {highlight} sein.',
    titleHighlight: 'Luxussteuer',
    subtitle: 'Wir glauben, dass jeder Unternehmer, Kreative und Entwickler rechtlichen Schutz ohne den Preis von 5.000$ verdient. Wir haben KI genutzt, um Compliance zu demokratisieren.',
    comparison: {
      header: 'Optionen vergleichen',
      subheader: 'Ist kostenlos wirklich besser?',
      lawyer: {
        title: 'Traditionelle Kanzlei',
        price: '$500 - $5,000',
        pros: ['Volle Haftungsdeckung'],
        cons: ['Sehr langsam (Wochen)', 'Stundenabrechnung'],
      },
      template: {
        title: 'Generische Vorlagen',
        price: '$29 - $99',
        pros: ['Sofortiger Download'],
        cons: ['Generisch / Veraltet', 'Keine Anpassung'],
      },
      freeGdpr: {
        title: 'FreeGDPR',
        price: '$0.00',
        features: ['Sofortiger KI-Entwurf', 'Auf Sie zugeschnitten', 'Immer kostenlos'],
      },
    },
    professional: {
      title: 'Eine Richtlinie ist nur der erste Schritt',
      subtitle: 'Ein Dokument macht Sie auf dem Papier konform. Aber haben Sie die technische Umsetzung, um es zu unterstützen?',
      technical: {
        title: 'Technische Implementierung',
        description: 'Haben Sie Google Consent Mode v2 eingerichtet? Werden Ihre Cookies wirklich vor der Einwilligung blockiert? Den Text zu schreiben ist einfach; die Barriere zu programmieren ist schwer.',
      },
      riskAudit: {
        title: 'Risikoprüfung & Unternehmensanforderungen',
        description: 'Wenn Sie sensible Daten verarbeiten (Gesundheit, Finanzen, Kinder), reicht ein kostenloser Generator nicht aus. Sie brauchen einen menschlichen Experten, der Ihre Datenflüsse prüft.',
      },
    },
    cta: {
      title: 'Professionelle Implementierung benötigt?',
      description: 'Riskieren Sie keine Bußgelder wegen schlechter technischer Einrichtung. Beauftragen Sie das Team, das dieses Tool gebaut hat, um Ihre Cookie-Einwilligungsmanager, serverseitiges Tracking und Daten-Governance zu implementieren.',
      button: 'Tenten AI Agency kontaktieren',
      tagline: 'Die führende AI-First-Agentur in Asien',
    },
  },
  footer: { copyright: '© {year} FreeGDPR. Alle Rechte vorbehalten.', builtBy: 'Mit Liebe ❤️ erstellt von', tentenDesc: 'Die führende AI-First-Agentur in Asien', disclaimer: 'Datenschutzrichtlinien-Generator nur zu Informationszwecken bereitgestellt.' },
  cookieConsent: {
    title: 'Wir Schätzen Ihre Privatsphäre',
    description: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, den Website-Traffic zu analysieren und Inhalte zu personalisieren. Durch Klicken auf "Alle Akzeptieren" stimmen Sie unserer Cookie-Nutzung zu.',
    customize: 'Einstellungen Anpassen',
    acceptAll: 'Alle Akzeptieren',
    acceptSelected: 'Auswahl Akzeptieren',
    rejectAll: 'Alle Ablehnen',
    alwaysActive: 'Immer Aktiv',
    privacyLink: 'Unsere Datenschutzrichtlinie lesen',
    necessary: {
      title: 'Notwendige Cookies',
      description: 'Essentiell für das ordnungsgemäße Funktionieren der Website. Können nicht deaktiviert werden.',
    },
    analytics: {
      title: 'Analyse-Cookies',
      description: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren.',
    },
    marketing: {
      title: 'Marketing-Cookies',
      description: 'Werden verwendet, um personalisierte Werbung zu liefern.',
    },
    preferences: {
      title: 'Präferenz-Cookies',
      description: 'Merken sich Ihre Einstellungen und Präferenzen für ein besseres Erlebnis.',
    },
  },
};

export const pt: TranslationKeys = {
  meta: { title: 'FreeGDPR - Gerador Gratuito de Política de Privacidade com IA', description: 'Gere políticas de privacidade compatíveis com GDPR e CCPA gratuitamente usando IA.', keywords: 'gerador de política de privacidade, GDPR, CCPA, política de privacidade grátis' },
  header: { generator: 'Gerador', whyFree: 'Por que Grátis?', howItWorks: 'Como Funciona', resources: 'Recursos Legais' },
  hero: { badge: 'Tecnologia Jurídica com IA', title: 'FreeGDPR', titleHighlight: 'Gerador de Política de Privacidade', subtitle: 'Gere políticas compatíveis com CCPA, GDPR, Google Analytics e AdSense em segundos.' },
  steps: { generalInfo: 'Info Geral', dataCollection: 'Coleta de Dados', compliance: 'Conformidade', thirdParty: 'Terceiros', back: 'Voltar', nextStep: 'Próximo', generatePolicy: 'Gerar Política' },
  generalInfoForm: { title: 'Informações Gerais', subtitle: 'Vamos começar com as informações básicas do seu negócio ou projeto.', companyName: 'Nome da Empresa', companyNamePlaceholder: 'ex. Minha Empresa Ltda', websiteName: 'Nome do Site/App', websiteNamePlaceholder: 'ex. Meu App', websiteUrl: 'URL do Site', websiteUrlPlaceholder: 'https://exemplo.com', contactEmail: 'Email de Contato', contactEmailPlaceholder: 'privacidade@exemplo.com', country: 'País', policyLanguage: 'Idioma da Política', platformType: 'Tipo de Plataforma', website: 'Site', mobileApp: 'App Móvel', both: 'Site e App Móvel' },
  dataCollectionForm: { title: 'Coleta de Dados', subtitle: 'Que tipo de informação você coleta dos seus usuários?', emailAddresses: 'Endereços de Email', emailDesc: 'Para newsletters, criação de conta ou suporte.', personalNames: 'Nomes Pessoais', namesDesc: 'Nomes e sobrenomes dos usuários.', cookies: 'Cookies e Rastreamento', cookiesDesc: 'Cookies web padrão para análise ou preferências.', paymentInfo: 'Info de Pagamento', paymentDesc: 'Números de cartão, endereços de cobrança.', phoneNumbers: 'Números de Telefone', phoneDesc: 'Para notificações SMS ou contato.', physicalAddresses: 'Endereços Físicos', addressDesc: 'Endereços de envio ou cobrança.', geolocation: 'Geolocalização', locationDesc: 'Dados GPS ou rastreamento de localização preciso.', deviceData: 'Dados do Dispositivo', deviceDesc: 'Endereço IP, ID do dispositivo, tipo de navegador.' },
  complianceForm: { title: 'Conformidade Legal', subtitle: 'Selecione os regulamentos que você precisa cumprir.', gdpr: 'GDPR (Europa)', gdprDesc: 'Regulamento Geral de Proteção de Dados. Essencial para usuários da UE.', ccpa: 'CCPA (Califórnia)', ccpaDesc: 'Lei de Privacidade do Consumidor da Califórnia.', cpra: 'CPRA (Califórnia Emendada)', cpraDesc: 'Lei de Direitos de Privacidade da Califórnia.', caloppa: 'CalOPPA (Califórnia Online)', caloppaDesc: 'Lei de Proteção de Privacidade Online da Califórnia.', coppa: 'COPPA (Crianças)', coppaDesc: 'Lei de Proteção de Privacidade Online das Crianças.' },
  thirdPartyForm: { title: 'Serviços de Terceiros', subtitle: 'Quais ferramentas ou serviços externos interagem com os dados dos seus usuários?', googleAnalytics: 'Google Analytics', googleAdSense: 'Google AdSense', facebookPixel: 'Meta / Facebook Pixel', stripe: 'Pagamentos Stripe', paypal: 'PayPal', intercom: 'Intercom / Chat' },
  aiThinking: { analyzing: 'Analisando estrutura do negócio...', checking: 'Verificando requisitos GDPR e CCPA...', formulating: 'Formulando cláusulas de retenção de dados...', drafting: 'Redigindo documento legal...', poweredBy: 'Powered by IA', finalizing: 'Finalizando estrutura do documento...' },
  result: {
    savedBadge: 'Você acabou de economizar ~$500 em honorários legais!',
    title: 'Política Gerada com Sucesso',
    subtitle: 'Seu documento é juridicamente sólido e está pronto para uso. Se esta ferramenta foi útil, considere compartilhá-la.',
    shareText: 'Acabei de gerar uma política de privacidade completa de graça com FreeGDPR. Confira!',
    shareTwitter: 'Compartilhar no Twitter',
    shareLinkedin: 'Compartilhar no LinkedIn',
    documentPreview: 'Prévia do Documento',
    showHtml: 'Mostrar HTML',
    showPreview: 'Mostrar Prévia',
    copy: 'Copiar',
    copied: 'Copiado',
    whatsNext: {
      title: 'E agora?',
      steps: [
        'Copie o texto HTML ou Markdown.',
        'Crie uma nova página no seu site (ex. /privacidade).',
        'Link-a a partir do seu rodapé.',
      ],
    },
    makeAdjustments: 'Fazer Ajustes',
    badge: {
      title: 'Selo de Confiança Grátis',
      description: 'Adicione este selo ao rodapé do seu site para mostrar que você se preocupa com a privacidade dos seus usuários.',
      preview: 'Privacidade verificada pelo FreeGDPR',
    },
    disclaimer: 'Aviso: Esta política foi gerada por IA. É fornecida apenas para fins informativos e não constitui aconselhamento jurídico.',
  },
  howItWorks: {
    title: 'Como o FreeGDPR Funciona',
    subtitle: 'Gere uma política juridicamente sólida em minutos, não dias.',
    steps: [
      {
        title: '1. Insira os Detalhes',
        description: 'Preencha um questionário simples sobre seu site ou app, práticas de coleta de dados e ferramentas de terceiros.',
      },
      {
        title: '2. Geração IA',
        description: 'Nossa IA avançada analisa suas entradas e redige uma política de privacidade completa adaptada às suas necessidades.',
      },
      {
        title: '3. Revise a Conformidade',
        description: 'A política gerada inclui cláusulas para GDPR, CCPA e outros regulamentos com base na sua seleção.',
      },
      {
        title: '4. Baixe e Publique',
        description: 'Copie o markdown ou baixe o arquivo e publique-o no seu site ou aplicativo móvel.',
      },
    ],
    cta: {
      title: 'Pronto para proteger seu negócio?',
      description: 'Inicie o assistente agora e obtenha sua política de privacidade gratuita.',
    },
  },
  legalResources: {
    title: 'Recursos Legais',
    subtitle: 'Links úteis para entender os regulamentos de privacidade de dados.',
    resources: [
      {
        title: 'Texto Oficial GDPR',
        description: 'O texto oficial completo do Regulamento Geral de Proteção de Dados.',
      },
      {
        title: 'Guia CCPA (Califórnia)',
        description: 'Informações oficiais sobre a Lei de Privacidade do Consumidor da Califórnia.',
      },
      {
        title: 'FAQ COPPA',
        description: 'Guia da FTC sobre a Regra de Proteção de Privacidade Online das Crianças.',
      },
      {
        title: 'Privacidade Google Analytics',
        description: 'Informações de privacidade e segurança de dados para usuários do Google Analytics.',
      },
    ],
  },
  whyFree: {
    openSourceBadge: 'Filosofia Open Source',
    title: 'Privacidade não deveria ser um {highlight}.',
    titleHighlight: 'imposto de luxo',
    subtitle: 'Acreditamos que todo empreendedor, criador e desenvolvedor merece proteção legal sem o preço de $5.000. Usamos IA para democratizar a conformidade.',
    comparison: {
      header: 'Compare as Opções',
      subheader: 'Grátis é realmente melhor?',
      lawyer: {
        title: 'Escritório Tradicional',
        price: '$500 - $5,000',
        pros: ['Cobertura de Responsabilidade Completa'],
        cons: ['Muito Lento (Semanas)', 'Cobrança por Hora'],
      },
      template: {
        title: 'Templates Genéricos',
        price: '$29 - $99',
        pros: ['Download Instantâneo'],
        cons: ['Genérico / Desatualizado', 'Sem Personalização'],
      },
      freeGdpr: {
        title: 'FreeGDPR',
        price: '$0.00',
        features: ['Rascunho IA Instantâneo', 'Adaptado para Você', 'Sempre Grátis'],
      },
    },
    professional: {
      title: 'Uma Política é Apenas o Primeiro Passo',
      subtitle: 'Ter um documento te torna conforme no papel. Mas você tem a implementação técnica para sustentá-lo?',
      technical: {
        title: 'Implementação Técnica',
        description: 'Você configurou o Google Consent Mode v2? Seus cookies realmente são bloqueados antes do consentimento? Escrever o texto é fácil; codificar a barreira é difícil.',
      },
      riskAudit: {
        title: 'Auditoria de Riscos e Necessidades Empresariais',
        description: 'Se você lida com dados sensíveis (Saúde, Finanças, Crianças), um gerador gratuito não é suficiente. Você precisa de um especialista humano para auditar seus fluxos de dados.',
      },
    },
    cta: {
      title: 'Precisa de Implementação Profissional?',
      description: 'Não arrisque multas por má configuração técnica. Contrate a equipe que construiu esta ferramenta para implementar seus Gerenciadores de Consentimento de Cookies, rastreamento server-side e Governança de Dados.',
      button: 'Contatar Tenten AI Agency',
      tagline: 'A Agência AI-First Líder na Ásia',
    },
  },
  footer: { copyright: '© {year} FreeGDPR. Todos os direitos reservados.', builtBy: 'Construído com Amor ❤️ por', tentenDesc: 'A Agência AI-First Líder na Ásia', disclaimer: 'Gerador de política de privacidade fornecido apenas para fins informativos.' },
  cookieConsent: {
    title: 'Valorizamos Sua Privacidade',
    description: 'Usamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Ao clicar em "Aceitar Tudo", você consente com o uso de cookies.',
    customize: 'Personalizar Preferências',
    acceptAll: 'Aceitar Tudo',
    acceptSelected: 'Aceitar Selecionados',
    rejectAll: 'Rejeitar Tudo',
    alwaysActive: 'Sempre Ativo',
    privacyLink: 'Leia nossa Política de Privacidade',
    necessary: {
      title: 'Cookies Necessários',
      description: 'Essenciais para o funcionamento adequado do site. Não podem ser desativados.',
    },
    analytics: {
      title: 'Cookies de Análise',
      description: 'Nos ajudam a entender como os visitantes interagem com nosso site.',
    },
    marketing: {
      title: 'Cookies de Marketing',
      description: 'Usados para fornecer anúncios personalizados.',
    },
    preferences: {
      title: 'Cookies de Preferências',
      description: 'Lembram suas configurações e preferências para uma experiência melhor.',
    },
  },
};

export const ru: TranslationKeys = {
  meta: { title: 'FreeGDPR - Бесплатный ИИ-генератор политики конфиденциальности', description: 'Создавайте политики конфиденциальности, соответствующие GDPR и CCPA, бесплатно с помощью ИИ.', keywords: 'генератор политики конфиденциальности, GDPR, CCPA, бесплатная политика конфиденциальности' },
  header: { generator: 'Генератор', whyFree: 'Почему бесплатно?', howItWorks: 'Как это работает', resources: 'Юридические ресурсы' },
  hero: { badge: 'Юридические технологии на базе ИИ', title: 'FreeGDPR', titleHighlight: 'Генератор политики конфиденциальности', subtitle: 'Создавайте политики, соответствующие CCPA, GDPR, Google Analytics и AdSense, за секунды.' },
  steps: { generalInfo: 'Общая информация', dataCollection: 'Сбор данных', compliance: 'Соответствие', thirdParty: 'Третьи стороны', back: 'Назад', nextStep: 'Далее', generatePolicy: 'Создать политику' },
  generalInfoForm: { title: 'Общая информация', subtitle: 'Начнем с основных сведений о вашем бизнесе или проекте.', companyName: 'Название компании', companyNamePlaceholder: 'напр. ООО Моя Компания', websiteName: 'Название сайта/приложения', websiteNamePlaceholder: 'напр. Мое приложение', websiteUrl: 'URL сайта', websiteUrlPlaceholder: 'https://example.com', contactEmail: 'Контактный email', contactEmailPlaceholder: 'privacy@example.com', country: 'Страна', policyLanguage: 'Язык политики', platformType: 'Тип платформы', website: 'Веб-сайт', mobileApp: 'Мобильное приложение', both: 'Сайт и приложение' },
  dataCollectionForm: { title: 'Сбор данных', subtitle: 'Какую информацию вы собираете от пользователей?', emailAddresses: 'Email-адреса', emailDesc: 'Для рассылок, создания аккаунтов или поддержки.', personalNames: 'Личные имена', namesDesc: 'Имена и фамилии пользователей.', cookies: 'Cookies и отслеживание', cookiesDesc: 'Стандартные веб-cookies для аналитики или настроек.', paymentInfo: 'Платежная информация', paymentDesc: 'Номера карт, адреса выставления счетов.', phoneNumbers: 'Номера телефонов', phoneDesc: 'Для SMS-уведомлений или связи.', physicalAddresses: 'Физические адреса', addressDesc: 'Адреса доставки или выставления счетов.', geolocation: 'Геолокация', locationDesc: 'GPS-данные или точное отслеживание местоположения.', deviceData: 'Данные устройства', deviceDesc: 'IP-адрес, ID устройства, тип браузера.' },
  complianceForm: { title: 'Юридическое соответствие', subtitle: 'Выберите нормативы, которым вы должны соответствовать.', gdpr: 'GDPR (Европа)', gdprDesc: 'Общий регламент защиты данных. Обязателен для пользователей из ЕС.', ccpa: 'CCPA (Калифорния)', ccpaDesc: 'Закон о защите конфиденциальности потребителей Калифорнии.', cpra: 'CPRA (Калифорния дополн.)', cpraDesc: 'Закон о правах на конфиденциальность Калифорнии.', caloppa: 'CalOPPA (Калифорния онлайн)', caloppaDesc: 'Закон о защите конфиденциальности в интернете Калифорнии.', coppa: 'COPPA (Дети)', coppaDesc: 'Закон о защите конфиденциальности детей в интернете.' },
  thirdPartyForm: { title: 'Сторонние сервисы', subtitle: 'Какие внешние инструменты или сервисы взаимодействуют с данными ваших пользователей?', googleAnalytics: 'Google Analytics', googleAdSense: 'Google AdSense', facebookPixel: 'Meta / Facebook Pixel', stripe: 'Платежи Stripe', paypal: 'PayPal', intercom: 'Intercom / Чат' },
  aiThinking: { analyzing: 'Анализ структуры бизнеса...', checking: 'Проверка требований GDPR и CCPA...', formulating: 'Формулирование условий хранения данных...', drafting: 'Составление юридического документа...', poweredBy: 'На базе ИИ', finalizing: 'Завершение структуры документа...' },
  result: {
    savedBadge: 'Вы только что сэкономили ~$500 на юридических услугах!',
    title: 'Политика успешно создана',
    subtitle: 'Ваш документ юридически надежен и готов к использованию. Если этот инструмент был полезен, поделитесь им.',
    shareText: 'Я только что создал полную политику конфиденциальности бесплатно с FreeGDPR. Посмотрите!',
    shareTwitter: 'Поделиться в Twitter',
    shareLinkedin: 'Поделиться в LinkedIn',
    documentPreview: 'Предпросмотр документа',
    showHtml: 'Показать HTML',
    showPreview: 'Показать предпросмотр',
    copy: 'Копировать',
    copied: 'Скопировано',
    whatsNext: {
      title: 'Что дальше?',
      steps: [
        'Скопируйте текст HTML или Markdown.',
        'Создайте новую страницу на сайте (напр. /privacy).',
        'Добавьте ссылку в футер.',
      ],
    },
    makeAdjustments: 'Внести изменения',
    badge: {
      title: 'Бесплатный знак доверия',
      description: 'Добавьте этот знак в футер вашего сайта, чтобы показать, что вы заботитесь о конфиденциальности пользователей.',
      preview: 'Конфиденциальность подтверждена FreeGDPR',
    },
    disclaimer: 'Отказ от ответственности: Эта политика создана ИИ. Она предоставлена только в информационных целях и не является юридической консультацией.',
  },
  howItWorks: {
    title: 'Как работает FreeGDPR',
    subtitle: 'Создайте юридически надежную политику за минуты, а не дни.',
    steps: [
      {
        title: '1. Введите данные',
        description: 'Заполните простую анкету о вашем сайте или приложении, практиках сбора данных и сторонних инструментах.',
      },
      {
        title: '2. ИИ-генерация',
        description: 'Наш продвинутый ИИ анализирует ваши данные и составляет полную политику конфиденциальности, адаптированную к вашим потребностям.',
      },
      {
        title: '3. Проверка соответствия',
        description: 'Созданная политика включает условия для GDPR, CCPA и других нормативов на основе вашего выбора.',
      },
      {
        title: '4. Скачайте и опубликуйте',
        description: 'Скопируйте markdown или скачайте файл и опубликуйте его на своем сайте или мобильном приложении.',
      },
    ],
    cta: {
      title: 'Готовы защитить свой бизнес?',
      description: 'Начните мастер сейчас и получите бесплатную политику конфиденциальности.',
    },
  },
  legalResources: {
    title: 'Юридические ресурсы',
    subtitle: 'Полезные ссылки для понимания правил защиты данных.',
    resources: [
      {
        title: 'Официальный текст GDPR',
        description: 'Полный официальный текст Общего регламента защиты данных.',
      },
      {
        title: 'Руководство CCPA (Калифорния)',
        description: 'Официальная информация о Законе о защите конфиденциальности потребителей Калифорнии.',
      },
      {
        title: 'FAQ COPPA',
        description: 'Руководство FTC по Правилу защиты конфиденциальности детей в интернете.',
      },
      {
        title: 'Конфиденциальность Google Analytics',
        description: 'Информация о конфиденциальности и безопасности данных для пользователей Google Analytics.',
      },
    ],
  },
  whyFree: {
    openSourceBadge: 'Философия открытого кода',
    title: 'Конфиденциальность не должна быть {highlight}.',
    titleHighlight: 'налогом на роскошь',
    subtitle: 'Мы верим, что каждый предприниматель, создатель и разработчик заслуживает юридической защиты без ценника в $5000. Мы использовали ИИ для демократизации соответствия.',
    comparison: {
      header: 'Сравните варианты',
      subheader: 'Бесплатно действительно лучше?',
      lawyer: {
        title: 'Традиционная юрфирма',
        price: '$500 - $5,000',
        pros: ['Полное покрытие ответственности'],
        cons: ['Очень медленно (недели)', 'Почасовая оплата'],
      },
      template: {
        title: 'Общие шаблоны',
        price: '$29 - $99',
        pros: ['Мгновенная загрузка'],
        cons: ['Общий / Устаревший', 'Без настройки'],
      },
      freeGdpr: {
        title: 'FreeGDPR',
        price: '$0.00',
        features: ['Мгновенный ИИ-черновик', 'Подобран для вас', 'Всегда бесплатно'],
      },
    },
    professional: {
      title: 'Политика — это только первый шаг',
      subtitle: 'Документ делает вас соответствующим на бумаге. Но есть ли у вас техническая реализация для его поддержки?',
      technical: {
        title: 'Техническая реализация',
        description: 'Настроен ли у вас Google Consent Mode v2? Действительно ли ваши cookies блокируются до получения согласия? Написать текст легко; закодировать барьер сложно.',
      },
      riskAudit: {
        title: 'Аудит рисков и корпоративные потребности',
        description: 'Если вы обрабатываете конфиденциальные данные (Здоровье, Финансы, Дети), бесплатного генератора недостаточно. Вам нужен человек-эксперт для аудита ваших потоков данных.',
      },
    },
    cta: {
      title: 'Нужна профессиональная реализация?',
      description: 'Не рискуйте штрафами из-за плохой технической настройки. Наймите команду, которая создала этот инструмент, для внедрения ваших Менеджеров согласия на cookies, серверного отслеживания и Управления данными.',
      button: 'Связаться с Tenten AI Agency',
      tagline: 'Ведущее AI-First агентство в Азии',
    },
  },
  footer: { copyright: '© {year} FreeGDPR. Все права защищены.', builtBy: 'Создано с любовью ❤️', tentenDesc: 'Ведущее AI-First агентство в Азии', disclaimer: 'Генератор политики конфиденциальности предоставлен только в информационных целях.' },
  cookieConsent: {
    title: 'Мы Ценим Вашу Конфиденциальность',
    description: 'Мы используем cookies для улучшения вашего опыта просмотра, анализа трафика сайта и персонализации контента. Нажимая "Принять все", вы соглашаетесь на использование cookies.',
    customize: 'Настроить Предпочтения',
    acceptAll: 'Принять Все',
    acceptSelected: 'Принять Выбранные',
    rejectAll: 'Отклонить Все',
    alwaysActive: 'Всегда Активны',
    privacyLink: 'Читать нашу Политику Конфиденциальности',
    necessary: {
      title: 'Необходимые Cookies',
      description: 'Необходимы для правильной работы сайта. Не могут быть отключены.',
    },
    analytics: {
      title: 'Аналитические Cookies',
      description: 'Помогают нам понять, как посетители взаимодействуют с нашим сайтом.',
    },
    marketing: {
      title: 'Маркетинговые Cookies',
      description: 'Используются для показа персонализированной рекламы.',
    },
    preferences: {
      title: 'Cookies Предпочтений',
      description: 'Запоминают ваши настройки и предпочтения для лучшего опыта.',
    },
  },
};
