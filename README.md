# git-recordando
Repasando los comandos de GIT

// iniciar el repo
git init 

// agregar los archivos al staging area
git add 'file'

// agregar todos al staging
git add .

// revisar en que estado se encuentran los archivos
git status

// revisar el esado de los cambios de manera resumida identificado por una letra o simbolos
git status -s

// revisar las diferencias de los archivos
git diff 'file'

// revertir los cambios de los archivos
git checkout -- 'file'
git restore 'file'

// restaurar los archivos que ya tienen el estado del staged
git restore --staged 'file'

// pasarlos del stagin area al repository
git commit

// para ver todos los commits que hemos creado
git log

git log --online

// subirlo al repositorio remoto
git push

// descargar cambios en el repositorio
git pull

// subir proyecto a mi nuevo repositorio remoto
git remote add origin
 
// hacer una copia de un repositorio remoto en tu equipo local
git clone

// consultar en que rama estoy
git branch

// crear rama
git branch namebranch

// cambiar de rama
git checkout namebranch
