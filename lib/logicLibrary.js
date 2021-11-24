const requestLibrary = require('./requestLibrary')
exports.createWallet = async (body) => {
  try{
    res = await requestLibrary.createWallet({'IdentityUUID':body.IdentityUUID,'WalletType':body.WalletType,'WalletName':body.WalletName})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully created Wallet & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at creating Wallet'}
  }
}
var getWallet = async (body) => {
  try{
    res = await requestLibrary.getWallet({'WalletUUID':body.WalletUUID})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully Wallet & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallet'}
  }
}

exports.deleteWallet = async (body) => {
  try{
  
      res = await getWallet({'WalletUUID':body.WalletUUID})
      if(!res.err && res.data){
        console.log(res.data)
        if(res.data.Balance == 0)
        {
          
          res = await requestLibrary.deleteWallet({'WalletUUID':body.WalletUUID})
          return{'err':null,'data':{'isEmpty':true,'WalletUUID':res.data.WalletUUID},'msg':'Successfully deleted Wallet'+res.msg}
        }
        return{'err':null,'data':{'isEmpty':false},'msg':'Wallet not empty& '+res.msg}
      }
      else
        return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err){
    return{'err':err,'data':null,'msg':'Code Failed at calling deleteWallet'}
  }
}



exports.getWallets = async (body) => {
  try{
    res = await requestLibrary.getWallets({'IdentityUUID':body.IdentityUUID})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully got Wallets & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWallets'}
  }
}
exports.getWalletHistorybyWalletUUID = async (body) => {
  try{
    res = await requestLibrary.getWalletHistorybyWalletUUID({'WalletUUID':body.WalletUUID})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully got WalletHistory by WalletUUID & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWalletHistorybyWalletUUID'}
  }
}
exports.getWalletHistorybyWalletUUIDAB = async (body) => {
  try{
    res = await requestLibrary.getWalletHistorybyWalletUUIDAB({'FromWalletUUID':body.FromWalletUUID,'ToWalletUUID':body.ToWalletUUID})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully got WalletHistory between Wallet (A,B) & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err)
  {
    return{'err':err,'data':null,'msg':'Code Failed at calling getWalletHistorybyWalletUUIDAB'}
  }
}
exports.transferTokens = async (body) => {
  try{
    res = await requestLibrary.transferTokens({'Amount':body.Amount,'FromWalletUUID':body.FromWalletUUID,'ToWalletUUID':body.ToWalletUUID,'ToWalletType':body.ToWalletType,'Note':body.Note,'ToUsername':body.ToUsername,'TransactionStatus':body.TransactionStatus,'TransactionType':body.TransactionType})
    if(!res.err)
      return{'err':null,'data':res.data,'msg':'Successfully transferred Tokens & '+res.msg}
    else
      return{'err':res.err,'data':null,'msg':res.msg}
  }
  catch(err){
      return{'err':err,'data':null,'msg':'Code Failed at calling transferTokens'}
  }
}


exports.getWallet = getWallet;
