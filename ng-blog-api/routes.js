'use strict';

module.exports = (app) => {
    app.use('/api/posts', require('./api/post'));
};