module.exports = {
    ci: {
      collect: {
        url:[
          "https://localhost:7071",
          "http://localhost:5240"
        ],
        startServerCommand: "dotnet run",
        startServerReadyPattern: "Application started",
        numberOfRuns: 1
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