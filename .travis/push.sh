#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_files() {
  git add .
  git commit -m "Travis build: $TRAVIS_BUILD_NUMBER" -m "[skip ci]"

}

upload_files() {
  git push --quiet
}

setup_git
commit_docs_files
upload_files
