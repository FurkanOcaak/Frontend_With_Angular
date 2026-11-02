import { Category } from "./Category";
import { ResponseModel } from "./responseModel";

export interface CategoryResponseModel extends ResponseModel {
    data: Category[]
}