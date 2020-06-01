import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HollywoodPage } from './hollywood.page';

describe('HollywoodPage', () => {
  let component: HollywoodPage;
  let fixture: ComponentFixture<HollywoodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HollywoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
