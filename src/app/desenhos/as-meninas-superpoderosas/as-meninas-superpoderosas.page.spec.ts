import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsMeninasSuperpoderosasPage } from './as-meninas-superpoderosas.page';

describe('AsMeninasSuperpoderosasPage', () => {
  let component: AsMeninasSuperpoderosasPage;
  let fixture: ComponentFixture<AsMeninasSuperpoderosasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsMeninasSuperpoderosasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsMeninasSuperpoderosasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
