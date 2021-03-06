'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.email = email;
exports.twitter = twitter;
exports.telegram = telegram;
exports.whatsapp = whatsapp;
exports.facebook = facebook;
exports.googlePlus = googlePlus;
exports.linkedin = linkedin;
exports.pinterest = pinterest;
exports.vk = vk;
exports.ok = ok;
exports.reddit = reddit;

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable prefer-template */
function email(subject, body) {
  (0, _assert2.default)(subject, 'email.subject');
  (0, _assert2.default)(body, 'email.body');

  return 'mailto:' + (0, _utils.objectToGetParams)({ subject: subject, body: body });
}

function twitter(url, _ref) {
  var title = _ref.title,
      via = _ref.via,
      _ref$hashtags = _ref.hashtags,
      hashtags = _ref$hashtags === undefined ? [] : _ref$hashtags;

  (0, _assert2.default)(url, 'twitter.url');
  (0, _assert2.default)(Array.isArray(hashtags), 'twitter.hashtags is not an array');

  return 'https://twitter.com/share' + (0, _utils.objectToGetParams)({
    url: url,
    text: title,
    via: via,
    hashtags: hashtags.join(',')
  });
}

function telegram(url, _ref2) {
  var title = _ref2.title;

  (0, _assert2.default)(url, 'telegram.url');
  return 'https://telegram.me/share/' + (0, _utils.objectToGetParams)({
    url: url,
    text: title
  });
}

function whatsapp(url, _ref3) {
  var title = _ref3.title,
      separator = _ref3.separator;

  (0, _assert2.default)(url, 'whatsapp.url');
  return 'whatsapp://send' + (0, _utils.objectToGetParams)({
    text: title + separator + url
  });
}

function facebook(url, _ref4) {
  var title = _ref4.title,
      description = _ref4.description,
      picture = _ref4.picture,
      hashtag = _ref4.hashtag;

  (0, _assert2.default)(url, 'facebook.url');

  return 'https://www.facebook.com/sharer/sharer.php' + (0, _utils.objectToGetParams)({
    u: url,
    title: title,
    description: description,
    picture: picture,
    hashtag: hashtag
  });
}

function googlePlus(url) {
  (0, _assert2.default)(url, 'googlePlus.url');

  return 'https://plus.google.com/share' + (0, _utils.objectToGetParams)({ url: url });
}

function linkedin(url, _ref5) {
  var title = _ref5.title,
      description = _ref5.description;

  (0, _assert2.default)(url, 'linkedin.url');

  return 'https://linkedin.com/shareArticle' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    summary: description
  });
}

function pinterest(url, _ref6) {
  var media = _ref6.media,
      description = _ref6.description;

  (0, _assert2.default)(url, 'pinterest.url');
  (0, _assert2.default)(media, 'pinterest.media');

  return 'https://pinterest.com/pin/create/button/' + (0, _utils.objectToGetParams)({
    url: url,
    media: media,
    description: description
  });
}

function vk(url, _ref7) {
  var title = _ref7.title,
      description = _ref7.description,
      image = _ref7.image;

  (0, _assert2.default)(url, 'vk.url');

  return 'https://vk.com/share.php' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    image: image
  });
}

function ok(url, _ref8) {
  var title = _ref8.title,
      description = _ref8.description,
      image = _ref8.image;

  (0, _assert2.default)(url, 'ok.url');

  return 'https://connect.ok.ru/offer' + (0, _utils.objectToGetParams)({
    url: url,
    title: title,
    description: description,
    imageUrl: image
  });
}

function reddit(url, _ref9) {
  var title = _ref9.title;

  (0, _assert2.default)(url, 'reddit.url');

  return 'https://www.reddit.com/submit' + (0, _utils.objectToGetParams)({
    url: url,
    title: title
  });
}