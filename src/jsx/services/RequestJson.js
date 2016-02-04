const $ = require('jquery'),
      Q = require('q');

const RequestJson = {
  get(resource, params) {
    var deferred = Q.defer();
    $.getJSON(resource, params)
     .done(deferred.resolve)
     .fail(deferred.reject);

    return deferred.promise;
  },
  post(resource, data) {
    var deferred = Q.defer();
    $.ajax({
      url: resource,
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      dataType: 'json'
    })
    .done(deferred.resolve)
    .fail(deferred.reject);

    return deferred.promise;
  }
};

module.exports = RequestJson;
