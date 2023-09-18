import { Specification } from "../model/Specification";



interface ICreateSpecificationDTO {
    name: string;
    description: string
}

interface ISpecificationsRepostory{

    create({name, description}:ICreateSpecificationDTO)
    findByName(name: string): Specification
}



export { ISpecificationsRepostory, ICreateSpecificationDTO }