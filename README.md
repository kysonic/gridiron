Gridiron.
========

Grid System Maker. Create own grid system with custom columns count and custom sizes. 

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
Also you can adding some styles in gridiron. Example:

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
