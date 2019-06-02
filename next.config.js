const withTypescript = require('@zeit/next-typescript');
const withSass = require("@zeit/next-sass");
const withImages = require('next-images');


module.exports = withTypescript(
    withImages(
        withSass()
    )
);
