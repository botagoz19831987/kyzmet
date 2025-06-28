import {IExam} from '../../../shared/models/test.model';

export const headOfEducationalOrganizationFirst: IExam = {
    id: 'headOfEducationalOrganizationFirst',
    title: 'Руководитель организации образования',
    nameOfProgram: 'Сертификация на назначение',
    nameOfProgramKz: 'Тағайындауға арналған сертификаттау',
    topics: [
        {
            id: 'workCode',
            title: 'Трудовой кодекс РК',
            questions: [],
            questionsCount: 10,
            passingScore: 5
        },
        {
            id: 'educationLaw',
            title: 'Закон «Об образовании»',
            questions: [],
            questionsCount: 10,
            passingScore: 5
        },
        {
            id: 'antiCorrupitonForHearOfEducation',
            title: 'Закон «O противодействии коррупции»',
            questions: [],
            questionsCount: 10,
            passingScore: 5
        },
        {
            id: 'tutorStatusLaw',
            title: 'Закон «О статусе педагога»',
            questions: [],
            questionsCount: 10,
            passingScore: 5
        },
        {
            id: 'approvalOfStandards',
            title: 'Закон об утверждении государственных общеобязательных стандартов',
            questions: [],
            questionsCount: 4,
            passingScore: 2
        },
        {
            id: 'typicalRules',
            title: 'Закона об утверждении типовых правил',
            questions: [],
            questionsCount: 4,
            passingScore: 2
        },
    ],
    time: 180,
    questionsTotal: 48,
    passingScore: 24
};
