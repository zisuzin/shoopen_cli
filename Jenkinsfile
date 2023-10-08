# 젠킨스파일 작성, 내용은 위와 동일하게 진행해도 되지만 이번에는 조건에 부합한 형태로 진행
vi Jenkinsfile

pipeline {
  agent { label 'jenkins-node' }
   
  triggers {
    pollSCM '* * * * *'
  }
  
  
  parameters {
    string defaultValue: 'ubuntu', name: 'TOMCAT_USER_ID'
    string defaultValue: '172.31.47.106', name: 'TOMCAT_IP'  
    string defaultValue: '/var/lib/tomcat9/webapps', name: 'TOMCAT_WEBAPP_DIR'
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/zisuzin/shoopen_cli.git'
      }
    }

    stage('Maven Build') {
      tools { maven 'Maven-3' }  # maven 툴 지정
      steps {
        sh 'mvn clean package'
      }
    }

    stage('Deploy to Tomcat') {
      steps {
        sh "scp $(env.WORKPASCE)/target/hello-world.war ${params.TOMCAT_LOGIN_USER}@${params.TOMCAT_IP}:${params.TOMCAT_WEBAPP_DIR}"
      }
    }
  }
}