import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KirbyConverterComponent } from './kirby-converter.component';

describe('KirbyConverterComponent', () => {
  let component: KirbyConverterComponent;
  let fixture: ComponentFixture<KirbyConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KirbyConverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KirbyConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
