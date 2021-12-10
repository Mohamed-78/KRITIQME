import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreeRapportDetaillePage } from './cree-rapport-detaille.page';

describe('CreeRapportDetaillePage', () => {
  let component: CreeRapportDetaillePage;
  let fixture: ComponentFixture<CreeRapportDetaillePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreeRapportDetaillePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreeRapportDetaillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
