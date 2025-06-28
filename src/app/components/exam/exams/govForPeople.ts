import {IExam} from '../../../shared/models/test.model';

export const govForPeople: IExam = {
  id: 'govForPeople',
  title: 'НАО «Правительство для граждан» (ЦОН)',
  topics: [
    {
      id: 'publicServices',
      title: 'Закон «O государственных услугах»',
      questions: [],
      questionsCount: 15,
      passingScore: 9
    },
    {
      id: 'personalData',
      title: 'Закон «O Персональных данных»',
      questions: [],
      questionsCount: 15,
      passingScore: 9
    },
    {
      id: 'antiCorruption',
      title: 'Закон «O противодействии коррупции»',
      questions: [],
      questionsCount: 15,
      passingScore: 9
    },
    {
      id: 'jointStockCompanies',
      title: 'Закон «Oб акционерных обществах»',
      questions: [],
      questionsCount: 15,
      passingScore: 6
    }
  ],
  time: 60,
  questionsTotal: 60,
  passingScore: 33
};

