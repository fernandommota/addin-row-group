# addin-row-group
AddIn created for apply rowspan attribute in CTools datatable component.

<img src="https://raw.githubusercontent.com/fernandommota/addin-row-group/master/rowGroup.png" alt="Example of addin-row-group" title="addIn row-group" align="center" />


* **Instalation**
 - 1 - Insert a "JavaScript Function component". 
 - 2 - Insert the code of file rowGroup.js in this component.


* **Usage**
 
 ***Default***
 - In your table Component, insert the propertie "Column Types" the value 'rowGroup'. 
 - Insert the code below on "Post Execution Propertie".

   ```JavaScript
function removeStripedClass(){
  $('#'+this.htmlObject+' table').removeClass('table-striped');
} 
   ``` 
 - Change the properties of table component below to 'False'.
```JavaScript
    Paginate -	False
    Length Change -	False
    Show Filter -	False
    Info Filter -	False
    Sort Data -	False
```
