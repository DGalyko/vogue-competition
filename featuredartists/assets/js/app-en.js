document.addEventListener("DOMContentLoaded", () => {
    const people = [
        {
            "number": 1,
            "title": "Vladyslav Andrievsky, 29",
            "description": "Kyiv-based Vladyslav Andrievsky explores the city’s dynamic youth scene. His works have been exhibited internationally in Paris, New York, and Chicago, and published in Dazed and the British Journal of Photography. In 2024, the Ukrainian publisher Syntax released his photobook District, which immerses viewers in the atmosphere of Kyiv’s neighborhoods, examining their architecture, rhythms of life, and the youth communities that inhabit these spaces.<br><br>At the FUTURESPECTIVE exhibition, he presents a symbolic shot Angel of Kyiv (2019), taken at Maidan Nezalezhnosti (Independence Square), the central square of the Ukrainian capital.",
            "instagram": {
                "url": "https://www.instagram.com/vladyslavandrievsky/",
                "text": "@vladyslavandrievsky"
            },
            images: [
                "assets/img/Andrievsky/1.jpg",
                "assets/img/Andrievsky/2.jpg",
                "assets/img/Andrievsky/3.jpg",
                "assets/img/Andrievsky/4.jpg",
                "assets/img/Andrievsky/5.jpg",
            ]
        },
        {
            "number": 2,
            "title": "Vic Bakin, 40",
            "award": "Special Vision award from KERNEL, a global leader in the production and export of sunflower oil and grain",
            "description": "A self-taught photographer, Bakin has spent many years documenting Ukrainian youth, often focusing on queer communities and subcultures. His sensitive, melancholic images have been exhibited across Ukraine, France, Germany, the Netherlands, the United Kingdom, Morocco, Australia, and the United States. They have been published in The Guardian, British Journal of Photography, DUST, and Vogue Ukraine.<br><br>His series Epitome (2023) combines images from his personal archive and photographs taken in the Kyiv region after its liberation in 2022. All of the prints were developed in an improvised darkroom in his apartment. Portraits of young people are set alongside images of buildings ravaged by the invaders, forming a personal visual essay that explores the topics of fragility, beauty, masculinity, and uncertainty.",
            "instagram": {
                "url": "https://www.instagram.com/vicbakin?igsh=MTh1NTM3Y242NHVwdA==",
                "text": "@vicbakin"
            },
            images: [
                "assets/img/Bakin/1.jpg",
                "assets/img/Bakin/2.jpg",
                "assets/img/Bakin/3.jpg",
                "assets/img/Bakin/4.jpg",
                "assets/img/Bakin/5.jpg",
                "assets/img/Bakin/6.jpg",
                "assets/img/Bakin/7.jpg",
                "assets/img/Bakin/8.jpg",
                "assets/img/Bakin/9.jpg",
            ]
        },
        {
            "number": 3,
            "title": "Lesha Berezovskiy, 34",
            "description": "Born and raised in Novoaidar, Luhansk region, Lesha Berezovskiy explores the relationship between mankind and nature, particularly the role of human artifacts in the environment. He is a prolific chronicler of Ukraine’s emerging rave culture. His works appeared in Vogue Ukraine, i-D, ZEIT Magazin, Monocle, Le Monde, and Dazed. The exhibition features Brotherhood (Cxema) (2018) and A Guy with Braces (Cxema) (2018), depicting participants of Kyiv’s popular CXEMA raves and forming part of Berezovskiy’s broader documentary project on the city’s nightlife.",
            "instagram": {
                "url": "https://www.instagram.com/leshaberezovskiy/",
                "text": "@leshaberezovskiy"
            },
            images: [
                "assets/img/Berezovskyi/1.jpg",
                "assets/img/Berezovskyi/2.jpg",
                "assets/img/Berezovskyi/3.jpg",
                "assets/img/Berezovskyi/4.jpg",
                "assets/img/Berezovskyi/5.jpg",
                "assets/img/Berezovskyi/6.jpg",
                "assets/img/Berezovskyi/7.jpg",
            ]
        },
        {
            "number": 4,
            "title": "Mishka Bochkaryov, 36",
            "description": "Based in Kremenchuk in central Ukraine, Mishka Bochkaryov’s images combine brutal realism with high-end sensibility. His portfolio includes shoots for Diesel, Dazed, and Vice. The exhibition features two of his works: Sasha and the Reproduction of the Painting “Rye” in Her Apartment and Short Circuit. Both are parts of the triptych Rebirth of Trauma (2020–2021). Mishka shot a portrait of a young woman Sasha in an ordinary Kyiv apartment; the resulting images blend subtle intimacy with starkness of everyday life.",
            "instagram": {
                "url": "https://www.instagram.com/mishka_bochkaryov/",
                "text": "@mishka_bochkaryov"
            },
            images: [
                "assets/img/Bochkaryov/1.jpg",
                "assets/img/Bochkaryov/2.jpg",
                "assets/img/Bochkaryov/3.jpg",
            ]
        },
        {
            "number": 5,
            "title": "Ania Brudna, 33",
            "description": "Born in Yalta, now under Russian occupation, Ania Brudna is based in Paris. She works in fashion photography and has shot covers for Vogue Ukraine and Vogue Netherlands. In her personal series, characterized by a distinctive documentary sensitivity, Brudna reflects on the present and future of a country at war.<br><br>Serhii and Oleh (2023) is a portrait of a young man currently serving in the National Guard of Ukraine posing with his newborn son. Before the full-scale invasion, Serhii worked as a model, but like many Ukrainians, he gave up his former life for the sake of a future in which his child could grow up in a free and peaceful country.",
            "instagram": {
                "url": "https://www.instagram.com/aniabrudna/",
                "text": "@aniabrudna"
            },
            images: [
                "assets/img/Brudna/1.jpg",
                "assets/img/Brudna/2.jpg",
                "assets/img/Brudna/3.jpg",
                "assets/img/Brudna/4.jpg",
                "assets/img/Brudna/5.jpg",
                "assets/img/Brudna/6.jpg",
                "assets/img/Brudna/7.jpg",
                "assets/img/Brudna/8.jpg",
            ]
        },
        {
            "number": 6,
            "title": "Alex Blanco, 37",
            "description": "Born in Odesa, Alex Blanco now lives in the Netherlands. She studied photography at the Royal Academy of Art in The Hague. On view at the exhibition are works from her sensual series Meat, Fish & Aubergine Caviar (2021), which reflects on Blanco’s relationship with her parents and her native Odesa. The series explores cooking and shared meals as a deep-rooted Ukrainian tradition.",
            "instagram": {
                "url": "https://www.instagram.com/alexblancofoto?igsh=MTlvMDRmMjF5Y3BjNw==",
                "text": "@alexblancofoto"
            },
            images: [
                "assets/img/Blanco/1.jpg",
                "assets/img/Blanco/2.jpg",
                "assets/img/Blanco/3.jpg",
                "assets/img/Blanco/4.jpg",
                "assets/img/Blanco/5.jpg",
                "assets/img/Blanco/6.jpg",
            ]
        },
        {
            "number": 7,
            "title": "Nazar Furyk, 30",
            "description": "Artist and photojournalist based in Kyiv, Nazar Furyk explores the dialogue between everyday objects and their environment, capturing natural phenomena, traces of human interaction, and the transformation of urban spaces. He also documents the devastating impact of war on people and landscapes. Furyk participated in numerous international exhibitions, including at Stills, Centre for Photography in Edinburgh, Open Eye Gallery in Liverpool, and Deichtorhallen Hamburg.<br><br>Shot in the suburbs of Kyiv, works from his series Edited (2018–2020) are results of experimentation with landscape photography.",
            "instagram": {
                "url": "https://www.instagram.com/nazarfuryk/",
                "text": "@nazarfuryk"
            },
            images: [
                "assets/img/Futyk/1.jpg",
                "assets/img/Futyk/2.jpg",
                "assets/img/Futyk/3.jpg",
                "assets/img/Futyk/4.jpg",
            ]
        },
        {
            "number": 8,
            "title": "Egor Guschin, 37",
            "description": "Originally from Kharkiv, Egor Guschin started taking pictures in 2023, working primarily with analog techniques. His works have been exhibited in galleries in Lviv, Kharkiv, and Kyiv. A surreal image from his series Milk of Dreams (2024) explores the boundary between dream and reality: the photographer captured his own hand in the rays of winter sunlight and overlaid the image with a frame from a TV program about the supernatural.",
            "instagram": {
                "url": "https://www.instagram.com/n3gabeats?igsh=YjRvdTEzZDc3NXZz",
                "text": "@n3gabeats"
            },
            images: [
                "assets/img/Gushchin/1.jpg",
                "assets/img/Gushchin/2.jpg",
                "assets/img/Gushchin/3.jpg",
                "assets/img/Gushchin/4.jpg",
                "assets/img/Gushchin/5.jpg",
                "assets/img/Gushchin/6.jpg",
            ]
        },
        {
            "number": 9,
            "title": "Artem Humilevskyi, 39",
            "description": "Originally trained as an engineer, Artem Humilevskyi started photography in 2019 and is associated with the Mykolaiv school of photography. His conceptual self-portraits combine irony with a distinctive sense of ornamentation. Humilevskyi is the recipient of the Global Peace Photo Award (Austria, 2022) and a nominee for the PinchukArtCentre Prize (Ukraine, 2022).<br><br>His series New Religion (2023), shot in a village in the Mykolaiv region, documents the growing presence of digital devices in everyday rural life. It explores social media as a new form of cult.",
            "instagram": {
                "url": "https://www.instagram.com/humilevskiy/",
                "text": "@humilevskiy"
            },
            images: [
                "assets/img/Humilevskyi/1.jpg",
                "assets/img/Humilevskyi/2.jpg",
                "assets/img/Humilevskyi/3.jpg",
                "assets/img/Humilevskyi/4.jpg",
                "assets/img/Humilevskyi/5.jpg",
            ]
        },
        {
            "number": 10,
            "title": "Vadym Ivchenko, 21",
            "description": "Currently lives in Antwerp, where he studies photography at the Royal Academy of Fine Arts. His practice explores themes of memory, displacement and belonging through intimate observations of everyday life. Almost abstract works from his series Bitte Berühren (Please Touch, 2025) capture the daily rhythms of Berlin architecture.",
            "instagram": {
                "url": "https://www.instagram.com/vadymivchenko/",
                "text": "@vadymivchenko"
            },
            images: [
                "assets/img/Ivchenko/1.jpg",
                "assets/img/Ivchenko/2.jpg",
                "assets/img/Ivchenko/3.jpg",
                "assets/img/Ivchenko/4.jpg",
            ]
        },
        {
            "number": 11,
            "title": "Yourko Kalichack, 35",
            "description": "Photographer and co-founder of the modeling agency BG Management, Yourko Kalichack lives in Lviv. His portfolio includes shoots for Ukrainian and Czech and Slovak editions of Vogue. Featured in the exhibition, his works Two Beauties (2024), Bus (2022), and Maksym (2023) were shot on a beach in Odesa and in Drohobych, his hometown. Kalichack captures everyday Ukrainian life in all its ordinary beauty.",
            "instagram": {
                "url": "https://www.instagram.com/kalichack?igsh=MWg0OGQ1bmd0dG5rMA==",
                "text": "@kalichak"
            },
            images: [
                "assets/img/Kalichak/1.jpg",
                "assets/img/Kalichak/2.jpg",
                "assets/img/Kalichak/3.jpg",
                "assets/img/Kalichak/4.jpg",
                "assets/img/Kalichak/5.jpg",
                "assets/img/Kalichak/6.jpg",
                "assets/img/Kalichak/7.jpg",
            ]
        },
        {
            "number": 12,
            "title": "Ksenia Kargina, 39",
            "description": "The artist’s practice lies at the intersection of abstract landscape and topographic documentary. She started in fashion photography and, since 2019, has focused on large-scale landscapes taken in remote regions of Greenland, Svalbard, the Atacama Desert, the Himalayas, and the Amazon.<br><br>The exhibition features two of Kargina’s monumental works—Memoria 8 and Memoria 19 (2023), shot in Bolivia. Exploring the transformative power of beauty, they are part of her project Naked Landscapes, which brings together images from the Chilean volcanoes, Bolivian salt flats, the deserts of Chad, and the shores of the Black Sea.",
            "instagram": {
                "url": "https://www.instagram.com/karginaki/",
                "text": "@karginaki"
            },
            images: [
                "assets/img/Kargina/1.jpg",
                "assets/img/Kargina/2.jpg",
                "assets/img/Kargina/3.jpg",
                "assets/img/Kargina/4.jpg",
                "assets/img/Kargina/5.jpg",
                "assets/img/Kargina/6.jpg",
            ]
        },
        {
            "number": 13,
            "title": "Daniil Kotliar, 26",
            "description": "A self-taught photographer from Nikopol, Daniil Kotliar focuses on personal memory, family experience, and tradition. In his series 13th January (2021), he explored the Ukrainian folk holiday of Malanka, celebrated in villages across the Ivano-Frankivsk and Bukovyna regions of the Carpathians, as well as the local folklore. In 2023, the series was published as a photobook by AYVAN, a publishing platform based in London and Paris.<br><br>In the show, Kotliar presents two works: an epic image of the Kartlis Deda (Mother of Georgia) monument, a symbol of Tbilisi, from his 2024 series Somewhere Close; and an intimate, sensual images titled The Day I Fell in Love, taken in Kyiv in 2020.",
            "instagram": {
                "url": "https://www.instagram.com/danilkotliar/",
                "text": "@danilkotliar"
            },
            images: [
                "assets/img/Kotliar/1.jpg",
                "assets/img/Kotliar/2.jpg",
                "assets/img/Kotliar/3.jpg",
                "assets/img/Kotliar/4.jpg",
                "assets/img/Kotliar/5.jpg",
            ]
        },
        {
            "number": 14,
            "title": "Sasha Kurmaz, 39",
            "description": "An interdisciplinary artist and photographer from Kyiv, Sasha Kurmaz works across different genres and  media, including photography, video, performance, and public interventions. His works focus on urban spaces, society, and the relationships between citizens and the state, while also exploring the impact of war on people and the environment. Kurmaz has participated in international exhibitions at venues such as ZKM Center for Art and Media Karlsruhe (Germany), Künstlerhaus Vienna (Austria), Albertinum – Staatliche Kunstsammlungen Dresden (Germany), and the Latvian Museum of Photography (Latvia).<br><br>The intimate photograph Untitled (2013) is part of his large-scale project Wasted Youth, created in 2009 – 2019. The project examines the time and space that shaped the photographer and his friends—Ukrainian youth born shortly before the collapse of the Soviet Union, whose formative years were affected by two revolutions and the Russian-Ukrainian war.",
            "instagram": {
                "url": "https://www.instagram.com/sashakurmaz/",
                "text": "@sashakurmaz"
            },
            images: [
                "assets/img/Kurmaz/1.jpg",
                "assets/img/Kurmaz/2.jpg",
                "assets/img/Kurmaz/3.jpg",
                "assets/img/Kurmaz/4.jpg",
                "assets/img/Kurmaz/5.jpg",
                "assets/img/Kurmaz/6.jpg",
            ]
        },
        {
            "number": 15,
            "title": "Ira Lupu, 35",
            "description": "Born and raised in Odesa, Ira Lupu is currently based in New York. In her work, the metaphorical and dreamlike intersect with the harshness of the human world. She examines this tension — and the notion of trauma in particular — with the precision of a forensic investigator. Lupu participated in the Manifesta Biennial and the Copenhagen Photo Festival, and her work appeared in The New York Times, The Economist, Vogue, British Journal of Photography, Dazed, and i-D.<br><br>Kseniya’s Hair is an intimate portrait of an internally displaced student from Zaporizhzhia, photographed in Vasylkiv, Kyiv region — home to a military base frequently targeted by Russian strikes.",
            "instagram": {
                "url": "https://www.instagram.com/iralupu?igsh=MXdxZXdtNm0zeDh5cg==",
                "text": "@iralupu"
            },
            images: [
                "assets/img/Lupu/1.jpg",
                "assets/img/Lupu/2.jpg",
                "assets/img/Lupu/3.jpg",
                "assets/img/Lupu/4.jpg",
                "assets/img/Lupu/5.jpg",
            ]
        },
        {
            "number": 16,
            "title": "Dom Marker, 35",
            "description": "A photographer from Kharkiv, Dom Marker lives between New York and Kyiv, working across photography, video, and installation. His practice focuses on themes of identity and cultural memory. Marker emigrated to the US in 1993 and returned to Ukraine at the onset of Russia’s full-scale invasion in 2022 to volunteer in frontline humanitarian missions. There began his current project dedicated to Ukrainian heritage and resistance. In 2024, he was awarded the Charcoal Publishing Prize.<br><br>His raw and striking series Sin Tax (2020–2021) explores the beauty of marginalized neighborhoods in the American South.",
            "instagram": {
                "url": "https://www.instagram.com/dommarker?igsh=MTdpODNpZXZzN3I3Mg==",
                "text": "@dommarker"
            },
            images: [
                "assets/img/Marker/1.jpg",
                "assets/img/Marker/2.jpg",
                "assets/img/Marker/3.jpg",
                "assets/img/Marker/4.jpg",
                "assets/img/Marker/5.jpg",
                "assets/img/Marker/6.jpg",
                "assets/img/Marker/7.jpg",
            ]
        },
        {
            "number": 17,
            "title": "Mykola Maychyk, 25",
            "description": "Originally from Lviv, Mykola Maychyk grew up in a family of artists: his grandfather was a composer and his grandmother a classical vocalist. He works in fashion photography, with a portfolio that includes assignments for Vogue Ukraine, Vogue CS, and Cultnaked. His evocative photograph Brothers, from the series Seven Stories of a Diverse Group of Youngsters (2023), is dedicated to Ukrainian youth.",
            "instagram": {
                "url": "https://www.instagram.com/maychykm?igsh=MW5kMHgyajBpM2I0MQ==",
                "text": "@maychykm"
            },
            images: [
                "assets/img/Maychyk/1.jpg",
                "assets/img/Maychyk/2.jpg",
                "assets/img/Maychyk/3.jpg",
                "assets/img/Maychyk/4.jpg",
                "assets/img/Maychyk/5.jpg",
            ]
        },
        {
            "number": 18,
            "title": "Yegor Parker, 28",
            "description": "Originally from the now-occupied city of Melitopol, photographer Yegor Parker focuses on the cultural heritage of Ukrainian cities, street life, and psychology of being. He works in documentary and fashion photography; his portfolio includes shoots for Self Service Magazine, Jimmy Choo and Carhartt. His work Guardian Angel, shot in Dnipro in 2022, evokes the image of a mother as a symbol of boundless love, protection, and strength, powerful enough to stop wars.",
            "instagram": {
                "url": "https://www.instagram.com/yegorparker?igsh=MXQ1ZGtoMDBidTJsdQ==",
                "text": "@yegorparker"
            },
            images: [
                "assets/img/Parker/1.jpg",
                "assets/img/Parker/2.jpg",
                "assets/img/Parker/3.jpg",
                "assets/img/Parker/4.jpg",
                "assets/img/Parker/5.jpg",
                "assets/img/Parker/6.jpg",
                "assets/img/Parker/7.jpg",
            ]
        },
        {
            "number": 19,
            "title": "Anatoliy Petchenko, 28",
            "description": "Born in what is now the occupied Luhansk region, Anatoliy Petchenko lives and works in Kyiv. His practice includes staged street shots with unpredictable context. His works Raincoat (2025) and Forgotten T-shirt (2025) are part of the upcoming documentary project capturing the unhurried routines of Kyiv’s fishermen, a symbol of stability in a world falling apart.",
            "instagram": {
                "url": "https://www.instagram.com/tolik_petchenko?igsh=MTZyanVscTJ2OWtmcw==",
                "text": "@tolik_petchenko"
            },
            images: [
                "assets/img/Petchenko/1.jpg",
                "assets/img/Petchenko/2.jpg",
                "assets/img/Petchenko/3.jpg",
                "assets/img/Petchenko/4.jpg",
                "assets/img/Petchenko/5.jpg",
                "assets/img/Petchenko/6.jpg",
            ]
        },
        {
            "number": 20,
            "title": "Kristina Podobed, 31",
            "description": "Born in Odesa, Kristina Podobed now lives in Paris. She began taking pictures in 2011, initially turning the camera on herself and her friends as a way to overcome shyness and explore the theme of the female body. Over time, her intimate work, which combines poetic tenderness with severe frankness, was featured in Vogue Ukraine as well as in galleries and museums across Germany, France, the Czech Republic, and Australia. <br><br>Her photograph Empty Vessel, from the series Crashed Heaven (2019), is dedicated, in the artist’s words, to “the feeling of what is yet to come.”",
            "instagram": {
                "url": "https://www.instagram.com/kristinapodobed/",
                "text": "@kristinapodobed"
            },
            images: [
                "assets/img/Podobed/1.jpg",
                "assets/img/Podobed/2.jpg",
                "assets/img/Podobed/3.jpg",
                "assets/img/Podobed/4.jpg",
                "assets/img/Podobed/5.jpg",
            ]
        },
        {
            "number": 21,
            "title": "Oleksiy Ponomaryov, 35",
            "description": "A self-taught photographer and trained architect, Oleksiy Ponomaryov is known for his delicate use of light and focus on social topics. His photographs Photo 8 (2025) and Photo 1 (2024) address global warming through the metaphor of red light — a warning signal from nature to humanity. “By illuminating trees and landscapes in red,” he explains, “I create images that recall the ecological crisis unfolding before our eyes.”",
            "instagram": {
                "url": "https://www.instagram.com/pnmrvalexey/",
                "text": "@pnmrvalexey"
            },
            images: [
                "assets/img/Ponomaryov/1.jpg",
                "assets/img/Ponomaryov/2.jpg",
                "assets/img/Ponomaryov/3.jpg",
                "assets/img/Ponomaryov/4.jpg",
            ]
        },
        {
            "number": 22,
            "title": "Alina Prisich, 27",
            "award": "Breakthrough of the Year",
            "description": "Originally from Russian-occupied Luhansk, Alina Prisich now lives and works in Kyiv. Her photographs, marked by a childlike spontaneity, explore the marginal beauty and raw sincerity of everyday eclectic life. She works in a documentary mode—not as a reporter, but as an artist exploring the significance of the ordinary.<br><br>Her work from the series Tatko (Dad, 2022), shot in the Carpathian village of Verkhovyna, examines the delicate balance between childhood and adulthood, tenderness and strength. A father’s gesture of placing his hand on his daughter’s head recalls a protective veil—a sign of care and shelter. This image symbolizes the experience of an entire generation of children whose parents are now called to defend their homes and country from the Russian invasion.",
            "instagram": {
                "url": "https://www.instagram.com/alinaprisich?igsh=MWNtNTZ3MHR0NDVsdg==",
                "text": "@alinaprisich"
            },
            images: [
                "assets/img/Prisich/1.jpg",
                "assets/img/Prisich/2.jpg",
                "assets/img/Prisich/3.jpg",
                "assets/img/Prisich/4.jpg",
                "assets/img/Prisich/5.jpg",
            ]
        },
        {
            "number": 23,
            "title": "Julie Poly, 38",
            "description": "Born in Stakhanov (now Kadiivka) in the Luhansk region—currently under Russian occupation — Julie Poly studied in Kharkiv; she now lives and works in Berlin. Her signature style was shaped by the Kharkiv school of photography, renowned for its raw, documentary gaze. In 2021, she launched the art zine Hrishnytsia (The Temptress), an exploration of erotic photography and visual art. Her portfolio includes collaborations with Vogue, Dazed, i-D, and Numéro.<br><br>In this show, Poly presents a work from her series Scrolling Through Violence (2024), a photographic project born from conversations at language courses in Germany, where participants from Iran, Ecuador, Afghanistan, and Ukraine came together. Created in collaboration with artist Yanina Zeis and art director Angel Velluto, the series explores how amid loss people envision their future and adapt to new realities.",
            "instagram": {
                "url": "https://www.instagram.com/julie_poly?igsh=bDR4MHlia3hvcmcz",
                "text": "@julie_poly"
            },
            images: [
                "assets/img/Poly/1.jpg",
                "assets/img/Poly/2.jpg",
                "assets/img/Poly/3.jpg",
                "assets/img/Poly/4.jpg",
                "assets/img/Poly/5.jpg",
                "assets/img/Poly/6.jpg",
            ]
        },
        {
            "number": 24,
            "title": "Viacheslav Poliakov, 39",
            "description": "Photographer and designer from Kherson (now a frontline city in southern Ukraine), Viacheslav Poliakov lives in Lviv. His photographic practice has been strongly influenced by his work in graphic design. He explores human-made objects and spaces, as well as the historical context of urban landscapes. Poliakov is a finalist of several international photography competitions, including Foam Talents (Netherlands), Vienna Photobook Festival (Austria), and the Grand Prix Fotofestiwal (Poland). His work has been published in the British Journal of Photography, The Washington Post, and Foam Magazine.<br><br>At the exhibition, his piece Collage, series ı.|.ı (2022) is featured—a vivid, kaleidoscopic image that blends urban landscapes with colorful fragments of plastic.",
            "instagram": {
                "url": "https://www.instagram.com/viacheslav.poliakov/",
                "text": "@viacheslav.poliakov"
            },
            images: [
                "assets/img/Poliakov/1.jpg",
                "assets/img/Poliakov/2.jpg",
                "assets/img/Poliakov/3.jpg",
                "assets/img/Poliakov/4.jpg",
                "assets/img/Poliakov/5.jpg",
                "assets/img/Poliakov/6.jpg",
            ]
        },
        {
            "number": 25,
            "title": "Irina Shkoda, 40",
            "description": "Irina Shkoda lives and works in Paris, where she is pursuing a master’s degree in Arts, Literature, and Language at EHESS and studying Fine Arts at the Sorbonne. Her practice engages with themes of the sacred, otherness, and taboo.<br><br>Her work from the series Untitled, part of I Am Here for You (2024), reflects on the artist’s personal experience of emigration. Drawing on philosopher Jacques Derrida’s concept of hospitality, Shkoda also examines the dynamics of power and the hidden forms of violence embedded within it.",
            "instagram": {
                "url": "https://www.instagram.com/penitentsinner?igsh=c3lxMDB1ZG01Z2t6",
                "text": "@penitentsinner"
            },
            images: [
                "assets/img/Shkoda/1.jpg",
                "assets/img/Shkoda/2.jpg",
                "assets/img/Shkoda/3.jpg",
                "assets/img/Shkoda/4.jpg",
                "assets/img/Shkoda/5.jpg",
                "assets/img/Shkoda/6.jpg",
                "assets/img/Shkoda/7.jpg",
            ]
        },
        {
            "number": 26,
            "title": "Elena Subach, 44",
            "award": "Jury’s Choice",
            "description": "Before turning to photography in 2013, Lviv-based photographer Elena Subach earned a master’s degree in economics. She names her grandfather, Petro Lytvyn — a painter and iconographer — among biggest influences. Subach participated in both group and solo exhibitions in Rome, Berlin, London, Warsaw and Lviv. Her works are in the permanent collections of the Victoria and Albert Museum in London and the Neues Museum in Nuremberg.<br><br>In her practice, Subach questions religion and tradition, and dissects the legacy of the Soviet colonial past. Her work from the series Grandmothers on the Edge of Heaven (2019) is a portrait of an elderly Ukrainian woman photographed during a religious celebration. Using collage, the artist transports her subject into a hyperreal setting—a seaside at sunset. Subach explores the fragility of human existence and the widening generational divide, made ever more tangible by the rise of digital technologies. Another work in the show is from her series Chairs at the Border (2022), taken at the Slovak–Ukrainian border in February – March 2022, where Subach volunteered.",
            "instagram": {
                "url": "https://www.instagram.com/elenasubach?igsh=OHNpdmY4NjF3NzQ=",
                "text": "@elenasubach"
            },
            images: [
                "assets/img/Subach/2.jpg",
                "assets/img/Subach/3.jpg",
                "assets/img/Subach/4.jpg",
                "assets/img/Subach/5.jpg",
                "assets/img/Subach/7.jpg",
            ]
        },
        {
            "number": 27,
            "title": "Tania Shcheglova, 36",
            "description": "A part of the renowned art duo Synchrodogs, Tania Shcheglova started her solo practice in photography in 2023. She specializes in the genre of “inner world portraiture.” As part of Synchrodogs, she was nominated for the PinchukArtCentre Prize (2013) and named Best Fine Art Photographer in the Vogue Talent contest (Milan, Italy, 2016). The duo’s works have been exhibited at the Museum of Fine Arts (Boston), Guy Hepner Gallery (New York), Palais de Tokyo (Paris), and Somos Gallery (Berlin), and published in Esquire, Numéro, The Wall Street Journal, Vogue, and British Journal of Photography. In 2020, Louis Vuitton Editions released the book Ukraine Par Synchrodogs—Fashion Eye, dedicated to Ukrainian landscapes.<br><br>At the exhibition, Shcheglova presents two works from her series Innerland—a collection of portraits of creative people from around the world.",
            "instagram": {
                "url": "https://www.instagram.com/synchrodogs_official/",
                "text": "@synchrodogs_official"
            },
            images: [
                "assets/img/Synchrodogs/1.jpg",
                "assets/img/Synchrodogs/2.jpg",
                "assets/img/Synchrodogs/3.jpg",
                "assets/img/Synchrodogs/4.jpg",
                "assets/img/Synchrodogs/5.jpg",
                "assets/img/Synchrodogs/6.jpg",
                "assets/img/Synchrodogs/7.jpg",
            ]
        },
        {
            "number": 28,
            "title": "Daria Svertilova, 29",
            "description": "Originally from Odesa, Daria Svertilova lives and works between Kyiv and Paris, where she graduated in 2023 from the prestigious École des Arts Décoratifs. Her sensitive and insightful work focuses on the dialogue between past and present, with a particular emphasis on Ukrainian youth shaped by more than a decade of war. Svertilova’s work was exhibited at La Villette (Paris), Open Eye Gallery (Liverpool), Hangar (Brussels), and Mystetskyi Arsenal (Kyiv). Last year, she became a finalist at the renowned International Festival of Fashion, Photography and Accessories in Hyères, France.<br><br>At the FUTURESPECTIVE exhibition, Svertilova presents a work from her series Temporary Home, created in Kyiv between 2021 and 2023. The project explores student dormitories in the Ukrainian capital — symbolic spaces echoing the transition from adolescence to adulthood.",
            "instagram": {
                "url": "https://www.instagram.com/svertilova?igsh=MTRlemp5bnZveWh4Zg==",
                "text": "@svertilova"
            },
            images: [
                "assets/img/Svertilova/1.jpg",
                "assets/img/Svertilova/2.jpg",
                "assets/img/Svertilova/3.jpg",
                "assets/img/Svertilova/4.jpg",
                "assets/img/Svertilova/5.jpg",
                "assets/img/Svertilova/6.jpg",
                "assets/img/Svertilova/7.jpg",
            ]
        },
        {
            "number": 29,
            "title": "Anya Tsaruk, 27",
            "description": "Khmelnytskyi-born Anya Tsaruk examines identity, community, migration, and trauma. Her work “Sandbags in Front of the Church of the Holy Eucharist in Lviv” is part of the ongoing series “I Hope Your Family is Safe”. In this project, the photographer, who has lived in Berlin for the past ten years, documents the life of her homeland in the midst of war. Tsaruk's work offers a tender and deeply sensitive perspective on contemporary Ukraine.",
            "instagram": {
                "url": "https://www.instagram.com/anyatsaruuk/",
                "text": "@anyatsaruuk"
            },
            images: [
                "assets/img/Tsaruk/1.jpg",
                "assets/img/Tsaruk/2.jpg",
                "assets/img/Tsaruk/3.jpg",
                "assets/img/Tsaruk/4.jpg",
                "assets/img/Tsaruk/5.jpg",
            ]
        },
        {
            "number": 30,
            "title": "Daniel Vaysberg, 29",
            "description": "Born in Kharkiv, Daniel Vaysberg is based in Berlin since 2019. His photographic practice blends documentary style with fashion narratives. He collaborated with brands including Carhartt, Supreme, and Mercedes-Maybach. In 2022, he published the photobook 2Live (Shima Press), which explores life on the outskirts of major cities. His series Archive (2022–2024) was shot in the suburbs of both Kharkiv and Berlin. Having grown up in Kharkiv’s Saltivka—the largest residential district in Europe— Vaysberg reflects on how far one can move beyond the environment in which one was raised.",
            "instagram": {
                "url": "https://www.instagram.com/danielvaysberg/",
                "text": "@danielvaysberg"
            },
            images: [
                "assets/img/Vaysberg/1.jpg",
                "assets/img/Vaysberg/2.jpg",
                "assets/img/Vaysberg/3.jpg",
                "assets/img/Vaysberg/4.jpg",
                "assets/img/Vaysberg/5.jpg",
                "assets/img/Vaysberg/6.jpg",
            ]
        },
        {
            "number": 31,
            "title": "Vasylyna Vrublevska, 43",
            "description": "The photographer shares her time between Kyiv and Paris. Her practice moves fluidly between fashion, portrait, and reportage photography, often tracing themes of memory, roots and identity. In 2022 she started working on a series of abstract works, The Garden of Nothing. Its title refers to the biblical story of expulsion from Eden, while the project itself is a visual study of an environment under the destructive pressure of war. It was shown at the Tripolar exhibition in Paris and published in the Ukrainian Vogue in 2023. Vrublevska’s work has been featured in Rolling Stone, Marie Claire, Elle, and Harper’s Bazaar.<br><br>Her photograph Depth II is a richly layered homage to the Black Sea — its force and austerity. Its color palette evokes the blues of the Ukrainian sky and the golden tones of wheat fields, echoing the colors of the national flag.",
            "instagram": {
                "url": "https://www.instagram.com/vasylyna.vrubel/",
                "text": "@vasylyna.vrubel"
            },
            images: [
                "assets/img/Vrublevska/1.jpg",
            ]
        },
        {
            "number": 32,
            "title": "Yan Wasiuchnik",
            "description": "Half Polish, half Ukrainian, Yan Wasiuchnik is best known as a fashion photographer. His portfolio includes collaborations with Balenciaga, Magda Butrym, Ienki Ienki, and Ukrainian, Polish, and Czech and Slovak editions of Vogue. His series Berghain Nostalgia (2019) and Japanese Weeping (2020), shot in Poland and Japan respectively, are an exploration of contemporary masculinity.",
            "instagram": {
                "url": "https://www.instagram.com/maanamman/",
                "text": "@maanamman"
            },
            images: [
                "assets/img/Wasiuchnik/1.jpg",
                "assets/img/Wasiuchnik/2.jpg",
                "assets/img/Wasiuchnik/3.jpg",
                "assets/img/Wasiuchnik/4.jpg",
            ]
        },
        {
            "number": 33,
            "title": "Stephan Lisowski, 29",
            "description": "Trained as a choral conductor, Chernivtsi-born Stephan Lisowski started photography a decade ago and is now considered one of Ukraine’s most sought-after fashion photographers. His portfolio includes publications in Vogue, Harper’s Bazaar, The Sunday Times, and projects for brands such as Zara and Sleeper. Lisowski’s practice centers on exploring the Ukrainian countryside and its “elusive tenderness”—a quality captured in the generous, full-bodied photograph Apples, taken in the town of Vyzhnytsia, Chernivtsi region, near the Romanian border.",
            "instagram": {
                "url": "https://www.instagram.com/stephanlisowski?igsh=ejdhY3pjZ2NidDZ0",
                "text": "@stephanlisowski"
            },
            images: [
                "assets/img/Lisowski/1.jpg",
                "assets/img/Lisowski/2.jpg",
                "assets/img/Lisowski/3.jpg",
                "assets/img/Lisowski/4.jpg",
            ]
        },
        {
            "number": 34,
            "title": "Volodymyr Kaminetsky, 36",
            "description": "Originally from Zaporizhzhia, photographer Volodymyr Kaminetsky moved to Italy at the age of 15. He studied photography at the Rome University of Fine Arts and now lives in London. Kaminetsky primarily works in fashion photography, with projects for international brands including Valentino, Miu Miu, and Ernest W. Baker.<br><br>His work from the series Twins (2024) is a sensual portrait of two young Ukrainian brothers, taken against a carefree backdrop of the Parisian sky—a symbol of light prevailing over darkness.",
            "instagram": {
                "url": "https://www.instagram.com/vladimirkaminetsky?igsh=MTEyczgybnl5cHl3ZA==",
                "text": "@vladimirkaminetsky"
            },
            images: [
                "assets/img/Kaminetsky/1.jpg",
                "assets/img/Kaminetsky/2.jpg",
                "assets/img/Kaminetsky/3.jpg",
                "assets/img/Kaminetsky/4.jpg",
            ]
        },
    ];

    const popUp = document.getElementById("popUp");
    const titleEl = popUp.querySelector(".popUp__title");
    const awardEl = popUp.querySelector(".popUp__award");
    const descEl = popUp.querySelector(".popUp__description");
    const instagramEl = popUp.querySelector(".popUp__instagram");
    const closeBtn = popUp.querySelector(".popUp__close");
    const imagesEl = popUp.querySelector(".popUp__list");
    const prevBtn = popUp.querySelector(".popUp__scroll.prev");
    const nextBtn = popUp.querySelector(".popUp__scroll.next");

    function updateScrollButtons() {
        prevBtn.style.display = imagesEl.scrollLeft > 0 ? "block" : "none";
        nextBtn.style.display = imagesEl.scrollLeft + imagesEl.clientWidth < imagesEl.scrollWidth ? "block" : "none";
    }

    prevBtn.addEventListener("click", () => {
        const imgs = imagesEl.querySelectorAll("img");
        if (!imgs.length) return;
        let scrollPos = imagesEl.scrollLeft;
        for (let i = imgs.length - 1; i >= 0; i--) {
            if (imgs[i].offsetLeft < scrollPos) {
                imagesEl.scrollTo({ left: imgs[i].offsetLeft, behavior: "smooth" });
                break;
            }
        }
    });

    nextBtn.addEventListener("click", () => {
        const imgs = imagesEl.querySelectorAll("img");
        if (!imgs.length) return;
        let scrollPos = imagesEl.scrollLeft;
        for (let i = 0; i < imgs.length; i++) {
            if (imgs[i].offsetLeft > scrollPos) {
                imagesEl.scrollTo({ left: imgs[i].offsetLeft, behavior: "smooth" });
                break;
            }
        }
    });

    imagesEl.addEventListener("scroll", updateScrollButtons);

    function openPopUp(person) {
        titleEl.textContent = person.title;
        descEl.innerHTML = person.description;
        if (person.award) {
            awardEl.textContent = person.award;
            awardEl.style.display = "block";
        } else {
            awardEl.textContent = "";
            awardEl.style.display = "none";
        }
        if (person.instagram && person.instagram.url) {
            instagramEl.href = person.instagram.url;
            instagramEl.textContent = person.instagram.text || "Instagram";
            instagramEl.style.display = "inline-block";
        } else {
            instagramEl.href = "";
            instagramEl.textContent = "";
            instagramEl.style.display = "none";
        }
        imagesEl.innerHTML = "";
        if (person.images && person.images.length > 0) {
            person.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                img.alt = person.title;
                img.classList.add("popUp__img");
                img.onload = () => { img.style.display = 'block'; img.style.opacity = 1; };
                imagesEl.appendChild(img);
            });
        }
        popUp.classList.add("active");
        document.body.classList.add("modal-open");
        imagesEl.scrollLeft = 0;
        updateScrollButtons();
        history.pushState({ person: person.number }, "", `${window.location.pathname}?person=${person.number}`);
    }

    function closePopUp() {
        popUp.classList.remove("active");
        document.body.classList.remove("modal-open");
        imagesEl.scrollLeft = 0;
        updateScrollButtons();
        history.pushState({}, "", window.location.pathname);
    }

    closeBtn.addEventListener("click", closePopUp);
    popUp.addEventListener("click", e => { if (e.target === popUp) closePopUp(); });

    window.addEventListener("popstate", e => {
        if (e.state && e.state.person) {
            const person = people.find(p => p.number === e.state.person);
            if (person) openPopUp(person);
        } else closePopUp();
    });

    window.addEventListener("load", () => {
        const params = new URLSearchParams(window.location.search);
        const personNum = parseInt(params.get("person"), 10);
        if (personNum) {
            const person = people.find(p => p.number === personNum);
            if (person) openPopUp(person);
        }
    });

    const setImages = () => {
        const listItems = document.querySelectorAll('.main__list div');
        const images = document.querySelectorAll('.images img');
        const mainList = document.querySelector('.main__list');
        const header = document.querySelector('.header');
        const footer = document.querySelector('.footer');

        if (window.innerWidth >= 1280) {
            listItems.forEach(item => {
                let timers = [];
                item.addEventListener('mouseenter', () => showImages(item, images, mainList, header, footer, timers));
                item.addEventListener('mouseleave', () => hideImages(item, images, timers));
                item.addEventListener('click', () => {
                    const num = item.dataset.number;
                    const person = people.find(p => p.number === parseInt(num, 10));
                    if (person) openPopUp(person);
                });
            });
        } else {
            let activeBlock = null;
            let timers = [];
            listItems.forEach(item => {
                item.addEventListener('click', e => {
                    e.stopPropagation();
                    const num = item.dataset.number;
                    const imgs = Array.from(images).filter(img => img.dataset.number === num).slice(0, 5);
                    if (!imgs.length) return;
                    if (popUp.classList.contains('active')) return;
                    if (activeBlock && activeBlock !== item) {
                        images.forEach(img => img.style.display = 'none');
                        listItems.forEach(i => i.style.color = '');
                        timers.forEach(timer => clearTimeout(timer));
                        timers = [];
                        activeBlock = null;
                    }
                    if (activeBlock === item) {
                        const person = people.find(p => p.number === parseInt(num, 10));
                        if (person) openPopUp(person);
                        images.forEach(img => img.style.display = 'none');
                        listItems.forEach(i => i.style.color = '');
                        timers.forEach(timer => clearTimeout(timer));
                        timers = [];
                        activeBlock = null;
                        return;
                    }
                    activeBlock = item;
                    listItems.forEach(i => i.style.color = '');
                    item.style.color = '#99CA3D';
                    showMobileImages(imgs);
                });
            });

            document.addEventListener('click', () => {
                if (activeBlock) {
                    images.forEach(img => img.style.display = 'none');
                    listItems.forEach(i => i.style.color = '');
                    timers.forEach(timer => clearTimeout(timer));
                    timers = [];
                    activeBlock = null;
                }
            });

            function showMobileImages(imgs) {
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                const forbiddenRects = [mainList];
                if (header) forbiddenRects.push(header);
                if (footer) forbiddenRects.push(footer);
                document.querySelectorAll('.main__list div').forEach(div => forbiddenRects.push(div));
                const forbiddenBounds = forbiddenRects.map(el => el.getBoundingClientRect());
                const usedRects = [];

                imgs.forEach(img => {
                    let size = Math.min(180, viewportWidth / 2.2);
                    size = Math.max(size, 100);
                    let placed = false;
                    let attempts = 0;

                    while (!placed && size >= 40) {
                        attempts++;
                        const x = Math.random() * (viewportWidth - size);
                        const y = Math.random() * (viewportHeight - size);
                        const rectImg = { x, y, width: size, height: size };
                        const overlapsForbidden = forbiddenBounds.some(fb => rectsOverlap(rectImg, fb));
                        const overlapsOther = usedRects.some(r => rectsOverlapExpanded(rectImg, r, 10));

                        if (!overlapsForbidden && !overlapsOther) {
                            const scale = 1.2 + Math.random() * 0.6;
                            img.style.display = 'block';
                            img.style.opacity = 1;
                            img.style.transform = `rotate(0deg) scale(${scale})`;
                            img.style.position = 'fixed';
                            img.style.maxWidth = size + 'px';
                            img.style.maxHeight = size + 'px';
                            img.style.left = x + 'px';
                            img.style.top = y + 'px';
                            img.style.pointerEvents = 'none';
                            img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                            usedRects.push(rectImg);
                            placed = true;
                        }

                        if (!placed && attempts >= 50) {
                            size -= 10;
                            attempts = 0;
                        }
                    }

                    if (!placed) img.style.display = 'none';
                });
            }
        }

        function showImages(item, images, mainList, header, footer, timers) {
            const forbiddenRects = [mainList];
            if (header) forbiddenRects.push(header);
            if (footer) forbiddenRects.push(footer);
            document.querySelectorAll('.main__list div').forEach(div => forbiddenRects.push(div));
            const forbiddenBounds = forbiddenRects.map(el => el.getBoundingClientRect());

            const num = item.dataset.number;
            let imgs = Array.from(images).filter(img => img.dataset.number === num);
            if (!imgs.length) return;

            shuffleArray(imgs);
            imgs = imgs.slice(0, Math.min(imgs.length, 5));

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            const minSize = 100;
            const maxSize = 350;
            const margin = 10;
            const gridStep = 20;
            const usedRects = [];

            imgs.forEach((img, index) => {
                const timer = setTimeout(() => {
                    let cellSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
                    let placed = false;

                    while (!placed && cellSize >= minSize) {
                        const positions = [];
                        for (let x = margin; x <= viewportWidth - cellSize - margin; x += gridStep) {
                            for (let y = margin; y <= viewportHeight - cellSize - margin; y += gridStep) {
                                positions.push({ x, y });
                            }
                        }
                        shuffleArray(positions);

                        for (let pos of positions) {
                            const rect = { x: pos.x, y: pos.y, width: cellSize, height: cellSize };
                            const overlapsForbidden = forbiddenBounds.some(fb => rectsOverlap(rect, fb));
                            const overlapsOther = usedRects.some(r => rectsOverlapExpanded(rect, r, 20));

                            if (!overlapsForbidden && !overlapsOther) {
                                img.style.display = 'block';
                                img.style.opacity = 1;
                                img.style.transform = 'rotate(0deg) scale(1)';
                                img.style.position = 'fixed';
                                img.style.maxWidth = cellSize + 'px';
                                img.style.maxHeight = cellSize + 'px';
                                img.style.left = pos.x + 'px';
                                img.style.top = pos.y + 'px';
                                img.style.pointerEvents = 'none';
                                img.style.transition = 'opacity 0.3s ease';
                                usedRects.push({ x: pos.x, y: pos.y, width: cellSize, height: cellSize });
                                placed = true;
                                break;
                            }
                        }
                        if (!placed) cellSize -= 20;
                    }
                }, index * 150);
                timers.push(timer);
            });
        }

        function hideImages(item, images, timers) {
            timers.forEach(timer => clearTimeout(timer));
            timers = [];
            images.forEach(img => {
                if (img.dataset.number === item.dataset.number) {
                    img.style.opacity = 0;
                    setTimeout(() => img.style.display = 'none', 300);
                }
            });
        }

        function rectsOverlap(r1, r2) {
            return !(r1.x + r1.width < r2.left || r1.x > r2.right || r1.y + r1.height < r2.top || r1.y > r2.bottom);
        }

        function rectsOverlapExpanded(r1, r2, padding = 0) {
            return !(r1.x + r1.width + padding < r2.x || r1.x > r2.x + r2.width + padding || r1.y + r1.height + padding < r2.y || r1.y > r2.y + r2.height + padding);
        }

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    };

    setImages();
});