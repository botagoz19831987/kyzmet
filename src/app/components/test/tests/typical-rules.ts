import {EQuestionType, ITest} from '../../../shared/models/test.model';

export const typicalRules: ITest = {
    id: 'typicalRules',
        title: 'Об утверждении Типовых правил',
    description: '<p>Тест на знание закона Об утверждении Типовых правил</p>',
    questions: [
    {
        type: EQuestionType.Radio,
        title: 'Основными видами организаций среднего образования по профилю обучения являются:',
        choices: [
            'гимназия, колледж, начальная школа',
            'начальная школа, лицей, гимназия',
            'гимназия, профильная школа, лицей'
        ],
        correctAnswer: 'гимназия, профильная школа, лицей'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основные цели и задачи гимназии:',
        choices: [
            'формирование интеллектуальной личности с высоким уровнем культуры, адаптированной к жизни в обществе, готовой к осознанному выбору и освоению профессиональных образовательных программ',
            'подготовка обучающихся по дисциплинам, ориентированным на профессиональное обучение',
            'предоставление обучающимся возможности выбора индивидуальных образовательных программ по соответствующим направлениям'
        ],
        correctAnswer: 'формирование интеллектуальной личности с высоким уровнем культуры, адаптированной к жизни в обществе, готовой к осознанному выбору и освоению профессиональных образовательных программ'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основные цели и задачи лицея:',
        choices: [
            'ориентация обучающихся по профильным дисциплинам с превышением базового уровня учебных предметов, определенных в государственном общеобязательном стандарте образования',
            'создание оптимальных условий для качественного усвоения общеобразовательных программ общего среднего образования наиболее способным и подготовленным учащимся',
            'определение дальнейшей траектории обучения через подготовку обучающихся по дисциплинам, ориентированным на профессиональное обучение'
        ],
        correctAnswer: 'создание оптимальных условий для качественного усвоения общеобразовательных программ общего среднего образования наиболее способным и подготовленным учащимся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основные цели и задачи профильной школы:',
        choices: [
            'обеспечение условий для дифференциации, интеграции и профессиональной ориентации содержания общего среднего образования по естественно-математическому, общественно-гуманитарному и технологическому направлениям',
            'обеспечение завершения общеобразовательной подготовки обучающегося на основе освоения профильных программ обучения',
            'обеспечение овладения основными умениями и навыками учебной деятельности'
        ],
        correctAnswer: 'обеспечение условий для дифференциации, интеграции и профессиональной ориентации содержания общего среднего образования по естественно-математическому, общественно-гуманитарному и технологическому направлениям'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основными видами организаций образования по условиям организации обучения являются',
        choices: [
            'начальная и дневная школа',
            'малокомплектная и вечерняя школа',
            'колледж'
        ],
        correctAnswer: 'малокомплектная и вечерняя школа'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основные цели и задачи малокомплектной школы:',
        choices: [
            'применение информационно-коммуникационных  технологий обучения',
            'организация учебно-воспитательного процесса в совмещенных классах ',
            'обязательное получение осужденными, не достигшими возраста тридцати лет, начального, основного среднего и общего среднего образования'
        ],
        correctAnswer: 'обязательное получение осужденными, не достигшими возраста тридцати лет, начального, основного среднего и общего среднего образования'
    },
    {
        type: EQuestionType.Radio,
        title: 'Вечерняя школа создается при наличии:',
        choices: [
            'в крупных городах- не менее 80 обучающихся',
            'в крупных городах- не менее 100 обучающихся',
            'в крупных городах- не менее 120 обучающихся'
        ],
        correctAnswer: 'в крупных городах- не менее 100 обучающихся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Администрация специальных организаций образования',
        choices: [
            'предупреждает о правонарушений, безнадзорности, беспризорности и антиобщественных действий среди несовершеннолетних ',
            'информирует органы внутренних дел по местонахождению указанного учреждения и по месту жительства несовершеннолетних о фактах их самовольного ухода и принимает непосредственное участие по их розыску и возвращению',
            'формирование законопослушного поведения несовершеннолетних '
        ],
        correctAnswer: 'информирует органы внутренних дел по местонахождению указанного учреждения и по месту жительства несовершеннолетних о фактах их самовольного ухода и принимает непосредственное участие по их розыску и возвращению'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи организации образования с особым режимом содержания',
        choices: [
            'запрашивает письменное подтверждение органов внутренних дел по месту жительству несовершеннолетнего о факте его прибытия',
            'поддерживают систематическую связь с родителями несовершеннолетних или лицами, их заменяющими, путем переписки, звонков, личных бесед, проведения родительских собраний',
            'социальная адаптация и реабилитация несовершеннолетних'
        ],
        correctAnswer: 'социальная адаптация и реабилитация несовершеннолетних'
    },
    {
        type: EQuestionType.Radio,
        title: 'Виды интернатных организаций образования:',
        choices: [
            'военная школа-интернат',
            'учебно-оздоровительный центр (комплекс)',
            'учебный центр'
        ],
        correctAnswer: 'военная школа-интернат'
    },
    {
        type: EQuestionType.Radio,
        title: 'Основными видами комбинированных организаций образования являются:',
        choices: [
            'лицей',
            'школа-гимназия',
            'школа'
        ],
        correctAnswer: 'школа-гимназия'
    },
    {
        type: EQuestionType.Radio,
        title: 'Для осуществления указанной цели школа-интернат-колледж реализует следующие задачи:',
        choices: [
            'создание условий для получения качественного образования, направленного на формирование, развитие и профессиональное становление личности на основе национальных и общечеловеческих ценностей, достижений науки и практики ',
            'формирование у обучающихся основ экономических знаний, профессиональной направленности в соответствии с их интересами, склонностями, медико-физиологическими показателями, воспитание осознанного отношения к труду, подготовка их к жизни и труду в условиях рынка',
            'производственная деятельность на основе договора и взаимовыгодного сотрудничества с предприятиями государственной и другой формой собственности '
        ],
        correctAnswer: 'создание условий для получения качественного образования, направленного на формирование, развитие и профессиональное становление личности на основе национальных и общечеловеческих ценностей, достижений науки и практики '
    },
    {
        type: EQuestionType.Radio,
        title: 'Для осуществления указанных целей Комбинат реализует следующие задачи:',
        choices: [
            'внедрение и эффективное использование новых технологий обучения, способствующих своевременной адаптации профессионального образования к изменяющимся потребностям общества и рынка труда',
            'развитие систем обучения, обеспечивающих взаимосвязь между теоретическим обучением, обучением на производстве с потребностями рынка труда',
            'организация профориентационной работы с обучающимся'
        ],
        correctAnswer: 'организация профориентационной работы с обучающимся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Для осуществления указанной цели УВЦ реализует следующие задачи:',
        choices: [
            'оказание информационных, аналитических, консалтинговых услуг, проведение интерактивных уроков',
            'интеграция малокомплектных и опорных школ (ресурсных центров) в единое образовательное пространство и обеспечение межсессионного взаимодействия в дистанционном обучении',
            'развитие творческих, духовных, физических возможностей личности, реализация их способностей'
        ],
        correctAnswer: 'развитие творческих, духовных, физических возможностей личности, реализация их способностей'
    },
    {
        type: EQuestionType.Radio,
        title: 'Для осуществления указанной цели учебный центр реализует следующие задачи:',
        choices: [
            'обеспечение комфортных и безопасных условий для занятий обучающихся',
            'формирование, обеспечение функционирования и развитие инфраструктуры информатизации и цифровизации, и координация на соответствующей территории',
            'адаптация к жизни в обществе'
        ],
        correctAnswer: 'формирование, обеспечение функционирования и развитие инфраструктуры информатизации и цифровизации, и координация на соответствующей территории'
    },
    {
        type: EQuestionType.Radio,
        title: 'Центр реализует следующие задачи:',
        choices: [
            'разработка системного подхода для выявления и психолого-педагогического сопровождения одаренных детей',
            'воспитание гражданственности и патриотизма, любви к своей родине – республике казахстан, уважение к государственным символам и государственному языку, почитания народных традиций, нетерпимости к любым антиконституционным и антиобщественным проявлениям',
            'обеспечение повышения социального статуса педагогов'
        ],
        correctAnswer: 'разработка системного подхода для выявления и психолого-педагогического сопровождения одаренных детей'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи организаций технического и профессионального образования являются:',
        choices: [
            'создание электронной базы данных одаренных детей – единого реестра одаренных детей',
            'воспитание личности с активной гражданской позицией, формирование потребностей участвовать в общественно-политической, экономической и культурной жизни республики, осознанного отношения личности к своим правам и обязанностям',
            'организация и проведение олимпиад, конкурсов, тренингов, профильных смен в оздоровительных центрах и лагерях'
        ],
        correctAnswer: 'воспитание личности с активной гражданской позицией, формирование потребностей участвовать в общественно-политической, экономической и культурной жизни республики, осознанного отношения личности к своим правам и обязанностям'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи организаций послесреднего образования являются:',
        choices: [
            'реализация углубленного образования',
            'обеспечение индивидуального характера обучения одаренных детей и качественного усвоения обучающимися специализированных типовых учебных программ',
            'приобщение к достижениям отечественной и мировой культуры, изучение истории, обычаев и традиций казахского и других народов республики, овладение казахским, русским, иностранными языками'
        ],
        correctAnswer: 'приобщение к достижениям отечественной и мировой культуры, изучение истории, обычаев и традиций казахского и других народов республики, овладение казахским, русским, иностранными языками'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи специализированных организаций образования:',
        choices: [
            'обеспечение повышения социального статусу педагогов ',
            'сохранение и приумножение интеллектуального потенциала страны',
            'интеграция образования, науки и производства'
        ],
        correctAnswer: 'сохранение и приумножение интеллектуального потенциала страны'
    },
    {
        type: EQuestionType.Radio,
        title: 'В центре поддержки детей, находящихся в трудной жизненной ситуации, организуются службы (отделы):',
        choices: [
            'детско-юношеские клубы физической подготовки',
            'служба(отдел) психологической и правовой поддержки воспитанников центра и детей, находящихся в трудной жизненной ситуации, сопровождения приемных родителей и постинтернатного сопровождения выпускников центра поддержки детей, находящихся в трудной жизненной ситуации',
            'школа-интернат'
        ],
        correctAnswer: 'служба(отдел) психологической и правовой поддержки воспитанников центра и детей, находящихся в трудной жизненной ситуации, сопровождения приемных родителей и постинтернатного сопровождения выпускников центра поддержки детей, находящихся в трудной жизненной ситуации'
    },
    {
        type: EQuestionType.Radio,
        title: 'Деление класса на 2 группы осуществляется в городских общеобразовательных организациях при наполнении класса в обучающихся:',
        choices: [
            'при наполнении класса в 22 и более обучающихся',
            'при наполнении класса в 26 и более обучающихся',
            'при наполнении класса в 24 и более обучающихся'
        ],
        correctAnswer: 'при наполнении класса в 24 и более обучающихся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи службы (отдела) психологической и правовой поддержки воспитанников центра и детей, находящихся в трудной жизненной ситуации:',
        choices: [
            'содействие личностному и интеллектуальному развитию воспитанников, детей, находящихся в трудной жизненной ситуации, формирование способности к самовоспитанию и саморазвитию',
            'осуществление психологической подготовки граждан Республики Казахстан, постоянно проживающих на территории Республики Казахстан, желающих принять детей-сирот, детей, оставшихся без попечения родителей, на воспитание в свою семью',
            'осуществление работ с органами по устройству воспитанников в приемные семьи'
        ],
        correctAnswer: 'содействие личностному и интеллектуальному развитию воспитанников, детей, находящихся в трудной жизненной ситуации, формирование способности к самовоспитанию и саморазвитию'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачами службы (отдела) содействия семейному устройству воспитанников центра поддержки детей, находящихся в трудной жизненной ситуации, и сопровождения приемных родителей и постинтернатного сопровождения выпускников центра поддержки детей, находящихся в трудной жизненной ситуации:',
        choices: [
            'проведение психологической диагностики и развитие творческого потенциала воспитанников и детей, находящихся в трудной жизненной ситуации',
            'осуществление работы с кровными семьями воспитанников центра поддержки детей, находящихся в трудной жизненной ситуации, с целью возврата ребенка в семью',
            'осуществление психологической подготовки воспитанников к жизни в приемных семьях'
        ],
        correctAnswer: 'осуществление работы с кровными семьями воспитанников центра поддержки детей, находящихся в трудной жизненной ситуации, с целью возврата ребенка в семью'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи организации:',
        choices: [
            'создание условий для получения качественного дополнительного образования, направленного на формирование, развитие и профессиональное становление личности на основе общечеловеческих ценностей',
            'создание оптимальных условий, обеспечивающих физическое, интеллектуальное и личностное развитие воспитанников, в том числе для воспитанников с особыми образовательными потребностями и индивидуальными возможностями',
            'тесное сотрудничество с семьей для обеспечения полноценного развития воспитанника'
        ],
        correctAnswer: 'создание условий для получения качественного дополнительного образования, направленного на формирование, развитие и профессиональное становление личности на основе общечеловеческих ценностей'
    },
    {
        type: EQuestionType.Radio,
        title: 'В детских музыкальных школах и музыкальных отделениях школ искусств, школах художественно-эстетической направленности, музыкальных школах дворцов школьников (дома, центры, комплексы, центры детско-юношеского творчества) количество обучающихся в группе составляет:',
        choices: [
            'Подготовительной- от 6 до 8 человек',
            'Подготовительной- от 10 до 12 человек',
            'подготовительной – от 8 до 10 человек'
        ],
        correctAnswer: 'подготовительной – от 8 до 10 человек'
    },
    {
        type: EQuestionType.Radio,
        title: 'В хореографических отделениях детских школ искусств и школ художественно-эстетической направленности количество обучающихся в группах составляет:',
        choices: [
            'от 10 до 24 человек',
            'от 8 до 20 человек',
            'от 6 до 18 человек'
        ],
        correctAnswer: 'от 8 до 20 человек'
    },
    {
        type: EQuestionType.Radio,
        title: 'Наполняемость классов для детей с умеренной умственной отсталостью и детей, имеющих сочетанный дефект:',
        choices: [
            'от 6 до 8 человек',
            'от 3 до 6 человек',
            'от 8 до 10 человек'
        ],
        correctAnswer: 'от 3 до 6 человек'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачи дошкольных организаций являются:',
        choices: [
            'охрана жизни и здоровья воспитанников дошкольного возраста',
            'создание условий для развития функциональной грамотности обучающихся через освоение типовых учебных программ, направленных на формирование и развитие компетентной личности',
            'развитие творческих, духовных и физических возможностей личности, формирование прочных основ нравственности и здорового образа жизни'
        ],
        correctAnswer: 'охрана жизни и здоровья воспитанников дошкольного возраста'
    },
    {
        type: EQuestionType.Radio,
        title: 'Начальная школа:',
        choices: [
            'организация образования, обеспечивающая получение общего среднего образования обучающимися, проживающими в населенных пунктах с малой численностью жителей',
            'организация образования, реализующая общеобразовательные учебные программы начального образования, а также учебные программы дополнительного образования обучающихся и воспитанников ',
            'общеобразовательная школа с малым контингентом обучающихся, совмещенными класс-комплектами и со специфической формой организации учебных занятий'
        ],
        correctAnswer: 'организация образования, реализующая общеобразовательные учебные программы начального образования, а также учебные программы дополнительного образования обучающихся и воспитанников '
    },
    {
        type: EQuestionType.Radio,
        title: 'Гимназия:',
        choices: [
            'учебное заведение, реализующее образовательную учебную программу общего среднего образования',
            'организация образования, реализующая самостоятельно разработанные интегрированные образовательные программы, прошедшая авторизацию в организации международного бакалавриата или международную институциональную аккредитацию',
            'учебное заведение, реализующее общеобразовательные и дополнительные образовательные учебные программы начального, основного среднего образования, обеспечивающие расширенное и углубленное образование по общественно-гуманитарному и иным направлениям обучения в соответствии со склонностями и способностями обучающихся '
        ],
        correctAnswer: 'учебное заведение, реализующее общеобразовательные и дополнительные образовательные учебные программы начального, основного среднего образования, обеспечивающие расширенное и углубленное образование по общественно-гуманитарному и иным направлениям обучения в соответствии со склонностями и способностями обучающихся '
    },
    {
        type: EQuestionType.Radio,
        title: 'Лицей:',
        choices: [
            'организация образования, обеспечивающая получение общего среднего образования обучающимися, проживающими в населенных пунктах, не имеющих соответствующих общеобразовательных школ;',
            'учебное заведение, реализующее общеобразовательные и дополнительные образовательные учебные программы основного среднего и общего среднего образования, обеспечивающие расширенное и углубленное естественно-математическое образование учащихся в соответствии с их склонностями и способностями;',
            'организация среднего образования, на базе которой консолидируются образовательные ресурсы близлежащих малокомплектных школ для проведения краткосрочных сессионных занятий, промежуточной и итоговой аттестации обучающихся в целях обеспечения доступа к качественному образованию учащихся малокомплектных школ;'
        ],
        correctAnswer: 'учебное заведение, реализующее общеобразовательные и дополнительные образовательные учебные программы основного среднего и общего среднего образования, обеспечивающие расширенное и углубленное естественно-математическое образование учащихся в соответствии с их склонностями и способностями;'
    },
    {
        type: EQuestionType.Radio,
        title: 'Задачами организаций образования являются:',
        choices: [
            'обеспечение получения обучающимися базисных основ наук, предусмотренных соответствующим государственным общеобязательным стандартом образования',
            'введение новых учебных программ, профильных предметов для реализации дополнительных образовательных программ, отвечающих целям и задачам',
            'создание совместных организаций образования на основании двусторонних международных соглашений'
        ],
        correctAnswer: 'обеспечение получения обучающимися базисных основ наук, предусмотренных соответствующим государственным общеобязательным стандартом образования'
    },
    {
        type: EQuestionType.Radio,
        title: 'Лицейский компонент обеспечивается:',
        choices: [
            'организует образовательный процесс в соответствии с учебными планами и программами с учетом требований режима содержания',
            'индивидуальным выбором каждого лицея профилей обучения, индивидуальной программой развития, использованием инновационных методик и технологий обучения',
            'обеспечивает сохранность учебно-методических пособий, оборудования и другого имущества'
        ],
        correctAnswer: 'индивидуальным выбором каждого лицея профилей обучения, индивидуальной программой развития, использованием инновационных методик и технологий обучения'
    },
    {
        type: EQuestionType.Radio,
        title: 'Гимназии, лицеи и профильные школы:',
        choices: [
            'осуществляет контроль за соблюдением работниками во время нахождения их на территории исправительного учреждения',
            'обеспечивает соблюдение работниками требований внутреннего распорядка исправительных учреждений',
            'участвуют в международной деятельности по линии образования, науки, культуры'
        ],
        correctAnswer: 'участвуют в международной деятельности по линии образования, науки, культуры'
    },
    {
        type: EQuestionType.Radio,
        title: 'Администрация исправительного учреждения:',
        choices: [
            'ходатайствует перед администрацией учреждения о поощрении обучающихся за успехи в учебе и соблюдении дисциплины',
            'ведет учет осужденных, подлежащих обязательному общеобразовательному и профессиональному обучению',
            'оказывает помощь обучающимся в подготовке к занятиям, овладении методами самообразования, администрации учреждения – в духовно-нравственном воспитании осужденных, в работе по их социальной адаптации и реабилитации'
        ],
        correctAnswer: 'ведет учет осужденных, подлежащих обязательному общеобразовательному и профессиональному обучению'
    },
    {
        type: EQuestionType.Radio,
        title: 'Педагогический коллектив Школы:',
        choices: [
            'осуществляет ежедневный контроль за посещением осужденными занятий в школе',
            'обеспечивает взаимодействие администрации, педагогов и технического персонала школы с работниками частей, и служб учреждения по вопросам обучения, воспитания осужденных',
            'проводит совместно с администрацией учреждения работу по обеспечению полного охвата подлежащих обязательному обучению осужденных, не достигших тридцатилетнего возраста и не имеющих общего среднего образования'
        ],
        correctAnswer: 'проводит совместно с администрацией учреждения работу по обеспечению полного охвата подлежащих обязательному обучению осужденных, не достигших тридцатилетнего возраста и не имеющих общего среднего образования'
    },
    {
        type: EQuestionType.Radio,
        title: 'При вечерней и заочной формах обучения классы открываются при наличии не менее:',
        choices: [
            '9 обучающихся',
            '7 обучающихся',
            '12 обучающихся'
        ],
        correctAnswer: '9 обучающихся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Учебно-консультационные пункты, классы заочного обучения и индивидуальные группы при дневных общеобразовательных школах, а также вечерние отделения в дневных общеобразовательных школах, открываются:',
        choices: [
            'в городах при наличии не менее 40 обучающихся',
            'в городах при наличии не менее 60 обучающихся',
            'в городах при наличии не менее 50 обучающихся'
        ],
        correctAnswer: 'в городах при наличии не менее 50 обучающихся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Наполняемость классов всех уровней вечерней школы, при дневной форме обучения, устанавливается в количестве:',
        choices: [
            'в городских организациях образования –20 обучающихся',
            'в городских организациях образования – 10 обучающихся',
            'в городских организациях образования – 30 обучающихся'
        ],
        correctAnswer: 'в городских организациях образования –20 обучающихся'
    },
    {
        type: EQuestionType.Radio,
        title: 'Дошкольные организации в своей деятельности руководствуются:',
        choices: [
            'Конституцией Республики Казахстан, законами Республики Казахстан, настоящими Правилами, уставом дошкольной организации и другими нормативными правовыми актами Республики Казахстан',
            'законами Республики Казахстан, настоящими Правилами и другими нормативными правовыми актами Республики Казахстан',
            'Конституцией Республики Казахстан и уставом дошкольной организации '
        ],
        correctAnswer: 'Конституцией Республики Казахстан, законами Республики Казахстан, настоящими Правилами, уставом дошкольной организации и другими нормативными правовыми актами Республики Казахстан'
    }
],
    time: 10,
    passingScore: 5,
    questionsTotal: 10
};
