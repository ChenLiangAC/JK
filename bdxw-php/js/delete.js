            function dodel(id) {
                if (confirm("确定要删除吗")) {
                    window.location = "action.php?action=del&userid=" + id;
                }
            }

            function deletenews(id) {
                if (confirm("确定要删除吗")) {
                    window.location = "newsaction.php?action=del&newsid=" + id;
                }
            }


