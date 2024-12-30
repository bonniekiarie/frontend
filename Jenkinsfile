
def utils = load 'test.groovy'
pipeline {
   
    agent any
    stages {
        stage ("Build"){
            steps {
                script {
                    echo "Hello Build..."
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