import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnneWithAnEPage } from './anne-with-an-e.page';

describe('AnneWithAnEPage', () => {
  let component: AnneWithAnEPage;
  let fixture: ComponentFixture<AnneWithAnEPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnneWithAnEPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnneWithAnEPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
