import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateCategoryUseCase } from "../createCategory/CreateCategoryUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";


const specificationsRepository = new SpecificationsRepository()

const createSpecificationUseCase = new CreateCategoryUseCase(specificationsRepository)

const createSpecificatonController = new CreateSpecificationController(createSpecificationUseCase)


export { createSpecificatonController}