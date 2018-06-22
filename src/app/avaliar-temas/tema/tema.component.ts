import { Component, OnInit, Input } from '@angular/core';
import {Tema} from './tema.model';
import { EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'eqv-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})

export class TemaComponent implements OnInit {
  @Input() tema: Tema;


  constructor() { }

  ngOnInit() {
  }

}
