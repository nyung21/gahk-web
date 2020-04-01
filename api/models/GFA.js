/**
 * GFA.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    teamName: {
      type: "string"
    },

    receiptHeader: {
      type: "string"
    },

    address: {
      type: "string"
    },

    category: {
      type: "string"
    },

    havecname: {
      type: "string"
    },

    cpChiName: {
      type: "string"
    },

    cpEngName: {
      type: "string"
    },

    cpDayPhone: {
      type: "number"
    },

    cpMobilePhone: {
      type: "number"
    },

    email: {
      type: "string"
    },

    applicantNum: {
      type: "number"
    },

    crewNum: {
      type: "number"
    },

    checkNum: {
      type: "string"
    },

    bankName: {
      type: "string"
    },

    payStatus: {
      type: "string", //unpaid; paid (decided by admin)
    },

    formStatus: {
      type: "string", //ToBeCon; accepted(decided by admin)
    },

    idCode: {
      type: "string"
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

