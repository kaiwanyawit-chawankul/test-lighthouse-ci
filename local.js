module.exports = {
    ci: {
      collect: {
        url:[
          "https://localhost:5100/",
          "https://localhost:5100/counter",
          "https://localhost:5100/fetchdata"
        ],
        //staticDistDir: "./publish",
        startServerCommand: "dotnet run --project src/test-lighthouse-ci.csproj --urls https://localhost:5100",
        numberOfRuns: 1,
        startServerReadyTimeout: 90000,
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