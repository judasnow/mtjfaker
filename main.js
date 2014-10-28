;(function() {

var pathname = window.location.pathname;

if (pathname.match("overview")) {
    $("body").append(
        $("<script>").attr("src", "http://sp:8081/mtjfaker/overview.js")
        //$("<script>").attr("src", "http://vvcdn.qiniudn.com/m.js");
    );
}

if (pathname.match("dashboard")) {
    $("body").append(
        $("<script>").attr("src", "http://sp:8081/mtjfaker/dashboard.js")
        //$("<script>").attr("src", "http://vvcdn.qiniudn.com/m.js");
    );
}

})();


