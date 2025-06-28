import {IExam} from '../../../shared/models/test.model';

export const advocacy: IExam = {
    id: 'advocacy',
    title: 'Адвокатура',
    topics: [
        {
            id: 'civilCodeForAdvocacy',
            title: 'Гражданский кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 0
        },
        {
            id: 'civilProcedureCodeForAdvocacy',
            title: 'Гражданский процессуальный кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 0
        },
        {
            id: 'criminalCode',
            title: 'Уголовный кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 0
        },
        {
            id: 'codeOfCriminalProcedureForAdvocacy',
            title: 'Уголовно-процессуальный кодекс РК',
            questions: [],
            questionsCount: 15,
            passingScore: 0
        },
        {
            id: 'adminOffensesForAdvocacy',
            title: 'Кодекс об административных правонарушениях',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'antiCorruptionForAdvocacy',
            title: 'Закон «O противодействии коррупции»',
            questions: [],
            questionsCount: 5,
            passingScore: 0
        },
        {
            id: 'adminProceduresForAdvocacy',
            title: 'Административный процедурно-процессуальный кодекс РК',
            questions: [],
            questionsCount: 5,
            passingScore: 0
        },
        {
            id: 'advocacyAndLegalAssistance',
            title: 'Закон «Об адвокатской деятельности и юридической помощи»',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'advocacyAndLegalAssistance',
            title: 'Закон «Об адвокатской деятельности и юридической помощи»',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
          id: 'advocacyCombatingMoney',
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

