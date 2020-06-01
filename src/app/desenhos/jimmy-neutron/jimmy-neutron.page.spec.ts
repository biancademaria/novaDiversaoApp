import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JimmyNeutronPage } from './jimmy-neutron.page';

describe('JimmyNeutronPage', () => {
  let component: JimmyNeutronPage;
  let fixture: ComponentFixture<JimmyNeutronPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JimmyNeutronPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JimmyNeutronPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
