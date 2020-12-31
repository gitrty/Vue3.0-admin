import router from '@/router'

export default {
    install(app: any) {
        // 通过path跳转
        app.config.globalProperties.$path = (path: string, query = {}) => router.push({ path, query }).catch(() => null)
        // 通过name跳转
        app.config.globalProperties.$jump = (name: string, params: any = {}) => router.push({ name, params }).catch(() => null)
        // 设置Token
        app.config.globalProperties.$setToken = setStorage('accessToken')
        // 设置userNmae
        app.config.globalProperties.$setUserName = setStorage('username')
        // 设置密码
        app.config.globalProperties.$setPassWord = setStorage('password')
        // 返回上一级路由
        app.config.globalProperties.$back = () => router.go(-1)
        // 获取Storage
        app.config.globalProperties.$getStorage = (key: string) => localStorage.getItem(`${key}`)
        // 移除storage
        app.config.globalProperties.$removeStorage = (key: string) => localStorage.removeItem(`${key}`)
    }
}

// 柯里化
export const getToken = () => localStorage.getItem(`accessToken`)
const setStorage = (key: string) => (value: string) => localStorage.setItem(`${key}`, `${value}`)