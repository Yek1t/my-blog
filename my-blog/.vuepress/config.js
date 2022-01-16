module.exports = {
  "title": "Yekit's Blog",
  "description": "记录生活",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/logo.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "工具箱",
        "icon": "reco-search",
        "link": "/docs/tools/"
      },
      {
        "text": "关于我",
        "icon": "reco-eye",
        "link": "/docs/aboutme/"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/Yek1t",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/Yek1t",
            "icon": "reco-mayun"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/tools/": [
        "",
        "Face_World",
        "Question_Bank_Website",
        "Front_End",
        "Back_End",
        "Operation_Maintenance_Tools",
        "Personal_Tools",
        "Others"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "Yek1t@Github",
        // "desc": "Enjoy when you can, and endure when you must.",
        // "email": "1156743527@qq.com",
        "icon": "reco-github",
        "link": "https://github.com/Yek1t"
      },
      {
        "title": "Yek1t@Gitee",
        // "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        // "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://gitee.com/Yek1t"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Yekit",
    "authorAvatar": "/avatar.jpg",
    "record": "记录生活",// 备案号
    "startYear": "2022"
  },
  plugins:[
    [
      // "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      // {
      //   theme: ["miku"],
      //   clean: true,
      //   modelStyle: {
      //     position: "fixed",
      //     left: "0px",
      //     bottom: "0px",
      //     opacity: "0.9",
      //     zIndex: 99999
      //   }
      // }

      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 本地文件
          {
            name: 'Numb',
            artist: 'Before You Exit/Lash',
            url: '/bgm/Numb-Before You Exit  Lash.mp3',
            cover: '/bgm/Numb.jpg'
          },
          {
            name: 'Robbers',
            artist: 'The 1975',
            url: '/bgm/The 1975 - Robbers.flac',
            cover: '/bgm/Robbers.jpg'
          },
          {
            name: 'Choose To Believe',
            artist: 'RØYLS',
            url: '/bgm/Choose to believe.mp3',
            cover: '/bgm/Choose_to_believe.jpg'
          },
          {
            name: 'My Type',
            artist: 'The Chainsmokers / Emily Warren',
            url: '/bgm/My Type.mp3',
            cover: '/bgm/My_Type.jpg'
          }
        ],
        position: [
          { 
            left: '10px',
            bottom: '10px',
            'z-index': '999999'
          }
        ],
        autoplay: true,
        autoShrink: true,
        shrinkMode: 'mini'

      }
    ]
  ],
  "markdown": {
    "lineNumbers": true
  }
}