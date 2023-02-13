import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IContentDetailsComponent } from './icontent-details.component';

describe('IContentDetailsComponent', () => {
  let component: IContentDetailsComponent;
  let fixture: ComponentFixture<IContentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IContentDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IContentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
