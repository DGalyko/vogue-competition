import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: './assets/js/app.js',
        output: {
            file: './dist/js/app.min.js',
            format: 'iife'
        },
        plugins: [terser()]
    },
    {
        input: './assets/js/app-en.js',
        output: {
            file: './dist/js/app-en.min.js',
            format: 'iife'
        },
        plugins: [terser()]
    }
];
