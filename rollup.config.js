export default [
    {
        input: 'src/blowson.js',
        output: [
            {
                file: 'dist/blowson.js',
                format: 'cjs'
            },
            {
                file: 'dist/blowson.umd.js',
                format: 'umd'
            },
            {
                file: 'dist/blowson.amd.js',
                format: 'amd'
            },
            {
                file: 'dist/blowson.esm.js',
                format: 'esm'
            },
            {
                file: 'dist/blowson.iife.js',
                format: 'iife'
            }
        ]
    }
];