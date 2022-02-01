const crypto = require("crypto")
const md5 = require('md5')
addEventListener('fetch', event => {
const { request } = event
const { url } = request

if (url.includes("form")) {
  return event.respondWith(new Response(`The request was a form`))
}
if (request.method === "POST") {
  return event.respondWith(new Response(`The request was a POST`))
}
else if (request.method === "GET") {
  return event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
}
})

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
}

async function isEmpty(object) {  
  return Object.keys(user).length === 0
}


async function handleRequest(request) {
  
  request = new Request(request)

  let URLT = new URL(request.url);

  let id = URLT.searchParams.get("id");
  let query = URLT.searchParams.get("q");
  let pathname = URLT.pathname

  const Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };


  
  if(pathname == "/gen") {
    var node = 'sessions'
    var nodd = '?client_type=TN_ANDROID'
    var raw = "{\"app_version\":\"21.47.0.0\",\"os_version\":\"28\",\"password\":\"Default@123\",\"username\":\"nomi@oo.com\"}";

    var data = {
      contact_type: 2,
      contact_value: '+18563368371',
      from_name: '',
      message: 'tet',
      to_name: '18563368371'
    }
    return new Response(genSignature('POST', node, nodd+raw));
  } 

  if(pathname == "/mail") {
    const check = '';
    Email.send({
      Host: "smtp.gmail.com",
      Username: "sender@email_address.com",
      Password: "Enter your password",
      To: 'receiver@email_address.com',
      From: "sender@email_address.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    }).then((message) => {
      check = message;
      alert("Mail has been sent successfully")
    });
    return new Response(check);
  } 
  

}


function genSignature(method, node, query){
  return md5(('46a17d6bc7522777775fcd0be9fb0b28b5d12743d2ca860x3800c0100cdb893b' + method + node + query.slice(1, -1)).replace(/\\/ig, ''))
}
