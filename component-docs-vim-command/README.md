You can add the following to your .vimrc file and then navigate to the
component documentation pages by using the `:ComponentDocs` command.

```vim
command ComponentDocs :! fn=%:p:h && cn=$(echo $fn | sed -E "s/(.*)\/agent\/component\/(.*)/\2/" | sed -E "s/(.*)\/internal(.*)/\1/" | tr '/' '.') && open --new -a "Google Chrome" --args "https://grafana.com/docs/agent/next/flow/reference/components/$cn"
```
