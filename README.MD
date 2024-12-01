# Modern Node.js Backend Boilerplate

A production-ready Node.js backend boilerplate with Express, featuring robust error handling, security configurations, and best practices for scalable applications.

## 🚀 Features

- **Structured Project Layout**: Clean and scalable architecture
- **Security**: Pre-configured security middleware (Helmet, CORS)
- **Error Handling**: Global error handling and structured responses
- **Logging**: Advanced logging with Winston
- **Testing**: Jest setup for unit and integration tests
- **Code Quality**: ESLint and Prettier configuration
- **API Documentation**: Ready for Swagger/OpenAPI documentation
- **Environment Management**: Configured for multiple environments

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (if using MongoDB as database)

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/BintangDiLangit/nodejs_structure_template_be.git
cd nodejs_structure_template_be
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

4. Configure your `.env` file:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

## 🚀 Running the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

### Testing

```bash
npm test                 # Run all tests
npm run test:unit       # Run unit tests
npm run test:integration # Run integration tests
```

### Linting and Formatting

```bash
npm run lint     # Check code style
npm run lint:fix # Fix code style issues
npm run format   # Format code with Prettier
```

## 📁 Project Structure

```
project-root/
├── .github/
│   ├── workflow/
├── deployment/
│   ├── docker/
│   ├── kubernetes/
│   ├── scripts/
├── docs/
├── migrations/
├── scripts/
├── src/
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── middlewares/    # Custom middlewares
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── services/       # Business logic
│   ├── utils/          # Utility functions
│   └── app.js         # App entry point
├── tests/             # Test files
└── [Config files]     # Configuration files
```

## 🔒 Security Features

- Helmet.js for security headers
- CORS protection
- Rate limiting
- JWT authentication (ready to implement)
- Request validation
- Secure environment variables

## 🔄 API Endpoints

Base URL: `http://localhost:3000/api`

| Method | Endpoint | Description  |
| ------ | -------- | ------------ |
| GET    | /health  | Health check |
| POST   | /users   | Create user  |
| GET    | /users   | Get users    |

## 🛠️ Development

### Adding New Routes

1. Create a new route file in `src/routes`
2. Create corresponding controller in `src/controllers`
3. Add business logic in `src/services`
4. Register route in `src/routes/index.js`

### Error Handling

- Use the `asyncHandler` wrapper for async routes
- Throw errors with appropriate status codes
- Custom errors will be caught by global error handler

## 🚀 Deployment

### Docker Deployment

1. Build the Docker image:

```bash
docker build -t your-app-name -f deployment/docker/Dockerfile .
```

2. Run with Docker Compose:

```bash
docker-compose -f deployment/docker/docker-compose.yml up -d
```

### Kubernetes Deployment

1. Apply Kubernetes configurations:

```bash
kubectl apply -f deployment/kubernetes/configmap.yaml
kubectl apply -f deployment/kubernetes/deployment.yaml
kubectl apply -f deployment/kubernetes/service.yaml
kubectl apply -f deployment/kubernetes/ingress.yaml
```

### Cloud Platform Deployments

#### AWS Elastic Beanstalk

```bash
./deployment/scripts/deploy-aws.sh
```

#### Google Cloud Platform

```bash
./deployment/scripts/deploy-gcp.sh
```

#### Azure

```bash
./deployment/scripts/deploy-azure.sh
```

### CI/CD Pipeline

This project includes GitHub Actions workflows for:

- Continuous Integration (CI): Tests, linting, and security checks
- Continuous Deployment (CD): Automated deployment to staging/production

Configure the following secrets in your GitHub repository:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`
- `AWS_ACCESS_KEY`
- `AWS_SECRET_KEY`
- [Add other required secrets]

## 📦 Production Considerations

### Environment Variables

- Use production-grade secret management
- Configure environment-specific variables
- Use secure key vaults in production

### Monitoring

- Set up application monitoring
- Configure error tracking
- Implement health checks
- Set up logging aggregation

### Security

- Enable SSL/TLS
- Configure proper CORS settings
- Set up rate limiting
- Implement proper authentication

### Performance

- Configure caching
- Set up load balancing
- Implement database indexing
- Configure proper Node.js flags

## 📁 Deployment Structure

```
deployment/
├── docker/              # Docker configurations
├── kubernetes/          # Kubernetes manifests
└── scripts/            # Deployment scripts
```

### Docker Files

- `Dockerfile`: Multi-stage build for production
- `docker-compose.yml`: Services configuration
- `.dockerignore`: Files to exclude

### Kubernetes Manifests

- `deployment.yaml`: Pod deployment configuration
- `service.yaml`: Service configuration
- `ingress.yaml`: Ingress rules
- `configmap.yaml`: Environment variables

### CI/CD Files

- `.github/workflows/ci.yml`: Testing and validation
- `.github/workflows/cd.yml`: Automated deployment

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support, email bintangmfhd@gmail.com or open an issue on GitHub.
