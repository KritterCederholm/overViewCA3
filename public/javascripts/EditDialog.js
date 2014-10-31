window.cf.fn = window.cf.fn || {};
window.cf.fn.EditDialog = function(element) {

    var editDialogAct = element.getAttribute('x-editDialogAct');

    if (window.cf.fn.EditDialog[editDialogAct]) {
        window.cf.fn.EditDialog[editDialogAct](element);
    }
}

window.cf.fn.EditDialog.Show = function (element) {
    var obj = window.cf.gVar.json;
    var i = element.getAttribute('x-editDialogId');
    jQuery(".modal-body").html(window.cn.ApllyTmpl(obj[i], "OrderView"));
    jQuery(".modal-body .OrderView__List").append(window.cn.ApllyTmpl(obj[i], "OrderView__EditDialog"));
    jQuery(".modal-footer").html(window.cn.ApllyTmpl(obj[i], "OrderView__EditDialog__footer"));

    jQuery(".modal").show();
}

window.cf.fn.EditDialog.Close = function (element) {
    jQuery(".modal").hide();
}

window.cf.fn.EditDialog.Save = function (element) {
    //GET DATA FROM ALL FIELDS AND AJAX
    var obj = window.cf.gVar.json;
    $.post()


}