import {IExam} from '../../../shared/models/test.model';

export const administrativeCivilServicePilotProject: IExam = {
    id: 'administrativeCivilServicePilotProject',
    title: 'Административная госслужба (Пилотный проект)',
    topics: [
        {
            id: 'constitution',
            title: 'Конституция РК',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'civilService',
            title: 'Закон «O государственной службе РК»',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'antiCorruption',
            title: 'Закон «O противодействии коррупции»',
            questions: [],
            questionsCount: 15,
            passingScore: 5
        },
        {
            id: 'ethicalCode',
            title: 'Этический кодекс государственных служащих РК (правила служебной этики госслужащих)',
            questions: [],
            questionsCount: 10,
            passingScore: 5
        }
    ],
    time: 70,
    questionsTotal: 55,
    passingScore: 30
};

