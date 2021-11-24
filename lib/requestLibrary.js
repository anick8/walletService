const axios = require('axios')
const PROD = 1
module.exports = {
  createWallet:async (data) => {
    try {
        console.log(data);
        res = await axios({method: 'post',
        url: PROD ? 'https://hashx-api-wallet-cud.herokuapp.com/createWallet':'http://localhost:8080/createWallet',
        data: data})
        return {'err':null,'data':res.data.data,'msg':'createWallet Request Successful & ' + res.data.msg}
      }
      catch (err) {
        return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs' + err}
      }
  },
  deleteWallet: async (data) => {
    try {
          console.log(data);
          res = await axios({method: 'post',
          url: PROD ? 'https://hashx-api-wallet-cud.herokuapp.com/deleteWallet': 'http://localhost:8080/deleteWallet',
          data: data})
          return {'err':null,'data':res.data.data,'msg':'deleteWallet Request Successful & ' + res.data.msg}
        }
    catch (err) {
          console.log(err);
                 return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  getWallet: async (data) => {
    try {
            console.log("calling api")
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-wallet-read.herokuapp.com/getWallet':'http://localhost:8080/getWallet',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'getWallet Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  getWallets: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-wallet-read.herokuapp.com/getWallets':'http://localhost:8080/https://hashx-api-wallet-read.herokuapp.com/getWallets',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'getWallets Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  getWalletHistorybyWalletUUID: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-wallethistory-read.herokuapp.com/getWalletHistorybyWalletUUID ':'http://localhost:8080/getWalletHistorybyWalletUUID',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'getWalletHistorybyWalletUUID Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  getWalletHistorybyWalletUUIDAB: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-wallethistory-read.herokuapp.com/getWalletHistorybyWalletUUIDAB ':'http://localhost:8080/getWalletHistorybyWalletUUIDAB',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'getWalletHistorybyWalletUUIDAB Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },
  /*getWalletHistorybyTxUUID: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-wallethistory-read.herokuapp.com/getWalletHistory ':'http://localhost:8080/getWalletHistory',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'getWalletHistory Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },*/
  transferTokens: async (data) => {
    try {
            res = await axios({method: 'post',
            url: PROD? 'https://hashx-api-transfertokens.herokuapp.com/transferTokens ':'http://localhost:8080/transferTokens',
            data: data})
            return {'err':null,'data':res.data.data,'msg':'transferTokens Request Successful & ' + res.data.msg}
          }
    catch (err) {
      return {'err':err,'data':null,'msg':'Error Calling the DataBase Layer APIs : ' + err}
    }
  },


}