//create SHA256 hash
var crypto = require('crypto');
var salt = crypto.randomBytes(128).toString('base64');
var hash = crypto.createHmac('sha256',salt).update('keith.stephens@bglgroup.co.uk').digest('base64');
console.log('Salt '  + salt);
console.log();
console.log('Hash ' + hash);
