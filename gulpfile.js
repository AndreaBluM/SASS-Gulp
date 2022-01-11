const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function css(done){
    src('src/scss/**/*.scss') //Indentificar el archivo .scss a compilar
        .pipe( sass() ) //Compilarlo
        .pipe( dest('build/css') )  //ALmacenarla en el disco duro
    done();
}

function dev(done){

    watch('src/scss/app.scss', css);

    done();
}
exports.css = css;
exports.dev = dev;