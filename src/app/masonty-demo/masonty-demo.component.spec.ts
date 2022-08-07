import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasontyDemoComponent } from './masonty-demo.component';

describe('MasontyDemoComponent', () => {
  let component: MasontyDemoComponent;
  let fixture: ComponentFixture<MasontyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasontyDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasontyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
