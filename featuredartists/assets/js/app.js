document.addEventListener("DOMContentLoaded", () => {
    const people = [
        {
            "number": 1,
            "title": "Владислав Андрієвський, 29 років",
            "description": "Киянин Владислав Андрієвський досліджує динамічну молодіжну культуру Києва.Його роботи були представлені на міжнародних виставках у Парижі, Нью-Йорку й Чикаго, публікувалися в Dazed та British Journal of Photography.У 2024 році в українському видавництві Syntax вийшла фотокнига District, що занурює глядача в атмосферу київських районів: досліджує їхню архітектуру, ритм життя та молодіжні спільноти, сформовані в цих просторах.<br><br>На виставці FUTURESPECTIVE представлено символічний кадр “Янгол Києва” (2019), знятий на Майдані Незалежності, головній площі української столиці.",
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
            "title": "Вік Бакін, 40 років",
            "award": "«Особливий погляд», спеціальна відзнака від KERNEL — провідного світового виробника й експортера соняшникової олії та зернових",
            "description": "У фокусі уваги київського фотографа-самоука Віка Бакіна — українська молодь, особливо квір-спільнота та представники субкультур. Його чуттєві й меланхолійні роботи були представлені на виставках в Україні, Франції, Німеччині, Нідерландах, Великій Британії,Марокко, Австралії та США, публікувались у The Guardian, British Journal of Photography, DUST і Vogue Ukraine.<br><br>Серія “Епітом” (2023) поєднує фотографії з архіву митця із зображеннями, знятими на Київщині після її звільнення у 2022 році. Усі світлини надруковані в імпровізованій темній кімнаті в квартирі Бакіна. В сукупності портрети молоді й зображення понівечених ворогом будівель створюють особисту візуальну поему, що досліджує теми крихкості, краси, маскулінності й невизначеності.",
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
            "title": "Льоша Березовський, 34 роки",
            "description": "Народився й виріс в Новоайдарі на Луганщині. Досліджує відносини між людиною й природою, зокрема роль людських артефактів у навколишньому середовищі; також відомий як документаліст молодої рейв-культури в Україні. Роботи автора публікувалися в Vogue Ukraine, i-D, ZEIT Magazin, Monocle, Le Monde та Dazed. На виставці преставлені роботи Brotherhood (Cxema) (2018) та A Guy with Braces (Cxema) (2018), які зображують учасників популярних київських рейвів CXEMA і є частиною документального проєкту автора про нічне життя української столиці.",
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
            "title": "Мішка Бочкарьов, 36 років",
            "description": "Мешканець міста Кременчук в центрі України, Мішка Бочкарьов поєднує в своїй творчості жанр “брутального реалізму” з модною фотографією. У його портфоліо - знімання для бренду Diesel, видань Dazed і Vice. На виставці представлені дві його роботи: “Саша і репродукція картини «Жито» в її помешканні” та “Коротке замикання”. Це фрагменти триптиха “Переродження травми” (2020–2021), портрета молодої дівчини Саші, що був знятий у звичайній київський квартирі й поєднує тонку інтимність і брутальну буденність.",
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
            "title": "Аня Брудна, 33 роки",
            "description": "Народилася в Ялті, нині окупованому Криму; мешкає в Парижі. Працює у сфері модної фотографії, зокрема знімала обкладинки для Vogue Ukraine та Vogue Netherlands. У своїх персональних серіях, для яких характерна особлива документальна чутливість, фотографка розмірковує про сьогодення й майбутнє країни, охопленої війною.<br/><br/>“Сергій та Олег” (2023) — портрет чоловіка, який зараз служить у Національній гвардії України, та його новонародженого сина. До повномасштабного  вторгнення Сергій працював моделлю, але, як і багато українців, відмовився від попереднього життя на користь майбутнього, в якому його син зможе жити у вільній мирній країні.",
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
            "title": "Алекс Бланко, 37 років",
            "description": "Одеситка Алекс Бланко мешкає в Нідерландах, вивчала фотографію в Королівській академії мистецтв у Гаазі. На виставці можна побачити її світлини з чуттєвої серії Meat, Fish & Aubergine Caviar (2021) - про стосунки Бланко з батьками та її рідну Одесу. Роботи досліджують процес приготування та спільного споживання їжі як глибинну українську традицію.",
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
            "title": "Назар Фурик, 30 років",
            "description": "Художник, фотожурналіст, живе й працює у Києві. Фурик досліджує діалог між повсякденними предметами й довкіллям — фіксуючи природні явища, взаємодію людини з ними та трансформацію міських просторів. Також документує руйнівні наслідки війни для людей і ландшафтів. Є учасником багатьох міжнародних виставок - у галереях Stills, Centre for Photography в Едінбурзі, Open Eye Gallery в Ліверпулі, Будинку фотографії Deichtorhallen Hamburg в Гамбурзі.<br/><br/>На виставці представлені роботи з серії Edited ( 2018–2020) - експерименти фотографа з пейзажною фотографією, зняті у передмісті Києва.",
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
            "title": "Єгор Гущін, 37 років",
            "description": "Харків’янин Єгор Гущін почав знімати у 2023 році; працює здебільшого з аналоговою фотографією. Його роботи експонувались у галереях Львова, Харкова та Києва. Сюрреалістична робота з серії “Молоко сновидінь” (2024) досліджує межу між реальністю й мрією: фотограф зазнімкував власну руку у променях зимового сонця, на зображення якої наклав кадр із програми про надприродне.",
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
            "title": "Артем Гумілевський, 39",
            "description": "Інженер за освітою, Гумілевський почав займатися фотомистецтвом в 2019 році. Є представником Миколаївської школі фотографії. У його концептуальних автопортретах  іронія поєднується з декоративністю. Лауреат Global Peace Photo Award (Австрія, 2022), номінант PinchukArtCentre Prize (Україна, 2022).<br/><br/>Роботи з серії “Нова Релігія” (2023) зняті в одному з сіл на Миколаївщині. Вони фіксують проникнення гаджетів у щоденне життя селян та досліджують соціальні медіа як нову форму культу.",
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
            "title": "Вадим Івченко, 21 рік",
            "description": "Зараз мешкає в Бельгії, де навчається фотографії в Королівській академії образотворчих мистецтв в Антверпені. У своїй практиці звертається до тем біженства, пам'яті та пошуку приналежності через інтимні спостереження за повсякденним життям. Роботи з серії Bitte Berühren (“Будь ласка, торкніться”) (2025) фіксують буденність берлінської архітектури й нагадують абстрактний живопис.",
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
            "title": "Юрко Калічак, 35 років",
            "description": "Фотограф, співзасновник модельної агенції BG Management, Юрко Калічак мешкає у Львові. Відомий насамперед роботою в сфері модної фотографії – у портфоліо Юрка знімання для українського й чехословацького Vogue.<br/><br/>Роботи Two Beauties (2024), “Автобус” (2022) та “Максим” (2023) зняті на одеському пляжі та в Дрогобичі, рідному місті фотографа. Автор фіксує буденне українське життя у його повсякденній красі.",
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
            "title": "Ксенія Каргіна, 39 років",
            "description": "Ксенія Каргіна — художниця та фотографка, чия практика знаходиться на перетині абстрактного пейзажу й сучасного мистецтва. Починала з модної фотографії і з 2019 року присвячує свою практику масштабним пейзажам, створеним у віддалених регіонах Гренландії, на Шпіцбергені, в пустелі Атакама, Гімалаях та на Амазонці.<br/><br/>На виставці представлені дві масштабні роботи Ксенії Каргіної - Memoria 8 і Memoria 19 (2023), зняті в Болівії. Це частина проєкту «Голі пейзажі», що об'єднує світлини, зняті на вулканах Чилі, солоних озерах Болівії, в пустелях Чаду та на березі Чорного моря, та досліджує трансформаційну силу краси.",
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
            "title": "Даниїл Котляр, 26 років",
            "description": "Фотограф-самоук родом із Нікополя фокусується на особистих спогадах, сімейному досвіді й традиціях. В циклі 13th January (2021) він досліджував українське традиційне свято Маланка, що відзначають у селах Франківщини та Буковині в українських Карпатах, та місцевий фольклор. У 2023 році ця серія вийшла в лондонсько-паризькому видавництві AYVAN у вигляді фотокниги.<br/><br/>На виставці FUTURESPECTIVE Котляр представляє дві роботи: епічне зображення пам'ятника «Мати Картлі», символа Тбілісі, з серії Somewhere Close, зняте в 2024 році в столиці Грузії; та інтимний та чуттєвий кадр The Day I Fell in Love, зроблений у Києві в 2020-му.",
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
            "title": "Саша Курмаз, 39 років",
            "description": "Міждисциплінарний художник і фотограф родом із Києва, у своїй практиці Саша Курмаз використовує різні медіа: фотографію, відео, перформанс та публічні інтервенції. Його роботи зосереджені на вивченні міського простору, суспільства, відносин між громадянами й державою; також Курмаз досліджує вплив війни на людей і навколишнє середовище. Курмаз - учасник міжнародних виставок, зокрема в Центрі сучасного мистецтва Уяздовського замку (Польща), ZKM Center for Art and Media Karlsruhe (Німеччина), Künstlerhaus Vienna (Австрія), Albertinum – Staatliche Kunstsammlungen Dresden (Німеччина), Латвійському музеї фотографії (Латвія).<br/><br/>Інтимна світлина “Без назви” (2013) є частиною масштабного проєкту Wasted Youth, над яким автор працював в 2009 -2019 роках. Проєкт досліджує час та простір, в якому формувався сам фотограф та його друзі - українська молодь, що народилася за кілька років до розпаду Радянського Союзу і на формування якої припало дві революції й російсько-українська війна.",
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
            "title": "Іра Лупу, 35 років",
            "description": "Народилася і виросла в Одесі, живе в Нью-Йорку. У її практиці метафоричне й мрійливе стикається з жорстоким світом людей; це протистояння, зокрема поняття травми, фотографка досліджує з ретельністю судово-медичного експерта. Іра Лупу — учасниця Manifesta Biennial та Copenhagen Photo Festival, її роботи публікувались у New York Times, The Economist, Vogue, British Journal of Photography, Dazed та i-D.<br/><br/>“Волосся Ксенії” — портрет внутрішньо переміщеної особи, студентки Ксенії із Запоріжжя, знятий у місті Васильків Київської області: тут знаходиться військова база, яка часто зазнає російських ударів.",
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
            "title": "Дом Маркер, 35 років",
            "description": "Фотограф родом із Харкова живе між Нью-Йорком і Києвом. Емігрував з України в США в 1993 році. Працює з фотографією, відео, інсталяціями. У центрі його уваги – теми ідентичності та культурної пам'яті. Маркер повернувся до України на початку повномасштабного вторгнення у 2022 році, щоб волонтерити у гуманітарних місіях у прифронтових регіонах, та розпочав поточний проєкт, присвячений українській спадщині та опору. У 2024 році став лауреатом премії Charcoal Publishing Prize.<br/><br/>Брутальні роботи з серії Sin Tax (2020-2021) досліджують красу неблагополучних районів американського півдня.",
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
            "title": "Микола Майчик, 25",
            "description": "Львів'янин Микола Майчик виріс у творчій родині: дідусь був композитором, бабуся – академічною вокалісткою. Працює в жанрі модної фотографії: у його портфоліо співпраця з  українським і чеським Vogue та брендом Cultnaked. Чуттєва світлина “Брати” із серії Seven Stories of Diverse Group of Youngsters (2023) присвячена українській молоді.",
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
            "title": "Єгор Паркер, 28 років",
            "description": "У фокусі уваги фотографа родом з нині окупованого Мелітополя - культурна спадщина українських міст, життя вулиць та “психологія буття”. Паркер працює у жанрах документальної й модної фотографії: в його портфоліо - знімання для Jimmy Choo,  Carhartt та Self Service. Робота Guardian Angel, знята в Дніпрі в 2022 році, апелює до образу матері як символу безмежної любові, захисту й сили, яка здатна зупинити навіть війни.",
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
            "title": "Анатолій Петченко, 28 років",
            "description": "Народився в окупованій нині Луганській області, живе й працює в Києві. У своїй практиці Анатолій Петченко поєднує постановочні кадри й непередбачуваний вуличний контекст. Роботи “Дощовик” (2025) та “Забута футболка” (2025) - частина майбутнього документального проєкту митця, який фіксує розмірені будні київських рибалок як символ стабільності посеред світу, що руйнується.",
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
            "title": "Кристина Подобед, 31 рік",
            "description": "Одеситка Кристина Подобед сьогодні мешкає в Парижі. Почала знімати в 2011 році: щоб подолати власний сором і дослідити тему жіночого тіла, фотографувала себе й подруг.  За цей час її чуттєві роботи, в яких поєднуються поетична ніжність та відвертість, можна було побачити на сторінках Vogue Ukraine, а також у галереях та музеях Німеччини, Франції, Чехії й Австралії.  Світлина «Порожня посудина» із серії «Розбитий рай» (2019) присвячена, за словами авторки, передчуттю майбутнього.",
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
            "title": "Олексій Пономарьов, 35 років",
            "description": "Творчості фотографа-самоука, архітектора за освітою Олексія Пономарьова притаманні уважна робота зі світлом і фокус на соціальних темах.<br/><br/>Світлини “Фото 8” (2025) та “Фото 1” (2024) досліджують глобальне потепління через метафору червоного світла — це сигнал тривоги, попередження людству від природи.<br/><br/>“Освітлюючи дерева й ландшафт червоним, я створюю образи, що нагадують про екологічну кризу, яка розгортається на наших очах”.",
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
            "title": "Аліна Прісіч, 27 років",
            "award": "«Відкриття року»",
            "description": "Фотографка родом із нині окупованого Луганська, Аліна живе й працює в Києві. Кадри, зняті з дитячою безпосередністю, досліджують маргінальну красу й щирість еклектичного повсякденного життя. Вона практикує в документальному жанрі — не як репортерка подій, а радше як художниця, яка вміє бачити значуще в буденному.<br/><br/>Робота із серії Tatko (2022), знята в карпатському селі Верховина, досліджує крихку рівновагу між дитинством і дорослістю, ніжністю й силою. Жест батька, що покладає руку на голову доньки, нагадує покров — знак захисту й турботи. Це уособлює досвід цілого покоління дітей, чиї батьки сьогодні змушені захищати свій дім і країну від російського ворога.",
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
            "title": "Джулі Полі, 38 років",
            "description": "Народилась у місті Стаханов (нині Кадіївка) Луганської області, яке зараз окуповане росіянами; навчалась у Харкові; мешкає й працює в Берліні. На її формування значно вплинула Харківська школа фотографії, для якої характерна брутальна документальна оптика. 2021 року Джулі створила артзін «Грішниця», в якому досліджує еротичну фотографію й візуальне мистецтво. Сьогодні у портфоліо мисткині — знімання для Vogue, Dazed, i-D, NUMERO.<br/><br/>На виставці Полі представляє роботу із серії Scrolling Through Violence (2024) — фотопроєкту, народженого під час спілкування на мовних курсах у Німеччині, де зібралися вихідці з різних країн — Ірану, Еквадору, Афганістану та України. У серії, створеній спільно з художницею Яніною Зайс та артдиректором Енджел Веллюто, авторка досліджує, як люди бачать майбутнє в моменти втрат і адаптації до нового життя.",
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
            "title": "В`ячеслав Поляков, 39 років",
            "description": "Фотограф та дизайнер родом з Херсона (нині прифронтове місто на Півдні України), мешкає у Львові. На його фотографічну практику значно вплинула робота у сфері графічного дизайну. Художник досліджує об'єкти й простори, створені людьми, а також історичний фон міських ландшафтів. В’ячеслав – фіналіст міжнародних фотоконкурсів: Foam Talents (Нідерланди), Vienna Photobook Festival (Австрія), Grand Prix Fotofestiwal  (Польща). Його роботи публікувались у British Journal of Photography, The Washington Post та Foam Magazine.<br/><br/>На виставці представлена робота “Колаж, серія ı.|.ı” (2022) – яскраве калейдоскопічне зображення, в якому фотограф поєднує міський пейзаж та кольорові шматки пластику. ",
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
            "title": "Ірина Шкода, 40 років",
            "description": "Живе та працює в Парижі, де здобуває здобуває ступінь магістра мистецтв, літератури та мови в EHESS та навчається образотворчого мистецтва в Сорбонні. У своїй практиці звертається до тем сакрального, інакшості й табу.<br/><br/>Робота із серії “Без назви”, серія I Am Here for You (2024) осмислює власний досвід еміграції фотографки. Авторка звертається до поняття гостинності у трактуванні філософа Жака Дерріди, яке апелює до феноменів влади та прихованого насильства.",
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
            "title": "Елена Субач, 44 роки",
            "award": "«Вибір журі»",
            "description": "Львів’янка Елена Субач почала займатися фотографією у 2013 році. До цього здобула ступінь магістра економіки у Волинському державному університеті. Серед вчителів називає свого дідуся Петра Литвина, який був художником-іконописцем. Групові й індивідуальні виставки Субач проходили у Римі, Варшаві, Берліні, Лондоні, Львові, а роботи зберігаються в колекціях Музею Вікторії й Альберта в Лондоні та Neues Museum у Нюрнберзі. <br/><br/>У своїй мистецькій практиці Елена ставить під сумнів релігію, традиції та препарує наслідки радянського колоніального минулого. Її робота з серії “Бабусі на межі Раю” (2019) — це портрет літньої українки, зазнімкованої під час релігійного свята. За допомогою техніки колажу художниця переміщує героїню у гіперреалістичні декорації — морське узбережжя на заході сонця. Мисткиня досліджує крихкість людського існування і розрив поколінь, дедалі відчутніший з розвитком цифрових технологій. Іще одна робота, представлена на виставці, — із серії “Стільці на кордоні\" (2022), знятої на межі між Україною й Словаччиною в лютому-березні 2022 року, де фотографка була волонтеркою.",
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
            "title": "Таня Щеглова, 36 років",
            "description": "Учасниця відомого мистецького колектива Synchrodogs, яка в 2023 році розпочала сольну практику в галузі художньої фотографії. Спеціалізується на жанрі “портрета внутрішнього світу”. В межах колективу Synchrodogs була номінанткою премії PinchukArtCentre Prize (2013), здобула звання найкращого артфотографа у конкурсі Vogue Talent (Мілан, Італія, 2016); роботи дуету виставлялися в Бостонському музеї образотворчого мистецтва, галереї Guy Hepner (Нью-Йорк), Palais de Tokyo (Париж), Somos Gallery (Берлін); публікувалися в Esquire, Numero, The Wall Street Journal, Vogue, British Journal of Photography. У 2020 році видавництво Louis Vuitton опублікувало книгу Synchrodogs Fashion Eye of Ukraine, присвячену українським пейзажам.<br/><br/>На виставці представлені дві роботи Щеглової з серії «Внутрішня земля» — низки портретів творчих людей з усього світу.",
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
            "title": "Дар’я Свертілова, 29 років",
            "description": "Одеситка Дар’я Свертілова мешкає й працює між Києвом і Парижем, де у 2023 році закінчила престижну École des Arts Décoratifs. Її чуттєві та проникливі роботи присвячені діалогу між минулим і сьогоденням, а її герої здебільшого — українська молодь, на формування та дорослішання якої вплинула війна, що триває вже 11 років. Роботи Свертілової експонувались у виставкових просторах La Villette (Париж), Open Eye Gallery (Ліверпуль), Hangar (Брюссель) та Мистецького Арсеналу (Київ). Торік вона стала фіналісткою престижного міжнародного фестивалю моди й фотографії у французькому Єрі.<br/><br/>На виставці FUTURESPECTIVE Дар’я Свертілова представляє роботу з серії “Тимчасовий дім”, над якою працювала в Києві в 2021–2023 роках. Вона досліджує студентські гуртожитки української столиці — символічний простір переходу з підлітковості в доросле життя. ",
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
            "title": "Аня Царук, 27 років",
            "description": "Хмельничанка Аня Царук досліджує теми ідентичності, спільноти, міграції та травми. Робота “Мішки з піском перед церквою Пресвятої Євхаристії у Львові” – це частина серії “Сподіваюсь, твоя сімʼя в безпеці”. У цьому проєкті фотографка, яка вже 10 років мешкає в Берліні, документує життя своєї Батьківщини під час війни. Твори Царук вирізняються ніжним і чуттєвим поглядом на сучасну Україну.",
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
            "title": "Даніель Вайсберг, 29 років",
            "description": "Народився в Харкові, з 2019 року мешкає в Берліні. У фотографії поєднує документальний підхід з модними сюжетами; співпрацював із брендами Carhartt, Supreme, Mercedes-Maybach. У 2022 році випустив фотокнигу 2Live (Shima Press), яка досліджує життя на околицях великих міст. Роботи із серії Archive (2022–2024) зняті, зокрема, в передмістях Харкова й Берліна. Фотограф, який виріс у найбільшому спальному районі Європи, харківський Салтівці, міркує, наскільки далеко можна піти за межі середовища, в якому виріс.",
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
            "title": "Василина Врублевська, 43 роки",
            "description": "Фотохудожниця мешкає й працює в Києві й Парижі і експериментує з жанрами фешн-фотографії, портрету й репортажу. Врублевська простежує теми коріння, пам'яті й ідентичності, є авторкою абстрактної серії The Garden of Nothing, над якою почала працювати в 2022 році: назва походить від біблійної легенди про вигнання з раю, а сам проєкт є візуальним дослідженням навколишнього середовища, що знаходиться під руйнівним впливом війни. Серія The Garden of Nothing була показана на виставці Tripolar в Парижі в 2022 році. Публікувалась у виданнях Vogue, Rolling Stone, Marie Claire, Elle, Harper’s Bazaar.<br/><br/>Насичена, глибока за своєю структурою світлина “Глибина II” - присвята Чорному морю, його силі й суворості. Колористика роботи символічно відсилає до блакиті українського неба та пшенично-золотих ланів і співзвучна синьо-жовтому національному прапору. ",
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
            "title": "Ян Васючник",
            "description": "Наполовину поляк, наполовину українець, Ян Васючник відомий насамперед як модний фотограф: в його портфоліо співпраця з брендами Balenciaga, Magda Butrym, Ienki Ienki та українскьим, польським та чехословацьким виданнями Vogue. Роботи Васючника з серії Berghain Nostalgia (2019) та Japanese Weeping (2020), зняті відповідно в Польщі та Японії, - ода чоловічій красі й чуттєвості.",
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
            "title": "Степан Лісовський, 29 років",
            "description": "За освітою хоровий диригент, чернівчанин Степан Лісовський почав знімати понад 10 років тому і сьогодні є одним із найзатребуваніших модних фотографів України. У його портфоліо публікації та знімання для міжнародних видань Vogue, Harper’s Bazaar, The Sunday Time і брендів Zara й Sleeper. Творча практика Лісовського зосереджена на досліджені українського села і його “невловимої ніжності”: саме її фіксує щедра і повнотіла світлина “Яблука”, знята у місті Вижниця Чернівецької області на кордоні з Румунією.",
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
            "title": "Володимир Камінецький, 36 років",
            "description": "Фотограф родом із Запоріжжя, в 15 років Володимир Камінецький переїхав до Італії. Навчався в Римському університеті образотворчих мистецтв на факультеті фотографії, зараз мешкає в Лондоні. У доробку Камінецького, який працює здебільшого з фешн-фотографією, — проєкти для міжнародних брендів: Valentino, Miu Miu та Ernest W. Baker.<br/><br/>Робота з серії Twins (2024) — чуттєвий портрет юних братів-українців, знятих на фоні безтурботного паризького неба — символ світла, що переможе темряву.",
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