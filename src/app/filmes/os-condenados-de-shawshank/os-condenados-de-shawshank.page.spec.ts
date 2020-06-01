import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsCondenadosDeShawshankPage } from './os-condenados-de-shawshank.page';

describe('OsCondenadosDeShawshankPage', () => {
  let component: OsCondenadosDeShawshankPage;
  let fixture: ComponentFixture<OsCondenadosDeShawshankPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsCondenadosDeShawshankPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsCondenadosDeShawshankPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
