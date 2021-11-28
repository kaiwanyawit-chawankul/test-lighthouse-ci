# test-lighthouse-ci


docker build --pull -t lhciblazor:wasm -f Dockerfile.wasm .
docker build --pull -t lhciblazor:blazor -f Dockerfile.blazor .
docker run -p 8080:80 --rm lhciblazor:wasm


lhci autorun --config ./local.js --collect.settings.chromeFlags="--no-sandbox"