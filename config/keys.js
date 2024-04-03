// determine if we are in dev or prod first
if (process.env.NODE_ENV === 'production') {
    // prod keys
    module.exports = require('./prod');
} else {
    // dev keys
    module.exports = require('./dev');
}