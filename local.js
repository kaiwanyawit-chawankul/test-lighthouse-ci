module.exports = {
    ci: {
      collect: {
        url:[
          "https://localhost:8080/",
        ],
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