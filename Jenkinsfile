pipeline {
  agent any

  environment {
    AWS_CREDENTIALS = 'aws-credentials'
    bucket = "dhesi-rock-paper-scissors"
    region = "eu-west-2"
    git_repo = "https://github.com/kyledhesi/rock-paper-scissors.git" 
  }
  
  stages {
    stage("checkout") {
      steps {
        git branch: 'main',
          url: git_repo
      }
    }
    stage("deploy") { 
      steps { 
        echo 'Deploying the application!' 
        
        withAWS(region:"${region}", credentials:"${AWS_CREDENTIALS}") {
            s3Upload(bucket:"${bucket}", path:'', includePathPattern:'**/*', workingDir:'', excludePathPattern:'**/*.txt')
        }
      }
    }
  }
}
