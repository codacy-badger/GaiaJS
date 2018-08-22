#!/bin/sh

if [ -n "$TRAVIS_PULL_REQUEST_BRANCH" ]; then
    branch_name="$TRAVIS_PULL_REQUEST_BRANCH"
else
    branch_name="$TRAVIS_BRANCH"
fi

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_build_files() {
  git checkout ${branch_name}
  git add -f dist
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER [skip ci]"
}

upload_files() {
  git remote rm origin
  git remote add origin https://MiniXC:${GITHUB_TOKEN}@github.com/MiniXC/GaiaJS.git > /dev/null 2>&1
  git push --quiet --set-upstream origin ${branch_name}
}

setup_git
commit_build_files
upload_files
