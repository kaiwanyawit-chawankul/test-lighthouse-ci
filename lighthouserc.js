module.exports = {
    ci: {
      collect: {
        url:[
          "http://127.0.0.1:44379",
        ],
        startServerCommand: "dotnet run --project src/test-lighthouse-ci.csproj --urls https://localhost:44379",
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