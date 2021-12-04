#! /bin/sh

git add .
read -p "input commit message: " msg
git commit -m "$msg"
git push origin main