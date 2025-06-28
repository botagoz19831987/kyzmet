import { Component, OnInit } from '@angular/core';
import { EQuestionType, ITest } from '../../shared/models/test.model';
import { ActivatedRoute, Router } from '@angular/router';
import {
  adminProcedures,
  antiCorruption,
  citizensAppeal,
  civilService,
  constitution,
  ethicalCode,
  government,
  legalAct,
  mgius,
  president,
  publicServices, selfService
} from './tests';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public test: ITest;
  public correctAnswers = 0;
  public isStarted = false;
  public isFinished = false;
  public questionType = EQuestionType;
  public activeQuestion = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    router.events.subscribe(() => {
      this.activatedRoute.params.subscribe(params => {
        switch (params.id) {
          case 'adminProcedures': this.test = adminProcedures; break;
          case 'antiCorruption': this.test = antiCorruption; break;
          case 'citizensAppeal': this.test = citizensAppeal; break;
          case 'civilService': this.test = civilService; break;
          case 'constitution': this.test = constitution; break;
          case 'ethicalCode': this.test = ethicalCode; break;
          case 'government': this.test = government; break;
          case 'legalAct': this.test = legalAct; break;
          case 'mgius': this.test = mgius; break;
          case 'president': this.test = president; break;
          case 'publicServices': this.test = publicServices; break;
          case 'selfService': this.test = selfService; break;

          default: this.router.navigate(['/testing']).then();
        }
      });
    });
  }

  public ngOnInit(): void {
    // console.log(this.test);
  }

  public onStart(): void {
    this.shuffleArray(this.test.questions); // change questions order
    this.test.questions.forEach(q => { this.shuffleArray(q.choices); }); // change variants order
    this.isStarted = true;
    this.activeQuestion = 1;
  }

  public onSelectVariant(e): void {
    this.test.questions[e.target.name.substring(1) - 1].selectedAnswer = e.target.value;
  }

  public isVariantSelected(): boolean {
    return !!(this.test.questions[this.activeQuestion - 1].selectedAnswer);
  }

  public onPrevQuestion(): void {
    --this.activeQuestion;
  }

  public onNextQuestion(): void {
    ++this.activeQuestion;
  }

  public onFinish(): void {
    this.onCalculateResults();
    this.isFinished = true;
  }

  private shuffleArray(array): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  private onCalculateResults(): void {
    this.test.questions.forEach(q => {
      if (q.selectedAnswer === q.correctAnswer) {
        ++this.correctAnswers;
      }
    });
  }
}


