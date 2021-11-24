const { F } = require('ramda');
const logic = require('../lib/logicLibrary')

exports.createWallet = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.createWallet(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}

exports.deleteWallet = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.deleteWallet(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.getWallet = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.deleteWallet(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.getWallets = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.getWallets(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.getWalletHistorybyWalletUUID = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.getWalletHistorybyWalletUUID(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.getWalletHistorybyWalletUUIDAB = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.getWalletHistorybyWalletUUIDAB(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.getWalletHistorybyTransUUID = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.getWalletHistorybyTransUUID(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
exports.transferTokens = async (req) => {
  var body = req.body; 
  console.log(body);
  result = await logic.transferTokens(body)
  if (!result.err)
    return{'err':null,'data':result.data,'msg':result.msg}
  else
    return{'err':result.err,'data':null,'msg':result.msg}
}
  