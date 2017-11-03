import { count, listByType } from '@/api/news'
const news = {
  state: {
  },

  mutations: {
  },

  actions: {
    Count ({dispatch, commit}) {
      return new Promise((resolve, reject) => {
        count().then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          reject(err)
        })
      })
    },
    ListByType ({dispatch, commit}, data) {
      return new Promise((resolve, reject) => {
        listByType(data).then((res) => {
          resolve(res.data.result)
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}

export default news
