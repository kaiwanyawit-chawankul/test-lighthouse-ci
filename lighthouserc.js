module.exports = {
    ci: {
      collect: {
        url:[
          "http://127.0.0.1:4000",
        ],
        //staticDistDir: "./publish",
        startServerCommand: "http-server ./publish -p 4000 -g",
        numberOfRuns: 1,
        startServerReadyPattern: "Available on",
        startServerReadyTimeout: 90000,
      },
      assert: {
        preset: "lighthouse:recommended",
      },
      upload: {
        /* Add configuration here */
        target: 'lhci',
        serverBaseUrl: 'https://peaceful-earth-32428.herokuapp.com/',
        token: 'LHCI_TOKEN', // could also use LHCI_TOKEN variable instead
      },
    },
  };