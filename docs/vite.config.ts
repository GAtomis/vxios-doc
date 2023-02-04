/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-02-11 11:03:51
 * @LastEditTime: 2022-02-14 10:15:16
 * @LastEditors: Gavin
 */
import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
const env = process.env.NODE_ENV === "development" ? "" : "/Vxios/"
// https://vitejs.dev/config/
export default defineConfig({
  base:env,
  plugins: [vueJsx()]
})

