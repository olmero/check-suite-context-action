const core = require('@actions/core');
const { GitHub, context } = require('@actions/github')

async function run() {
    try {
        console.log('token' + process.env.GITHUB_TOKEN);

        const github = new GitHub(process.env.GITHUB_TOKEN)
        const response = await github.checks.listSuitesForRef({
            owner: context.repo.owner,
            repo: context.repo.repo,
            ref: context.sha,
            app_id: 15368
        });

        console.log(JSON.stringify(response, null, 4));

        core.exportVariable('CHECK_SUITE_ID', response.data.check_suites[0].id)
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();