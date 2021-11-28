module.exports = {
    ci: {
      collect: {
        settings: { chromeFlags: '--no-sandbox' },
        url:[
          "https://localhost:8080/",
        ],
        numberOfRuns: 1,
      },
      assert: {
        preset: "lighthouse:recommended",
      },
      upload: {
        /* Add configuration here */
        target: 'filesystem',
        outputDir:'./lhci'
      },
    },
  };