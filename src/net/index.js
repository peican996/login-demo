import axios from "axios";
import {ElMessage} from "element-plus";

const defaultError = () => {
    ElMessage.error('发生了一些错误，请联系管理员')
}
const defaultFailure = (message) => {
    ElMessage.warning(message)
}

function  post(url, data, error = defaultError) {
    console.log(data)
    return new Promise((resolve) => {
        axios.post(url, data, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }).then(({ data }) => {
            if (data.status === 200) {
                resolve(true); // 使用resolve传递返回值true
            } else {
                resolve(false); // 使用resolve传递返回值false
            }
        }).catch(error);
    });
}

function get(url, success, failure = defaultFailure, error = defaultError) {
    axios.get(url, {
            withCredentials: true
        }
    ).then(({data}) => {
            if (data.success)
                success(data.message, data.status)
            else
                failure(data.message, data.status)
        }
    ).catch(error)
}

export {get, post}
