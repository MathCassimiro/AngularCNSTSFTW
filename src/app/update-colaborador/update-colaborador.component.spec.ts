import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateColaboradorComponent } from './update-colaborador.component';

describe('UpdateColaboradorComponent', () => {
  let component: UpdateColaboradorComponent;
  let fixture: ComponentFixture<UpdateColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
