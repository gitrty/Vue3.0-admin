import {
    Button,
    Layout,
    Menu,
    message
} from 'ant-design-vue';
export default {
    install(app: any) {
        app.use(Button);
        app.use(Layout);
        app.use(Menu);
        app.config.globalProperties.$message = message;
    }
}