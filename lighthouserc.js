module.exports = {
    ci: {
      collect: {
        url:[
          "https://localhost:PORT/",
          "https://localhost:PORT/counter",
          "https://localhost:PORT/fetchdata"
        ],
        //staticDistDir: "./publish",
        startServerCommand: "dotnet run --project src/test-lighthouse-ci.csproj --no-build --verbosity normal",
        numberOfRuns: 1,
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