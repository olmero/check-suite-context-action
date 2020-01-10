<h3 align="center">GitHub Actions Check Suite Context</h3>

## Motivation
In case a check fails a reference to the reason might come in handy. This action sets the **CHECK_SUITE_URL** environment 
variable that points to the log of the check invoked.

## Example usage

```yaml
- name: Setup check-suite context
  uses: olmero/check-suite-context-action@master
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
```
