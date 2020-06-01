import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmeScoobyDooPage } from './filme-scooby-doo.page';

describe('FilmeScoobyDooPage', () => {
  let component: FilmeScoobyDooPage;
  let fixture: ComponentFixture<FilmeScoobyDooPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeScoobyDooPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilmeScoobyDooPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
