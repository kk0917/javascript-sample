// sample - ダメな例 ////////////////////////////////////////////////////////////////////////////////////////////////////
/*
window.alert('Hello'); // 1
$.ajax({
  url: 'doc/deferred.txt',
  success: function() {
    window.alert('テキスト取ってきた'); // 3
  }
})
window.alert('GoodBye'); // 2
*/
// sample by https://app.codegrid.net/entry/deferred-1 /////////////////////////////////////////////////////////////////

let doSomething = function() {
  let defer = $.Deferred();
  setTimeout(function() {
    defer.resolve(); // 解決
  }, 2000);
  return defer.promise(); // プロミスを作って返す
};

$(function() {
  $('#button').on('click', function() {
    let promise = doSomething();
    promise.done(function() {
      alert('成功しました');
    });
  });
});

// sample - 実例1 ///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var jobs = [];
var isDraft = false;
var jobsId = [];
var menuSequenceList = [];

getMenusDetailList(jobs).done(function(menusDetailList) {
  if (!isDraft && menusDetailList.length != jobs.length) {
    openConfirmDialog('@dialogId', 'message', _openAnserMessageModal(jobs, jobsId, menuSequenceList));
    return;
  } else {
    _openAnserMessageModal(jobs, jobsId, menuSequenceList);
    return;
  }
});
*/

/**
 * 案件メニュー情報の取得
 *
 * @@param   {array} jobs       - 案件リスト
 * @@returns {array} jobsDetail - メニュー（詳細）リスト
 */
/*
function getMenusDetailList(jobs) {
  var dfd        = $.Deferred();
  var ps         = [];
  var jobsDetail = [];

  _.each(jobs, function(job) {
    var p = ajaxJson({
      "path": "/master-api/menu/detail",
      "data": masterRequestData({
        "detail_target_head_id": job.menu_head_id,
        "detail_target_body_id": job.menu_body_id,
        "from_date": job.delivery_start_date.split(' ')[0],
        "to_date": job.delivery_end_date.split(' ')[0]
      }),
      "success": function (resp) {
        return resp.detail ? jobsDetail.push(resp.detail) : false;
      }
    })

    ps.push(p);
  });

  $.when.apply($, ps).done(function() {
    dfd.resolve(jobsDetail);
  })
  return dfd.promise();
}
*/