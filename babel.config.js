
//
//  babel.config.js
//
//  © 2020 Zoraja Consulting. All rights reserved but even though use it.
//

module.exports = {
    presets: [
        '@babel/env',
        '@babel/preset-react'
    ],
    plugins: [
        'babel-plugin-styled-components',
        [
            '@babel/plugin-proposal-class-properties',
            {
                loose: true,
            },
        ]
    ]
};
