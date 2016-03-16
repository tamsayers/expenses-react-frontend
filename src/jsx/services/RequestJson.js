const $ = require('jquery'),
      Q = require('q');

const RequestJson = {
  get(resource, params, authToken) {
    var deferred = Q.defer();
    $.ajax({
      url: resource,
      method: 'GET',
      headers: {
        Authentication: 'Bearer ' + authToken
      },
      data: params
    })
    .done(deferred.resolve)
    .fail(deferred.reject);

    return deferred.promise;
  },
  post(resource, data, authToken) {
    var deferred = Q.defer();
    $.ajax({
      url: resource,
      method: 'POST',
      headers: {
        Authentication: 'Bearer ' + authToken
      },
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
