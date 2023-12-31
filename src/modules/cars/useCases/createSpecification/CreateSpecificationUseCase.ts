
import { ISpecificationsRepostory } from "../../repositories/ISpecificationsRepository";

interface IRquest {
    name: string;
    description: string
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationsRepostory){

    }

    execute({name, description}: IRquest):void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification already exists")
        }

        this.specificationsRepository.create(
            {
                name,
                description
            }
        )
    }

    
}

export { CreateSpecificationUseCase }