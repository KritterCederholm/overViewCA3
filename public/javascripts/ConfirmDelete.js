window.cf.fn = window.cf.fn || {};
window.cf.fn.ConfirmDelete = function(element) {

    var confirmDeleteAct = element.getAttribute('x-confirmDeleteAct');

    if (window.cf.fn.ConfirmDelete[confirmDeleteAct]) {
        window.cf.fn.ConfirmDelete[confirmDeleteAct](element);
    }
}

window.cf.fn.ConfirmDelete.Show = function (element) {
    var obj = window.cf.gVar.json;
    var i = element.getAttribute('x-confirmDeleteid');
    jQuery(".modal-body").html(window.cn.ApllyTmpl(obj[i], "OrderView"));
    jQuery(".modal-body .OrderView__List").append(window.cn.ApllyTmpl(obj[i], "OrderView__ConfirmDelete"));
    jQuery(".modal-footer").html(window.cn.ApllyTmpl(obj[i], "OrderView__ConfirmDelete__footer"));

    jQuery(".modal").show();
}

window.cf.fn.ConfirmDelete.Close = function (element) {
    jQuery(".modal").hide();
}

window.cf.fn.ConfirmDelete.Confirm = function (element) {
    //AJAX


}