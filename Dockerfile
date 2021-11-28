FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY . . 
RUN dotnet publish -c Release -o output

FROM nginx:apline
WORKDIR /usr/share/nginx/html
COPY --from=build-env /app/output/wwwroot .

# for blazor server
#FROM mcr.microsoft.com/dotnet/runtime:6.0
#WORKDIR /src
#COPY --from=build /src/output/wwwroot .
#ENTRYPOINT ["dotnet", "dotnetapp.dll"]
