import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenderPage } from './gender.page';

describe('GenderPage', () => {
  let component: GenderPage;
  let fixture: ComponentFixture<GenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
