import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EQuestionType, IExam, IQuestion, ITopic} from '../../shared/models/test.model';

import {AngularFirestore} from '@angular/fire/firestore';
import {LanguageService} from '../../shared/services/language.service';
import { AuthService } from '../../shared/services/auth.service';
import { selectableJudicialCorpLawsConstant } from './exams/selectableJudicialCorpLaws.constant';
import { UserService } from '../../shared/services/user.service';
import { tap } from 'rxjs/operators';
import {LISTENING_TYPE} from "../../shared/enums/enums";

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  isCdVisible: boolean;
  public activeLanguage = 'ru';
  examMutateParams;
  showSolution = false;
  panelOpenState = false;

  constructor(
    private languageService: LanguageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private userService: UserService,
    private authService: AuthService,
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.examMutateParams = params;
    });
  }

  public get isLastQuestion(): boolean {
    const TOPIC = this.topicById(this.activeTopic);
    const LAST_TOPIC = this.exam.topics[this.exam.topics.length - 1];
    return !!(LAST_TOPIC.id === this.activeTopic && TOPIC.questionsCount === this.activeQuestion);
  }

  public get getCorrectAnswersCount(): number {
    let count = 0;
    this.exam.topics.forEach(topic => {
      topic.questions.forEach(question => {
        if (question?.selectedAnswer === question?.correctAnswer){ count++; }
      });
    });
    return count;
  }

  public get resultTitle(): string {
    if (this.isFailed) { return this.activeLanguage === 'ru' ? 'Тест не пройден!' : 'Тестен өтпедіңіз!'; }
    if (this.isPassed) { return this.activeLanguage === 'ru' ? 'Тест успешно пройден!' : 'Тестен сәтті өтіңіз!'; }
    if (this.isTimedOut) { return this.activeLanguage === 'ru' ? 'Тест не пройден!' : 'Тестен өтпедіңіз!!'; }
    return '';
  }

  public get resultDescription(): string {
    if (this.isFailed) { return this.activeLanguage === 'ru' ? 'Вы не смогли набрать необходимое количество баллов!' : 'Баллдың қажетті санын ала алмадыңыз!'; }
    if (this.isPassed) { return this.activeLanguage === 'ru' ? 'Поздравляем, Вы набрали необходимое количество баллов!' : 'Құттықтаймыз, сіз қажетті ұпай санын жинадыңыз!'; }
    if (this.isTimedOut) { return this.activeLanguage === 'ru' ? 'Вы не успели пройти тест в отведенный промежуток времени!' : 'Белгіленген уақытта сынақтан өтуге үлгермедіңіз!'; }
    return '';
  }

  public get resultImg(): string {
    if (this.isFailed) { return 'failed.svg'; }
    if (this.isPassed) { return 'completed.svg'; }
    if (this.isTimedOut) { return 'failed.svg'; }
    return '';
  }
  isLoading = true;
  exam: IExam;
  tests: any[];
  isStarted = false;
  isFinished = false;
  isResults = false;

  isFailed = false;
  isPassed = false;
  isTimedOut = false;

  questionType = EQuestionType;
  activeQuestion = 0;
  activeTopic: string;

  correctAnswers = [];

  ngOnInit(): void {
    this.languageService.getLanguage()
      .subscribe((language) => {
        this.activeLanguage = language;
      });
    this.activatedRoute.params.subscribe(params => {
      this.afs
        .collection('exams', ref =>
          ref.where('id', '==', params.id))
        .valueChanges()
        .subscribe((resp: IExam[]) => {
          this.exam = resp[0];
          console.log(this.exam);
          this.userService.getDetails(this.authService.user$.value?.uid).pipe(
            tap(user => {
              if (['product43', 'product44', 'product45'].includes(this.authService.user$.value?.product)) {
                user.data().selectedLaws?.forEach(
                  lawId => this.exam.topics.push(selectableJudicialCorpLawsConstant.get(lawId))
                );
              }
            })
          ).subscribe();

          if (Object.keys(this.examMutateParams).length) {
            this.exam.passingScore = +this.examMutateParams.passingScore;
            let totalQ = 0;
            this.exam.topics.forEach((topic, index) => {
              if (!Object.keys(this.examMutateParams).includes(topic.id)) {
                this.exam.topics.splice(index, 1);
              } else {
                totalQ += topic.questionsCount;
              }
              this.exam.questionsTotal = totalQ;
              Object.keys(this.examMutateParams).forEach(item => {
                if (topic.id === item) {
                  topic.passingScore = +this.examMutateParams[item];
                }
              });
            });
          }
          this.afs
            .collection('tests')
            .valueChanges()
            .subscribe(t => {
              this.tests = t;
              setTimeout(() => {
                this.isLoading = false;
              }, 1000);
            });
        });
    });
  }

  public prepareQuestions(): void {
    this.exam.topics = this.exam.topics.filter(topic => topic.id);
    this.exam.topics.forEach(topic => {
      topic.questions = [];
      const test = this.tests.find(t => {
        return t.id === (this.activeLanguage === 'ru' ? topic.id : topic.id + '-kz');
      });
      let questions = test?.questions;

      if (topic.questionPerTitle && !topic.questionsRatio) {
        const topicsAmount = Math.floor(topic.questionsCount / topic.questionPerTitle);
        test.mainTitles = this.removeRandomEntries(test.mainTitles, Object.keys(test.mainTitles).length - topicsAmount);
        questions = questions.filter(item => Object.keys(test.mainTitles).map(i => +i).includes(item.relatedTo));
        questions = this.getGroupedAndShuffledItems(questions, Object.keys(test.mainTitles), topic.questionPerTitle);
      } else if (topic.questionsRatio && topic.questionsRatio) {
        // 1) group by audio
        const groups = questions.reduce((acc, q) => {
          (acc[q.audio] = acc[q.audio] || []).push(q);
          return acc;
        }, {});

        // 2) how many blocks of questionsPerTitle we need
        const totalBlocks = topic.questionsCount / topic.questionPerTitle; // e.g. 20/4 = 5
        const ratioSum     = topic.questionsRatio.dialog + topic.questionsRatio.text; // e.g. 4 + 1 = 5
        const textBlocks   = Math.round(totalBlocks * topic.questionsRatio.text / ratioSum);
        const dialogBlocks = totalBlocks - textBlocks;

        // 3) collect audio keys by mode
        const textAudios   = Object.entries(groups)
            .filter(([_, arr]) => arr[0].mode === LISTENING_TYPE.TEXT)
            .map(([audio]) => audio);

        const dialogAudios = Object.entries(groups)
            .filter(([_, arr]) => arr[0].mode === LISTENING_TYPE.DIALOG)
            .map(([audio]) => audio);

        // 4) pick X text-blocks, Y dialog-blocks
        const chosenTextAudios   = this.shuffleArray(textAudios).slice(0, textBlocks);
        const chosenDialogAudios = this.shuffleArray(dialogAudios).slice(0, dialogBlocks);

        // 5) mix block order
        const allBlocks = [...this.shuffleArray(chosenTextAudios), ...chosenDialogAudios].reverse();

        // 6) for each block, shuffle its questions and take the first questionsPerTitle
        const result = [];
        for (const audio of allBlocks) {
          const blockQs = this.shuffleArray(groups[audio]).slice(0, topic.questionPerTitle);
          result.push(...blockQs);
        }

        questions = result;
      } else {
        questions = this.shuffleArray(questions);
      }

      questions.forEach(q => {
        const ch = [];
        q.choices.forEach(c => ch.push(c));
        q.choices.length = 0;
        q.choices = this.shuffleArray(ch);
      });

      for (let i = 0; i < topic.questionsCount; i++) {
        topic.questions.push(questions[i]);
      }

    });
    if (this.exam.topics.length) {
      this.activeTopic = this.exam.topics[0].id;
    }
  }

  shuffleArray(array): [] {
    let currentIndex = array?.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  public onStart(params): void {
    this.prepareQuestions();
    this.isStarted = true;
    this.isCdVisible = params;
    this.activeQuestion = 1;
  }

  public timeIsOver(e): void {
    if (e.action === 'done') {
      this.onStop('time');
    }
  }

  onCheckPassExamByTopics(topics: ITopic[]): any {
    const result = topics.map((topic, index) => {
      return this.correctAnswers[index] >= topic.passingScore;
    });
    return result.every((val) => val === true);
  }

  public onStop(reason?: string): void {
    console.log('STOP');
    this.isFinished = true;
    if (!this.exam.passingScore) {
      this.isResults = true;
    }

    if (reason === 'time') { this.isTimedOut = true; }
    if (reason === 'failed') { this.isFailed = true; }

    this.calculateCorrectAnswersByTopic(this.exam);

    if ((this.getCorrectAnswersCount >= this.exam.passingScore) && this.onCheckPassExamByTopics(this.exam.topics)) {
      this.isPassed = true;
      this.isFailed = false;
    } else {
      this.isPassed = false;
      this.isFailed = true;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  public onSelectVariant(e, t): void {
    t.questions[e.target.name.substring(1) - 1].selectedAnswer = e.target.value;
  }

  public onPrevQuestion(): void {
    --this.activeQuestion;
  }

  public onNextQuestion(): void {
    const TOPIC = this.topicById(this.activeTopic);
    if (this.activeQuestion < TOPIC.questionsCount) {
      ++this.activeQuestion;
    } else {
      TOPIC.isSectionCompleted = true;
      if (this.exam.topics.find(t => !t.isSectionCompleted)) {
        this.activeTopic = this.exam.topics.find(t => !t.isSectionCompleted).id;
      } else {
        this.onStop();
      }
      this.activeQuestion = 1;
    }
    this.showSolution = false;
  }

  public topicById(str): ITopic {
    return this.exam.topics.find(t => t.id === str);
  }

  public isVariantSelected(): boolean {
    return !!(this.topicById(this.activeTopic).questions[this.activeQuestion - 1].selectedAnswer);
  }

  public atListOneAnswerExist(id: string): boolean {
    return !!(this.exam.topics.find(i => i.id === id).questions.filter(q => q.selectedAnswer).length);
  }

  public onShowResults(): void {
    console.log('RESULTS');
    this.isResults = true;
  }
  public onSelectQuestion(question): void {
    this.activeQuestion = question;
  }
  public onSelectTopic(topic): void {
    this.activeTopic = topic;
    this.onSelectQuestion(1);
  }

  calculateCorrectAnswersByTopic(exam): void {
    exam.topics.forEach(top => {
      let correctAnswersInTopic = 0;
      top.questions.forEach(question => {
        if (question.correctAnswer === question.selectedAnswer ) {
          correctAnswersInTopic++;
        }
      });
      this.correctAnswers.push(correctAnswersInTopic);
    });
  }

  removeRandomEntries<T>(data: Record<string, T>, countToRemove: number): Record<string, T> {
    const keys = Object.keys(data);
    const keysToRemove = keys.sort(() => 0.5 - Math.random()).slice(0, countToRemove);

    const result: Record<string, T> = {};
    for (const key of keys) {
      if (!keysToRemove.includes(key)) {
        result[key] = data[key];
      }
    }

    return result;
  }

  getGroupedAndShuffledItems(items: any[], relatedIds: string[], questionPerTitle: number): any[] {
    const grouped: any[] = [];
    relatedIds = this.shuffleArray(relatedIds);

    for (const id of relatedIds) {
      const group = items.filter(item => {
        return item.relatedTo === +id;
      });
      const selected = this.shuffleArray([...group]).slice(0, questionPerTitle);
      grouped.push(...selected);
    }

    return grouped;
  }

  onSendAnswer(question: IQuestion): void {
    this.showSolution = true;
    console.log(question);
  }

  audioSrc(audio: string): any {
    return '/assets/audio/audio-questions/' + audio + '.mp3';
  }
}
