cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {

    },

    btnShowTips:function(){
        console.log(">>>> btnShowTips");
        wx.miniProgram.postMessage({ data: {foo: 'btnShowTips'} });
    },

    btnShowToast:function(){
        console.log(">>>> btnShowToast");
        wx.miniProgram.postMessage({ data: {foo: 'btnShowToast'} });
    },

});
