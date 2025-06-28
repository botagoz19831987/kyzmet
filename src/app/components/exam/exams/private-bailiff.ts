import {IExam} from '../../../shared/models/test.model';

export const privateBailiffExam: IExam = {
    id: 'privateBailiffExam',
    title: 'Частный судебный исполнитель',
    topics: [
        {
            id: 'privateBailiff',
            title: 'Частный судебный исполнитель',
            questions: [],
            questionsCount: 100,
            passingScore: 70
        }
    ],
    time: 90,
    questionsTotal: 100,
    passingScore: 70
};

