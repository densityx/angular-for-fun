import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAndRecipeComponent } from './shopping-and-recipe.component';

describe('ShoppingAndRecipeComponent', () => {
  let component: ShoppingAndRecipeComponent;
  let fixture: ComponentFixture<ShoppingAndRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingAndRecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAndRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
