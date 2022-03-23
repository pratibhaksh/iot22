import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerAdminComponent } from './dealer-admin.component';

describe('DealerAdminComponent', () => {
  let component: DealerAdminComponent;
  let fixture: ComponentFixture<DealerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
