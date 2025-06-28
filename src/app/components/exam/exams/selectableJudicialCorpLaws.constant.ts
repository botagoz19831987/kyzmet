import { ITopic } from '../../../shared/models/test.model';

export const selectableJudicialCorpLawsConstant: Map<string, ITopic> = new Map<string, ITopic>([
  ['familyLaw', {
    id: 'familyLaw',
    title: 'Семейное право',
    'title-kz': 'Отбасы құқығы',
    questions: [],
    questionsCount: 15,
    passingScore: 0
  }],
  ['intellectualProperty', {
    id: 'intellectualProperty',
    title: 'Интеллектуальное право',
    'title-kz': 'Зияткерлік құқық',
    questions: [],
    questionsCount: 15,
    passingScore: 0
  }],
  ['workCode', {
    id: 'workCode',
    title: 'Трудовое право',
    'title-kz': 'Қазақстан Республикасының Еңбек Кодексі',
    questions: [],
    questionsCount: 15,
    passingScore: 0
  }],
  ['corporateLaw', {
    id: 'corporateLaw',
    title: 'Корпоративное право',
    'title-kz': 'Корпоративтік құқық',
    questions: [],
    questionsCount: 15,
    passingScore: 0
  }],
]);
