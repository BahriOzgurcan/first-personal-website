import pizzaimg from "../assets/pizza.png";
import movieSelection from "../assets/movieSelector.png";
import movie from "../assets/films.png";

export const paragraphs = {
  en: {
    switchPanel: {
      darkMode: "Dark Mode",
      lightMode: "Light Mode",
      turkish: "Türkçe'ye Geç",
    },
    header: {
      skills: "Skills",
      projects: "Projects",
      hire: "Hire me",
    },
    hero: {
      header: "Creative thinker Minimalism lover",
      detail:
        "Hi, I’m Bahri Özgürcan. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      link_1: "Hire me",
      link_2: "Github",
      link_3: "Linkedin",
    },
    skills: {
      header: "Skills",
      skills: [{
        title: "Javascript",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "React.Js",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Node.Js",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },]
    },
    profile: {
      header: "Profile",
      secondHeader_1: "Profile",
      secondHeader_2: "About Me",
      profileDetails: [
        {
          title: "Birth",
          detail: "24.09.1993",
        },
        {
          title: "Living in",
          detail: "Istanbul",
        },
        {
          title: "Education",
          detail: "METU, Architecture, 2016",
        },
        {
          title: "Job Preferences",
          detail: "Frontend Dev, Full-Stack",
        },
      ],
      aboutDetail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projects: {
      header: "Projects",
      projectDetails: [
        {
          title: "Pizza Store",
          detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          techs: ["react", "redux", "axios"],
          img_url: pizzaimg,
          button: "Canlı Versiyon",
          links: ["https://github.com/BahriOzgurcan/fsweb-s7-challenge-pizza", "https://www.twitter.com"],
        },
        {
            title: "Favourite Movie Selection Project",
            detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            techs: ["react", "redux", "axios"],
            img_url: movie,
            button: "Canlı Versiyon",
            links: ["https://github.com/BahriOzgurcan/fsweb-s10g3-redux-watchlist", ""],
          },
        {
            title: "Movie Selection Project",
            detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            techs: ["react", "redux", "axios"],
            img_url: movieSelection,
            button: "Canlı Versiyon",
            links: ["https://github.com/BahriOzgurcan/fsweb-s11g1-shopping-cart",""],
          },
      ],
    },
    footer: {
        text: "Let's work together on your next product...",
        email: "aksoyozgurcan@gmail.com",
        links:[
            {
                text: "Personal Blog",
                url: "",
            },
            {
                text: "Github",
                url: "",
            },
            {
                text: "Linkedin",
                url: "",
            },
        ]
    },
  },
  tr: {
    switchPanel: {
      darkMode: "Karınlık Mod",
      lightMode: "Aydınlık Mod",
      turkish: "English Version",
    },
    header: {
      skills: "Yetenekler",
      projects: "Projeler",
      hire: "İletişime Geç",
    },
    hero: {
      header: "Yaratıcı Düşünce Minimalist Düzen",
      detail:
        "Merhaba, ben Bahri Özgürcan Aksoy. Full-stack yazılımcı olmak için çalışıyorum. Eğer öğrenmeye hevesli, yeni meydan okumalara açık, yaratıcı birisini arıyorsanız, benimle iletişime geçebilirsiniz.",
      link_1: "İletişime Geç",
      link_2: "Github",
      link_3: "Linkedin",
    },
    skills: {
      header: "Yetenekler",
      skills: [{
        title: "Javascript",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "React.Js",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        title: "Node.Js",
        detail:
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },]
    },
    profile: {
      header: "Profil",
      secondHeader_1: "Profil",
      secondHeader_2: "Hakkımda",
      profileDetails: [
        {
          title: "Doğum Yılı",
          detail: "24.09.1993",
        },
        {
          title: "Yaşadığı Şehir",
          detail: "İstanbul",
        },
        {
          title: "Eğitim",
          detail: "ODTÜ, Mimarlık, 2016",
        },
        {
          title: "İş Tercihleri",
          detail: "Frontend Dev, Full-Stack",
        },
      ],
      aboutDetail:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    },
    projects: {
      header: "Projeler",
      projectDetails: [
        {
          title: "Workintech",
          detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          techs: ["react", "redux", "axios"],
          img_url: "www.ww.com",
          button: "Canlı Versiyon",
          links: [],
        },
        {
            title: "Random Jokes",
            detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            techs: ["react", "redux", "axios"],
            img_url: "www.ww.com",
            button: "Canlı Versiyon",
            links: [],
          },
        {
            title: "Journey",
            detail: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
            techs: ["react", "redux", "axios"],
            img_url: "www.ww.com",
            button: "Canlı Versiyon",
            links: [],
          },
      ],
    },
    footer: {
        text: "Bir sonraki projeni beraber yapmaya ne dersin?",
        email: "aksoyozgurcan@gmail.com",
        links:[
            {
                text: "İnstagram",
                url: "https://www.instagram.com/bahriozgurcan/",
            },
            {
                text: "Github",
                url: "https://github.com/BahriOzgurcan",
            },
            {
                text: "Linkedin",
                url: "https://www.linkedin.com/in/bahri%C3%B6zg%C3%BCrcanaksoy/",
            },
        ]
    },
  },
};
