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
      tools {
        maven name: 'Maven-3', type: 'hudson.tasks.Maven$MavenInstallation' 
      }
      steps {
        sh 'mvn clean package'
      }
    }

    stage('Deploy to Tomcat') {
      steps {
        sh "scp \${WORKSPACE}/target/hello-world.war ${params.TOMCAT_LOGIN_USER}@${params.TOMCAT_IP}:${params.TOMCAT_WEBAPP_DIR}"
      }
    }
  }
}