const core = require('@actions/core');
const { GitHub, context } = require('@actions/github')

function getSha() {
    if (context.eventName == 'pull_request') {
        return context.payload.after;
    }

    return context.sha;
}

async function run() {
    try {
        console.log(JSON.stringify(context, null, 4));

        const token = core.getInput('github-token');
        
        const github = new GitHub(token)
        const response = await github.checks.listSuitesForRef({
            owner: context.repo.owner,
            repo: context.repo.repo,
            ref: getSha(),
            app_id: 15368
        });

        console.log(JSON.stringify(response, null, 4));

        core.exportVariable('CHECK_SUITE_ID', response.data.check_suites[0].id)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();