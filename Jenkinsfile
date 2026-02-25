pipeline {
    agent any
    options {
        skipDefaultCheckout()
    }

    environment {
        FRONTEND_IMAGE = 'portfolio-frontend:latest'
        VITE_PORTFOLIO_PROJECTS_API_URL = 'https://portfolio-projects-api.wiktormalyska.ovh'
    }

    stages{
        stage('Download portfolio repository') {
            steps {
                git url: 'https://github.com/wiktormalyska/portfolio.git',
                    branch: 'master',
                    credentialsId: 'github-wiktormalyska'
            }
        }
        stage('Build frontend') {
            steps {
                dir ('frontend') {
                    sh 'docker build --no-cache --build-arg VITE_PORTFOLIO_PROJECTS_API_URL=$VITE_PORTFOLIO_PROJECTS_API_URL -t $FRONTEND_IMAGE .'
                }
            }
        }
        stage('Verify image') {
            steps {
                sh 'docker inspect $FRONTEND_IMAGE'
            }
        }
        //Deploy
        stage('Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
                sh 'sleep 5 && docker-compose ps'
            }
        }
    }
    //Always show logs
    post {
        always {
            script {
                sh 'docker-compose logs'
            }
        }
    }
}
