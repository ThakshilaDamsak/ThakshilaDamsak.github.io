require 'git'

Jekyll::Hooks.register :site, :after_init do |site|
  git = Git.open('.')
  commit_message = git.log.first.message
  File.write('/_data/commit_message.yml', { 'message' => commit_message }.to_yaml)
end
