import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsTresEspiasDemaisPage } from './as-tres-espias-demais.page';

describe('AsTresEspiasDemaisPage', () => {
  let component: AsTresEspiasDemaisPage;
  let fixture: ComponentFixture<AsTresEspiasDemaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsTresEspiasDemaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsTresEspiasDemaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
