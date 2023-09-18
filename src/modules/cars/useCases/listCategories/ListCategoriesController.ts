import { Request, Response } from "express";
import { ListCategoriesUseCase } from './ListCategoriesUseCase'


class ListCategoriesController {

    constructor(private listcategoriesUseCase: ListCategoriesUseCase ){

    }

    handle(request: Request, response: Response):Response{
        const all = this.listcategoriesUseCase.execute()

        return response.status(201).json(all)
    }
}


export { ListCategoriesController }