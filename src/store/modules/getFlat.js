export default {
  state: {
    flatList: []
  },
  mutations: {
    fillFlatList (state, data) {
      return state.flatList = data
    }
  },
  actions: {
    async getFlatAction ({ commit }) {
      const url = 'https://dev.vezdekakdoma.ru/api/v1/apartments/1333?bookings_month=2023-03'
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmMDk2MmUxZmIxYmY5YmZjMjI0NzFmNDFmYThlZTczNThiOGE5MDQ3YjU5YTkxNzg3OTdlNmRkNGU4YTJkZDJhOTdkNTg2ZTQ2NjExNjI4In0.eyJhdWQiOiIyMyIsImp0aSI6ImRmMDk2MmUxZmIxYmY5YmZjMjI0NzFmNDFmYThlZTczNThiOGE5MDQ3YjU5YTkxNzg3OTdlNmRkNGU4YTJkZDJhOTdkNTg2ZTQ2NjExNjI4IiwiaWF0IjoxNjc3NTA2NzE2LCJuYmYiOjE2Nzc1MDY3MTYsImV4cCI6MTcwOTA0MjcxNiwic3ViIjoiODgyIiwic2NvcGVzIjpbXX0.CVIDRgdl77DJUxncP2YyrFPweF_NTdgKa2rccZ4wzNwidQE284yE3usc6g53feAQBKBiAc79C8WsmkaFf8stSYgOyFzZDtaP49Ivsx2uBLAQtY7ayNtp6JIoWw5xyHDVGZmZ5tQOqG-JxF3_g86jUu3trLZcP255qvKlN9tqeMQNzKUvQnCnma3zNDRaVOMv44U19Rua4MSRXcMM7tePGZay3n_4RD8LGA3aX23SIeJ6DZbIpNYxx0lpHOncmGA_nX8YoXtUWS4ZXzCYIrHz7ibtcmxt3IWfO2MmU6spgIACPh2cKT_DPl9gv_4lV4mfdk8NB8hchgH-UxMMC-Wrk0qLnoamls6mPXZqB1WGqHC44isXvp3dLPQOQ5t4TqzhbUhiM8i7n8okczkNM5z0rkpo4TCB43TqKra7Yv0MrFCMtneMsqX2HJLHKaSTbrVorBfuEXekG7aL1CAONvoV6Hrcca3od2kPe3sVf354n4gmXah0OSEb_hZDB_WezQAfOSx1jRVWpDdfqSj8SkCSF9EU5XaRZlqglljZYUXmTdXf_gSPzDjXCMM7y6nm0-z_I_RwJeKLaBcTX3EDFmGWuVHQ-_S3JghiCumJL2kp0hpz57hIWCA8_5b_mIf5Z7XAWe1WZfomPLjWqbSln_4xNoE2nrIes1AMvbERs6QTx80`
        }
      })
      const data = await response.json()

      commit('fillFlatList', data)

      console.log(data);
    }
  },
  getters: {
    getFlat (state) {
      return state.flatList
    }
  }
}