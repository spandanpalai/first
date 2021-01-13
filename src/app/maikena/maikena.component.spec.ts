import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaikenaComponent } from './maikena.component';

describe('MaikenaComponent', () => {
  let component: MaikenaComponent;
  let fixture: ComponentFixture<MaikenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaikenaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaikenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
