const $ = require('jquery'),
      Q = require('q');

const RequestJson = {
  get(resource, params) {
    var deferred = Q.defer();
    $.getJSON(resource, params)
     .done(deferred.resolve)
     .fail((jqxhr, textStatus, error) => {
       deferred.reject(jqxhr)
     });

    return deferred.promise;
  },
  post(resource, data) {
    var deferred = Q.defer();

    return deferred.promise;
  }
};

module.exports = RequestJson;
