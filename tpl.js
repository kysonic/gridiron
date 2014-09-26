var fs = require('fs');
var path = require('path');
var args = [];

process.argv.forEach(function (val, index, array) {
    args.push(val);
});
var params = {};
var need = ['name','columns','screen','tablet','mobilePortrait','mobileLandscape'];
var k = 0;
args.forEach(function(item){
    var name = item.split('=')[0];
    var value = item.split('=')[1];
    params[name] = value;
    if(inArray(need,name)) k++;
});
if(need.length!=k) {
    console.log('Wrong parameters!');
    process.exit(1);
}
var body = '';
body+='<div class="b-container"><div class="b-row"><div class="columns col'+params['columns']+' one">Columns: '+params['columns']+'<br/>Screen: '+params['screen']+'px<br/>TabletPortrait: '+params['tablet']+'px<br/>MobilePortrait: '+params['mobilePortrait']+'px<br/>MobileLandscape: '+params['mobileLandscape']+'px</div></div>';

for(var i=1;i<=params['columns']-1;i++){
   body+='<div class="b-row"><div class="columns col'+i+' one">'+i+'</div><div class="columns col'+(params['columns']-i)+' one">'+(params['columns']-i)+'</div></div>';
}

body+='</div>';

copyTemplate('base.html','./public/'+params['name']+'.html',{body:body});

function inArray(array,value){
    var inArray = false;
    array.forEach(function (val, key) {
        if (val == value) inArray = true;
    });
    return inArray;
}

function  write(path, str, mode) {
    fs.writeFile(path, str, { mode: mode || 0666 });
    console.log('   \x1b[36mcreate\x1b[0m : ' + path);
}

function copyTemplate(from, to, figures) {
    from = path.join(__dirname, 'templates', from);
    var html = '';
    if (figures && figures != undefined) {
        var tpl = fs.readFileSync(from, 'utf-8').toString();
        html = execTpl(figures,tpl);
    } else {
        html = fs.readFileSync(from, 'utf-8').toString();
    }
    write(to, html);
};

function execTpl(figures,tpl) {
    var html = tpl;
    for (var key in figures) {
        if (figures[key]) {
            html = html.replace(new RegExp('{{' + key + '}}', 'ig'), figures[key]);
        }
        else {
            html = html.replace(new RegExp('{{' + key + '}}', 'ig'), '');
        }
    }
    return html;
};