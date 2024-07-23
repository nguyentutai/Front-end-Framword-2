import { z } from "zod"
const ProductSchemaValid =z.object({
    name:z.string().min(6,"Tên danh mục tối thiểu 6 kí tự"),
    price:z.number({
      invalid_type_error:"Giá phải là số !",
      required_error:"Giá là bắt buộc !"
    }).min(1,"Giá không được âm !"),
    price_discount:z.number().optional(),
    images:z.any().optional(),
    slug:z.string().optional(),
    status:z.boolean().optional(),
    categoryId:z.string().optional()
})

export default ProductSchemaValid