function topostclass() {
  window.location.assign('postclass.html');
}

function tonotes() {
  window.location.assign('notes.html');
}

function totakeclass() {
  window.location.assign('commpage.html');
}

function toalumni() {
  window.location.assign('Alumni.html');
}

function tohome() {
  window.location.assign('index.html');
}

//bot token
var telegram_bot_id = '6397359832:AAGjEEp8254nENpBelxxbvndltJOcoMu9rM';
//chat id
var chat_id = 1212458291;
var u_name, email, message;
var ready = function () {
  maincourse = document.getElementById('maincourse').value;
  branch = document.getElementById('branch').value;
  topic = document.getElementById('topic').value;
  date = document.getElementById('date').value;
  contact = document.getElementById('contactno').value;
  emailid = document.getElementById('emailid').value;
  message =
    'Course : ' +
    maincourse +
    '\nBranch : ' +
    branch +
    '\nTopic : ' +
    topic +
    '\nDate : ' +
    date +
    '\nContact : ' +
    contact +
    '\nEmail : ' +
    emailid;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  document.getElementById('maincourse').value = '';
  document.getElementById('branch').value = '';
  document.getElementById('topic').value = '';
  document.getElementById('date').value = '';
  document.getElementById('contactno').value = '';
  document.getElementById('emailid').value = '';

  return false;
};
