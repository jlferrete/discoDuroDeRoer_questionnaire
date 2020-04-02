import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public question: string;

  public answers: any[];

  public answerCorrect: boolean;
  public answerChoosed: boolean;

  constructor() {
    this.question = '¿Cuál es la capital de España?';

    this.answers = [
      {
        'answer' : 'Zaragoza',
        'correct' : false
      },
      {
        'answer' : 'Barcelona',
        'correct' : false
      },
      {
        'answer' : 'Madrid',
        'correct' : true
      },
      {
        'answer' : 'Sevilla',
        'correct' : false
      },

    ];

    this.answerCorrect = false;
    this.answerChoosed = false;

   }

  ngOnInit() {
  }

  checkAnswerIndex(index){
    this.answerCorrect = this.answers[index].correct;
    this.answerChoosed = true;
  }



}
