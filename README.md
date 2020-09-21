## Motivation
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Folmero%2Fcheck-suite-context-action.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Folmero%2Fcheck-suite-context-action?ref=badge_shield)

In case a check fails a reference to the reason might come in handy. This action sets the **CHECK_SUITE_URL** environment 
variable that points to the log of the check invoked.

## Example usage

```yaml
- name: Setup check-suite context
  uses: olmero/check-suite-context-action@master
  with:
    github-token: ${{ secrets.GITHUB_TOKEN }}
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Folmero%2Fcheck-suite-context-action.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Folmero%2Fcheck-suite-context-action?ref=badge_large)