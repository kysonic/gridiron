Gridiron.
========

Grid System Maker. Create own responsive grid system with custom columns count and custom sizes. 

##Getting started.

```
cd <gridiron example directory>
npm install
gulp
```

##Creating own grid system.

Open **bootstrap.less** file which is located in **./public/stylesheets/grid** folder. By default, his look like this:


```
/* Count of columns of your grid system */
@colsCount: 16; -- Count of your's future grid system columns.
/* Margins */
@marginLeft: 10; -- Margins
@marginRight: 10; -- 
/* Screen landscape */
@baseLandscape: 960; -- Standart screen width. Change this params on own, but his must be devide on colsCount without rest.
@unit: floor(@baseLandscape / @colsCount) - (@marginLeft+@marginRight);
/* Table Portrait landscape */
@tabletPortrait: 768; -- Standart tablet portrait width. Change this params on own, but his must be devide on colsCount without rest.
@tabletUnit: floor(@tabletPortrait / @colsCount) - (@marginLeft+@marginRight);
/* Mobiles is const */
@mobilePortraitWidth: 300; -- mobilePortrait.
@mobileLandscapeWidth: 420; -- mobileLandscape.
/* Name of columns classes */
@columnClassName: '.col'; -- You will change base column name of its own.
@offsetClassName: '.offset'; -- You will change base offset name of its own.
```

##Creating test HTML file for your grid.

```
cd <gridiron example directory>
node tpl name=test columns=16 screen=960 tablet=768 mobilePortrait=300 mobileLandscape=420
```
This manipulate create new HTML file in **./public/** directory. Open him. Remember - you can first configure bootstrap.less .

## Additional. Customize gridiron.

Also you can adding some styles in gridiron. 

Open a **gridiron.less** file and add something like this (in selected media query):

```
.makeStyle(~".b-container margin",margin-left,px,@unit,@colsCount - 1,baseColumn);
```
Result:
```
.b-container margin1 {
  margin-left: 40px
}
.b-container margin2 {
  margin-left: 60px
}
......
```
Аnd yet you can add a executor. Open a **maker.less** file and add something like this:

```
.mixin(yorExecutor;@index) {
  @tmp:(@var * @index)+25*(@index - 1);
}
```
And after you can use that in your makeStyle:

```
.makeStyle(~".b-container margin",margin-left,px,@unit,@colsCount - 1,yourExecutor);
```
