import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CamundongosAventureirosPage } from './camundongos-aventureiros.page';

describe('CamundongosAventureirosPage', () => {
  let component: CamundongosAventureirosPage;
  let fixture: ComponentFixture<CamundongosAventureirosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamundongosAventureirosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CamundongosAventureirosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
