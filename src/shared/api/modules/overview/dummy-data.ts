import { IOutingCard, IOverviewModule } from "./overview";
import ROOMS from "@assets/icons/rooms.svg";
import { IOverviewFilterCategoryItem } from "@app/api/modules/overview";

/* tslint:disable */
export const GenerateDummyFilterOverview = (): IOverviewFilterCategoryItem[] => [
  {
    title: "Spel & Ontspanning",
    checkboxes: [
      {
        label: "Citygames",
        id: 1,
        count: 30,
        name: "citygames"
      },
      {
        label: "Beachgames",
        id: 2,
        count: 30,
        name: "Beachgames"
      },
      {
        label: "Indoor Spel en Ontspanning",
        id: 3,
        count: 30,
        name: "IndoorSpelenOntspanning"
      },
      {
        label: "Outdoor Spel en Ontspanning",
        id: 4,
        count: 30,
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
        count: 30,
        name: "Funopwielen"
      },
      {
        label: "Outdoor Lucht",
        id: 6,
        count: 30,
        name: "Outdoor Lucht"
      },
      {
        label: "Outdoor Water",
        id: 7,
        count: 30,
        name: "outdoorwater"
      },
      {
        label: "Indoor Sport en Actie",
        id: 8,
        count: 30,
        name: "indorsportenactie"
      },

      {
        label: "Outdoor Sport en Actie",
        id: 26,
        name: "outdorsportenactie"
      }
    ]
  },

  {
    title: "Creatieve Uitjes",
    checkboxes: [
      {
        label: "Creatief",
        id: 9,
        count: 30,
        name: "creatief"
      },
      {
        label: "Theater",
        id: 10,
        count: 30,
        name: "theater"
      },
      {
        label: "Muziek en Dans",
        id: 11,
        count: 30,
        name: "muziekenDans"
      }
    ]
  },
  {
    title: "Workshops",
    checkboxes: [
      {
        label: "Kookworkshops",
        id: 12,
        count: 30,
        name: "kookworkshops"
      },
      {
        label: "Kunst en Cultuur",
        id: 13,
        count: 30,
        name: "kunstencultuur"
      },
      {
        label: "Body en Spirit",
        id: 14,
        count: 30,
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
        count: 30,
        name: "etenendrinken"
      },
      {
        label: "Themafeesten",
        id: 16,
        count: 30,
        name: "Themafeesten"
      },
      {
        label: "Totaalprogramma",
        id: 17,
        count: 30,
        name: "totaalprogramma"
      },
      {
        label: "Attracties en Entertainment",
        id: 18,
        count: 30,
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
        count: 30,
        name: "Teamtraining"
      },
      {
        label: "Teambuilding",
        id: 20,
        count: 30,
        name: "Teambuilding"
      },
      {
        label: "Uit Vergaderen",
        id: 21,
        count: 30,
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
        count: 30,
        name: "wintersport"
      },
      {
        label: "Stedentrips",
        id: 23,
        count: 30,
        name: "stedentrips"
      },
      {
        label: "Adventure & Outdoor",
        id: 24,
        count: 30,
        name: "adventureeoutdoor"
      },
      {
        label: "Reizen Buitenland",
        id: 25,
        count: 30,
        name: "reizenbuitenland"
      }
    ]
  }
];

