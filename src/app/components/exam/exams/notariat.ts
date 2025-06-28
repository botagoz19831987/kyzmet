import {IExam} from '../../../shared/models/test.model';

export const notariat: IExam = {
    id: 'notariat',
    title: 'Нотариат',
    topics: [
        {
            id: 'civilCodeForNotariat',
            title: 'Гражданский кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'landCode',
            title: 'Земельный кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'familyCode',
            title: 'Кодекс «О браке (супружестве) и семье»',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'adminProceduresForNotariat',
            title: 'Административный процедурно-процессуальный кодекс РК',
            questions: [],
            questionsCount: 5,
            passingScore: 5
        },
        {
            id: 'antiCorruptionForNotariat',
            title: 'Закон «O противодействии коррупции»',
            questions: [],
            questionsCount: 5,
            passingScore: 5
        },
        {
            id: 'lawRegistrationOfRealEstate',
            title: 'Закон «О государственной регистрации прав на недвижимое имущество»',
            questions: [],
            questionsCount: 10,
            passingScore: 15
        },
        {
            id: 'lawOfHousingRelations',
            title: 'Закон «О жилищных отношениях»',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'lawOfNotariat',
            title: 'Закон «О нотариате»',
            questions: [],
            questionsCount: 15,
            passingScore: 0
        },
        {
            id: 'notariatCombatingMoney',
            title: 'Закон «О противодействии легализации (отмыванию) доходов, полученных преступным путем, и финансированию терроризма»',
            questions: [],
            questionsCount: 5,
            passingScore: 0
        }
    ],
    time: 90,
    questionsTotal: 100,
    passingScore: 70
};

