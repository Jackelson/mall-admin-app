const px2rem = require('postcss-px2rem');
module.exports = {
    css:{
        loaderOptions: {
            plugins:[
                px2rem({
                    remUnit:37.5
                })
            ]
        }
    }
}