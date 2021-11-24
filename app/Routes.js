
var utils = require('../common/utils');
var walletService = require('./walletService');
module.exports = (app, console) => {
    
    app.post('/createWallet',async (req, res) => {
        result  = await walletService.createWallet(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/deleteWallet',async (req, res) => {
        result  = await walletService.deleteWallet(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getWallets',async (req, res) => {
        result  = await walletService.getWallets(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getWallet',async (req, res) => {
        result  = await walletService.getWallet(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getWalletHistorybyWalletUUID',async (req, res) => {
        result  = await walletService.getWalletHistorybyWalletUUID(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/getWalletHistorybyWalletUUIDAB',async (req, res) => {
        result  = await walletService.getWalletHistorybyWalletUUIDAB(req);
        utils.handleresultdict(res,result)
       }
    )
    app.post('/transferTokens',async (req, res) => {
        result  = await walletService.transferTokens(req);
        utils.handleresultdict(res,result)
       }
    )



    
};
