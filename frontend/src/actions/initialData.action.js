// import axios from '../helpers/axios'
// import { categoryConstants,orderConstants,productConstants } from './constants'


// export const getInitialData=()=>{
//     return async(dispatch)=>{
//         const res =await axios.post('/admininitialData')
//         if(res.status===200){
//             const {categories,products,orders}=res.data
//             console.log(categories)
//             console.log(products)
//             dispatch({
//                 type:categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
//                 payload:{categories}
//             })
            
//             dispatch({
//                 type:productConstants.GET_ALL_PRODUCT_SUCCESS,
//                 payload:{products}
//             })

//             dispatch({
//                 type:orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
//                 payload:{orders}
//             })
//         }
//     }
// }