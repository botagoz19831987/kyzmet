import {IExam} from '../../../shared/models/test.model';

export const headOfEducationalOrganizationSecond: IExam = {
    id: 'headOfEducationalOrganizationSecond',
    title: 'Руководитель организации образования',
    nameOfProgram: 'Аттестация руководителя',
    nameOfProgramKz: 'Басшыны аттестаттау',
    topics: [
        {
            id: 'tutorStatusLaw',
            title: 'Закон «О статусе педагога»',
            questions: [],
            questionsCount: 5,
            passingScore: 0
        },
        {
            id: 'educationLaw',
            title: 'Закон «Об образовании»',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'antiCorrupitonForHearOfEducation',
            title: 'Закон «O противодействии коррупции»',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'approvalOfStandards',
            title: 'Приказ Министерства просвещения РК от 3 августа 2022 года № 348',
            questions: [],
            questionsCount: 5,
            passingScore: 0
        },
        {
            id: 'familyCode',
            title: 'Кодекс о браке (супружестве) и семье',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'workCode',
            title: 'Трудовой кодекс Республики Казахстан',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
        {
            id: 'childrenRights',
            title: 'Закон «О правах ребенка в РК»',
            questions: [],
            questionsCount: 10,
            passingScore: 0
        },
    ],
    time: 90,
    questionsTotal: 60,
    passingScore: 42
};
