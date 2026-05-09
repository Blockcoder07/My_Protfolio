# =============================================================================
# StudentManagement.API — Production Dockerfile (multi-stage)
# Works on: Fly.io, Render.com, Railway, Koyeb, any container host
# Place at: backend/Dockerfile (in your StudentManagement repo)
# =============================================================================

# ---------- Stage 1: Build ----------
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy csproj files first for better Docker layer caching
COPY ["src/StudentManagement.API/StudentManagement.API.csproj",          "src/StudentManagement.API/"]
COPY ["src/StudentManagement.Application/StudentManagement.Application.csproj", "src/StudentManagement.Application/"]
COPY ["src/StudentManagement.Domain/StudentManagement.Domain.csproj",    "src/StudentManagement.Domain/"]
COPY ["src/StudentManagement.Infrastructure/StudentManagement.Infrastructure.csproj", "src/StudentManagement.Infrastructure/"]

RUN dotnet restore "src/StudentManagement.API/StudentManagement.API.csproj"

# Copy the rest of the source and publish
COPY . .
WORKDIR /src/src/StudentManagement.API
RUN dotnet publish "StudentManagement.API.csproj" \
    -c Release \
    -o /app/publish \
    --no-restore \
    /p:UseAppHost=false

# ---------- Stage 2: Runtime ----------
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# Non-root user for security
RUN useradd -m -u 1000 appuser && chown -R appuser:appuser /app
USER appuser

COPY --from=build --chown=appuser:appuser /app/publish .

ENV ASPNETCORE_URLS=http://+:8080 \
    ASPNETCORE_ENVIRONMENT=Production \
    DOTNET_RUNNING_IN_CONTAINER=true \
    DOTNET_PRINT_TELEMETRY_MESSAGE=false

EXPOSE 8080

ENTRYPOINT ["dotnet", "StudentManagement.API.dll"]
