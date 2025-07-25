import {EQuestionType, ITest} from '../../../shared/models/test.model';

export const constitutionKz: ITest = {
  id: 'constitution-kz',
  title: 'Конституция',
  description: '<p>Конституция сынағы</p>',
  questions: [
    {
      type: EQuestionType.Radio,
      title: 'Мәслихаттардың келісімімен облыстардың, республикалық маңызы бар қалалардың және астананың әкімдерін кім тағайындайды?',
      choices: [
        'ҚР Премьер-Министрі',
        'Мәжіліс Төрағасы',
        'Президенті',
        'Өңірлерге жетекшілік ететін министр'
      ],
      correctAnswer: 'Президенті'
    },
    {
      type: EQuestionType.Radio,
      title: 'Республикадағы мемлекеттік билік қандай тармақтарға бөліну принципі бойынша біртұтас жүзеге асырылады?',
      choices: [
        'заң шығарушы, атқарушы және сот органдарына',
        'заң шығару және сот',
        'заң шығарушы және атқарушы билік болып табылады',
        'заң шығарушы, бақылаушы және сот'
      ],
      correctAnswer: 'заң шығарушы, атқарушы және сот органдарына'
    },
    {
      type: EQuestionType.Radio,
      title: 'Жергілікті өкілді органдарға қай орган жатады?',
      choices: [
        'әкімдік',
        'мәслихат',
        'депутат',
        'министрлік'
      ],
      correctAnswer: 'мәслихат'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының қазіргі Конституциясы қашан қабылданды?',
      choices: [
        '1995 жылғы 30 шілде',
        '1995 жылғы 30 тамыз',
        '30 тамыз 1996 жыл',
        '30 тамыз 1465 жыл'
      ],
      correctAnswer: '1995 жылғы 30 тамыз'
    },
    {
      type: EQuestionType.Radio,
      title: 'Соттар шешімдерінің, үкімдері мен өзге де қаулыларының міндетті күші болады:',
      choices: [
        'тиісті облыс аумағында',
        'республика және шет мемлекеттер аумағында',
        'республиканың барлық аумағында',
        'тиісті облыстың аумағында, Нұр-Сұлтан мен Алматы қаласынан басқа'
      ],
      correctAnswer: 'республиканың барлық аумағында'
    },
    {
      type: EQuestionType.Radio,
      title: 'Ойланыңыз және Президент үкіметтің орнынан түсуі туралы шешімді неше күндік мерзімде қарастыруы тиіс екенін анықтаңыз',
      choices: [
        '10 күндік мерзімде',
        '15 күндік мерзімде',
        '20 күндік мерзімде',
        '30 күндік мерзімде'
      ],
      correctAnswer: '10 күндік мерзімде'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстанның мемлекеттік басқару нысаны?',
      choices: [
        'гуманитарлық мемлекет',
        'федеративтік мемлекет',
        'конфедеративті мемлекет',
        'біртұтас мемлекет'
      ],
      correctAnswer: 'біртұтас мемлекет'
    },
    {
      type: EQuestionType.Radio,
      title: 'ҚР Президенті қызметінен мерзімінен бұрын босатылған немесе кетірілген, сондай-ақ қайтыс болған жағдайда Президенттің өкілеттігі қалған мерзімге кімге көшеді?',
      choices: [
        'Республикасының Премьер-Министріне',
        'Парламент Сенатының Төрағасына',
        'Парламент Мәжілісінің Төрағасына',
        'Жоғарғы Сот Төрағасына'
      ],
      correctAnswer: 'Парламент Сенатының Төрағасына'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президенттің құқығы жоқ:',
      choices: [
        'оқытушылық қызметпен айналысуға',
        'өкілді органның депутаты болуға',
        'ғылыми қызметпен айналысуға',
        'шығармашылық қызметпен айналысуға'
      ],
      correctAnswer: 'өкілді органның депутаты болуға'
    },
    {
      type: EQuestionType.Radio,
      title: 'Мәжілістің 98 депутаты қандай негізде сайланады?',
      choices: [
        'жалпыға бірдей, тең және төте сайлау құқығы негізінде жасырын дауыс беру арқылы',
        'ашық дауыс беру арқылы жалпыға бірдей, тең, төте сайлау құқығы негізінде',
        'жасырын дауыс беру арқылы жанама сайлау құқығы негізінде',
        'ашық дауыс беру кезінде жанама сайлау құқығы негізінде'
      ],
      correctAnswer: 'жалпыға бірдей, тең және төте сайлау құқығы негізінде жасырын дауыс беру арқылы'
    },
    {
      type: EQuestionType.Radio,
      title: 'Парламент депутаты қылмыстық жауапкершілікке тартылуы мүмкін бе?',
      choices: [
        'иә, Президенттің келісімімен',
        'иә, Бас Прокурордың келісімімен',
        'иә, Ішкі істер министрінің келісімімен',
        'иә, Парламенттің тиісті палатасының келісімімен'
      ],
      correctAnswer: 'иә, Парламенттің тиісті палатасының келісімімен'
    },
    {
      type: EQuestionType.Radio,
      title: 'Ерекше назар аударыңыз және Қазақстандағы Жоғары Сот органын атаңыз:',
      choices: [
        'Конституциялық сот',
        'Жоғарғы сот кеңесі',
        'Жоғарғы Сот',
        'Төрелік сот'
      ],
      correctAnswer: 'Жоғарғы Сот'
    },
    {
      type: EQuestionType.Radio,
      title: 'Мемлекеттік органдарда саяси партиялар құруға бола ма?',
      choices: [
        'иә, рұқсат етіледі',
        'құқық қорғау органдарынан басқаларына жол беріледі',
        'облыстық әкімдіктерден басқаларына рұқсат етіледі',
        'жоқ, рұқсат етілмейді'
      ],
      correctAnswer: 'жоқ, рұқсат етілмейді'
    },
    {
      type: EQuestionType.Radio,
      title: 'Сенат депутаттарының қаншасын Президент тағайындайды?',
      choices: [
        '10',
        '12',
        '15',
        '17'
      ],
      correctAnswer: '15'
    },
    {
      type: EQuestionType.Radio,
      title: 'Республикаға қарсы агрессия жасалған не оның қауіпсіздігіне сырттан тікелей қатер төнген ретте Президент республиканың бүкіл аумағында немесе оның жекелеген жерлерінде әскери жағдай енгізеді, ішінара немесе жалпы мобилизация жариялап, дереу кімге хабардар етеді?',
      choices: [
        'ҚР Премьер-Министріне',
        'Парламент',
        'Қорғаныс министріне',
        'Ұлттық қауіпсіздік комитеті төрағасына'
      ],
      correctAnswer: 'Парламент'
    },
    {
      type: EQuestionType.Radio,
      title: 'Саяси партиялар мен кәсіптік одақтардың қызметіне қандай негізде жол берілмейді?',
      choices: [
        'діни негізде',
        'ерікті негізде',
        'жалпы негізде',
        'мүшелік жарна негізінде'
      ],
      correctAnswer: 'діни негізде'
    },
    {
      type: EQuestionType.Radio,
      title: 'Парламентті және Мәжілісті қай кезеңде таратуға болмайды?',
      choices: [
        'төтенше немесе соғыс жағдайы кезеңінде',
        'жазғы демалыс кезеңінде',
        'көктемгі егіс жұмыстары кезеңінде',
        'коронавирустық пандемия кезеңінде'
      ],
      correctAnswer: 'төтенше немесе соғыс жағдайы кезеңінде'
    },
    {
      type: EQuestionType.Radio,
      title: 'Судья сот төрелігін іске асыру кезінде бағынады:',
      choices: [
        'тек Конституция мен заңға',
        'Қазақстан Республикасының Президентіне',
        'Конституциялық Кеңеске',
        'Жоғарғы Сот Төрағасына'
      ],
      correctAnswer: 'тек Конституция мен заңға'
    },
    {
      type: EQuestionType.Radio,
      title: 'Республика азаматтары әскери қызмет атқарады:',
      choices: [
        'заңда белгіленген тәртіппен пен түрлер бойынша',
        'жасына қарамастан міндетті түрде',
        'жынысына қарамастан міндетті түрде',
        'жергілікті атқарушы органмен келісім бойынша'
      ],
      correctAnswer: 'заңда белгіленген тәртіппен пен түрлер бойынша'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасында тұрғын үйден айыруға қандай жағдайларда жол беріледі?',
      choices: [
        'сот шешімі бойынша',
        'прокурордың нұсқауы бойынша',
        'тұрғын үй комиссиясының шешімі бойынша',
        'жол берілмейді'
      ],
      correctAnswer: 'сот шешімі бойынша'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасында азаматтықтан айыруға жол беріледі ме?',
      choices: [
        'террористік қылмыстар жасағаны үшін, сондай-ақ Қазақстан мүдделеріне өзге де ауыр зиян келтіргені үшін соттың шешімімен ғана жол беріледі',
        'ешқандай жағдайда рұқсат етілмейді',
        'Президенттің Премьер-Министрмен келісілген шешімі бойынша жол беріледі',
        'Бас Прокурордың ұсынуы бойынша жол беріледі'
      ],
      correctAnswer: 'террористік қылмыстар жасағаны үшін, сондай-ақ Қазақстан мүдделеріне өзге де ауыр зиян келтіргені үшін соттың шешімімен ғана жол беріледі'
    },
    {
      type: EQuestionType.Radio,
      title: 'Тарихи және мәдени мұраны сақтау туралы қамқорлық дегеніміз:',
      choices: [
        'азаматтардың міндеті',
        'азаматтардың құқығы',
        'азаматтардың қалауы',
        'азаматтардың жауапкершілігі'
      ],
      correctAnswer: 'азаматтардың міндеті'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының Президенті қандай мерзімге сайланады?',
      choices: [
        '4 жылға',
        '5 жылға',
        '6 жылға',
        '7 жылға'
      ],
      correctAnswer: '5 жылға'
    },
    {
      type: EQuestionType.Radio,
      title: '. Тұтқындауға және қамау туралы санкцияны кім береді?',
      choices: [
        'сот',
        'прокурор',
        'тергеуші',
        'адвокат'
      ],
      correctAnswer: 'сот'
    },
    {
      type: EQuestionType.Radio,
      title: 'Конституцияда бекітілген Республиканың ең қымбат қазынасы емес',
      choices: [
        'мемлекет мүдделері',
        'адам өмірі',
        'адам құқықтары',
        'адам бостандығы'
      ],
      correctAnswer: 'мемлекет мүдделері'
    },
    {
      type: EQuestionType.Radio,
      title: 'Бір адам қатарынан қанша рет президент болып сайлана алмайды?',
      choices: [
        '2 реттен артық,',
        '3 реттен артық',
        '4 реттен артық',
        '5 реттен артық'
      ],
      correctAnswer: '2 реттен артық'
    },
    {
      type: EQuestionType.Radio,
      title: '. Президент Бас прокурорды кімнің келісімімен тағайындайды?',
      choices: [
        'Үкіметінің',
        'Парламент Мәжілісінің',
        'Парламент Сенатының',
        'Конституциялық Кеңестің'
      ],
      correctAnswer: 'Парламент Сенатының'
    },
    {
      type: EQuestionType.Radio,
      title: 'Үкімет мүшелері ант береді:',
      choices: [
        'Халық пен Президентке',
        'мемлекет пен Президентке',
        'халық және Конституцияға',
        'Заңның хаты мен рухына'
      ],
      correctAnswer: 'Халық пен Президентке'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президент Үкіметтің құрылымын кімнің ұсынуымен айқындайды?',
      choices: [
        'ҚР Премьер-Министрі',
        'Сенат Төрағасының',
        'Мәжіліс Төрағасының',
        'өзі анықтайды'
      ],
      correctAnswer: 'ҚР Премьер-Министрі'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының егемендігі қамтиды:',
      choices: [
        'оның бүкіл аумағын',
        'жеке облысты',
        'тек дипломатиялық өкілдіктерді',
        'жануарлар мен өсімдіктер әлемін'
      ],
      correctAnswer: 'оның бүкіл аумағын'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президентті қызметінен кетіру туралы мәселе қай органның өкілеттігін мерзімінен бұрын тоқтату туралы мәселені қарау кезеңінде қозғалынбайды?',
      choices: [
        'Республика Парламентінің немесе Мәжілістің',
        'Парламент Сенатының',
        'Үкіметтің',
        'Қауіпсіздік Кеңесінің'
      ],
      correctAnswer: 'Республика Парламентінің немесе Мәжілістің'
    },
    {
      type: EQuestionType.Radio,
      title: 'Республикада мемлекеттік билік біртұтас, ол Конституция мен заңдар негізінде бөліну принципіне сәйкес жүзеге асырылады, осы принцип биліктің қандай тармақтарына бөлінуін білдіреді?',
      choices: [
        'заң шығарушы, атқарушы және сот',
        'заң шығарушы және сот билігі',
        'заңнамалық және атқарушы',
        'заң шығарушы, бақылаушы және сот'
      ],
      correctAnswer: 'заң шығарушы, атқарушы және сот'
    },
    {
      type: EQuestionType.Radio,
      title: 'Үкіметтің құзыреті, ұйымдастыру тәртібі және қызметі анықталады:',
      choices: [
        'Конституциялық заңмен',
        'Президенттің Жарлығымен',
        'Үкіметтің Қаулысымен',
        'Облыс әкімінің өкімімен'
      ],
      correctAnswer: 'Конституциялық заңмен'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының Президенті:',
      choices: [
        'азаматтарға кешірім жасауды жүзеге асырады',
        'Республика Қарулы Күштерінің Жоғарғы Бас қолбасшысы болып табылады',
        'Республиканың азаматтығы, саяси баспана беру мәселелерін шешеді',
        'барлық жауаптар дұрыс'
      ],
      correctAnswer: 'барлық жауаптар дұрыс'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының Парламенті жоғары өкілді орган болып табылады',
      choices: [
        'атқарушы билікті жүзеге асыратын',
        'заң шығарушы билікті жүзеге асыратын',
        'сот билігін жүзеге асыратын',
        'ақпараттық билікті жүзеге асыратын'
      ],
      correctAnswer: 'заң шығарушы билікті жүзеге асыратын'
    },
    {
      type: EQuestionType.Radio,
      title: 'Заң шығару бастамасы құқығы кімге тиесілі?',
      choices: [
        'Президентке',
        'Үкіметке',
        'Парламент депутаттарына',
        'барлық жауаптар дұрыс'
      ],
      correctAnswer: 'барлық жауаптар дұрыс'
    },
    {
      type: EQuestionType.Radio,
      title: 'Сот билігі атынан жүзеге асырылады:',
      choices: [
        'Конституция арқылы',
        'Қазақстан Республикасы арқылы',
        'Қазақстан арқылы',
        'Жоғарғы Сот арқылы'
      ],
      correctAnswer: 'Қазақстан Республикасы арқылы'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президент Премьер-Министрді қызметке тағайындайды:',
      choices: [
        'Парламент Мәжілісінің келісімімен',
        'Парламент Сенатының келісімімен',
        'Парламенттің екі палатасының келісімімен',
        'Конституциялық Кеңестің келісімімен'
      ],
      correctAnswer: 'Парламент Мәжілісінің келісімімен'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қай орган Жоғарғы сот органы болып табылады?',
      choices: [
        'Әскери сот',
        'Жоғарғы сот',
        'Конституциялық сот',
        'Жоғарғы сот кеңесі'
      ],
      correctAnswer: 'Жоғарғы сот'
    },
    {
      type: EQuestionType.Radio,
      title: 'Заңды қолданған кезде судья келесі принциптерді басшылыққа алуы керек:',
      choices: [
        'адамның кінәлі екендігі заңды күшіне енген сот үкімімен танылғанша ол жасалған қылмысқа кінәлі емес деп есептеледі',
        'азаматтың соттылығы оның келісімінсіз өзгертілуі мүмкін',
        'адам бір құқық бұзушылық үшін қайтадан қылмыстық немесе әкімшілік жауапкершілікке тартылуы мүмкін',
        'сотта әркімнің тыңдалуға құқығы жоқ'
      ],
      correctAnswer: 'адамның кінәлі екендігі заңды күшіне енген сот үкімімен танылғанша ол жасалған қылмысқа кінәлі емес деп есептеледі'
    },
    {
      type: EQuestionType.Radio,
      title: 'Сот төрелігінің принциптеріне келесі тұжырым қайшы келеді:',
      choices: [
        'айыпталушы өзінің кінәсіздігін дәлелдеуге міндетті',
        'адамның кінәлі екендігі жөніндегі кез келген күдік айыпталушының пайдасына қарастырылады',
        'сотта әркім өз сөзін тыңдатуға құқылы',
        'өзіне заңмен көзделген соттылығын оның келісімінсіз ешкімнің өзгертуіне болмайды'
      ],
      correctAnswer: 'айыпталушы өзінің кінәсіздігін дәлелдеуге міндетті'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасында қандай меншік танылады және қорғалады?',
      choices: [
        'мемлекеттік және жеке меншік',
        'мемлекеттік және жергілікті меншік',
        'мемлекеттік және әкімшілік меншік',
        'жергілікті және жеке меншік'
      ],
      correctAnswer: 'мемлекеттік және жеке меншік'
    },
    {
      type: EQuestionType.Radio,
      title: 'Жер және оның қойнауы, су көздері, өсімдіктер мен жануарлар дүниесі, басқа да табиғи ресурстар:',
      choices: [
        'жеке меншікте',
        'мемлекет меншігінде',
        'әкімшілік-аумақтық бірліктердің меншігінде',
        'мәслихаттардың меншігінде'
      ],
      correctAnswer: 'мемлекет меншігінде'
    },
    {
      type: EQuestionType.Radio,
      title: 'Үкімет пен өзге де мемлекеттік органдар өздеріне берілген өкілеттіктер шегінде билік жүргізеді:',
      choices: [
        'өз атынан',
        'халық атынан',
        'мемлекет атынан',
        'Президент атынан'
      ],
      correctAnswer: 'мемлекет атынан'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының демократиялық институттарына, оның тәуелсіздігі мен аумақтық тұтастығына, саяси тұрақтылығына, азаматтардың қауіпсіздігіне қатер төнген жағдайда, бүкіл аумақта және оның жекелеген жерлерінде төтенше жағдайдың  енгізілуін қоса алғанда Президент шаралар қолданады:',
      choices: [
        'Премьер-Министрмен және Парламент Палаталарының төрағаларымен ресми консультациялардан кейін',
        'Қорғаныс министрімен ресми консультациялардан кейін',
        'Ұлттық қауіпсіздік комитетінің төрағасымен ресми консультациялардан кейін',
        'Парламент Палаталарының төрағаларымен ресми консультациялардан кейін'
      ],
      correctAnswer: 'Премьер-Министрмен және Парламент Палаталарының төрағаларымен ресми консультациялардан кейін'
    },
    {
      type: EQuestionType.Radio,
      title: 'Қазақстан Республикасының заңдары кім қол қойғаннан кейін күшіне енеді:',
      choices: [
        'ҚР Премьер-Министрі',
        'Сенат Төрағасы',
        'Мәжіліс Төрағасы',
        'Президент'
      ],
      correctAnswer: 'Президент'
    },
    {
      type: EQuestionType.Radio,
      title: 'Үкімет мүшелерінің айналысуға құқығы бар:',
      choices: [
        'оқытушылық, ғылыми немесе өзге де шығармашылық қызметпен',
        'кәсіпкерлік, ғылыми немесе өзге де шығармашылық қызметпен',
        'оқытушылық немесе өзге де коммерциялық қызметпен',
        'бизнес, ғылыми немесе өзге де шығармашылық қызметпен'
      ],
      correctAnswer: 'оқытушылық, ғылыми немесе өзге де шығармашылық қызметпен'
    },
    {
      type: EQuestionType.Radio,
      title: 'Жоғарғы Соттың Төрағасын және судьяларын сайлайды:',
      choices: [
        'Президенттің ұсынуымен Парламент Мәжілісі',
        'Президенттің ұсынуымен Парламент Сенаты',
        'Жоғары Сот Кеңесі',
        'Жоғары Сот Кеңесінің ұсынуымен Парламент Мәжілісі'
      ],
      correctAnswer: 'Президенттің ұсынуымен Парламент Сенаты'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президент қызметінен мерзімінен бұрын босаған, сондай-ақ ол қайтыс болған жағдайда: Президенттің өкілеттігі қалған мерзімге кімге көшеді?',
      choices: [
        'Мәжіліс Төрағасына',
        'Сенат Төрағасына',
        'ҚР Премьер-Министріне',
        'Президенті Әкімшілігінің Басшысына'
      ],
      correctAnswer: 'Сенат Төрағасына'
    },
    {
      type: EQuestionType.Radio,
      title: 'Президент қызметінен мерзімінен бұрын босаған немесе кетірілген жағдайда, сондай-ақ Сенат Төрағасының өзіне Президент өкілеттігін қабылдауы мүмкін болмаған ретте, өкілеттігі кімге көшеді?',
      choices: [
        'Мәжіліс Төрағасына',
        'Қауіпсіздік Кеңесінің Хатшысына',
        'ҚР Премьер-Министрі',
        'Президенті Әкімшілігінің Басшысына'
      ],
      correctAnswer: 'Мәжіліс Төрағасына'
    }
  ],
  time: 10,
  passingScore: 5,
  questionsTotal: 10
};
