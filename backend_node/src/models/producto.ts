import {Schema,model} from 'mongoose';

let productoSchema = new Schema(
    {
        nombre :
        {
            type:String, required:[true,'el nombre es requerido']
        },
        precioUni :
        {
            type:Number, required:[true,'el precio es requerido']
        },
        descripcion :
        {
            type:String, required:[false]
        },
        disponible :
        {
            type:Boolean, required:true,default:true
        },
        categoria :
        {
            type:Schema.Types.ObjectId, required:true, ref: 'Categoria'
        }
    })
    //exporta el modelo para ser usADO EN EL PROYECTO

export default model('Producto', productoSchema);