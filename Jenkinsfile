pipeline {
    agent any

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
                sh 'docker build -t $FRONTEND_IMAGE .'
            }
        }
        //Deploy
        stage('Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
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