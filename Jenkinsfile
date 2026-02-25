pipeline {
    agent any
    options {
        skipDefaultCheckout()
    }

    environment {
        FRONTEND_IMAGE = 'portfolio-frontend:latest'
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
                    sh 'docker build --no-cache -t $FRONTEND_IMAGE .'
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
