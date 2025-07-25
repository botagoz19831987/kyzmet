import {EQuestionType, ITest} from '../../../shared/models/test.model';

export const approvalOfStandardsKz: ITest = {
    id: 'approvalOfStandards-kz',
    title: 'Стандарттарын бекіту туралы',
    description: '<p>Тест на знание закона Стандарттарын бекіту туралы</p>',
    questions: [
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиеленушілердің құзыреттіліктерін, физикалық және жеке қасиеттерін дамыту арқылы жүзеге асырылады:',
            choices: [
                'жас ерекшеліктеріне сәйкес біліктері мен дағдыларын қалыптастыру',
                'бағдарламаға сәйкес білімін қалыптастыру',
                'жеке ерекшеліктерге сәйкес дағдыларды қалыптастыру'
            ],
            correctAnswer: 'жас ерекшеліктеріне сәйкес біліктері мен дағдыларын қалыптастыру'
        },
        {
            type: EQuestionType.Radio,
            title: 'Осы Мектепке дейінгі тәрбие мен оқытудың мемлекеттік жалпыға міндетті стандарты тәрбиеленушілердің оқу жүктемесінің ең жоғары көлеміне қойылатын талаптарды анықтайды ма?',
            choices: [
                'жоқ, бұл стандарттың тармақтарына кірмейді',
                'иә, анықтайды',
                'кейде, егер ерекше жағдайға байланысты'
            ],
            correctAnswer: 'иә, анықтайды'
        },
        {
            type: EQuestionType.Radio,
            title: 'Баланың және айналасындағы адамдардың сезімдерін сөзбен жеткізу қалыптасуды білдіреді:',
            choices: [
                'балалардың шығармашылық дағдылары',
                'балалардың нақты дағдылары',
                'балалардың әлеуметтік-эмоционалдық дағдылары'
            ],
            correctAnswer: 'балалардың әлеуметтік-эмоционалдық дағдылары'
        },
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиелеу-білім беру процесінде тәрбиеленушілердің құқықтарын және өмірін қорғау қамтамасыз етіле ме?',
            choices: [
                'жоқ',
                'иә',
                'кейде'
            ],
            correctAnswer: 'иә'
        },
        {
            type: EQuestionType.Radio,
            title: 'Мектепке дейінгі ұйымдағы жас топтарының күн тәртібін әзірлеуге не негіз болып табылады?',
            choices: [
                'Қазақстан Республикасының «Білім туралы» Заңы',
                'осы Мемлекеттік жалпыға міндетті стандарты',
                'Қазақстан Республикасы Білім министрлігінің стандарты'
            ],
            correctAnswer: 'осы Мемлекеттік жалпыға міндетті стандарты'
        },
        {
            type: EQuestionType.Radio,
            title: 'Дамытушы орта - бұл:',
            choices: [
                'балалардың бастамасын қолдау және сабақтарды өз бетінше таңдау мүмкіндігі үшін жоспарланған әртүрлі материалдары бар орта',
                'балаларға техникалық білім беруді қолдау үшін жоспарланған әртүрлі техникасы бар орта',
                'балалардың жеке денсаулығын сақтау үшін жоспарланған нұсқаулық ортасы'
            ],
            correctAnswer: 'балалардың бастамасын қолдау және сабақтарды өз бетінше таңдау мүмкіндігі үшін жоспарланған әртүрлі материалдары бар орта'
        },
        {
            type: EQuestionType.Radio,
            title: 'Оқу бағдарламасы - бұл:',
            choices: [
                'игеруге жататын актілер тізбесінен жасалған бағдарлама',
                'меңгерілуі тиіс білім, біліктердің, дағдылар мен құзіреттіліктердің мазмұны мен көлемін айқындайтын бағдарлама',
                'тәрбиеленушінің білімінің мазмұны мен көлемін анықтайтын бағдарлама'
            ],
            correctAnswer: 'меңгерілуі тиіс білім, біліктердің, дағдылар мен құзіреттіліктердің мазмұны мен көлемін айқындайтын бағдарлама'
        },
        {
            type: EQuestionType.Radio,
            title: 'Білім беру бағдарламалары қандай негізде әзірленеді?',
            choices: [
                'Үлгілік оқу бағдарламасының негізінде',
                'оқу комитеті жасаған бағдарлама негізінде',
                'білім беру стандарты негізінде'
            ],
            correctAnswer: 'Үлгілік оқу бағдарламасының негізінде'
        },
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиеленушілердің оқу жүктемесінің ең жоғары көлеміне қойылатын талаптар қайда айқындалады?',
            choices: [
                'оқу орны әзірлеген жоспарларда',
                'балаларға арналған Мектепке дейінгі тәрбие мен оқытудың үлгілік оқу жоспарларында',
                'білім Министрлігі әзірлеген жоспарларда'
            ],
            correctAnswer: 'балаларға арналған Мектепке дейінгі тәрбие мен оқытудың үлгілік оқу жоспарларында'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бөбектердің жас кезеңдері - бұл балалар:',
            choices: [
                '0-2 жыл',
                '2-3 жыл',
                '3-5 жас'
            ],
            correctAnswer: '0-2 жыл'
        },
        {
            type: EQuestionType.Radio,
            title: 'Коммуникативтік дағдыларды дамытуға қолдың ұсақ моторикасын дамыту кіреді ме?',
            choices: [
                'жоқ, кірмейді',
                'кіреді',
                'кейде мұғалімнің анықтамасы бойынша'
            ],
            correctAnswer: 'кіреді'
        },
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиеленушілердің жеке ерекшеліктері мен қажеттіліктерін ескере отырып, ұлттық мәдениетке баулу арқылы патриотизмді тәрбиелеу бұл:',
            choices: [
                'әлеуметтік-эмоционалды дағдыларды дамыту',
                'танымдылық және зияткерлік дағдыларды дамыту',
                'балалардың шығармашылық дағдыларын, зерттеу іс-әрекетін дамыту'
            ],
            correctAnswer: 'балалардың шығармашылық дағдыларын, зерттеу іс-әрекетін дамыту'
        },
        {
            type: EQuestionType.Radio,
            title: 'Еркін ойын кезінде балаларға пікірлерін айтуға мүмкіндік беру бұл:',
            choices: [
                'балалардың әлеуметтік-эмоционалдық дағдыларын дамыту',
                'балалардың шығармашылық дағдылары',
                'балалардың жеке дағдылары'
            ],
            correctAnswer: 'балалардың әлеуметтік-эмоционалдық дағдыларын дамыту'
        },
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиелеу- білім процесін жоспарлау кезінде мыналар ескеріледі:',
            choices: [
                'Білім министрлігі бекіткен балалар іс-әрекетін ұйымдастырудың формалары, әдістері',
                'балалар іс-әрекетін ұйымдастырудың әртүрлі формаларын, әдістері мен тәсілдерін қолдану',
                'білім беру процесінің міндеттері'
            ],
            correctAnswer: 'балалар іс-әрекетін ұйымдастырудың әртүрлі формаларын, әдістері мен тәсілдерін қолдану'
        },
        {
            type: EQuestionType.Radio,
            title: 'ОББ бар балалардың біліктері мен дағдыларының дамуын бағалау көрсеткіштері дамытуға негіз болып табылады:',
            choices: [
                'апробацияланған және бейімделген инновациялық әдістемелер мен тәрбие мен оқыту технологиялары',
                'білім беру траекториясын және түзету жұмыстарын жоспарлау',
                'тәрбие мен оқыту мазмұнының сабақтастығы мен үздіксіздігі қағидаттары'
            ],
            correctAnswer: 'білім беру траекториясын және түзету жұмыстарын жоспарлау'
        },
        {
            type: EQuestionType.Radio,
            title: 'Мектепке дейінгі тәрбие мен оқытудың мазмұнын игеру деңгейі неге бағдарланады?',
            choices: [
                'туғаннан бастап 1-сыныпқа қабылданғанға дейінгі біліктері мен дағдыларының тізбесіне сәйкес баланың мүмкін болатын жетістіктерін айқындайтын нысаналы нәтижелерге',
                'Үлгілік оқу бағдарламасының мазмұнында айқындалған мақсаттар мен міндеттерге қол жеткізуге',
                'білім беру қызметін тиімді интеграциялауға'
            ],
            correctAnswer: 'туғаннан бастап 1-сыныпқа қабылданғанға дейінгі біліктері мен дағдыларының тізбесіне сәйкес баланың мүмкін болатын жетістіктерін айқындайтын нысаналы нәтижелерге'
        },
        {
            type: EQuestionType.Radio,
            title: 'Дамытушы орта не үшін құрылады?',
            choices: [
                'білім беру траекториясын әзірлеу және түзету жұмыстарын жоспарлау үшін',
                'ұйымдастырылған қызметті ұстау үшін',
                'тәрбиеленушілердің эмоционалдық жайлылығын, жан-жақты және толыққанды дамуын, балалардың белсенділік түрлерін және бірге әрекет етуге қатысушыларды таңдау мүмкіндігін қамтамасыз ету үшін'
            ],
            correctAnswer: 'тәрбиеленушілердің эмоционалдық жайлылығын, жан-жақты және толыққанды дамуын, балалардың белсенділік түрлерін және бірге әрекет етуге қатысушыларды таңдау мүмкіндігін қамтамасыз ету үшінА'
        },
        {
            type: EQuestionType.Radio,
            title: 'Мектепке дейінгі тәрбие мен оқытудың вариативтік оқу жоспарларын әзірлеу кезінде оқу жүктемесінің көлемі қандай?',
            choices: [
                'ең төменгі',
                'ең жоғары',
                'орташа'
            ],
            correctAnswer: 'ең жоғары'
        },
        {
            type: EQuestionType.Radio,
            title: 'Тәрбиелеу-білім беру процесінің міндеттерін іске асыру және үлгілік оқу бағдарламасының мазмұнында ұйымдастырылған іс-әрекеттің мазмұны қарастырылады ма?',
            choices: [
                'иә, қарастырылады',
                'жоқ, қарастырылмайды',
                'бұл міндетті емес шарттар'
            ],
            correctAnswer: 'иә, қарастырылады'
        },
        {
            type: EQuestionType.Radio,
            title: 'Мектепке дейінгі ұйымдар мен мектепалды сыныптары тәрбиелеу-білім беру қызметін сәйкес жүзеге асырады:',
            choices: [
                'тек осы стандартқа',
                'осы стандартқа, үлгілік оқу жоспарларына және Мектепке дейінгі тәрбие мен оқытудың бағдарламасына',
                'мектепке дейінгі тәрбие мен оқытудың Үлгілік оқу жоспарларына'
            ],
            correctAnswer: 'осы стандартқа, үлгілік оқу жоспарларына және Мектепке дейінгі тәрбие мен оқытудың бағдарламасына'
        },
        {
            type: EQuestionType.Radio,
            title: 'Осы Бастауыш білім берудің мемлекеттік жалпыға міндетті стандарты қойылатын талаптарды айқындайды',
            choices: [
                'мазмұнына, оқу жүктемесінің ең жоғарғы көлеміне, білім алушылардың дайындық деңгейіне және оқу мерзіміне',
                'бастауыш білім беру мақсаттарының жүйесіне қол жеткізу есебінен оқыту мен тәрбиелеу сапасын арттыру',
                'білім беру ұйымдарында инновациялық практиканы қолдау және дамыту'
            ],
            correctAnswer: 'мазмұнына, оқу жүктемесінің ең жоғарғы көлеміне, білім алушылардың дайындық деңгейіне және оқу мерзіміне'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бастауыш білім берудің базалық мазмұны деген не?',
            choices: [
                'білім беру субъектілерінің мақсатты, педагогикалық негізделген, дәйекті өзара іс-қимыл процесі',
                'білім беру ұйымдарында оқып білуге міндетті зерделеуге жататын бастауыш білім беру мазмұнының құрамы, құрылымы және көлемі',
                'білім алушылардың оқу жетістіктерін бағалау жүргізілетін нақты өлшеуіштер'
            ],
            correctAnswer: 'білім беру ұйымдарында оқып білуге міндетті зерделеуге жататын бастауыш білім беру мазмұнының құрамы, құрылымы және көлемі'
        },
        {
            type: EQuestionType.Radio,
            title: 'Элективті курс деген не?',
            choices: [
                'білім алушылардың таңдауы бойынша курс, білім алушылардың білім дайындығын кеңейтуге бағытталған оқу жоспарының вариативті компонентінің құрамдас бөлігі',
                'оқу пәндерінің тізбесін регламенттейтін құжат',
                'білім беру ұйымдарындағы тұтас оқу-тәрбие процесінің құрамдас бөлігі'
            ],
            correctAnswer: 'білім алушылардың таңдауы бойынша курс, білім алушылардың білім дайындығын кеңейтуге бағытталған оқу жоспарының вариативті компонентінің құрамдас бөлігі'
        },
        {
            type: EQuestionType.Radio,
            title: 'Стандартты қолдану қайда бағытталған?',
            choices: [
                'оқыту барысында білім алушы мен мұғалім арасындағы жедел өзара байланысты қамтамасыз етеді',
                'білімді функционалды және шығармашылық қолдану',
                'оқыту мен тәрбиелеу сапасын арттыру, тілдерді үйренуге жағдай жасау'
            ],
            correctAnswer: 'оқыту мен тәрбиелеу сапасын арттыру, тілдерді үйренуге жағдай жасау'
        },
        {
            type: EQuestionType.Radio,
            title: 'Қазақ тілін оқыту тілі ретінде үйрету неге негізделген?',
            choices: [
                'есте сақтау деңгейін арттыру үшін күрделі есте сақтау әдістерін қолдануға негізделген',
                'білім алушылардың тілдік дағдыларын дамыту үшін әдеби мәтіндерді пайдалануға негізделген',
                'білім алушыларды дамыту үшін жаңа әдістерді қолдануға негізделген'
            ],
            correctAnswer: 'білім алушылардың тілдік дағдыларын дамыту үшін әдеби мәтіндерді пайдалануға негізделген'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бастауыш білім беру мазмұнында базалық құндылықтар тізіміне не кіреді?',
            choices: [
                'қазақстандық патриотизм және азаматтық жауапкершілік, құрмет, ынтымақтастық, еңбек пен шығармашылық, ашықтық, білім',
                'сын, шығармашылық және позитивті ойлауды дамыту қажеттілігі, білім, ашықтық',
                'сабақтан тыс жұмыстар, формативті бағалау, элективті курс, ынтымақтастық, шығармашылық'
            ],
            correctAnswer: 'қазақстандық патриотизм және азаматтық жауапкершілік, құрмет, ынтымақтастық, еңбек пен шығармашылық, ашықтық, білім'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бастауыш білім берудің жалпы білім беретін оқу бағдарламасын меңгеру мерзімі қандай?',
            choices: [
                '2 жыл',
                '3 жыл',
                '4 жыл'
            ],
            correctAnswer: '4 жыл'
        },
        {
            type: EQuestionType.Radio,
            title: 'Каниулдар оқу жылында қанша рет беріледі?',
            choices: [
                '3 рет',
                '2 рет',
                '4 рет'
            ],
            correctAnswer: '3 рет'
        },
        {
            type: EQuestionType.Radio,
            title: 'Ерекше білім беру қажеттіліктері бар білім алушылар үшін қандай жағдайлар жасалады?',
            choices: [
                'олардың білім алуы, білім алушылардың оқу жетістіктерінің деңгейін өлшеуі үшін жағдайлар',
                'олардың білім алуы үшін, даму бұзушылықтарын түзету және әлеуметтік бейімделуі үшін жағдай',
                'жеке қабілеттерін және әртүрлі физикалық әрекеттерге деген сенімділік дәрежесін жақсарту үшін жағдай'
            ],
            correctAnswer: 'олардың білім алуы үшін, даму бұзушылықтарын түзету және әлеуметтік бейімделуі үшін жағдай'
        },
        {
            type: EQuestionType.Radio,
            title: 'Білім алушылардың оқу жетістіктерін бағалау қандай нысанда жүзеге асырылады?',
            choices: [
                'стационарлық, белсенді бағалау нысанында',
                'ұжымдық, жиынтық бағалау нысанында',
                'формативті, жиынтық бағалау нысанында'
            ],
            correctAnswer: 'формативті, жиынтық бағалау нысанында'
        },
        {
            type: EQuestionType.Radio,
            title: 'Оқу жылының ұзақтығы 1-сыныпта қандай?',
            choices: [
                '35 оқу аптасы',
                '36 оқу аптасы',
                '37 оқу аптасы'
            ],
            correctAnswer: '35 оқу аптасы'
        },
        {
            type: EQuestionType.Radio,
            title: '«Жолда жүру ережелері» курсын  игеруге 1-4-сыныптарда қанша уақыт беріледі?',
            choices: [
                '5 сағат',
                '6 сағат',
                '7 сағат'
            ],
            correctAnswer: '6 сағат'
        },
        {
            type: EQuestionType.Radio,
            title: '«Қазақ тілі» білім беру саласы бойынша бастауыш білім беруді аяқтағаннан кейін оқыту нәтижелері қандай критерийлер бойынша бағаланады?',
            choices: [
                'тек тыңдалым және жазылым',
                'тек сөйлеу, оқу және жазу',
                'тыңдалым, сөйлеу, оқу, жазу'
            ],
            correctAnswer: 'тыңдалым, сөйлеу, оқу, жазу'
        },
        {
            type: EQuestionType.Radio,
            title: 'Қандай жағдайларда қалалық оқу орындарында сыныпты 2 топқа бөлуге рұқсат етіледі?',
            choices: [
                '24 және одан да артық білім алушыларда сыныптарды толтыру кезінде',
                '22 және одан да артық білім алушыларда сыныптарды толтыру кезінде',
                '20 және одан да артық білім алушыларда сыныптарды толтыру кезінде'
            ],
            correctAnswer: '24 және одан да артық білім алушыларда сыныптарды толтыру кезінде'
        },
        {
            type: EQuestionType.Radio,
            title: '«Адам және қоғам» білім беру саласының мазмұны қандай оқу пәнінде жүзеге асырылады?',
            choices: [
                '«Жаратылыстану»',
                '«Дүниетану»',
                '«Технология және өнер»'
            ],
            correctAnswer: '«Дүниетану»'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бастауыш білім берудің мақсаты қандай?',
            choices: [
                'білім алушы тұлғасының үйлесімді қалыптасуы мен дамуына үшін қолайлы білім беру кеңістігін жасау',
                'оқуда одан әрі табысқа жету үшін білім алушының сауаттылығын қалыптастыру',
                'жеке қабілеттерді дамыту үшін бос орын құру'
            ],
            correctAnswer: 'білім алушы тұлғасының үйлесімді қалыптасуы мен дамуына үшін қолайлы білім беру кеңістігін жасау'
        },
        {
            type: EQuestionType.Radio,
            title: 'Үштілді білім беру қандай жолмен жүзеге асырылады?',
            choices: [
                'қазақ, орыс және шет тілдерінде сабақтан тыс жұмысты деңгейлік меңгерілуін және ұйымдастыруды қамтамасыз ету жолымен',
                'сабақтан тыс жұмыстарды тек орыс тілінде ұйымдастыру арқылы',
                'тек шет тілін деңгейлік меңгеруді қамтамасыз ету арқылы'
            ],
            correctAnswer: 'қазақ, орыс және шет тілдерінде сабақтан тыс жұмысты деңгейлік меңгерілуін және ұйымдастыруды қамтамасыз ету жолымен'
        },
        {
            type: EQuestionType.Radio,
            title: '«Математика және информатика» білім беру саласының мазмұны қандай оқу пәндерінде іске асырылады?',
            choices: [
                '«Технология және өнер», «Математика»',
                '«Математика», «Цифрлық сауаттылық»',
                '«Информатика», «Адам және қоғам»'
            ],
            correctAnswer: '«Математика», «Цифрлық сауаттылық»'
        },
        {
            type: EQuestionType.Radio,
            title: '«Жаратылыстану» білім беру саласы бойынша бастауыш білім беру аяқталғанда білім алушы:',
            choices: [
                'Қазақстанның жас азаматы ретінде өзін сезіну түріндегі өзінің азаматтық бірегейлігін және белгілі бір этносқа жататындығын түсіну',
                'Күн жүйесінің ғаламшарларын білу, қоршаған ортаға қамқорлықпен қараудың маңыздылығын түсіну, табиғат компоненттері арасындағы себеп-салдарлық байланыстарды талдау',
                'әлеуметтік процестер мен құбылыстарды зерттеу үшін таным әдістерін қолдану'
            ],
            correctAnswer: 'Күн жүйесінің ғаламшарларын білу, қоршаған ортаға қамқорлықпен қараудың маңыздылығын түсіну, табиғат компоненттері арасындағы себеп-салдарлық байланыстарды талдау'
        },
        {
            type: EQuestionType.Radio,
            title: 'Үшінші тоқсанда қандай сыныптар үшін ұзақтығы бір апта болатын қосымша каникул уақыты беріледі?',
            choices: [
                '1 сыныптар үшін',
                '2 сыныптар үшін',
                '3 сыныптар үшін'
            ],
            correctAnswer: '1 сыныптар үшін'
        },
        {
            type: EQuestionType.Radio,
            title: 'Инклюзивті білім беру дегеніміз не?',
            choices: [
                'ерекше білім беру қажеттіліктері мен жеке-дара мүмкіндіктерін ескере отырып, барлық білім алушылардың білім алуға тең қол жеткізуі үшін жағдай жасау',
                'білім алушылардың жұмыспен қамтылуы жоғары қарқынды оқыту үшін жағдайлар жасау',
                'жеке-дара мүмкіндіктерді ескере отырып, білімге қол жеткізу үшін жағдайлар жасау'
            ],
            correctAnswer: 'ерекше білім беру қажеттіліктері мен жеке-дара мүмкіндіктерін ескере отырып, барлық білім алушылардың білім алуға тең қол жеткізуі үшін жағдай жасау'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бағалау критерийлері дегеніміз не?',
            choices: [
                'жалпыадамзаттық құндылықтарға негізделген оқыту мақсаттары жүйесін құрудағы бағдарлар',
                'білім алушылардың оқу жетістіктерін бағалауға негіз болатын нақты өлшеуіштер',
                'үлгілік оқу жоспары негізінде жалпы білім беру ұйымы әзірлейтін құжат'
            ],
            correctAnswer: 'білім алушылардың оқу жетістіктерін бағалауға негіз болатын нақты өлшеуіштер'
        },
        {
            type: EQuestionType.Radio,
            title: 'Оқу жылында демалыс уақытының ұзақтығы қандай?',
            choices: [
                'кемінде 25 күн',
                '25 күннен аз',
                '35 күннен артық'
            ],
            correctAnswer: 'кемінде 25 күн'
        },
        {
            type: EQuestionType.Radio,
            title: 'Негізгі орта білім берудің жалпы білім беретін оқу бағдарламасын меңгеру мерзімі қандай?',
            choices: [
                '5 жыл',
                '4 жыл',
                '6 жыл'
            ],
            correctAnswer: '5 жыл'
        },
        {
            type: EQuestionType.Radio,
            title: 'Негізгі орта білім берудің базалық мазмұнын анықтауға не негіз болады?',
            choices: [
                'білім алушыларды дамытудың жеке траекторияларын құру',
                'білім беру салалары (және оқу пәндері) бойынша оқытудан күтілетін нәтижелер',
                'әр білім беру саласының ерекшеліктерін ескере отырып жасалған зерттеу нәтижелері'
            ],
            correctAnswer: 'білім беру салалары (және оқу пәндері) бойынша оқытудан күтілетін нәтижелер'
        },
        {
            type: EQuestionType.Radio,
            title: 'Инвариантты компоненттен таңдалған вариативті компоненттінің таңдау бойынша пәндеріне қандай бағалар қойылады?',
            choices: [
                '«сыналды» / «сыналмады»',
                '1-ден 5-ке дейінгі ұпайлар',
                '«жақсы» «өте жақсы» «жаман» және т.б. бағалар'
            ],
            correctAnswer: '«сыналды» / «сыналмады»'
        },
        {
            type: EQuestionType.Radio,
            title: 'Апталық оқу жүктемесі нені қамтиды?',
            choices: [
                'жеке берілген сабақтардың түрлері',
                'егін жинаудан кейінгі оқу жұмысының түрлері',
                'Үлгілік оқу жоспарында айқындалған оқу жұмыстарының барлық түрлерін'
            ],
            correctAnswer: 'Үлгілік оқу жоспарында айқындалған оқу жұмыстарының барлық түрлерін'
        },
        {
            type: EQuestionType.Radio,
            title: 'Негізгі орта білім берудің негізгі міндеттері білім алушылардың дағдыларын қалыптастыру мен дамыту болып табылады:',
            choices: [
                'рухани-адамгершілік қасиеттер, ғылым негіздері бойынша базалық білім жүйесі, сын тұрғысынан және шығармашылық ойлау дағдыларын және т. б',
                'қазіргі қоғамның динамикалық сұраныстарына сәйкестігі',
                'қоршаған әлемге оң көзқарас және экологиялық тепе-теңдікті сақтау'
            ],
            correctAnswer: 'рухани-адамгершілік қасиеттер, ғылым негіздері бойынша базалық білім жүйесі, сын тұрғысынан және шығармашылық ойлау дағдыларын және т. б'
        },
        {
            type: EQuestionType.Radio,
            title: 'Негізгі орта білім берудің жалпы білім беретін оқу бағдарламалары неге бағытталған?',
            choices: [
                'білім алушыларды дамытудың жеке траекторияларын құруға',
                'ғылым жүйесінің базалық негіздерін меңгеруіне, олардың бойында тұлғааралық және этносаралық қатынастың жоғары мәдениетін қалыптастыруға, жеке тұлға ретінде өзін-өзі танытуына және кәсіптік бағдарлануына, сондай-ақ білім алушылардың бейіналды даярлығына',
                'қозғалыс мәдениетін қалыптастыруға, жалпы даму және түзету бағытымен дене жаттығуларымен қозғалыс тәжірибесін байытуға'
            ],
            correctAnswer: 'ғылым жүйесінің базалық негіздерін меңгеруіне, олардың бойында тұлғааралық және этносаралық қатынастың жоғары мәдениетін қалыптастыруға, жеке тұлға ретінде өзін-өзі танытуына және кәсіптік бағдарлануына, сондай-ақ білім алушылардың бейіналды даярлығына'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бағалау критерийлері тыңдау, оқу, сөйлеу және жазу сияқты қандай білім беру саласына қолданылмайды?',
            choices: [
                '«Жаратылыстану»',
                '«Қазақ тілі»',
                '«Шетел тілі»'
            ],
            correctAnswer: '«Жаратылыстану»'
        },
        {
            type: EQuestionType.Radio,
            title: 'Бастауыш білім деңгейінде білімді бағалау қай сыныптан басталады?',
            choices: [
                '1 сыныптан бастап',
                '5 сыныптан бастап',
                '2 сыныптан бастап'
            ],
            correctAnswer: '2 сыныптан бастап'
        },
        {
            type: EQuestionType.Radio,
            title: 'Негізгі орта білім берудегі «Дене шынықтыру» білім беру саласының мазмұны неге бағытталған?',
            choices: [
                'денсаулықты нығайтуға, негізгі физикалық қасиеттерді дамытуға және ағзаның функционалдық мүмкіндіктерін арттыруға',
                'оқушылардың ақыл-ой және физикалық қабілеттері арасындағы тепе-теңдікті сақтау',
                'қоршаған әлемнің, жалпы мәдениеттің бейнесін тұтас қабылдауды қалыптастыру'
            ],
            correctAnswer: 'денсаулықты нығайтуға, негізгі физикалық қасиеттерді дамытуға және ағзаның функционалдық мүмкіндіктерін арттыруға'
        },
        {
            type: EQuestionType.Radio,
            title: 'Білім алушыларда құндылықтарды сіңіру негізінде не дамуы керек?',
            choices: [
                '9-сыныптың соңына қарай қоршаған әлемге оң көзқарас және белгілі бір салада белгілі бір білім мен дағдылардың болуы',
                'Қазақстан мүдделеріне қызмет етуге дайындық, әлеуметтік жауапкершілік және шешім қабылдау, шығармашылық және сын ойлау қабілеті',
                'Қазақстанның мүддесіне қызмет етуге дайындық, көпшілік алдында сөз сөйлеуге қызығушылық және Құрмет'
            ],
            correctAnswer: 'Қазақстан мүдделеріне қызмет етуге дайындық, әлеуметтік жауапкершілік және шешім қабылдау, шығармашылық және сын ойлау қабілеті'
        },
        {
            type: EQuestionType.Radio,
            title: 'Білім алушылардың оқу жүктемесінің жалпы көлемі, сондай-ақ сыныптар бойынша апталық және жылдық оқу жүктемесі қалай белгіленеді?',
            choices: [
                'үлгілік оқу жоспарымен',
                'Білім Министрлігінің нұсқаулығымен',
                'мектеп (оқу ұйымы) директорының бұйрығымен'
            ],
            correctAnswer: 'үлгілік оқу жоспарымен'
        },
        {
            type: EQuestionType.Radio,
            title: '5-9 сынып оқушылары үшін оқу жылының ұзақтығы қандай?',
            choices: [
                '35 оқу аптасы',
                '40 оқу аптасы',
                '36 оқу аптасы'
            ],
            correctAnswer: '36 оқу аптасы'
        },
        {
            type: EQuestionType.Radio,
            title: 'Күнтізбелік жылдағы демалыс уақытының ұзақтығы қанша уақытты құрайды?',
            choices: [
                'кем дегенде 100 күн',
                'кем дегенде 115 күн',
                'кем дегенде 150 күн'
            ],
            correctAnswer: 'кем дегенде 115 күн'
        },
        {
            type: EQuestionType.Radio,
            title: '«Жаратылыстану» білім беру саласының мазмұны қандай оқу пәндерінде жүзеге асырылады?',
            choices: [
                'жаратылыстану, физика, химия, биология, география',
                'физика, химия, биология, география, тіршілік қауіпсіздігі негіздері',
                'география, жаратылыстану, физика, геометрия'
            ],
            correctAnswer: 'жаратылыстану, физика, химия, биология, география'
        },
        {
            type: EQuestionType.Radio,
            title: 'Жалпы орта білім беретін оқушылар үшін міндетті оқу пәндеріне мыналар жатады:',
            choices: [
                'қазақ тілі мен Қазақ әдебиеті, Шет тілі, информатика, кәсіпкерлік және бизнес негіздері',
                'шет тілі, алгебра және талдаудың басталуы, геометрия, информатика, Қазақстан тарихы, дене шынықтыру, алғашқы әскери және технологиялық дайындық',
                'қазақ тілі мен қазақ әдебиеті, орыс тілі мен орыс әдебиеті, ана тілі, әдебиет, шет тілі'
            ],
            correctAnswer: 'шет тілі, алгебра және талдаудың басталуы, геометрия, информатика, Қазақстан тарихы, дене шынықтыру, алғашқы әскери және технологиялық дайындық'
        },
        {
            type: EQuestionType.Radio,
            title: '«Кәсіпкерлік және бизнес негіздері» пәні нені көздейді?',
            choices: [
                'туған өлке кәсіпкерлері мен атақты халықаралық кәсіпкерлердің өмірбаянын білу',
                'қазақстандық және халықаралық тәжірибені ескере отырып, кәсіпкерлік саласының негізгі ұғымдары мен Заңдарын зерделеу',
                'курстың соңында шағын бизнесіңізді құру дағдыларын алу'
            ],
            correctAnswer: 'қазақстандық және халықаралық тәжірибені ескере отырып, кәсіпкерлік саласының негізгі ұғымдары мен Заңдарын зерделеу'
        },
        {
            type: EQuestionType.Radio,
            title: '«Бастапқы әскери және технологиялық дайындық» пәні нені көздейді?',
            choices: [
                'ерікті, шешуші, дене бітімі сау, әскери жағынан функционалдық сауатты тұлғаны дамытуға',
                'қажет болған жағдайда Қазақстанның мүдделеріне қызмет етуге дайын болу, it саласындағы кәсіби терминдерді білу',
                'зардап шеккендерге алғашқы медициналық көмек көрсетуге'
            ],
            correctAnswer: 'ерікті, шешуші, дене бітімі сау, әскери жағынан функционалдық сауатты тұлғаны дамытуға'
        },
        {
            type: EQuestionType.Radio,
            title: '1 кредитке қанша академиялық сағат тең?',
            choices: [
                '20 академиялық сағат',
                '30 академиялық сағат',
                '24 академиялық сағат'
            ],
            correctAnswer: '24 академиялық сағат'
        },
        {
            type: EQuestionType.Radio,
            title: 'Техникалық және кәсіптік білім алушылардың оқу жүктемесінің ең жоғары көлемі қандай?',
            choices: [
                'аптасына 60 сағаттан артық емес',
                'аптасына 54 сағаттан артық емес',
                'аптасына 40 сағаттан артық емес'
            ],
            correctAnswer: 'аптасына 54 сағаттан артық емес'
        },
        {
            type: EQuestionType.Radio,
            title: 'Мамандық бейініне қарамастан қандай жалпы білім беретін пәндер міндетті болып саналады?',
            choices: [
                'қазақ тілі мен Қазақ әдебиеті, Шет тілі, математика, информатика, Қазақстан тарихы, дене шынықтыру',
                'қазақ тілі мен қазақ әдебиеті, шет тілі, математика, қазақстан тарихы, алғашқы әскери және технологиялық дайындық, дүниежүзілік тарих, химия',
                'қазақ және орыс тілдері, қазақ әдебиеті, математика, Қазақстан тарихы, география және геометрия'
            ],
            correctAnswer: 'қазақ тілі мен Қазақ әдебиеті, Шет тілі, математика, информатика, Қазақстан тарихы, дене шынықтыру'
        },
        {
            type: EQuestionType.Radio,
            title: 'Техникалық және кәсіптік білім алушылардың оқу нәтижелерінің жетістіктерін бағалау бақылаудың қандай түрлерімен жүргізіледі?',
            choices: [
                'әр семестрде белгілі бір тақырыпқа арналған компьютер мен жобаның көмегімен тестілеу түрінде',
                'ағымдағы үлгерімді бақылау, аралық және қорытынды аттестаттау түрінде',
                'оқу қорытындысы бойынша ауызша емтихан немесе сынақ'
            ],
            correctAnswer: 'ағымдағы үлгерімді бақылау, аралық және қорытынды аттестаттау түрінде'
        }
    ],
    time: 10,
    passingScore: 5,
    questionsTotal: 10
};
