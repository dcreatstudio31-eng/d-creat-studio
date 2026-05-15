// Admin Configuration - Stores all your website content
const adminConfig = {
  // Business Info
  business: {
    name: "D'CREAT",
    tagline: "Architecte d'Intérieur",
    email: "d.creatstudio31@gmail.com",
    phone: "0758157116",
    location: "Toulouse, France",
    description: "Bienvenue chez D'CREAT, votre partenaire de confiance pour tous vos projets de rénovation intérieure à Toulouse."
  },

  // Theme Colors
  theme: {
    primary: "#8B6F47",
    secondary: "#2C3E50",
    accent: "#E8D5C4",
    textDark: "#333",
    textLight: "#666"
  },

  // Services
  services: [
    {
      id: 1,
      title: "Rénovation Complète",
      icon: "fa-home",
      description: "De la conception à la réalisation, nous gérons l'intégralité de votre projet de rénovation avec professionnalisme et expertise."
    },
    {
      id: 2,
      title: "Gestion de Projet",
      icon: "fa-project-diagram",
      description: "Coordination complète des artisans, respect des budgets et des délais pour un projet sans stress."
    },
    {
      id: 3,
      title: "Visualisations 3D",
      icon: "fa-cube",
      description: "Découvrez votre espace rénové avant le début des travaux grâce à nos visualisations 3D détaillées."
    },
    {
      id: 4,
      title: "Design d'Intérieur",
      icon: "fa-palette",
      description: "Création de concepts esthétiques personnalisés qui correspondent à votre style et vos besoins."
    }
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 1,
      title: "Projet 1",
      category: "Rénovation Complète",
      description: "Description de votre projet...",
      image: "images/project1.jpg"
    },
    {
      id: 2,
      title: "Projet 2",
      category: "Design d'Intérieur",
      description: "Description de votre projet...",
      image: "images/project2.jpg"
    },
    {
      id: 3,
      title: "Projet 3",
      category: "Rénovation Cuisine",
      description: "Description de votre projet...",
      image: "images/project3.jpg"
    },
    {
      id: 4,
      title: "Projet 4",
      category: "Salle de Bain",
      description: "Description de votre projet...",
      image: "images/project4.jpg"
    },
    {
      id: 5,
      title: "Projet 5",
      category: "Rénovation Salon",
      description: "Description de votre projet...",
      image: "images/project5.jpg"
    },
    {
      id: 6,
      title: "Projet 6",
      category: "Chambre",
      description: "Description de votre projet...",
      image: "images/project6.jpg"
    }
  ],

  // About Section
  about: {
    title: "À Propos de D'CREAT",
    description: "Avec une expertise complète en architecture d'intérieur, je vous propose une approche personnalisée et professionnelle pour transformer votre espace, du concept initial à la réalisation finale.",
    benefits: [
      "Gestion complète de projet de A à Z",
      "Respect du budget et des délais",
      "Visualisations 3D avant le début des travaux",
      "Coordination professionnelle des artisans",
      "Suivi qualité rigoureux"
    ]
  },

  // Contact Form Settings
  contact: {
    successMessage: "Merci pour votre message! Nous vous recontacterons bientôt.",
    errorMessage: "Une erreur s'est produite. Veuillez réessayer."
  }
};

// Save configuration to localStorage
function saveConfig() {
  localStorage.setItem('dcreatConfig', JSON.stringify(adminConfig));
}

// Load configuration from localStorage
function loadConfig() {
  const saved = localStorage.getItem('dcreatConfig');
  if (saved) {
    return JSON.parse(saved);
  }
  return adminConfig;
}

// Initialize
saveConfig();
