import { reactive } from 'vue'

export const languageStore = reactive({
  current: 'en'
})

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'rw', label: 'Kinyarwanda' },
  { code: 'sw', label: 'Kiswahili' }
]

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      photos: 'Photos',
      videos: 'Videos',
      destinations: 'Destinations',
      north: 'Northern Province',
      south: 'Southern Province',
      east: 'Eastern Province',
      west: 'Western Province',
      kigali: 'Kigali City',
      contact: 'Contact',
      language: 'Language',
      english: 'English',
      french: 'Français',
      kinyarwanda: 'Kinyarwanda',
      kiswahili: 'Kiswahili'
    },
    home: {
      heroSmall: 'Explore Rwanda',
      heroTitle: 'Discover Rwanda with smooth travel planning and inspiring destinations.',
      heroText: 'From gorilla trekking in misty forests to cultural tours in Kigali, we help you turn every trip into a memorable adventure.',
      featuredTitle: 'Featured Experiences',
      featuredSubtitle: 'What makes Rwanda unforgettable',
      card1: {
        title: 'Gorilla Trekking',
        text: 'Experience one of the world’s most iconic wildlife encounters with fully supported gorilla permits and guides.'
      },
      card2: {
        title: 'Rainforest Adventures',
        text: 'Walk lush trails in Nyungwe Forest and discover waterfalls, canopy walks, and rare primates.'
      },
      card3: {
        title: 'Safari & Culture',
        text: 'Explore Akagera’s savanna wildlife, lakeside scenery, and authentic local villages.'
      },
      supportTitle: 'Why Choose Us',
      support1: {
        title: 'Professional Guides',
        text: 'Local guides lead every tour with knowledge, safety, and insider recommendations.'
      },
      support2: {
        title: 'Tailored Itineraries',
        text: 'We build plans around your interests, whether you want wildlife, culture, or relaxation.'
      },
      support3: {
        title: 'Easy Bookings',
        text: 'From permits to transport, we handle the details so your trip feels seamless.'
      }
    },
    about: {
      heroSmall: 'Learn About Us',
      heroTitle: 'Tembera Rwanda: Your Local Adventure Partner',
      heroText: 'We create immersive tours across Rwanda’s wildlife, culture, and unforgettable landscapes.',
      missionTitle: 'Our Mission',
      missionText: 'To deliver memorable travel experiences that support local communities, preserve Rwanda’s nature, and make visitors feel welcome from the moment they arrive.',
      feature1: {
        title: 'Sustainable Travel',
        text: 'Every itinerary respects the environment while supporting hospitality, guides, and local craftspeople.'
      },
      feature2: {
        title: 'Authentic Culture',
        text: 'We connect travelers with real Rwandan communities, markets, and stories.'
      },
      feature3: {
        title: 'Personalized Service',
        text: 'Our team handles bookings, transport, and local details so you can enjoy the journey.'
      },
      provincesTitle: 'Explore Our Provinces',
      provincesText: 'Each region in Rwanda offers unique landscapes, experiences, and photographs to inspire your next trip.'
    },
    photos: {
      title: 'Photo Gallery',
      subtitle: 'Browse scenes from national parks, city culture, and unforgettable landscapes.',
      info: 'Click on any image to view it in full size',
      provinceSection: {
        heading: 'Province Spotlights',
        text: 'See photo highlights from each Rwandan province and explore more destination images.'
      }
    },
    destination: {
      north: {
        title: 'Northern Province',
        subtitle: 'Volcanoes, gorilla treks, and mountain forests.',
        description: 'Northern Province is home to Volcanoes National Park, offering world-class gorilla trekking, golden monkey tours, and scenic mountain hikes through misty bamboo forests.',
        card1: {
          title: 'Gorilla Trekking',
          text: 'Track mountain gorillas with expert guides in their natural habitat.'
        },
        card2: {
          title: 'Golden Monkeys',
          text: 'Spot endemic golden monkeys on forest hikes combined with cultural village visits.'
        },
        card3: {
          title: 'Mountain Trails',
          text: 'Hike misty slopes for breathtaking panoramas and a true wilderness feel.'
        },
        galleryTitle: 'Northern Province Gallery'
      },
      south: {
        title: 'Southern Province',
        subtitle: 'Nyungwe Forest, Lake Kivu, and cultural heritage.',
        description: 'Southern Province offers lush rainforests, scenic lakes, tea estates, and rich cultural sites throughout the region.',
        card1: {
          title: 'Nyungwe Forest Hikes',
          text: 'Explore ancient rainforest with canopy walks, waterfalls, and wildlife.'
        },
        card2: {
          title: 'Lake Kivu Relaxation',
          text: 'Enjoy lakeside resorts, boat tours, and stunning sunset views.'
        },
        card3: {
          title: 'Tea Estate Visits',
          text: 'Discover Rwanda’s tea culture with peaceful plantation tours.'
        },
        galleryTitle: 'Southern Province Gallery'
      },
      east: {
        title: 'Eastern Province',
        subtitle: 'Akagera National Park, lakes, savanna, and wildlife.',
        description: 'Eastern Province features Akagera National Park, offering safari experiences, lake cruises, and diverse birdlife.',
        card1: {
          title: 'Safari Adventures',
          text: 'Game drives through savanna to spot lions, buffalo, and elephants.'
        },
        card2: {
          title: 'Lake Cruises',
          text: 'Boat tours for birdwatching and breathtaking sunset views.'
        },
        card3: {
          title: 'Birding Tours',
          text: 'Discover rare waterbirds, wetlands, and sweeping park landscapes.'
        },
        galleryTitle: 'Eastern Province Gallery'
      },
      west: {
        title: 'Western Province',
        subtitle: 'Kibuye, lakeshores, mountain scenery, and forests.',
        description: 'Western Province offers Lake Kivu resorts, Kibuye beaches, forest treks, and authentic rural experiences.',
        card1: {
          title: 'Lake Kivu Resorts',
          text: 'Relax at waterfront hotels with beach access, water sports, and sunset dining.'
        },
        card2: {
          title: 'Forest Trails',
          text: 'Hike through lush forests and visit local communities and tea plantations.'
        },
        card3: {
          title: 'Volcano Views',
          text: 'Explore the scenic mountain rim and crater lake viewpoints.'
        },
        galleryTitle: 'Western Province Gallery'
      },
      kigali: {
        title: 'Kigali City',
        subtitle: 'Capital city blending modern life, history, and local culture.',
        description: 'Kigali is a vibrant hub with museums, markets, restaurants, and cultural centers. Visit genocide memorials, art galleries, and bustling local neighborhoods.',
        card1: {
          title: 'Museums & Culture',
          text: 'Genocide Memorial, Rwanda Art Museum, and contemporary galleries showcase the nation’s story.'
        },
        card2: {
          title: 'Markets & Food',
          text: 'Explore craft markets, food stalls, and restaurants offering authentic Rwandan cuisine.'
        },
        card3: {
          title: 'City Walks',
          text: 'Enjoy safe city tours, viewpoints, and friendly local neighborhoods.'
        },
        galleryTitle: 'Kigali City Gallery'
      }
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      photos: 'Photos',
      videos: 'Vidéos',
      destinations: 'Destinations',
      north: 'Province du Nord',
      south: 'Province du Sud',
      east: 'Province de l’Est',
      west: 'Province de l’Ouest',
      kigali: 'Ville de Kigali',
      contact: 'Contact',
      language: 'Langue',
      english: 'Anglais',
      french: 'Français',
      kinyarwanda: 'Kinyarwanda',
      kiswahili: 'Kiswahili'
    },
    home: {
      heroSmall: 'Explorez le Rwanda',
      heroTitle: 'Découvrez le Rwanda avec une planification de voyage fluide et des destinations inspirantes.',
      heroText: 'Du trekking des gorilles dans des forêts brumeuses aux visites culturelles à Kigali, nous aidons à transformer chaque voyage en une aventure mémorable.',
      featuredTitle: 'Expériences en vedette',
      featuredSubtitle: 'Ce qui rend le Rwanda inoubliable',
      card1: {
        title: 'Trekking de gorilles',
        text: 'Vivez l’une des rencontres animalières les plus emblématiques avec des permis de gorille et des guides entièrement pris en charge.'
      },
      card2: {
        title: 'Aventures en forêt tropicale',
        text: 'Parcourez les sentiers luxuriants de la forêt de Nyungwe et découvrez cascades, passerelles et primates rares.'
      },
      card3: {
        title: 'Safari et culture',
        text: 'Explorez la faune des savanes d’Akagera, les paysages du lac et des villages locaux authentiques.'
      },
      supportTitle: 'Pourquoi nous choisir',
      support1: {
        title: 'Guides professionnels',
        text: 'Des guides locaux dirigent chaque visite avec connaissance, sécurité et recommandations d’initiés.'
      },
      support2: {
        title: 'Itinéraires personnalisés',
        text: 'Nous construisons des plans autour de vos intérêts, que vous souhaitiez de la faune, de la culture ou de la détente.'
      },
      support3: {
        title: 'Réservations faciles',
        text: 'Des permis au transport, nous gérons les détails pour que votre voyage soit fluide.'
      }
    },
    about: {
      heroSmall: 'Apprenez à nous connaître',
      heroTitle: 'Tembera Rwanda : votre partenaire d’aventure local',
      heroText: 'Nous créons des circuits immersifs à travers la faune, la culture et les paysages inoubliables du Rwanda.',
      missionTitle: 'Notre mission',
      missionText: 'Offrir des expériences de voyage mémorables qui soutiennent les communautés locales, préservent la nature rwandaise et accueillent les visiteurs dès leur arrivée.',
      feature1: {
        title: 'Voyage durable',
        text: 'Chaque itinéraire respecte l’environnement tout en soutenant l’hôtellerie, les guides et les artisans locaux.'
      },
      feature2: {
        title: 'Culture authentique',
        text: 'Nous mettons les voyageurs en contact avec de vraies communautés, marchés et histoires rwandaises.'
      },
      feature3: {
        title: 'Service personnalisé',
        text: 'Notre équipe gère les réservations, le transport et les détails locaux pour que vous profitiez du voyage.'
      },
      provincesTitle: 'Découvrez nos provinces',
      provincesText: 'Chaque région du Rwanda offre des paysages, des expériences et des photographies uniques pour inspirer votre prochain voyage.'
    },
    photos: {
      title: 'Galerie photo',
      subtitle: 'Parcourez des scènes de parcs nationaux, de la culture urbaine et de paysages inoubliables.',
      info: 'Cliquez sur une image pour la voir en taille réelle',
      provinceSection: {
        heading: 'Vitrines des provinces',
        text: 'Voir les temps forts photo de chaque province rwandaise et explorer davantage d’images de destinations.'
      }
    },
    destination: {
      north: {
        title: 'Province du Nord',
        subtitle: 'Volcans, treks de gorilles et forêts de montagne.',
        description: 'La province du Nord abrite le parc national des volcans, offrant des treks de gorilles de classe mondiale, des tours de singes dorés et des randonnées de montagne panoramiques.',
        card1: {
          title: 'Trekking de gorilles',
          text: 'Suivez les gorilles de montagne avec des guides experts dans leur habitat naturel.'
        },
        card2: {
          title: 'Singes dorés',
          text: 'Observez les singes dorés endémiques lors de randonnées en forêt combinées à des visites de villages culturels.'
        },
        card3: {
          title: 'Sentiers de montagne',
          text: 'Randonnez sur des pentes brumeuses pour des panoramas à couper le souffle et une vraie sensation de nature.'
        },
        galleryTitle: 'Galerie de la province du Nord'
      },
      south: {
        title: 'Province du Sud',
        subtitle: 'Forêt de Nyungwe, lac Kivu et patrimoine culturel.',
        description: 'La province du Sud offre des forêts luxuriantes, des lacs pittoresques, des plantations de thé et des sites culturels riches.',
        card1: {
          title: 'Randonnées à Nyungwe',
          text: 'Explorez la forêt ancienne avec passerelles, cascades et faune.'
        },
        card2: {
          title: 'Détente au lac Kivu',
          text: 'Profitez des stations balnéaires, des excursions en bateau et des couchers de soleil magnifiques.'
        },
        card3: {
          title: 'Visites de plantations de thé',
          text: 'Découvrez la culture du thé rwandais avec des visites paisibles des plantations.'
        },
        galleryTitle: 'Galerie de la province du Sud'
      },
      east: {
        title: 'Province de l’Est',
        subtitle: 'Parc national d’Akagera, lacs, savane et faune.',
        description: 'La province de l’Est comprend le parc national d’Akagera, avec des safaris, des croisières sur le lac et une diversité d’oiseaux.',
        card1: {
          title: 'Aventures en safari',
          text: 'Safaris pour observer lions, buffles et éléphants.'
        },
        card2: {
          title: 'Croisières sur le lac',
          text: 'Excursions en bateau pour observer les oiseaux et les couchers de soleil.'
        },
        card3: {
          title: 'Tours d’observation des oiseaux',
          text: 'Découvrez des oiseaux rares, des zones humides et des paysages spectaculaires.'
        },
        galleryTitle: 'Galerie de la province de l’Est'
      },
      west: {
        title: 'Province de l’Ouest',
        subtitle: 'Kibuye, rives du lac, montagnes et forêts.',
        description: 'La province de l’Ouest propose des stations de lac Kivu, des randonnées en forêt et des expériences rurales authentiques.',
        card1: {
          title: 'Stations du lac Kivu',
          text: 'Détendez-vous au bord de l’eau avec activités nautiques et dîners au coucher du soleil.'
        },
        card2: {
          title: 'Sentiers forestiers',
          text: 'Randonnez à travers des forêts verdoyantes et visitez des communautés locales.'
        },
        card3: {
          title: 'Vues sur les volcans',
          text: 'Explorez des panoramas de montagnes et de lacs.'
        },
        galleryTitle: 'Galerie de la province de l’Ouest'
      },
      kigali: {
        title: 'Ville de Kigali',
        subtitle: 'Capitale moderne, histoire et culture locale.',
        description: 'Kigali est une capitale dynamique avec des musées, marchés, restaurants et centres culturels.',
        card1: {
          title: 'Musées et culture',
          text: 'Le mémorial du génocide et le musée d’art du Rwanda racontent l’histoire du pays.'
        },
        card2: {
          title: 'Marchés et gastronomie',
          text: 'Découvrez les marchés artisanaux, les stands de nourriture et la cuisine rwandaise authentique.'
        },
        card3: {
          title: 'Promenades en ville',
          text: 'Profitez de visites urbaines sûres et de quartiers accueillants.'
        },
        galleryTitle: 'Galerie de Kigali'
      }
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Ishusho',
      photos: 'Amafoto',
      videos: 'Videwo',
      destinations: 'Aho kujya',
      north: 'Akarere k’Amajyaruguru',
      south: 'Akarere k’Amajyepfo',
      east: 'Akarere k’Uburasirazuba',
      west: 'Akarere k’Uburengerazuba',
      kigali: 'Umujyi wa Kigali',
      contact: 'Hamagara',
      language: 'Ururimi',
      english: 'Icyongereza',
      french: 'Igifaransa',
      kinyarwanda: 'Ikinyarwanda',
      kiswahili: 'Kiswahili'
    },
    home: {
      heroSmall: 'Sura u Rwanda',
      heroTitle: 'Menya u Rwanda ukoresheje gahunda yoroshye y’ingendo n’aho wajya heza.',
      heroText: 'Uhereye ku rugendo rw’abagingo mu mashyamba haguruye kugera ku gusura umuco i Kigali, turagufasha guhindura urugendo rwawe uburambe buzibukwa.',
      featuredTitle: 'Ibyo twibandaho',
      featuredSubtitle: 'Ibituma u Rwanda rutazibagirana',
      card1: {
        title: 'Urugendo rwo kureba ingagi',
        text: 'Menya imwe mu nzira z’inyamaswa zizwi cyane ufite ibyangombwa n’abayobora bashinzwe.'
      },
      card2: {
        title: 'Ubukerarugendo mu mashyamba',
        text: 'Tembera imisozi ya Nyungwe usanga imigezi, imisarani n’inyamanswa zidashira.'
      },
      card3: {
        title: 'Safari n’umuco',
        text: 'Sura Akagera urebe inyamaswa, imisozi y’ibiyaga n’amakicarane y’abaturage.'
      },
      supportTitle: 'Impamvu duhitamo',
      support1: {
        title: 'Abayobora babifitiye ubumenyi',
        text: 'Abayobozi b’akarere bazamuye buri rugendo n’ubumenyi, umutekano n’inama z’ababizi.'
      },
      support2: {
        title: 'Porogaramu zihariye',
        text: 'Dushyiraho gahunda zikurikije ibyo ukunda, haba inyamaswa, umuco cyangwa kuruhuka.'
      },
      support3: {
        title: 'Gucuruza byoroshye',
        text: 'Dutegura byose kuva ku byangombwa kugeza ku gutwara kugira ngo urugendo rwawe rugende neza.'
      }
    },
    about: {
      heroSmall: 'Menya ibyacu',
      heroTitle: 'Tembera Rwanda: umufatanyabikorwa wawe w’inyongera',
      heroText: 'Dukora ingendo zinyura mu buhinzi, umuco n’ibyiza bitazibagirana by’u Rwanda.',
      missionTitle: 'Intego yacu',
      missionText: 'Gutanga uburambe bw’ingendo buzibukwa butera inkunga imiryango, bubungabunga kamere y’u Rwanda kandi bukakira abashyitsi.',
      feature1: {
        title: 'Ingendo zirengera ibidukikije',
        text: 'Buri gahunda yubahiriza ibidukikije kandi ishyigikira amacumbi, abayobozi n’abahanzi.'
      },
      feature2: {
        title: 'Umuco nyakuri',
        text: 'Tubahuza n’imiryango nyarwanda, amasoko n’amateka y’ukuri.'
      },
      feature3: {
        title: 'Serivisi yihariye',
        text: 'Tugufasha mu byifuzo, gutwara n’ibikenerwa byo mu gace kugira ngo wishimire urugendo.'
      },
      provincesTitle: 'Sura uturere twacu',
      provincesText: 'Buri karere mu Rwanda kagira imisozi, ubunararibonye n’amafoto bihariye biguhumuriza urugendo rwawe rukurikira.'
    },
    photos: {
      title: 'Galerie y’amafoto',
      subtitle: 'Reba amafoto y’ibiyaga, umujyi n’ibyiza bitazibagirana.',
      info: 'Kanda ku ifoto yose uyirebe mu buryo bunini',
      provinceSection: {
        heading: 'Akarere kagaragara',
        text: 'Reba amafoto y’ingenzi y’uturere two mu Rwanda kandi usure andi mafoto y’aho ujya.'
      }
    },
    destination: {
      north: {
        title: 'Akarere k’Amajyaruguru',
        subtitle: 'Imisozi, ingagi n’amashyamba y’imisozi.',
        description: 'Akarere k’Amajyaruguru gafite Pariki y’Igikoko cya Volcans, ifite ingagi zo mu misozi, ingendo z’abana b’ibitunguru n’imisozi myiza.',
        card1: {
          title: 'Kugenderera ingagi',
          text: 'Kurikirana ingagi zo mu misozi n’abayobozi babizobereye mu busitani bwazo.'
        },
        card2: {
          title: 'Abasimba b’umuhondo',
          text: 'Reba abasimba b’umuhondo mu mashyamba hamwe no gusura ibyaro.'
        },
        card3: {
          title: 'Inzira z’imisozi',
          text: 'Hindura inzira ku misozi y’ikirere ufate amafoto atangaje.'
        },
        galleryTitle: 'Galerie y’Amajyaruguru'
      },
      south: {
        title: 'Akarere k’Amajyepfo',
        subtitle: 'Ishyamba rya Nyungwe, ikiyaga cya Kivu n’umurage w’umuco.',
        description: 'Akarere k’Amajyepfo kagira amashyamba ya Nyungwe, ibiyaga, utubo tw’icyayi n’ahantu havugwa iby’umuco.',
        card1: {
          title: 'Gusura Nyungwe',
          text: 'Tembera mu ishyamba risanzwe rishaje ufate umuyaga, imigezi n’inyamaswa.'
        },
        card2: {
          title: 'Kuruhukira ku Kivu',
          text: 'Ba ku mahoteli y’ahantu hakeye hafi y’ikiyaga ugire urugendo rw’amato.'
        },
        card3: {
          title: 'Gusura icyayi',
          text: 'Menya umuco w’icyayi w’u Rwanda usura imirima yacyo.'
        },
        galleryTitle: 'Galerie y’Amajyepfo'
      },
      east: {
        title: 'Akarere k’Uburasirazuba',
        subtitle: 'Pariki ya Akagera, ibiyaga, savane n’inyamaswa.',
        description: 'Akarere k’Uburasirazuba karimo Pariki ya Akagera ifite safari, ingendo mu mazi n’inyoni nyinshi.',
        card1: {
          title: 'Safari',
          text: 'Inzira zo kureba intare, inka za kavukire n’amafi.'
        },
        card2: {
          title: 'Ingendo ku kiyaga',
          text: 'Inzira z’amato zo kureba inyoni n’akazuba.'
        },
        card3: {
          title: 'Kureba inyoni',
          text: 'Reba inyoni zihenze, ibiyaga n’imisozi.'
        },
        galleryTitle: 'Galerie y’Uburasirazuba'
      },
      west: {
        title: 'Akarere k’Uburengerazuba',
        subtitle: 'Kibuye, imirambi y’ikiyaga, imisozi n’amashyamba.',
        description: 'Akarere k’Uburengerazuba kagira amahoteli yo ku kiyaga cya Kivu, imisozi n’ubuzima bw’icyaro.',
        card1: {
          title: 'Amahoteli ya Kivu',
          text: 'Ruhukira ku mazi, ukora siporo yo ku mazi kandi ureba izuba rirenga.'
        },
        card2: {
          title: 'Inzira z’amashyamba',
          text: 'Hinduka mu mashyamba meza usure n’imiryango.'
        },
        card3: {
          title: 'Reba imisozi',
          text: 'Reba imisozi n’ibiyaga bihumuriza.'
        },
        galleryTitle: 'Galerie y’Uburengerazuba'
      },
      kigali: {
        title: 'Umujyi wa Kigali',
        subtitle: 'Umurwa mukuru uhuza ubuzima bw’iki gihe, amateka n’umuco.',
        description: 'Kigali ni umujyi wuzuye ubuzima ufite inzu ndangamurage, amasoko, resitora n’ahantu nyaburanga.',
        card1: {
          title: 'Inzu ndangamateka n’umuco',
          text: 'Mémorial du Genocide n’Inzu Ndangamurage y’Ubuhanzi byerekana amateka y’igihugu.'
        },
        card2: {
          title: 'Amasoko n’ibiribwa',
          text: 'Sura amasoko n’ahacururizwa ibiribwa ukaryoshya umuco w’u Rwanda.'
        },
        card3: {
          title: 'Kugenda mu mujyi',
          text: 'Ishyirahamwe ry’umujyi ritanga urugendo rwizewe n’inzira z’amahoro.'
        },
        galleryTitle: 'Galerie ya Kigali'
      }
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      services: 'Huduma',
      gallery: 'Matunzio',
      photos: 'Picha',
      videos: 'Video',
      destinations: 'Nafasi',
      north: 'Mkoa wa Kaskazini',
      south: 'Mkoa wa Kusini',
      east: 'Mkoa wa Mashariki',
      west: 'Mkoa wa Magharibi',
      kigali: 'Jiji la Kigali',
      contact: 'Mawasiliano',
      language: 'Lugha',
      english: 'Kiingereza',
      french: 'Kifaransa',
      kinyarwanda: 'Kinyarwanda',
      kiswahili: 'Kiswahili'
    },
    home: {
      heroSmall: 'Gundua Rwanda',
      heroTitle: 'Gundua Rwanda kwa kupanga safari kwa urahisi na maeneo ya msukumo.',
      heroText: 'Kutoka kwa kutembea na gorilla katika misitu yenye ukungu hadi ziara za kitamaduni Kigali, tunakusaidia kubadilisha safari yako kuwa tukio la kukumbukwa.',
      featuredTitle: 'Uzoefu Unaovutia',
      featuredSubtitle: 'Nini kinachofanya Rwanda isisahauke',
      card1: {
        title: 'Kutembea kwa gorilla',
        text: 'Pata moja ya mikutano maarufu ya wanyama kwa vibali vilivyowekwa na waongozaji.'
      },
      card2: {
        title: 'Michezo ya msitu mvua',
        text: 'Tembea njia za msitu wa Nyungwe na ugundue maporomoko, viunganishi na wanyama wa kipekee.'
      },
      card3: {
        title: 'Safari na Utamaduni',
        text: 'Chunguza wanyamapori wa Akagera, mandhari ya mto na vijiji vya asili.'
      },
      supportTitle: 'Kwa Nini Ututenge',
      support1: {
        title: 'Waongozaji Wataalamu',
        text: 'Waongozaji wa eneo hutoa kila ziara kwa maarifa, usalama na mapendekezo ya ndani.'
      },
      support2: {
        title: 'Ratiba Zilizo Binafsi',
        text: 'Tunaunda mipango kulingana na maslahi yako, iwe ni wanyama, utamaduni au kupumzika.'
      },
      support3: {
        title: 'Uhifadhi Rahisi',
        text: 'Kutoka vibali hadi usafiri, tunasimamia undani ili safari yako iwe laini.'
      }
    },
    about: {
      heroSmall: 'Jifunze Kuhusu Sisi',
      heroTitle: 'Tembera Rwanda: Mshirika Wako wa Kusafiri wa Ndani',
      heroText: 'Tunaunda ziara za kina kote Rwanda kwa wanyamapori, utamaduni na mandhari za kukumbukwa.',
      missionTitle: 'Dhamira Yetu',
      missionText: 'Kutoa uzoefu wa kusafiri wa kukumbukwa unaounga mkono jamii za ndani, kuhifadhi asili ya Rwanda na kuwakaribisha wageni.',
      feature1: {
        title: 'Usafiri Endelevu',
        text: 'Kila ratiba inaheshimu mazingira huku ikiunga mkono mikahawa, waongozaji na wasanii wa ndani.'
      },
      feature2: {
        title: 'Utamaduni Halisi',
        text: 'Tunaunganisha wasafiri na jamii halisi za Rwanda, masoko na hadithi.'
      },
      feature3: {
        title: 'Huduma ya Kibinafsi',
        text: 'Timu yetu inashughulikia uhifadhi, usafiri na undani wa eneo ili uweze kufurahia safari.'
      },
      provincesTitle: 'Gundua Majimbo Yetu',
      provincesText: 'Kila eneo nchini Rwanda lina mandhari, uzoefu na picha za kipekee za kukuhamasisha safari yako ijayo.'
    },
    photos: {
      title: 'Maktaba ya Picha',
      subtitle: 'Angalia mandhari ya mbuga za taifa, maisha ya mji na mandhari za kukumbukwa.',
      info: 'Bonyeza picha yoyote uiangalie kwa ukubwa kamili',
      provinceSection: {
        heading: 'Mambo ya Maeneo',
        text: 'Tazama picha za sehemu za kila mkoa nchini Rwanda na uchunguze picha zaidi za sehemu.'
      }
    },
    destination: {
      north: {
        title: 'Mkoa wa Kaskazini',
        subtitle: 'Volkani, kutembea kwa gorilla na misitu ya milima.',
        description: 'Mkoa wa Kaskazini una Hifadhi ya Taifa ya Volcans, safari za gorilla, maonyesho ya nyani wa dhahabu na matembezi ya milima.',
        card1: {
          title: 'Kutembea kwa gorilla',
          text: 'Fuata gorilla za milimani na waongozaji wenye ujuzi katika makazi yao ya asili.'
        },
        card2: {
          title: 'Nyani wa dhahabu',
          text: 'Tazama nyani wa dhahabu katika matembezi ya msitu pamoja na ziara za vijiji.'
        },
        card3: {
          title: 'Njia za milima',
          text: 'Panda milima yenye ukungu kwa mandhari za kuvutia.'
        },
        galleryTitle: 'Maktaba ya Mkoa wa Kaskazini'
      },
      south: {
        title: 'Mkoa wa Kusini',
        subtitle: 'Msitu wa Nyungwe, Ziwa Kivu na urithi wa kitamaduni.',
        description: 'Mkoa wa Kusini una misitu yenye rutuba, maziwa mazuri, mashamba ya chai na maeneo ya kitamaduni.',
        card1: {
          title: 'Mathabahu ya Nyungwe',
          text: 'Gundua msitu wa zamani na miti ya juu, maporomoko na wanyama.'
        },
        card2: {
          title: 'Kupumzika Ziwani Kivu',
          text: 'Furahia hoteli za pwani ya ziwa, safari za bati na machweo mazuri.'
        },
        card3: {
          title: 'Ziara za chai',
          text: 'Gundua utamaduni wa chai ya Rwanda kwa ziara za mashamba.'
        },
        galleryTitle: 'Maktaba ya Mkoa wa Kusini'
      },
      east: {
        title: 'Mkoa wa Mashariki',
        subtitle: 'Hifadhi ya Taifa ya Akagera, maziwa, savana na wanyama.',
        description: 'Mkoa wa Mashariki una Hifadhi ya Taifa ya Akagera kwa safari, matembezi ya maji na ndege wa rangi.',
        card1: {
          title: 'Safari',
          text: 'Safari za kuona simba, nyati na tembo.'
        },
        card2: {
          title: 'Safari za maji',
          text: 'Matembezi ya bati kwa kuangalia ndege na machweo.'
        },
        card3: {
          title: 'Kuangalia ndege',
          text: 'Gundua ndege wa kipekee, mito ya maji na mandhari ya kupendeza.'
        },
        galleryTitle: 'Maktaba ya Mkoa wa Mashariki'
      },
      west: {
        title: 'Mkoa wa Magharibi',
        subtitle: 'Kibuye, pwani za ziwa, milima na misitu.',
        description: 'Mkoa wa Magharibi una hoteli za Ziwa Kivu, matembezi ya misitu na uzoefu wa kijijini.',
        card1: {
          title: 'Hoteli za Ziwa Kivu',
          text: 'Pumzika kando ya maji, fanya michezo ya maji na ujaribu mandhari ya machweo.'
        },
        card2: {
          title: 'Njia za misitu',
          text: 'Tembea misitu ya kijani na utembelee jamii za karibu.'
        },
        card3: {
          title: 'Mandhari za volkano',
          text: 'Furahia mandhari ya milima na maziwa.'
        },
        galleryTitle: 'Maktaba ya Mkoa wa Magharibi'
      },
      kigali: {
        title: 'Jiji la Kigali',
        subtitle: 'Mji mkuu unaochanganya maisha ya kisasa, historia na utamaduni.',
        description: 'Kigali ni kitovu chenye njia za muziki, masoko, migahawa na maeneo ya kitamaduni.',
        card1: {
          title: 'Makumbusho na utamaduni',
          text: 'Makumbusho ya Genocide na nyumba ya sanaa ya Rwanda yanaonyesha hadithi ya taifa.'
        },
        card2: {
          title: 'Masoko na vyakula',
          text: 'Tembelea masoko ya mikono na vyakula vya asili.'
        },
        card3: {
          title: 'Matembezi ya mji',
          text: 'Furahia matembezi salama na maeneo rafiki.'
        },
        galleryTitle: 'Maktaba ya Kigali'
      }
    }
  }
}