const DummyOutingCards: IOutingCard[] = [
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/420/600/400",
      "https://picsum.photos/id/421/600/400",
      "https://picsum.photos/id/418/600/400",
      "https://picsum.photos/id/360/600/400"
    ],
    button: {
      title: "Lees meer",
      url: "/single-wmdb"
    },
    categoriesId: [1],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "The Hangover",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/115/300/200",
      "https://picsum.photos/id/116/300/200",
      "https://picsum.photos/id/117/300/200",
      "https://picsum.photos/id/118/300/200"
    ],
    button: {
      title: "Lees meer",
      url: "/single-wmdb"
    },
    categoriesId: [2],
    dataIcon: ROOMS,
    minimumPersons: 20,
    maximumPersons: 100,
    content:
      "TB Events: Met een flinke kater: verloren spullen, lippenstift op vreemde plaatsen, blauwe plekken... Net als  zelf real time..."
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
      url: "/single-wmdb"
    },
    categoriesId: [1],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/220/300/200",
      "https://picsum.photos/id/229/300/200",
      "https://picsum.photos/id/208/300/200",
      "https://picsum.photos/id/228/300/200"
    ],
    button: {
      title: "Lees meer",
      url: "/single-wmdb"
    },
    categoriesId: [2],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/320/300/200",
      "https://picsum.photos/id/310/300/200",
      "https://picsum.photos/id/311/300/200",
      "https://picsum.photos/id/312/300/200"
    ],
    button: {
      title: "Lees meer",
      url: "/single-wmdb"
    },
    categoriesId: [1, 14, 17],
    dataIcon: ROOMS,
    minimumPersons: 40,
    maximumPersons: 100,
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
      url: "/single-wmdb"
    },
    categoriesId: [1, 5, 18, 19, 20, 11],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
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
      url: "/single-wmdb"
    },
    categoriesId: [1, 4, 22, 10, 2],
    dataIcon: ROOMS,
    minimumPersons: 5,
    maximumPersons: 20,
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
      url: "/single-wmdb"
    },
    categoriesId: [5, 3, 20, 7],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 200,
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
      url: "/single-wmdb"
    },
    categoriesId: [7, 24],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
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
      url: "/single-wmdb"
    },
    categoriesId: [8],
    dataIcon: ROOMS,
    minimumPersons: 100,
    maximumPersons: 150,
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
      url: "/single-wmdb"
    },
    categoriesId: [10],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
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
      url: "/single-wmdb"
    },
    categoriesId: [11],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 100,
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
      url: "/single-wmdb"
    },
    categoriesId: [13, 25],
    dataIcon: ROOMS,
    minimumPersons: 1,
    maximumPersons: 30,
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
      url: "/single-wmdb"
    },
    categoriesId: [7, 6],
    dataIcon: ROOMS,
    minimumPersons: 1,
    maximumPersons: 10,
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
      url: "/single-wmdb"
    },
    categoriesId: [3, 4],
    dataIcon: ROOMS,
    minimumPersons: 10,
    maximumPersons: 40,
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
      url: "/single-wmdb"
    },
    categoriesId: [4, 9, 23],
    dataIcon: ROOMS,
    minimumPersons: 5,
    maximumPersons: 20,
    content:
      "Amsterdamse Uitjes: Speel het bekende spel ‘Escape Room’ nu als uniek stadsspel: Escape City. De sport van het aangaan van uitdagingen en opdrachten, het oplossen van raadsels en het ontcijferen van codes…"
  },
  {
    title: "Escape City - Het ontsnappingsspel van Mokum",
    subtitle: "Citygames in Amsterdam",
    image: [
      "https://picsum.photos/id/74/300/200",
      "https://picsum.photos/id/75/300/200",
      "https://picsum.photos/id/76/300/200",
      "https://picsum.photos/id/77/300/200"
    ],
    button: {
      title: "Lees meer",
      url: "/single-wmdb"
    },
    categoriesId: [4, 9, 23],
    dataIcon: ROOMS,
    minimumPersons: 15,
    maximumPersons: 35,
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

  toReturn = toReturn.map(item => {
    const newItem = { ...item };
    newItem.title += ` #${count}`;
    count += 1;

    return newItem;
  });

  toReturn = toReturn.slice(0, amount);
  toReturn[toReturn.length - 1].title += "x";
  toReturn[toReturn.length - 1].content += "KEYWORD";

  return toReturn;
};

export const generateDummyOverviewModule = (): IOverviewModule => ({ filter: GenerateDummyFilterOverview() });
