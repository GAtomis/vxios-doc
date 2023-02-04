/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-02-11 10:57:33
 * @LastEditTime: 2022-02-11 11:02:26
 * @LastEditors: Gavin
 */
import Theme from 'vitepress/dist/client/theme-default'
import Button from '../../vxios/component/button'
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('v-button', Button)
  }
}
