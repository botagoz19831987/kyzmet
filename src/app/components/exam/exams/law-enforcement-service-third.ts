import {IExam} from '../../../shared/models/test.model';

export const lawEnforcementServiceThird: IExam = {
  id: 'lawEnforcementServiceThird',
  title: 'Правоохранительная госслужба (Программа 3 (бывшая программа 4))',
  topics: [
    {
      id: 'constitution',
      title: 'Конституция РК',
      questions: [],
      questionsCount: 15,
      passingScore: 5
    },
    {
      id: 'president',
      title: 'Закон «O Президенте РК»',
      questions: [],
      questionsCount: 15,
      passingScore: 5
    },
    {
      id: 'lawEnforcementService',
      title: 'Закон «O правохранительной службе»',
      questions: [],
      questionsCount: 15,
      passingScore: 5
    },
    {
      id: 'ethicalCode',
      title: 'Этический кодекс государственных служащих РК (правила служебной этики госслужащих)',
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
    }
  ],
  time: 60,
  questionsTotal: 75,
  passingScore: 35
};

