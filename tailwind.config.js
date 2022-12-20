/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue'],
  theme: {
    colors: {
      // メイン main
      primary: '#0c7159',
      secondary: '#5eaa43',
      tetiary: '#a9870f',
      disable: '#b6b6b6',

      /* 背景 background*/
      background: {
        DEFAULT: '#F4F5F3' /* gray/background */,
        pale: '#eaf4e5' /* main/pale/primary-pale  Primary-pale*/,
        twilight: '#f0ede8' /* main/pale/twilight gray  twilight gray*/,
      },

      // グラデーション gradient
      // just add class "gradient"  /* main/gradation/primary */

      //テキスト text
      black: '#000000' /* text/black black*/,
      caption: '#5F5F5F' /* text/caption caption*/,
      pale: '#B6B6B6' /* text/pale pale*/,
      sat: '#0090C1' /* text/曜日/土曜  saturday*/,
      sun: '#BC4749' /* text/曜日/日曜・祝日 sunday*/,

      // 拠点タイプ・お知らせ Base type/Notice
      booth: '#188D39' /*拠点/BOOTH BOOTH*/,
      boothBg: '#DDF3E4' /* 拠点/BOOTH-bg BOOTH-背景*/,
      desk: '#188D39' /* 拠点/DESK  DESK*/,
      deskBg: '#FBE9D5' /* 拠点/DESK-bg DESK-背景*/,
      hotelShare: '#6E4CA4' /* 提携店（ホテルシェアオフィス） */,
      hotelShareBg: '#E6E8F4' /* 提携店（ホテルシェアオフィス） -背景*/,
      coWorking: '#4692BE' /* 提携店（コワーキング） */,
      coWorkingBg: '#DEEBF2' /* 提携店（コワーキング）-背景*/,
      cube: '#B24567' /*拠点/CUBE CUBE */,
      cubeBg: '#F0DEE2' /* 拠点/CUBE-bg CUBE-背景*/,
      type: '#8D999F' /* 拠点/部屋タイプ */,

      notification: '#0C7159' /* Label/お知らせ お知らせ*/,
      notificationBg: '#EAF4E5' /* Label/お知らせ お知らせ*/,
      campaign: '#AD8410' /* Label/キャンペーン-text  キャンペーン*/,
      campaignBg: '#FAEEC5' /*  Label/キャンペーン-bg  キャンペーン-bg*/,
      base: '#C36916' /* Label/拠点-text 拠点*/,
      baseBg: '#FBE9D5' /* Label/拠点-bg 拠点-bg*/,
      urgen: '#BF0000' /* Other/緊急  緊急*/,

      // グレー grey
      grey: {
        green: '#DEE1DC' /* gray/green 線*/,
      },

      // その他 others
      other: {
        footer: '#2B3432' /* Other/footer  フッター*/,
        footerGrey: '#2B3432' /* Other/footer-gray フッター-ボタン*/,
        emergency: '#BF0000' /* Other/緊急  アラート*/,
        emergencyBg: '#F9E6E6' /* Other/緊急-bg  アラート-背景*/,
        carousel: 'rgba(0, 0, 0, 0.3)' /* Other/carousel カルーセルボタン*/,
        overlay: ' rgba(0, 0, 0, 0.8);' /* Other/overlay モーダル背景*/,
      },
    },
    //使用ウェイト
    fontWeight: {
      regular: 400,
      bold: 700,
      black: 900,
      400: 400,
      700: 700,
      900: 900,
    },
    lineHeight: {
      100: '100%',
      125: '120%',
      150: '150%',
      180: '180%',
      200: '200%',
    },
    fontSize: {
      12: '12px',
      14: '12px',
      16: '16px',
      18: '18px',
      21: '21px',
      25: '25px',
      28: '28px',
    },

    extend: {},
    screens: {
      sp: { max: '1024px', min: '0px' },
      pc: { min: '1025px', max: '3000px' },
    },
  },
  fontFamily: {
    noto: ['Noto Sans CJK JP', 'Roboto'],
  },
  plugins: [],
}
