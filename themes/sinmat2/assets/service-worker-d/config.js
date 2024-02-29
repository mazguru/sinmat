{{- $defaultRivision := now.Unix  -}}
{{- $pages := slice -}}
{{- range $.Site.AllPages -}}
  {{- $revision := $defaultRivision -}}
  {{- with .File -}}
      {{- $revision = .UniqueID -}}
  {{- end -}}
  {{- $pages = $pages | append (dict "url" .Permalink "revision" $revision) -}}
{{- end -}}

{{- partial "helpers/read-dir" (dict "Path" "/static/fonts" "Scratch" $.Scratch) -}}
{{- partial "helpers/read-dir" (dict "Path" "/static/img" "Scratch" $.Scratch) -}}
{{- partial "helpers/read-dir" (dict "Path" "/static/images/logo" "Scratch" $.Scratch) -}}
{{- partial "helpers/read-dir" (dict "Path" "/static/images/icon" "Scratch" $.Scratch) -}}
{{- partial "helpers/read-dir" (dict "Path" "/static/images/favicons" "Scratch" $.Scratch) -}}

{{- range $.Site.Languages -}}
  {{- $pages = $pages | append (dict "url" "manifest.json" "revision" $defaultRivision)  -}}
{{- end -}}

const pages = JSON.parse('{{ $pages | jsonify }}');
const assets = JSON.parse('{{ $.Scratch.Get "bs-assets" | jsonify }}');
const multilingual = {{ if eq (len .Sites) 1 }}false{{ else }}true{{ end }};
const config = {
    version: {{ now.Unix }},
    multilingual: {{ if eq (len .Sites) 1 }}false{{ else }}true{{ end }},
    pages: pages,
    assets: assets
};
