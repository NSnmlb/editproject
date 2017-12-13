appcan.button("#submit", "ani-act", function() {
            $("form").submit();
        })
        $("form").on('submit', function() {
            appcan.request.postForm($("form"), function() {
                appcan.window.alert({
                    title : "提醒",
                    content : "您已经提交了表单:)",
                    buttons : '确定',
                    callback : function(err, data, dataType, optId) {
                        console.log(err, data, dataType, optId);
                    }
                });
            },function(err){
            });
            return false;
        });