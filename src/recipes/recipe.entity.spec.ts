import { Recipe.Entity } from './recipe.entity';

describe('Recipe.Entity', () => {
  it('should be defined', () => {
    expect(new Recipe.Entity()).toBeDefined();
  });
});
