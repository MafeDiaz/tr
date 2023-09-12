import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaschboardPage } from './daschboard.page';

describe('DaschboardPage', () => {
  let component: DaschboardPage;
  let fixture: ComponentFixture<DaschboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DaschboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
