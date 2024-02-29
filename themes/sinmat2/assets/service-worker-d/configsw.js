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

const asset = JSON.parse('{{ $.Scratch.Get "bs-assets" | jsonify }}');

const CACHE_VERSION = 1;

const BASE_CACHE_FILES = [
  {{ range $.Scratch.Get "bs-assets" }}
    I love {{ . }},
  {{ end }}
];


const OFFLINE_CACHE_FILES = [
    '/img/offline.svg',
];

const NOT_FOUND_CACHE_FILES = [
    
    '/404.html',
];

const OFFLINE_PAGE = '/offline/index.html';
const NOT_FOUND_PAGE = '/404.html';

const CACHE_VERSIONS = {
    assets: 'assets-v' + CACHE_VERSION,
    content: 'content-v' + CACHE_VERSION,
    offline: 'offline-v' + CACHE_VERSION,
    notFound: '404-v' + CACHE_VERSION,
};