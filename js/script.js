function init() {
    //add your javascrip between these two lines of code
    function alert_me() {

        var input = document.getElementById("entryinput").nodeValue;
        var username = document.querySelector("h2.center").innerHTML;
        alert(username + ": " + input);

    }
    var alert_btn = document.getElementById('entrybutton');
    alert_btn.addEventListener('click', alert_me);

}

window.addEventListener('load', init);