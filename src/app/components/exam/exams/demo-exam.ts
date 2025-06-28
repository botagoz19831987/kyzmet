import {IExam} from '../../../shared/models/test.model';

export const demoExam: IExam = {
  id: 'demoExam',
  title: 'Конституция РК',
  topics: [
    {
      id: 'constitution',
      title: 'Конституция РК',
      questions: [],
      questionsCount: 15,
      passingScore: 5
    }
  ],
  time: 30,
  questionsTotal: 15,
  passingScore: 5
};
