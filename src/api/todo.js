import request from "@/utils/request";
//list
export const getTodoList = ()=>{
    return request({
        url:'/todo/list',
        method:'get',
    })
}
//add
export const addTodoList = (data)=>{
    return request({
        url:'/todo/add',
        method:'post',
        data:data,
    })
}
//edit
export const editTodoList = (data)=>{
    return request({
        url:'/todo/update',
        method:'put',
        data:data,
    })
}
//delete
export const deleteTodoList = (queryParams)=>{
    return request({
        url:'/todo/delete',
        method:'delete',
        params:queryParams,
    })
}
export default {getTodoList,addTodoList,editTodoList,deleteTodoList}