import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.entity';

@Controller('recipes')
export class RecipesController {

    constructor(private service: RecipesService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getRecipe(params.id);
    }

    @Post()
    create(@Body() recipe: Recipe) {
        return this.service.createRecipe(recipe);
    }

    @Put()
    update(@Body() recipe: Recipe) {
        return this.service.updateRecipe(recipe);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteRecipe(params.id);
    }
}