/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-02-11 10:43:49
 * @LastEditTime: 2022-02-14 11:28:16
 * @LastEditors: Gavin
 */

const env = process.env.NODE_ENV === "development" ? "" : "/Vxios/"
const guideItem=[

  { text: '快速开始', link: '/guide/getStarted/' },
  {
    text: '基础',link:'/guide/useCase/'
  },
  {
    text: '进阶使用',link:'/guide/advanced/'
  },
  {
    text: '解决方案',link:'/guide/expend/'
  },
  {
    text:'结尾',link:'/guide/end/'
  }

]
const sidebar = {
  '/guide/': guideItem

}

const config = {
  base:env,
  lang: 'zh-CN',
  title: "Vxios",
  srcDir: 'src',
  themeConfig: {
    sidebar,
    displayAllHeaders: true,
    logo: "https://corp-wecom-cdn.elcapp.cn/bb_test/material/image/20220211/25745860645304567.jpg",
    author: "Gavin",
 
    nav: [

      {
        text: '首页',
        link:'/',
     
      },
      {
        text: '文档',
        activeMatch: `^/(guide)/`,
        items: guideItem
      },
      {
        text: 'API',
        activeMatch: `^/api/`,
        link: '/api/'
      },
      { text: "🔗 Github", link: "https://github.com/GAtomis/Vxios" },

    ],
    footer: {
      license: {
        text: 'MIT License',
        link: 'https://opensource.org/licenses/MIT'
      },
      copyright: `Copyright © 2014-${new Date().getFullYear()} Gavin zhou`
    }
  }
}

export default config
