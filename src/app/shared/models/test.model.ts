export interface IExam {
  id: string;
  title: string;
  topics: ITopic[];
  time: number;
  questionsTotal: number;
  passingScore: number;
  isPassed?: boolean;
  nameOfProgram?: string;
  nameOfProgramKz?: string;
}

export interface ITopic {
  id: string;
  title: string;
  questions: IQuestion[];
  questionsCount: number;
  correctAnswers?: number;
  isSectionCompleted?: boolean;
  passingScore: number;
  'title-kz'?: string;
  questionPerTitle?: number;
  questionsRatio?: {
    [key: string]: number;
  };
}

export interface ITest {
  id: string;
  title: string;
  description: string;
  questions: IQuestion[];
  time: number;
  passingScore: number;
  questionsTotal: number;
}

export interface IQuestion {
  type: EQuestionType;
  title: string;
  image?: string;
  audio?: string;
  choices: string[];
  selectedAnswer?: string;
  correctAnswer: string;
  solution?: string;
}

export enum EQuestionType {
  Checkbox = 'checkbox',
  Radio = 'radio'
}
