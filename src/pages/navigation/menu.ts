/**
    Simple menu :
    {
        style: "simple",
        content: {
        title: "Your title",
        nav: "href navigation",
        },
    },

    Hard menu :
    {
        style: "hard",
        content: {
            maintTitle: "Main title",
            navigation: [
                {
                title: "Title",
                description: "Add or not a little description",
                nav: "href navigation",
                },
                {
                ...
                },
            ],
        },
    },    

 */

export const menu = [
  {
    style: "simple",
    content: {
      title: "Accueil",
      nav: "/",
    },
  },
  {
    style: "hard",
    content: {
      maintTitle: "Services",
      navigation: [
        {
          title: "Site monopage",
          description: "Création de site vitrine monopage",
          nav: "/monopage",
        },
        {
          title: "Site e-commerce",
          description: "Création de site e-commerce sur mesure",
          nav: "/ecommerce",
        },
      ],
    },
  },
  {
    style: "hard",
    content: {
      maintTitle: "Contact",
      navigation: [
        {
          title: "L'entreprise",
          description: "",
          nav: "/lentreprise",
        },
        {
          title: "Devis",
          description: "",
          nav: "/devis",
        },
        {
          title: "Contact",
          description: "",
          nav: "/contact",
        },
      ],
    },
  },
];

export const alignNavbar = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
};
