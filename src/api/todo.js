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
export default {getTodoList,addTodoList}