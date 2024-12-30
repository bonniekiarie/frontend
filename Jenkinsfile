
pipeline {
   
    agent any
    stages {
        stage ("Build"){
            steps {
                script {
                    echo "Hello Build..."
                    def utils = load 'test.groovy'
                    utils.build()
                }
               
            }
        }
        stage ("Test"){
            steps {
                echo "Testing..."
            }
        }
        stage ("Deploy"){
            steps {
                echo "Deploying..."
            }
        }
    }
}