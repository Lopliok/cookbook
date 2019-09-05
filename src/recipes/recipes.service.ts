import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipesService {

    constructor(@InjectRepository(Recipe) private recipesRepository: Repository<Recipe>) { }

    async getRecipes(recipe: Recipe): Promise<Recipe[]> {
        return await this.recipesRepository.find();
    }

    async getRecipe(_id: number): Promise<Recipe[]> {
        return await this.recipesRepository.find({
            select: ["name", "description", "likes"],
            where: [{ "id": _id }]
        });
    }

    async createRecipe(recipe: Recipe) {
        this.recipesRepository.create(recipe)
    }

    async updateRecipe(recipe: Recipe) {
        this.recipesRepository.save(recipe)
    }

    async deleteRecipe(recipe: Recipe) {
        this.recipesRepository.delete(recipe);
    }
}