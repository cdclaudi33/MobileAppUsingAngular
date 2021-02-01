import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItempagePage } from './itempage.page';

describe('ItempagePage', () => {
  let component: ItempagePage;
  let fixture: ComponentFixture<ItempagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItempagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItempagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
