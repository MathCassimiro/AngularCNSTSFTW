import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateColaboradorComponent } from './create-colaborador.component';

describe('CreateColaboradorComponent', () => {
  let component: CreateColaboradorComponent;
  let fixture: ComponentFixture<CreateColaboradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateColaboradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
