import {EQuestionType, ITest} from '../../../shared/models/test.model';

export const citizensAppeal: ITest = {
  id: 'citizensAppeal',
  title: 'Рассмотрение ОГ',
  description: '<p>Тест на знание закона «O порядке рассмотрение ОГ»</p>',
  questions: [
    {
      type: EQuestionType.Radio,
      title: 'Запрос – это:',
      choices: [
        'просьба лица о предоставлении информации по интересующим вопросам личного или общественного характера',
        'просьба в устной или письменной форме, в том числе в виде электронного документа, о предоставлении информации, озвученная или направленная обладателю информации по вопросам личного характера',
        'рекомендация лица по устранению коллизии в законодательстве',
        'просьба в устной форме о предоставлении информации, озвученная в порядке, установленном Законом «О порядке рассмотрения обращений физических и юридических лиц»'
      ],
      correctAnswer: 'просьба лица о предоставлении информации по интересующим вопросам личного или общественного характера'
    },
    {
      type: EQuestionType.Radio,
      title: ' К основным принципам регулирования правоотношений, связанных с рассмотрением обращений физических и юридических лиц, не относится: ',
      choices: [
        'размещение на интернет-ресурсе государственного органа информации об обратившихся с жалобами лицах',
        'недопустимость проявлений бюрократизма и волокиты при рассмотрении обращений',
        'прозрачность деятельности субъектов и должностных лиц при рассмотрении обращений',
        'гарантия соблюдения прав, свобод и законных интересов физических и юридических лиц',
      ],
      correctAnswer: 'размещение на интернет-ресурсе государственного органа информации об обратившихся с жалобами лицах'
    },
    {
      type: EQuestionType.Radio,
      title: 'Если обращение, поступило субъекту или должностному лицу, в компетенцию которого не входит разрешение поставленных в обращении вопросов, данное обращение подлежит:',
      choices: [
        'направлению компетентному субъекту или должностному лицу в течение трех рабочих дней со дня его поступления',
        'направлению компетентному субъекту или должностному лицу в течение трех календарных дней',
        'направлению субъекту или должностному лицу в течение пяти календарных дней',
        'направлению компетентному субъекту или должностному лицу в течение пяти рабочих дней со дня написания',
      ],
      correctAnswer: 'направлению компетентному субъекту или должностному лицу в течение трех рабочих дней со дня его поступления'
    },
    {
      type: EQuestionType.Radio,
      title: 'Физическое либо юридическое лицо, подавшее обращение, не вправе:',
      choices: [
        'в обоснование своей позиции приводить не соответствующие действительности факты',
        'требовать возмещения убытков, если они стали результатом нарушений установленного порядка рассмотрения обращений',
        'ознакомиться с материалами, связанными с рассмотрением его обращения, участвовать в рассмотрении обращения, если это не нарушает права, свободы других лиц',
        'получать мотивированный ответ в письменной или устной форме о принятом решении',
      ],
      correctAnswer: 'в обоснование своей позиции приводить не соответствующие действительности факты'
    },
    {
      type: EQuestionType.Radio,
      title: ' Жалоба на действия (бездействие) должностных лиц, а также на решения субъекта подается вышестоящему должностному лицу или субъекту в порядке подчиненности не позднее:',
      choices: [
        '3 месяцев  с момента, когда физическому или юридическому лицу стало известно о совершении действия либо принятии решения соответствующим субъектом или должностным лицом',
        '5 месяцев с момента, когда физическому или юридическому лицу стало известно о совершении действия либо принятии решения соответствующим субъектом или должностным лицом',
        '6 месяцев с момента, когда физическому или юридическому лицу стало известно о совершении действия либо принятии решения соответствующим субъектом или должностным лицом',
        '1 месяца с момента, когда физическому или юридическому лицу стало известно о совершении действия либо принятии решения соответствующим субъектом или должностным лицом',
      ],
      correctAnswer: '3 месяцев  с момента, когда физическому или юридическому лицу стало известно о совершении действия либо принятии решения соответствующим субъектом или должностным лицом'
    },
    {
      type: EQuestionType.Radio,
      title: 'Субьекты и должностные лица вправе:',
      choices: [
        'запрашивать и получать в установленном порядке необходимую для рассмотрения обращений информацию',
        'принимать законные и обоснованные решения',
        'не допускать обращения лиц во вред лицу, его подавшему, или в интересах которого оно было подано',
        'не направлять жалобу на рассмотрение должностным лицам, действия (бездействие) которых обжалуются',
      ],
      correctAnswer: 'запрашивать и получать в установленном порядке необходимую для рассмотрения обращений информацию'
    },
    {
      type: EQuestionType.Radio,
      title: 'Учет обращения – это:',
      choices: [
        'фиксирование сведений по приему и рассмотрению обращения и их отражение в государственной правовой статистической отчетности',
        'действие субъекта, должностного лица по принятию обращения физических и (или) юридических лиц',
        'фиксация в учетном информационном документе кратких данных по содержанию обращения и присвоение регистрационного номера каждому поступившему обращению',
        'принятие субъектом, должностным лицом в пределах своей компетенции по зарегистрированному обращению решения в соответствии с законодательством Республики Казахстан',
      ],
      correctAnswer: 'фиксирование сведений по приему и рассмотрению обращения и их отражение в государственной правовой статистической отчетности'
    },
    {
      type: EQuestionType.Radio,
      title: 'Прием обращения – это :',
      choices: [
        'действие субъекта, должностного лица по принятию обращения физических и (или) юридических лиц',
        'фиксирование сведений по приему и рассмотрению обращения и их отражение в государственной правовой статистической отчетности',
        'фиксация в учетном информационном документе кратких данных по содержанию обращения и присвоение регистрационного номера каждому поступившему обращению',
        'принятие субъектом, должностным лицом в пределах своей компетенции по зарегистрированному обращению решения в соответствии с законодательством Республики Казахстан',
      ],
      correctAnswer: 'действие субъекта, должностного лица по принятию обращения физических и (или) юридических лиц'
    },
    {
      type: EQuestionType.Radio,
      title: 'Регистрация обращения – это:',
      choices: [
        'фиксация в учетном информационном документе кратких данных по содержанию обращения и присвоение регистрационного номера каждому поступившему обращению',
        'фиксирование сведений по приему и рассмотрению обращения и их отражение в государственной правовой статистической отчетности',
        'действие субъекта, должностного лица по принятию обращения физических и (или) юридических лиц',
        'принятие субъектом, должностным лицом в пределах своей компетенции по зарегистрированному обращению решения в соответствии с законодательством Республики Казахстан',
      ],
      correctAnswer: 'фиксация в учетном информационном документе кратких данных по содержанию обращения и присвоение регистрационного номера каждому поступившему обращению'
    },
    {
      type: EQuestionType.Radio,
      title: 'Рассмотрение обращения – это:',
      choices: [
        'принятие субъектом, должностным лицом в пределах своей компетенции по зарегистрированному обращению решения в соответствии с законодательством Республики Казахстан',
        'фиксирование сведений по приему и рассмотрению обращения и их отражение в государственной правовой статистической отчетности',
        'действие субъекта, должностного лица по принятию обращения физических и (или) юридических лиц',
        'фиксация в учетном информационном документе кратких данных по содержанию обращения и присвоение регистрационного номера каждому поступившему обращению',
      ],
      correctAnswer: 'принятие субъектом, должностным лицом в пределах своей компетенции по зарегистрированному обращению решения в соответствии с законодательством Республики Казахстан'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращение – это:',
      choices: [
        'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное письменное, устное либо в форме электронного документа, видеоконференцсвязи, видеообращения, предложение, заявление, жалоба, запрос или отклик',
        'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное письменное, устное либо в форме электронного документа, предложение, заявление, жалоба, запрос или отклик',
        'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное письменное, устное либо в форме электронного документа, видеоконференцсвязи, видеообращения, предложение, запрос или отклик',
        'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное письменное, устное либо в форме электронного документа, видеоконференцсвязи, видеообращения, предложение, заявление, жалоба или запрос',
      ],
      correctAnswer: 'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное письменное, устное либо в форме электронного документа, видеоконференцсвязи, видеообращения, предложение, заявление, жалоба, запрос или отклик'
    },
    {
      type: EQuestionType.Radio,
      title: 'Рассмотрение обращений прекращается если:',
      choices: [
        'в повторных обращениях не приводятся новые доводы или вновь открывшиеся обстоятельства, а в материалах предыдущего обращения имеются исчерпывающие материалы проверок и заявителям в установленном порядке давались ответы',
        'в обращениях не приводятся новые доводы или вновь открывшиеся обстоятельства',
        'в обращении не изложена суть вопроса',
        'в обращении не содержатся сведения о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности',
      ],
      correctAnswer: 'в повторных обращениях не приводятся новые доводы или вновь открывшиеся обстоятельства, а в материалах предыдущего обращения имеются исчерпывающие материалы проверок и заявителям в установленном порядке давались ответы'
    },
    {
      type: EQuestionType.Radio,
      title: 'В обращении физического лица должны быть указаны:',
      choices: [
        'его фамилия, имя, а также по желанию отчество, индивидуальный идентификационный номер (при его наличии), почтовый адрес, подпись физического лица',
        'его фамилия, имя, отчество, почтовый адрес, бизнес-идентификационный номер',
        'наименование, почтовый адрес, адрес электронной почты,  бизнес-идентификационный номер',
        'фамилия, имя, отчество, контактный номер телефона, адрес электронной почты, подпись физического лица'
      ],
      correctAnswer: 'его фамилия, имя, а также по желанию отчество, индивидуальный идентификационный номер (при его наличии), почтовый адрес, подпись физического лица'
    },
    {
      type: EQuestionType.Radio,
      title: 'Срок рассмотрения по обращению продлевается:',
      choices: [
        'руководителем субъекта или его заместителем',
        'непосредственным исполнителем',
        'руководителем структурного подразделения государственного органа, рассматривающего обращение',
        'руководителем службы документооборота',
      ],
      correctAnswer: 'руководителем субъекта или его заместителем'
    },
    {
      type: EQuestionType.Radio,
      title: 'Прием физических и юридических лиц в государственных органах должен проводиться:',
      choices: [
        'по месту работы в установленные и доведенные до сведения физических и юридических лиц дни и часы',
        'не реже 2-х раз в месяц согласно графику приема, утверждаемому руководителем соответствующего государственного органа',
        'по месту работы в любое удобное для физических и юридических лиц время',
        'не реже 3-х раз в месяц согласно графику приема, утверждаемому руководителем соответствующего государственного органа',
      ],
      correctAnswer: 'по месту работы в установленные и доведенные до сведения физических и юридических лиц дни и часы'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращения принимаются к сведению и списываются в дело руководителем субъекта или его заместителем:',
      choices: [
        'при отсутствии в обращении каких-либо рекомендаций, требований, ходатайств, просьб',
        'если в обращении не изложена суть',
        'если в обращении не содержится конкретных фактов, опровергающих или подтверждающих доводы заявителя',
        'если в обращении не содержится сведений о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности',
      ],
      correctAnswer: 'при отсутствии в обращении каких-либо рекомендаций, требований, ходатайств, просьб'
    },
    {
      type: EQuestionType.Radio,
      title: 'Отклик – это:',
      choices: [
        'выражение лицом своего отношения к проводимой государством внутренней и внешней политике, а также к событиям и явлениям общественного характера',
        'просьба лица о предоставлении информации по интересующим вопросам личного или общественного характера',
        'рекомендация лица по совершенствованию законов и иных нормативных правовых актов, деятельности государственных органов, развитию общественных отношений, улучшению социально-экономической и иных сфер деятельности государства и общества',
        'направленное субъекту, рассматривающему обращение, или должностному лицу индивидуальное или коллективное предложение, заявление, жалоба, запрос в видеоформате',
      ],
      correctAnswer: 'выражение лицом своего отношения к проводимой государством внутренней и внешней политике, а также к событиям и явлениям общественного характера'
    },
    {
      type: EQuestionType.Radio,
      title: 'Рекомендация лица по совершенствованию законов и иных нормативных правовых актов, деятельности государственных органов, развитию общественных отношений, улучшению социально-экономической и иных сфер деятельности государства и общества :',
      choices: [
        'предложение',
        'отклик',
        'запрос',
        'заявлние',
      ],
      correctAnswer: 'предложение'
    },
    {
      type: EQuestionType.Radio,
      title: 'Закон «О порядке рассмотрения обращений физических и юридических лиц» распространяется на:',
      choices: [
        'на физических и юридических лиц, подавших обращения, на субъекты и должностных лиц, рассматривающих обращения',
        'на должностных и юридических лиц',
        'на лиц, рассматривающих обращение',
        'на должностных лиц уполномоченных органов',
      ],
      correctAnswer: 'на физических и юридических лиц, подавших обращения, на субъекты и должностных лиц, рассматривающих обращения'
    },
    {
      type: EQuestionType.Radio,
      title: 'Если обращение не может быть разрешено должностным лицом во время приема оно:  ',
      choices: [
        'излагается в письменной форме и с ним ведется работа как с письменным обращением',
        'фиксируется службой документооборота в протокольной форме',
        'рассматривается вторично при повторной записи гражданина на прием',
        'гражданин обращается в вышестоящую организацию',
      ],
      correctAnswer: 'излагается в письменной форме и с ним ведется работа как с письменным обращением'
    },
    {
      type: EQuestionType.Radio,
      title: 'К субъектам, рассматривающим обращения граждан, не относятся:',
      choices: [
        'неправительственные организации',
        'государственные органы',
        'органы местного самоуправления',
        'юридические лица со стопроцентным участием государства либо предоставляющие товары (работы, услуги) в соответствии с условиями государственного заказа и (или) государственного закупа',
      ],
      correctAnswer: 'неправительственные организации'
    },
    {
      type: EQuestionType.Radio,
      title: 'Требование лица о восстановлении или защите нарушенных прав, свобод или законных интересов его или других лиц, об устранении неправомерных действий или бездействия государственных органов, органов местного самоуправления, а также отмене их незаконных решений:',
      choices: [
        'жалоба',
        'предложение',
        'отклик',
        'запрос',
      ],
      correctAnswer: 'жалоба'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращение может вноситься:',
      choices: [
        'через представителя физического или юридического лица',
        'в устном порядке',
        'без указания сведений об авторе обращения',
        'нет правильного ответа',
      ],
      correctAnswer: 'через представителя физического или юридического лица'
    },
    {
      type: EQuestionType.Radio,
      title: 'Акты, документы и другие материалы, имеющие значение для рассмотрения обращений, за исключением тех, которые содержат государственные секреты или иную охраняемую законом тайну, представляются субъектам или должностным лицам, непосредственно рассматривающим обращения:',
      choices: [
        'в течение пятнадцати календарных дней со дня поступления обращения',
        'в течение десяти календарных дней со дня поступления обращения',
        'в течение трех календарных дней со дня поступления обращения',
        'в течение пяти календарных дней со дня поступления обращения',
      ],
      correctAnswer: 'в течение пятнадцати календарных дней со дня поступления обращения'
    },
    {
      type: EQuestionType.Radio,
      title: 'По поручению руководителя субъекта с выездом на место могут проверяться обращения:',
      choices: [
        'об ущемлении прав, свобод и законных интересов физических и юридических лиц, о многочисленных или грубых нарушениях закона',
        'в случае, если лицом в обращении изложены не все имеющиеся по вопросу обстоятельства',
        'в случае невозможности автором обращения самостоятельно представить  необходимые для решения вопроса дополнительные сведения',
        'поступившие посредством видеообращения',
      ],
      correctAnswer: 'об ущемлении прав, свобод и законных интересов физических и юридических лиц, о многочисленных или грубых нарушениях закона'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращение физического и (или) юридического лица, для рассмотрения которого не требуется получение информации от иных субъектов, рассматривается в течение:',
      choices: [
        'пятнадцати календарных дней со дня поступления субъекту, должностному лицу',
        'одного месяца со дня поступления субъекту, должностному лицу',
        'десяти календарных дней со дня поступления субъекту, должностному лицу',
        'пятнадцати рабочих дней со дня поступления субъекту, должностному лицу',
      ],
      correctAnswer: 'пятнадцати календарных дней со дня поступления субъекту, должностному лицу'
    },
    {
      type: EQuestionType.Radio,
      title: 'При поступлении нескольких обращений по одному и тому же вопросу в интересах одного и того же лица, срок рассмотрения обращения исчисляется:',
      choices: [
        'со дня поступления первого обращения',
        'со дня поступления последнего обращения',
        'для каждого обращения по-разному со дня регистрации его в государственном органе',
        'нет правильного ответа',
      ],
      correctAnswer: 'со дня поступления первого обращения'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращение, по которому невозможно установить авторство, отсутствуют подпись, в том числе электронная цифровая подпись, почтовый адрес: ',
      choices: [
        'анонимное обращение',
        'повторное обращение',
        'отклик',
        'анонимное предложение',
      ],
      correctAnswer: 'анонимное обращение'
    },
    {
      type: EQuestionType.Radio,
      title: 'Рассмотрению подлежит: ',
      choices: [
        'анонимное обращение, содержащее сведения о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности',
        'анонимное обращение',
        'обращение, в котором не изложена суть вопроса',
        'обращение, изложенное устно в ходе официальной встречи',
      ],
      correctAnswer: 'анонимное обращение, содержащее сведения о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности'
    },
    {
      type: EQuestionType.Radio,
      title: 'Анонимное обращение, содержащее сведения о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности подлежит:',
      choices: [
        'немедленному перенаправлению в государственные органы в соответствии с их компетенцией',
        'в общеустановленном порядке подлежит регистрации',
        'отклонению государственным органом',
        'оставлению без рассмотрения',
      ],
      correctAnswer: 'немедленному перенаправлению в государственные органы в соответствии с их компетенцией'
    },
    {
      type: EQuestionType.Radio,
      title: 'Действие настоящего Закона «О порядке рассмотрения обращений физических и юридических лиц» не распространяется на обращения физических и юридических лиц:',
      choices: [
        'порядок рассмотрения которых установлен законодательством об административных правонарушениях, уголовно-процессуальным, гражданским процессуальным законодательством',
        'содержащие сведения о готовящихся или совершенных уголовных правонарушениях либо об угрозе государственной или общественной безопасности',
        'порядок рассмотрения которых установлен законодательством об административных правонарушениях, уголовно-процессуальным законодательством',
        'связанные со сведениями, составляющими служебную информацию',
      ],
      correctAnswer: 'порядок рассмотрения которых установлен законодательством об административных правонарушениях, уголовно-процессуальным, гражданским процессуальным законодательством'
    },
    {
      type: EQuestionType.Radio,
      title: 'Если условия, послужившие основанием для оставления обращения без рассмотрения, в последующем были устранены, субъект или должностное лицо:',
      choices: [
        'обязаны рассматривать указанное обращение',
        'не обязаны рассматривать обращение',
        'рассматривают обращение по поручению руководителя государственного органа',
        'рассматриваю обращения на основании письменных обоснований автора обращения',
      ],
      correctAnswer: 'обязаны рассматривать указанное обращение'
    },
    {
      type: EQuestionType.Radio,
      title: 'При подаче жалобы не указывается:',
      choices: [
        'срок, в течение которого жалоба должна быть рассмотрена государственным органом',
        'наименование субъекта или должность',
        'фамилии и инициалы должностных лиц, чьи действия обжалуются',
        'мотивы обращения и  требования',
      ],
      correctAnswer: 'срок, в течение которого жалоба должна быть рассмотрена государственным органом'
    },
    {
      type: EQuestionType.Radio,
      title: 'В тех случаях, когда необходимо проведение дополнительного изучения или проверки, срок рассмотрения обращения продлевается, о чем заявителю сообщается:',
      choices: [
        'в течение трех календарных дней со дня продления срока рассмотрения',
        'незамедлительно',
        'в течение пяти календарных дней со дня продления срока рассмотрения',
        'в течение трех рабочих  дней со дня продления срока рассмотрения',
      ],
      correctAnswer: 'в течение трех календарных дней со дня продления срока рассмотрения'
    },
    {
      type: EQuestionType.Radio,
      title: 'Ответы на обращения должны представляться:',
      choices: [
        'на государственном языке или на языке обращения',
        'исключительно на государственном языке',
        'исключительно на языке обращения',
        'в срок не более пяти рабочих дней со дня поступления субъекту, должностному лицу',
      ],
      correctAnswer: 'на государственном языке или на языке обращения'
    },
    {
      type: EQuestionType.Radio,
      title: 'К правам субъектов и должностных лиц относится: ',
      choices: [
        'обращение в суд о взыскании расходов, понесенных в связи с проверкой обращений, содержащих заведомо ложные сведения',
        'разглашение сведений о личной жизни физических лиц, в том числе выступающих в интересах юридического лица, без их согласия или сведения, составляющих государственные секреты либо иную охраняемую законом тайну',
        'обеспечение контроля за исполнением принятых решений',
        'сообщение физическим и юридическим лицам о принятых решениях в письменной форме либо в форме электронного документа',
      ],
      correctAnswer: 'обращение в суд о взыскании расходов, понесенных в связи с проверкой обращений, содержащих заведомо ложные сведения'
    },
    {
      type: EQuestionType.Radio,
      title: 'Ходатайство лица о содействии в реализации его прав и свобод или прав и свобод других лиц либо сообщение о нарушении законов и иных нормативных правовых актов, недостатках в работе субъектов, рассматривающих обращения, должностных лиц, либо критика их деятельности:',
      choices: [
        'заявление',
        'жалоба',
        'отклик',
        'обращение',
      ],
      correctAnswer: 'заявление'
    },
    {
      type: EQuestionType.Radio,
      title: 'Если международным договором, ратифицированным Республикой Казахстан, установлены иные правила, чем те, которые установлены Законом «О порядке рассмотрения обращений физических и юридических лиц», то:',
      choices: [
        'применяются правила международного договора',
        'применяются нормы Закона',
        'применяются нормы по усмотрению субъекта',
        'вопрос применения нормы решается после консультации с Министерством иностранных дел',
      ],
      correctAnswer: 'применяются правила международного договора'
    },
    {
      type: EQuestionType.Radio,
      title: 'Отказ в приеме обращения:',
      choices: [
        'запрещается',
        'должен быть мотивированным',
        'должен быть осуществлен в течение трех рабочих дней',
        'должен быть осуществлен в течение трех календарных дней',
      ],
      correctAnswer: 'запрещается'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обращение физического и (или) юридического лица, для рассмотрения которого требуются получение информации от иных субъектов, должностных лиц либо проверка с выездом на место, рассматривается и по нему принимается решение в течение:',
      choices: [
        'тридцати календарных дней со дня поступления субъекту, должностному лицу',
        'двадцати календарных дней со дня поступления субъекту, должностному лицу',
        'пятнадцати календарных дней со дня поступления субъекту, должностному лицу',
        'двух месяцев со дня поступления субъекту, должностному лицу',
      ],
      correctAnswer: 'тридцати календарных дней со дня поступления субъекту, должностному лицу'
    },
    {
      type: EQuestionType.Radio,
      title: 'Руководители государственных органов, органов местного самоуправления и их заместители обязаны проводить личный прием граждан и представителей юридических лиц, в том числе работников этих органов:',
      choices: [
        'не реже одного раза в месяц согласно графику приема',
        'не реже одного раза в квартал согласно графику приема',
        'не реже двух раз в месяц согласно графику приема',
        'не реже одного раза в полугодие',
      ],
      correctAnswer: 'не реже одного раза в месяц согласно графику приема'
    },
    {
      type: EQuestionType.Radio,
      title: 'Обжалование решений, принятых по результатам рассмотрения обращений, осуществляется посредством обращения:',
      choices: [
        'к вышестоящему должностному лицу или субъекту, в суд',
        'решения, принятые по результатам рассмотрения обращений обжалованию не подлежат',
        'в суд',
        'в общественную организацию',
      ],
      correctAnswer: 'к вышестоящему должностному лицу или субъекту, в суд'
    }
  ],
  time: 10,
  passingScore: 5,
  questionsTotal: 10
};
