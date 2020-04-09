library(
    identifier: 'pipeline-lib@4.3.4',
    retriever: modernSCM([$class: 'GitSCMSource',
                          remote: 'https://github.com/SmartColumbusOS/pipeline-lib',
                          credentialsId: 'jenkins-github-user'])
)

schedule = scos.changeset.isMaster ? 'H 14,18 * * *' : ''
properties([pipelineTriggers([cron(schedule)])])

node('infrastructure') {
    ansiColor('xterm') {
        scos.doCheckoutStage()

        stage('Test') {
            withCredentials([string(credentialsId: 'hex-read', variable: 'HEX_TOKEN'), [$class: 'AmazonWebServicesCredentialsBinding', credentialsId: 'aws_jenkins_user', variable: 'AWS_ACCESS_KEY_ID']]) {
                def statusCode = sh(script:'''
                    set -e
                    docker stop discoveryST || true && docker rm discoveryST || true
                    docker image build -t discoveryuismoketests:1.0 .
                    docker container run --name discoveryST --ipc=host discoveryuismoketests:1.0
                ''', returnStatus:true)
                sh('''
                    docker cp discoveryST:"/app/src/cypress/snapshots/discovery_ui" cypress/snapshots/
                    docker stop discoveryST || true && docker rm discoveryST || true
                ''')
                archiveArtifacts artifacts: 'cypress/snapshots/discovery_ui/**/*', allowEmptyArchive: true
                sh "exit $statusCode"
            }
        }
    }
}