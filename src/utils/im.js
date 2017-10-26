/**
 * Created by shishitengteng on 2017/10/26.
 */
/* eslint-disable */
import { url }from 'index'

const queryEntry = (uid, callback) => {
  var route = 'gate.gateHandler.queryEntry';
  console.log(pomelo);
  window.pomelo.init({
    host: url.pomeloServerAddress,
    port: 3014,
    log: true
  }, function () {
    window.pomelo.request(route, {
      uid: uid
    }, function (data) {
      window.pomelo.disconnect();
      if (data.code === 500) {
        console.error(data);
        return;
      }
      callback(data.host, data.port);
    });
  });
};

exports.login = (userName, callback = (err, result) => {}) => {
  queryEntry(userName, (host, port) => {
    window.pomelo.init({
      host: host,
      port: port,
      log: true
    }, function () {
      var route = "connector.entryHandler.enter";
      window.pomelo.request(route, {
        username: userName,
        rid: 'yuan'
      }, function (data) {
        if (data.error) {
          return callback(false, data.error);
        }
        callback(null, data);
      });
    });
  });
}


exports.send = (uid, target, msg) => {
  var route = "chat.chatHandler.send";
  window.pomelo.request(route, {
    rid: 'yuan',
    content: msg,
    from: uid,
    target: target
  }, function (data) {
    if (data.error) {
      return;
    }
  });
}

exports.sendGroup = (uid, target, msg) => {
  var route = "chat.chatHandler.sendGroup";
  window.pomelo.request(route, {
    rid: 'yuan',
    content: msg,
    from: uid,
    target: target
  }, function (data) {
    if (data.error) {
      return;
    }
  });
}
