import PlaceholderImage from "@assets/img01.png";
import PlaceholderImage1 from "@assets/img02.png";
import { IOutingCard } from "./overview";
import ROOMS from "@assets/icons/rooms.svg";
import { IOverviewFilterCategoryItem } from "@app/api/modules/overview";

export const GenerateDummyFilterOverview = (): IOverviewFilterCategoryItem[] => [
  {
    title: "Spen & Ontspanning",
    checkboxes: [
      {
        label: "Citygames",
        id: 1,
        name: "citygames"
      },
      {
        label: "Beachgames",
        id: 2,
        name: "Beachgames"
      },
      {
        label: "Indoor Spel en Ontspanning",
        id: 3,
        name: "IndoorSpelenOntspanning"
      },
      {
        label: "Outdoor Spel en Ontspanning",
        id: 4,
        name: "Outdoor Spel en Ontspanning"
      }
    ]
  },

  {
    title: "Sportief & Actie(f)",
    checkboxes: [
      {
        label: "Fun op Wielen",
        id: 5,
        name: "Funopwielen"
      },
      {
        label: "Outdoor Lucht",
        id: 6,
        name: "Outdoor Lucht"
      },
      {
        label: "Outdoor Water",
        id: 7,
        name: "outdoorwater"
      },
      {
        label: "Indoor Sport en Actie",
        id: 8,
        name: "indorsportenactie"
      }
    ]
  },

  {
    title: "Creatieve Uitjes",
    checkboxes: [
      {
        label: "Creatief",
        id: 9,
        name: "creatief"
      },
      {
        label: "Theater",
        id: 10,
        name: "theater"
      },
      {
        label: "Muziek en Daans",
        id: 11,
        name: "muziekendaans"
      }
    ]
  },
  {
    title: "Workshops",
    checkboxes: [
      {
        label: "Kookworkshops",
        id: 12,
        name: "kookworkshops"
      },
      {
        label: "Kunst en Cultuur",
        id: 13,
        name: "kunstencultuur"
      },
      {
        label: "Body en Spirit",
        id: 14,
        name: "bodyenspirit"
      }
    ]
  },
  {
    title: "Eten, Drinken & Feesten",
    checkboxes: [
      {
        label: "Eten en drinken",
        id: 15,
        name: "etenendrinken"
      },
      {
        label: "Themafeesten",
        id: 16,
        name: "Themafeesten"
      },
      {
        label: "Totaalprogramma",
        id: 17,
        name: "totaalprogramma"
      },
      {
        label: "Attracties en Entertainment",
        id: 18,
        name: "Attractiesenentertainment"
      }
    ]
  },
  {
    title: "Teambuilden",
    checkboxes: [
      {
        label: "Teamtraining",
        id: 19,
        name: "Teamtraining"
      },
      {
        label: "Teambuilding",
        id: 20,
        name: "Teambuilding"
      },
      {
        label: "Uit Vergaderen",
        id: 21,
        name: "Uit Vergaderen"
      }
    ]
  },
  {
    title: "Incentives",
    checkboxes: [
      {
        label: "Wintersport",
        id: 22,
        name: "wintersport"
      },
      {
        label: "Stedentrips",
        id: 23,
        name: "stedentrips"
      },
      {
        label: "Adventure & Outdoor",
        id: 24,
        name: "adventureeoutdoor"
      },
      {
        label: "Reizen Buitenland",
        id: 25,
        name: "reizenbuitenland"
      }
    ]
  }
];

const DummyOutingCards: IOutingCard[] = [
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "The Hangover",
    subtitle: "Citygames in Amsterdam",
    image: [PlaceholderImage, PlaceholderImage1, PlaceholderImage, PlaceholderImage1],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1],
    data: {
      icon: ROOMS,
      label: "10 - 200 personen"
    },
    content:
      "TB Events: Met een flinke kater: verloren spullen, lippenstift op vreemde plaatsen, blauwe plekken... Net als de vier hoofdrol-spelers in de briljante speelfilm ‘The Hangover’. TB Events biedt je de mogelijkheid om The Hangover nu zelf real time..."
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/1/300/200",
      "https://picsum.photos/id/2/300/200",
      "https://picsum.photos/id/3/300/200",
      "https://picsum.photos/id/4/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/5/300/200",
      "https://picsum.photos/id/6/300/200",
      "https://picsum.photos/id/7/300/200",
      "https://picsum.photos/id/8/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [2],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/9/300/200",
      "https://picsum.photos/id/10/300/200",
      "https://picsum.photos/id/11/300/200",
      "https://picsum.photos/id/12/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1, 14, 17],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/13/300/200",
      "https://picsum.photos/id/14/300/200",
      "https://picsum.photos/id/15/300/200",
      "https://picsum.photos/id/16/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1, 5, 18, 19, 20, 11],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/17/300/200",
      "https://picsum.photos/id/18/300/200",
      "https://picsum.photos/id/19/300/200",
      "https://picsum.photos/id/20/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [1, 4, 22, 10, 2],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/21/300/200",
      "https://picsum.photos/id/22/300/200",
      "https://picsum.photos/id/23/300/200",
      "https://picsum.photos/id/24/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [5, 3, 20, 7],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/25/300/200",
      "https://picsum.photos/id/26/300/200",
      "https://picsum.photos/id/27/300/200",
      "https://picsum.photos/id/28/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [7, 24],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/30/300/200",
      "https://picsum.photos/id/31/300/200",
      "https://picsum.photos/id/32/300/200",
      "https://picsum.photos/id/33/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [8],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/34/300/200",
      "https://picsum.photos/id/35/300/200",
      "https://picsum.photos/id/36/300/200",
      "https://picsum.photos/id/37/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [10],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/38/300/200",
      "https://picsum.photos/id/39/300/200",
      "https://picsum.photos/id/40/300/200",
      "https://picsum.photos/id/41/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [11],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/42/300/200",
      "https://picsum.photos/id/43/300/200",
      "https://picsum.photos/id/44/300/200",
      "https://picsum.photos/id/45/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [13, 25],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/46/300/200",
      "https://picsum.photos/id/47/300/200",
      "https://picsum.photos/id/48/300/200",
      "https://picsum.photos/id/49/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [7, 6],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/50/300/200",
      "https://picsum.photos/id/51/300/200",
      "https://picsum.photos/id/52/300/200",
      "https://picsum.photos/id/53/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [3, 4],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/54/300/200",
      "https://picsum.photos/id/55/300/200",
      "https://picsum.photos/id/56/300/200",
      "https://picsum.photos/id/57/300/200"
    ],
    button: {
      title: "Lees meer",
      href: "#"
    },
    categoriesId: [4, 9, 23],
    data: {
      icon: ROOMS,
      label: "10 - 1000 personen"
    },
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  }
];

export const getCardsAmount = (amount: number): IOutingCard[] => {
  const cards = DummyOutingCards;
  let toReturn: IOutingCard[] = [];
  while (toReturn.length <= amount) {
    toReturn = toReturn.concat(...cards);
  }

  let count = 1;
  const newArray: IOutingCard[] = [];

  toReturn = toReturn.map(item => {
    const newItem = { ...item };
    newItem.title += ` #${count}`;
    count += 1;

    return newItem;
  });

  toReturn = toReturn.slice(0, amount);
  toReturn[toReturn.length-1].title += "x";

  return toReturn;
};
