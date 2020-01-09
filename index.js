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
        const token = core.getInput('github-token');

        const sha = getSha();

        const github = new GitHub(token)
        const response = await github.checks.listSuitesForRef({
            owner: context.repo.owner,
            repo: context.repo.repo,
            ref: sha,
            app_id: 15368
        });

        const checkSuiteId = response.data.check_suites[0].id;

        core.exportVariable('CHECK_SUITE_ID', checkSuiteId);
        core.exportVariable('CHECK_SUITE_URL', `https://github.com/${context.repo.owner}/${context.repo.repo}/commit/${sha}/checks?check_suite_id=${checkSuiteId}`);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();