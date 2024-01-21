/**
 * @module helloRoute
 */

const express = require('express');
// const validate = require('../../middlewares/validate');

// const accountController = require('../../controllers/account.controller');
const homeService  = require('../../services/hello.service');

const router = express.Router();


router
    .route('/getHome')
    .post(homeService.getHomeInfo)

// router
//     .route('/createAccount')
//     .post(userService.checkLoginValidity, validate(accountValidation.createNewAccount),accountController.createNewAccount)

// router
//     .route('/getAccountByAccountId')
//     .post(userService.checkLoginValidity, validate(accountValidation.getAccountsByAccountId),accountController.getAccountsByAccountId)
    
// router
//     .route('/deleteAccountByAccountId')
//     .post(userService.checkLoginValidity, validate(accountValidation.deleteAccount),accountController.deleteAccount)
    
// router
//     .route('/copyAccountByAccountId')
//     .post(userService.checkLoginValidity, validate(accountValidation.copyAccount),accountController.copyAccount)

// router
//     .route('/updateAccountByAccountId')
//     .post(userService.checkLoginValidity, validate(accountValidation.updateAccount),accountController.updateAccount)
    

module.exports = router;
