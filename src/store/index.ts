import { createStore } from 'vuex'

const files = require.context('./modules', false, /\.ts$/)
const moduleStores: any = {};
files.keys().forEach(key => {
  const fileName = key.slice(2, -3);
  const fileModule = files(key).default;
  moduleStores[fileName] = {
    ...fileModule,
    namespaced: true,    //文件中有写可以省略
  };
});

export default createStore({
  modules: {
    ...moduleStores
  }
})
