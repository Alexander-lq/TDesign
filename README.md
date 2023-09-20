<p align="center">
<img width="128" src="https://user-images.githubusercontent.com/54350573/132035179-5a7f2160-c27f-47d6-ad86-a644b360b3ee.png" >
</p>
<p align="center">
<a href="http://zyplayer.fun/" target="_blank">官网</a>
<a href="https://github.com/Hiram-Wong/ZyPlayer/issues" target="_blank">反馈</a>
<a href="https://github.com/Hiram-Wong/ZyPlayer/releases" target="_blank">下载</a>
</p>

<h1 align="center">zyplayer</h1>

基于 Vue 全家桶 + TDesign + Electron 开发；主题色：薄荷绿。

# 🎉 特性

- 全平台支持 Windows、Mac、Linux
- 适配深色模式
- 支持资源站 cms（json、xml）
- 支持 IPTV（m3u、genre）及电子节目单
- 支持主流视频平台解析（解析页面有个小彩蛋，可在代码里自行探索）
- 老板键，一键隐藏
- 内置多套播放器

# 🌴 声明

- 请大家支持正版. 所有资源来自网上, 该软件不参与任何制作, 上传, 储存等内容, 禁止传播违法资源.
- 该软件仅供学习交流使用，禁止个人用于非法商业用途, 请于安装后 24 小时内删除.
- 该软件为空壳播放器，不带源。
- 该软件部分代码参考[ZY-Player](https://github.com/Hunlongyu/ZY-Player)
- icon 来源于[ZY Player Issues 737](https://github.com/Hunlongyu/ZY-Player/issues/737)

> 播放器说明: 
- 没有完美的播放器
- tcplayer不支持h265(hevc),dplayer,通常表现为只有声音没有画面
- h264:tcplayer>xgplayer>dplayer  h265:xgplayer 加密:dplayer\tcplayer
- 腾讯一贯风格，tcplayer每次数据都会上报云端(https://datacenter.live.qcloud.com/)

> 包说明: 
- MacOS(dmg)：arm64[Applechip]、x64[Intel]、universal[通用-不区分架构]
- Windows(exe)：arm64[骁龙]、x64[Intel、amd]、ia32(32位操作系统)、win-版本号.exe(通用-不区分架构)
- Linux(Image、deb、rpm)：arm64[鲲鹏、飞腾]、x64[兆兴]

> win7说明: 
- [Chromium](https://www.chromium.org/)内核110.0.5481.100对应Electron23.1.1(续航能力的大幅优化 即降低能耗和性能优化)
- Electron 23 将包含 Chromium 110, 不再支持[Windows(7/8/8.1)](https://www.electronjs.org/zh/blog/windows-7-to-8-1-deprecation-notice)
- 维护两套版本成本太高，将随时停止打包[Windows(7/8/8.1)](https://www.electronjs.org/zh/blog/windows-7-to-8-1-deprecation-notice)，用户可自行打包（建议 19.1.9版本）

```shell
1.安装 node.js version16 以上
2.克隆项目  git clone https://github.com/Hiram-Wong/ZyPlayer.git
3.进入项目  cd zyplayer-master
4.修改packgae.json "electron": "^19.1.9",
5.安装依赖包  yarn
6.打包  yarn electron:build:win
```

<details>
<summary>展开查看接口说明</summary>

> 一键格式
```json
{
  "analyze": [
    {
      "id": 1, // id 唯一值不可重复
      "name": "纯净", // 名称
      "url": "https://im1907.top/?jx=", // 解析源地址
      "isActive": true // 是否启用 true启用 false 禁用
    }
  ],
  "iptv": [
    {
      "id": 1, // id 唯一值不可重复
      "name": "APTV", // 名称
      "url": "https://ghproxy.com/https://raw.githubusercontent.com/Kimentanm/aptv/master/m3u/iptv.m3u", // 直播源地址
      "type": "remote", // remote为远程m3u local本地m3u文件路径
      "isActive": true, // 是否启用 true启用 false 禁用
      "epg": "https://epg.112114.xyz/" // 电子节目单地址
    }
  ],
  "channel": [
    {
      "name": "CCTV1",
      "url": "http://hms304nc1972679586.live.aikan.miguvideo.com/wh7f454c46tw3831204341_1349411946/wd_r2/cctv/cctv1hd/2500/01.m3u8?msisdn=19115966146&Channel_ID=0119_04102000-99000_400300000040002&client_ip=182.149.232.3&timestamp=20230115080246&ContentId=265183188&timezone=UTC&mtv_session=01b97ad3f1d61532d8f0d40578ee3f47&HlsSubType=1&HlsProfileId=1&nphaid=0&encrypt=ac6f75650a73ab06efc36233598f26b8",
      "group": "央视",
      "id": 5821
    }
  ],
  "sites": [
    {
      "key": "", // uuid
      "name": "39影视",  // 名称
      "api": "https://www.39kan.com/api.php/provide/vod/",  // 站点源地址
      "playUrl": "", // 配合解析去url地址
      "search": 1, // 0:关闭 1:聚合搜索 2:本站搜索
      "group": "切片", // 分组
      "status": false, //  已经弃用该参数
      "isActive": true, // 是否启用 true启用 false 禁用
      "type": 1,  // 0:cms(xml) 1:cms(json) 2:drpy 3:app(v3) 4:app(v1)
      "id": 1,  // id 唯一值不可重复
      "categories": "电视,影视" // 按顺序展示所配置的分类 不配置则默认展示所有分类
    },
  ],
  "setting": [
    {
      "id": 0,
      "theme": "auto",
      "externalPlayer": "",
      "defaultHot": "kylive",
      "defaultSearchRecommend": "site",
      "defaultSearchType": "site",
      "defaultCheckModel": true,
      "defaultChangeModel": false,
      "defaultIptvEpg": "https://epg.112114.eu.org/",
      "iptvSkipIpv6": true,
      "iptvThumbnail": true,
      "restoreWindowPositionAndSize": false,
      "pauseWhenMinimize": true,
      "defaultSite": 3,
      "defaultIptv": 5,
      "defaultAnalyze": 2,
      "analyzeFlag": [
        "youku",
        "qq",
        "iqiyi",
        "qiyi",
        "letv",
        "sohu",
        "tudou",
        "pptv",
        "mgtv"
      ],
      "analyzeQuickSearchType": "platform",
      "analyzeSupport": true,
      "broadcasterType": "iina",
      "softSolution": false,
      "skipStartEnd": false,
      "agreementMask": true,
      "recordShortcut": "Shift+Command+Z",
      "selfBoot": false,
      "hardwareAcceleration": true,
      "doh": "",
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
      "communitySubscribe": "",
      "iptvStatus": true,
      "dns": "https://sm2.doh.pub/dns-query"
    }
  ],
  "analyzeHistory": [
    {
      "date": "2023-09-03",
      "analyzeId": 2,
      "videoUrl": "https://v.qq.com/x/cover/mzc00200v6zk1xm.html",
      "videoName": "前夜_1080P在线观看平台",
      "id": 1
    }
  ],
  "history": [
    {
      "date": "2023-08-13",
      "siteKey": "wolongzyw",
      "siteSource": "wolong",
      "playEnd": false,
      "videoId": 66010,
      "videoImage": "https://pic.wlongimg.com/upload/vod/20230615-1/6666aa42da59bc92acb8932b7e65546e.jpg",
      "videoName": "杀手古德",
      "videoIndex": "第01集",
      "watchTime": 16.315125,
      "duration": 975.9599999999997,
      "skipTimeInStart": 30,
      "skipTimeInEnd": 30,
      "id": 1
    },
  ],
  "searchHistory": [
    {
      "title": "父辈的荣耀",
      "type": "film",
      "id": 1
    }
  ],
  "star": [
    {
      "siteKey": "wolongzyw",
      "videoId": 70042,
      "videoImage": "https://pic.lzzypic.com/upload/vod/20230827-1/bcab69cb4ab4c12433fc12e5b3e10bc5.jpg",
      "videoName": "父辈的荣耀",
      "id": 6
    }
  ]
}
```

> 社区分享格式接口格式
```json
{  
  "user": {
    "name": "不敢share真名的憨憨", // 用户名
    "avatar": "", // 用户头像
    "desc": "Hi~小可爱！会不定时分享福利哦！让憨憨陪伴你更久✧( •˓◞•̀ )" // 用户描述
  },
  "share": [
    {
      "type": "recommend",  // 类型 recommend分享影视  source分享源
      "key": "向往的生活", // 关键字 类型为recommend时影视搜索的关键字 类型为source时 站点源为site  直播源为iptv  解析源为analyze
      "img": "https://4img.hitv.com/preview/sp_images/2023/05/05/202305051335152292032.jpg_220x125.jpg", // 海报 类型为recommend生效
      "url": {}, // 类型为 source 生效 内容与前面添加源一致，不要带 id 属性（重要）
      "desc": "影片推荐：向往的生活，超级好看！", // 描述
      "time": "2023-05-07" // 发布时间
    },
    {
      "type": "source",
      "key": "analyze",
      "img": "",
      "url": {
        "name": "爱豆",
        "url": "https://jx.aidouer.net/?url=",
        "isActive": true
      },
      "desc": "解析源：爱豆解析",
      "time": "2023-05-07"
    }
  ]
}
```
</details>

<details>
<summary>展开查看软件截图</summary>

|                           影视(首页)                           |                             影视(搜索)                             |
| :-------------------------------------------------------------: | :-----------------------------------------------------------------: |
| ![影视](https://s2.loli.net/2023/05/07/dBApoeKhWjsbM1v.png) | ![影视搜索](https://s2.loli.net/2023/05/07/t3bNq8dHXTeyB9A.png) |
|                           影视(播放)                           |                             影视 (介绍)                             |
| ![影视播放](https://s2.loli.net/2023/05/07/fgmbdXQvPE73WCY.png) |   ![影视详情](https://s2.loli.net/2023/05/07/LrJY4EVK5WhZ3XR.png)   |
|                          影视(热搜榜）                           |                             直播(首页)                              |
| ![热榜](https://s2.loli.net/2023/05/07/6qyjHCKnS9wUXWF.png) |   ![直播首页](https://s2.loli.net/2023/05/07/Xf4aTpDbZF9niuW.png)   |
|                           直播(播放)                            |                                解析                                 |
| ![直播播放](https://s2.loli.net/2023/05/07/e3GufyD1Um6h2iK.png) |     ![解析](https://s2.loli.net/2023/05/07/qoAfuET4Lvn1kl7.png)     |
|                            历史记录                             |                                在追                                 |
| ![历史](https://s2.loli.net/2023/05/07/KYUpQA7g2MGVIZb.png) |     ![在追](https://s2.loli.net/2023/05/07/xuMkzWQLYCSl5XZ.png)     |

</details>