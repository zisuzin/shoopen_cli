node {
  stage('========== Clone repository ==========') {
    checkout scm
  }
  stage('========== Build image ==========') {
    app = docker.build("jisujin/dockerdeploy")
  }
  stage('========== Push image ==========') {
    docker.withRegistry('https://registry.hub.docker.com', 'docker-access-token') {
      app.push("${env.BUILD_NUMBER}")
      app.push("latest")
    }
  }
}