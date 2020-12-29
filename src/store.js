import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowuser: null,

    game: [
      {
        gameNum: 1,
        gameName: 'Desperados III',
        gamePrice: 310,
        gameImg: 'static/gameList/gameList-1.jpg'
      },
      {
        gameNum: 2,
        gameName: 'Lords Of The Fallen',
        gamePrice: 9,
        gameImg: 'static/gameList/gameList-2.jpg'
      },
      {
        gameNum: 3,
        gameName: '赛博朋克 2077',
        gamePrice: 298,
        gameImg: 'static/gameList/gameList-3.jpg'
      },
      {
        gameNum: 4,
        gameName: 'NBA 2K21',
        gamePrice: 199,
        gameImg: 'static/gameList/gameList-4.jpg'
      }, {
        gameNum: 5,
        gameName: 'Resident Evil 3',
        gamePrice: 137,
        gameImg: 'static/gameList/gameList-5.jpg'
      },
      {
        gameNum: 6,
        gameName: '剑为君舞 百夜缀',
        gamePrice: 131,
        gameImg: 'static/gameList/gameList-6.jpg'
      },
      {
        gameNum: 7,
        gameName: 'DEATH STRANDING',
        gamePrice: 149,
        gameImg: 'static/gameList/gameList-7.jpg'
      },
      {
        gameNum: 8,
        gameName: 'Wallpaper Engine：壁纸引擎',
        gamePrice: 19,
        gameImg: 'static/gameList/gameList-8.jpg'
      },
      {
        gameNum: 9,
        gameName: '无主之地3',
        gamePrice: 65,
        gameImg: 'static/gameList/gameList-9.jpg'
      }, {
        gameNum: 10,
        gameName: 'Destiny 2',
        gamePrice: 60,
        gameImg: 'static/gameList/gameList-10.jpg'
      },
      {
        gameNum: 11,
        gameName: 'Risk of Rain 2',
        gamePrice: 80,
        gameImg: 'static/gameList/gameList-11.jpg'
      },
      {
        gameNum: 12,
        gameName: 'Deep Rock Galactic',
        gamePrice: 90,
        gameImg: 'static/gameList/gameList-12.jpg'
      },
      {
        gameNum: 13,
        gameName: 'Grand Theft Auto V',
        gamePrice: 119,
        gameImg: 'static/gameList/gameList-13.jpg'
      },
      {
        gameNum: 14,
        gameName: 'Mount & Blade II: Bannerlord',
        gamePrice: 198,
        gameImg: 'static/gameList/gameList-14.jpg'
      }, {
        gameNum: 15,
        gameName: 'Dont Starve Together',
        gamePrice: 12,
        gameImg: 'static/gameList/gameList-15.jpg'
      },
      {
        gameNum: 16,
        gameName: '群星之间',
        gamePrice: 54,
        gameImg: 'static/gameList/gameList-16.jpg'
      },
      {
        gameNum: 17,
        gameName: 'Gears 5',
        gamePrice: 26,
        gameImg: 'static/gameList/gameList-17.jpg'
      },
      {
        gameNum: 18,
        gameName: 'Ghostrunner - 幽灵行者',
        gamePrice: 111,
        gameImg: 'static/gameList/gameList-18.jpg'
      },
      {
        gameNum: 19,
        gameName: 'Steep',
        gamePrice: 29,
        gameImg: 'static/gameList/gameList-19.jpg'
      }, {
        gameNum: 20,
        gameName: 'Oxygen Not Included',
        gamePrice: 29,
        gameImg: 'static/gameList/gameList-20.jpg'
      },
      {
        gameNum: 21,
        gameName: 'Half-Life: Alyx',
        gamePrice: 163,
        gameImg: 'static/gameList/gameList-21.jpg'
      },
      {
        gameNum: 22,
        gameName: 'Euro Truck Simulator 2',
        gamePrice: 24,
        gameImg: 'static/gameList/gameList-22.jpg'
      },
      {
        gameNum: 23,
        gameName: '侏罗纪世界：进化',
        gamePrice: 12,
        gameImg: 'static/gameList/gameList-23.jpg'
      },
      {
        gameNum: 24,
        gameName: 'Outward',
        gamePrice: 59,
        gameImg: 'static/gameList/gameList-24.jpg'
      }, {
        gameNum: 25,
        gameName: '轩辕剑柒',
        gamePrice: 79,
        gameImg: 'static/gameList/gameList-25.jpg'
      },
      {
        gameNum: 26,
        gameName: 'ASTRONEER',
        gamePrice: 58,
        gameImg: 'static/gameList/gameList-26.jpg'
      },
      {
        gameNum: 27,
        gameName: 'Dealer Life 2',
        gamePrice: 35,
        gameImg: 'static/gameList/gameList-27.jpg'
      },
      {
        gameNum: 28,
        gameName: 'Left 4 Dead 2',
        gamePrice: 37,
        gameImg: 'static/gameList/gameList-28.jpg'
      },
      {
        gameNum: 29,
        gameName: 'Cuphead',
        gamePrice: 68,
        gameImg: 'static/gameList/gameList-29.jpg'
      }, {
        gameNum: 30,
        gameName: 'No Man Sky',
        gamePrice: 139,
        gameImg: 'static/gameList/gameList-30.jpg'
      },
      {
        gameNum: 31,
        gameName: 'Hell Let Loose',
        gamePrice: 118,
        gameImg: 'static/gameList/gameList-31.jpg'
      },
      {
        gameNum: 32,
        gameName: 'The Long Dark',
        gamePrice: 80,
        gameImg: 'static/gameList/gameList-32.jpg'
      },
      {
        gameNum: 33,
        gameName: 'Empire of Sin',
        gamePrice: 116,
        gameImg: 'static/gameList/gameList-33.jpg'
      },
      {
        gameNum: 34,
        gameName: '糖豆人：终极淘汰赛',
        gamePrice: 58,
        gameImg: 'static/gameList/gameList-34.jpg'
      }, {
        gameNum: 35,
        gameName: 'Among Us',
        gamePrice: 22,
        gameImg: 'static/gameList/gameList-35.jpg'
      }, {
        gameNum: 36,
        gameName: 'Cities: Skylines',
        gamePrice: 88,
        gameImg: 'static/gameList/gameList-36.jpg'
      },
      {
        gameNum: 37,
        gameName: 'Red Dead Redemption 2',
        gamePrice: 249,
        gameImg: 'static/gameList/gameList-37.jpg'
      },
      {
        gameNum: 38,
        gameName: 'Devil May Cry 5',
        gamePrice: 137,
        gameImg: 'static/gameList/gameList-38.jpg'
      },
      {
        gameNum: 39,
        gameName: 'Hades',
        gamePrice: 80,
        gameImg: 'static/gameList/gameList-39.jpg'
      }, {
        gameNum: 40,
        gameName: 'ARK: Survival Evolved',
        gamePrice: 138,
        gameImg: 'static/gameList/gameList-40.jpg'
      },

      {
        gameNum: 41,
        gameName: 'Rust',
        gamePrice: 116,
        gameImg: 'static/gameList/gameList-41.jpg'
      },
      {
        gameNum: 42,
        gameName: 'Raft',
        gamePrice: 68,
        gameImg: 'static/gameList/gameList-42.jpg'
      },
      {
        gameNum: 43,
        gameName: 'Sea of Thieves',
        gamePrice: 116,
        gameImg: 'static/gameList/gameList-43.jpg'
      },
      {
        gameNum: 44,
        gameName: 'Green Hell',
        gamePrice: 80,
        gameImg: 'static/gameList/gameList-44.jpg'
      }, {
        gameNum: 45,
        gameName: '动物园之星',
        gamePrice: 180,
        gameImg: 'static/gameList/gameList-45.jpg'
      },
      {
        gameNum: 46,
        gameName: 'DayZ',
        gamePrice: 199,
        gameImg: 'static/gameList/gameList-46.jpg'
      },
      {
        gameNum: 47,
        gameName: 'Overcooked! 2',
        gamePrice: 98,
        gameImg: 'static/gameList/gameList-47.jpg'
      },
      {
        gameNum: 48,
        gameName: '巫师 3：狂猎',
        gamePrice: 127,
        gameImg: 'static/gameList/gameList-48.jpg'
      },
      {
        gameNum: 49,
        gameName: 'NieR:Automata™',
        gamePrice: 274,
        gameImg: 'static/gameList/gameList-49.jpg'
      },
      {
        gameNum: 50,
        gameName: '霓虹深渊',
        gamePrice: 58,
        gameImg: 'static/gameList/gameList-50.jpg'
      },
      {
        gameNum: 51,
        gameName: 'Vigil: The Longest Night',
        gamePrice: 66,
        gameImg: 'static/gameList/gameList-51.jpg'
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
