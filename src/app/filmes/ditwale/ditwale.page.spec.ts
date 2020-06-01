import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DitwalePage } from './ditwale.page';

describe('DitwalePage', () => {
  let component: DitwalePage;
  let fixture: ComponentFixture<DitwalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitwalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DitwalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
