npm run build

# переход в каталог сборки
cd hello-world

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Weenty/impromptu-social-network.git master:gh-pages

cd -
