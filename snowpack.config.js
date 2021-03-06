module.exports = {
    mount: {
      public: '/',
      src: '/_dist_',
    },
    plugins: [
      '@snowpack/plugin-svelte',
      '@snowpack/plugin-dotenv',
      '@snowpack/plugin-typescript',
      "@snowpack/plugin-babel",
      '@snowpack/plugin-sass',
      '@snowpack/plugin-optimize',
      [
        '@snowpack/plugin-run-script',
        {cmd: 'svelte-check --output human', watch: '$1 --watch', output: 'stream'},
      ],
    ],
    install: [
      /* ... */
    ],
    installOptions: {
      /* ... */
    },
    devOptions: {
      /* ... */
    },
    buildOptions: {
      /* ... */
    },
    proxy: {
      /* ... */
    },
    alias: {
      /* ... */
    },
  };