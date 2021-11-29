# test-lighthouse-ci


docker build --pull -t lhciblazor:wasm -f Dockerfile.wasm .
docker build --pull -t lhciblazor:blazor -f Dockerfile.blazor .
docker run -p 8080:80 --rm lhciblazor:wasm
--cap-add=SYS_ADMIN

lhci autorun --config ./local.js --collect.settings.chromeFlags="--no-sandbox"


docker run --network --cap-add=SYS_ADMIN container:lhciblazor:wasm patrickhulce/lhci-client lhci collect --url="https://example.com"


docker container run --cap-add=SYS_ADMIN \
  -v "$(pwd)/lhci-data:/home/lhci/reports/.lighthouseci" \
  patrickhulce/lhci-client \
  lhci collect --url="https://example.com"


docker container run --cap-add=SYS_ADMIN container:lhciblazor:wasm patrickhulce/lhci-client lhci collect --url="https://localhost.8080"



docker run --network container:webapp-frontend patrickhulce/lhci-client lhci collect --url="https://localhost:8080" –-collect.settings.chromeFlags="--no-sandbox –-headless –-ignore-certificate-errors" || exit 1

docker run --network container:webapp-frontend patrickhulce/lhci-client lhci collect --url=https://localhost:8080 -n=1 --settings.chromeFlags="--no-sandbox --disable-dev-shm-usage"

docker run --network container:webapp-frontend edicom/lighthouse:latest lhci autorun -–upload.target="filesystem" -–upload.outputDir="./lhci" –-collect.url="https://localhost:8080" –-collect.settings.chromeFlags="--no-sandbox –-headless –-ignore-certificate-errors" || exit 1


docker run --network container:webapp-frontend patrickhulce/lhci-client lhci collect --url="https://example.com"

docker run --network container:webapp-frontend patrickhulce/lhci-client lhci autorun -–upload.target="filesystem" -–upload.outputDir="./lhci" –-collect.url="https://localhost:8080" –-collect.settings.chromeFlags="--no-sandbox –-headless –-ignore-certificate-errors" || exit 1


docker run --network container:webapp-frontend edicom/lighthouse:latest autorun –upload.target="lhci" –upload.token="$LHCI_TOKEN" –upload.serverBaseUrl="https://<url-lighthouse-server>" –collect.url="$URL" –collect.settings.chromeFlags="--no-sandbox – headless – ignore-certificate-errors" || exit 1


docker run --network container:webapp-frontend edicom/lighthouse:latest lhci collect --url=https://localhost:8080 -n=1 --settings.chromeFlags="--no-sandbox --disable-dev-shm-usage"


docker-compose up --abort-on-container-exit --exit-code-from lhci





