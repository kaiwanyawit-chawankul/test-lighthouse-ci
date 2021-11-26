module.exports = {
    ci: {
      collect: {
        url:[
          "https://localhost:7242/",
        ],
        //staticDistDir: "./publish",
        startServerCommand: "dotnet run --project src/test-lighthouse-ci.csproj --urls:https://localhost:5000 --no-build --verbosity normal",
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