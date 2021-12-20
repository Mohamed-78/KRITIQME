import { Component,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-choix-multiple',
  templateUrl: './choix-multiple.component.html',
  styleUrls: ['./choix-multiple.component.scss'],
})

 @NgModule({
    imports: [CommonModule],
    declarations: [ChoixMultipleComponent]
})

export class ChoixMultipleComponent {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  public toggled: boolean = false;
  public toggled_task_3: boolean = false;
  public toggled_task_4: boolean = false;
  public toggled_task_5: boolean = false;
  public toggled_task_6: boolean = false;
  public toggled_task_7: boolean = false;
  public toggled_task_8: boolean = false;
  public toggled_task_9: boolean = false;
  public toggled_task_10: boolean = false;
  public toggled_task_11: boolean = false;
  public toggled_task_12: boolean = false;
  public toggled_task_13: boolean = false;
  public toggled_task_14: boolean = false;
  public toggled_task_15: boolean = false;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;

  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };

  constructor(private modalCtrl: ModalController) { 
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
      {
        id: 995
      },
      {
        id: 925
      },
      {
        id: 940
      },
      {
        id: 943
      },
      {
        id: 944
      }
      ]
    };
    this.sliderTwo = {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
      {
        id: 324
      },
      {
        id: 321
      },
      {
        id: 435
      },
      {
        id: 524
      },
      {
        id: 235
      }
      ]
    };

    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
      {
        id: 643
      },
      {
        id: 532
      },
      {
        id: 232
      },
      {
        id: 874
      },
      {
        id: 193
      }
      ]
    };
  }

  ngOnInit() {}

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  public toggle(): void {
    this.toggled = !this.toggled;
  }

  public toggle_task_3():void{
    this.toggled_task_3 = !this.toggled_task_3;
  }

  public toggle_task_4():void{
    this.toggled_task_4 = !this.toggled_task_4;
  }

  public toggle_task_5():void{
    this.toggled_task_5 = !this.toggled_task_5;
  }

  public toggle_task_6():void{
    this.toggled_task_6 = !this.toggled_task_6;
  }

  public toggle_task_7():void{
    this.toggled_task_7 = !this.toggled_task_7;
  }

  public toggle_task_8():void{
    this.toggled_task_8 = !this.toggled_task_8;
  }

  public toggle_task_9():void{
    this.toggled_task_9 = !this.toggled_task_9;
  }

  public toggle_task_10():void{
    this.toggled_task_10 = !this.toggled_task_10;
  }

  public toggle_task_11():void{
    this.toggled_task_11 = !this.toggled_task_11;
  }

  public toggle_task_12():void{
    this.toggled_task_12 = !this.toggled_task_12;
  }


  public toggle_task_13():void{
    this.toggled_task_13 = !this.toggled_task_13;
  }

  public toggle_task_14():void{
    this.toggled_task_14 = !this.toggled_task_14;
  }

  public toggle_task_15():void{
    this.toggled_task_15 = !this.toggled_task_15;
  }

  close()
  {
    this.modalCtrl.dismiss();
  }

}
