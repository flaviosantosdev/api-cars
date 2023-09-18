import { Router} from "express";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";
import { SpecificationsRepository } from "../modules/cars/repositories/implementations/SpecificationsRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const specificationsRoutes = Router()

const specificationsRepository = new SpecificationsRepository()

specificationsRoutes.post("/", (request, response) => {

    return createCategoryController.handle(request, response)
})


export { specificationsRoutes }