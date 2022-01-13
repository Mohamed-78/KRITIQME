import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.page.html',
  styleUrls: ['./avis.page.scss'],
})
export class AvisPage implements OnInit {

  maxChars = 5;
  avis = '';
  chars = 0;

  constructor() { }

  ngOnInit() {
  }

}
