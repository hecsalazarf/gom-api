pipeline {
  // Defining agent none at the top-level of the Pipeline ensures that an
  // Executor will not be assigned unnecessarily. Using agent none also forces
  // each stage section to contain its own agent section.
  agent none
  stages {
    stage('Build') {
      agent {
        docker {
          // When using Node based on Alpine, some additional packages are required
          // so that icon-genie can run. See https://github.com/imagemin/optipng-bin/issues/84
          // $ apk update && apk add pkgconfig autoconf automake libtool nasm build-base zlib-dev'
          image 'node:10.16.3-slim'
        }
      }
      steps {
        sh 'npm install'
        echo 'Dependencies installed'
        sh 'npm run prestart:prod'
        echo 'Build completed'
      }
    }
  }
}
