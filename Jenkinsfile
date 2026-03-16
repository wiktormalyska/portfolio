pipeline {
    agent any

    options {
        skipDefaultCheckout()
        timestamps()
    }

    environment {
        FRONTEND_IMAGE = 'portfolio-frontend:latest'
        BACKEND_IMAGE = 'portfolio-backend:latest'
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/wiktormalyska/portfolio.git',
                    branch: 'master',
                    credentialsId: 'github-wiktormalyska'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE -f backend/Dockerfile backend'
                sh 'docker build -t $FRONTEND_IMAGE -f frontend/Dockerfile frontend'
            }
        }

        stage('Prepare Backend Env') {
            steps {
                withCredentials([
                    file(credentialsId: 'portfolio-backend-.env', variable: 'BACKEND_ENV_FILE')
                ]) {
                    sh 'cp "$BACKEND_ENV_FILE" backend/.env'
                    sh 'chmod 600 backend/.env'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker compose -f $COMPOSE_FILE down --remove-orphans || true'
                sh 'docker compose -f $COMPOSE_FILE up -d'
            }
        }
    }

    post {
        always {
            sh 'rm -f backend/.env || true'
            sh 'docker compose -f $COMPOSE_FILE ps || true'
            sh 'docker compose -f $COMPOSE_FILE logs --tail=200 || true'
        }
    }
}
